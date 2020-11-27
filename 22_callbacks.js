function randomIntegerBetweenZeroAnd(max) {
	return Math.floor((Math.random() * max) + 1);
}

function someApiRequest(apiName) {
  var responseTime = randomIntegerBetweenZeroAnd(4000);
  
  setTimeout( function(){
    console.log("response from: ", apiName);
  }, randomIntegerBetweenZeroAnd(responseTime) );
}

someApiRequest("twitter")
someApiRequest("google")
someApiRequest("facebook")