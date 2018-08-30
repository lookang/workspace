"use strict";
function DataContourInfo(d, l, autoscale, zMin, zMax) {
  /*object holding a given set of contour data, its minimum and maximum values, the number of levels, the heights of the levels
  d: grid of data (array of arrays)
  l: number of levels
  autoscale: autoscales from the minimum of the data to the maximum
  zMin and zMax:  scales from zMin to zMax
   */
  
  this.data = d;
  //data is held
  if (autoscale) {
    var tempMin, minVal = this.data[0][0], tempMax, maxVal = this.data[0][0];
    for (var i = 0; i < this.data.length; i++) {
      //evaluate the min and max values of the data
      tempMin = getMinOfArray(this.data[i]);
      if (tempMin < minVal) {
        minVal = tempMin;
      }
      tempMax = getMaxOfArray(this.data[i]);
      if (tempMax > maxVal) {
        maxVal = tempMax;
      }
    }
    this.max = maxVal;
    //min and max value are held
    this.min = minVal;
  } else {
    this.max = zMax;
    this.min = zMin;
  }
  
  this.levels = l;
  //holds the number of levels
  
  var list =[];
  var range = this.max - this.min;
  var step = range /(this.levels -1);
  for (var i = 0; i < this.levels; i++) {
    //creates the list of all the levels to be contoured
    list.push(this.min + step * i);
  }
  this.listHeights = list;
  //list of the heights of each of the levels
}

// Compute contour trail canvas path
function TrailSet(x2DArray, y2DArray, color) {
  Shape.call(this, x2DArray, y2DArray, null, null, color);
  //calculate "size"
  this.numTrail = "The number of trails are not the same length";
  if (this.x.length == this.y.length) {
    this.numTrail = this.x.length;
  }
  this.draw = function (ospCanvas) {
    //var ppuX=ospCanvas.pxPerUnitX;
    //var ppuY=ospCanvas.pxPerUnitY;
    ospCanvas.context.strokeStyle = this.color;
    
    ospCanvas.context.beginPath();
    //begins drawing
    for (var i = 0; i < this.numTrail; i++) {
      //for each trail....
      if ((this.x[i].length != this.y[i].length) || this.x[i].length < 2) {
        //checks that the length of each trail is correct
        console.log("Trail arrays are not of the correct length. Cannot draw trail.");
      } else {
        //ospCanvas.context.moveTo(this.x[i][0]*ppuX,this.y[i][0]*ppuY);
        ospCanvas.context.moveTo(ospCanvas.xToPix(this.x[i][0]), ospCanvas.yToPix(this.y[i][0]));
        for (var j = 0; j < this.x[i].length; j++) {
          //ospCanvas.context.lineTo(this.x[i][j]*ppuX,this.y[i][j]*ppuY);
          ospCanvas.context.lineTo(ospCanvas.xToPix(this.x[i][j]), ospCanvas.yToPix(this.y[i][j]));
          //move line to each point after the previous
        }
      }
    }
    ospCanvas.context.stroke();
    //console.log("Trail Set Drawn");
  }
}

function Contour(data, xMin, xMax, xPoints, yMin, yMax, yPoints, autoscale, zMin, zMax, levels, color) {
  Shape.call(this, 0, 0, xMax - xMin, yMax - yMin, color);
  this.data = data || undefined;
  this.levels = levels || 10;
  this.xMin = xMin === undefined ? -5: xMin;
  this.xMax = xMax === undefined ? 5: xMax;
  this.xPoints = xPoints || 15;
  this.yMin = yMin === undefined ? -5: yMin;
  this.yMax = yMax === undefined ? 5: yMax;
  this.yPoints = yPoints || 15;
  this.autoscale = autoscale || true;
  this.zMin = zMin === undefined ? -5: zMin;
  this.zMax = zMax === undefined ? 5: zMax;
  
  
  this.dci = new DataContourInfo(this.data, this.levels, this.autoscale, this.zMin, this.zMax);
  this.listHeights = this.dci.listHeights;
  this.xCoordinates = arrayCoordinates(this.xMin, this.xMax, this.xPoints);
  this.yCoordinates = arrayCoordinates(this.yMin, this.yMax, this.yPoints);
  
  var c = new Conrec();
  c.contour(this.data, 0, this.xPoints -1, 0, this.yPoints -1, this.xCoordinates, this.yCoordinates, this.levels, this.listHeights);
  
  this.xCoorConrec = c.contourXCoorList();
  this.yCoorConrec = c.contourYCoorList();
  
  this.contourLines = new TrailSet(this.xCoorConrec, this.yCoorConrec, this.color);
  this.draw = function (ospCanvas) {
    if (ospCanvas === undefined) {
      console.log("canvas undefined");
      return;
    }
    this.contourLines.draw(ospCanvas);
  }
  
  
  this.updateData = function (newData) {
    //updates the contour lines if the data is changed
    this.data = newData || this.data;
    this.dci = new DataContourInfo(this.data, this.levels, this.autoscale, this.zMin, this.zMax);
    this.listHeights = this.dci.listHeights;
    this.xCoordinates = arrayCoordinates(this.xMin, this.xMax, this.xPoints);
    this.yCoordinates = arrayCoordinates(this.yMin, this.yMax, this.yPoints);
    
    var c = new Conrec();
    c.contour(this.data, 0, this.xPoints -1, 0, this.yPoints -1, this.xCoordinates, this.yCoordinates, this.levels, this.listHeights);
    
    this.xCoorConrec = c.contourXCoorList();
    this.yCoorConrec = c.contourYCoorList();
    
    this.contourLines = new TrailSet(this.xCoorConrec, this.yCoorConrec, this.color);
  }
 
}