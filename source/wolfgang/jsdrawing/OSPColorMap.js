"use strict";
/*
ColorMap.js
Object for converting vector magnitude to color

Developed by Wolfgang Christian

 */

function ColorMap(lower, upper, expansion) {
  this.lower =(lower === undefined) ? -1: lower;
  this.upper =(upper === undefined) ? 1: upper;
  this.center=(upper+lower)/2;
  this.lowerColor="blue";
  this.upperColor="red";
  this.doubleToColor = function (val) { return "pink"; }
  this.expansion = (expansion===undefined)?0:expansion;
  this.a1 = 1;
  this.a2 = 1;
  this.k = 1;
  
  this.setThreshold = function (lower, upper, expansion) {
    this.a1 = 1;
    this.a2 = 1;
    this.k = 1;
    this.lower = lower === undefined ? this.lower: lower;
    this.upper = upper === undefined ? this.upper: upper;
    this.expansion = (expansion===undefined)?0:expansion;
    if(this.expansion>0) this.setExpansion(this.expansion);
  }
  
  this.expand = function(zval){
    zval = zval-this.center; // shift
    if(zval>=0) {
      return this.a1*(1-Math.exp(-this.k*zval));
    }
    return -this.a2*(1-Math.exp(this.k*zval));
  }
  
  this.setExpansion = function(expansion){
    this.expansion = (expansion===undefined)?0:expansion;
    if(this.lower===this.upper) {
      this.k = 0;
      this.a1 = this.a2 = this.center = this.lower;
    } else if((this.lower<=0)&&(this.upper>=0)) {
      this.center = 0;
      this.k = expansion/Math.max(-this.lower, this.upper);
      this.a1 = this.upper/(1-Math.exp(-this.k*this.upper));
      this.a2 = -this.lower/(1-Math.exp(this.k*this.lower));
    } else if(this.lower>0) { // min and max positive
      this.center = this.lower;
      this.k = expansion/(this.upper-this.lower);
      this.a1 = this.a2 = this.upper/(1-Math.exp(-this.k*(this.upper-this.lower)));
    } else {           // min and max negative
      this.center = this.upper;
      this.k = expansion/(this.upper-this.lower);
      this.a1 = this.a2 = -this.lower/(1-Math.exp(this.k*(this.upper-this.lower)));
    }
  }
  
  if(this.expansion>0) this.setExpansion(this.expansion);
}

function DualShadeColorMap(lower, upper, expansion) {
  ColorMap.call(this, lower, upper,expansion);
  this.doubleToColor = function (val) {
    if(this.expansion>0) val=this.expand(val);
    if (val < this.lower) {
      return this.lowerColor;
    } else if (val < this.center) {
      var index = '' + Math.floor(255 *(this.center-val) /(this.center- this.lower));
      return[ "rgb(0,0," + index + ")"].join("");
    }else if (val < this.upper) {
      var index = '' + Math.floor(255 *(val-this.center) /(this.upper-this.center));
      return[ "rgb(" + index + ",0,0)"].join("");
    } else {
      return this.upperColor;
    }
  }
}


function RainbowColorMap(lower, upper,expansion) {
  ColorMap.call(this, lower, upper);
  this.doubleToColor = function (val) {
    if (val < this.lower) {
      return this.lowerColor;
    } else if (val < this.upper) {
      //value from 0 to 1
      var value =(val - this.lower) /(this.upper - this.lower);
      var hue =((1 - value) * 240).toString(10);
      return[ "hsl(", hue, ",100%,50%)"].join("");
    } else {
      return this.upperColor;
    }
  }
}