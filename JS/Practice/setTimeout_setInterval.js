// ref https://javascript.info/settimeout-setinterval
// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
//Using timeInterval
function printNumbers(from, to) {
    
   let timerId = setInterval(() => {

        console.log(from++);

        if (from > to) clearInterval(timerId);

    }, 1000);
}
// printNumbers(1,5)


//Using setTimeout 
function printNumbersTimepout(from, to) {
    
    setTimeout (function Repeater() {
    
        console.log(from++);
        
        if (from > to) setTimeout(Repeater,1000);

    },1000 )

}
// printNumbersTimepout(1,5);

// Note that in both solutions, there is an initial delay before the first output. The function is called after 1000ms the first time.
// If we also want the function to run immediately, then we can add an additional call on a separate line, like this:

function printNumbersImmediately(from, to) {

    const go = () => {
        console.log(from++);
        if(from > to) clearInterval(timerId);
    }

    go();

    let timerId = setInterval(go, 1000)
}

printNumbersImmediately(1, 5);