import { FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const {manufacturer, year, model, limit, fuel} = filters;
    const headers = {
		'X-RapidAPI-Key': 'ebf3adc255mshe869dfd9bffec03p1d2261jsncc3573573998',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
    try {
        const response = await fetch(url,{headers: headers});
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
   
    
}