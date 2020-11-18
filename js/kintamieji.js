// Kintamuju inicijavimas
// 1. Sukurti 3 kintamuosius su skaiciaus tipo reiksmemis. Po kiekvieno ju inicijavimo isvesti i console.
const skaicius1 = 50;
console.log(skaicius1);
const skaicius2 = 30;
console.log(skaicius2);
const skaicius3 = 10;
console.log(skaicius3);
// 2. Sukurti 3 kintamuosius su teksto tipo reiksmemis. Po kiekvieno ju inicijavimo isvesti i console. 
const tekstas1 = "Petras";
console.log(tekstas1);
const tekstas2 = "Jonas";
console.log(tekstas2);
const tekstas3 = "Antanas";
console.log(tekstas3);
// 3. Sukurti 3 saraso tipo kintamuosius su penkiomis skaiciu tipo reiksmemis. Po kiekvieno jų inicijavimo išvesti i console.
const oroTemperatura = [20, 18, 5, 16, -5];
console.log(oroTemperatura);
const akvilesPazymiai = [8, 10, 7, 10, 9];
console.log(akvilesPazymiai);
const zaidimoTaskai = [59, 18, 52, 49, 44];
console.log(zaidimoTaskai);
// 4. Sukurti 3 saraso tipo kintamuosius su penkiomis teksto tipo reiksmemis. Po kiekvieno ju inicijavimo isvesti i console.
const salys = ['Lietuva', 'Latvija', 'Estija', 'Lenkija', 'Ukraina'];
console.log(salys);
const geles = ['Tulpe', 'Gvazdikas', 'Roze', 'Narcizas', 'Rugiagele'];
console.log(geles);
const medziai = ['Liepa', 'Berzas', 'Klevas', 'Kastonas', 'Egle'];
console.log(medziai);
// Veiksmai su kintamaisiais
// 1. Susumuoti visus skaiciaus tipo kintamuosius. Rezultata isvesti i console.
const skaiciuSuma = skaicius1 + skaicius2 + skaicius3;
console.log(skaiciuSuma);
// 2. Sujungti visus teksto tipo kintamuosius taip, jpg tarp ju butu sudarytas tarpas. Rezultata isvesti i console.
const tektas = tekstas1 + ' ' + tekstas2 + ' ' + tekstas3;
console.log(tektas);
// 3. Apskaiciuoti verte is sarasu, kuriu verciu tipas yra skaiciai, pagal pateikta logika: 1-2+3-4+5. Rezultata isvesti i console.
let suma1 = 0;
suma1 = suma1 + oroTemperatura[0];
suma1 = suma1 - oroTemperatura[1];
suma1 = suma1 + oroTemperatura[2];
suma1 = suma1 - oroTemperatura[3];
suma1 = suma1 + oroTemperatura[4];
console.log(suma1);

let suma2 = 0;
suma2 = suma2 + akvilesPazymiai[0];
suma2 = suma2 - akvilesPazymiai[1];
suma2 = suma2 + akvilesPazymiai[2];
suma2 = suma2 - akvilesPazymiai[3];
suma2 = suma2 + akvilesPazymiai[4];
console.log(suma2);

let suma3 = 0;
suma3 = suma3 + zaidimoTaskai[0];
suma3 = suma3 - zaidimoTaskai[1];
suma3 = suma3 + zaidimoTaskai[2];
suma3 = suma3 - zaidimoTaskai[3];
suma3 = suma3 + zaidimoTaskai[4];
console.log(suma3);
// 4. Sujungti sarasu vertes, kuriu tipas yra tekstai, nuo saraso galo iki pradzios tip, jog tarp ju butu kablelis ir tarpas.
let visossalys = '';
visossalys = visossalys + salys[4];
visossalys = visossalys + ', ' + salys[3];
visossalys = visossalys + ', ' + salys [2];
visossalys = visossalys + ', ' + salys [1];
visossalys = visossalys + ', ' + salys [0];
console.log(visossalys);

let visosgeles = '';
visosgeles = visosgeles + geles [4];
visosgeles = visosgeles + ', ' + geles [3];
visosgeles = visosgeles + ', ' + geles [2];
visosgeles = visosgeles + ', ' + geles [1];
visosgeles = visosgeles + ', ' + geles [0];
console.log(visosgeles);

let visiMedziai = '';
visiMedziai = visiMedziai + medziai[4];
visiMedziai = visiMedziai + ', ' + medziai[3];
visiMedziai = visiMedziai + ', ' + medziai[2];
visiMedziai = visiMedziai + ', ' + medziai[1];
visiMedziai = visiMedziai + ', ' + medziai[0];
console.log(visiMedziai);
// Kintamuju palyginimas
// Lyginant, jei rezultatas tenkina palyginimo salyga, tai i console isvesti zodi "Pomidoras", o jei salyga nera tenkinama, isvesti sakinį "Bandykite dar kartą.". 
// 1. Tarpusavyje palyginti skaiciaus tipo kintamuosius:
const number1=10;
const number2=15;
// a. kuris didesnis
if (number1 > number2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
// b. kuris mazesnis
if (number1 < number2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
// c. ar jie lygus
if (number1 === number2) {
    console.log('Pomidoras')
} else {
    console.log('Bandykite kitą kartą.');
}
// d. ar jie nelygus 
if (number1 !== number2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą karta.');
}
// e. kuris didesnis arba lygus
if (number1 >= number2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
// f. kuris mazesnis arba lygus
if (number1 <= number2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
// 2. Isvesti teksto tipo kintamuju ilgius
const word1 = 'krokodilas';
console.log(word1.length);
const word2 = 'asara';
console.log(word2.length);
const word3 = 'JavaScript';
console.log(word3.length);
// 3. Tarpusavyje palyginti teksto tipo kintamuju ilgius
const zodis1 = 'krokodilas';
const zodis2 = 'asara';
// a. kuris didesnis
if (zodis1 > zodis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
// b. kuris mazesnis
if (zodis1 < zodis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
// c. ar jie lygus
if (zodis1 === zodis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
// d. ar jie nelygus
if (zodis1 !== zodis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
// e. kuris didesnis arba lygus
if (zodis1 >= zodis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
// f. kuris mazesnis arba lygus
if (zodis1 <= zodis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
// 4. Isvesti saraso tipo kintamuju ilgius
const array1 = ['labas', 'rytas', 'Lietuva'];
console.log(array1[0].length, array1[1].length, array1[2].length);
// 5. Tarpusavyje palyginti saraso tipo kintamųjų ilgius
//const array1 = ['labas', 'rytas', 'Lietuva'];
//f