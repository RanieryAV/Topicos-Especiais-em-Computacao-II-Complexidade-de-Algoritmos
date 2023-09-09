export default function maxVal1(vet){
    let max = vet[0];
    for (let i = 1; i <vet.length; i++){
        if (vet[i] > max)
            max = vet[i];
    }
    return max;
}