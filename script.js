async function fetchData(url) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '801b5903ccmsh6ebc3d85899e63ep16f36fjsn0bd403b53580',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // Set informaiton according to the request
        document.querySelector('.city').innerText = result.location.name
        document.querySelector('.country').innerText = result.location.country
        document.querySelector('.weather_icon').src = result.current.condition.icon
        document.querySelector('.weather_temp').innerText = `${result.current.temp_c}ºC`
        document.querySelectorAll('.characteristic_number')[0].innerText = `${result.current.wind_kph}kph`
        document.querySelectorAll('.characteristic_number')[1].innerText = `${result.current.precip_mm}mm`
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function searchData() {
    const val = document.querySelector('input').value;
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${val}`
    fetchData(url);
    return val;
}

// By default, it will invoke the fetchData() method getting the weather information about Spain
document.querySelector('body').onload = fetchData("https://weatherapi-com.p.rapidapi.com/current.json?q=Spain");

document.querySelector('input').addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        if(searchData() != ""){
            searchData();
        }else{
            alert("The input field is required")
        }
        
    }
})

document.querySelector('.search_icon').addEventListener('click', () => {
    if(searchData() != ""){
        searchData();
    }else{
        alert("The input field is required")
    }
})