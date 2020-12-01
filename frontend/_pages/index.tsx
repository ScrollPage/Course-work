import { Layout } from '@/components/Layout';
import { Flex, Heading } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Flex
        minWidth="100vh"
        alignItems="center"
        justifyContent="center"
        height="80vh"
      >
        <Heading textAlign="center">{t('home:home-page')}</Heading>
      </Flex>
    </Layout>
  );
};

export default Index;
