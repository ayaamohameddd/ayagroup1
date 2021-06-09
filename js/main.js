var getusername = prompt("hello! who are you? please state your name");

console.log(getusername);
document.getElementById("aya").innerText = getusername;

//tooltip

/*tooltio js*/

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})