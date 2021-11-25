// let round = "("+")";
// let square = "["+"]";
// let curly= "{"+"}";
let message = "";

// function validator(message){
//     if (message.match(round) && message.match(square) && message.match(curly) ){
//         return "The message is valid!";
//     }else {
//         return "The message is not valid";
//     }
// }

function validator (message){
    if( message.match('(' && ')' || '[' && ']' || '{' && '}')){
        return "The message is valid!";

    }
    else {
                return "The message is not valid";
            }
}


console.log(validator("[({})]"));


function validBraces(message){
    let tracer = []
    for(let i=0;i < message.length; i++){
      if ( message[i] === "(" || message[i] === "{" || message[i] === "["){
        tracer.push(message[i])
      } else{
        if(tracer.length === 0) return false
        let lastValue = tracer[tracer.length-1]
        if( (message[i] === ']' && lastValue === '[') || (message[i] === '}' && lastValue === '{') || (message[i] === ')' && lastValue === '('))
        {
          tracer.pop()
        } else {
          break;
        }
      }
    }
    return tracer.length === 0
  }

// console.log(validBraces("[({})]"));