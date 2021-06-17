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