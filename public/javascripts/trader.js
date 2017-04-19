'use strict';
// input echtes Dataset in csv - output: number of trades, Wins, Loses, P/L ratio

// input komplexeres Dataset - output:Trade# high, Tradepoint, ClosePoint, Ratio

function findTrades() {	

	if(data.set.includes(Math.round(findClosePoint()))) {
		return  ' Trade#1 High: ' + findMax() + ' Trigger: ' + findTradePoint() + ' ClosePoint: ' + findClosePoint() +
		' P/L: ' + getRatio()
	} else {
		return "Closing point not reached"
	}
	adjustDataSet()
}
//output: mockup data
let data = {
	set: [15,16,17,18,19,20,19,18,17,16,15,16,17,18,19,18,17,16,15,14,13,12,
			15,16,17,18,19,20,19,18,17,16,15,16,17,18,19,18,17,16,15,14]

} 

//input high, low  - output Tradepoint 
function findTradePoint() {
	let high = findMax()
	let low = data.set[findMin()]
	
	let TradePoint = high - ((high - low) * 0.236) 
	return TradePoint
}
//input high, low - output Close
function findClosePoint() {
	let high = findMax()
	let low = data.set[findMin()]

	let Close = high - ((high - low) * 1.382)
	return Close

}
//input: index - output: high 
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
	return data.set.indexOf(low, timeFrameStart)
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
//Zeige eine Bar für jedes Element im data.set array bei Seitenaufruf
window.onload = showBars
function showBars() {
	data.set.forEach(function (element) {
	let bar = document.createElement("div")
	bar.className += "Bar"
	bar.innerHTML= element
	let chart = document.getElementsByClassName('Chart')[0]
	chart.appendChild(bar)
	})
}

//Setze ein Bar auf die richtige Höhe auf Knopfdruck
function setHeight() {
	let i = 0;
	data.set.forEach(function(element) {
		let BarHeight = element * 10
		let Bar = document.getElementsByClassName('Bar')[i]
		Bar.style.cssText = "height: " + BarHeight + "px;" 
		i += 1
	})

}	

let setHeightButton = document.getElementsByClassName('SetHeightButton')[0]
setHeightButton.addEventListener("click", function() {
	setHeight()
})

//Färbe das Maximum  auf Knopfdruck
function colorMax(index) {
	document.getElementsByClassName("Bar")[index].className += " Red";

}

let showMaxButton = document.getElementsByClassName('ShowMaxButton')[0]
showMaxButton.addEventListener("click", function() {
	colorMax()	
})

//Färbe Minimum auf Knopfdruck
function colorMin() {
	document.getElementsByClassName('Bar')[findMin()].className += " Green"

}
let showMinButton = document.getElementsByClassName('ShowMinButton')[0]
showMinButton.addEventListener("click", function() {
	colorMin()
})

//Zeige Triggerpoint auf Knopfdruck
function showTrigger() {
	let Trigger = document.getElementsByClassName('Trigger')[0]
	Trigger.classList.remove("hidden")
	Trigger.style.cssText = "bottom:" + ((findTradePoint()*10)-2) + "px";
}
let showTriggerButton = document.getElementsByClassName('ShowTriggerButton')[0]
showTriggerButton.addEventListener("click", function() {
	showTrigger()
})

//Zeige ClosePoint auf Knopfdruckl
function showClose() {
	let Close = document.getElementsByClassName('ClosePoint')[0]
	Close.classList.remove('hidden')
	Close.style.cssText = 'bottom: ' + ((findClosePoint()*10)-2) + "px"
}
let  showCloseButton = document.getElementsByClassName('ShowCloseButton')[0]
showCloseButton.addEventListener("click", function() {
	showClose()

})
// Zeige Traderesultat bei Knopfdruck und Trade im Graph
function showTrades() {
	document.getElementsByClassName('SVG')[0].classList.remove("hidden")
	let resultat = document.getElementsByClassName('Resultat')[0]
	resultat.innerHTML += findTrades() + "<br>"
	let Bar = document.getElementsByClassName('Bar')
	Bar[data.set.indexOf(findMax())].className += " Marked"
	Bar[data.set.indexOf(Math.round(findClosePoint()))].className += " Marked"
	let MaxOffsetLeft = Bar[data.set.indexOf(findMax())].offsetLeft
	let MaxOffsetTop = Bar[data.set.indexOf(findMax())].offsetTop
	document.getElementsByClassName('SVGLine')[0].setAttribute("x1", MaxOffsetLeft)
	document.getElementsByClassName('SVGLine')[0].setAttribute("y1", MaxOffsetTop)
	let CloseOffsetLeft = Bar[data.set.indexOf(Math.round(findClosePoint()))].offsetLeft
	let CloseOffsetTop = Bar[data.set.indexOf(Math.round(findClosePoint()))].offsetTop

	document.getElementsByClassName('SVGLine')[0].setAttribute("x2", CloseOffsetLeft)
	document.getElementsByClassName('SVGLine')[0].setAttribute("y2", CloseOffsetTop)


}	
let showTradesButton = document.getElementsByClassName('ShowTradesButton')[0]
showTradesButton.addEventListener("click", function() {
	showTrades()
})


window.setTimeout(setHeight, 1000)


for(let i = 0; i < data.set.length; i++) {
	window.setTimeout(move, (i*1000) + 100, i)
	if 
	window.setTimeout(remove, (i*1000) + 700, i)
}



function move(numb) {
	document.getElementsByClassName("Bar")[numb].className +=  " Silver"
}
function remove(numb) {
	document.getElementsByClassName("Bar")[numb].classList.remove("Silver")
}

