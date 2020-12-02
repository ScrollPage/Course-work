import React from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';
import useSWR from 'swr';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, id }) => {
  const { data, error } = useSWR(`/api/setector/${id}/`);

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Detecotor info</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{data && JSON.stringify(data, null, 2)}</Text>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};
