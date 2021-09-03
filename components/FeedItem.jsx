import PropTypes from 'prop-types';
import { Card, Content, Heading, Icon } from 'react-bulma-components';
import Image from 'next/image';

import dayjs from 'dayjs';
import 'dayjs/locale/de';
import DOMPurify from 'isomorphic-dompurify';

dayjs.locale('de');

function FeedItem({ item }) {
  const itemContent = item['content:encoded']
    ? item['content:encoded']
    : item.content
    ? item.content
    : '<i>Kein Inhalt</i>';

  return (
    <Card mb={5}>
      <Card.Header>
        <Card.Header.Icon>
          {item.feedInfo.image && (
            <Icon>
              <Image
                unoptimized
                src={item.feedInfo.image.url}
                width={48}
                height={48}
              />
            </Icon>
          )}
          {!item.feedInfo.image && (
            <Icon>
              <Image
                unoptimized
                src={`${item.feedInfo.link}/favicon.ico`}
                width={48}
                height={48}
              />
            </Icon>
          )}
        </Card.Header.Icon>
        <Card.Header.Title>
          <Heading size={4}>
            <a
              className="has-text-black"
              href={item.feedInfo.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.feedInfo.title}
            </a>{' '}
            -{' '}
            <a
              className="has-text-black"
              href={item.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.title ? item.title : 'Kein Titel'}
            </a>
          </Heading>
        </Card.Header.Title>
        <Card.Header.Icon>
          <time dateTime={item.isoDate}>
            {dayjs(item.isoDate).format('DD. MMMM YYYY')}
          </time>
        </Card.Header.Icon>
      </Card.Header>
      <Card.Content>
        <Content
          className="feed-content"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(itemContent) }}
        />
      </Card.Content>
    </Card>
  );
}

FeedItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedItem;
