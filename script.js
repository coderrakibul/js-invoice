document.getElementById("detail-submit-btn").addEventListener("click", function(){
    const buyerDetailsInput = document.getElementById("buyer-details-input");
   const inputText = buyerDetailsInput.value;

    const buyerInfo = document.getElementById("buyer-info");
    const buyerInfoText = buyerInfo.innerText;
    buyerInfo.innerText = inputText;

    buyerDetailsInput.value = "";
});


document.getElementById("add-details-btn").addEventListener("click", function(){
    const infoTable = document.getElementById("info-table");

    const itemNameInput = document.getElementById("item-name-input");
    const itemNameText = itemNameInput.value;

    const itemPriceInput = document.getElementById("item-price-input");
    const itemPriceText = itemPriceInput.value;

    const itemQuantityInput = document.getElementById("item-quantity-input");
    const itemQuantityText = itemQuantityInput.value;

    const totalPrice = parseInt(itemPriceText) * parseInt(itemQuantityText);

    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    th.innerText = itemNameText;
    td1.innerText = itemPriceText;
    td2.innerText = itemQuantityText;
    td3.innerText = totalPrice;
    
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);

   

})