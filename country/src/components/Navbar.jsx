import { Box, Button } from '@chakra-ui/react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="1rem"
            bg={theme === 'light' ? 'gray.100' : 'gray.900'}
            color={theme === 'light' ? 'black' : 'white'}
        >
            <Box fontSize="1.5rem">Country Finder</Box>
            <Button onClick={toggleTheme}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Button>
        </Box>
    );
};

export default Navbar;
