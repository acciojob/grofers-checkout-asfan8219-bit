const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	 const itemsPrice = document.querySelectorAll(".prices")

    let totalAmount = 0

    itemsPrice.forEach((item)=>{
        console.log(item.textContent)
        totalAmount +=Number(item.textContent)

		    console.log(totalAmount)
        const tr = document.createElement("tr");
            const td = document.createElement("td");
         td.textContent = "Total Price: " + totalAmount;
          tr.appendChild(td)
          document.querySelector("table").appendChild(tr);
    })
  
};

getSumBtn.addEventListener("click", getSum);

