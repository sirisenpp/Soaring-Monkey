// Pasandu Sirisena,
// Soaring Monkey vertical-scrolling video game

//global variables
let state
let gameSpeed
let frames
let score
// monkey variables
let monXLoc
let monYLoc
let monSize
// canoe variables
let canXLoc
let canYLoc
let canSpeed
// island variables
let islXLoc
let islYLoc
let islSize
let islSpeed
// cloud 1 variables
let cloudXLoc
let cloudYLoc
let cloudSpeed
// cloud 2 variables
let cloudXLocTwo
let cloudYLocTwo
let cloudSpeedTwo
// missile variables
let missileM
let missileL
let missileR
// satellite variables
let satL
let satR
// general obstacle variables
let obsYLoc
let obsSpeed
let obsType
// variables  
function variables() {
  //local variables
  frames = 0
  score = 0
  gameSpeed = 10
  // monkey variables
  monXLoc = 200
  monYLoc = 350
  monSize = 45
  // canoe variables
  canXLoc = random(200, 390)
  canYLoc = -200
  canSpeed = gameSpeed * 0.8
  // island variables
  islXLoc = random(10, 200)
  islYLoc = 0
  islSize = random(5, 11)
  islSpeed = gameSpeed * 0.8
  // cloud 1 variables
  cloudXLoc = random(10, 390)
  cloudYLoc = 0
  cloudSpeed = gameSpeed * 0.8
  // cloud 2 variables
  cloudXLocTwo = random(10, 390)
  cloudYLocTwo = 0
  cloudSpeedTwo = gameSpeed * 0.6
  // missile variables
  missileM = 200
  missileL = 100
  missileR = 300
  // satellite variables
  satL = 70
  satR = 330
  // general obstacle variables
  obsYLoc = -100
  obsSpeed = gameSpeed * 0.7
  obsType = bsType = Math.floor(Math.random() * 6)
}

function setup() {
  createCanvas(400, 700) // browser size based
  frameRate(60)
  state = 'start'
  variables()
}

/*function windowResized() {
  resizeCanvas(windowWidth * 0.8, windowHeight * 0.8); // dynamic resizing
}*/

// monkey function
function drawMonkey(monXLoc, monYLoc, monSize, headXLoc) {
  strokeWeight(monSize * 0.12)
  stroke(77, 51, 25);
  fill(115, 77, 38);
  rect(monXLoc - monSize * 1.2, monYLoc + monSize * 0.6, monSize * 0.6, monSize * 2.8, monSize * 0.2);
  rect(monXLoc + monSize * 1.2, monYLoc + monSize * 0.6, monSize * 0.6, monSize * 2.8, monSize * 0.2);
  rect(monXLoc - monSize * 0.4, monYLoc + monSize * 1, monSize * 0.6, monSize * 0.8, monSize * 0.2);
  rect(monXLoc + monSize * 0.4, monYLoc + monSize * 1, monSize * 0.6, monSize * 0.8, monSize * 0.2);
  rect(monXLoc, monYLoc, monSize * 2, monSize * 1.6, monSize * 0.2);

  rect(monXLoc, monYLoc - monSize * 1, monSize * 1, monSize * 0.8, monSize * 0.2);
  rect(monXLoc, monYLoc - monSize * 1.2, monSize * 0.6, monSize * 0.04, monSize * 1.4);
  ellipse(monXLoc - monSize * 0.2, monYLoc - monSize * 1, monSize * 0.1, monSize * 0.1);
  ellipse(monXLoc + monSize * 0.2, monYLoc - monSize * 1, monSize * 0.1, monSize * 0.1);
  rect(monXLoc, monYLoc - monSize * 0.9, monSize * 0.06, monSize * 0.2, monSize * 0.1);
  fill(199, 140, 82);
  strokeWeight(0);
  rect(monXLoc, monYLoc + monSize * 0.1, monSize * 1.4, monSize * 0.8, monSize * 0.1)
}

// canoe function
function drawCanoe(canXLoc, canYLoc, canSpeed) {
  strokeWeight(5)
  stroke(102, 51, 0)
  fill(153, 76, 0)
  bezier(canXLoc - 0.5, canYLoc + 30, canXLoc + 10, canYLoc, canXLoc + 5, canYLoc - 5, canXLoc - 0.5, canYLoc - 30)
  bezier(canXLoc + 0.5, canYLoc + 30, canXLoc - 10, canYLoc, canXLoc - 5, canYLoc - 5, canXLoc + 0.5, canYLoc - 30)
}

