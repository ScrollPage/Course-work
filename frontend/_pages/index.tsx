import { Layout } from '@/components/Layout';
import { show } from '@/store/actions/alert';
import { Button, Flex, Heading } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useDispatch } from 'react-redux';

const Index = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <Layout>
      <Flex
        minWidth="100vh"
        alignItems="center"
        justifyContent="center"
        height="80vh"
      >
        <Heading textAlign="center">{t('home:home-page')}</Heading>
        <Button
          onClick={() => dispatch(show('Ваш аккаунт подтвержден!', 'success'))}
        >
          Alert
        </Button>
      </Flex>
    </Layout>
  );
};

export default Index;
