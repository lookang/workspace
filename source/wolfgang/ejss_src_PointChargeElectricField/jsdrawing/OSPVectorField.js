"use strict";

function VectorField(fieldData, xMin, xMax, nx, yMin, yMax, ny, fillColor) {
  Shape.call(this, 0, 0, xMax - xMin, yMax - yMin);
  this.xdata = fieldData[0] || undefined;
  this.ydata = fieldData[1] || undefined;
  this.xMin = xMin === undefined ? -5: xMin;
  this.xMax = xMax === undefined ? 5: xMax;
  this.nx = nx || 15;
  this.yMin = yMin === undefined ? -5: yMin;
  this.yMax = yMax === undefined ? 5: yMax;
  this.ny = ny || 15;
  this.length = 0.9; //fraction of grid space
  this.headSize = 4; //arrow head in pixels
  this.lower = 1;    // blue saturation
  this.upper = 3;    // red saturation
  this.fillColor = fillColor;
  this.colorMap = new VectorColorMap(this.lower, this.upper); // color map with blue to red scale boundaries
  
  this.xPos = arrayCoordinates(this.xMin, this.xMax, this.nx);
  this.yPos = arrayCoordinates(this.yMin, this.yMax, this.ny);
  
  this.draw = function (ospCanvas) {
    if (ospCanvas === undefined) {
      console.log("canvas undefined");
      return;
    }
    var v = new Arrow(0, this.headSize); // Syntax: Arrow(style, size)
    v.setCentered(true);
    var dxPix = 0.9 * ospCanvas.pxPerUnitX *(this.xPos[1] - this.xPos[0]);
    var dyPix = 0.9 * ospCanvas.pxPerUnitY *(this.yPos[1] - this.yPos[0]);
    
    for (var i = 0; i < this.nx; i++) {
      for (var j = 0; j < this.ny; j++) {
        var xi = ospCanvas.xToPix(this.xPos[i]);
        var yi = ospCanvas.yToPix(this.yPos[j]);
        var ax = this.xdata[i][j];  // x component
        var ay = this.ydata[i][j];  // y component
        var theta = Math.atan2(- ay, ax);
        var mag = Math.sqrt(ax * ax + ay * ay);
        var strokeColor = "black";
        if (mag < this.lower) {
          // fade at low magnitude
          var index = '' + Math.floor(255 *(1 - mag / this.lower));
          strokeColor =[ 'rgb(' + index + ',' + index + ',' + index + ')'].join("");
        }
        var arrowColor = (this.fillColor === undefined) ? this.colorMap.doubleToColor(mag): this.fillColor;
        // Syntax: drawLineArrow(ctx, x1, y1, dx, dy, color1, color2, stroke) wher dx and dy are pixel units
        v.drawLineArrow(ospCanvas.context, xi, yi, dxPix * Math.cos(theta), dyPix * Math.sin(theta), arrowColor, undefined, strokeColor);  // vectors have constant length
      }
    }
  }
  
  this.setThreshold = function (lower, upper) {
    this.lower = lower === undefined ? this.lower: lower;
    this.upper = upper === undefined ? this.upper: upper;
    this.colorMap = new VectorColorMap(this.lower, this.upper); // color map with blue to red scale boundaries
  }
  
  this.setColor = function (color) {
    this.color = color;
  }
  
  
  this.updateData = function (newData) { //updates the contour lines if the data change
    this.xdata = newData[0] || this.xdata;
    this.ydata = newData[1] || this.ydata;
    this.xCoordinates = arrayCoordinates(this.xMin, this.xMax, this.nx);
    this.yCoordinates = arrayCoordinates(this.yMin, this.yMax, this.ny);
  }
}