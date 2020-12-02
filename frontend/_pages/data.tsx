import DetecotorSceleton from '@/components/DetecotorSceleton';
import { Detector } from '@/components/Detector';
import { Layout } from '@/components/Layout';
import { Modal } from '@/components/Modal';
import { IDetector } from '@/types/detector';
import {
  Flex,
  Heading,
  Box,
  Button,
  Container,
  useDisclosure,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { useSWRInfinite } from 'swr';

const getKey = (pageIndex: number, previousPageData: IDetector[] | null) => {
  if (previousPageData && !previousPageData?.length) return null;
  return `/api/detector/?page=${pageIndex + 1}`;
};

const renderDetectors = (data: IDetector[][], onOpen: (id: number) => void) =>
  data.map((part) =>
    part.map((detector) => (
      <Detector
        onOpen={onOpen}
        key={detector.id}
        id={detector.id}
        x={detector.x}
        y={detector.y}
      />
    ))
  );

const renderSceletons = () => {
  return Array(20)
    .fill('')
    .map((_, index) => <DetecotorSceleton key={`sceleton__${index}`} />);
};

interface DataProps {}

const Data = ({}: DataProps) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [detectorId, setDetectorId] = useState<number | null>(null);

  const maxSize = 3;

  const { data, size, setSize, error } = useSWRInfinite<IDetector[]>(getKey);

  if (error) return <Box children="error" />;

  const sizeHandler = () => {
    if (size < maxSize) {
      setSize(size + 1);
    }
  };

  const onOpenHanlder = (id: number) => {
    setDetectorId(id);
    onOpen();
  };

  return (
    <>
      <Layout>
        <Flex w="full" justifyContent="center" py="10" flexDirection="column">
          <Heading textAlign="center">{t('data:data')}</Heading>
          <Box my="10">
            <Container maxW="lg" height="full">
              <Flex flexWrap="wrap" justifyContent="center">
                {!data && renderSceletons()}
                {data && renderDetectors(data, onOpenHanlder)}
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
              {t('data:load-more')}
            </Button>
          </Flex>
        </Flex>
      </Layout>
      <Modal isOpen={isOpen} onClose={onClose} id={detectorId} />
    </>
  );
};

export default Data;
