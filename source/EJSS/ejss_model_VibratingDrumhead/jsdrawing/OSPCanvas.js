"use strict";
var osp;
if(!osp) osp={}                   // if undefined make it an object;
if(!osp.drawing) osp.drawing={}   // if undefined make it an object;
osp.drawing.OSPCanvas= function(context, element, xMin, xMax, yMin, yMax) {
  // Drawables.push
  this.context = context;
  this.element = element;
  // get position and size of the element
  var pos = element.getPixelPosition();
  var size = element.getPixelSizes();
  var offset = element.getRelativePositionOffset(size);
  
  this.drawables =[];
  this.xMin = xMin;
  this.xMax = xMax;
  this.deltaX = xMax - xMin;
  this.yMin = yMin;
  this.yMax = yMax;
  this.deltaY = yMax - yMin;
  
  // pixel coordinates of middle
  this.xm = pos[0] + offset[0];
  this.ym = pos[1] + offset[1];
  
  this.pixWth = Math.abs(size[0]);
  this.pixHgt = Math.abs(size[1]);
  this.pxPerUnitX = this.pixWth / this.deltaX;
  this.pxPerUnitY = this.pixHgt / this.deltaY;
  this.pxTopLeftX = this.xm - this.pixWth / 2;
  this.pxTopLeftY = this.ym + this.pixHgt / 2;
  // console.log("ppx="+this.pxPerUnitX+"ppy="+this.pxPerUnitY);
  
  this.fillBackground = function (color) {  // usually not needed since EJS fills background
    if (color == null || color == undefined) {
      //if not given color, set color to white
      color = "#FFFFFF";
    }
  }
  
  this.addDrawable = function (drawable) {
    //adds object if it can be drawn (has draw function)
    if (can(drawable, "draw")) {
      this.drawables.push(drawable);
    }
  }
  
  this.xToPix = function (x) {
    return this.pxTopLeftX +(x - this.xMin) * this.pxPerUnitX;
  }
  
  this.yToPix = function (y) {
    return this.pxTopLeftY -(y - this.yMin) * this.pxPerUnitY;
  }
  
  this.drawObjects = function () {
    //draws all objects within this.drawables
    for (var i = 0; i < this.drawables.length; i++) {
      var drawable = this.drawables[i];
      if (can(drawable, "draw")) {
        //draws object if it can be drawn (double check)
        drawable.draw(this);
      }
    }
    //this.context.setTransform(1,0,0,1,0,0); //returns context to original state
  }
  
  this.clearObjects = function () {
    this.drawables =[];
  }
}