"use strict";

function DirectionField(fieldData, xMin, xMax, nx, yMin, yMax, ny) {
  Shape.call(this, 0, 0, xMax - xMin, yMax - yMin);
  this.xdata = fieldData[0] || undefined;
  this.ydata = fieldData[1] || undefined;
  this.xMin = xMin === undefined ? -5: xMin;
  this.xMax = xMax === undefined ? 5: xMax;
  this.nx = nx || 15;
  this.yMin = yMin === undefined ? -5: yMin;
  this.yMax = yMax === undefined ? 5: yMax;
  this.ny = ny || 15;
  this.length = 0.9;  //fraction of grid space
  this.headSize = 3;  //arrow head in pixels
  this.colorPlus = "red";
  this.colorMinus = "blue";
  
  this.xPos = arrayCoordinates(this.xMin, this.xMax, this.nx);
  this.yPos = arrayCoordinates(this.yMin, this.yMax, this.ny);
  
  this.draw = function (ospCanvas) {
    if (ospCanvas === undefined) {
      console.log("canvas undefined");
      return;
    }
    var aspect =(ospCanvas.pixHgt === 0) ? 1: ospCanvas.pixWth/ ospCanvas.pixHgt;
    var yaspect =(aspect > 1) ? 1 / aspect: 1; // width>height
    var xaspect =(aspect < 1) ? aspect: 1;     // width<height
    
    // Syntax: Arrow(style, size)
    var v = new Arrow(1, this.headSize);
    
    for (var i = 0; i < nx; i++) {
      for (var j = 0; j < ny; j++) {
        var xi = ospCanvas.xToPix(this.xPos[i]);
        var yi = ospCanvas.yToPix(this.yPos[j]);
        var ax = this.xdata[i][j];  // x component
        var ay = this.ydata[i][j];  // y component
        var ang = Math.atan2(ay, ax);
        // Syntax: drawLineArrow(ctx, x1, y1, dx, dy, color1, color2)
        v.drawNeedleArrow(ospCanvas.context, xi, yi, xaspect * ax, yaspect * ay, this.colorPlus, this.colorMinus);
      }
    }
  }
  
  this.setColor = function (colorPlus, colorMinus) {
    this.colorPlus = colorPlus || this.colorPlus;
    this.colorMinus = colorMinus || this.colorMinus;
  }
  
  this.updateData = function (newData) {
    //updates the contour lines if the data is changed
    this.xdata = newData[0] || this.xdata;
    this.ydata = newData[1] || this.ydata;
    this.xPos = arrayCoordinates(this.xMin, this.xMax, this.nx);
    this.yPos = arrayCoordinates(this.yMin, this.yMax, this.ny);
  }
}