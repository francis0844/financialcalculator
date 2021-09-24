var target1 = document.getElementById("f1");
var btn1 = document.getElementById("car1");

var target2 = document.getElementById("f2");
var btn2 = document.getElementById("car2");

var target3 = document.getElementById("f3");
var btn3 = document.getElementById("car3");

var cal = document.getElementById("cal");
cal.disabled = true;

var dropdownper = document.getElementById("percent");
var percent = dropdownper.options[dropdownper.selectedIndex].text;

var dropdownterm = document.getElementById("term");
var term = dropdownterm.options[dropdownterm.selectedIndex].text;

var price;
var variant;
var carname;
var carimage;

//hide and show divisions
btn1.onclick = function(){
    target1.style.display = "block";
    target2.style.display = "none";
    target3.style.display = "none";

    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");

    price = undefined;

    //validation
    if(price == undefined){
        cal.disabled = true;
    }
    else{
        cal.disabled = false;
    }
};

btn2.onclick = function(){
    target1.style.display = "none";
    target2.style.display = "block";
    target3.style.display = "none";

    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");

    price = undefined;

    //validation
    if(price == undefined){
        cal.disabled = true;
    }
    else{
        cal.disabled = false;
    }
};

btn3.onclick = function(){
    target1.style.display = "none";
    target2.style.display = "none";
    target3.style.display = "block";

    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");

    price = undefined;

    //validation
    if(price == undefined){
        cal.disabled = true;
    }
    else{
        cal.disabled = false;
    }
};

var type1 = document.getElementById("type1");
var type2 = document.getElementById("type2");
var type3 = document.getElementById("type3");
var type11 = document.getElementById("type11");
var type111 = document.getElementById("type111");
var type222 = document.getElementById("type222");

//active link activator
type1.onclick = function(){
    type1.classList.add("active");
    type2.classList.remove("active");
    type3.classList.remove("active");
    type11.classList.remove("active");
    type111.classList.remove("active");
    type222.classList.remove("active");
    
    price = 48000;
    variant = "1.5 S MT";
    carname = "2013 Nexus Sedan";
    carimage = "https://localhost/tshirtcompany/wp-content/uploads/2021/09/car1.jpg";

    //validation
    if(price == undefined){
        cal.disabled = true;
    }
    else{
        cal.disabled = false;
    }
}

type2.onclick = function(){
    type1.classList.remove("active");
    type2.classList.add("active");
    type3.classList.remove("active");
    type11.classList.remove("active");
    type111.classList.remove("active");
    type222.classList.remove("active");

    price = 88000;
    variant = "1.5 S CVT";
    carname = "2013 Nexus Sedan";
    carimage = "https://localhost/tshirtcompany/wp-content/uploads/2021/09/car1.jpg";

    //validation
    if(price == undefined){
        cal.disabled = true;
    }
    else{
        cal.disabled = false;
    }
}

type3.onclick = function(){
    type1.classList.remove("active");
    type2.classList.remove("active");
    type3.classList.add("active");
    type11.classList.remove("active");
    type111.classList.remove("active");
    type222.classList.remove("active");

    price = 78000;
    variant = "1.5 S V CVT";
    carname = "2013 Nexus Sedan";
    carimage = "https://localhost/tshirtcompany/wp-content/uploads/2021/09/car1.jpg";

    //validation
    if(price == undefined){
        cal.disabled = true;
    }
    else{
        cal.disabled = false;
    }
}
type11.onclick = function(){
    type11.classList.add("active");
    type1.classList.remove("active");
    type2.classList.remove("active");
    type3.classList.remove("active");

    price = 57000;
    variant = "1.5 S MT";
    carname = "2017 Monarch Sedan";
    carimage = "https://localhost/tshirtcompany/wp-content/uploads/2021/09/car2.jpg";

    //validation
    if(price == undefined){
        cal.disabled = true;
    }
    else{
        cal.disabled = false;
    }
}
type111.onclick = function(){
    type111.classList.add("active");
    type222.classList.remove("active");
    type1.classList.remove("active");
    type2.classList.remove("active");
    type3.classList.remove("active");
    type11.classList.remove("active");

    price = 65000;
    variant = "1.5 S MT";
    carname = "2016 Divi Lead SUV";
    carimage = "https://localhost/tshirtcompany/wp-content/uploads/2021/09/car3.jpg";

    //validation
    if(price == undefined){
        cal.disabled = true;
    }
    else{
        cal.disabled = false;
    }
}
type222.onclick = function(){
    type11.classList.remove("active");
    type111.classList.remove("active");
    type222.classList.add("active");
    type1.classList.remove("active");
    type2.classList.remove("active");
    type3.classList.remove("active");

    price = 90000;
    variant = "1.5 S CVT";
    carname = "2016 Divi Lead SUV";
    carimage = "https://localhost/tshirtcompany/wp-content/uploads/2021/09/car3.jpg";

    //validation
    if(price == undefined){
        cal.disabled = true;
    }
    else{
        cal.disabled = false;
    }
}



//getting id of div for showing of results
var resultcon = document.getElementById("result");

//calculation
cal.onclick = function(){
    
    var dropdownper = document.getElementById("percent");
    var percent = dropdownper.options[dropdownper.selectedIndex].text;

    var dropdownterm = document.getElementById("term");
    var term = dropdownterm.options[dropdownterm.selectedIndex].text;

    var decimal = percent/100;
    var downpayment = decimal * price;

    var amountfinanced = price - downpayment;
    
    var monthlysc = amountfinanced / term;
    var monthly = monthlysc.toFixed(2);

    resultcon.style.display = "block";

    document.getElementById("carimage").src = carimage;
    document.getElementById("carname").innerHTML = carname;
    document.getElementById("variant").innerHTML = variant;
    document.getElementById("dp").innerHTML = percent + "%";
    document.getElementById("payterm").innerHTML = term + " Months";
    document.getElementById("price").innerHTML = "$" + price;
    document.getElementById("dpamount").innerHTML = "$" + downpayment;
    document.getElementById("amountfinanced").innerHTML = "$" + amountfinanced;
    document.getElementById("monthly").innerHTML = "$" + monthly;

    document.getElementById("cars").style.display = "none";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f2").style.display = "none";
    document.getElementById("f3").style.display = "none";
    document.getElementById("drop").style.display = "none";
    document.getElementById("butcon").style.display = "none";

    document.getElementById("refresh").style.display = "block";
}

document.getElementById("refresh").onclick = function(){
    location.reload();
};