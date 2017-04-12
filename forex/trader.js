'use strict';
// input echtes Dataset in csv - output: number of trades, Wins, Loses, P/L ratio
//mockup data
let data = {
	set: [15,16,17,18,19,20,19,18,17,16,15,16,17,18,19,21,22,23,15,14,13,12,
			15,16,17,18,19,20,19,18,17,16,15,16,17,18,19,30,17,16,15,14]
} 
var currentHigh = 0;
var timeFrame = 0;
var currentLow = 0;
//input number indexes to check, output  CurrentHigh and timeFrame for last index
function findTrades() {	
	 	
	findMaxAndTimeFrame(data.set, data.set.length-1)

}

//input: dataset, ticks output currentHigh, timeFrame
function findMaxAndTimeFrame(dataset, ticks) {
	if (timeFrame < 0) {
		timeFrame = 20
	}	
	for (var i = 0; i <= ticks; i++) {
		if(dataset[i] > currentHigh) {
			currentHigh= dataset[i]
			timeFrame = 20;
		} else {
			timeFrame -= 1
		}	
		if(timeFrame < 0 ) {
			timeFrame = 20;
		}

	} 
	return[currentHigh, timeFrame]
}
//input if timeframe is < 20 track currentLow
function findLow() {

}
//input high, low  - output Tradepoint 
function findTradePoint() {
	let high = findMaxAndTimeFrame()
	let low = data.set[findMin()]
	
	let TradePoint = high - ((high - low) * 0.236) 
	return TradePoint
}
//input high, low - output Close
function findClosePoint() {
	let high = findMaxAndTimeFrame()
	let low = data.set[findMin()]

	let Close = high - ((high - low) * 1.382)
	return Close

}
//input max,timeframe - output min in timeframe
function findMin() {
	let timeFrameStart = data.set.indexOf(findMaxAndTimeFrame())
	let timeFrameEnd = data.set.indexOf(findMaxAndTimeFrame()) + 7
	let low = findMaxAndTimeFrame()
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

module.exports = { findTrades, findMaxAndTimeFrame, data}