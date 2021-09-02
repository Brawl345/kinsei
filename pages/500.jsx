import { Button, Container, Content, Heading } from 'react-bulma-components';
import Link from 'next/link';
import HtmlHead from '@/components/HtmlHead';

function Error500() {
  return (
    <Container>
      <HtmlHead pageTitle="Fehler 500" description="Interner Serverfehler" />

      <Heading size={1}>500 - Interner Serverfehler</Heading>
      <Content>Ein interner Serverfehler ist aufgetreten.</Content>

      <Link href="/" passHref>
        <Button color="primary">Zur Startseite</Button>
      </Link>
    </Container>
  );
}

export default Error500;
