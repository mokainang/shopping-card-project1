// Global declaration
//const BASKET_PRICE = document.getElementById("bsk_uprice");
const TOTAL_PRICE = document.getElementById("tot_price");
let TOT_PRICE = 0;
let GTOTAL = 0;


//Product 1 declaration
const INCREASE_BTN = document.getElementById("increase");
const DECREASE_BTN = document.getElementById("decrease");
const NEW_COUNT = document.getElementById("qty_count");
const HEART_CLICK = document.getElementById("hrt_id");
const REMOVE_PRO1 = document.getElementById("trash_prod1");
const itemOut = document.getElementById("prod_1");
let count = 0;
let newTotal = 0;


//Product 2 declaration
const INCREASE_BTN2 = document.getElementById("increase2");
const DECREASE_BTN2 = document.getElementById("decrease2");
const NEW_COUNT2 = document.getElementById("qty_count2");
const HEART_CLICK2 = document.getElementById("hrt_id2");
const REMOVE_PRO2 = document.getElementById("trash_prod2");
const itemOut2 = document.getElementById("prod_2");
let count2 = 0;
let newTotal2 = 0;


//Product 3 declaration
const INCREASE_BTN3 = document.getElementById("increase3");
const DECREASE_BTN3 = document.getElementById("decrease3");
const NEW_COUNT3 = document.getElementById("qty_count3");
const HEART_CLICK3 = document.getElementById("hrt_id3");
const REMOVE_PRO3 = document.getElementById("trash_prod3");
const itemOut3 = document.getElementById("prod_3");
let count3 = 0;
let newTotal3 = 0;


// Product 1 Scripts
function increaseCount() {
    count = count + 1;
    NEW_COUNT.innerText = count;
    //newTotal = 100 * NEW_COUNT.innerText;
    TOT_PRICE = 100
    TOTAL_PRICE.innerText = parseInt(TOTAL_PRICE.innerText) + TOT_PRICE;

}

INCREASE_BTN.addEventListener("click", increaseCount);


function decreaseCount() {
    if (count < 1) {
      return
    } else {
        count = count - 1;
        NEW_COUNT.innerText = count;
    
        TOT_PRICE = 100
    TOTAL_PRICE.innerText = parseInt(TOTAL_PRICE.innerText) - TOT_PRICE;
    }
}
DECREASE_BTN.addEventListener("click", decreaseCount);

function heartClick() {
    HEART_CLICK.style.color = "red";
}

HEART_CLICK.addEventListener("click", heartClick);

function delItems() {
    GTOTAL = TOTAL_PRICE.innerText - (count * 100);
    TOTAL_PRICE.innerText = GTOTAL;
    itemOut.remove();
}
REMOVE_PRO1.addEventListener("click", delItems);


// Product 2 Scripts
function increaseCount2() {
    count2 = count2 + 1;
    NEW_COUNT2.innerText = count2;
    newTotal2 = 20
    TOTAL_PRICE.innerText = parseInt(TOTAL_PRICE.innerText) + newTotal2;
}

INCREASE_BTN2.addEventListener("click", increaseCount2);


function decreaseCount2() {
    if (count2 < 1) {
        return
    
    } else {
        count2 = count2 - 1;
        NEW_COUNT2.innerText = count2;
        newTotal2 = 20
        TOTAL_PRICE.innerText = parseInt(TOTAL_PRICE.innerText) - newTotal2;
    }
}
DECREASE_BTN2.addEventListener("click", decreaseCount2);

function heartClick2() {
    HEART_CLICK2.style.color = "red";
}

HEART_CLICK2.addEventListener("click", heartClick2);

function delItems2() {
    GTOTAL = TOTAL_PRICE.innerText - (count2 * 20);
    TOTAL_PRICE.innerText = GTOTAL;
    itemOut2.remove();
}
REMOVE_PRO2.addEventListener("click", delItems2);



// Product 3 Scripts
function increaseCount3() {
    count3 = count3 + 1;
    NEW_COUNT3.innerText = count3;
    newTotal3 = 50
    TOTAL_PRICE.innerText = parseInt(TOTAL_PRICE.innerText) + newTotal3;
}

INCREASE_BTN3.addEventListener("click", increaseCount3);


function decreaseCount3() {
    if (count3 < 1) {
        return
    
    } else {
        count3 = count3 - 1;
        NEW_COUNT3.innerText = count3;
        newTotal3 = 50
        TOTAL_PRICE.innerText = parseInt(TOTAL_PRICE.innerText) - newTotal3;
    }
}
DECREASE_BTN3.addEventListener("click", decreaseCount3);

function heartClick3() {
    HEART_CLICK3.style.color = "red";
}

HEART_CLICK3.addEventListener("click", heartClick3);

function delItems3() {
    GTOTAL = TOTAL_PRICE.innerText - (count3 * 50);
    TOTAL_PRICE.innerText = GTOTAL;
    itemOut3.remove();
}
REMOVE_PRO3.addEventListener("click", delItems3);