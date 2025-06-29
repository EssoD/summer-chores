const mowYard = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Essence mowed the yard');
    }, 2000);
    
});

const weedEat = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Essence weed-eated the yard');
    }, 1500);
    reject('Essence fell asleep after weeding the yard');

});
const trimHedges = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Essence trimmed the hedges');
    }, 1000);
    reject('Essence fell asleep after trimming the hedges');
});
const collectWood = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Essence collected wood');
    }, 2500);
    reject('Essence fell asleep after collecting wood');
});
const waterGarden = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Essence watered the garden');
    }, 500);
    reject('Essence fell asleep after watering the garden');

});

mowYard
.then((value) => {
    console.log(value);
    return weedEat;
})
.then((value) => {
    console.log(value);
    return trimHedges;
})
.then((value) => {
    console.log(value);
    return collectWood;
})
.then((value) => {
    console.log(value);
    return waterGarden;
})
.catch((error) => {
    console.error(error);
});