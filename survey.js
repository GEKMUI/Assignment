function formValidation()
{
	var YC = document.survey.yes;
	var NC = document.survey.no;
	var age = document.survey.age;
	var favP = document.survey.bias;
	var FavU = document.survey.unit;
{
if(validgen(YC,NC))
{
if(biasselect(favP))
{
if (unitselect(FavU))
{

}
}
}
}

return false;

}function validgen(YC,NC)
{
x=0;

if(YC.checked)
{
x++;
}if(NC.checked)
{
x++;
}
if(x==0)
{
alert('Select Yes/No');
YC.focus();
return false;
}
else
{
return true;
}
}

function biasselect(favP)
{
if(favP.value == "Default")
{
alert('Select Your Bias');
favP.focus();
return false;
}
else
{
return true;
}
}

function unitselect(FavU)
{
if(FavU.value == "Default")
{
alert('Select favorite Unit');
FavU.focus();
return false;
}
else
{
alert('Survey Succesfully Submitted');
window.location.reload()
return true;
}
}
