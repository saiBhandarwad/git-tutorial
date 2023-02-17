const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "79c6b4dd17msh99173bc8048d9b6p1aba9bjsn473741998611",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
  }
};
const getWeather=(city)=>{
	cityName.innerHTML=city
	
	fetch(
		'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			
			cloud_pct.innerHTML=response.cloud_pct 
			temp.innerHTML=response.temp 
			humidity.innerHTML=response.humidity 
			min_temp.innerHTML=response.min_temp 
			max_temp.innerHTML=response.max_temp 
			wind_speed.innerHTML=response.wind_speed 
			wind_degrees.innerHTML=response.wind_degrees 
			sunrise.innerHTML=new Date(response.sunrise).toLocaleTimeString()
			sunset.innerHTML=new Date(response.sunset).toLocaleTimeString()
			bigtemp.innerHTML=response.temp
			wind.innerHTML=response.wind_speed
			ihumidity.innerHTML=response.humidity 
		})
		.catch((err) => console.error(err));
		
	}
	
	const sai=document.getElementById('sai')
	iSubmit.addEventListener("click",(e)=>{
		e.preventDefault()
		getWeather(city.value) 
	})
	getWeather('Delhi')
	
// const topWeather=(city)=>{	
// 	fetch(
// 		'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
// 		.then((response) => response.json())
// 		.then((response) => {
// 			console.log(response);
			
// 			delhi1.innerHTML=response.cloud_pct 
// 			delhi2.innerHTML=response.temp 
// 			delhi3.innerHTML=response.humidity 
// 			delhi4.innerHTML=response.min_temp 
// 			delhi5.innerHTML=response.max_temp 
// 			delhi6.innerHTML=response.wind_speed 
// 			delhi7.innerHTML=response.wind_degrees 
// 			delhi8.innerHTML=new Date(response.sunrise).toLocaleTimeString()
// 			delhi9.innerHTML=new Date(response.sunset).toLocaleTimeString()
		
// 		})
// 		.catch((err) => console.error(err));
		
// 	}
	

// 	topWeather('Delhi')
	
	
