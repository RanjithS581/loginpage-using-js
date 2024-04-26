
function submit(){
var inputText = document.getElementById('userName').value;
var inputText1 = document.getElementById('passWord').value;
var message = document.getElementById('text');

if(inputText.length == 0 || inputText1.length == 0)  {
    message.textContent = "Both field contains atleast 5 letters";
    message.style.color = "red";
}
 else if(inputText1.length <6 || inputText1.length > 12){
    message.textContent = "Password length incorrect";
    message.style.color = "red";
}
else if(inputText.length <4 ){
    message.textContent = "Username contains atleast 5 letters";
    message.style.color = "red";
}

else{
    message.textContent = "success";
    message.style.color = "green";
}

}