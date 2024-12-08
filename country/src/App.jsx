import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import Navbar from './components/Navbar';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { useTheme } from './context/ThemeContext';

function App() {
    const { theme } = useTheme();

    return (
        <ChakraProvider>
            <Box bg={theme === 'light' ? 'gray.50' : 'gray.800'} color={theme === 'light' ? 'black' : 'white'} minHeight="100vh">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:countryName" element={<CountryPage />} />
                    </Routes>
                </Router>
            </Box>
        </ChakraProvider>
    );
}

export default App;
