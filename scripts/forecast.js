// adding a api key to the variable
const key = "1e3QifSGL5MsIAaINbTT3y9TdCNRUjhz";

// get weather information
const getWeather =  async (id) => {

    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch (base + query);
    const data = await response.json();

    return data[0];

};

// get city information
const getCity = async (city) => {
    
    // getting resource link of city
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    // adding query 
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};
