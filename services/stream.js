import Twit from 'twit';
import { ipcMain } from 'electron';

export default function runTwitterService() {
  let t = null;
  let stream = null;

  function stop() {
      stream.stop();
      t = null;
      stream = null;
  }

  ipcMain.on('stream:start', (event, params) => {
    const {query, credentials} = params;
    console.log("IPC START");

    if (t !== null) {
      stop();
    }

    t = new Twit({
      consumer_key: credentials.consumerKey,
      consumer_secret: credentials.consumerSecret,
      access_token: credentials.accessToken,
      access_token_secret: credentials.accessTokenSecret,
      timeout_ms: 3 * 1000,  // optional HTTP request timeout to apply to all requests.
    });

    stream = t.stream('statuses/filter', { track: params.query });

    console.log("STREAM", t, stream);

    stream.on('tweet', (tweet) => {
      // console.log(tweet);
      event.sender.send('stream:tweet', tweet);
    });

    stream.on('error', (err) => {
      console.error(err);
      event.sender.send('stream:error', err);
    });
  });

  ipcMain.on('stream:stop', () => {
    stop();
  });
}
