/* _inputParameters: an object with different values for the model parameters */
function prob03_14(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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

  var x; // EjsS Model.Variables.Var Table.x
  var y; // EjsS Model.Variables.Var Table.y
  var vx; // EjsS Model.Variables.Var Table.vx
  var vy; // EjsS Model.Variables.Var Table.vy
  var t; // EjsS Model.Variables.Var Table.t
  var dt; // EjsS Model.Variables.Var Table.dt
  var msg; // EjsS Model.Variables.Var Table.msg

  var simWidth; // EjsS Model.Variables.Drawing Vars.simWidth
  var plotWidth; // EjsS Model.Variables.Drawing Vars.plotWidth

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      x : x,
      y : y,
      vx : vx,
      vy : vy,
      t : t,
      dt : dt,
      msg : msg,
      simWidth : simWidth,
      plotWidth : plotWidth
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.y != "undefined") y = json.y;
    if(typeof json.vx != "undefined") vx = json.vx;
    if(typeof json.vy != "undefined") vy = json.vy;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.msg != "undefined") msg = json.msg;
    if(typeof json.simWidth != "undefined") simWidth = json.simWidth;
    if(typeof json.plotWidth != "undefined") plotWidth = json.plotWidth;
  };

  function _unserialize(json) { return _model.unserialize(json); }

  _model._userUnserialize = function(json) {
    _model._readParameters(json);
   _resetSolvers();
   _model.update();
  };

  _model.addToReset(function() {
    __pagesEnabled["Evol Page"] = true;
  });

  _model.addToReset(function() {
    x = -97.0; // EjsS Model.Variables.Var Table.x
    y = -110.0; // EjsS Model.Variables.Var Table.y
    vx = 40.0; // EjsS Model.Variables.Var Table.vx
    vy = 0.0; // EjsS Model.Variables.Var Table.vy
    t = 0.0; // EjsS Model.Variables.Var Table.t
    dt = 0.1; // EjsS Model.Variables.Var Table.dt
    msg = ""; // EjsS Model.Variables.Var Table.msg
  });

  _model.addToReset(function() {
    simWidth = (_isMobile||_isEPub)?"400px":"450px"; // EjsS Model.Variables.Drawing Vars.simWidth
    plotWidth = (_isMobile||_isEPub)?"200px":"225px"; // EjsS Model.Variables.Drawing Vars.plotWidth
  });

  if (_inputParameters) {
    _inputParameters = _model.parseInputParameters(_inputParameters);
    if (_inputParameters) _model.addToReset(function() { _model._readParameters(_inputParameters); });
  }

  _model.addToReset(function() {
    _model.setAutoplay(false);
    _model.setPauseOnPageExit(true);
    _model.setFPS(20);
    _model.setStepsPerDisplay(1);
  });

  function update () {  // > CustomCode.Update:1
    var ax = 0.0;  // > CustomCode.Update:2
    var ay = 0.0;  // > CustomCode.Update:3
    if (t < 5.0) {  // > CustomCode.Update:4
      ax = 0.0;  // > CustomCode.Update:5
      ay = 0.0;  // > CustomCode.Update:6
    }  // > CustomCode.Update:7
    else {  // > CustomCode.Update:8
      ax = -20.0;  // > CustomCode.Update:9
      ay = 20.0;  // > CustomCode.Update:10
    }  // > CustomCode.Update:11
      // > CustomCode.Update:12
    x = -97.0 + 40.0*t + 0.5*ax*(t-5.0)*(t-5.0);  // > CustomCode.Update:13
    y = -110.0 + 0.5*ay*(t-5.0)*(t-5.0);  // > CustomCode.Update:14
      // > CustomCode.Update:15
    vx = 40.0 + ax*(t-5.0);  // > CustomCode.Update:16
    vy = ay*(t-5.0);  // > CustomCode.Update:17
      // > CustomCode.Update:18
  }  // > CustomCode.Update:19

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page"]) return;
    update();  // > Evolution.Evol Page:1
    if (t.toFixed(2) == 10.00) {  // > Evolution.Evol Page:2
      _pause();  // > Evolution.Evol Page:3
      msg = "End of animation";  // > Evolution.Evol Page:4
    }  // > Evolution.Evol Page:5
    else { t+=dt; }  // > Evolution.Evol Page:6
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
    _viewsInfo[_counter++] = { name : "HtmlView Page", width : 600, height : 600 };
    return _viewsInfo;
  } // end of _getViews

  function _selectView(_viewNumber) {
    _view = null;
    _view = new prob03_14_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.vxPlottingPanel.linkProperty("Width",  function() { return plotWidth; }, function(_v) { plotWidth = _v; } ); // HtmlView Page linking property 'Width' for element 'vxPlottingPanel'
          _view.vxTrail.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'InputX' for element 'vxTrail'
          _view.vxTrail.linkProperty("InputY",  function() { return vx; }, function(_v) { vx = _v; } ); // HtmlView Page linking property 'InputY' for element 'vxTrail'
          _view.vxDot.linkProperty("X",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'X' for element 'vxDot'
          _view.vxDot.linkProperty("Y",  function() { return vx; }, function(_v) { vx = _v; } ); // HtmlView Page linking property 'Y' for element 'vxDot'
          _view.vyPlottingPanel.linkProperty("Width",  function() { return plotWidth; }, function(_v) { plotWidth = _v; } ); // HtmlView Page linking property 'Width' for element 'vyPlottingPanel'
          _view.vyTrail.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'InputX' for element 'vyTrail'
          _view.vyTrail.linkProperty("InputY",  function() { return vy; }, function(_v) { vy = _v; } ); // HtmlView Page linking property 'InputY' for element 'vyTrail'
          _view.vyDot.linkProperty("X",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'X' for element 'vyDot'
          _view.vyDot.linkProperty("Y",  function() { return vy; }, function(_v) { vy = _v; } ); // HtmlView Page linking property 'Y' for element 'vyDot'
          _view.drawingPanel.linkProperty("Width",  function() { return simWidth; }, function(_v) { simWidth = _v; } ); // HtmlView Page linking property 'Width' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("BRMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // HtmlView Page linking property 'BRMessage' for element 'drawingPanel'
          _view.trail.linkProperty("InputX",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'InputX' for element 'trail'
          _view.trail.linkProperty("InputY",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'InputY' for element 'trail'
          _view.probeBody.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'probeBody'
          _view.probeBody.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'probeBody'
          _view.thrusters.linkProperty("FillColor",  function() { return ["black","black"]; } ); // HtmlView Page linking property 'FillColor' for element 'thrusters'
          _view.thrusters.linkProperty("ShapeType",  function() { return ["RECTANGLE","RECTANGLE"]; } ); // HtmlView Page linking property 'ShapeType' for element 'thrusters'
          _view.thrusters.linkProperty("X",  function() { return [x+15.0,x]; } ); // HtmlView Page linking property 'X' for element 'thrusters'
          _view.thrusters.linkProperty("Y",  function() { return [y, y-10.0]; } ); // HtmlView Page linking property 'Y' for element 'thrusters'
          _view.rightThrusterFire.linkProperty("Points",  function() { return [[x+30.0,y],[x+20.0,y+2.5],[x+20.0,y-2.5]]; } ); // HtmlView Page linking property 'Points' for element 'rightThrusterFire'
          _view.rightThrusterFire.linkProperty("Visibility",  function() { return t>5.0; } ); // HtmlView Page linking property 'Visibility' for element 'rightThrusterFire'
          _view.leftThrusterFire.linkProperty("Points",  function() { return [[x,y-25.0],[x+2.5,y-15.0],[x-2.5,y-15.0]]; } ); // HtmlView Page linking property 'Points' for element 'leftThrusterFire'
          _view.leftThrusterFire.linkProperty("Visibility",  function() { return t>5.0; } ); // HtmlView Page linking property 'Visibility' for element 'leftThrusterFire'
          _view.time.linkProperty("Text",  function() { return "Time: " + t.toFixed(2); } ); // HtmlView Page linking property 'Text' for element 'time'
          _view.xyLabels.linkProperty("Text",  function() { return ["+x","+y"]; } ); // HtmlView Page linking property 'Text' for element 'xyLabels'
          _view.playPause.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'playPause'
          _view.playPause.linkProperty("State",  function() { return _isPaused; }, function(_v) { _isPaused = _v; } ); // HtmlView Page linking property 'State' for element 'playPause'
          _view.playPause.setAction("OnClick", _play); // HtmlView Page setting action 'OnClick' for element 'playPause'
          _view.stepBack.setAction("OnClick", function() {
  _pause();
  if (t.toFixed(3) > 0.000) {
    t-=dt;
    update();
    msg = "";
  }

}); // HtmlView Page setting action 'OnClick' for element 'stepBack'
          _view.step.setAction("OnClick", function() {
  _pause();
  if (t.toFixed(3) < 10.000) {
    t+=dt;
    update();
  }
  else { msg = "End of animation."; }

}); // HtmlView Page setting action 'OnClick' for element 'step'
          _view.reset.setAction("OnClick", _reset); // HtmlView Page setting action 'OnClick' for element 'reset'
          break;
      } // end of switch
    }; // end of new reset

    _model.setView(_view);
    _model.reset();
    _view._enableEPub();
  } // end of _selectView

  _model.setAutoplay(false);
  _model.setFPS(20);
  _model.setStepsPerDisplay(1);
  _selectView(_model._autoSelectView(_getViews())); // this includes _model.reset()
  return _model;
}
function prob03_14_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = prob03_14_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function prob03_14_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"simPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'simPanel'
      .setProperty("CSS",{"page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'simPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"title", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'title'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"titleLabel", _view.title) // EJsS HtmlView.HtmlView Page: declaration of element 'titleLabel'
      .setProperty("Text","<h2> Problem 3.14: Space Probe with Constant Acceleration </h2>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"topPlots", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'topPlots'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'topPlots'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"vxPlottingPanel", _view.topPlots) // EJsS HtmlView.HtmlView Page: declaration of element 'vxPlottingPanel'
      .setProperty("Height",180) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'vxPlottingPanel'
      .setProperty("MinimumX",0.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'vxPlottingPanel'
      .setProperty("Gutters",[42,10,22,35]) // EJsS HtmlView.HtmlView Page: setting property 'Gutters' for element 'vxPlottingPanel'
      .setProperty("MinimumY",-100.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'vxPlottingPanel'
      .setProperty("TitleY","Vx (m/s)") // EJsS HtmlView.HtmlView Page: setting property 'TitleY' for element 'vxPlottingPanel'
      .setProperty("TitleX","t (s)") // EJsS HtmlView.HtmlView Page: setting property 'TitleX' for element 'vxPlottingPanel'
      .setProperty("Title","") // EJsS HtmlView.HtmlView Page: setting property 'Title' for element 'vxPlottingPanel'
      .setProperty("MaximumY",50.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumY' for element 'vxPlottingPanel'
      .setProperty("MaximumX",10.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'vxPlottingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"vxTrail", _view.vxPlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vxTrail'
      .setProperty("LineColor","blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'vxTrail'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"vxDot", _view.vxPlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vxDot'
      .setProperty("FillColor","red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'vxDot'
      .setProperty("SizeX",6) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'vxDot'
      .setProperty("SizeY",6) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'vxDot'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'vxDot'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"vyPlottingPanel", _view.topPlots) // EJsS HtmlView.HtmlView Page: declaration of element 'vyPlottingPanel'
      .setProperty("Height",180) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'vyPlottingPanel'
      .setProperty("MinimumX",0.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'vyPlottingPanel'
      .setProperty("Gutters",[42,10,22,35]) // EJsS HtmlView.HtmlView Page: setting property 'Gutters' for element 'vyPlottingPanel'
      .setProperty("MinimumY",-10.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'vyPlottingPanel'
      .setProperty("TitleY","Vx (m/s)") // EJsS HtmlView.HtmlView Page: setting property 'TitleY' for element 'vyPlottingPanel'
      .setProperty("TitleX","t (s)") // EJsS HtmlView.HtmlView Page: setting property 'TitleX' for element 'vyPlottingPanel'
      .setProperty("Title","") // EJsS HtmlView.HtmlView Page: setting property 'Title' for element 'vyPlottingPanel'
      .setProperty("MaximumY",115.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumY' for element 'vyPlottingPanel'
      .setProperty("MaximumX",10.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'vyPlottingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"vyTrail", _view.vyPlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vyTrail'
      .setProperty("LineColor","blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'vyTrail'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"vyDot", _view.vyPlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vyDot'
      .setProperty("FillColor","red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'vyDot'
      .setProperty("SizeX",6) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'vyDot'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'vyDot'
      .setProperty("SizeY",6) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'vyDot'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"bottomPlot", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'bottomPlot'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'bottomPlot'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.bottomPlot) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel'
      .setProperty("Height",250) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'drawingPanel'
      .setProperty("MinimumX",-98.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'drawingPanel'
      .setProperty("CSS",{"border-style":"solid",  "border-width":"1px"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'drawingPanel'
      .setProperty("MinimumY",-127.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'drawingPanel'
      .setProperty("Background","white") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'drawingPanel'
      .setProperty("Foreground","none") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'drawingPanel'
      .setProperty("MaximumY",38.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumY' for element 'drawingPanel'
      .setProperty("MaximumX",198.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"trail", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'trail'
      .setProperty("LineColor","black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'trail'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"probeBody", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'probeBody'
      .setProperty("FillColor","black") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'probeBody'
      .setProperty("SizeX",25.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'probeBody'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'probeBody'
      .setProperty("SizeY",20.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'probeBody'
      ;

    _view._addElement(EJSS_DRAWING2D.shapeSet,"thrusters", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'thrusters'
      .setProperty("NumberOfElements",2) // EJsS HtmlView.HtmlView Page: setting property 'NumberOfElements' for element 'thrusters'
      .setProperty("SizeX",[10.0,8.0]) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'thrusters'
      .setProperty("SizeY",[7.0,10.0]) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'thrusters'
      ;

    _view._addElement(EJSS_DRAWING2D.polygon,"rightThrusterFire", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'rightThrusterFire'
      .setProperty("FillColor","red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'rightThrusterFire'
      ;

    _view._addElement(EJSS_DRAWING2D.polygon,"leftThrusterFire", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'leftThrusterFire'
      .setProperty("FillColor","red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'leftThrusterFire'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"time", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'time'
      .setProperty("X",-94.0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'time'
      .setProperty("Y",29.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'time'
      .setProperty("Font","normal normal 14px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'time'
      ;

    _view._addElement(EJSS_DRAWING2D.arrowSet,"xyAxes", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xyAxes'
      .setProperty("NumberOfElements",2) // EJsS HtmlView.HtmlView Page: setting property 'NumberOfElements' for element 'xyAxes'
      .setProperty("SizeX",[40.0,0.0]) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'xyAxes'
      .setProperty("SizeY",[0.0,35.0]) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'xyAxes'
      ;

    _view._addElement(EJSS_DRAWING2D.textSet,"xyLabels", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xyLabels'
      .setProperty("NumberOfElements",2) // EJsS HtmlView.HtmlView Page: setting property 'NumberOfElements' for element 'xyLabels'
      .setProperty("X",[30.0,-20.0]) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'xyLabels'
      .setProperty("Y",[-12.0, 30.0]) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'xyLabels'
      .setProperty("Font","normal normal 14px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'xyLabels'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttons", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'buttons'
      .setProperty("Height",40) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'buttons'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'buttons'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"playPause", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'playPause'
      .setProperty("TextOn","playPause") // EJsS HtmlView.HtmlView Page: setting property 'TextOn' for element 'playPause'
      .setProperty("Tooltip","Plays/pauses the animation.") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'playPause'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'playPause'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'playPause'
      ;

    _view._addElement(EJSS_INTERFACE.button,"stepBack", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'stepBack'
      .setProperty("Tooltip","Decrements time by one step.") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'stepBack'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepback.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'stepBack'
      ;

    _view._addElement(EJSS_INTERFACE.button,"step", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'step'
      .setProperty("Tooltip","Increments time by one step.") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'step'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'step'
      ;

    _view._addElement(EJSS_INTERFACE.button,"reset", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'reset'
      .setProperty("Tooltip","Resets the animation.") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'reset'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'reset'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"summary", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'summary'
      .setProperty("Html","<p> In the animation shown, a space probe has engines that can fire on all four  sides <strong>(position is given in meters and time is given in seconds)</strong>.  Two of the engines engage at t = 5 s. The acceleration is constant and zero  before the engines engage, and it is constant (but not equal to zero) after  the engines engage. </p> <ol type=\"a\"> <li>What is the initial velocity of the probe just before the engines fire?</li> <li>What is the acceleration of the probe after the engines fire?</li> <li>Assuming the engines continue to fire in the same way, what will be the  position and velocity of the probe at t = 25 s?</li> <li>At what instant is v<sub>x</sub> = 0? At what instant is v<sub>y</sub> = 0?</li> </ol>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'summary'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new prob03_14("_topFrame","_ejs_library/",null);
          if (typeof _isApp !== "undefined" && _isApp) _model.setRunAlways(true);
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
