// let seq = [0, 1];
// let seqtotal = 1;

// function fibonacciSequence(n){

//     for (let i = 2; i < n; i++){


//         let nextNumber = seq[i-1] + seq[i-2];

//         seq.push(nextNumber);
//         if (nextNumber%2===0){
//             seqtotal += nextNumber;
//         }
//     }

//     return {seq, seqtotal};


// }

// let { seq:fibseq, seqtotal:fibtot } = fibonacciSequence(3);


// console.log(fibtot);


function sumEvenFibonacci(limit) {
    let sum = 0;
    let prev = 1;
    let curr = 1;
    
    while (curr <= limit) {
        if (curr % 2 === 0) {
            sum += curr;
        }
        
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return sum;
}


console.log(sumEvenFibonacci(4000000)); 

