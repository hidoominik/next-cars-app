
export function calculateRentalCostPerDay(gallonsPerMile: number, carYear: number): number {
    // Założenia dotyczące kosztów paliwa i opłat za wynajem auta na dobę
    const fuelCostPerGallon = 3.5; // Koszt galona paliwa
    const averageMilesPerDay = 50; // Przykładowa liczba przejechanych mil na dobę
    const rentalRatePerDay = 50; // Przykładowa opłata za wynajem auta na dobę
  
    // Kalkulacja przykładowego zużycia paliwa na dobę
    const fuelConsumptionPerDay = gallonsPerMile * averageMilesPerDay;
  
    // Kalkulacja przykładowego kosztu paliwa na dobę
    const fuelCostPerDay = fuelConsumptionPerDay * fuelCostPerGallon;
  
    // Dodanie opłaty za wynajem auta na dobę
    const totalCostPerDay = fuelCostPerDay + rentalRatePerDay;
  
    // Obniżenie kosztu o 10% dla samochodów starszych niż 10 lat
    if (carYear < new Date().getFullYear() - 10) {
      return Number((totalCostPerDay * 0.9).toFixed(2));
    }
  
    return Number(totalCostPerDay.toFixed(2));
  }
 
  export function convertMilePerGallonToLiterPerKilometer(mpg: number): number {
    if (mpg <= 0) {
        throw new Error('Miles per gallon must be greater than zero.');
      }
      const mileToKm = 1.609344; //1 mile == 1.609.. km
      const gallonToL = 3.78541178; //1 gallon = 3.78541170 l

      const litersPerKm = mpg * mileToKm / gallonToL; 
      return Number((100 * (1/litersPerKm)).toFixed(2));
    }
  
export const updateSearchParams = (type: string, value:string) => {
  const searchParams = new URLSearchParams(window.location.search);
   
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`
  return newPathname;
}