window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script22 = function()
{
  var player = GetPlayer();
var password = player.GetVar("passwordEntry");
var pwdLength = player.GetVar("passwordLength");
var capitalLetter = player.GetVar("passwordCapitalLetter");
var hasNumber = player.GetVar("passwordHasNumber");
var uniqueChar = player.GetVar("passwordHasUniqueChar");
var correctCount = player.GetVar("correctCount");

if(password.length >= 8){
	pwdLength = true;
	correctCount++;
};

if(password !== password.toLowerCase()){
	capitalLetter = true;
	correctCount++;
};

if(/\d/.test(password)){
	hasNumber = true;
	correctCount++;
};

if(/\W/.test(password)){
	uniqueChar = true
	correctCount++;
};

player.SetVar("passwordLength", pwdLength);
player.SetVar("passwordCapitalLetter", capitalLetter);
player.SetVar("passwordHasNumber", hasNumber);
player.SetVar("passwordHasUniqueChar", uniqueChar);
player.SetVar("correctCount", correctCount);
}

};
