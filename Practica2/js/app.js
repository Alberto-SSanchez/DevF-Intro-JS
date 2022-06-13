

function evento7()
{
    document.getElementById("display").value += "7";
}
function evento8()
{
    document.getElementById("display").value += "8";
}

function evento9()
{
    document.getElementById("display").value += "9";
}

function eventoDiv()
{
    if(!(document.getElementById("display").value == "/")){
        document.getElementById("display").value += "/";
    }
}               
           
function evento4()
{
    document.getElementById("display").value += "4";
}

function evento5()
{
    document.getElementById("display").value += "5";
}

function evento6()
{
    document.getElementById("display").value += "6";
}

function eventoSubs()
{
    if(!(document.getElementById("display").value == "-")){
        document.getElementById("display").value += "-";
    }
}
                   
function evento1()
{
    document.getElementById("display").value += "1";
}

function evento2()
{
    document.getElementById("display").value += "2";
}

function evento3()
{
    document.getElementById("display").value += "3";
}

function eventoAdd(){
    if(!(document.getElementById("display").value == "+"))
    {
        document.getElementById("display").value += "+";
    }
    
}
                    
function eventoAC(){
    document.getElementById("display").value = "";
}

function evento0(){
    document.getElementById("display").value += "0";
}

function eventoDecimal(){
    var length = document.getElementById("display").value.length;

    if(!(document.getElementById("display").value == ("." | ""))){
        document.getElementById("display").value += ".";
    }
    // else if((document.getElementById("display").value[-1] == ".")){
    //     document.getElementById("display").value += ".";
    // }
}

function eventoEqu(){
    document.getElementById("display").value = eval(document.getElementById("display").value)
}       

