document.writeln();


if (typeof Object.beget !== 'function'){
	Object.create = function(o){
		var F = function(){};
		F.prototype = o;
		return new F();
	}
};

Function.prototype.method = function(name, func){
	if (!this.prototype[name]){
		this.prototype[name] = func;
	}
	return this;
};
Function.method('curry', function(){
	var slice = Array.prototype.slice;
		args = slice.apply(arguments),
		that = this;
	document.writeln(typeof arguments);
	return function(){
		return that.apply(null, args.concat(slice.apply(arguments)));
	};
});
Function.method('new', function(){
	var that = Object.create(this.prototype);
	var other = this.apply(that, arguments);
	return (typeof other === 'object' && other) || that;
});
Function.method('inherits', function(Parent){
	this.prototype = new Parent();
	return this;
});

// var market = {
// 	'capacity': 100000,
// 	'name': 'modity'
// };

// if (typeof Object.beget !== 'function'){
// 	Object.create = function(o){
// 		var F = function(){};
// 		F.prototype = o;
// 		return new F();
// 	}
// }
// var stockMarket = Object.create(market);
// stockMarket.openTime = "09:30";
// market.currency = ['RMB', 'USD'];

// document.writeln(stockMarket.name);
// stockMarket.name = 'stockMarket';
// document.writeln(stockMarket.name);
// delete stockMarket.name;
// document.writeln(stockMarket.constructor);

// var obj = {
// 	value: 100,
// 	double: function(){
// 		this.value += this.value;
// 	}
// };
// document.writeln(obj.value);
// obj.double();
// document.writeln(obj.value);
// obj.double();
// document.writeln(obj.value);

// value = 99;
// var add = function(a, b){
// 	return a + b;
// }
// myObj = {
// 	value: 1000
// };
// myObj.double = function(){
// 	var that = this;
// 	var helper = function(){
// 		that.value = add(that.value, that.value);
// 	};
// 	helper();
// }
// document.writeln(myObj.value);
// myObj.double();
// document.writeln(myObj.value);
// myObj.double();
// document.writeln(myObj.value);

// var Quo = function(string){
// 	this.status = string;
// }
// Quo.prototype.get_status = function(){
// 	return this.status;
// };
// var myQuo = new Quo('confused');
// document.writeln(myQuo.get_status());

// var arr = [3, 5];
// var sum = add.apply(null, arr);
// document.writeln(sum);
// var statusObj = {
// 	status: 'A-OK'
// };
// var status = Quo.prototype.get_status.apply(statusObj);
// document.writeln(status);

// var add = function(a, b){
// 	if (typeof a !== 'number' || typeof b !== 'number'){
// 		throw {
// 			name: 'TypeError',
// 			message: 'add needs numbers',
// 		};
// 	}
// 	return a + b;
// }
// var tryIt = function(){
// 	try {
// 		add("seven");
// 	} catch(e){
// 		document.writeln(e.name + ':' + e.message);
// 	}
// }
// tryIt();

// Function.prototype.method = function(name, func){
// 	if (!this.prototype[name]) {
// 		this.prototype[name] = func;
// 	}
// 	return this;
// };
// Number.method('integer', function(){
// 	return Math[this < 0 ? 'ceil' : 'floor'](this);
// });
// String.method('trim', function(){
// 	return this.replace(/^\s+|\s+$/g, '');
// })
// document.writeln((-10/3).integer());
// document.writeln(' asdf '.trim());

// var hanoi = function(disc, src, aux, dst){
// 	if (disc > 0){
// 		hanoi(disc - 1, src, dst, aux);
// 		document.writeln('Move disc' + disc + 
// 						 ' from ' + src + 
// 						 ' to ' + dst);
// 		hanoi(disc - 1, aux, src, dst);
// 	}
// };
// hanoi(3, 'Src', 'Aux', 'Dst');

