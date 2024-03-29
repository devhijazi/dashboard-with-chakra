import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Hijazi Fraga Santos</Text>
          <Text textColor="gray.300" fontSize="small">
            hijazi.root@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Gabriel Hijazi"
        src="https://github.com/devhijazi.png"
      />
    </Flex>
  );
}
