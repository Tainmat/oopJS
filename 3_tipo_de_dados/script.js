let bike = {
    material: 'Aço',
    pecas: ['Quadro', 'Pneus', 'Guidão', 'Pneu', 'Freio'],
    isMontada: true,
    aro: 29,
};

console.log(bike);
console.log(bike.material);
console.log(bike.pecas[2]);
console.log(bike.pecas);

bike.pecas.forEach(peca => {
    console.log(peca);
});

console.log(
    !bike.isMontada
        ? 'Comprador precisa montar a Bike'
        : 'Comprador não precisa montar a bike',
);
