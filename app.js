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

const tableImage = ["./image/table1.jpg", "./image/table2.jpg", "./image/table3.jpg", "./image/table4.jpg"],
dresserImage = ["./image/labber1.jpg", "./image/labber2.jpg", "./image/labber3.jpg", "./image/labber4.jpg", "./image/labber5.jpg", "./image/labber6.jpg", "./image/labber7.jpg"],
bedImage = ["./image/bad1.jpg", "./image/bed2.jpg"],
rackImage = ["./image/rack1.jpg", "./image/rack2.jpg", "./image/rack3.jpg"],
armchairImage = ["./image/armchair1.jpg", "./image/armchair2.jpg"],
cabinetsImage = ["./image/cabinets1.jpg", "./image/cabinets2.jpg", "./image/cabinets3.jpg", "./image/cabinets4.jpg"];

const tablePrice = ["21 990₽", "24 990₽", "21 590₽", "19 990₽"],
dresserPrice = ["21 990₽", "24 990₽", "21 590₽", "19 990₽", "27 990₽", "31 290₽", "20 990₽"],
bedPrice = ["21 990₽", "24 990₽"],
rackPrice = ["21 990₽", "24 990₽", "21 590₽"],
armchairPrice = ["21 990₽", "24 990₽"],
cabinetsPrice = ["21 990₽", "24 990₽", "21 590₽", "19 990₽"];

const tableDescription = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse."],
dresserDescription = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse."],
bedDescription = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse."],
rackDescription = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse."],
armchairDescription = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse."],
cabinetsDescription = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, molestiae quasi qui, libero eligendi quas consequuntur tempore, hic repellat alias delectus explicabo amet laboriosam? Dolor placeat quas rerum esse."];

const tableTitle = ["SilverTop 190M", "SilverTop GR", "Kick Max 21", "Lolly Lips WF", "Mirror Edge", "Runner Sl", "Plan Click AllWF", "Alias", "Open Plan WF"],
dresserTitle = ["Plan A", "Plan B"],
bedTitle = ["Plan A", "Plan B", "Plan C", "Work Part L", "Work Part M", "Work Part S", "Work Part XL", "Work Part XXL", "Mirror Edge WFA"],
rackTitle = ["Plan A", "Plan B", "Plan C", "Work Part L", "Work Part M", "Work Part S", "Work Part XL", "Work Part XXL", "Mirror Edge WFA"],
armchairTitle = ["Plan A", "Plan B", "Plan C", "Work Part L", "Work Part M", "Work Part S", "Work Part XL", "Work Part XXL", "Mirror Edge WFA"],
cabinetsTitle = ["Plan A", "Plan B", "Plan C", "Work Part L", "Work Part M", "Work Part S", "Work Part XL", "Work Part XXL", "Mirror Edge WFA"];

const exclusiveContent = document.querySelector('.exclusive__content');

const container = document.querySelector('.container')

const tableBlock = document.querySelector('#catalog__table'),
armchairBlock = document.querySelector('#catalog__armchair'),
cabinetsBlock = document.querySelector('#catalog__cabinets'),
bedBlock = document.querySelector('#catalog__bed'),
modalBackg = document.querySelector('.modalBackground'),
modalCont = document.querySelector('.modalContent'),
modalCloseF = document.querySelector('.close__f'),
modalCloseS = document.querySelector('.close__s'),
modalCloseAll = document.querySelector('.modalClose');

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
          render(productArray);
          console.log(productArray);
            break;
        case event.target.id === "exDresser" || event.target.parentElement.id === "exDresser":
          console.log(productArray)
          productArray = dresserPrice.map((item, index) => ({
            price: item,
            title: dresserTitle[index],
            description: dresserDescription[index],
            image: dresserImage[index]
          }));
          render(productArray)
          break;
        case event.target.id === "exBed" || event.target.parentElement.id === "exBed":
          productArray  = bedPrice.map((item, index) => ({
            price: item,
            title: bedTitle[index],
            description: bedDescription[index],
            image: bedImage[index]
          }));
          render(productArray)
          console.log(productArray)
          break;
        case event.target.id === "exRack" || event.target.parentElement.id === "exRack":
          productArray  = rackPrice.map((item, index) => ({
            price: item,
            title: rackTitle[index],
            description: rackDescription[index],
            image: rackImage[index]
          }));
          render(productArray)
          console.log(productArray)
          break;  
        default:
            break;
    }
};

const dropTable = (event) => {
  if(event.target.id === "catalog__table" || event.target.parentElement.id === "catalog__table") {
    productArray  = tablePrice.map((item, index) => ({
      price: item,
      title: tableTitle[index],
      description: tableDescription[index],
      image: tableImage[index]
    }));
    render(productArray)
  }
};

const dropArmchair = (event) => {
if(event.target.id === "catalog__armchair" || event.target.parentElement.id === "catalog__armchair") {
    productArray  = armchairPrice.map((item, index) => ({
      price: item,
      title: armchairTitle[index],
      description: armchairDescription[index],
      image: armchairImage[index]
    }));
    render(productArray)
  }
};

const dropCabinets = (event) => {
if(event.target.id === "catalog__cabinets" || event.target.parentElement.id === "catalog__cabinets") {
    productArray  = cabinetsPrice.map((item, index) => ({
      price: item,
      title: cabinetsTitle[index],
      description: cabinetsDescription[index],
      image: cabinetsImage[index]
    }));
    render(productArray)
  }
};

const dropBed = (event) => {
if(event.target.id === "catalog__bed" || event.target.parentElement.id === "catalog__bed") {
    productArray  = bedPrice.map((item, index) => ({
      price: item,
      title: bedTitle[index],
      description: bedDescription[index],
      image: bedImage[index]
    }));
    render(productArray)
  }
};

const render = (element) => {
  let newBlock = ``;
  if (element.length != 0) {
    modalBackg.style.cssText += 'display: flex;';
    element.forEach(elem => {
      newBlock = `
        <div class="modalItem">
          <img src="${elem.image}" alt="" class="madalImage">
          <h3 class="modalTitle">${elem.title}</h3>
          <span class="modalPrice">${elem.price}</span>
          <p class="modalDescription">${elem.description}</p>
        </div>
      `;
      modalCont.innerHTML += newBlock;
    });
  } else {
    modalBackg.style.cssText += 'display: none;'
    modalCont.innerHTML = ``;
  }
};

const allF = (event) => {
  console.log(event)
}

const exclusiveItemListen = exclusiveContent.addEventListener('click', dropExclusiveItem); 
const tableListen = tableBlock.addEventListener('click', dropTable),
armchairListen = armchairBlock.addEventListener('click', dropArmchair),
cabinetsListen = cabinetsBlock.addEventListener('click', dropCabinets),
bedListen = bedBlock.addEventListener('click', dropBed),
checkClose = modalCloseAll.addEventListener('click', all),
checkCloseF = modalCloseF.addEventListener('click', all),
checkCloseS = modalCloseS.addEventListener('click', all);
document.addEventListener('click', allF);