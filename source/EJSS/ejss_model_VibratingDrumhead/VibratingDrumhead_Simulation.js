function VibratingDrumhead(_topFrame,_libraryPath,_codebasePath) {
  var _model = EJSS_CORE.createAnimation();
  var _view;
  var _isPlaying = false;
  var _isPaused = true;
  var _isMobile = (navigator===undefined) ? false : navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i);

var _stringProperties = {};
  var _tools = {
    showInputDialog : EJSS_INTERFACE.BoxPanel.showInputDialog,
    showOkDialog : EJSS_INTERFACE.BoxPanel.showOkDialog,
    showOkCancelDialog : EJSS_INTERFACE.BoxPanel.showOkCancelDialog
  };

  function _play()  { _isPaused = false; _isPlaying = true;  _model.play();  }
  function _pause() { _isPaused = true;  _isPlaying = false; _model.pause(); }
  function _step()  { _pause();  _model.step(); }
  function _reset() { _model.reset();  _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); }
  _model._play  = _play;
  _model._pause = _pause;
  _model._step  = _step;
  _model._reset = _reset;
  function _update() { _model.update(); }
  function _initialize() { _model.initialize(); }
  function _setFPS(_fps) { _model.setFPS(_fps); }
  function _setDelay(_delay) { _model.setDelay(_delay); }
  function _setStepsPerDisplay(_spd) { _model.setStepsPerDisplay(_spd); }
  function _setUpdateView(_updateView) { _model.setUpdateView(_updateView); }
  function _setAutoplay(_auto) { _model.setAutoplay(_auto); }
  function _println(_message) { console.log(_message); }

  function _breakAfterThisPage() { _model.setShouldBreak(true); }

  function _resetSolvers() { if (_model.resetSolvers) _model.resetSolvers(); }

  function _saveText(name,type,content) { if (_model.saveText) _model.saveText(name,type,content); }

  function _saveState(name) { if (_model.saveState) _model.saveState(name); }

  function _saveImage(name,panelname) { if (_model.saveImage) _model.saveImage(name,panelname); }

  function _readState(url,type) { if (_model.readState) _model.readState(url,type); }

  function _readText(url,type,varname) { if (_model.readText) _model.readText(url,type,varname); }

  function _getStringProperty(propertyName) {
    var _value = _stringProperties[propertyName];
    if (_value===undefined) return propertyName;
    else return _value;
  }
  var __pagesEnabled = [];
  function _setPageEnabled(pageName,enabled) { __pagesEnabled[pageName] = enabled; }

  var width; // EjsS Model.Variables.Drawing Vars.width
  var height; // EjsS Model.Variables.Drawing Vars.height
  var space; // EjsS Model.Variables.Drawing Vars.space
  var r1; // EjsS Model.Variables.Drawing Vars.r1
  var lower; // EjsS Model.Variables.Drawing Vars.lower
  var upper; // EjsS Model.Variables.Drawing Vars.upper
  var threeD; // EjsS Model.Variables.Drawing Vars.threeD

  var nPts; // EjsS Model.Variables.TwoD Vars.nPts
  var nx; // EjsS Model.Variables.TwoD Vars.nx
  var xMin; // EjsS Model.Variables.TwoD Vars.xMin
  var xMax; // EjsS Model.Variables.TwoD Vars.xMax
  var ny; // EjsS Model.Variables.TwoD Vars.ny
  var yMin; // EjsS Model.Variables.TwoD Vars.yMin
  var yMax; // EjsS Model.Variables.TwoD Vars.yMax
  var data; // EjsS Model.Variables.TwoD Vars.data
  var data0; // EjsS Model.Variables.TwoD Vars.data0
  var imageField; // EjsS Model.Variables.TwoD Vars.imageField
  var xPos; // EjsS Model.Variables.TwoD Vars.xPos
  var yPos; // EjsS Model.Variables.TwoD Vars.yPos

  var nrim; // EjsS Model.Variables.ThreeD Vars.nrim
  var xrim; // EjsS Model.Variables.ThreeD Vars.xrim
  var yrim; // EjsS Model.Variables.ThreeD Vars.yrim
  var nu; // EjsS Model.Variables.ThreeD Vars.nu
  var nv; // EjsS Model.Variables.ThreeD Vars.nv
  var data3D; // EjsS Model.Variables.ThreeD Vars.data3D
  var data3D0; // EjsS Model.Variables.ThreeD Vars.data3D0

  var t; // EjsS Model.Variables.Bessel Vars.t
  var dt; // EjsS Model.Variables.Bessel Vars.dt
  var amp; // EjsS Model.Variables.Bessel Vars.amp
  var bn; // EjsS Model.Variables.Bessel Vars.bn
  var bm; // EjsS Model.Variables.Bessel Vars.bm
  var zeros; // EjsS Model.Variables.Bessel Vars.zeros
  var f0; // EjsS Model.Variables.Bessel Vars.f0
  var frequency; // EjsS Model.Variables.Bessel Vars.frequency
  var c; // EjsS Model.Variables.Bessel Vars.c
  var bessel; // EjsS Model.Variables.Bessel Vars.bessel

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      width : width,
      height : height,
      space : space,
      r1 : r1,
      lower : lower,
      upper : upper,
      threeD : threeD,
      nPts : nPts,
      nx : nx,
      xMin : xMin,
      xMax : xMax,
      ny : ny,
      yMin : yMin,
      yMax : yMax,
      data : data,
      data0 : data0,
      imageField : imageField,
      xPos : xPos,
      yPos : yPos,
      nrim : nrim,
      xrim : xrim,
      yrim : yrim,
      nu : nu,
      nv : nv,
      data3D : data3D,
      data3D0 : data3D0,
      t : t,
      dt : dt,
      amp : amp,
      bn : bn,
      bm : bm,
      zeros : zeros,
      f0 : f0,
      frequency : frequency,
      c : c,
      bessel : bessel
    };
  };

  function _unserialize(json) { return _model.unserialize(json); }

  _model._userUnserialize = function(json) {
    if(typeof json.width != "undefined") width = json.width;
    if(typeof json.height != "undefined") height = json.height;
    if(typeof json.space != "undefined") space = json.space;
    if(typeof json.r1 != "undefined") r1 = json.r1;
    if(typeof json.lower != "undefined") lower = json.lower;
    if(typeof json.upper != "undefined") upper = json.upper;
    if(typeof json.threeD != "undefined") threeD = json.threeD;
    if(typeof json.nPts != "undefined") nPts = json.nPts;
    if(typeof json.nx != "undefined") nx = json.nx;
    if(typeof json.xMin != "undefined") xMin = json.xMin;
    if(typeof json.xMax != "undefined") xMax = json.xMax;
    if(typeof json.ny != "undefined") ny = json.ny;
    if(typeof json.yMin != "undefined") yMin = json.yMin;
    if(typeof json.yMax != "undefined") yMax = json.yMax;
    if(typeof json.data != "undefined") data = json.data;
    if(typeof json.data0 != "undefined") data0 = json.data0;
    if(typeof json.imageField != "undefined") imageField = json.imageField;
    if(typeof json.xPos != "undefined") xPos = json.xPos;
    if(typeof json.yPos != "undefined") yPos = json.yPos;
    if(typeof json.nrim != "undefined") nrim = json.nrim;
    if(typeof json.xrim != "undefined") xrim = json.xrim;
    if(typeof json.yrim != "undefined") yrim = json.yrim;
    if(typeof json.nu != "undefined") nu = json.nu;
    if(typeof json.nv != "undefined") nv = json.nv;
    if(typeof json.data3D != "undefined") data3D = json.data3D;
    if(typeof json.data3D0 != "undefined") data3D0 = json.data3D0;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.amp != "undefined") amp = json.amp;
    if(typeof json.bn != "undefined") bn = json.bn;
    if(typeof json.bm != "undefined") bm = json.bm;
    if(typeof json.zeros != "undefined") zeros = json.zeros;
    if(typeof json.f0 != "undefined") f0 = json.f0;
    if(typeof json.frequency != "undefined") frequency = json.frequency;
    if(typeof json.c != "undefined") c = json.c;
    if(typeof json.bessel != "undefined") bessel = json.bessel;
   _resetSolvers();
   _model.update();
  };

  _model.addToReset(function() {
    __pagesEnabled["Init Rim"] = true;
    __pagesEnabled["Init Image Field"] = true;
    __pagesEnabled["Init Mesh"] = true;
    __pagesEnabled["Evol Page"] = true;
  });

  _model.addToReset(function() {
    width = _isMobile?350:450; // EjsS Model.Variables.Drawing Vars.width
    height = _isMobile?350:450; // EjsS Model.Variables.Drawing Vars.height
    space = 10; // EjsS Model.Variables.Drawing Vars.space
    r1 = 0.8*space; // EjsS Model.Variables.Drawing Vars.r1
    lower = -1; // EjsS Model.Variables.Drawing Vars.lower
    upper = 1; // EjsS Model.Variables.Drawing Vars.upper
    threeD = false; // EjsS Model.Variables.Drawing Vars.threeD
  });

  _model.addToReset(function() {
    nPts = Math.round(width/2); // EjsS Model.Variables.TwoD Vars.nPts
    nx = nPts; // EjsS Model.Variables.TwoD Vars.nx
    xMin = -space; // EjsS Model.Variables.TwoD Vars.xMin
    xMax = space; // EjsS Model.Variables.TwoD Vars.xMax
    ny = nPts; // EjsS Model.Variables.TwoD Vars.ny
    yMin = -space; // EjsS Model.Variables.TwoD Vars.yMin
    yMax = space; // EjsS Model.Variables.TwoD Vars.yMax
    data = undefined; // EjsS Model.Variables.TwoD Vars.data
    data0 = undefined; // EjsS Model.Variables.TwoD Vars.data0
    imageField = undefined; // EjsS Model.Variables.TwoD Vars.imageField
    xPos = new Array(0); // EjsS Model.Variables.TwoD Vars.xPos
    yPos = new Array(0); // EjsS Model.Variables.TwoD Vars.yPos
  });

  _model.addToReset(function() {
    nrim = Math.round(width/10); // EjsS Model.Variables.ThreeD Vars.nrim
    xrim = new Array(nrim); // EjsS Model.Variables.ThreeD Vars.xrim
    (function () {
      var _i0;
      for (_i0=0; _i0<nrim; _i0+=1) {  // EjsS Model.Variables.ThreeD Vars.xrim
        xrim[_i0] = 0;  // EjsS Model.Variables.ThreeD Vars.xrim
      }
    }());
    yrim = new Array(nrim); // EjsS Model.Variables.ThreeD Vars.yrim
    (function () {
      var _i0;
      for (_i0=0; _i0<nrim; _i0+=1) {  // EjsS Model.Variables.ThreeD Vars.yrim
        yrim[_i0] = 0;  // EjsS Model.Variables.ThreeD Vars.yrim
      }
    }());
    nu = Math.round(width/10); // EjsS Model.Variables.ThreeD Vars.nu
    nv = Math.round(width/10); // EjsS Model.Variables.ThreeD Vars.nv
    data3D = new Array(nu); // EjsS Model.Variables.ThreeD Vars.data3D
    (function () {
      var _i0,_i1,_i2;
      for (_i0=0; _i0<nu; _i0+=1) {  // EjsS Model.Variables.ThreeD Vars.data3D
        data3D[_i0] = [];
        for (_i1=0; _i1<nv; _i1+=1) {  // EjsS Model.Variables.ThreeD Vars.data3D
          data3D[_i0][_i1] = [];
          for (_i2=0; _i2<3; _i2+=1) {  // EjsS Model.Variables.ThreeD Vars.data3D
            data3D[_i0][_i1][_i2] = 0;  // EjsS Model.Variables.ThreeD Vars.data3D
          }
        }
      }
    }());
    data3D0 = new Array(nu); // EjsS Model.Variables.ThreeD Vars.data3D0
    (function () {
      var _i0,_i1;
      for (_i0=0; _i0<nu; _i0+=1) {  // EjsS Model.Variables.ThreeD Vars.data3D0
        data3D0[_i0] = [];
        for (_i1=0; _i1<nv; _i1+=1) {  // EjsS Model.Variables.ThreeD Vars.data3D0
          data3D0[_i0][_i1] = 0;  // EjsS Model.Variables.ThreeD Vars.data3D0
        }
      }
    }());
  });

  _model.addToReset(function() {
    t = 0; // EjsS Model.Variables.Bessel Vars.t
    dt = 0.05; // EjsS Model.Variables.Bessel Vars.dt
    amp = 2; // EjsS Model.Variables.Bessel Vars.amp
    bn = 2; // EjsS Model.Variables.Bessel Vars.bn
    bm = 1; // EjsS Model.Variables.Bessel Vars.bm
    zeros = new Array(bn); // EjsS Model.Variables.Bessel Vars.zeros
    (function () {
      var _i0;
      for (_i0=0; _i0<bn; _i0+=1) {  // EjsS Model.Variables.Bessel Vars.zeros
        zeros[_i0] = 1;  // EjsS Model.Variables.Bessel Vars.zeros
      }
    }());
    f0 = 1; // EjsS Model.Variables.Bessel Vars.f0
    frequency = f0; // EjsS Model.Variables.Bessel Vars.frequency
    c = 1; // EjsS Model.Variables.Bessel Vars.c
    bessel = osp.numerics.Bessel; // EjsS Model.Variables.Bessel Vars.bessel
  });

  _model.addToReset(function() {
    _model.setAutoplay(false);
    _model.setPauseOnPageExit(true);
    _model.setFPS(10);
    _model.setStepsPerDisplay(1);
  });

  function drawImageField(context,element) {  // > CustomCode.Draw Image Field:1
    if(threeD) return;  // > CustomCode.Draw Image Field:2
    var ospCanvas = new osp.drawing.OSPCanvas(context,element, xMin,xMax,yMin,yMax);  // > CustomCode.Draw Image Field:3
    imageField.updateData(data);  // > CustomCode.Draw Image Field:4
    ospCanvas.addDrawable(imageField);  // > CustomCode.Draw Image Field:5
    ospCanvas.drawObjects();  // > CustomCode.Draw Image Field:6
  }  // > CustomCode.Draw Image Field:7

  function createData2D() {//creates the data using the .evaluate function within the view and returns it  // > CustomCode.Create 2D Data:1
    data= [];  // > CustomCode.Create 2D Data:2
    data0= [];  // > CustomCode.Create 2D Data:3
    var mm=Math.abs(bm);  // > CustomCode.Create 2D Data:4
    zeros =bessel.getZeros(mm, bn);//  get zeros for desired mode  // > CustomCode.Create 2D Data:5
    frequency=c*zeros[bn-1]/2/r1/f0;  // > CustomCode.Create 2D Data:6
    var maxAmp=0;  // > CustomCode.Create 2D Data:7
    for(var i=0; i<nx; i++) {  // > CustomCode.Create 2D Data:8
      data.push([]);  // > CustomCode.Create 2D Data:9
      data0.push([]);  // > CustomCode.Create 2D Data:10
      for (var j=0; j<ny; j++) {  // > CustomCode.Create 2D Data:11
        var r=Math.sqrt(xPos[i]*xPos[i]+yPos[j]*yPos[j]);  // > CustomCode.Create 2D Data:12
        var theta=bm*Math.atan2(yPos[j],xPos[i]);  // > CustomCode.Create 2D Data:13
        var angular=(bm<0)?Math.sin(theta):Math.cos(theta);  // > CustomCode.Create 2D Data:14
        var z=(r>r1)?0:bessel.Jn(mm,r*zeros[bn-1]/r1)*angular; // m-th Bessel function  // > CustomCode.Create 2D Data:15
        if(maxAmp<Math.abs(z))maxAmp=Math.abs(z);  // > CustomCode.Create 2D Data:16
        data[i].push(z); //adds the z values to the data  // > CustomCode.Create 2D Data:17
        data0[i].push(z); //adds the z values to the data  // > CustomCode.Create 2D Data:18
      }  // > CustomCode.Create 2D Data:19
    }  // > CustomCode.Create 2D Data:20
    for(var i=0; i<nx; i++) {  // > CustomCode.Create 2D Data:21
      for (var j=0; j<ny; j++) {  // > CustomCode.Create 2D Data:22
        data0[i][j]=data[i][j] = amp*data0[i][j]/maxAmp;  // > CustomCode.Create 2D Data:23
      }  // > CustomCode.Create 2D Data:24
    }  // > CustomCode.Create 2D Data:25
  }  // > CustomCode.Create 2D Data:26
  function updateData2D() {//update data  // > CustomCode.Create 2D Data:27
    var timephase=2*Math.PI*frequency*t;  // > CustomCode.Create 2D Data:28
    for(var i=0; i<nx; i++) {  // > CustomCode.Create 2D Data:29
      for (var j=0; j<ny; j++) {  // > CustomCode.Create 2D Data:30
         data[i][j] = data0[i][j]*Math.cos(timephase);       //hard coded for speed test  // > CustomCode.Create 2D Data:31
      }  // > CustomCode.Create 2D Data:32
    }  // > CustomCode.Create 2D Data:33
  }  // > CustomCode.Create 2D Data:34

  function createData3D() {  // > CustomCode.Create 3D Data:1
    t=0;  // > CustomCode.Create 3D Data:2
    var maxAmp=0;  // > CustomCode.Create 3D Data:3
    var mm=Math.abs(bm);  // > CustomCode.Create 3D Data:4
    zeros =bessel.getZeros(mm, bn);//  get zeros for desired mode  // > CustomCode.Create 3D Data:5
    frequency=c*zeros[bn-1]/2/r1/f0;  // > CustomCode.Create 3D Data:6
    var maxAmp=0;  // > CustomCode.Create 3D Data:7
    for (var i=0; i<nu; i++) {  // > CustomCode.Create 3D Data:8
      // angle index  // > CustomCode.Create 3D Data:9
      for (var j=0; j<nv; j++) {  // > CustomCode.Create 3D Data:10
        //radial index  // > CustomCode.Create 3D Data:11
        var r=Math.sqrt(data3D[i][j][0]*data3D[i][j][0]+data3D[i][j][1]*data3D[i][j][1]);  // > CustomCode.Create 3D Data:12
        var phase=bm*Math.atan2(data3D[i][j][1],data3D[i][j][0]);  // > CustomCode.Create 3D Data:13
        var angular=(bm<0)?Math.sin(phase):Math.cos(phase);  // > CustomCode.Create 3D Data:14
        var z=(r>r1)?0:bessel.Jn(mm,r*zeros[bn-1]/r1)*angular; // m-th Bessel function  // > CustomCode.Create 3D Data:15
        if(maxAmp<Math.abs(z))maxAmp=Math.abs(z);  // > CustomCode.Create 3D Data:16
        data3D0[i][j]=z;  // > CustomCode.Create 3D Data:17
      }  // > CustomCode.Create 3D Data:18
    }  // > CustomCode.Create 3D Data:19
    for(var i=0; i<nu; i++) {  // > CustomCode.Create 3D Data:20
      for (var j=0; j<nv; j++) {  // > CustomCode.Create 3D Data:21
        data3D0[i][j]=data3D[i][j][2] = amp*data3D0[i][j]/maxAmp;  // > CustomCode.Create 3D Data:22
      }  // > CustomCode.Create 3D Data:23
    }  // > CustomCode.Create 3D Data:24
    _view.surface3D.setMeshChanged(true);  // > CustomCode.Create 3D Data:25
  }  // > CustomCode.Create 3D Data:26
  function updateData3D() {  // > CustomCode.Create 3D Data:27
    var timephase=2*Math.PI*frequency*t;  // > CustomCode.Create 3D Data:28
    for (var i=0; i<nu; i++) {// angle index  // > CustomCode.Create 3D Data:29
      for (var j=0; j<nv; j++) {//radial index  // > CustomCode.Create 3D Data:30
        data3D[i][j][2] = data3D0[i][j]*Math.cos(timephase);  // > CustomCode.Create 3D Data:31
      }  // > CustomCode.Create 3D Data:32
    }  // > CustomCode.Create 3D Data:33
    _view.surface3D.setMeshChanged(true);  // > CustomCode.Create 3D Data:34
  }  // > CustomCode.Create 3D Data:35

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Rim"]) return;
    //_pause();  // > Initialization.Init Rim:1
    r1=threeD?0.6*space:0.9*space;  // > Initialization.Init Rim:2
    var theta=0;  // > Initialization.Init Rim:3
    var dtheta=2*Math.PI/(nrim-1);  // > Initialization.Init Rim:4
    for(var i=0; i<nrim; i++){  // > Initialization.Init Rim:5
      xrim[i]=1.002*r1*Math.cos(theta)/2;  // > Initialization.Init Rim:6
      yrim[i]=1.002*r1*Math.sin(theta)/2;  // > Initialization.Init Rim:7
      theta+=dtheta;  // > Initialization.Init Rim:8
    }  // > Initialization.Init Rim:9
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Image Field"]) return;
    zeros =bessel.getZeros(0, 1);   //  get fundamental  // > Initialization.Init Image Field:1
    f0=c*zeros[0]/2/r1;             // energy eigenvalue  // > Initialization.Init Image Field:2
    zeros =bessel.getZeros(Math.abs(bm), bn);//  get zeros for desired mode  // > Initialization.Init Image Field:3
    frequency=c*zeros[bn-1]/2/r1/f0;  // > Initialization.Init Image Field:4
    _view.custom.setFunction(drawImageField);  // > Initialization.Init Image Field:5
    xPos= arrayCoordinates(xMin, xMax, nx); // returns array(nx);  // > Initialization.Init Image Field:6
    yPos= arrayCoordinates(yMin, yMax, ny); // returns array(nx);  // > Initialization.Init Image Field:7
    createData2D();  // > Initialization.Init Image Field:8
    imageField = new osp.drawing.ImageField(data, xMin,xMax,nx,yMin,yMax,ny,false, lower,upper);  // > Initialization.Init Image Field:9
    imageField.setCircularMask(r1);  // > Initialization.Init Image Field:10
    createData3D();  // > Initialization.Init Image Field:11
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Mesh"]) return;
    var dr=(r1)/(nv-1);  // > Initialization.Init Mesh:1
    var du=2.0*Math.PI/(nu-1);  // > Initialization.Init Mesh:2
    var u=-Math.PI;  // > Initialization.Init Mesh:3
    for (var i=0; i<nu; i++) {  // angle loop  // > Initialization.Init Mesh:4
      for (var j=0; j<nv; j++) {// radial loop  // > Initialization.Init Mesh:5
        r=j*dr;  // > Initialization.Init Mesh:6
        data3D[i][j][0] = r*Math.cos(u); // x-coordinate  // > Initialization.Init Mesh:7
        data3D[i][j][1] = r*Math.sin(u); // y-coordinate  // > Initialization.Init Mesh:8
      }  // > Initialization.Init Mesh:9
      u+=du;  // > Initialization.Init Mesh:10
    }  // > Initialization.Init Mesh:11
    createData3D();  // > Initialization.Init Mesh:12
    _view.surface3D.setMeshChanged(true);  // > Initialization.Init Mesh:13
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page"]) return;
    t+=dt*f0; //time evolution  // > Evolution.Evol Page:1
    if(threeD)updateData3D();  // > Evolution.Evol Page:2
    else updateData2D();  // > Evolution.Evol Page:3
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

    _model._resized = function(_width,_height) {
      _view._resized(_width,_height);
  }; // end of _resized
    _model._fontResized = function(iBase,iSize,iDelta) {
      _view._fontResized(iBase,iSize,iDelta);
  }; // end of _fontResized

  function _getViews() {
    var _viewsInfo = [];
    var _counter = 0;
    _viewsInfo[_counter++] = { name : "HtmlView Page", width : 800, height : 600 };
    return _viewsInfo;
  } // end of _getViews

  function _selectView(_viewNumber) {
    _view = null;
    _view = new VibratingDrumhead_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.twoDPanel.linkProperty("Height",  function() { return height; }, function(_v) { height = _v; } ); // HtmlView Page linking property 'Height' for element 'twoDPanel'
          _view.twoDPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'twoDPanel'
          _view.twoDPanel.linkProperty("Display",  function() { return threeD?"none":"block"; } ); // HtmlView Page linking property 'Display' for element 'twoDPanel'
          _view.drawingPanel.linkProperty("Height",  function() { return height; }, function(_v) { height = _v; } ); // HtmlView Page linking property 'Height' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("MinimumX",  function() { return xMin; }, function(_v) { xMin = _v; } ); // HtmlView Page linking property 'MinimumX' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("MinimumY",  function() { return yMin; }, function(_v) { yMin = _v; } ); // HtmlView Page linking property 'MinimumY' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("MaximumY",  function() { return yMax; }, function(_v) { yMax = _v; } ); // HtmlView Page linking property 'MaximumY' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("MaximumX",  function() { return xMax; }, function(_v) { xMax = _v; } ); // HtmlView Page linking property 'MaximumX' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("Display",  function() { return threeD?"none":"block"; } ); // HtmlView Page linking property 'Display' for element 'drawingPanel'
          _view.custom.linkProperty("SizeX",  function() { return xMax-xMin; } ); // HtmlView Page linking property 'SizeX' for element 'custom'
          _view.custom.linkProperty("X",  function() { return xMin; }, function(_v) { xMin = _v; } ); // HtmlView Page linking property 'X' for element 'custom'
          _view.custom.linkProperty("Y",  function() { return yMin; }, function(_v) { yMin = _v; } ); // HtmlView Page linking property 'Y' for element 'custom'
          _view.custom.linkProperty("SizeY",  function() { return yMax-yMin; } ); // HtmlView Page linking property 'SizeY' for element 'custom'
          _view.rimShape.linkProperty("SizeX",  function() { return 2*r1; } ); // HtmlView Page linking property 'SizeX' for element 'rimShape'
          _view.rimShape.linkProperty("SizeY",  function() { return 2*r1; } ); // HtmlView Page linking property 'SizeY' for element 'rimShape'
          _view.threeDPanel.linkProperty("Height",  function() { return height; }, function(_v) { height = _v; } ); // HtmlView Page linking property 'Height' for element 'threeDPanel'
          _view.threeDPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'threeDPanel'
          _view.threeDPanel.linkProperty("Display",  function() { return threeD?"block":"none"; } ); // HtmlView Page linking property 'Display' for element 'threeDPanel'
          _view.drawingPanel3D.linkProperty("Height",  function() { return height; }, function(_v) { height = _v; } ); // HtmlView Page linking property 'Height' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("MaximumZ",  function() { return space; }, function(_v) { space = _v; } ); // HtmlView Page linking property 'MaximumZ' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("MaximumY",  function() { return space; }, function(_v) { space = _v; } ); // HtmlView Page linking property 'MaximumY' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("MaximumX",  function() { return space; }, function(_v) { space = _v; } ); // HtmlView Page linking property 'MaximumX' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("MinimumX",  function() { return -space; } ); // HtmlView Page linking property 'MinimumX' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("MinimumY",  function() { return -space; } ); // HtmlView Page linking property 'MinimumY' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("MinimumZ",  function() { return -space; } ); // HtmlView Page linking property 'MinimumZ' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("Lights",  function() { return [[5,5,5]]; } ); // HtmlView Page linking property 'Lights' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("Display",  function() { return threeD?"block":"none"; } ); // HtmlView Page linking property 'Display' for element 'drawingPanel3D'
          _view.rimTrail.linkProperty("InputX",  function() { return xrim; }, function(_v) { xrim = _v; } ); // HtmlView Page linking property 'InputX' for element 'rimTrail'
          _view.rimTrail.linkProperty("InputY",  function() { return yrim; }, function(_v) { yrim = _v; } ); // HtmlView Page linking property 'InputY' for element 'rimTrail'
          _view.surface3D.linkProperty("Data",  function() { return data3D; }, function(_v) { data3D = _v; } ); // HtmlView Page linking property 'Data' for element 'surface3D'
          _view.spacerPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'spacerPanel'
          _view.nfield.linkProperty("Value",  function() { return bn; }, function(_v) { bn = _v; } ); // HtmlView Page linking property 'Value' for element 'nfield'
          _view.nfield.setAction("OnChange", function() {
  _pause();
  bn=Math.round(bn);
  bn=Math.max(bn,1);
  _initialize();

}); // HtmlView Page setting action 'OnChange' for element 'nfield'
          _view.mField.linkProperty("Value",  function() { return bm; }, function(_v) { bm = _v; } ); // HtmlView Page linking property 'Value' for element 'mField'
          _view.mField.setAction("OnChange", function() {
  _pause();
  bm=Math.round(bm);
  //bm=Math.max(bm,0);
  _initialize();

}); // HtmlView Page setting action 'OnChange' for element 'mField'
          _view.dtField.linkProperty("Value",  function() { return dt; }, function(_v) { dt = _v; } ); // HtmlView Page linking property 'Value' for element 'dtField'
          _view.dtField.setAction("OnChange", function() {
  dt=Math.max(dt,0.001);
  dt=Math.min(dt,1);

}); // HtmlView Page setting action 'OnChange' for element 'dtField'
          _view.timeField.linkProperty("Value",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'Value' for element 'timeField'
          _view.fField.linkProperty("Value",  function() { return frequency; }, function(_v) { frequency = _v; } ); // HtmlView Page linking property 'Value' for element 'fField'
          _view.playButton.setAction("OffClick", function() {
  _pause();
  //drawCanvas();

}); // HtmlView Page setting action 'OffClick' for element 'playButton'
          _view.playButton.linkProperty("State",  function() { return _isPaused; } ); // HtmlView Page linking property 'State' for element 'playButton'
          _view.playButton.setAction("OnClick", _play); // HtmlView Page setting action 'OnClick' for element 'playButton'
          _view.stepButton.setAction("OnPress", function() {
  _step();

}); // HtmlView Page setting action 'OnPress' for element 'stepButton'
          _view.resetTimeButton.setAction("OnClick", _initialize); // HtmlView Page setting action 'OnClick' for element 'resetTimeButton'
          _view.resetButton.setAction("OnPress", _reset); // HtmlView Page setting action 'OnPress' for element 'resetButton'
          _view.threeDCheck.linkProperty("Checked",  function() { return threeD; }, function(_v) { threeD = _v; } ); // HtmlView Page linking property 'Checked' for element 'threeDCheck'
          _view.threeDCheck.setAction("OnChange", function() {
  _initialize();

}); // HtmlView Page setting action 'OnChange' for element 'threeDCheck'
          break;
      } // end of switch
    }; // end of new reset

    _model.setView(_view);
    _model.reset();
    _view._enableEPub();
  } // end of _selectView

  _model.setAutoplay(false);
  _model.setFPS(10);
  _model.setStepsPerDisplay(1);
  _selectView(_model._autoSelectView(_getViews())); // this includes _model.reset()
  return _model;
}
function VibratingDrumhead_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = VibratingDrumhead_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function VibratingDrumhead_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.wrappedPanel,"wrappedPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'wrappedPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"mainPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'mainPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"twoDPanel", _view.mainPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'twoDPanel'
      .setProperty("BorderStyle","solid") // EJsS HtmlView.HtmlView Page: setting property 'BorderStyle' for element 'twoDPanel'
      .setProperty("BorderColor","black") // EJsS HtmlView.HtmlView Page: setting property 'BorderColor' for element 'twoDPanel'
      .setProperty("BorderWidth",1) // EJsS HtmlView.HtmlView Page: setting property 'BorderWidth' for element 'twoDPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.twoDPanel,"GRAPHICS2D_CANVAS") // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel'
      .setProperty("AutoScaleY",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'drawingPanel'
      .setProperty("AutoScaleX",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'drawingPanel'
      .setProperty("GraphicsMode","Canvas") // EJsS HtmlView.HtmlView Page: setting property 'GraphicsMode' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.custom,"custom", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'custom'
      .setProperty("RelativePosition","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'custom'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"rimShape", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'rimShape'
      .setProperty("ShapeType","ELLIPSE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'rimShape'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'rimShape'
      .setProperty("LineColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'rimShape'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'rimShape'
      .setProperty("DrawLines",true) // EJsS HtmlView.HtmlView Page: setting property 'DrawLines' for element 'rimShape'
      .setProperty("LineWidth",3) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'rimShape'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'rimShape'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"threeDPanel", _view.mainPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'threeDPanel'
      .setProperty("BorderStyle","solid") // EJsS HtmlView.HtmlView Page: setting property 'BorderStyle' for element 'threeDPanel'
      .setProperty("BorderColor","black") // EJsS HtmlView.HtmlView Page: setting property 'BorderColor' for element 'threeDPanel'
      .setProperty("BorderWidth",1) // EJsS HtmlView.HtmlView Page: setting property 'BorderWidth' for element 'threeDPanel'
      ;

    _view._addElement(EJSS_DRAWING3D.drawingPanel,"drawingPanel3D", _view.threeDPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel3D'
      .setProperty("Draggable","AZIMUTH") // EJsS HtmlView.HtmlView Page: setting property 'Draggable' for element 'drawingPanel3D'
      .setProperty("CameraZ",5) // EJsS HtmlView.HtmlView Page: setting property 'CameraZ' for element 'drawingPanel3D'
      .setProperty("CameraY",5) // EJsS HtmlView.HtmlView Page: setting property 'CameraY' for element 'drawingPanel3D'
      .setProperty("CameraX",5) // EJsS HtmlView.HtmlView Page: setting property 'CameraX' for element 'drawingPanel3D'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'drawingPanel3D'
      .setProperty("DecorationType","NONE") // EJsS HtmlView.HtmlView Page: setting property 'DecorationType' for element 'drawingPanel3D'
      ;

    _view._addElement(EJSS_DRAWING3D.trail,"rimTrail", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'rimTrail'
      .setProperty("InputZ",0.01) // EJsS HtmlView.HtmlView Page: setting property 'InputZ' for element 'rimTrail'
      .setProperty("Connected",true) // EJsS HtmlView.HtmlView Page: setting property 'Connected' for element 'rimTrail'
      .setProperty("LineColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'rimTrail'
      .setProperty("Visibility",true) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'rimTrail'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'rimTrail'
      .setProperty("ClearAtInput",true) // EJsS HtmlView.HtmlView Page: setting property 'ClearAtInput' for element 'rimTrail'
      ;

    _view._addElement(EJSS_DRAWING3D.surface,"surface3D", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'surface3D'
      .setProperty("FillColor","rgb(255,96,96)") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'surface3D'
      .setProperty("LineColor","Gray") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'surface3D'
      .setProperty("DrawLines",true) // EJsS HtmlView.HtmlView Page: setting property 'DrawLines' for element 'surface3D'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"spacerPanel", _view.mainPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'spacerPanel'
      .setProperty("Height",3) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'spacerPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"controlPanel", _view.mainPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'controlPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"ioPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ioPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"nPanel", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'nPanel'
      .setProperty("Text"," n =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'nPanel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"nfield", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'nfield'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'nfield'
      .setProperty("Format","0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'nfield'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"mPanel", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'mPanel'
      .setProperty("Text"," m =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'mPanel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"mField", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'mField'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'mField'
      .setProperty("Format","0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'mField'
      .setProperty("Editable",true) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'mField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"dtLabel", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'dtLabel'
      .setProperty("Text","&#916;t =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'dtLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"dtField", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'dtField'
      .setProperty("Width",35) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'dtField'
      .setProperty("Format","0.000") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'dtField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"timeLabel", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'timeLabel'
      .setProperty("Text","Time:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'timeLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"timeField", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'timeField'
      .setProperty("Width",40) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'timeField'
      .setProperty("Format","0.000") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'timeField'
      .setProperty("Editable",false) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'timeField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"fLabel", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'fLabel'
      .setProperty("Text"," f =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'fLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"fField", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'fField'
      .setProperty("Width",35) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'fField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'fField'
      .setProperty("Editable",false) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'fField'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttonPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'buttonPanel'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"playButton", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'playButton'
      .setProperty("Tooltip","Play/Pause the simulation") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'playButton'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'playButton'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'playButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"stepButton", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'stepButton'
      .setProperty("Tooltip","Advances by one timestep") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'stepButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'stepButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetTimeButton", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'resetTimeButton'
      .setProperty("Tooltip","Resets the time") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'resetTimeButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset1.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'resetTimeButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetButton", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'resetButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'resetButton'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"threeDCheck", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'threeDCheck'
      .setProperty("Text","3D") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'threeDCheck'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"narrativePanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'narrativePanel'
      .setProperty("Html","<h1>Vibrating Drumhead</h1> <p>The Vibrating Drumhead model displays the analytical wave equation solution for a thin <a href=\"http://en.wikipedia.org/wiki/Vibrations_of_a_circular_drum\"> circular membrane</a> with a fixed boundary. The spatial part of the analytic solution u(r,&#952;) is expressed in polar coordinates using <a href=\"http://en.wikipedia.org/wiki/Bessel_function\">Bessel functions</a> and sinusoidal functions.  The complete solution is a superposition (sum) of single frequency oscillatory solutions. These vibrations are known as modes and are enumerated by integers <i>m</i> and <i>n</i> where <i>n</i> is a positive integer that counts the number of radial nodes and <i>m</i> counts the number of azimuthal (angular) nodes. This simulation uses the cosine solution if <i>m&#8805;</i><i>0</i> and the sine solution if <i>m&lt;0</i>.</p> <p><img src=\"VibratingDrumhead/mode_equ.jpg\" /></p> <p>The constant <i>k</i><sub>n,m</sub> is chosen so that the displacement <i>u</i> is zero at the boundary. Drumhead modes are not static but oscillate with a frequency &#969;<sub>n,m</sub> that depends on the drumhead tension and mass density and are chosen so that the lowest frequency is one for the fundamental mode, <i>n</i>=1 and <i>m</i>=0. The mode frequencies are not harmonic (integer multiples of the lowest frequency) but solutions with the same <i>n</i> and <i>|m|</i> have the same frequency and are said to be degenerate.</p><p>This simulation shows single mode oscillations. Although vibrating systems, such as a rectangular plate or a circular drumhead, can oscillate in a single mode, the complete solution is often more complex because these systems usually oscillate simultaneously in many modes. </p> <h2>Visualization</h2><p>The simulation shows either a two-dimensional or a three-dimensional view of a single-mode drumhead oscillation. In the two-dimensional view, large amplitude regions (anti-nodes) are bright red or blue whereas low amplitude regions (nodes) are dark.</p><p><b>Note:</b> That the algorithm used to visualize the solution may fail for very large values of m or n. The view's spatial resolution is limited because the drumhead displacement is computed on a finite spatial grid. The two-dimensional view is faster and has a finer grid to it usually provides a better visualization for large mode numbers.  Increasing the mode integers will increase the vibration frequency and may requite a smaller simulation time-step &#916;<i>t</i> to produce a smooth visualization.</p><h2>References</h2><ul> <li> <p>&quot;Chladni Patterns on Drumheads: A Physics of Music Experiment,&quot; Randy Worland, The Physics Teacher, (in press). </p> </li> <li> <p>&quot;Acoustics of Percussion Instruments - Part II,&quot; Thomas D. Rossing, The Physics Teacher. <strong>15</strong>(5), 278-288 (1977), DOI:<a href=\"http://dx.doi.org/10.1119/1.2339633\">10.1119/1.2339633</a></p> </li> <li> <p>&quot;Chladni's law for vibrating plates,&quot; Thomas D. Rossing, Am. J. Phys. <strong>50</strong>(3), 271-274 (1982), DOI:<a href=\"http://dx.doi.org/10.1119/1.12866\">10.1119/1.12866</a></p> </li> </ul><h2> Credits:</h2><p> The Vibrating Drumhead model was developed by Wolfgang Christian using the Easy Java Simulations (EJS) version 5 authoring and modeling tool. Information about EJS is available at: &lt;<b><a href=\"http://www.um.es/fem/Ejs/\" >http://www.um.es/fem/Ejs/</a></b>&gt; and in the OSP ComPADRE collection &lt;<b><a href=\"http://www.compadre.org/OSP/\" >http://www.compadre.org/OSP/</a></b>&gt;.</p>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'narrativePanel'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new VibratingDrumhead("_topFrame","_ejs_library/",null);
          if (typeof _isApp !== "undefined") _model.setRunAlways(true);
          TextResizeDetector.TARGET_ELEMENT_ID = '_topFrame';
          TextResizeDetector.USER_INIT_FUNC = function () {
            var iBase = TextResizeDetector.addEventListener(function(e,args) {
              _model._fontResized(args[0].iBase,args[0].iSize,args[0].iDelta);
              },null);
            _model._fontResized(iBase);
          };
          _model.onload();
        }, false);
      var interval = setInterval(function() {
         if(document.readyState === 'complete') {
           window.addEventListener('resize', function () { if (_model._resized) _model._resized(window.innerWidth,window.innerHeight); }, false);
           window.addEventListener('scroll', function () { if (_model._resized) _model._resized(window.innerWidth,window.innerHeight); }, false);
           var startCaptureBut = document.getElementById('startCaptureBut'); 
           var stopCaptureBut = document.getElementById('stopCaptureBut'); 
           var resetCaptureBut = document.getElementById('resetCaptureBut'); 
           var playCaptureBut = document.getElementById('playCaptureBut'); 
           var stepCaptureBut = document.getElementById('stepCaptureBut'); 
           if (startCaptureBut) {
             startCaptureBut.onclick = function() {
               _model.startCapture();
             };
             stopCaptureBut.onclick = function() {
               _model.saveText('recording','rec',JSON.stringify(_model.stopCapture()));
             };
             resetCaptureBut.onclick = function() {
               _model.resetCapture();
             };
             playCaptureBut.onclick = function() {
               _model.readText(null,'.rec',function(content){
               _model.playCapture(JSON.parse(content),function(){startCaptureBut.disabled=false; playCaptureBut.disabled=false; stepCaptureBut.disabled=false; window.alert(end_reproduction_message);});               });
             };
             stepCaptureBut.onchange= function() {
               var stepCapt;
               if (stepCaptureBut.value >= 0) stepCapt =  stepCaptureBut.value + 1;
               else stepCapt = 1 + 1.8*stepCaptureBut.value/8;
               _model.changeCaptureStep(stepCapt);
             };
           }
           clearInterval(interval);
         };
      }, 200)
