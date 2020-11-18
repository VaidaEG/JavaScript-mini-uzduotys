//Ciklo for panaudojimas
//1. Suskaiciuoti ka gausime susumavus skaicius intervale tarp (imtinai):

// a. 0 - 0
const nuoa = 0;
const ikia = 0 ;

let suma = 0;

for (let i = nuoa; i <= ikia; i++) {
    suma = suma + i;
    //console.log(i, '=>', suma);
}
console.log(`Skaičių intervale tarp ${nuoa} ir ${ikia} suma yra ${suma}.`);

// b. 0 - 4
const nuob = 0;
const ikib = 4;

let sumb = 0;

for (let i = nuob; i <= ikib; i++) {
    sumb = sumb + i;
}
console.log(`Skaičių intervale tarp ${nuob} ir ${ikib} suma yra ${sumb}.`);

// c. 0 - 100
const nuoc = 0;
const ikic = 100;

let sumc = 0;

for (let i = nuoc; i <= ikic; i++) {
    sumc = sumc + i;
}
console.log(`Skaičių intervale tarp ${nuoc} ir ${ikic} suma yra ${sumc}.`);

// d. 574 - 815
const nuod = 574;
const ikid = 815;

let sumd = 0;

for (let i = nuod; i <= ikid; i++) {
    sumd = sumd + i;
}
console.log(`Skaičių intervale tarp ${nuod} ir ${ikid} suma yra ${sumd}.`);

// e. -50 - 50
const nuoe = -50;
const ikie = 50;

let sume = 0;

for (let i = nuoe; i <= ikie; i++) {
    sume = sume + i;
}
console.log(`Skaičių intervale tarp ${nuoe} ir ${ikie} suma yra ${sume}.`);

// f. -70 - 30
const nuof = -70;
const ikif = 30;

let sumf = 0;

for (let i = nuof; i <= ikif; i++) {
    sumf = sumf + i;
}
console.log(`Skaičių intervale tarp ${nuof} ir ${ikif} suma yra ${sumf}.`);

//jeigu pirmas intervalo skaicius butu mazesnis uz antraji:
    // nuo > iki
    // nuo < iki
if (nuoa < ikia) {
    for (let i = nuoa; i <= ikia; i++ ) {
        suma = suma + i;
    }
} else {
    for(let i = ikia; i <= nuoa; i++ ) {
        suma= suma + i;
    }
}
//2. Panaudojant cikla perrasyti tekstinio tipo kintamuju reiksmes is kito galo: "abcdef" -> "fedcba"
const text = 'abcdef';
let back = '';
for (let i = text.length - 1; i >= 0; i--) {
const letter = text[i];
back = back + letter;
console.log(i, letter);
}
//for (let i=0; i < text.length; i++) {
//     const letter = text[text.length - i -1];
//     back = back + letter;
// }
//for (let i=1; i <= text.length; i++) {
//     const letter = text[text.length - i];
//     back = back + letter;
// }
console.log(text, '->', back);
// jeigu saraso tipo kintamieji yra teksto tipo reiksmemis
const wordList = ['labas', 'rytas', 'Lietuva'];
/*
Einame per zodziu sarasa
    Pasiimu viena konkretu zodi
        pasiruosiu kintamaji naujam atvirkstiniam zodziui
        Einu per to zodzio raides
            pasiimu to zodzio raide
            pasidedu is priekio atvirkstiniam zodziui
        Atspaudinu atvr. zodi
*/
for (let w=0; w<wordList.length; w++ ) {
    const word = wordList[w];
    let backward = '';
    for (let r = 0; r < word.length; r++){
        const letter = word[r];
        backward = letter + backward;
    }
    console.log(backward);
}
// 3. Suskaiciuoti, kiek nurodytame intervale yra skaiciu, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai.
// a. 0 - 11
const nuo1 = 0;
const iki1 = 11;
const daliklis1 = 3;

let kiekis1 = 0;

// % - matematinis operatorius, dalybos liekana

for (let i = nuo1; i <= iki1; i++) {
    if (i % daliklis1 === 0){
        kiekis1++;
    }
}

console.log(`Skaičių intervale tarp ${nuo1} ir ${iki1}, besidalijančių be liekanos iš ${daliklis1} yra ${kiekis1} vienetai`);

const nuo2 = 8;
const iki2 = 31;
const daliklis2 = 3;

let kiekis2 = 0;

// % - matematinis operatorius, dalybos liekana

for (let i = nuo2; i <= iki2; i++) {
    if (i % daliklis2 === 0){
        kiekis2++;
    }
}

console.log(`Skaičių intervale tarp ${nuo2} ir ${iki2}, besidalijančių be liekanos iš ${daliklis2} yra ${kiekis2} vienetai`);
