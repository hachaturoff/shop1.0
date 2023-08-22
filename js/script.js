
const body = document.querySelector('body');

const subMenu = document.querySelector('.subMenu');
const subItem = document.querySelector('.subItem');
const ctgrs = document.querySelector('#categories');
const tringle = document.querySelector('#tringle');

const mainWrapper = document.querySelector('.main__wrapper');
const popUpContent = document.querySelector('.popUpContent');
const cartOpenBtn = document.querySelector('.cart');
const cartCloseBtn = document.querySelector('.cartClose');
const popUp = document.querySelector('#pop');
const cartCounter = document.querySelector('.cartCounter');
const cartTotal = document.querySelector('.cartTotal');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

const exit = document.querySelector('#exit');

const regLink = document.querySelector('#regLink');
const regWindow = document.querySelector('.registration');
const regSave = document.querySelector('#regSave');
const regClose = document.querySelector('#regClose');
const regForm = document.querySelector('.regContent')
const regLoginInput = document.querySelector('#regLogin');
const regPasswordInput = document.querySelector('#regPassword');
const regPasswordAgainInput = document.querySelector('#regPasswordAgain');
const regUniqueError = document.querySelector('.regUnique');
const regLegthError = document.querySelector('.regLength');
const regMatchError = document.querySelector('.regAgain');

const autorLink = document.querySelector('#autorLink');
const autWindow = document.querySelector('.authorization');
const autSend = document.querySelector('#autSend');
const autClose = document.querySelector('#autClose');
const autForm = document.querySelector('.autContent')
const autLoginInput = document.querySelector('#autLogin');
const autPasswordInput = document.querySelector('#autPassword');
const autLoginError = document.querySelector('.autLoginConfrim');
const autPasswordError = document.querySelector('.autPasswordConfrim');

const orderBtn = document.querySelector('.cartOrder')

const currentUser = document.querySelector('#currentUser');

let total = 0;



// const productsArr = [
//    {
//       id: 'el1',
//       category: 'Mixers',
//       name: 'DJM-A9',
//       price: 10180,
//       img: 'https://i.ibb.co/1JPQxCc/DJM-A9-cgi-top-pc.png',
//       disabled: false,
//    },
//    {
//       id: 'el2',
//       category: 'Mixers',
//       name: 'DJM-TOUR1',
//       price: 9600,
//       img: 'https://i.ibb.co/vsdwM3f/djm-tour1-main.png',
//       disabled: false,
//    },
//    {
//       id: 'el3',
//       category: 'Mixers',
//       name: 'DJM-S9',
//       price: 5400,
//       img: 'https://i.ibb.co/chDbb0S/djm-s9-main.png',
//       disabled: false,
//    },
//    {
//       id: 'el4',
//       category: 'Players',
//       name: 'XDJ-1000MK2',
//       price: 8090,
//       img: 'https://i.ibb.co/KWFkqTd/xdj-1000mk2-main.png',
//       disabled: false,
//    },
//    {
//       id: 'el5',
//       category: 'Players',
//       name: 'CDJ-TOUR1',
//       price: 9500,
//       img: 'https://i.ibb.co/zJjppHC/cdj-tour1-main.png',
//       disabled: false,
//    },
//    {
//       id: 'el6',
//       category: 'Players',
//       name: 'CDJ-350',
//       price: 2400,
//       img: 'https://i.ibb.co/F0Kjmq0/cdj-350-main.png',
//       disabled: false,
//    },
//    {
//       id: 'el7',
//       category: 'Controllers',
//       name: 'DDJ-FLX10',
//       price: 1800,
//       img: 'https://i.ibb.co/k9md9D6/pc-cgi-top.png',
//       disabled: false,
//    },
//    {
//       id: 'el8',
//       category: 'Controllers',
//       name: 'DDJ-REV1',
//       price: 1340,
//       img: 'https://i.ibb.co/7tPtCWC/ddj-rev1-prm-top-1792x1316-pc.png',
//       disabled: false,
//    },
//    {
//       id: 'el9',
//       category: 'Controllers',
//       name: 'DDJ-FLX6-GT',
//       price: 1730,
//       img: 'https://i.ibb.co/b7pbRV5/pc-cgi-top-6.png',
//       disabled: false,
//    },
//    {
//       id: 'el10',
//       category: 'Effectors',
//       name: 'DJS-1000',
//       price: 2680,
//       img: 'https://i.ibb.co/vsG2RBY/djs-1000-main.png',
//       disabled: false,
//    },
//    {
//       id: 'el11',
//       category: 'Effectors',
//       name: 'TORAIZ AS-1',
//       price: 1670,
//       img: 'https://i.ibb.co/9VwWkBB/toraiz-as-1-main-n.png',
//       disabled: false,
//    },
//    {
//       id: 'el12',
//       category: 'Effectors',
//       name: 'RMX-500',
//       price: 1290,
//       img: 'https://i.ibb.co/RQJT0P7/rmx-500-main.png',
//       disabled: false,
//    },
//    {
//       id: 'el13',
//       category: 'Headphones',
//       name: 'HDJ-X10 C',
//       price: 713,
//       img: 'https://i.ibb.co/2yZmq0T/hdj-x10c-hero.png',
//       disabled: false,
//    },
//    {
//       id: 'el14',
//       category: 'Headphones',
//       name: 'HRM-6',
//       price: 715,
//       img: 'https://i.ibb.co/K99tnyg/hrm-6-main.png',
//       disabled: false,
//    },
//    {
//       id: 'el15',
//       category: 'Headphones',
//       name: 'HDJ-CX',
//       price: 677,
//       img: 'https://i.ibb.co/Ytpnz2b/pc-cgi-angle.png',
//       disabled: false,
//    },
//    {
//       id: 'el16',
//       category: 'Speakers',
//       name: 'VM-80',
//       price: 1080,
//       img: 'https://i.ibb.co/6mvN3Zt/vm-80-prm-angle-pc.png',
//       disabled: false,
//    },
//    {
//       id: 'el17',
//       category: 'Speakers',
//       name: 'XPRS102',
//       price: 2460,
//       img: 'https://i.ibb.co/n3mpcWn/XPRS2-F10-angle-221124.png',
//       disabled: false,
//    },
//    {
//       id: 'el18',
//       category: 'Speakers',
//       name: 'XPRS1152S',
//       price: 5240,
//       img: 'https://i.ibb.co/kDBmw6Q/XPRS2-S15-angle-221124b.png',
//       disabled: false,
//    },
// ];

