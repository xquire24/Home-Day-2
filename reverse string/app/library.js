module.exports = {
reverseString: function(str){
	var reversed = str.split("").reverse().join("");
	if(str === ''){
		return null;
	}else if(reversed === str){
		return true;
	}else{
		return reversed;
	}
}

  
}