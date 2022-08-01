import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
      JIgo
      <Text as="span" ml="1" textColor="pink.500">
        .
      </Text>
    </Text>
  );
}