function showSubMenu() {
   console.log('sd')
   body.addEventListener('mouseover', e => {
      if(e.target === ctgrs) {
         subMenu.classList.add('show');
         tringle.classList.add("rotated");
      }
   body.addEventListener('click', event => {
      if(event.target !== ctgrs || event.target !== subItem || event.target !== subMenu) {
         subMenu.classList.remove('show');
         tringle.classList.remove("rotated");
      }
   })

   })
}

showSubMenu();

let cartArr = [];
let searchCat = '';


function renderPage(data) {
      let htmlCatalog = '';


      function render() {

         data.forEach(({id, category, name, price, img, disabled}) => {
            if(category === searchCat) {
               htmlCatalog += `
               <div class="item" data-id="${id}">
                  <span class="itemCategory">${category}</span>
                  <img class="itemImg" src="${img}" />
                  <span class="itemName">${name}</span>
                  <span class="itemPrice">${price.toLocaleString()} BYN</span>
                  <button class="itemBtn" style="visibility:${localStorage.getItem('currentUser') ? "visible" : "hidden"}">buy</button>
               </div>
               `
            } else if(searchCat === '' || searchCat === 'All') {
               htmlCatalog += `
               <div class="item" data-id="${id}">
                  <span class="itemCategory">${category}</span>
                  <img class="itemImg" src="${img}" />
                  <span class="itemName">${name}</span>
                  <span class="itemPrice">${price.toLocaleString()} BYN</span>
                  <button class="itemBtn" style="visibility:${localStorage.getItem('currentUser') ? "visible" : "hidden"}">buy</button>
               </div>
               `
            }
         })
   
   
         mainWrapper.innerHTML = htmlCatalog;
      }
      render();

      function chooseCategory() {
         subMenu.addEventListener('click', e => {
      
            searchCat = e.target.textContent;
            htmlCatalog = '';
            render();
         })
      }
      chooseCategory()
}



function renderCart() {
   let cartContent = '';

   cartArr.forEach(({id, category, name, price, img, quantity}) => {
      cartContent += `
      <div class="cartItem" data-id="${id}">
         <img class="cartImg" src="${img}" />
         <div class="cartInfo">
            <span class="cartName">${name}</span>
            <span class="cartCategory">${category}</span>
         </div>
         <div class="cartCalculations">
            <span>${price} *   </span>
            <button class="plus">+</button>
            <input class="cartInput type="number" value="${quantity}" min="1" max="100" step="1" readonly/>
            <button class="minus">-</button>
         </div>
         <div class="cartResult">
            <div class="cartResult">${price * quantity} BYN</div>
         </div>
         <div class="deleteBtn">
            <button class="delete">✖</button>
         </div>
      </div>
      `
   })
   popUpContent.innerHTML = cartContent;

}

function popUpSwitch() {
      cartOpenBtn.addEventListener('click', (event) => {
         event.preventDafault;
         if (cartArr.length === 0) {
            return
         } else {
            popUp.classList.remove('close')
         }
      })
      cartCloseBtn.addEventListener('click', (event) => {
         event.preventDafault;
         popUp.classList.add('close');
      })
      if (cartArr.length === 0) {
         popUp.classList.add('close')
      }
   }

