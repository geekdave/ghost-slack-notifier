# ghost-slack-notifier

Monitors a Ghost blog, and notifies a Slack channel when a new article is posted.

Useful when your blog is behind a corporate firewall, and therefore Slack can't use its normal RSS integration to check for updates.

## Installation

If you haven't already installed `forever`:

```
npm install -g forever
```

Then...

```
git clone git@github.com:geekdave/ghost-slack-notifier.git
cd ghost-slack-notifier
npm install
```

## Configuration

Set environment variables to match your setup:

```
export GSN_SLACK_HOOK_URL=https://hooks.slack.com/services/XXXXXXXXXXXXX
export GSN_SLACK_CHANNEL=#everything-is-awesome
export GSN_SLACK_USERNAME="Team BlogBot"
export GSN_GHOST_FEED_URL=http://blog.example.org/rss
export GSN_POLL_INTERVAL=30
export GSN_SLACK_ICON_URL=http://i.imgur.com/FgEJD9o.png
```

## Usage

Starting the server:

```
forever start server.js
```

Stopping the server:

```
forever stop server.js
```
