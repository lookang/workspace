"use strict";

function ScalarField(data, xMin, xMax, xPoints, yMin, yMax, yPoints, autoscale, zMin, zMax, expansion) {
  Shape.call(this, 0, 0, xMax - xMin, yMax - yMin);
  this.data = data || undefined;
  this.xMin = xMin === undefined ? -5: xMin;
  this.xMax = xMax === undefined ? 5: xMax;
  this.nx = xPoints || 15;
  this.yMin = yMin === undefined ? -5: yMin;
  this.yMax = yMax === undefined ? 5: yMax;
  this.ny = yPoints || 15;
  this.autoscale = autoscale || true;
  this.lower = zMin === undefined ? -1: zMin;
  this.upper = zMax === undefined ? 1: zMax;
  this.expansion = (expansion===undefined)?0:expansion;
 
  this.xPos = arrayCoordinates(this.xMin, this.xMax, this.nx);
  this.yPos = arrayCoordinates(this.yMin, this.yMax, this.ny); 
  
  this.colorMap = new DualShadeColorMap(this.lower, this.upper, expansion); // color map with blue to red scale boundaries
  //this.colorMap = new RainbowColorMap(this.lower, this.upper, expansion);

  this.draw = function (ospCanvas) {
    if (ospCanvas === undefined) {
      console.log("canvas undefined");
      return;
    }
    var dxPix = 1+ospCanvas.pxPerUnitX *(this.xPos[1] - this.xPos[0]); // +1 for border
    var dyPix = 1+ospCanvas.pxPerUnitY *(this.yPos[1] - this.yPos[0]);
    for (var i = 0; i < this.nx; i++) {
      var xi = ospCanvas.xToPix(this.xPos[i])-dxPix/2;;
      for (var j = 0; j < this.ny; j++) {
        var yi = ospCanvas.yToPix(this.yPos[j])-dyPix/2;;
        var u = this.data[i][j];  
        //ospCanvas.context.fillStyle=((i+j)%2===0)?"#FF0000":"#0000FF";
        ospCanvas.context.fillStyle=this.colorMap.doubleToColor(u);
        ospCanvas.context.fillRect(xi,yi,dxPix,dxPix);
      }
    }
  }
  
  
  this.updateData = function (newData) {
    //updates the contour lines if the data is changed
    this.data = newData || this.data;
    this.xPos = arrayCoordinates(this.xMin, this.xMax, this.nx);
    this.yPos = arrayCoordinates(this.yMin, this.yMax, this.ny);
  }
  
  this.setColorMap = function (mapID) {
    switch(mapID){
      case 0:
        this.colorMap =new DualShadeColorMap(this.lower, this.upper, this.expansion); // color map with blue to red scale boundaries
        break;
      case 1:
        this.colorMap = new RainbowColorMap(this.lower, this.upper, this.expansion);
        break;
      default:  // keep current map
    }
  }

  
  this.setThreshold = function (lower, upper, expansion) {
    this.lower = lower === undefined ? this.lower: lower;
    this.upper = upper === undefined ? this.upper: upper;
    this.expansion = (expansion===undefined)?this.expansion:expansion;
    this.colorMap.setThreshold(this.lower, this.upper, this.expansion);
  }

}