import { ipcRenderer } from 'electron';
import Rx from 'rx';

export function runDataSource(params, callback) {
  ipcRenderer.send('stream:start', params);

  if (!ipcRenderer.lockStream) {
    const source = Rx.Observable.create((observer) => {
      ipcRenderer.on('stream:tweet', (event, tweet) => {
        observer.onNext(tweet);
      });
      return () => console.log('disposed');
    });

    source
      .bufferWithTime(1000)
      .filter(b => b.length > 0)
      .subscribe(tweets => {
        callback(null, tweets);
      });


    ipcRenderer.on('stream:error', (event, err) => {
      console.error(err);
    });

    ipcRenderer.lockStream = true;
  }
}

export function stopDataSource() {
  ipcRenderer.send('stream:stop', true);
}
