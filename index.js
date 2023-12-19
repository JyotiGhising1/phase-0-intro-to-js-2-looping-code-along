function writeCards(name, eventName){
     const emptyArray =[];
    for(let i=0; i<name.length; i++){
       const message= `Thank you, ${name[i]}, for the wonderful ${eventName} gift!`;
       emptyArray.push(message);
    }
    return emptyArray;
}

function countDown(positiveInterger){
    let number = positiveInterger;
    while(number>=0){
        console.log(number);
        number--;
    } 
}