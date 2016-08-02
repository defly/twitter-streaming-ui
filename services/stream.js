import Twit from 'twit';
import { ipcMain } from 'electron';

export default function runTwitterService() {
  let t = null;
  let stream = null;

  function stop(event) {
    stream.stop();
    t = null;
    stream = null;
    event.sender.send('stream:stopped', true);
    console.log("STOPPED", t, stream);
  }

  ipcMain.on('stream:start', (event, params) => {
    const { query, credentials } = params;
    console.log("IPC START");

    if (t !== null) {
      stop(event);
    }

    t = new Twit({
      consumer_key: credentials.consumerKey,
      consumer_secret: credentials.consumerSecret,
      access_token: credentials.accessToken,
      access_token_secret: credentials.accessTokenSecret,
      timeout_ms: 30 * 1000,  // optional HTTP request timeout to apply to all requests.
    });

    stream = t.stream('statuses/filter', { track: params.query });

    console.log("STREAM", query, t, stream);

    stream.on('tweet', (tweet) => {
      console.log(tweet.id_str);
      event.sender.send('stream:tweet', tweet);
    });

    stream.on('error', (err) => {
      console.error(err);
      event.sender.send('stream:error', err);
    });

    stream.on('disconnect', function (disconnectMessage) {
      console.log('disconnect', disconnectMessage)
    });
  });

  ipcMain.on('stream:stop', (event) => {
    stop(event);
  });
}
