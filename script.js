//iife immediately invoked function expression
(function(){
    
    let buttons = document.querySelectorAll(".btn");
    let input = document.querySelector('.screen');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(button => {
        button.addEventListener('click' , (x)=>{
            let btn = x.target.dataset.num
            input.value += btn
        })
        
    });

    equal.addEventListener('click' , ()=>{
        let equal = eval(input.value)
        input.value = equal

    })

    clear.addEventListener('click' , ()=>{
        input.value = ""
    })


})()