'use strict';
// input echtes Dataset in csv - output: number of trades, Wins, Loses, P/L ratio

// input komplexeres Dataset - output:Trade#1high, Tradepoint, ClosePoint, Ratio

function findTrades() {	

	if(data.set.includes(Math.round(findClosePoint()))) {
		return "Closing point Reached" +
		' Trade#1 High: ' + findMax() + ' TradePoint: ' + findTradePoint() + ' ClosePoint: ' + findClosePoint() +
		' Ratio: ' + getRatio()
	} else {
		return "Closing point not reached"
	}
}
//output: mockup data
let data = {

	set: [15,16,17,18,19,20,19,18,17,16,15,16,17,18,19,18,17,16,15,14,13,12,
			15,16,17,18,19,20,19,18,17,16,15,16,17,18,19,18,17,16,15,14]
}

//input high, low  - output Tradepoint 
function findTradePoint() {
	let high = findMax()
	let low = findMin()
	
	let TradePoint = high - ((high - low) * 0.236) 
	return TradePoint
}
//input high, low - output Close
function findClosePoint() {
	let high = findMax()
	let low = findMin()

	let Close = high - ((high - low) * 1.382)
	return Close

}
//input: dataset - output: high 
function findMax() {
	let high = 0;
	data.set.forEach(function(element) {
		if (element > high) {
			high = element		
		}
	})
	return high;
}
//input max,timeframe - output min in timeframe
function findMin() {
	let timeFrameStart = data.set.indexOf(findMax())
	let timeFrameEnd = data.set.indexOf(findMax()) + 7
	let low = findMax()
	for ( let i = timeFrameStart; i < timeFrameEnd; i++) {
		if (data.set[i] < low) {
			low = data.set[i]
		}
	}
	return low
}
//input TradePoint, Close - output Ratio
function getRatio() {
	let TradePoint = findTradePoint()
	let Close = findClosePoint()

	let Ratio = TradePoint - Close
	return Ratio
}
//input  Index von Bar unter Closepoint , close - output new dataset
function adjustDataSet() {
	function underClosePoint(element) {
		return element < findClosePoint();
	}
	let cut = data.set.findIndex(underClosePoint);

	data.set.splice(0, cut);
}




// Visualisierung 

// input : data.set array  output: bars mit height
let chart = document.getElementsByClassName('Chart')[0]
for (let i = 0; i < data.set.length; i++) {
	let div = document.createElement("div")
	div.className = "Bar";
	div.innerHTML = data.set[i]
	let h = data.set[i] * 10
	div.style.cssText = "height: " + h + "px";
	chart.appendChild(div)

}

// output: alle bar elemente in einem array
let bararray = [ ]
for (var i = 0; i <21; i++) {
	var bar = document.getElementsByClassName('Bar')[i]
	bararray.push(bar);
}








//Button zum FindTradeFunktion ausführe und alles einzeichnen
let button = document.getElementsByClassName('Button')[0]
button.addEventListener("click", function(event) {
	// Resultat ausgeben
	document.getElementsByClassName('Resultat')[0].innerHTML +=findTrades();
	//Max markieren
	bararray[data.set.indexOf(findMax())].className += " Red"
	//Min markieren
	bararray[data.set.indexOf(findMin(), 1)].className += " Green"
	//Trigger Positionieren
	document.getElementsByClassName('Trigger')[0].style.cssText = "bottom: " + ((findTradePoint()*10) - 2)  + "px";
	//Closepoint markieren
	document.getElementsByClassName('ClosePoint')[0].style.cssText = "bottom: " + ((findClosePoint()*10) - 2) +'px';

})
