// Rover Object Goes Here
// ======================

var rover = {
  direction: "W",
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
  console.log("turnLeft was called!");
  if (rover.direction === "N") {
    rover.direction = "E"
    console.log("The rover is now facing " + rover.direction);
  } else if (rover.direction === "E") {
    rover.direction = "S"
    console.log("The rover is now facing " + rover.direction); 
  } else if (rover.direction === "S") {
    rover.direction = "W"
    console.log("The rover is now facing " + rover.direction);
  } else if (rover.direction === "E") {
    rover.direction = "N"
    console.log("The rover is now facing " + rover.direction);
  } else {
    alert("Something when wrong bruh!!!")
  };
}

function moveForward(rover){
  console.log("moveForward was called");
  //First turns then one step forward
}

turnLeft(rover);