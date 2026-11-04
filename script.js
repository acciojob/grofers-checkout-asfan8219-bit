const getSumBtn = document.createElement("button");

getSumBtn.append("Get Total Price");

document.body.appendChild(getSumBtn);

const getSum = () => {

    // Check if total row already exists
    if (document.querySelector("#totalRow")) {
        return;
    }

    const itemsPrice = document.querySelectorAll(".prices");

    let totalAmount = 0;

    itemsPrice.forEach((item) => {
        console.log(item.textContent);

        totalAmount += Number(item.textContent);
    });

    // Create row outside the loop
    const tr = document.createElement("tr");

    tr.id = "totalRow";

    const td = document.createElement("td");

    td.textContent = "Total Price: " + totalAmount;

    tr.appendChild(td);

    document.querySelector("table").appendChild(tr);

};

getSumBtn.addEventListener("click", getSum);

