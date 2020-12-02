import { Detector } from '@/components/Detector';
import { Layout } from '@/components/Layout';
import { IDetector } from '@/types/detector';
import {
  Flex,
  Heading,
  Box,
  Button,
  Container,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useSWRInfinite } from 'swr';

const getKey = (pageIndex: number, previousPageData: IDetector[] | null) => {
  if (previousPageData && !previousPageData?.length) return null;
  return `/api/detector/?page=${pageIndex + 1}`;
};

const renderDetectors = (data: IDetector[][]) =>
  data.map((part) =>
    part.map((detector) => (
      <Detector
        key={detector.id}
        id={detector.id}
        x={detector.x}
        y={detector.y}
      />
    ))
  );

const renderSceleton = () => {
  return Array(20)
    .fill('')
    .map((_, index) => (
      <>
        <Box
          key={`sceleton__${index}`}
          w="230px"
          h="130px"
          padding="4"
          boxShadow="sm"
          bg="white"
          borderRadius={6}
          m="2"
        >
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={2} spacing="4" />
        </Box>
      </>
    ));
};

interface DataProps {}

const Data = ({}: DataProps) => {
  const { t } = useTranslation();

  const maxSize = 3;

  const { data, size, setSize, error } = useSWRInfinite<IDetector[]>(getKey);

  if (error) return <Box children="error" />;

  const sizeHandler = () => {
    if (size < maxSize) {
      setSize(size + 1);
    }
  };

  return (
    <Layout>
      <Flex w="full" justifyContent="center" py="10" flexDirection="column">
        <Heading textAlign="center">{t('data:data')}</Heading>
        <Box my="10">
          <Container maxW="lg" height="full">
            <Flex flexWrap="wrap" justifyContent="center">
              {!data && renderSceleton()}
              {data && renderDetectors(data)}
            </Flex>
          </Container>
        </Box>
        <Flex w="full" justifyContent="center">
          <Button
            w="200px"
            onClick={sizeHandler}
            colorScheme="purple"
            disabled={size >= maxSize}
          >
            load More
          </Button>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Data;