function buyBtnClick(data) {
   mainWrapper.addEventListener('click', (event) => {
      if (event.target.closest('.itemBtn')) {
         let idBtn = event.target.parentElement.getAttribute('data-id');

         if (!event.target.getAttribute('disabled')) {
            event.target.setAttribute('disabled', '');
            event.target.textContent = 'in cart';
         } 
         // else {
         //    console.log(2)
         //    event.target.removeAttribute('disabled');
         //    event.target.textContent = 'Buy';
         // }

         let newItem = {
            quantity: 1,
         };

         data.filter((item) => {
            if(item.id === idBtn) {
               Object.assign(newItem, item);
               cartArr.push(newItem);
            } else {
               return
            }
      })
         sumCounter();
         renderCart();
         cartCountHeader();
      }
   })
}


function cartCountHeader() {
   
   if (cartArr.length === 0) {
      cartCounter.style.display = 'none';
   } else {
      cartCounter.style.display = 'flex';
      cartCounter.textContent = `${cartArr.length}`;
   }
}

function cartPlusMinus() {
   popUpContent.addEventListener('click', e => {

      e.preventDefault();
      let itemClass = e.target.className;
      if (itemClass === 'plus') {
         let elem = e.target.parentElement.parentElement.getAttribute('data-id');
         cartArr.find(e => {
            if(e.id === elem) {
               e.quantity++;
            }
         })
         sumCounter();
         renderCart();
      } else if (itemClass === 'minus'){
         let elem = e.target.parentElement.parentElement.getAttribute('data-id');
         cartArr.find(e => {
            if(e.id === elem) {
               e.quantity--;
            }
         })
         cartArr.forEach((item) => {
            if (item.quantity <= 0) {
               cartArr = cartArr.filter(function(f) { 
                  return f !== item 
               });
            }
         })

         let allItems = mainWrapper.children;
         let idArr = [];
         Array.from(allItems).forEach(e => {
            idArr.push(e.getAttribute('data-id'))
         })
         idArr.filter(id => {
            if(id === elem) {
               Array.from(allItems).find(e => {
                  if(e.getAttribute('data-id') === id) {
                     let element = e.childNodes;
                     element[9].removeAttribute('disabled');
                     element[9].textContent = 'buy';
                  }
               })
            }
         })
         sumCounter();
         renderCart();
      }
      cartCountHeader();
      popUpSwitch();
   })
}

function cartItemDelete() {
   popUpContent.addEventListener('click', e => {
      e.preventDefault();
      let itemClass = e.target.className;
      if (itemClass === 'delete') {
         let elem = e.target.parentElement.parentElement.getAttribute('data-id');
         let elemObj = cartArr.find(e => e.id === elem);
         cartArr = cartArr.filter(function(f) { 
            return f !== elemObj 
         });

         let allItems = mainWrapper.children;
         let idArr = [];
         Array.from(allItems).forEach(e => {
            idArr.push(e.getAttribute('data-id'))
         })
         idArr.filter(id => {
            if(id === elem) {
               Array.from(allItems).find(e => {
                  if(e.getAttribute('data-id') === id) {
                     let element = e.childNodes;
                     element[9].removeAttribute('disabled');
                     element[9].textContent = 'buy';
                  }
               })
            }
         })

         sumCounter();
         renderCart();
         cartCountHeader();
         popUpSwitch();
      }
   })
}

function sumCounter() {
   total = cartArr.reduce(function(acc, item) {
      return acc + item.price * item.quantity
   }, 0)
   cartTotal.textContent = `Total: ${total} BYN`;
}

function unlockBtns() {
   Array.from(allItems).forEach(e => {
      idArr.push(e.getAttribute('data-id'))
   })
   idArr.filter(id => {
      if(id === elem) {
         Array.from(allItems).find(e => {
            if(e.getAttribute('data-id') === id) {
               let element = e.childNodes;
               element[9].removeAttribute('disabled');
               element[9].textContent = 'buy';
            }
         })
      }
   })
}

function showRegAutorWindows(force = false) {
   if (force) {
      regWindow.classList.add('close');
      clearInputs();
      clearErrors();
      autWindow.classList.add('close');
      clearInputs();
      clearErrors();
   }
   regLink.addEventListener('click', e => {
      e.preventDefault();
      if (regWindow.classList.contains('close')) {
         regWindow.classList.remove('close')
      }
   })
   regClose.addEventListener('click', e => {
      if (!regWindow.classList.contains('close')) {
         regWindow.classList.add('close');
         clearInputs();
         clearErrors();
      }
   })
   autorLink.addEventListener('click', e => {
      e.preventDefault();
      if (autWindow.classList.contains('close')) {
         autWindow.classList.remove('close')
      }
   })
   autClose.addEventListener('click', e => {
      if (!autWindow.classList.contains('close')) {
         autWindow.classList.add('close');
         clearInputs();
         clearErrors();
      }
   })
}

