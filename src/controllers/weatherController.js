
const axios = require('axios');
const { response } = require('express');

const getWeatherDetails = async (req, res) => {
    try {
        const { city } = req.query;
        const {apikey} = req.query;

        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(error);
    }
}


// write api to get only temperature of any city using axios not whole weather details so code will be like this


const getonlytemp = async (req, res) => {
    try {
        const { city } = req.query;
        const {apikey} = req.query;

        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        res.status(200).json(response.data.main.temp);  

    } catch (error) {
        res.status(500).json(error);
    }
}

// Sort the cities ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature result should look something like this [ {city:"London", temp: 280}, {city:"Moscow", temp: 290}, {city:"Bangalore", temp: 301.2}, ....... ]

const sortbytemp = async (req, res) => {
    try {
        const {apikey} = req.query;
        const cities = ["bengaluru","mumbai", "delhi", "kolkata", "chennai", "london", "moscow"];
        const temp = [];
        for (let i = 0; i < cities.length; i++) {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${apikey}`);
            temp.push({city: cities[i], temp: response.data.main.temp});

        }
        temp.sort((a, b) => a.temp - b.temp);  
        res.status(200).json(temp);
    } catch (error) {
        res.status(500).json(error);
    }
}
// how above api works is that it first creates an array of cities and then it creates an empty array of temp and then it loops through the cities array and for each city it makes an api call and then it pushes the city and its temperature in the temp array and then it sorts the temp array in ascending order and then it returns the temp array


module.exports = {getWeatherDetails,getonlytemp,sortbytemp}