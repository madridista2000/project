let tours = document.getElementById('navtours');
let box = document.getElementById('boxtours');

tours.addEventListener('mouseover', function(){
box.classList.add('active')
})
box.addEventListener('mouseout', function(){
  box.classList.remove('active')
})

let cars = document.getElementById('navcars');
let boxcar = document.getElementById('boxcars');

cars.addEventListener('mouseover', function(){
boxcar.classList.add('active')
})
boxcar.addEventListener('mouseout', function(){
  boxcar.classList.remove('active')
})


let burgerbar = document.getElementById('burger');
let pirveli = document.getElementById('bar1');
let meore = document.getElementById('zedmeti');
let mesame = document.getElementById('bar2');
let navigation = document.getElementById('navulid');


burgerbar.addEventListener('click', function(){
  pirveli.classList.toggle('active3');
  meore.classList.toggle('active4');
  mesame.classList.toggle('active5');
  navigation.classList.toggle('active6')
  
})