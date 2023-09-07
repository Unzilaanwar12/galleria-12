
// for galleria category //

var cardBox = document.getElementById("cardsbox");
var data = fetch("./index.json");

data
  .then((e) => {
    return e.json();
  })
  .then((result) => {
    result.forEach((val, ind) => {
      cardBox.innerHTML += `
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
      <div class="card">
      <img src="${val.img}" alt="" class="h-2">
      <div class="card__content">
        <p class="card__title">${val.name}</p>
        <p class="card__description">${val.para}</p>

        <div class="container d-flex justify-content-between">
          <a href="${val.docs}" style="text-decoration: none;"> 
          <button>
          <p>read more</p>
          </button>
          </a>      
          <a href="${val.link}" style="text-decoration: none;"> 
          <button>
          <p>Explore</p>
          </button>
          </a>
        </div>
      </div>
    </div>
    
      </div>
            `;
    });
  })
  .catch((err) => {
    console.log("file not found")
  });

  // galleria category end //

  // for other category //
var otherCard = document.getElementById("otherCards");
var data = fetch("./other-category.json");

data
  .then((e) => {
    return e.json();
  })
  .then((result) => {
    result.forEach((val, ind) => {
      otherCard.innerHTML += `
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
      <div class="card">
      <img src="${val.img}" alt="" class="h-2">
      <div class="card__content">
        <p class="card__title">${val.name}</p>
        <p class="card__description">${val.para}</p>
        <div class="container d-flex justify-content-between">
          <a href="${val.docs}" style="text-decoration: none;"> 
          <button>
          <p>read more</p>
          </button>
          </a>      
          <a href="${val.link}" style="text-decoration: none;"> 
          <button>
          <p>Explore</p>
          </button>
          </a>
        </div>
      </div>
    </div>
    
      </div>
            `;
    });
  })
  .catch((err) => {
    console.log("file not found")
  });


   // other category end //


     // for colour category //
var colorCard = document.getElementById("colorCards");
var data = fetch("./color-category.json");

data
  .then((e) => {
    return e.json();
  })
  .then((result) => {
    result.forEach((val, ind) => {
      colorCard.innerHTML += `
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
      <div class="card">
      <img src="${val.img}" alt="" class="h-2">
      <div class="card__content">
        <p class="card__title">${val.name}</p>
        <p class="card__description">${val.para}</p>
        <div class="container d-flex justify-content-between">
          <a href="${val.docs}" style="text-decoration: none;"> 
          <button>
          <p>read more</p>
          </button>
          </a>      
          <a href="${val.link}" style="text-decoration: none;"> 
          <button>
          <p>Explore</p>
          </button>
          </a>
        </div>
      </div>
    </div>
    
      </div>
            `;
    });
  })
  .catch((err) => {
    console.log("file not found")
  });


   // colour category end //