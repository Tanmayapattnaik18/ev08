import { useCountries } from '../context/CountryContext';
import CountryCard from '../components/CountryCard';
import { SimpleGrid, Box, Select } from '@chakra-ui/react';
import { useState } from 'react';

const Home = () => {
    const { filteredCountries, setFilteredCountries, regions, loading } = useCountries();
    const [sortOrder, setSortOrder] = useState('');

    const handleSort = (e) => {
        const order = e.target.value;
        setSortOrder(order);
        let sortedCountries = [...filteredCountries];
        if (order === 'asc') {
            sortedCountries.sort((a, b) => a.population - b.population);
        } else if (order === 'desc') {
            sortedCountries.sort((a, b) => b.population - a.population);
        }
        setFilteredCountries(sortedCountries);
    };

    const handleFilter = (e) => {
        const region = e.target.value;
        if (region) {
            setFilteredCountries(countries.filter(country => country.region === region));
        } else {
            setFilteredCountries(countries);
        }
    };

    if (loading) {
        return <Box>Loading...</Box>;
    }

    return (
        <Box p="6">
            <Box display="flex" justifyContent="space-between" mb="4">
                <Select placeholder="Sort by Population" onChange={handleSort}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </Select>
                <Select placeholder="Filter by Region" onChange={handleFilter}>
                    {regions.map(region => (
                        <option key={region} value={region}>{region}</option>
                    ))}
                </Select>
            </Box>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing="8">
                {filteredCountries.map(country => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Home;
