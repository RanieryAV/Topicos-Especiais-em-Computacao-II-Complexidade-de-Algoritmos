import measureComplexity from "./modules/measureIt.mjs";
import loadData from "./modules/loadData.mjs";
import { generateOrderedNumbers, generateUnorderedNumbers } from "./modules/dataGenerator.mjs"; 

import maxVal1 from "./src/maxVal1.mjs";
import maxVal2 from "./src/maxVal2.mjs";

const sizeInstance = 100000000
//const targetValue = 99999126
const iterations = 10
//const note = `Algoritmo_1_maxVal1_instância_${sizeInstance}_alvo_${targetValue}`
const note = `Algoritmo 2 maxVal2() instância ${sizeInstance} (não ordenado)`;

// loadData(`./data/data-for-search/ordered/${sizeInstance}.txt`).then(data =>{

//     function algorithm(){

//         // console.log("\n Busca Quadrática____________")
//         // console.log(quadraticSearch(targetValue, data))
 
//         // console.log("\n Busca Cubica____________")
//         // console.log(cubicSearch(targetValue, data))
 
//         // console.log("\n Busca Sequencial____________")
//         // console.log(sequentialSearch_v2(targetValue, data))
        
//         // console.log("\n Busca Binaria____________")
//         // console.log(binarySearch(targetValue, data, 0, data.length))

//         console.log("\n Busca Ternaria____________")
//         console.log(ternarySearch(targetValue, data))

//     }

//     measureComplexity(algorithm, iterations, `${note}`)

// });

const data = generateUnorderedNumbers(sizeInstance)
console.log(data)

function algorithm(){
    // console.log("\n Busca Quadrática____________")
    // console.log(quadraticSearch(targetValue, data))

    // console.log("\n Busca Cubica____________")
    // console.log(cubicSearch(targetValue, data))

    // console.log("\n Busca Sequencial____________")
    // console.log(sequentialSearch_v2(targetValue, data))
    
    // console.log("\n Busca Binaria____________")
    // console.log(binarySearch(targetValue, data, 0, data.length))

    console.log("\n maxVal2 - Encontrar o maior valor____________")
    console.log(`\nMaior valor da instância ${sizeInstance}: ` + maxVal2(data, 0, data.length - 1))

}

measureComplexity(algorithm, iterations, `${note}`)

