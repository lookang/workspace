"use strict";
"use strict";
var osp;
if(!osp) osp={}                   // if undefined make it an object;
if(!osp.drawing) osp.drawing={}   // if undefined make it an object;

osp.drawing.ImageField=function(data, xMin, xMax, xPoints, yMin, yMax, yPoints, autoscale, zMin, zMax) {
  osp.drawing.Shape.call(this, 0, 0, xMax - xMin, yMax - yMin);
  this.data = data || undefined;
  this.xMin = xMin === undefined ? -5: xMin;
  this.xMax = xMax === undefined ? 5: xMax;
  this.nx = xPoints || 128;
  this.yMin = yMin === undefined ? -5: yMin;
  this.yMax = yMax === undefined ? 5: yMax;
  this.ny = yPoints || 128;
  this.autoscale = autoscale || true;
  this.lower = zMin === undefined ? -1: zMin;
  this.upper = zMax === undefined ? 1: zMax;
  this.center = (this.lower+this.upper)/2;  // usually zero
  this.maskRadius=0;  // no circular mask if radius=0
 
  this.xPos = arrayCoordinates(this.xMin, this.xMax, this.nx);
  this.yPos = arrayCoordinates(this.yMin, this.yMax, this.ny); 
  
  this.draw = function (ospCanvas) {
    if (ospCanvas === undefined) {
      console.log("canvas undefined");
      return;
    }
    var ctx=ospCanvas.context; 
    var left=Math.round(ospCanvas.xToPix(this.xMin));
    var top=Math.round(ospCanvas.yToPix(this.yMax)); 
    var width=Math.round(ospCanvas.pixWth); 
    var height=Math.round(ospCanvas.pixHgt);
    var imageData = ctx.getImageData(left, top, width, height);  // parameters must be integers
    var maskpx=this.maskRadius*ospCanvas.pxPerUnitX;
    var r=0;
    var g=0;
    var b=0;
    for (var i=0; i<width; i++) {
      var ii= Math.floor(i*this.nx/width);
      //console.log("i="+i+"  ii="+ii);
      for (var j=0; j<height; j++) {
        var jj=Math.floor(j*this.ny/height);
        g=0;
        if(this.data[ii][jj]<this.lower){
          b=255;  // blue below lower
          r=0;
        }else if(this.data[ii][jj]<this.center){
          b=255*(this.center-this.data[ii][jj])/(this.center-this.lower);
          r=0;
        }else if(this.data[ii][jj]<this.upper){
          b=0;
          r=255*(this.data[ii][jj]-this.center)/(this.upper-this.center);
        }else{  // red above upper
          b=0;
          r=255;
        }
        if(this.maskRadius>0){  // check for circular mask
          //var ri=Math.sqrt(this.xPos[ii]*this.xPos[ii]+this.yPos[jj]*this.yPos[jj]);
          //if(ri>this.maskRadius){
          if(Math.sqrt((i-width/2)*(i-width/2)+(j-height/2)*(j-height/2))>maskpx){
            r=g=224;
            b=255;
          }
        }
        var index = 4*i+4*width*j;
        imageData.data[index+0] = r;  //red
        imageData.data[index+1] = g;  //green
        imageData.data[index+2] = b;  // blue
      }
    }
    ctx.putImageData(imageData, left, top);
  }

  
  this.updateData = function (newData) {
    //updates the contour lines if data are changed
    this.data = newData || this.data;
    this.xPos = arrayCoordinates(this.xMin, this.xMax, this.nx);
    this.yPos = arrayCoordinates(this.yMin, this.yMax, this.ny);
  }

  
  this.setThreshold = function (lower, upper) {
    this.lower = lower === undefined ? this.lower: lower;
    this.upper = upper === undefined ? this.upper: upper;
  }
  
  // Draw a curcular image
  this.setCircularMask = function (radius) {
    this.maskRadius = radius;
  }

}