function getParaghraph1() {
    var inputs = [];
for (var i = 1; i <=6; i++)
{
    inputs.push(document.getElementById ("1" + i).value);
}

inputs.join(". ");
document.getElementById("ShowParagraph1").innerHTML = inputs.join(". ");
}  

function getParaghraph2() {
    var inputs2 = [];
for (var i = 1; i <=6; i++)
{
    inputs2.push(document.getElementById ("7" + i).value);
}

inputs2.join(". ");
document.getElementById("ShowParagraph1").innerHTML = inputs2.join(". ");
}  
