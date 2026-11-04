const getSumBtn = document.createElement("button");

getSumBtn.append("Get Total Price");

document.body.appendChild(getSumBtn);

const getSum = () => {

    // Check if total row already exists
    if (document.querySelector("#totalRow")) {
        return;
    }
  const itemsprice = document.querySelectorAll(".prices")

        let totalamount = 0
        itemsprice.forEach((item)=>{
            totalamount = totalamount + Number(item.textContent)
            console.log(totalamount)
        })

        const tr = document.createElement("tr")

        const td = document.createElement("td")

        td.textContent = "totalprice:" + totalamount
        tr.appendChild(td)

        document.querySelector("table").appendChild(tr)

};

getSumBtn.addEventListener("click", getSum);

