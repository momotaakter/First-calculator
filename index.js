

//display

let display=document.getElementById('main-inputarea');
function mybtn(buttons){
 display.value+=buttons

 
}
function calculate(){
    try{
        display.value=eval(display.value);  
    }
   catch(error){
    display.value="Error"
   }
}


function clearbtn(){

    display.value=""
}

/*const calculate=document.getElementById('calculate');
calculate.addEventListener('click',()=>{

});*/


