

let score = document.querySelector('.score');
let gameScreen = document.querySelector('.gameScreen');
let startScreen = document.querySelector('.startScreen');


startScreen.addEventListener('click', startGame);

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyReleased);


let controls = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player = {
    speed: 5, // 5px per sec
    score: 0,
    start: false
} 


// bottom:620.390625
// height:572.390625
// left:204
// right:504
// top:48
// width:300
// x:204
// y:48











function start(){
    let car = document.querySelector('.car');
    let road = gameScreen.getBoundingClientRect();
    console.log(road);
    let carRect = car.getBoundingClientRect();

    if(controls.ArrowUp && player.y > road.top){
      player.y = player.y - player.speed;
    }
    if(controls.ArrowDown && player.y < road.bottom-(carRect.height + carRect.height/2)){
      player.y = player.y + player.speed;
    }
    if(controls.ArrowLeft && player.x > road.left - carRect.left){
      player.x = player.x - player.speed;
    }
    if(controls.ArrowRight && player.x < road.right - carRect.right + (carRect.right/4)){
      player.x  = player.x + player.speed;
    }

     if(player.start){
       car.style.top = player.y +"px";
       car.style.left = player.x + "px"; 
        requestAnimationFrame(start);
     }
}

function keyPressed(e) {
    console.log("Pressed",e.key);
    if(controls[e.key] == false){
      controls[e.key] = true;
    //   console.log(controls);
    }
}

function keyReleased(e) {
    console.log("Released",e.key);
    if(controls[e.key] == true){
        controls[e.key] = false;
        // console.log(controls);
      }
}

// startScreen.classList.add('hide');
function startGame() {
  
    //  console.log("Clicked")
    startScreen.classList.add('hide');
    gameScreen.classList.remove('hide');
    gameScreen.innerHtml = "";

     player.start = true;
     player.score= 0;


     for (let x = 0; x < 10; x++) {
      let div = document.createElement("div");
      div.classList.add("line");
      div.y = x * 150;
      div.style.top = (x * 150) + "px";
      gameScreen.appendChild(div);
  }

  requestAnimationFrame(start);
    // add or remove a calss from certain element
    //  console.log(startScreen.classList)
    
    

  
     // create a car

     let car = document.createElement('div');
     car.setAttribute('class', 'car');
    //  car.innerText = "Car";
    //  car.style.left = "10px";
    //  car.style.top = "10px";
    gameScreen.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;




    //  car.style.backgroundColor = "red";
 
    
    requestAnimationFrame(start)

    //

  }