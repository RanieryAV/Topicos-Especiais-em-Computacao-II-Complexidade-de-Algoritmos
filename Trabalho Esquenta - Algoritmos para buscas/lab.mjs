import measureComplexity from "./modules/measureIt.mjs";
import loadData from "./modules/loadData.mjs";

import binarySearch from "./src/binarySearch.mjs";
import cubicSearch from "./src/cubicSearch.mjs";
import {sequentialSearch_v1, sequentialSearch_v2} from "./src/sequentialSearch.mjs"
import quadraticSearch from "./src/quadraticSearch.mjs";
import ternarySearch from "./src/ternarySearch.mjs";

const sizeInstance = 100000000
const desiredValue=49999995
const note = `Busca binária no meio - instância de ${sizeInstance} não-ordenada - valor buscado '${desiredValue}'`

loadData(`Trabalho Esquenta - Algoritmos para buscas/data/ordered/${sizeInstance}.txt`).then(data =>{

    function algorithm(){
        //console.log("\n Busca Quadrática____________")
        //console.log("Value '"+ desiredValue + "' found at position: " + quadraticSearch(desiredValue, data))

        //console.log("\n Busca Cubica____________")
        //console.log("Value '"+ desiredValue + "' found at position: " + cubicSearch(desiredValue, data))

        console.log("\n Busca Binaria____________")
        console.log("Value '"+ desiredValue + "' found at position: " + binarySearch(desiredValue, data, 0, data.length))

        //console.log("\n Busca Sequencial____________")
        //console.log("Value '"+ desiredValue + "' found at position: " + sequentialSearch_v2(desiredValue, data))

        // console.log("\n Busca Ternaria____________")
        // console.log("Value '"+ desiredValue + "' found at position: " + ternarySearch(desiredValue, data))

    }

    measureComplexity(algorithm, 5, `${note}`)

});





