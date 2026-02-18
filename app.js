const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

const tableImage = ["./image/table1.jpg", "./image/table2.jpg", "./image/table3.jpg", "./image/table4.jpg", "./image/table5.jpg", "./image/table6.jpg", "./image/table7.jpg", "./image/table8.jpg", "./image/table9.jpg"],
dresserImage = ["./image/dresser1.jpg", "./image/dresser2.jpg", "./image/dresser3.jpg", "./image/dresser4.jpg", "./image/dresser5.jpg", "./image/dresser6.jpg", "./image/dresser7.jpg", "./image/dresser8.jpg", "./image/dresser9.jpg"],
bedImage = ["./image/bad1.jpg", "./image/bed2.jpg", "./image/bed3.jpg", "./image/bed4.jpg", "./image/bed5.jpg", "./image/bed6.jpg", "./image/bed7.jpg", "./image/bed8.jpg", "./image/bed9.jpg"],
rackImage = ["./image/rack1.jpg", "./image/rack2.jpg", "./image/rack3.jpg", "./image/rack4.jpg", "./image/rack5.jpg", "./image/rack6.jpg", "./image/rack7.jpg", "./image/rack8.jpg", "./image/rack9.jpg"],
armchairImage = ["./image/armchair1.jpg", "./image/armchair2.jpg", "./image/armchair3.jpg", "./image/armchair4.jpg", "./image/armchair5.jpg", "./image/armchair6.jpg", "./image/armchair7.jpg", "./image/armchair8.jpg", "./image/armchair9.jpg"],
cabinetsImage = ["./image/cabinets1.jpg", "./image/cabinets2.jpg", "./image/cabinets3.jpg", "./image/cabinets4.jpg", "./image/cabinets5.jpg", "./image/cabinets6.jpg", "./image/cabinets7.jpg", "./image/cabinets8.jpg", "./image/cabinets9.jpg"];

const tablePrice = ["21 990₽", "24 990₽", "21 590₽", "19 990₽", "27 990₽", "31 290₽", "20 990₽", "11 990₽", "29 190₽"],
dresserPrice = ["21 990₽", "24 990₽", "21 590₽", "19 990₽", "27 990₽", "31 290₽", "20 990₽", "11 990₽", "29 190₽"],
bedPrice = ["21 990₽", "24 990₽", "21 590₽", "19 990₽", "27 990₽", "31 290₽", "20 990₽", "11 990₽", "29 190₽"],
rackPrice = ["21 990₽", "24 990₽", "21 590₽", "19 990₽", "27 990₽", "31 290₽", "20 990₽", "11 990₽", "29 190₽"],
armchairPrice = ["21 990₽", "24 990₽", "21 590₽", "19 990₽", "27 990₽", "31 290₽", "20 990₽", "11 990₽", "29 190₽"],
cabinetsPrice = ["21 990₽", "24 990₽", "21 590₽", "19 990₽", "27 990₽", "31 290₽", "20 990₽", "11 990₽", "29 190₽"];

const tableDescription = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse."],
dresserDescription = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse."],
bedDescription = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse."],
rackDescription = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse."],
armchairDescription = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse."],
cabinetsDescription = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse."];

const tableTitle = ["SilverTop 190M", "SilverTop GR", "Kick Max 21", "Lolly Lips WF", "Mirror Edge", "Runner Sl", "Plan Click AllWF", "Alias", "Open Plan WF"],
dresserTitle = ["Plan A", "Plan B", "Plan C", "Work Part L", "Work Part M", "Work Part S", "Work Part XL", "Work Part XXL", "Mirror Edge WFA"],
bedTitle = ["Plan A", "Plan B", "Plan C", "Work Part L", "Work Part M", "Work Part S", "Work Part XL", "Work Part XXL", "Mirror Edge WFA"],
rackTitle = ["Plan A", "Plan B", "Plan C", "Work Part L", "Work Part M", "Work Part S", "Work Part XL", "Work Part XXL", "Mirror Edge WFA"],
armchairTitle = ["Plan A", "Plan B", "Plan C", "Work Part L", "Work Part M", "Work Part S", "Work Part XL", "Work Part XXL", "Mirror Edge WFA"],
cabinetsTitle = ["Plan A", "Plan B", "Plan C", "Work Part L", "Work Part M", "Work Part S", "Work Part XL", "Work Part XXL", "Mirror Edge WFA"];

const exclusiveItem = document.querySelector('.exclusive__item');

const container = document.querySelector('.container')

const tableBlock = document.querySelector('#catalog__table'),
armchairBlock = document.querySelector('#catalog__armchair'),
cabinetsBlock = document.querySelector('#catalog__cabinets'),
bedBlock = document.querySelector('#catalog__bed');

