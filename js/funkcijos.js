//Parasyti funkcijas, kurios atitinka pateiktus reikalavimus, jei ivykdo reikamus testus
// 1. Funkcija pavadinimu "tusciaFunkcija":
// a. nepriima jokiu kintamuju
// b. neatlieka jokios vidines logikos
// c. grazina boolean tipo reiksme "false"
// d. TESTAS: console.log(tusciaFunkcija()); rezultatas: false;
function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());
console.log(tusciaFunkcija(5));
console.log(tusciaFunkcija('asdsf'));
// 2. Funkcija pavadinimu "daugyba"
// a. priima du skaiciaus tipo kintamuosius
// b. atskirame kintamajame isimena sandaugos reiksme
// c. grazina sandaugos rezultata
// TESTAI: 
// console.log(daugyba(skaicius1, skaicius2));
// console.log(daugyba(skaicius3, skaicius2));
// console.log(daugyba(skaicius1, skaicius2));
// rezultatas: teisingos rfeiksmes;
/*
SKAICIAI:
- sveikieji
- desimtainiai
- teigiami/neigiami
- NaN
- Ifinity
*/
function daugyba(a, b) {
    // input validation
    // jeigu a nera skaicius, tai rodom kalida
    if (typeof a !== 'number') {
        console.log('ERROR: pirmoji reiksme ne skaiciaus tipo.');
        return false;
    }
    //if ('' + a === NaN) {
    if (isNaN(a)){
        console.log('ERRPR: pirmoji reiksme ne normalus skaicius.');
    }

    // jeigu b nera skaicius tai rodom klaida
    if (typeof b !== 'number') {
        console.log('ERROR: antroji reiksme ne skaiciaus tipo.');
        return false;
    }
    //if ('' + b === NaN) {
    if (isNaN(b)) {
        console.log('ERRPR: antroji reiksme ne normalus skaicius.');
    }
    //function logic
    const rez = a * b;
    //function rezult
    return rez;
}
console.log(daugyba(2, 2));
console.log(daugyba(2, 5));
console.log(daugyba(-2, 5));
console.log(daugyba(-2, -5));

console.log(daugyba(8, 'labas'));
console.log(daugyba('labas', 'ate'));
console.log(daugyba('labas', true));
console.log(daugyba(87, true));
console.log(daugyba(87, false));
console.log(daugyba(false, false));