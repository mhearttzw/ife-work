/**
*task 2.1
*@description 数据类型及语言基础
*@author Echelon
**/
//判断arr是否为一个数组，返回bool值
function isArray(arr){
	return '[object Array]'=== Object.prototype.toString.call(arr);
}

//判断fn是否为一个函数，返回一个bool值
function isFunction(fn){
	return '[object Function]'=== Object.prototype.toString.call(fn);
}



/**
*使用递归来实现一个深度克隆，可以复制一个对象，返回 一个完整拷贝
**/
function cloneObject(src){
	var result= src, i, len;
	if (!src
		||src instanceof Number
		||src instanceof String
		||src instanceof Boolean) {
		return result;
	}else if(src instanceof Date) {
		result= new Date(src);
		return result;
	}else if(isArray(src)) {
		result= [];
		for (i=0, len=src.length; i<len; i++) {
			result[i]= cloneObject(src[i]);
		}
	}else if (isPlain(obj)) {
		result= {};
		for (i in src) {
			if(src.hasOwnProperty(i)) {
				result[i]=cloneObject(src[i])
			}
		}
	}

}

function isPlain(obj) {
	var hasOwnProperty= Object.prototype.hasOwnProperty,
	    key;
	if(!obj|| "[object Object]"!===Object.prototype.toString.call(obj)|| !(isPrototypeOf in obj)) {
		return false; 
	};
	if(obj.constructor&&
		!hasOwnProperty.call(obj, "constructor")&&
		!hasOwnProperty.call(obj.constructor.prototype.call(obj, "isPrototypeOf"))) {
		return false;
	};
	for (key in obj) {
		return key=== undefined|| hasOwnProperty.call(obj, key);
	}  
}


/**
*对数组进行去重操作，只考虑元素为数字和字符串，返回去重后的数组
**/
//hash+es5
function uniqArray(arr) {
	var result={}, i, len;
	for(i=0, len=arr.length; i<len; i++) {
		result[arr[i]]= true;
	}
	return Object.keys(result);
}

//实现一个简单的trim
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
	function isEmpty(c) {
		return /\s/.test(c);
	}
	for (var i=0, len= str.length; i<len; i++){
		if(!isEmpty(str.charAt(i))) {
			break;
		}
	}
	for (var j= str.length; j>0; j--){
		if(!isEmpty(str.charAt(j))) {
			break;
		}
	}
	if (i>j) {
		return '';
	}
	return str.substring(i,j);

}

simpleTrim(' \t trimed   ');

/**
 * 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
 * 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
 * 尝试使用一行简洁的正则表达式完成该题目
 *
 * @param  {string} source 目标字符串
 * @return {string} 删除两端空白字符后的字符串
 */
 function trim(str) {
 	return str.replace(/^\s+|\s+$/g, '');
 }
 // 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'



// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
	for(var i= 0, len= arr.length; i<len; i++) {
		fn(arr[i], i);
	}
}

//获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	return Object.keys(obj).length;
}
/*Polyfill*/
if (!Object.keys) Object.keys = function(o) {
  if (o !== Object(o))
    throw new TypeError('Object.keys called on a non-object');
  var k=[],p;
  for (p in o) if (Object.prototype.hasOwnProperty.call(o,p)) k.push(p);
  return k;
}


/**
*判断是否为邮箱地址及手机号
**/
function isEmail(emailStr) {

}
function isMobilePhone(phone) {
	return /^1\d{10}$/.test(phone);
}



/**
*DOM
**/
function hasClassName(element, className) {
	var name= element.className.match(/\S+/g)|| [];
    if(name.indexOf(className)!== -1) {
    	return true;
    }
    return false;
}
function addClass(element, newClassName ) {
	if (!hasClassName(element, newClassName)) {
        element.className= trim(element.className+" "+"newClassName");
	})
}
function removeClass(element, oldClassName) {
	if (hasClassName(element, oldClassName)) {
		element.className= trim(element.className.replace(oldClassName, ""));
	}
}
function isSiblingNode(element, siblingNode) {
    return element.parentNode=== siblingNode.parentNode;
}
function getPosition(element) {
	var box= element.getBoundingClientRect();
	return box;
}

/**
*实现一个简单的Query
**/
function $(selector) {

}



/**
*事件
**/
function addEvent(element, event, listener) {
	element.addEventListener(event, listener);
}
function removeEvent(element, event, listener) {
	element.removeEventListener(event, listener);
}
function addClickEvent(element, listener) {
	addEvent(element, 'click', listener);
}
function addEnterEvent(element, listener) {
	addEvent(element, 'keydown', function(e){
		var event= e|| window.event;
		var keyCode= event.which|| event.keycode;
		if (keyCode== 13) {
			listener.call(element, event);
		}
	})
}

$.on= addEvent;
$.un= removeEvent;
$.click= addClickEvent;
$.enter= addEnterEvent;

function delegateEvent(element, tag, eventName, listener) {
	addEvent(element, eventName, function (e) {
		var event= e|| window.event;
		var target= event.target|| event.srcElement;
		if (target&& target.tagName=== tag.toUpperCase()) {
			listener.call(target, event);
		}
	})
}

$.delegate= delegateEvent;



/**
*BOM
**/
function isIE() {
	
}