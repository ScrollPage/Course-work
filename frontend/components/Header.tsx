import {
  Flex,
  Heading,
  Link as ChakraLink,
  Box,
  Container,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { DarkModeSwitch } from './DarkModeSwitch';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useColor } from '@/hooks/useColor';

export const Header = () => {
  const { t } = useTranslation();
  const { pathname } = useRouter();
  const { bg, cl } = useColor();

  return (
    <Box
      w="full"
      borderBottomWidth={1}
      boxShadow="lg"
      position="fixed"
      zIndex="2"
    >
      <Box bg="#000" py="2">
        <Container maxW="xl" height="full">
          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <Image src="/logo.svg" alt="Logo" width={29} height={29} />
              <Text ml="2" color="white">
                {t('common:s-superiority')}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Box mr="2" pt="1" cursor="pointer">
                <Link href={pathname ? pathname : '/'} locale="ru">
                  <Image
                    src="/russia.svg"
                    alt="Russia"
                    width={25}
                    height={25}
                  />
                </Link>
              </Box>
              <Box pt="1" cursor="pointer">
                <Link href={pathname ? pathname : '/'} locale="en">
                  <Image
                    src="/united-states.svg"
                    alt="USA"
                    width={25}
                    height={25}
                  />
                </Link>
              </Box>
            </Flex>
            <Text color="white">{t('common:all-right-reserved')} &#10004;</Text>
          </Flex>
        </Container>
      </Box>
      <Box bg={bg} color={cl}>
        <Container maxW="xl" height="full">
          <Flex flexDirection="row" justifyContent="space-between" py="5">
            <Box>
              <Link href="/">
                <ChakraLink>
                  <Heading size="md">{t('common:home')}</Heading>
                </ChakraLink>
              </Link>
            </Box>
            <Flex>
              <Link href="/register">
                <ChakraLink>
                  <Heading size="md" mr="5">
                    {t('common:sign-up')}
                  </Heading>
                </ChakraLink>
              </Link>
              <Link href="/login">
                <ChakraLink>
                  <Heading size="md">{t('common:log-in')}</Heading>
                </ChakraLink>
              </Link>
              <Box ml="5">
                <DarkModeSwitch />
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
