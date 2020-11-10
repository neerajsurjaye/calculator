console.log(operate(17  , 8, "%"));

//Functions

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