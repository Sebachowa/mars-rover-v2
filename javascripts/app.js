// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  x: 0,
  y: 0
}

// ======================
function turnLeft(rover){
  console.log("The rover is now facing " + rover.direction);
  console.log("turnLeft was called!");
  if (rover.direction === "N") {
    rover.direction = "W"
    console.log("The rover is now facing " + rover.direction);
  } else if (rover.direction === "W") {
    rover.direction = "S"
    console.log("The rover is now facing " + rover.direction); 
  } else if (rover.direction === "S") {
    rover.direction = "E"
    console.log("The rover is now facing " + rover.direction);
  } else if (rover.direction === "E") {
    rover.direction = "N"
    console.log("The rover is now facing " + rover.direction);
  } else {
    alert("Something when wrong bruh!!!")
  };
}

function turnRight(rover){
  console.log("The rover is now facing " + rover.direction);
  console.log("turnRight was called!");
  if (rover.direction === "N") {
    rover.direction = "E"
    console.log("The rover is now facing " + rover.direction);
  } else if (rover.direction === "E") {
    rover.direction = "S"
    console.log("The rover is now facing " + rover.direction); 
  } else if (rover.direction === "S") {
    rover.direction = "W"
    console.log("The rover is now facing " + rover.direction);
  } else if (rover.direction === "W") {
    rover.direction = "N"
    console.log("The rover is now facing " + rover.direction);
  } else {
    alert("Something when wrong bruh!!!")
  };
}

//Moving forward is a function of the rover’s current direction, and the movement forward.
//For instance, if the Rover is facing west and moves forward, we would decrease the Rover’s x by 1.
//If the rover is facing north and moves forward, we would decrease the rover’s y by 1.
//If the rover is facing south and moves forward, we would increase the y by 1.
//Fill in this logic in the moveForward function. After each movement, console.log the rover’s coordinates so you can see where it is positioned.
function moveForward(rover){
  console.log("moveForward was called");
  if (rover.direction === "N") {
    rover.y += 1
    console.log("The rover coordinates are: " + rover.x + "," + rover.y)
  } else if (rover.direction === "S") {
    rover.y -= 1
    console.log("The rover coordinates are: " + rover.x + "," + rover.y)
  } else if (rover.direction === "W") {
    rover.x -= 1
    console.log("The rover coordinates are: " + rover.x + "," + rover.y)
  } else if (rover.direction === "E") {
    rover.x += 1
    console.log("The rover coordinates are: " + rover.x + "," + rover.y)
  } else {
    alert("Something when wrong bruh!!!")
  }; 
}

function commands(string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "r") {
      turnRight(rover);
      moveForward(rover);
    } else if (string[i] === "l") {
      turnLeft(rover);
      moveForward(rover);
    } else {
      alert("Something when wrong bruh!!!")
    };
  }
}

//Testing

commands("llll");
console.log(" ")
console.log(" ")
console.log(" ")
commands("rrrr");
console.log(" ")
console.log(" ")
console.log(" ")
commands("rlrlrlrl")


/* turnRight(rover);
moveForward(rover);
turnRight(rover);
moveForward(rover);
turnRight(rover);
moveForward(rover);
turnRight(rover);
moveForward(rover);
if (rover.x === 0 && rover.y === 0) {
  console.log("The rover is working properly!")
} else {
  console.log("The rover is crazy!")
};
turnLeft(rover);
moveForward(rover);
turnLeft(rover);
moveForward(rover);
turnLeft(rover);
moveForward(rover);
turnLeft(rover);
moveForward(rover);
if (rover.x === 0 && rover.y === 0) {
  console.log("The rover is working properly!")
} else {
  console.log("The rover is crazy!")
}; */