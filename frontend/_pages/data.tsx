import { Layout } from '@/components/Layout';
import { Flex, Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';

interface DataProps {}

const Data = ({}: DataProps) => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
        height="80vh"
      >
        <Heading textAlign="center">{t('data:data')}</Heading>
      </Flex>
    </Layout>
  );
};

export default Data;

export const getServerSideProps: GetServerSideProps<DataProps> = async (
  ctx
) => {
  return {
    props: {},
  };
};
