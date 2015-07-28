var Slack = require('node-slack'),
    Watcher = require('rss-watcher'),
    striptags = require('striptags'),
    slack = new Slack(process.env.GSN_SLACK_HOOK_URL),
    feed = process.env.GSN_GHOST_FEED_URL,
    watcher = new Watcher(feed);

watcher.on('new article', function(article){

  console.log("New Article:")
  console.log(article.title + " " + article.author + " " + article.link);

  slack.send({
    channel: process.env.GSN_SLACK_CHANNEL,
    text: "New blog post from " + article.author + ":",
    username: process.env.GSN_SLACK_USERNAME  ,
    icon_url: process.env.GSN_SLACK_ICON_URL,
    attachments: [
      {
        fallback: "New blog post from " + article.author + ": " + article.title + " " + article.link,
        title: article.title,
        title_link: article.link,
        text: striptags(article.summary),
        color: "#7CD197"
      }
    ]
  });

});

var interval = parseInt(process.env.GSN_POLL_INTERVAL) || 60;
console.log("Polling " + process.env.GSN_GHOST_FEED_URL + " every " + interval + " seconds");

watcher.set({
  interval: interval
});

watcher.run(function(error, articles){
  console.log("Error: " + error);
});
