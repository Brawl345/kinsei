import Parser from 'rss-parser';
import PropTypes from 'prop-types';
import { Columns, Container } from 'react-bulma-components';
import FeedItem from '@/components/FeedItem';
import Sidebar from '@/components/Sidebar';
import HtmlHead from '@/components/HtmlHead';

const FEEDS = JSON.parse(process.env.NEXT_PUBLIC_FEEDS);

export async function getStaticProps() {
  const parser = new Parser();

  const feeds = await Promise.allSettled(
    FEEDS.map((feed) => parser.parseURL(feed.url))
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

  return {
    props: { items },
    revalidate: 600, // re-generate every 10 minutes
  };
}

function HomePage({ items }) {
  return (
    <Container>
      <HtmlHead pageTitle="金星" description="金星 Feed-Aggregator" />

      <Columns>
        <Columns.Column>
          {items.map((item) => (
            <FeedItem key={item.link} item={item} />
          ))}
        </Columns.Column>
        <Columns.Column size="one-third">
          <Sidebar />
        </Columns.Column>
      </Columns>
    </Container>
  );
}

HomePage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomePage;
