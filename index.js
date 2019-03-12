var olsonDeliLine = [];
//////

function takeANumber(olsonDeliLine, name) {
  olsonDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${olsonDeliLine.length} in line.`);
}


////////


function nowServing(olsonDeliLine) {
	if (olsonDeliLine === 0) 
	{
		return ("There is nobody waiting to be served!")
	} 
	
	else 
	{
		var firstInLine = olsonDeliLine.shift()
		return (`Currently serving ${firstInLine}.`)
	}

 }

///////////

function currentLine(){ 
  
}