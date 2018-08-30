"use strict";
/*

Vector.js

Objects for handling and drawing vectors.

Created by Wolfgang Christian based on code at http://deepliquid.com/blog/archives/98

 */

/*
 */
function Arrow(style, size) {
  this.strokeColor = "black";
  this.centered = false;
  this.style = style;
  // 0 for single head; 1 for double head
  this.size = size;
  // size of head in pix
  this.arrowR =[[0, 0],[-3, -1].map(function (x) {
    return x * size
  }),[-3, 1].map(function (x) {
    return x * size
  })];
  this.arrowL =[[0, 0],[+ 3, -1].map(function (x) {
    return x * size
  }),[+ 3, 1].map(function (x) {
    return x * size
  })];
  this.needleR =[[0, 0],[0, 1].map(function (x) {
    return x * size
  }),[3, 0].map(function (x) {
    return x * size
  }),[0, -1].map(function (x) {
    return x * size
  })],[0.0];
  this.needleL =[[0, 0],[0, 1].map(function (x) {
    return x * size
  }),[-3, 0].map(function (x) {
    return x * size
  }),[0, -1].map(function (x) {
    return x * size
  })],[0.0];
}

Arrow.prototype.drawFilledPolygon = function (ctx, shape, color) {
  ctx.beginPath();
  ctx.moveTo(shape[0][0], shape[0][1]);
  
  for (var p in shape) {
    if (p > 0) ctx.lineTo(shape[p][0], shape[p][1]);
    //console.log("x="+shape[p][0]+"  y="+shape[p][1]);
  }
  
  ctx.lineTo(shape[0][0], shape[0][1]);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
};

Arrow.prototype.translateShape = function (shape, x, y) {
  var rv =[];
  for (var p in shape)
  rv.push([shape[p][0] + x, shape[p][1] + y]);
  return rv;
};

Arrow.prototype.rotateShape = function (shape, ang) {
  var rv =[];
  for (var p in shape) {
    rv.push(this.rotatePoint(ang, shape[p][0], shape[p][1]));
  }
  return rv;
};

Arrow.prototype.rotatePoint = function (ang, x, y) {
  return[
  (x * Math.cos(ang)) - (y * Math.sin(ang)),
  (x * Math.sin(ang)) + (y * Math.cos(ang))];
};


Arrow.prototype.drawLineArrow = function (ctx, x1, y1, dx, dy, color1, color2, strokeColor) {
  if (color1 === undefined) color1 = "red";
  if (color2 === undefined) color2 = "blue";
  if (strokeColor === undefined) strokeColor = this.strokeColor;
  if (this.centered) {
    // shift to center
    x1 = x1 - dx / 2;
    y1 = y1 - dy / 2;
  }
  var x2 = x1 + dx;
  var y2 = y1 + dy;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = strokeColor;
  ctx.stroke();
  var ang = Math.atan2(dy, dx);
  if (this.style === 1) {
    this.drawFilledPolygon(ctx, this.translateShape(this.rotateShape(this.arrowR, ang), x2, y2), color1);
    this.drawFilledPolygon(ctx, this.translateShape(this.rotateShape(this.arrowL, ang), x1, y1), color2);
  } else this.drawFilledPolygon(ctx, this.translateShape(this.rotateShape(this.arrowR, ang), x2, y2), color1);
};


Arrow.prototype.drawNeedleArrow = function (ctx, x1, y1, dx, dy, color1, color2) {
  if (color1 === undefined) color1 = "red";
  if (color2 === undefined) color2 = "blue";
  var ang = Math.atan2(- dy, dx);
  if (this.style === 1) {
    this.drawFilledPolygon(ctx, this.translateShape(this.rotateShape(this.needleR, ang), x1, y1), color1);
    this.drawFilledPolygon(ctx, this.translateShape(this.rotateShape(this.needleL, ang), x1, y1), color2);
  } else this.drawFilledPolygon(ctx, this.translateShape(this.rotateShape(this.needleR, ang), x1, y1), color1);
};

Arrow.prototype.setCentered = function (centered) {
  this.centered = centered;
};