/*https://github.com/ASpurple/util.js.git*/

/*JavaScript工具集*/

/*创建XMLHTTPRequest实例对象*/
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