import { Button, Container, Content, Heading } from 'react-bulma-components';
import Link from 'next/link';
import HtmlHead from '@/components/HtmlHead';

function Error404() {
  return (
    <Container>
      <HtmlHead pageTitle="Fehler 404" description="Seite nicht gefunden" />

      <Heading size={1}>404 - Seite nicht gefunden</Heading>
      <Content>Diese Seite wurde nicht gefunden.</Content>

      <Link href="/" passHref>
        <Button color="primary">Zur Startseite</Button>
      </Link>
    </Container>
  );
}

export default Error404;
