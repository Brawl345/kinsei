import Parser from 'rss-parser';

const FEEDS = JSON.parse(process.env.NEXT_PUBLIC_FEEDS);

export default async function getFeedItems() {
  const feeds = await Promise.allSettled(
    FEEDS.map((feed) => new Parser().parseURL(feed.url))
  ).then((results) =>
    results
      .filter((result) => result.status === 'fulfilled')
      .map((result) => result.value)
  );

  const items = [];
  feeds.forEach((feed) => {
    feed.items.forEach((item) => {
      item.feedInfo = {
        image: feed.image ? feed.image : null,
        title: feed.title,
        link: feed.link,
      };
      items.push(item);
    });
  });

  items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  return items;
}