let product = {
    image: '',
    title: '',
    price: '',
    description: '',
};

let productArray = [];
// let modal = `
// <div class="modalBackground">
//   <div class="modalWindow">
//     <div class="modalClose">
//       <span></span>
//       <span></span>
//     </div>
//     <h2 class="modalTitle"></h2>
//     <div class="modalContent">
//     </div>
//   </div>
// </div>`;

const all = (event) => {
  if (event.target.className === 'close__f' || event.target.className === 'close__s' || event.target.className === 'modalClose') {
    productArray = [];
    render(productArray)
  }
  console.log(event)
}

const dropExclusiveItem = (event) => {
    switch (true) {
        case event.target.id === 'exTable' || event.target.parentElement.id === 'exTable':
          productArray  = tablePrice.map((item, index) => ({
            price: item,
            title: tableTitle[index],
            description: tableDescription[index],
            image: tableImage[index]
          }));
          render(productArray)
          console.log(productArray)
            break;
    
        default:
            break;
    }
};

const dropTable = () => {

};

const dropArmchair = () => {

};

const dropCabinets = () => {

};

const dropBed = () => {

};

const render = (element) => {
  let modal = ``;
  if (element.length != 0) {
    modal += `
<div class="modalBackground">
  <div class="modalWindow">
    <div class="modalClose">
      <div class="close__f"></div>
      <div class="close__s"></div>
    </div>
    <h2 class="modalTitle"></h2>
    <div class="modalContent">
      <div class="modalItem">
        <img src="${element[0].image}" alt="" class="madalImage">
        <h3 class="modalTitle">${element[0].title}</h3>
        <span class="modalPrice">${element[0].price}</span>
        <p class="modalDescription">${element[0].description}</p>
      </div>
      <div class="modalItem">
        <img src="${element[1].image}" alt="" class="madalImage">
        <h3 class="modalTitle">${element[1].title}</h3>
        <span class="modalPrice">${element[1].price}</span>
        <p class="modalDescription">${element[1].description}</p>
      </div>
      <div class="modalItem">
        <img src="${element[2].image}" alt="" class="madalImage">
        <h3 class="modalTitle">${element[2].title}</h3>
        <span class="modalPrice">${element[2].price}</span>
        <p class="modalDescription">${element[2].description}</p>
      </div>
      <div class="modalItem">
        <img src="${element[3].image}" alt="" class="madalImage">
        <h3 class="modalTitle">${element[3].title}</h3>
        <span class="modalPrice">${element[3].price}</span>
        <p class="modalDescription">${element[3].description}</p>
      </div>
      <div class="modalItem">
        <img src="${element[4].image}" alt="" class="madalImage">
        <h3 class="modalTitle">${element[4].title}</h3>
        <span class="modalPrice">${element[4].price}</span>
        <p class="modalDescription">${element[4].description}</p>
      </div>
      <div class="modalItem">
        <img src="${element[5].image}" alt="" class="madalImage">
        <h3 class="modalTitle">${element[5].title}</h3>
        <span class="modalPrice">${element[5].price}</span>
        <p class="modalDescription">${element[5].description}</p>
      </div>
      <div class="modalItem">
        <img src="${element[6].image}" alt="" class="madalImage">
        <h3 class="modalTitle">${element[6].title}</h3>
        <span class="modalPrice">${element[6].price}</span>
        <p class="modalDescription">${element[6].description}</p>
      </div>
      <div class="modalItem">
        <img src="${element[7].image}" alt="" class="madalImage">
        <h3 class="modalTitle">${element[7].title}</h3>
        <span class="modalPrice">${element[7].price}</span>
        <p class="modalDescription">${element[7].description}</p>
      </div>
      <div class="modalItem">
        <img src="${element[8].image}" alt="" class="madalImage">
        <h3 class="modalTitle">${element[8].title}</h3>
        <span class="modalPrice">${element[8].price}</span>
        <p class="modalDescription">${element[8].description}</p>
      </div>
    </div>
  </div>
</div>`;
    container.innerHTML += modal;
  } else {
    let modalBackgroundActive = document.querySelector('.modalBackground');
    modalBackgroundActive.style.cssText += "display: none;";
     
  }
};

const exclusiveItemListen = exclusiveItem.addEventListener('click', dropExclusiveItem); 
const tableListen = tableBlock.addEventListener('click', dropTable),
armchairListen = armchairBlock.addEventListener('click', dropArmchair),
cabinetsListen = cabinetsBlock.addEventListener('click', dropCabinets),
bedListen = bedBlock.addEventListener('click', dropBed);
document.addEventListener('click', all)