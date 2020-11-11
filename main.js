// Kintamuju iniciavimas
// 1.
const skaicius1 = 50;
console.log(skaicius1);
const skaicius2 = 30;
console.log(skaicius2);
const skaicius3 = 10;
console.log(skaicius3);
// 2.
const tekstas1 = "Petras";
console.log(tekstas1);
const tekstas2 = "Jonas";
console.log(tekstas2);
const tekstas3 = "Antanas";
console.log(tekstas3);
// 3.
const oroTemperatura = [20, 18, 5, 16, -5];
console.log(oroTemperatura);
const akvilesPazymiai = [8, 10, 7, 10, 9];
console.log(akvilesPazymiai);
const zaidimoTaskai = [59, 18, 52, 49, 44];
console.log(zaidimoTaskai);
// 4.
const salys = ['Lietuva', 'Latvija', 'Estija', 'Lenkija', 'Ukraina'];
console.log(salys);
const geles = ['Tulpe', 'Gvazdikas', 'Roze', 'Narcizas', 'Rugiagele'];
console.log(geles);
const medziai = ['Liepa', 'Berzas', 'Klevas', 'Kastonas', 'Egle'];
console.log(medziai);
// Veiksmai su kintamaisiais
// 1. 
const skaiciuSuma = skaicius1 + skaicius2 + skaicius3;
console.log(skaiciuSuma);
//2.
const tektas = tekstas1 + ' ' + tekstas2 + ' ' + tekstas3;
console.log(tektas);
// 3.
let suma1 = 0;
suma1 = suma1 + oroTemperatura[0];
suma1 = suma1 - oroTemperatura[1];
suma1 = suma1 + oroTemperatura[2];
suma1 = suma1 - oroTemperatura[3];
suma1 = suma1 + oroTemperatura[4];
console.log(suma1);

let suma2 = 0;
suma2 = suma2 + akvilesPazymiai[0];
suma2 = suma2 + akvilesPazymiai[1];
suma2 = suma2 + akvilesPazymiai[2];
suma2 = suma2 + akvilesPazymiai[3];
suma2 = suma2 + akvilesPazymiai[4];
console.log(suma2);

let suma3 = 0;
suma3 = suma3 + zaidimoTaskai[0];
suma3 = suma3 + zaidimoTaskai[1];
suma3 = suma3 + zaidimoTaskai[2];
suma3 = suma3 + zaidimoTaskai[3];
suma3 = suma3 + zaidimoTaskai[4];
console.log(suma3);
// 4.
console.log(salys[4] + ', ' + salys[3] + ', ' + salys[2] + ', ' + salys[1] + ', ' + salys [0]);
console.log(geles[4] + ', ' + geles[3] + ', ' + geles[2] + ', ' + geles[1] + ', ' + geles[0]);
console.log(medziai[4] + ', ' + medziai[3] + ', ' + medziai[2] + ', ' + medziai[1] + ', ' + medziai[0]);