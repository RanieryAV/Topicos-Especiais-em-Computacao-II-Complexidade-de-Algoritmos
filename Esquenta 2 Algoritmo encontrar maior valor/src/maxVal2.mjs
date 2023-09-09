export default function maxVal2(vet, init, end) {
    let stack = [];
    stack.push({ init, end });
//A lógica de dividir para conquistar está mantida.
    while (stack.length > 0) {
        const { init, end } = stack.pop();
//Foi necessário trocar as chamadas recursivas por uma lógica
//equivalente usando pilha, devido ao limite de recursão do JS.
//(O limite é por volta de 10.000, dez mil, chamadas recursivas)
//O erro da recursão: "RangeError: Maximum call stack size exceeded"
        if (end - init <= 1) {
            return Math.max(vet[init], vet[end]);
        } else {
            let m = Math.floor((init + end) / 2);
            stack.push({ init, end: m });//Equivale a "int v1 = maxVal2(A,init,m);"
            stack.push({ init: m + 1, end });//Equivale a "int v2 = maxVal2(A,m+1,end);"
        }
    }
}
