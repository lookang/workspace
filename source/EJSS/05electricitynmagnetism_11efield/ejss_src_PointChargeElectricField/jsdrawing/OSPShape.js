"use strict";


function Shape(x, y, sizeX, sizeY, color, orientation, shiftX, shiftY) {
  //super class
  this.x = x || 0;
  this.y = y || 0;
  this.sizeX = sizeX || 1;
  this.sizeY = sizeY || 1;
  this.orientation = orientation || 1;
  this.shiftX = indexOrientationX(this.orientation, this.x, this.sizeX);
  this.shiftY = indexOrientationY(this.orientation, this.y, this.sizeY);
  this.color = color || "#000000";
  this.draw = function (ospCanvas) {
    //console.log("Shape Drawn");
  }
}


/* ************************************NOTE************************************
Both indexOrientationX() and indexOrientation() do the same thing (essentially) by
returning an index value for the desired transformation. However,
this is depending on where the canvas draws from. E.g. for most canvas drawings
to be centered around the origin and have positive Y be upward. the transformation must be
a translation to the center and a flip about the X-axis. This results in the canvas drawingstarting from the bottom left ("SOUTH_WEST" orientation). THe following functions rely on
having the same qualities as above (drawing from the bottom left).
 */
/*
CENTERED : 1,
SOUTH: 2,
NORTH : 3,
EAST : 4,
WEST : 5,
SOUTH_EAST : 6,
SOUTH_WEST : 7,
NORTH_EAST : 8,
NORTH_WEST : 9,
 */
function indexOrientationX(orientation, x, sizeX) {
  
  if (orientation == 1 || orientation == 2 || orientation == 3) {
    //if the orientation should be shifted over by half a unit in the x-direction
    return (- sizeX / 2);
  } else if (orientation == 4 || orientation == 6 || orientation == 8) {
    //if the orientation needs to be shifted over by a full unit in the x-direction
    return (- sizeX);
  } else/* if (orientation == 5 || orientation == 9 || orientation == 7)*/ {
    //if the orientation should not be shifted in the x-direction
    return 0;
  }
}

function indexOrientationY(orientation, y, sizeY) {
  
  if (orientation == 1 || orientation == 4 || orientation == 5) {
    //if the orientation should be shifted over by half a unit in the y-direction
    return (- sizeY / 2);
  } else if (orientation == 3 || orientation == 8 || orientation == 9) {
    //if the orientation needs to be shifted over by a full unit in the x-direction
    return (- sizeY);
  } else/* if (orientation == 2 || orientation == 6 || orientation == 7)*/ {
    //if the orientation should not be shifted in the x-direction
    return 0;
  }
}