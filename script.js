const getSumBtn = document.createElement("button");

getSumBtn.append("Get Total Price");

document.body.appendChild(getSumBtn);

const getSum = () => {

    // Check if total row already exists
    if (document.querySelector("#totalRow")) {
        return;
const itemsPrice = document.querySelectorAll(".prices")
    let totalAmount = 0

    itemsPrice.forEach((item)=>{
        console.log(item.textContent)
        totalAmount += Number(item.textContent)
    })


    const tr = document.createElement("tr")

    const td1 = document.createElement("td")
    td1.textContent = "TotalAmount"

    const td2 = document.createElement("td")
    td2.textContent = totalAmount



    tr.append(td1,td2)

    document.querySelector("table").appendChild(tr)

};

getSumBtn.addEventListener("click", getSum);

