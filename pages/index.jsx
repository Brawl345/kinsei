import PropTypes from 'prop-types';
import { Columns, Container } from 'react-bulma-components';
import FeedItem from '@/components/FeedItem';
import Sidebar from '@/components/Sidebar';
import HtmlHead from '@/components/HtmlHead';
import getFeedItems from '@/lib/getFeedItems';

export async function getStaticProps() {
  const items = await getFeedItems();

  return {
    props: { items },
    revalidate: 60,
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
