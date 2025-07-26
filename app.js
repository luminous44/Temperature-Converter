
const tempEl = document.querySelectorAll(".input");

const cel = document.querySelector("#celcius");
const fahr = document.querySelector("#fahrenheit");
const kel = document.querySelector("#kelvin")

tempEl.forEach(el =>{

    el.addEventListener("change",computeTemp);

});

function computeTemp(event){

    const name = event.target.name;
    const currVal = +event.target.value;
    switch(name){
        case "celcius" :
            fahr.value = (currVal *1.8 + 32).toFixed(2);
            kel.value = (currVal + 273.32).toFixed(2);
            break;
        case "fahrenheit" :
            cel.value = ((currVal - 32 )/1.8).toFixed(2);
            kel.value = ((currVal - 32 )/1.8 + 273.32).toFixed(2);
            break;
        case "kelvin" :
            cel.value = (currVal - 273.32).toFixed(2);
            fahr.value = ((currVal - 273.32) * 1.8 + 32).toFixed(2);
            break;
        default :
          break;
    }

}