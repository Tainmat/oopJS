let carro = {
    portas: 4,
    cor: 'Verde',
};

console.log(carro.portas);
console.log(carro['cor']);

let person = {
    name: 'Tainã',
    birthday: new Date('1991-06-02'),

    age() {
        return new Date().getFullYear() - this.birthday.getFullYear();
    },
};

console.log(person.age());
