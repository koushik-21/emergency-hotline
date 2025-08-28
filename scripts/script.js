/////////////////////////////////// [card-section] ///////////////////////////////////////////
/////////////////////////////////// [national emergency number - 999]
document.getElementById('call-national-emergency').addEventListener('click', function (event) {
    console.log('hello, Is this the 999 ??');
    const serviceName = document.getElementById('national-emergency').innerText;
    const serviceNum = document.getElementById('national-emergency-number').innerText;
    let time = new Date().toLocaleTimeString('en-US', { hour12: true });
    //  alert('Service name: '+serviceName +'  Phone-number: '+serviceNum);
    const coin = document.getElementById('coin').innerText;
    if (coin >= 20) {
        const newCoin = coin - 20;
        const x = document.getElementById('coin').innerText = newCoin;
        console.log(x);
    }
    else {
        alert('Coin balance is low. Please recharge coin.')
        return 0;
    }

    const div = document.createElement('div');
    div.innerHTML = `<div class="flex text-xs justify-between bg-gray-100 p-2 mt-2 rounded-l">
                            <div class="w-3/4">
                                <p class="font-bold">${serviceName}</p>
                                <p class="text-gray-800">${serviceNum}</p>
                            </div>
                            <div class="w-1/4 content-center">
                                <time datetime="time">${time}</time>
                            </div>
                        </div>`;
    const parentNode = document.getElementById('call-history');
    parentNode.appendChild(div);
})
///////////////////////////////// [Police Help Number]
document.getElementById('call-police-number').addEventListener('click', function (event) {
    console.log('hello, Is this the 999 , the police ??');
    const serviceName = document.getElementById('police-help').innerText;
    const serviceNum = document.getElementById('police-help-number').innerText;
    let time = new Date().toLocaleTimeString('en-US', { hour12: true });
    //  alert('Service name: '+serviceName +'  Phone-number: '+serviceNum);
    const coin = document.getElementById('coin').innerText;
    if (coin >= 20) {
        const newCoin = coin - 20;
        const x = document.getElementById('coin').innerText = newCoin;
        console.log(x);
    }
    else {
        alert('Coin balance is low. Please recharge coin.')
        return 0;
    }

    const div = document.createElement('div');
    div.innerHTML = `<div class="flex text-xs justify-between bg-gray-100 p-2 mt-2 rounded-l">
                            <div class="w-3/4 ">
                                <p class="font-bold">${serviceName}</p>
                                <p class="text-gray-800">${serviceNum}</p>
                            </div>
                            <div class="w-1/4  content-center">
                                <time datetime="time">${time}</time>
                            </div>
                        </div>`;
    const parentNode = document.getElementById('call-history');
    parentNode.appendChild(div);
})
///////////////////////////////// [Fire Service Number]
document.getElementById('call-fire-service').addEventListener('click', function (event) {
    console.log('hello, Is this the 999 , the police ??');
    const serviceName = document.getElementById('fire-service').innerText;
    const serviceNum = document.getElementById('fire-service-number').innerText;
    let time = new Date().toLocaleTimeString('en-US', { hour12: true });
    //  alert('Service name: '+serviceName +'  Phone-number: '+serviceNum);
    const coin = document.getElementById('coin').innerText;
    if (coin >= 20) {
        const newCoin = coin - 20;
        const x = document.getElementById('coin').innerText = newCoin;
        console.log(x);
    }
    else {
        alert('Coin balance is low. Please recharge coin.')
        return 0;
    }

    const div = document.createElement('div');
    div.innerHTML = `<div class=" flex text-xs justify-between bg-gray-100 p-2 mt-2 rounded-l">
                            <div class="w-3/4 ">
                                <p class="font-bold">${serviceName}</p>
                                <p class="text-gray-800">${serviceNum}</p>
                            </div>
                            <div class="w-1/4  content-center">
                                <time datetime="time">${time}</time>
                            </div>
                        </div>`;
    const parentNode = document.getElementById('call-history');
    parentNode.appendChild(div);
})
///////////////////////////////// [Ambulance Service]
document.getElementById('call-ambulance-service').addEventListener('click', function (event) {
    console.log('hello, Is this the 999 , the police ??');
    const serviceName = document.getElementById('ambulance-service').innerText;
    const serviceNum = document.getElementById('ambulance-service-number').innerText;
    let time = new Date().toLocaleTimeString('en-US', { hour12: true });
    //  alert('Service name: '+serviceName +'  Phone-number: '+serviceNum);
    const coin = document.getElementById('coin').innerText;
    if (coin >= 20) {
        const newCoin = coin - 20;
        const x = document.getElementById('coin').innerText = newCoin;
        console.log(x);
    }
    else {
        alert('Coin balance is low. Please recharge coin.')
        return 0;
    }

    const div = document.createElement('div');
    div.innerHTML = `<div class="flex text-xs justify-between bg-gray-100 p-2 mt-2 rounded-l">
                            <div class="w-3/4 ">
                                <p class="font-bold">${serviceName}</p>
                                <p class="text-gray-800">${serviceNum}</p>
                            </div>
                            <div class="w-1/4 content-center">
                                <time datetime="time">${time}</time>
                            </div>
                        </div>`;
    const parentNode = document.getElementById('call-history');
    parentNode.appendChild(div);
})
///////////////////////////////// [Women & Child Helpline]
document.getElementById('call-wAndC-helpline').addEventListener('click', function (event) {
    console.log('hello, Is this the 999 , the police ??');
    const serviceName = document.getElementById('wAndC-helpline').innerText;
    const serviceNum = document.getElementById('wAndC-helpline-number').innerText;
    let time = new Date().toLocaleTimeString('en-US', { hour12: true });
    //  alert('Service name: '+serviceName +'  Phone-number: '+serviceNum);
    const coin = document.getElementById('coin').innerText;
    if (coin >= 20) {
        const newCoin = coin - 20;
        const x = document.getElementById('coin').innerText = newCoin;
        console.log(x);
    }
    else {
        alert('Coin balance is low. Please recharge coin.')
        return 0;
    }

    const div = document.createElement('div');
    div.innerHTML = `<div class=" flex text-xs justify-between bg-gray-100 p-2 mt-2 rounded-l">
                            <div class="w-3/4 ">
                                <p class="font-bold">${serviceName}</p>
                                <p class="text-gray-800">${serviceNum}</p>
                            </div>
                            <div class="w-1/4  content-center">
                                <time datetime="time">${time}</time>
                            </div>
                        </div>`;
    const parentNode = document.getElementById('call-history');
    parentNode.appendChild(div);
})
///////////////////////////////// [Anti-Corruption Helpline]
document.getElementById('call-anti-corruption').addEventListener('click', function (event) {
    console.log('hello, Is this the 999 , the police ??');
    const serviceName = document.getElementById('anti-corruption').innerText;
    const serviceNum = document.getElementById('anti-corruption-number').innerText;
    let time = new Date().toLocaleTimeString('en-US', { hour12: true });
    //  alert('Service name: '+serviceName +'  Phone-number: '+serviceNum);
    const coin = document.getElementById('coin').innerText;
    if (coin >= 20) {
        const newCoin = coin - 20;
        const x = document.getElementById('coin').innerText = newCoin;
        console.log(x);
    }
    else {
        alert('Coin balance is low. Please recharge coin.')
        return 0;
    }

    const div = document.createElement('div');
    div.innerHTML = `<div class="flex text-xs justify-between bg-gray-100 p-2 mt-2 rounded-l">
                            <div class="w-3/4 ">
                                <p class="font-bold">${serviceName}</p>
                                <p class="text-gray-800">${serviceNum}</p>
                            </div>
                            <div class="w-1/4  content-center">
                                <time datetime="time">${time}</time>
                            </div>
                        </div>`;
    const parentNode = document.getElementById('call-history');
    parentNode.appendChild(div);
})
///////////////////////////////// [Electricity Helpline]
document.getElementById('call-electricity-helpline').addEventListener('click', function (event) {
    console.log('hello, Is this the 999 , the police ??');
    const serviceName = document.getElementById('electricity-helpline').innerText;
    const serviceNum = document.getElementById('electricity-helpline-number').innerText;
    let time = new Date().toLocaleTimeString('en-US', { hour12: true });
    //  alert('Service name: '+serviceName +'  Phone-number: '+serviceNum);
    const coin = document.getElementById('coin').innerText;
    if (coin >= 20) {
        const newCoin = coin - 20;
        const x = document.getElementById('coin').innerText = newCoin;
        console.log(x);
    }
    else {
        alert('Coin balance is low. Please recharge coin.')
        return 0;
    }

    const div = document.createElement('div');
    div.innerHTML = `<div class=" flex text-xs justify-between bg-gray-100 p-2 mt-2 rounded-l">
                            <div class="w-3/4 ">
                                <p class="font-bold">${serviceName}</p>
                                <p class="text-gray-800">${serviceNum}</p>
                            </div>
                            <div class="w-1/4  content-center">
                                <time datetime="time">${time}</time>
                            </div>
                        </div>`;
    const parentNode = document.getElementById('call-history');
    parentNode.appendChild(div);
})
///////////////////////////////// [Brac Helpline]
document.getElementById('call-brac-helpline').addEventListener('click', function (event) {
    console.log('hello, Is this the 999 , the police ??');
    const serviceName = document.getElementById('brac-helpline').innerText;
    const serviceNum = document.getElementById('brac-helpline-number').innerText;
    let time = new Date().toLocaleTimeString('en-US', { hour12: true });
    //  alert('Service name: '+serviceName +'  Phone-number: '+serviceNum);
    const coin = document.getElementById('coin').innerText;
    if (coin >= 20) {
        const newCoin = coin - 20;
        const x = document.getElementById('coin').innerText = newCoin;
        console.log(x);
    }
    else {
        alert('Coin balance is low. Please recharge coin.')
        return 0;
    }

    const div = document.createElement('div');
    div.innerHTML = `<div class=" flex text-xs justify-between bg-gray-100 p-2 mt-2 rounded-l">
                            <div class="w-3/4 ">
                                <p class="font-bold">${serviceName}</p>
                                <p class="text-gray-800">${serviceNum}</p>
                            </div>
                            <div class="w-1/4  content-center">
                                <time datetime="time">${time}</time>
                            </div>
                        </div>`;
    const parentNode = document.getElementById('call-history');
    parentNode.appendChild(div);
})
///////////////////////////////// [Bangladesh Railway Helpline]
document.getElementById('call-bdRailway-helpline').addEventListener('click', function (event) {
    console.log('hello, Is this the 999 , the police ??');
    const serviceName = document.getElementById('bdRailway-helpline').innerText;
    const serviceNum = document.getElementById('bdRailway-helpline-number').innerText;
    let time = new Date().toLocaleTimeString('en-US', { hour12: true });
    //  alert('Service name: '+serviceName +'  Phone-number: '+serviceNum);
    const coin = document.getElementById('coin').innerText;
    if (coin >= 20) {
        const newCoin = coin - 20;
        const x = document.getElementById('coin').innerText = newCoin;
        console.log(x);
    }
    else {
        alert('Coin balance is low. Please recharge coin.')
        return 0;
    }

    const div = document.createElement('div');
    div.innerHTML = `<div class="w-full flex text-xs justify-between bg-gray-100 p-2 mt-2 rounded-l">
                            <div class="w-3/4 ">
                                <p class="font-bold">${serviceName}</p>
                                <p class="text-gray-800">${serviceNum}</p>
                            </div>
                            <div class="w-1/4  content-center">
                                <time datetime="time">${time}</time>
                            </div>
                        </div>`;
    const parentNode = document.getElementById('call-history');
    parentNode.appendChild(div);
})



///////////////////////////////// [Call History Section] ////////////////////////////
//////////////////// [clear the call records]
document.getElementById('clear-history').addEventListener('click', function (event) {
    const parentNode = document.getElementById('call-history');
    parentNode.innerHTML = ``;
})