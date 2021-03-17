function getTotal (phone, casing){
    const phonePrice = 500;
    const casingPrice = 50;
    const phoneCost = phone * phonePrice;
    const casingCost = casing * casingPrice;
    const total = phoneCost + casingCost;

    const totalElement = document.getElementById('total-cost');
    totalElement.innerText = total;
    return total;
}

const totalCost = getTotal(5, 3);
const firstResult = document.getElementById('first-result');
firstResult.innerText = totalCost;

const secondResult = document.getElementById('second-result');
secondResult.innerText = totalCost;