function clearInputs() {
   regLoginInput.value = '';
   regPasswordInput.value = '';
   regPasswordAgainInput.value = '';

   autLoginInput.value = '';
   autPasswordInput.value = '';
}

function clearErrors() {
   regUniqueError.style.visibility = 'hidden';
   regLegthError.style.visibility = 'hidden';
   regMatchError.style.visibility = 'hidden';

   autLoginError.style.visibility = 'hidden';
   autPasswordError.style.visibility = 'hidden';
}

document.querySelectorAll('input').forEach((input) => {
   input.addEventListener('input', () => {
      clearErrors();
   });
});

function getRegInputs(users) {
   regForm.addEventListener('submit', e => {
      e.preventDefault();

      const regData = new FormData(e.target);

      let login = regData.get('regLogin');
      let password = regData.get('regPassword');
      let passwordAgain = regData.get('regPasswordAgain');

      let hasErrors = false;

      let arrUsers = [...users];

      for(const user of arrUsers) {
         if(user.login === login) {
            regUniqueError.style.visibility = 'visible';
            hasErrors = true;
         }
      }

      if(password.length < 8) {
         regLegthError.style.visibility = 'visible';
         hasErrors = true;
      }

      if (password !== passwordAgain) {
         regMatchError.style.visibility = 'visible';
         hasErrors = true;
      }

      if(hasErrors) {
         return;
      } else {
         register(login, password);
      }
   })
}



async function register(login, password) {

   let newUser = {
      id:login,
      login,
      password
   }

   makeCurrent(newUser);

   let post = await fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(newUser)
         })
   
   refreshHeader();
   renderPage(data);
}


async function authorization(users) {
   
   autForm.addEventListener('submit', event => {
      event.preventDefault();

      const autData = new FormData(event.target);

      let autLogin = autData.get('autLogin');
      let autPassword = autData.get('autPassword');

      let existingUser = null;
      
      for (const user of users) {
         if(user.login === autLogin) {
            existingUser = user;
            break;
         }
      }

      if (existingUser === null) {
         autLoginError.style.visibility = 'visible';

         return;
      }

      if (existingUser.password !== autPassword){
         autPasswordError.style.visibility = 'visible';

         return;
      }
      
      makeCurrent(existingUser);

      showRegAutorWindows(force = true);
      refreshHeader();
      location.reload();
   })

}


function makeCurrent(obj) {
   localStorage.setItem('currentUser', JSON.stringify(obj));

}

function showCurrent() {
   if(localStorage.getItem('currentUser')) {
      currentUser.textContent = JSON.parse(localStorage.getItem('currentUser')).login;
   }
}

function delelteCurrent() {
   exit.addEventListener('click', e => {
      e.preventDefault();

      localStorage.clear();
      refreshHeader();
      location.reload();
   })
}

function refreshHeader() {
   regLink.style.display   = localStorage.getItem('currentUser') === null ? 'flex' : 'none';
   autorLink.style.display = localStorage.getItem('currentUser') === null ? 'flex' : 'none';
   currentUser.style.display  = localStorage.getItem('currentUser') === null ? 'none' : 'flex';
   exit.style.display     = localStorage.getItem('currentUser') === null ? 'none' : 'flex';
}

function makeOrder() {
   orderBtn.addEventListener('click', e => {
      let orderArr = {
         name: JSON.parse(localStorage.getItem('currentUser')).login,
         purchase: cartArr,
      };
      fetch("http://localhost:3000/orders", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderArr)})
   })
}

renderCart();
popUpSwitch();
cartCountHeader();

cartPlusMinus();
cartItemDelete();

sumCounter();

showRegAutorWindows();
showCurrent();
delelteCurrent();
refreshHeader();

makeOrder();
// asinc await
// post orders
// reg clients
// auto
// categ search
// cd server/ npm start

fetch("http://localhost:3000/productsArr") // переписать на asinc/await
   .then((response) => response.json())
   .then((data) => {renderPage(data),buyBtnClick(data)})

fetch("http://localhost:3000/users")
   .then((response) => response.json())
   .then((users) => getRegInputs(users))

fetch("http://localhost:3000/users")
   .then((response) => response.json())
   .then((users) => authorization(users))




// fetch("http://localhost:3000/currentUser")
//    .then((response) => response.json())
//    .then((user) => {
//       currentUser.textContent = user[0].login;
//    })


// fetch("http://localhost:3000/orders", {
//    method: 'POST',
//    headers: {
//       'Content-Type': 'application/json'
//    },
//    body: JSON.stringify()
// }).then()