import { Box, Stack } from '@chakra-ui/react';
import {
  RiContactsBookLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import { Categories } from './sections/Categories';
import { NavLink } from './sections/Links';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Categories title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsBookLine}>Usuários</NavLink>
        </Categories>
        <Categories title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </Categories>
      </Stack>
    </Box>
  );
}
