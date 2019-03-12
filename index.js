var olsonDeliLine = [];
//////

function takeANumber(olsonDeliLine, name) {
  olsonDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${olsonDeliLine.length} in line.`);
}


////////

function nowServing(olsonDeliLine){ 
   olsonDeliLine.unshift();
   
   if (olsonDeliLine === 0) {
   return ("There is nobody waiting to be served!");
   }
   

}

///////////

function currentLine(){ 
  
}