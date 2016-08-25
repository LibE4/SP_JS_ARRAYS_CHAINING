var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

document.write(integers.sort(function(prv, cur){
		return cur - prv;
	}).filter(function(cur){
		if(cur <= 19) {
			return cur;
		}
	}).map(function(cur){
		return cur * 1.5 - 1;
	}).reduce(function(prv, cur){
		return prv + cur;
	})
);