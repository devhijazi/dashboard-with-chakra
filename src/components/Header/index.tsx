import { Flex } from '@chakra-ui/react';

import { Logo } from './atoms/Logo';
import { Notification } from './atoms/Notification';
import { Profile } from './atoms/Profile';
import { Search } from './atoms/Searchbox';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      <Search />

      <Flex align="center" ml="auto">
        <Notification />
        <Profile />
      </Flex>
    </Flex>
  );
}
