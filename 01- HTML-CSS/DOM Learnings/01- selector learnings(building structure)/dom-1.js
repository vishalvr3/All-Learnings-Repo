console.log("Selectors practice");

/**** selecting element by query selector ****/
/*
let button = document.querySelector(".submit");
let tulaThirdDVerandah = document.querySelector(".tulaThirdDVerandah");

button.addEventListener("click", function () {
  // console.log(tulaThirdDVerandah);
  // console.log(tulaThirdDVerandah.innerHTML); // Verandah
  tulaThirdDVerandah.style.backgroundColor = "pink";
});
*/

/**** selecting element without query selector ****/
let button = document.querySelector(".submit");
let divs = document.getElementsByTagName("div");

button.addEventListener("click", function () {
  console.log(divs);

  // console.log(divs); // ALL
  // console.log(divs[0]); // NEW NAVY NAGAR HTML
  // console.log(divs[1]); // DHANUSH BUILDING HTML
  // console.log(divs[2]); // DHANUSH TOP
  // console.log(divs[3]); // floor-third
  // console.log(divs[4]); // floor-number container
  // console.log(divs[5]); // floor-layout
  // console.log(divs[6]); // left (A and B container)
  // console.log(divs[7]); //floor-third  side-A
  // console.log(divs[8]); // verandah
  // console.log(divs[9]); // bedroom
  // console.log(divs[10]); // hall
  // console.log(divs[11]); // kitchen
  // console.log(divs[12]); // floor-third side-B
  // console.log(divs[13]); // hall
  // console.log(divs[14]); // kitchen
  // console.log(divs[15]); // verandah
  // console.log(divs[16]); // bedroom
  // console.log(divs[17]); // floor-third middle
  // console.log(divs[18]); // right
  // console.log(divs[19]); // floor-third side-C
  // console.log(divs[20]);
  // console.log(divs[162]);
  // divs[110].style.backgroundColor = "olive";
});
