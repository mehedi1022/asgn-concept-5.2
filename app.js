// function handleSelect(){
//     console.log("boss select korsi");
// }

const allBtn = document.getElementsByClassName("add-btn");
let count = 0;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        count = count + 1;

        // console.log(e.target.parentNode.childNodes[1].innerText);

        const placeName = e.target.parentNode.childNodes[1].innerText;

        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;

        const selectContainer = document.getElementById("selected-place-container");

        const li = document.createElement("li");

        const p = document.createElement("p");
        p.innerText = placeName;
        const p2 = document.createElement("p");
        p2.innerText = price;

        e.target.parentNode.parentNode.style.backgroundColor = "gray";
        // e.target.setA 

        li.appendChild(p);
        li.appendChild(p2);

        const budget = document.getElementById("budget").innerText;
        const convertedBudget = parseInt(budget);
        if(convertedBudget - parseInt(price)<0){
            alert("low budget please earn more");
            return;
        }
        document.getElementById("budget").innerText = convertedBudget - parseInt(price);

        selectContainer.appendChild(li);


        // document.getElementById("total-cost").innerText = sum;
        totalCost("total-cost", parseInt(price))
        const grandTotal = document.getElementById(grand - total).innerText;

        const convertedGrandTotal = parseInt(grandTotal);

        const sum2 = convertedGrandTotal + parseInt(price);

       


        setInnerText("grandTotal", sum2);

        grandTotalCost("other");

        setInnerText("cart-count", count);
    });
}
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function setInnerText(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    setInnerText("total-cost", sum);
}

// do this work with function
function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;

    const convertedTotalCost = parseInt(totalCost);

    const sum = convertedTotalCost + parseInt(value);
    setInnerText("total-cost", sum);
}


function grandTotalCost(category) {
    const totalCost = document.getElementById("total-cost").innerText;
    const convertedTotalCost = parseInt(totalCost);

    if (category == "buss") {
        setInnerText("grand-total", convertedTotalCost + 100);
    } else if(category == "train"){
        setInnerText("grand-total", convertedTotalCost - 200);
    } else if(category == "flight"){
        setInnerText("grand-total", convertedTotalCost + 500);
    } else if{
        setInnerText("grand-total", convertedTotalCost);
    }
}