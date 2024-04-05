
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
    return new Promise(
        (resolve) => {
            setTimeout(()=> {
                resolve('resolved');
            },2000);
        }
    )

};

const testSleep = async ()=>{
    console.log('start');
    await sleep();
    console.log('fin');

};

testSleep();

module.exports = {sleep};