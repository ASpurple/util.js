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

		/*=======根据数组元素（数值型）的大小，不改变数组元素位置的情况下，获取指定第N大的元素的下标。*/
		function getIndex(arr,n){
			if(arr.length == 0){
				return;
			}else if(arr.length == 1){
				return 0;
			}else{
					var arrObj = [],
					    arrIndex = [];
					function Fn(val,index){
						this.val = val;
						this.index = index;
					}
					for(var i = 0; i < arr.length; i++){
						arrObj.push(new Fn(arr[i],i));
					}
					arr.sort(function(a,b){return b - a;});
					for(i = 0; i < arrObj.length; i++){
						if(arrObj[i].val == arr[n - 1]){
							arrIndex.push(arrObj[i].index);
						}						
					}
				}
			return arrIndex;
		}

/*移动web中meta标签常规写法*/
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
