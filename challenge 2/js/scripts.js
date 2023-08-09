const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if ((hourOfDay !== undefined && minuteOfDay !== undefined) && (hourOfDay == '00') && (minuteOfDay == '00')) {   // hourOfDay/minuteOfDay opposit of defined
	const taxAsDecimal = (salary * parseInt(tax)) / 100                 // salary * tax / 100
    const startingAfterTax = salary * 1 - taxAsDecimal
	const balance = startingAfterTax - rent - food - transport 
    console.log('R', balance.toFixed(2))                                // R string toFixed number with  2 decimal
}