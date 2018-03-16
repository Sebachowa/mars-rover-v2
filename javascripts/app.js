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
    return true
  } else {
    return false
  }
}     

function addTravelLog() {
  var position = [rover.x,rover.y]
  rover.travelLog.push(position)
}

function commands(string) {
  rover.travelLog.push([rover.x,rover.y])
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "r") {
      turnRight(rover);
      moveForward(rover);
      if (!checkingBoundaries(rover.x,rover.y)) {
        addTravelLog();
      }
    } else if (string[i] === "l") {
      turnLeft(rover);
      moveForward(rover);
      if (!checkingBoundaries(rover.x,rover.y)) {
        addTravelLog();
      }
    } else if (string[i] === "f") {
      moveForward(rover);
      if (!checkingBoundaries(rover.x,rover.y)) {
        addTravelLog();
      }
    } else if (string[i] === "b") {
      moveBackward(rover);
      if (!checkingBoundaries(rover.x,rover.y)) {
        addTravelLog();
      }
    } else {
    };
  }
  console.log(rover.travelLog)
}


commands("frrrrrrrf");