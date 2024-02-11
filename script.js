let seq = [0, 1];
let seqtotal = 1;

function fibonacciSequence(n){

    for (let i = 2; i < n; i++){


        let nextNumber = seq[i-1] + seq[i-2];

        seq.push(nextNumber);
        seqtotal += nextNumber;
    }

    return {seq, seqtotal};


}

let { seq, seqtotal } = fibonacciSequence(40000000);


console.log(seqtotal);

