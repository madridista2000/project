var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}

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


