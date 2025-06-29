function mowYard(callback){
    setTimeout(() => {
        console.log("Essence mowed the yard");
        callback();
    }, 2000);
}
function weedEat(callback){
    setTimeout(() => {
        console.log("Essence weed-eated the yard");
        callback();
    }, 1500);
}
function trimHedges(callback){
    setTimeout(() => {
        console.log("Essence trimmed the hedges");
        callback();
    }, 1000);
}
function collectWood(callback){
    setTimeout(() => {
        console.log("Essence collected wood");
        callback();
    }, 2500);
}
function waterGarden(callback){
    setTimeout(() => {
        console.log("Essence watered the garden");
        callback();
    }, 500);
}

function doSummerChores(callback){
    mowYard(() => {
        weedEat(() => {
            trimHedges(() => {
                collectWood(() => {
                    waterGarden(() => {
                        callback();
                    });
                });
            });
        });
    });
}

