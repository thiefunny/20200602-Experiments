let insect = [];

function Insect(genus, species) {
    this.genus = genus;
    this.species = species;
}

Insect.prototype.info = function () {
    console.log(`genus: ${this.genus}, species: ${this.species}`);
}

Insect.prototype.counter = 11;

let insectSource = new Insect();

for (let i = 1; i < insectSource.counter; i++) {
    let random = Math.random();
    insect[i] = new Insect(random, random * random);
    console.log(i, insect[i])
}


// let insect1 = new Insect('fiki', 'miki');

insect[1].info();