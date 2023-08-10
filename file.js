let buttons= document.querySelectorAll(".btn");
let res = document.querySelector(".res");
let eq = document.querySelector(".eq");
let expr = document.querySelectorAll(".ex");
let operand1;
let operand2;
let result;
let operation;
let regex =/\d+=|\w+=/;
    buttons.forEach(e => {  
    e.addEventListener('click',function(){
        if(res.innerHTML.match(regex) && !e.classList.contains('clear')){
          
            e.disabled=true;   
        }else {
        
        if(e.classList.contains('ex')){
            operand1=parseInt(+res.innerHTML,2);
            
            res.innerHTML="";  
            operation=e.innerHTML;
           
        }
        if(e.classList.contains("eq")){
                operand2 =parseInt(+res.innerHTML,2);
                res.innerHTML=""; 
             switch (operation){
                            case '+':
                                result = operand1+operand2;
                                break;
                            case '-':
                                result=operand1-operand2;    
                            case '*':
                                result=operand1*operand2;    
                             
                        }
                        
                        if (operation == '/' && operand2 != 0){
                            result =operand1 / operand2;
                        }else if (operation == '/' && operand2 == 0){
                            result = 'undefined';

                        }
                        if(result>=0){
                            res.innerHTML=result.toString(2);
        
                                } else if (result<0){
                                    res.innerHTML=(result >>> 0).toString(2);
        
                                }else {
                                    res.innerHTML =result;
                                }

                    } 
       
        if(!e.classList.contains('ex')){
        res.innerHTML += e.innerHTML;
        }
       
        if(e.classList.contains('clear')){
            res.innerHTML='';
            location.reload();
            
        }
      
    }
       
    })

});

