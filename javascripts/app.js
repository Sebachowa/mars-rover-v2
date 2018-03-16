// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
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
    rover.y -= 1
    console.log("Moving to: " + rover.x + "," + rover.y)
  } else if (rover.direction === "S") {
    rover.y += 1
    console.log("Moving to: " + rover.x + "," + rover.y)
  } else if (rover.direction === "W") {
    rover.x -= 1
    console.log("Moving to: " + rover.x + "," + rover.y)
  } else if (rover.direction === "E") {
    rover.x += 1
    console.log("Moving to: " + rover.x + "," + rover.y)
  } else {
    alert("Something when wrong bruh!!!")
  }; 
}

function moveBackward(rover){
  console.log("moveBackward was called");
  if (rover.direction === "N") {
    rover.y += 1
    console.log("Going back to: " + rover.x + "," + rover.y)
  } else if (rover.direction === "S") {
    rover.y -= 1
    console.log("Going back to: " + rover.x + "," + rover.y)
  } else if (rover.direction === "W") {
    rover.x += 1
    console.log("Going back to: " + rover.x + "," + rover.y)
  } else if (rover.direction === "E") {
    rover.x -= 1
    console.log("Going back to: " + rover.x + "," + rover.y)
  } else {
    alert("Something when wrong bruh!!!")
  }; 
}

function checkingBoundaries(x,y) {
  if (x < 0 || x > 9 || y < 0 || y > 9) {
    console.log("You almost got out the safe zone, automatic reserve in process...")
    rover.x = rover.travelLog[rover.travelLog.length -1][0]
    rover.y = rover.travelLog[rover.travelLog.length -1][1]
    console.log("The rover new coordinates are: " + rover.x + "," + rover.y)
  };
}

function commands(string) {
  rover.travelLog.push([rover.x,rover.y])
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "r") {
      turnRight(rover);
      moveForward(rover);
      checkingBoundaries(rover.x,rover.y)
      var position = [rover.x,rover.y];
      rover.travelLog.push(position);
    } else if (string[i] === "l") {
      turnLeft(rover);
      moveForward(rover);
      checkingBoundaries(rover.x,rover.y)
      var position = [rover.x,rover.y];
      rover.travelLog.push(position);
    } else if (string[i] === "f") {
      moveForward(rover);
      checkingBoundaries(rover.x,rover.y)
      var position = [rover.x,rover.y];
      rover.travelLog.push(position);
    } else if (string[i] === "b") {
      moveBackward(rover);
      checkingBoundaries(rover.x,rover.y)
      var position = [rover.x,rover.y];
      rover.travelLog.push(position);
    } else {
      alert("Something when wrong bruh!!!")
    };
  }
  console.log(rover.travelLog)
}


//Testing

commands("rfffffrfffffrfffffffffff")


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