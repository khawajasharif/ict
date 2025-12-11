const pid = document.getElementById('pid');
const quantity = document.getElementById('quantity');
const duration = document.getElementById('duration');
const totalPrice = document.getElementById('total');


const prices = {
    b_starter: {
        monthly: 5.50,
        annually: 66.00
    },
    b_standard: {
        monthly: 11.49,
        annually: 137.88
    },
    b_plus: {
        monthly: 17.50,
        annually: 210.00
    },
    e_plus: {
        monthly: 28.99,
        annually: 347.88
    },

};

const plans = {
    b_starter: 80,
    b_standard: 200,
    b_plus: 201,
    e_plus: 202,
};



let priceEl = document.getElementById('price');
let planPrice = prices.b_starter.monthly;






quantity.addEventListener('keyup', function() {
    planPrice = changePriceHandler(pid.value, "annually").toFixed(2)
    priceEl.innerHTML = planPrice;
    setTotalPriceHandler();


})

pid.addEventListener('change', function() {
    planPrice = changePriceHandler(pid.value, "annually").toFixed(2)
    priceEl.innerHTML = planPrice;


    setTotalPriceHandler()
})


// duration.addEventListener('change', function() {
//     planPrice = changePriceHandler(pid.value, "annually").toFixed(2)
//     priceEl.innerHTML = planPrice;
//     setTotalPriceHandler()
// })


// Set total price
const setTotalPriceHandler = () => {
    totalPrice.innerHTML = (priceEl.innerHTML * quantity.value).toFixed(2);
}


// Set plan price
const changePriceHandler = (pidValue, duration) => {
    switch (pidValue) {
        case '82':
            planPrice = duration === 'monthly' ? prices.b_starter.monthly : prices.b_starter.annually;
            break;
        case '200':
            planPrice = duration === 'monthly' ? prices.b_standard.monthly : prices.b_standard.annually;
            break;
        case '201':
            planPrice = duration === 'monthly' ? prices.b_plus.monthly : prices.b_plus.annually;
            break;

        case '202':
            planPrice = duration === 'monthly' ? prices.e_plus.monthly : prices.e_plus.annually;
            break;
    }
    return planPrice;
}


const setPlanNameHandler = (planValue)=>{
          pid.value = planValue;
          planPrice = changePriceHandler(pid.value, "annually").toFixed(2)
          priceEl.innerHTML = planPrice;
          setTotalPriceHandler()

}



