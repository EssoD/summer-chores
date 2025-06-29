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

async function performChores() {
    try {
        const task1 = await mowYard;
        console.log(task1);
        const task2 = await weedEat;
        console.log(task2);
        const task3 = await trimHedges;
        console.log(task3);
        const task4 = await collectWood;
        console.log(task4);
        const task5 = await waterGarden;
        console.log(task5);
    } catch (error) {
        console.error(error);
    }
}

performChores();
