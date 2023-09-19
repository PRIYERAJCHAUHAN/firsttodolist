function myFunction(name, age="26"){
    
    if(name===undefined){
        name = "I do not know your name";
    }
    console.log("His name is "+ name + " and he is "+ age +" year old.")
}
myFunction();