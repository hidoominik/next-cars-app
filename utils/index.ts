export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': 'ebf3adc255mshe869dfd9bffec03p1d2261jsncc3573573998',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    try {
        const response = await fetch(url,{headers: headers});
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
   
    
}