import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            setCountries(response.data);
            setFilteredCountries(response.data);
            setRegions([...new Set(response.data.map(country => country.region))]);
            setLoading(false);
        };
        fetchCountries();
    }, []);

    return (
        <CountryContext.Provider value={{ countries, filteredCountries, setFilteredCountries, regions, loading }}>
            {children}
        </CountryContext.Provider>
    );
};

export const useCountries = () => useContext(CountryContext);
