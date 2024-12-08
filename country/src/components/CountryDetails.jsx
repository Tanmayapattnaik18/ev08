import { Box, Text, Badge } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useCountries } from '../context/CountryContext';

const CountryDetails = () => {
    const { countryName } = useParams();
    const { countries } = useCountries();
    const country = countries.find(c => c.name.common === countryName);

    if (!country) {
        return <Text>Country not found!</Text>;
    }

    return (
        <Box p="6">
            <Text fontSize="2xl" fontWeight="bold">{country.name.common}</Text>
            <Text>Native Name: {country.name.nativeName?.common || 'N/A'}</Text>
            <Text>Sub Region: {country.subregion}</Text>
            <Text>Currency: {Object.values(country.currencies || {}).map(c => c.name).join(', ')}</Text>
            <Text>Languages: {Object.values(country.languages || {}).join(', ')}</Text>
            <Text>Border Countries: {country.borders?.join(', ') || 'N/A'}</Text>
        </Box>
    );
};

export default CountryDetails;
