import { Content, Icon, Message } from 'react-bulma-components';
import Image from 'next/image';

const FEEDS = JSON.parse(process.env.NEXT_PUBLIC_FEEDS);

function Sidebar() {
  return (
    <>
      <Message color="info">
        <Message.Header>金星</Message.Header>
        <Message.Body>
          <Content>
            <p>
              金星 (kinsei) aggregiert verschiedene Blogs und stellt sie in
              einem kontinuierlichen Stream da.
            </p>
            <p>
              Der Name entstammt der früheren, eingestellten Planet-Software
              &quot;
              <a
                href="https://github.com/rubys/venus"
                target="_blank"
                rel="noreferrer noopener"
              >
                Venus
              </a>
              &quot;.
            </p>
          </Content>
        </Message.Body>
      </Message>

      <Message>
        <Message.Header>Feeds</Message.Header>
        <Message.Body>
          <Content>
            <ul style={{ marginTop: 0, marginLeft: '1rem' }}>
              {FEEDS.map((feed) => (
                <li key={feed.title}>
                  {feed.icon && (
                    <span className="icon-text mr-1">
                      <Icon>
                        <Image
                          unoptimized
                          src={feed.icon}
                          width={16}
                          height={16}
                        />
                      </Icon>
                    </span>
                  )}
                  <a href={feed.url} target="_blank" rel="noreferrer noopener">
                    {feed.title}
                  </a>
                </li>
              ))}
            </ul>
          </Content>
        </Message.Body>
      </Message>
    </>
  );
}

export default Sidebar;
