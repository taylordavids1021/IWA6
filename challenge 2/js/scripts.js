const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if ((hourOfDay !== undefined && minuteOfDay !== undefined) && (hourOfDay == '00') && (minuteOfDay == '00')) {
	const taxAsDecimal = (salary * parseInt(tax)) / 100         
    const startingAfterTax = salary * 1 - taxAsDecimal
	const balance = startingAfterTax - rent - food - transport 
    console.log('R', balance.toFixed(2))
}