// island function 
function drawIsland(islXLoc, islYLoc, islSize, islSpeed) {
  strokeWeight(islSize * 0.5)
  stroke(212, 194, 140)
  fill(237, 218, 156)
  ellipse(islXLoc, islYLoc, islSize * 10, islSize * 10)
  stroke(23, 135, 0)
  fill(26, 156, 0)
  ellipse(islXLoc, islYLoc, islSize * 7, islSize * 7)
}

// cloud 1 function
function drawCloud(cloudXLoc, cloudYLoc, cloudSpeed) {
  strokeWeight(0)
  fill(240, 240, 250)
  ellipse(cloudXLoc, cloudYLoc, 120, 120)
  ellipse(cloudXLoc + 60, cloudYLoc + 10, 100, 100)
  ellipse(cloudXLoc - 60, cloudYLoc + 20, 80, 80)
}

// cloud 2 function
function drawCloudTwo(cloudXLocTwo, cloudYLocTwo, cloudSpeedTwo) {
  strokeWeight(0)
  fill(220, 220, 230)
  ellipse(cloudXLocTwo, cloudYLocTwo, 100, 100)
  ellipse(cloudXLocTwo + 50, cloudYLocTwo + 10, 80, 80)
  ellipse(cloudXLocTwo - 50, cloudYLocTwo + 20, 60, 60)
}

// plane wing obstacle function
function drawWings(obsYLoc) {
  strokeWeight(10)
  stroke(50)
  fill(150)
  quad(-10, obsYLoc + 30, 100, obsYLoc, 100, obsYLoc + 60, -10, obsYLoc + 120)
  quad(410, obsYLoc + 30, 300, obsYLoc, 300, obsYLoc + 60, 410, obsYLoc + 120)
}

// missile obstacle function
function drawMissile(missileXLoc, obsYLoc) {
  strokeWeight(10)
  stroke(150, 0, 0)
  fill(230, 0, 0)
  ellipse(missileXLoc, obsYLoc + 75, 40, 40)
  quad(missileXLoc - 20, obsYLoc - 40, missileXLoc - 50, obsYLoc - 40, missileXLoc - 50, obsYLoc - 15, missileXLoc - 20, obsYLoc + 25)
  quad(missileXLoc + 20, obsYLoc - 40, missileXLoc + 50, obsYLoc - 40, missileXLoc + 50, obsYLoc - 15, missileXLoc + 20, obsYLoc + 25)
  stroke(50)
  fill(150)
  rect(missileXLoc, obsYLoc + 15, 40, 110)
}

// satellite obstacle function
function drawSat(satXLoc, obsYLoc) {
  strokeWeight(10)
  stroke(0, 26, 77)
  fill(0, 43, 128)
  rect(satXLoc - 50, obsYLoc + 10, 80, 60)
  rect(satXLoc - 130, obsYLoc + 10, 80, 60)
  rect(satXLoc + 50, obsYLoc + 10, 80, 60)
  rect(satXLoc + 130, obsYLoc + 10, 80, 60)
  stroke(50)
  fill(150)
  rect(satXLoc, obsYLoc, 50, 80)
  ellipse(satXLoc, obsYLoc + 50, 90, 90)
  ellipse(satXLoc, obsYLoc + 50, 20, 20)
}

// obstacle randomizer
function obsGen() {
  obsType = bsType = Math.floor(Math.random() * 6)
}


// obstacle generation
function generateObs() {
  // initial wings
  if (obsType == 100) {
    obsYLoc = obsYLoc + obsSpeed
    drawWings(obsYLoc)
    if (obsYLoc > 700) {
      obsYLoc = -100
      obsGen()
    }
  }
  // wings
  else if (obsType == 0) {
    obsYLoc = obsYLoc + obsSpeed
    drawWings(obsYLoc)
    if (obsYLoc > 700) {
      obsYLoc = -100
      obsGen()
    }
  }
  // middle missile
  else if (obsType == 1) {
    obsYLoc = obsYLoc + obsSpeed
    drawMissile(missileM, obsYLoc)
    if (obsYLoc > 730) {
      obsYLoc = -100
      obsGen()
    }
  }
  // left missile
  else if (obsType == 2) {
    obsYLoc = obsYLoc + obsSpeed
    drawMissile(missileL, obsYLoc)
    if (obsYLoc > 730) {
      obsYLoc = -100
      obsGen()
    }
  }
  // right missile
  else if (obsType == 3) {
    obsYLoc = obsYLoc + obsSpeed
    drawMissile(missileR, obsYLoc)
    if (obsYLoc > 730) {
      obsYLoc = -100
      obsGen()
    }
  }
  // left satellite
  else if (obsType == 4) {
    obsYLoc = obsYLoc + obsSpeed
    drawSat(satL, obsYLoc)
    if (obsYLoc > 730) {
      obsYLoc = -100
      obsGen()
    }
  }
  // right satellite
  else if (obsType == 5) {
    obsYLoc = obsYLoc + obsSpeed
    drawSat(satR, obsYLoc)
    if (obsYLoc > 730) {
      obsYLoc = -100
      obsGen()
    }
  }
}

