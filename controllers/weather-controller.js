// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// https://maps.googleapis.com/maps/api/geocode/json?=
var axios = require('axios')
// middleware
function lowerCaseQuery(req, res, next){
  var query = req.query.address
  console.log(query)
  req.query.address = query.toLowerCase();
  next();
}
function getWeather (req, res){
  console.log(req.query)
  axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {
    params: {
      address: req.query,
    }
  })
  .then(function(response){
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var key = process.env.API_KEY;
    console.log("Responded");
    return axios.get(`https://api.darksky.net/forecast/${key}/${lat},${lng}`)
    .then(function(response){
      console.log("weather response: ")
      console.log(response.data.currently.temperature)
      console.log(response.data.hourly.data)
      res.json(response.data)
    })
    .catch(function(error){
      console.log(error)
    })
  })
}
module.exports = {getWeather, lowerCaseQuery};