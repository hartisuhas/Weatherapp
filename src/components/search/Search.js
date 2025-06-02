import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEOCODING_API_URL, WEATHER_API_KEY } from '../../api';

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) => {
        if (!inputValue) {
            return Promise.resolve({ options: [] });
        }

        console.log("Searching for:", inputValue);
        
        return fetch(
            `${GEOCODING_API_URL}/direct?q=${inputValue}&limit=10&appid=${WEATHER_API_KEY}`
        )
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((response) => {
            console.log("Search results:", response);
            if (!Array.isArray(response)) {
                console.error("Invalid response format:", response);
                return { options: [] };
            }
            
            return {
                options: response.map((city) => {
                    return {
                        value: `${city.lat} ${city.lon}`,
                        label: `${city.name}, ${city.country}`
                    }
                })
            }
        })
        .catch(err => {
            console.error("Search error:", err);
            return { options: [] };
        });
    }

    const handleOnChange = (searchData) => {
        console.log("Selected city:", searchData);
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            className="search-container"
        />
    );
}

export default Search