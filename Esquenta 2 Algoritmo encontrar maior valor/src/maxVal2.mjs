export default function maxVal2(vet, init, end) {
    let stack = [];
    stack.push({ init, end });

    while (stack.length > 0) {
        const { init, end } = stack.pop();

        if (end - init <= 1) {
            return Math.max(vet[init], vet[end]);
        } else {
            let m = Math.floor((init + end) / 2);
            stack.push({ init, end: m });
            stack.push({ init: m + 1, end });
        }
    }
}
