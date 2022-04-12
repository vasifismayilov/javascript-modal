// let infoEl = document.getElementsByClassName("info")
// console.log(infoEl[0])
// infoEl[0].style.backgroundColor = "orange";

// let infoEl = document.querySelector(".info")
// console.log(infoEl)
// infoEl.style.backgroundColor = "orange"

// let productList = document.querySelector(".product-list")
// let namesToAdd = ["Oppo","Huawei"]

// let li = document.createElement('li');
// li.textContent = namesToAdd[0];

// let li2 = document.createElement('li');
// li2.textContent = namesToAdd[1]

// productList.append(li, li2);
// console.log(productList.innerHTML)

// productList.innerHTML += `<li>${namesToAdd[0]}</li>
// <li>${namesToAdd[1]}</li>`

// let imgElement = document.querySelector("img")
// imgElement.setAttribute("src","https://c4.wallpaperflare.com/wallpaper/881/838/514/besiktas-j-k-turkey-turkish-soccer-pitches-wallpaper-preview.jpg");

// let title1 = document.querySelector('#title')
// title1.firstElementChild.style.fontWeight = 'lighter'
// title1.lastElementChild.style.fontStyle = 'italic'
// title1.children[1].style.textDecoration = 'underline'
// console.log(title1.children)

// document.getElementById("info-content").innerText="Helo world";
// let allListElements=document.querySelectorAll('li')
// for(let list of allListElements){
//     list.classList.add('blue')
// }
// const secondLiEl = document.querySelector("li:nth-child(2)")
// const secondLiEl = document.querySelectorAll('li')[1]
// console.log(secondLiEl)
// secondLiEl.classList.replace("blue","red")

// const list= document.querySelector('.product-list')
// list.children[2].previousElementSibling.classList.toggle('green')

// const imgElement = document.querySelector("img")
// const grandParent = imgElement.parentElement.parentElement
// grandParent.style.backgroundColor ="lightgray"

// const img = {
//     parentElement: { // imageDiv
//         parentElement: {
//             style: {
//                 backgroundColor: 'none'
//             }
//         }
//     }
// }

/*
1. Taglari almaq
2. Sekilleri deyismek
3. sehifeleri deyismek
    1. sehifeleri yaratmaq
    2. butun sehifeleri unselected elemek
    3. index almaq ve sehifenin rengini deyismek
4. setInterval qurmaq
*/

const products = [
  {
    name: "Iphone 13 Pro Max",
    image:
      "https://www.uae.krocer.com/image/cache/catalog/apple-iphone-13-pro-max-256gb-smartphone-japan-specs-29965-470x556.jpg",
    description: "Pulunuz varsa gelin",
  },
  {
    name: "S21 Ultra",
    image:
      "https://www.mytrendyphone.eu/images/Samsung-Galaxy-S21-Ultra-5G-128GB-Phantom-Black-8806090887505-15012021-01-p.jpg",
    description: "18 ay faizle",
  },
  {
    name: "Xiaomi Mi 9",
    image: "https://cdn.akakce.com/xiaomi/xiaomi-mi-9-64-gb-z.jpg",
    description: "Esl kasib telefonu",
  },
];

const imageDiv = document.querySelector(".image-div");
const img = document.querySelector(".image-div img");
const nameEl = document.querySelector(".image-div p");
const description = document.querySelector(".image-div h5");
const pageWrapper = document.querySelector(".page-wrapper");

let counter = 0;

const changeImg = function () {
  const index = counter % products.length;
  nameEl.textContent = products[index].name;
  img.setAttribute("src", products[index].image);
  description.textContent = products[index].description;

  choosePage(index);
  counter++;
};

for (let i = 0; i < products.length; i++) {
  const pageEl = document.createElement("div");
  pageEl.className = "page";
  pageWrapper.append(pageEl);
}
const clearCurrentPage = function () {
  for (let pageEl of pageWrapper.children) {
    pageEl.classList.remove("page-selected");
  }
};
const choosePage = function (index) {
  clearCurrentPage();
  pageWrapper.children[index].classList.add("page-selected");
};

setInterval(changeImg,1000) 

const info = document.querySelector(".info");

// info.onmouseenter = () => {
//   info.style.backgroundColor = 'green'
// };
// info.onmouseleave = () => {
//   info.style.backgroundColor = 'red'
// };
// info.onmousemove = () => {
//  console.log('isledi')
// };

// info.addEventListener('click', () => {
//     console.log('clicked')
// })
// info.addEventListener('click', () => {
//     console.log('clicked version 2')
// })

// info.onclick = () => {
//     console.log('clicked')
// }
// info.onclick = () => {
//     console.log('clicked version 2')
// }

info.addEventListener('dblclick', function(event) {
    console.log(this)
    console.log(event.target)
})

const openButton = document.querySelector('#modal-open-button')
const modal = document.querySelector('.modal-container')
const backdrop = document.querySelector('.backdrop')
const cancelButton = document.querySelector('.cancel')

openButton.onclick = () => {
    modal.classList.add('modal-container-open')
    backdrop.classList.add('backdrop-open')
}

function cancelModal(){
  modal.classList.remove('modal-container-open')
  backdrop.classList.remove('backdrop-open')
}

cancelButton.addEventListener('click', cancelModal)
backdrop.addEventListener('click',cancelModal)


const accodionData = [
    {
        title: 'Iphone 13 Pro Max',
        body: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.'
    },
    {
        title: 'Samsung Galaxy S22',
        body: 'Samsung Electronics Co., Ltd. Güney Koreli ve merkezi Suwon, Güney Kore\'de bulunan çok uluslu elektronik şirketidir. Samsung Group\'un amiral gemisi ve iştiraki olan şirket, kurulduğu 2009 yılından bu yana dünyanın en büyük bilgi teknolojileri şirketlerinden birisi olmuştur.'
    },
    {
        title: 'Xiaomi Redmi 9',
        body: 'Redmi, POCO ile beraber Çinli elektronik şirketi Xiaomi\'nin sahip olduğu bir alt markadır. İlk olarak Temmuz 2013\'te bir bütçe akıllı telefon serisi olarak duyuruldu. Giriş seviyesi ve orta sınıf cihazlarla 2019\'da Xiaomi\'nin ayrı bir alt markası oldu.'
    },
    {
        title: 'Huawei P30',
        body: 'Huawei P30 mobile was launched in March 2019. The phone comes with a 6.10-inch touchscreen display offering a resolution of 1080x2340 pixels. Huawei P30 is powered by a 1.8GHz octa-core HiSilicon Kirin 980 processor that features 2 cores clocked at 2.6GHz, 2 cores clocked at 1.92GHz and 4 cores clocked at 1.8GHz.'
    },
]

const accordionContainer = document.querySelector('.accordion-container')

function closeAllAccordions() {
    const bodyList = document.querySelectorAll('.accordion-body')
    bodyList.forEach(body => {
        body.classList.remove('accordion-body-open')
    })
}

function openModalCallback(event) {
    closeAllAccordions();
    const targetBody = event.target.getAttribute('targetBody')
    const body = document.querySelector('#' + targetBody)
    body.classList.toggle('accordion-body-open')
}

accodionData.forEach((data, index) => {
    const title = document.createElement('div')
    const body = document.createElement('div');
    title.className = 'accordion-title'
    body.className = 'accordion-body'
    body.id = 'body-' + index+1
    title.setAttribute('targetBody', body.id)
    title.textContent = data.title
    body.textContent = data.body
    title.addEventListener('click', openModalCallback)
    accordionContainer.append(title, body)
})