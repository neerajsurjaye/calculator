let display_string = ""; //values and all operations
let temp_string = ""; //current value displaying //curr Number

let screen_main = document.querySelector("#scr-bottom");
let screen_sec = document.querySelector("#scr-top");

let final_sum = null;
let last_opr = null;

let sub_val = 0;

let operators = {"add" : '+' , "sub" : "-" , "mul" : "*" , "div" : "/" , "mod" : "%"};

//math operations
function add(paraA , paraB){
    return paraA + paraB;
}

function sub(paraA , paraB){
    return paraA - paraB;
}

function mul(paraA , paraB){
    return paraA * paraB;
}

function div(paraA , paraB){
    return paraA / paraB;
}

function mod(paraA , paraB){
    return paraA % paraB;
}

//operates
function operate(paraA , paraB , operator){
    let out;
    
    if(operator == "+"){
        out = add(paraA , paraB);
    }else if(operator == "-"){
        out = sub(paraA , paraB);
    }else if(operator == "*"){
        out = mul(paraA , paraB);
    }else if(operator == "/"){
        out = div(paraA , paraB);
    }else if(operator == "%"){
        out = mod(paraA , paraB);
    }

    return out;
}


//Keypad 

let keypad = document.querySelector("#keypad");
keypad.addEventListener("click" , keyInput);


function keyInput(e){

    if(e.target.className == "numbers"){
        inputNumber(e);
    
    }
    else if(e.target.id == "clear"){
        clearDisplay();
    }
    else if(e.target.className == "operators"){
        oprHandling(e.target.id);
        
    }
    else if(e.target.id == "equal"){
        equal_handling();
    }

    console.log(temp_string ,display_string ,final_sum);
    
    
}

function inputNumber(e){
    temp_string += e.target.dataset.num;
    display_string += e.target.dataset.num;
    sub_val = 1;
    display(screen_main , temp_string);
}


//Screen
function display(window , value){
    window.textContent = value;
}

function clearDisplay(){
    display_string = "";
    temp_string = "";  
    final_sum = null;
    last_opr = null;
    sub_val = 0;

    display(screen_main , temp_string);
    display(screen_sec , display_string);
}


//operation Handling
function oprHandling(opr){
    if(opr == "sub" && last_opr==null && sub_val == 0){
        temp_string = "-";
        console.log("ran");
        display_string = "-";
        display(screen_main , temp_string);
        sub_val = 1;
        
        return;
    }
    sub_val = 1;
    if (last_opr == null ){
        //console.log("ran");
        last_opr = opr;
        final_sum = parseFloat(temp_string);
        display_string += operators[opr];
        sub_val = 1;
    }else {
        if(last_opr != "equal"){
            final_sum = operate( final_sum,parseFloat(temp_string) , operators[last_opr]);
        }
        last_opr = opr;
        if(opr != "equal"){
            display_string += operators[opr];
        }
    }
    if(opr == "equal"){
        display(screen_main , final_sum);   
    }
    if(opr != "equal"){
        display(screen_main ,  "");
    }

    temp_string = "";
    display(screen_sec , display_string);
}


//Equals
function equal_handling(){
    

}