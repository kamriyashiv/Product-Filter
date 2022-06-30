var products={
    data:[
        {
            ProductName:"Digital Watch 1",
            category:"Dwatch",
            price:299,
            image:"watch1.webp",
            imageAlt:"digital watch under 299"
        },
        {
            ProductName:"Digital Watch 2",
            category:"Dwatch",
            price:299,
            image:"watch2.jpg",
            imageAlt:"digital watch under 299"
        },
        {
            ProductName:"Digital Watch 3",
            category:"Dwatch",
            price:299,
            image:"watch3.jpeg",
            imageAlt:"digital watch under 299"
        },
        {
            ProductName:"Normal Watch 1",
            category:"Nwatch",
            price:299,
            image:"Nwatch1.jpg",
            imageAlt:"Normal watch under 299"
        },
        {
            ProductName:"Normal Watch 2",
            category:"Nwatch",
            price:299,
            image:"Nwatch2.jpg",
            imageAlt:"Normal watch under 299"
        },
        {
            ProductName:"Normal Watch 3",
            category:"Nwatch",
            price:299,
            image:"Nwatch3.jpg",
            imageAlt:"Normal watch under 299"
        },

        {
            ProductName:"Girls Dress 1",
            category:"Gdress",
            price:299,
            image:"girls1.webp",
            imageAlt:"girls_dress"
        },
        {
            ProductName:"Girls Dress 2",
            category:"Gdress",
            price:299,
            image:"girls2.webp",
            imageAlt:"girls_dress"
        },
          {
            ProductName:"Girls Dress 3",
            category:"Gdress",
            price:299,
            image:"girls3.jpeg",
            imageAlt:"girls_dress"
        },
    ]
}

for(var i of products.data){
    var proBox=document.getElementById("productsBox");
        proBox.innerHTML+=`
        <div class="flex1">
            <div class="proBox  ${i.category}">
                <span class="category btn btn-danger p-1">${i.category}</span>
                <img src="img/${i.image}" alt="${i.imageAlt}">
                <h6 class="text-center bg-primary text-white p-1">${i.ProductName}</h6>
                <p class="text-center text-danger"><strong>Price: ${i.price}₹</strong></p>
            </div>
         </div>
        `;    
}
var proBox=document.querySelectorAll(".proBox");
function filterData(value){
   
    proBox.forEach(function(element){
        if (value == "All") {
            element.classList.remove("hide");
          } 
          else 
          {            
            if (element.classList.contains(value)) {            
              element.classList.remove("hide");
            } else {
              element.classList.add("hide");
            }
          }
    });
}

function searchBtn(searchValue){

    proBox.forEach(function(element2){
        if(!element2.classList.contains(searchValue)){
            element2.classList.add("hide");
            proBox.innerHTML+=`
                <h1>Please Search Right Keyword...</h1>
            `;
        }
        else{
            if(element2.classList.contains(searchValue)){
                element2.classList.remove("hide");
            }
            else{
                element2.classList.add("hide");
            }
        }
    });
}
