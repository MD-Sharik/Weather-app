const temperatureIcon = document.getElementById("temperatureicon")
const humid = document.getElementById("humid");
const inputsearch = document.getElementById("search");
const searchbtn = document.getElementById("smbtn");
const temprature = document.getElementById("temp");
const Wind = document.getElementById("wind");
const animation = document.getElementById("offanim");
const humidIcon = document.getElementById("humidicon")
const windIcon = document.getElementById("windicon")


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19acb71371mshab2a6900569a4ccp1c83d7jsn8250a7ed6f5a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const postData = (city)=>{

fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options).then(response=> response.json()).then(response=>{
	console.log(response);
	humid.innerText = response.humidity || "0"
	temprature.innerText = response.temp || "0"
	Wind.innerText = response.wind_speed|| "0"

	if(response.temp > 35){
		temperatureIcon.src = "https://img.icons8.com/3d-fluency/188/hot-face-1.png"
	}
	else if(response.temp >  24){
		temperatureIcon.src = "https://img.icons8.com/3d-fluency/118/melting-face-2.png"
	}
	else if(response.temp >  0){
		temperatureIcon.src = "https://img.icons8.com/3d-fluency/118/sneezing-face-1.png"
	}else if (response.temp != undefined){
		temperatureIcon.src = "https://img.icons8.com/3d-fluency/188/cold-face-1.png"
	}
	else temperatureIcon.src = "https://img.icons8.com/emoji/192/question-mark-emoji.png"
	
	if(response.humidity > 80){
		humidIcon.src = "https://img.icons8.com/emoji/96/water-wave.png"
	}
	
	else if(response.humidity > 30){
		humidIcon.src = "https://img.icons8.com/emoji/96/beach-with-umbrella.png"
	}

	if(response.wind_speed > 3){
		windIcon.src = "https://img.icons8.com/emoji/96/tornado-emoji.png"
	}else{
		windIcon.src = "https://img.icons8.com/3d-fluency/118/wind-turbine.png"
	}

	"https://img.icons8.com/emoji/96/tornado-emoji.png"
	
}).catch(err=>console.error(err))
}

animation.addEventListener("click",()=>{
	document.querySelectorAll(".animate-bounce").forEach((item)=>{
		if(item.style.animationPlayState == "paused"){
			animation.innerText = "Play" 
			item.style.animationPlayState = "running"
		}else{
			animation.innerText = "Pause"
			item.style.animationPlayState =	 "paused"
		}
	})
})

searchbtn.addEventListener("click",(e)=>{
	e.preventDefault();
	postData(inputsearch.value);

})



