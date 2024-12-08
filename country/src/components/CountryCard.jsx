import { Box, Image, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
    const { name, flags, population, region, capital } = country;

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
            <Image src={flags.svg} alt={`Flag of ${name.common}`} />
            <Text mt="2" fontWeight="bold" fontSize="xl">
                {name.common}
            </Text>
            <Text>Population: {population.toLocaleString()}</Text>
            <Text>Region: {region}</Text>
            <Text>Capital: {capital}</Text>
            <Link to={`/${name.common}`}>
                <Button mt="4" colorScheme="teal">
                    More details
                </Button>
            </Link>
        </Box>
    );
};

export default CountryCard;
