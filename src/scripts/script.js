function calculate(){
  let quantities = document.getElementsByClassName("quantities")[0];
  let adults = document.getElementById("adults");
  let kids = document.getElementById("kids");
  let duration = document.getElementById("duration");
  let meat = ((adults.value * 0.2) + (kids.value * 0.1)) * duration.value;
  let beer = (adults.value * 2) * duration.value;
  let water = ((adults.value) * 2 + (kids.value * 1)) * duration.value;
  let soda = ((kids.value * 3)) * duration.value;
  let need = ("<div class='needcontainer'><img src='./assets/meat.png' id='meat'><p class='need'>" + meat + "kg of meat</p></div>") + ("<div class='needcontainer'><img src='./assets/beer.png' id='beer'><p class='need'><p class='need'>" + beer + " beer cans</p></div>") + ("<div class='needcontainer'><img src='./assets/water.png' id='water'><p class='need'><p class='need'>" + water + " water bottles</p></div>") + ("<div class='needcontainer'><img src='./assets/soda.png' id='soda'><p class='need'><p class='need'>" + soda + " soda cans</p></div>");
  
  return quantities.innerHTML = "<h3>you will need:</h3>" + need;
}