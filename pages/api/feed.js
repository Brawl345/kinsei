import absoluteUrl from 'next-absolute-url';

import { Builder } from 'xml2js';
import getFeedItems from '@/lib/getFeedItems';

async function get(req, res) {
  const { protocol, host } = absoluteUrl(req);

  const items = await getFeedItems();

  const feed = {
    rss: {
      $: {
        'version': '2.0',
        'xmlns:atom': 'http://www.w3.org/2005/Atom',
      },
      channel: {
        'title': 'kinsei',
        'link': `${protocol}//${host}`,
        'description': '金星 (kinsei) Feed-Aggregator',
        'lastBuildDate': items.length > 0 ? items[0].pubDate : null,
        'generator': 'kinsei',
        'docs': 'https://validator.w3.org/feed/docs/rss2.html',
        'image': {
          url: `${protocol}//${host}/logo.png`,
          link: `${protocol}//${host}`,
          description: 'kinsei',
          title: 'kinsei',
        },
        'atom:link': {
          $: {
            rel: 'self',
            href: `${protocol}//${host}/feed`,
            type: 'application/rss+xml',
          },
        },
        'item': items.map((item) => ({
          title: `${item.feedInfo.title}: ${item.title}`,
          guid: {
            $: {
              isPermaLink: false,
            },
            _: item.guid,
          },
          link: item.link,
          description: item['content:encoded']
            ? item['content:encoded']
            : item.content
            ? item.content
            : null,
          pubDate: item.pubDate,
        })),
      },
    },
  };

  const builder = new Builder();
  const xml = builder.buildObject(feed);

  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml);
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    return get(req, res);
  }
  return res.status(405).send();
}