// mouse clicked
function mouseClicked() {
  // if in start 
  if (state == 'start') {
    if (mouseX < 290 && mouseX > 110 && mouseY < 340 && mouseY > 260) {
      state = 'play'
      //variables()
    }
  }
  // if in gameover
  if (state == 'gameover') {
    if (mouseX < 305 && mouseX > 95 && mouseY < 370 && mouseY > 290) {
      state = 'play'
      variables()
    }
    if (mouseX < 305 && mouseX > 95 && mouseY > 425 && mouseY < 505) {
      state = 'start'
      variables()
    }
  }
}

function draw() {
  background(1, 120, 189);
  rectMode(CENTER)
  ellipseMode(CENTER)
  canSpeed = gameSpeed * 0.2
  islSpeed = gameSpeed * 0.1
  cloudSpeed = gameSpeed * 0.8
  cloudSpeedTwo = gameSpeed * 0.6
  obsSpeed = gameSpeed * 0.7

  // decorations
  islYLoc = islYLoc + islSpeed // island 
  if (islYLoc > 1500) {
    islYLoc = -100
    islXLoc = random(0, 400)
    islSize = random(5, 11)
  }
  drawIsland(islXLoc, islYLoc, islSize, islSpeed)
  canYLoc = canYLoc + canSpeed // canoe 
  if (canYLoc > 1500) {
    canYLoc = -100
    canXLoc = random(0, 400)
  }
  drawCanoe(canXLoc, canYLoc, canSpeed)
  // clouds 
  cloudYLoc = cloudYLoc + cloudSpeed // cloud 1
  if (cloudYLoc > 800) {
    cloudYLoc = -100
    cloudXLoc = random(10, 390)
  }
  drawCloud(cloudXLoc, cloudYLoc, cloudSpeed)
  cloudYLocTwo = cloudYLocTwo + cloudSpeedTwo // cloud 2
  if (cloudYLocTwo > 800) {
    cloudYLocTwo = -100
    cloudXLocTwo = random(10, 390)
  }
  drawCloudTwo(cloudXLocTwo, cloudYLocTwo, cloudSpeedTwo)

  // start menu 
  if (state == 'start') {
    gameSpeed = 10
    // start button  
    strokeWeight(10)
    stroke(0, 26, 77)
    fill(0, 43, 128)
    rect(200, 300, 180, 80, 15)
    textSize(40)
    textAlign(CENTER)
    textStyle(BOLD)
    noStroke()
    fill(255)
    text('START', 200, 315)
    // controls
    stroke(150, 0, 0)
    fill(230, 0, 0)
    rect(200, 436, 340, 130, 15)
    textSize(20)
    noStroke()
    fill(255)
    text('CONTROLS: USE THE A AND D', 200, 405)
    text('OR ARROW KEYS TO HELP THE', 200, 430)
    text('MONKEY DODGE OBSTACTLES', 200, 455)
    text(' AND SOAR TROUGH THE SKIES!', 200, 480)
    // logo
    strokeWeight(12)
    textSize(50)
    textAlign(CENTER)
    stroke(150, 0, 0)
    fill(255)
    textStyle(BOLD)
    text('MONKEY!', 200, 180)
    noStroke()
    fill(1, 120, 189)
    //rect(100,130,40,17)
    textSize(60)
    stroke(0, 26, 77)
    fill(255)
    textStyle(BOLDITALIC)
    text('SOARING', 200, 120)
  }
  else if (state == 'play') {
    // monkey
    drawMonkey(monXLoc, monYLoc, monSize)
    // movements
    // move left
    if (keyIsDown(65) && monXLoc > 70) {
      monXLoc = monXLoc - 8
    }
    if (keyIsDown(LEFT_ARROW) && monXLoc > 70) {
      monXLoc = monXLoc - 8
    }
    // move right
    if (keyIsDown(68) && monXLoc < 335) {
      monXLoc = monXLoc + 8
    }
    if (keyIsDown(RIGHT_ARROW) && monXLoc < 335) {
      monXLoc = monXLoc + 8
    }
    // obstacle generation
    generateObs()
    // obstacle collision
    // initial wings col
    if (obsType == 100) {
      if ((monXLoc + 67 >= 300) && (monYLoc - 90 <= obsYLoc && monYLoc + 67 >= obsYLoc)) {
        state = 'gameover'
      }
      else if ((monXLoc - 67 <= 100) && (monYLoc - 90 <= obsYLoc && monYLoc + 67 >= obsYLoc)) {
        state = 'gameover'
      }
    }
    // wings col
    else if (obsType == 0) {
      if ((monXLoc + 67 >= 300) && (monYLoc - 90 <= obsYLoc && monYLoc + 67 >= obsYLoc)) {
        state = 'gameover'
      }
      else if ((monXLoc - 67 <= 100) && (monYLoc - 90 <= obsYLoc && monYLoc + 67 >= obsYLoc)) {
        state = 'gameover'
      }
    }
    // mid missile col
    else if (obsType == 1) {
      if ((monYLoc - 90 <= obsYLoc && monYLoc + 90 >= obsYLoc) && ((monXLoc + 80 <= 240 && monXLoc + 80 >= 160) || (monXLoc - 80 >= 160 && monXLoc - 80 <= 240) || (monXLoc <= 240 && monXLoc >= 160))) {
        state = 'gameover'
      }
    }
    // left missile col
    else if (obsType == 2) {
      if ((monYLoc - 80 <= obsYLoc && monYLoc + 80 >= obsYLoc) && ((monXLoc + 70 <= 140 && monXLoc + 70 >= 60) || (monXLoc - 70 >= 60 && monXLoc - 70 <= 140) || (monXLoc <= 140 && monXLoc >= 60))) {
        state = 'gameover'
      }
    }
    // right missile col
    else if (obsType == 3) {
      if ((monYLoc - 80 <= obsYLoc && monYLoc + 80 >= obsYLoc) && ((monXLoc + 70 <= 340 && monXLoc + 70 >= 260) || (monXLoc - 70 >= 260 && monXLoc - 70 <= 340) || (monXLoc <= 340 && monXLoc >= 260))) {
        state = 'gameover'
      }
    }
    // left sat col
    else if (obsType == 4) {
      if (((monXLoc - 70 <= 230) || (monXLoc <= 230 && monXLoc >= 0)) && (monYLoc - 80 <= obsYLoc && monYLoc + 80 >= obsYLoc)) {
        state = 'gameover'
      }
    }
    // right sat col
    else if (obsType == 5) {
      if (((monXLoc + 70 >= 170) || (monXLoc <= 400 && monXLoc >= 170)) && (monYLoc - 80 <= obsYLoc && monYLoc + 80 >= obsYLoc)) {
        state = 'gameover'
      }
    }
    // score
    if (frames % 3 == 0) {
      score += 1
    }
    strokeWeight(10)
    stroke(20)
    fill(235)
    textSize(40)
    text(score, 200, 50)
    // increase speed
    if (score % 500 === 0) {
      gameSpeed = gameSpeed + 2
    }
  }
  else if (state == 'gameover') {
    // monkey
    monSize = monSize - 1
    drawMonkey(monXLoc, monYLoc, monSize)
    if (monSize <= 1) {
      monSize = 1
    }
    // obstacle generation
    generateObs()
    background(0, 0, 0, 100)
    // restart button  
    strokeWeight(10)
    stroke(0, 26, 77)
    fill(0, 43, 128)
    rect(200, 330, 210, 80, 15)
    textSize(40)
    textAlign(CENTER)
    textStyle(BOLD)
    noStroke()
    fill(255)
    text('RESTART', 200, 345)
    // home button
    stroke(150, 0, 0)
    fill(230, 0, 0)
    rect(200, 466, 210, 80, 15)
    textSize(40)
    textAlign(CENTER)
    textStyle(BOLD)
    noStroke()
    fill(255)
    text('HOME', 200, 480)
    // game over
    strokeWeight(12)
    textSize(60)
    textAlign(CENTER)
    stroke(150, 0, 0)
    fill(255)
    textStyle(BOLD)
    text('OVER!', 200, 180)
    fill(1, 120, 189)
    textSize(70)
    fill(255)
    textStyle(BOLDITALIC)
    stroke(0, 26, 77)
    text('GAME', 200, 120)
    noStroke()
    fill(1, 73, 115)
    //rect(240,52,60,40) 
    // score
    strokeWeight(10)
    stroke(20)
    fill(235)
    textSize(30)
    text('SCORE: ' + score, 200, 250)
  }
  frames += 1
}