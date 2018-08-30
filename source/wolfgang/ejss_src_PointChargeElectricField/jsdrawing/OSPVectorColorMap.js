"use strict";
/*
VectorColorMapper.js
Object for converting vector magnitude to color

Developed by Wolfgang Christian

 */

function VectorColorMap(lower, upper) {
  this.lower =(lower === undefined) ? 0.5: lower;
  this.upper =(upper === undefined) ? 1: upper;
}

VectorColorMap.prototype.doubleToColor = function (val) {
  if (val < this.lower) {
    var index = '' + Math.floor(255 *(1 - val / this.lower));
    //console.log(["rgb("+index+','+index,",255)"].join(""));
    return[ "rgb(" + index + ',' + index, ",255)"].join("");
  } else if (val < this.upper) {
    //value from 0 to 1
    var value =(val - this.lower) /(this.upper - this.lower);
    var hue =((1 - value) * 240).toString(10);
    return[ "hsl(", hue, ",100%,50%)"].join("");
  } else {
    var index = '' + Math.floor(255 /(val - this.upper));
    return[ "rgb(" + index + ",0,0)"].join("");
  }
};