/*https://github.com/ASpurple/util.js.git*/

/*JavaScript工具集*/

/*创建XMLHTTPRequest实例对象*/
function createXHR(){
  var request = false;
  try {
    request = new XMLHttpRequest();
  } catch (trymicrosoft) {
    try {
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (othermicrosoft) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (failed) {
        request = false;
      }
    }
  }
  if (!request)
    alert("Error initializing XMLHttpRequest!");
  return request;
  }
		
/*=======根据数组元素（数值型）的大小，不改变数组元素位置的情况下，获取指定第N大的元素的下标。=========*/
		function getIndex(arr,n){
			if(arr.length == 0 || n >= arr.length){
				return;
			}else if(arr.length == 1){
				return 0;
			}else{
					var newArr = [];
					for (var i = 0; i <= arr.length; i++) {
						newArr.push(arr[i]);
					}
					var arrObj = [],
					    arrIndex = [];
					function Fn(val,index){
						this.val = val;
						this.index = index;
					}
					for(i = 0; i < newArr.length; i++){
						arrObj.push(new Fn(newArr[i],i));
					}
					newArr.sort(function(a,b){return b - a;});
					for(i = 0; i < arrObj.length; i++){
						if(arrObj[i].val == newArr[n - 1]){
							arrIndex.push(arrObj[i].index);
						}						
					}
				}
			return arrIndex;
		}
/*=========================================================================================================*/
/*移动web中meta标签常规写法*/
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
/*===================================时间格式化=================================================*/
Date.prototype.format = function(fmt) { 
     var o = { 
        "M+" : this.getMonth()+1,                 //月份 
        "d+" : this.getDate(),                    //日 
        "h+" : this.getHours(),                   //小时 
        "m+" : this.getMinutes(),                 //分 
        "s+" : this.getSeconds(),                 //秒 
        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
        "S"  : this.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
}  
