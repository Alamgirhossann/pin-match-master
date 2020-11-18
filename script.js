document.getElementById('generate-pin').addEventListener('click', function(){
    var number = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('input-pin').value = number;   
})

function getOutput() {
    return document.getElementById('inputNumber').value;
}

function printOutput(num) {
    if (num =="") {
        document.getElementById('inputNumber').value = num;
    }else{
        document.getElementById('inputNumber').value = getFormattedNumber(num);
    } 
}

function getFormattedNumber(num) {
    return Number(num.replace( / ,/g, ''));
}

function clearAll() {
    document.getElementById('inputNumber').value = "";
}

var number = document.getElementsByClassName("button");
for(var i = 0; i< number.length; i++){
	number[i].addEventListener('click',function(){
	var output=getFormattedNumber(getOutput());
	if(output!=NaN){ //if output is a number
		output=output+this.id;
		printOutput(output);
		}
	});
}

function check() {
    if (document.getElementById('input-pin').value === "") {
        document.getElementById('message').innerHTML ="Please inter pin number first then submit" ;
    }else if(document.getElementById('input-pin').value ===
        document.getElementById('inputNumber').value) {
        document.getElementById('message').innerHTML =" Pin Matched... Secret door is opening for you" ;
    }else {
        document.getElementById('message').innerHTML =" Pin Didn't Match, Please try again";
    }
}