// var walk_the_DOM = function walk(node, func){
// 	func(node);
// 	node = node.firstChild;
// 	while (node){
// 		walk(node, func);
// 		node = node.nextSibling;
// 	}
// };
// var getElementsByAttribute = function(attr, value){
// 	var results = [];
// 	walk_the_DOM(document.body, function(node){
// 		var actual = node.nodeType === 1 && node.getAttribute(attr);
// 		if (typeof actual === 'string' && 
// 			(actual === value || typeof value !== 'string')) {
// 			results.push(node);
// 		}
// 	});
// 	return results;
// }

// var factorial = function factorial(i, a){
// 	a = a || 1;
// 	if (i < 2){
// 		return a;
// 	}
// 	return factorial(i - 1, a * i);
// };
// document.writeln(factorial(4));
// document.writeln(factorial(4, 2));

// var foo = function(){
// 	var a = 3, b = 5;
// 	var bar = function(){
// 		var b = 7, c = 11;
// 		// a==3, b==7, c==11
// 		a += b + c;
// 		// a==21, b==7, c==11
// 	};
// 	// a==3, b==5, c==undefined
// 	bar();
// 	// a==21, b==5
// }

// var myObj = function(){
// 	var value = 0;
// 	return {
// 		increment: function(inc){
// 			value += typeof inc === 'number' ? inc : 1;
// 		},
// 		getValue: function(){
// 			return value;
// 		}
// 	};
// }();
// document.writeln(myObj.getValue());

// var quo = function(status){
// 	return {
// 		get_status: function(){
// 			return status;
// 		}
// 	};
// };
// var myQuo = quo('amazinnng');
// document.writeln(myQuo.get_status());

// var fade = function(node){
// 	var level = 1;
// 	var step = function(){
// 		var hex = level.toString(16);
// 		node.style.backgroundColor = '#FFFF' + hex + hex;
// 		if (level < 15){
// 			level += 1;
// 			setTimeout(step, 100);
// 		}
// 	};
// 	setTimeout(step, 100);
// };
// fade(document.body);

// request = prepare_the_request();
// send_request_asynchronously(request, function(response){
// 	display(response);
// });

// var serial_maker = function(){
// 	var prefix = '';
// 	var seq = 0;
// 	return {
// 		set_prefix: function(p){
// 			prefix = String(p);
// 		},
// 		set_seq: function(s){
// 			seq = s;
// 		},
// 		gensym: function(){
// 			var result = prefix + seq;
// 			seq += 1;
// 			return result;
// 		}
// 	};
// };
// var seqer = serial_maker();
// seqer.set_prefix('QQ');
// seqer.set_seq(1000);
// var gen_unique_QQ = seqer.gensym;
// document.writeln(gen_unique_QQ());
// document.writeln(gen_unique_QQ());

// Function.method('curry', function(){
// 	var slice = Array.prototype.slice;
// 		args = slice.apply(arguments),
// 		that = this;
// 	document.writeln(typeof arguments);
// 	return function(){
// 		return that.apply(null, args.concat(slice.apply(arguments)));
// 	};
// });
// var add = function(a, b){
// 	if (typeof a !== 'number' || typeof b !== 'number'){
// 		throw {
// 			name: 'TypeError',
// 			message: 'add needs numbers',
// 		};
// 	}
// 	return a + b;
// };
// var add_1 = add.curry(1);
// document.writeln(add_1(11));

// var fibonacci = function(){
// 	var memo = [0, 1];
// 	var fib = function(n){
// 		var result = memo[n];
// 		if (typeof result !== 'number'){
// 			result = fib(n-1) + fib(n-2);
// 			memo[n] = result;
// 		}
// 		return result;
// 	};
// 	return fib;
// }();
// document.writeln(fibonacci(10));

// var memorizer = function(memo, formula){
// 	var recur = function(n){
// 		var result = memo[n];
// 		if (typeof result !== 'number'){
// 			result = formula(recur, n);
// 			memo[n] = result;
// 		};
// 		return result;
// 	};
// 	return recur;
// };
// var fibonacci = memorizer([0, 1], function(recur, n){
// 	return recur(n - 1) + recur(n - 2);
// });
// var factorial = memorizer([1, 1], function(recur, n){
// 	return n * recur(n - 1);
// });
// document.writeln(fibonacci(3));
// document.writeln(factorial(4));











































