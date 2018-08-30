/* _inputParameters: an object with different values for the model parameters */
function prob03_08(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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

  var xApple; // EjsS Model.Variables.Motion Vars.xApple
  var yApple; // EjsS Model.Variables.Motion Vars.yApple
  var xBullet; // EjsS Model.Variables.Motion Vars.xBullet
  var yBullet; // EjsS Model.Variables.Motion Vars.yBullet
  var t; // EjsS Model.Variables.Motion Vars.t
  var dt; // EjsS Model.Variables.Motion Vars.dt

  var animation; // EjsS Model.Variables.Draw Vars.animation
  var msg; // EjsS Model.Variables.Draw Vars.msg
  var xmin; // EjsS Model.Variables.Draw Vars.xmin
  var xmax; // EjsS Model.Variables.Draw Vars.xmax
  var ymin; // EjsS Model.Variables.Draw Vars.ymin
  var ymax; // EjsS Model.Variables.Draw Vars.ymax
  var riflePts; // EjsS Model.Variables.Draw Vars.riflePts
  var linePos; // EjsS Model.Variables.Draw Vars.linePos
  var lineSize; // EjsS Model.Variables.Draw Vars.lineSize

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      xApple : xApple,
      yApple : yApple,
      xBullet : xBullet,
      yBullet : yBullet,
      t : t,
      dt : dt,
      animation : animation,
      msg : msg,
      xmin : xmin,
      xmax : xmax,
      ymin : ymin,
      ymax : ymax,
      riflePts : riflePts,
      linePos : linePos,
      lineSize : lineSize
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.xApple != "undefined") xApple = json.xApple;
    if(typeof json.yApple != "undefined") yApple = json.yApple;
    if(typeof json.xBullet != "undefined") xBullet = json.xBullet;
    if(typeof json.yBullet != "undefined") yBullet = json.yBullet;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.animation != "undefined") animation = json.animation;
    if(typeof json.msg != "undefined") msg = json.msg;
    if(typeof json.xmin != "undefined") xmin = json.xmin;
    if(typeof json.xmax != "undefined") xmax = json.xmax;
    if(typeof json.ymin != "undefined") ymin = json.ymin;
    if(typeof json.ymax != "undefined") ymax = json.ymax;
    if(typeof json.riflePts != "undefined") riflePts = json.riflePts;
    if(typeof json.linePos != "undefined") linePos = json.linePos;
    if(typeof json.lineSize != "undefined") lineSize = json.lineSize;
  };

  function _unserialize(json) { return _model.unserialize(json); }

  _model._userUnserialize = function(json) {
    _model._readParameters(json);
   _resetSolvers();
   _model.update();
  };

  _model.addToReset(function() {
    __pagesEnabled["Init Page"] = true;
    __pagesEnabled["Evol Page"] = true;
  });

  _model.addToReset(function() {
    xApple = 16.0; // EjsS Model.Variables.Motion Vars.xApple
    yApple = 11.0; // EjsS Model.Variables.Motion Vars.yApple
    xBullet = -22.0; // EjsS Model.Variables.Motion Vars.xBullet
    yBullet = -8.0; // EjsS Model.Variables.Motion Vars.yBullet
    t = 0.0; // EjsS Model.Variables.Motion Vars.t
    dt = 0.02; // EjsS Model.Variables.Motion Vars.dt
  });

  _model.addToReset(function() {
    animation = 1; // EjsS Model.Variables.Draw Vars.animation
    msg = ""; // EjsS Model.Variables.Draw Vars.msg
    xmin = -26.0; // EjsS Model.Variables.Draw Vars.xmin
    xmax = 20.0; // EjsS Model.Variables.Draw Vars.xmax
    ymin = -14.0; // EjsS Model.Variables.Draw Vars.ymin
    ymax = 19.0; // EjsS Model.Variables.Draw Vars.ymax
    riflePts = [[-22.3,-7.8],[-22.0, -8.3], [xmin, -11.0], [xmin, -10.32]]; // EjsS Model.Variables.Draw Vars.riflePts
    linePos = [-22.0,-8.0]; // EjsS Model.Variables.Draw Vars.linePos
    lineSize = [45.0, 30.0]; // EjsS Model.Variables.Draw Vars.lineSize
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
    yApple = 11.0 - 4.9*t*t;  // > CustomCode.Update:2
    xBullet = -22.0 + 18.0*t;  // > CustomCode.Update:3
    if (animation == 1) { yBullet = -8.0 + 12.0*t - 6.3*t*t; }  // > CustomCode.Update:4
    else if (animation == 2) { yBullet = -8.0 + 9.0*t-4.9*t*t; }  // > CustomCode.Update:5
    else { yBullet = -8.0 + 6*t - 3.5*t*t; }  // > CustomCode.Update:6
  }  // > CustomCode.Update:7

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    t = 0.0;  // > Initialization.Init Page:1
    update();  // > Initialization.Init Page:2
    msg = "";  // > Initialization.Init Page:3
    // draw rifle and line of sight  // > Initialization.Init Page:4
    if (animation == 1) {  // > Initialization.Init Page:5
      riflePts = [[-22.3,-7.75],[-21.9, -8.4], [xmin, -11.15], [xmin, -10.22]];  // > Initialization.Init Page:6
      lineSize = [45.0, 30.0];  // > Initialization.Init Page:7
    }  // > Initialization.Init Page:8
    else if (animation == 2) {  // > Initialization.Init Page:9
      riflePts = [[-22.2, -7.7], [-21.9, -8.4], [xmin, -10.5], [xmin, -9.7]];  // > Initialization.Init Page:10
      lineSize = [50, 25.0];  // > Initialization.Init Page:11
    }  // > Initialization.Init Page:12
    else {  // > Initialization.Init Page:13
      riflePts = [[-22.2, -7.7], [-22.0, -8.4], [xmin, -9.8], [xmin, -9.0]];  // > Initialization.Init Page:14
      lineSize = [45.0, 15.0];  // > Initialization.Init Page:15
    }  // > Initialization.Init Page:16
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page"]) return;
    update();  // > Evolution.Evol Page:1
    if (xBullet >= xApple) {  // > Evolution.Evol Page:2
      _pause();  // > Evolution.Evol Page:3
      msg = "Bull's Eye!";  // > Evolution.Evol Page:4
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
    _view = new prob03_08_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.animation1.setAction("OnCheckOn", function() {
  _pause();
  animation = 1;
  _initialize();

}); // HtmlView Page setting action 'OnCheckOn' for element 'animation1'
          _view.animation2.setAction("OnCheckOn", function() {
  _pause();
  animation = 2;
  _initialize();

}); // HtmlView Page setting action 'OnCheckOn' for element 'animation2'
          _view.animation3.setAction("OnCheckOn", function() {
  _pause();
  animation = 3;
  _initialize();

}); // HtmlView Page setting action 'OnCheckOn' for element 'animation3'
          _view.drawingPanel.linkProperty("MinimumX",  function() { return xmin; }, function(_v) { xmin = _v; } ); // HtmlView Page linking property 'MinimumX' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("MinimumY",  function() { return ymin; }, function(_v) { ymin = _v; } ); // HtmlView Page linking property 'MinimumY' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("MaximumY",  function() { return ymax; }, function(_v) { ymax = _v; } ); // HtmlView Page linking property 'MaximumY' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("MaximumX",  function() { return xmax; }, function(_v) { xmax = _v; } ); // HtmlView Page linking property 'MaximumX' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("BRMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // HtmlView Page linking property 'BRMessage' for element 'drawingPanel'
          _view.stem.linkProperty("X",  function() { return xApple; }, function(_v) { xApple = _v; } ); // HtmlView Page linking property 'X' for element 'stem'
          _view.stem.linkProperty("Y",  function() { return yApple; }, function(_v) { yApple = _v; } ); // HtmlView Page linking property 'Y' for element 'stem'
          _view.apple.linkProperty("X",  function() { return xApple; }, function(_v) { xApple = _v; } ); // HtmlView Page linking property 'X' for element 'apple'
          _view.apple.linkProperty("Y",  function() { return yApple; }, function(_v) { yApple = _v; } ); // HtmlView Page linking property 'Y' for element 'apple'
          _view.bulletTrail.linkProperty("InputX",  function() { return xBullet; }, function(_v) { xBullet = _v; } ); // HtmlView Page linking property 'InputX' for element 'bulletTrail'
          _view.bulletTrail.linkProperty("InputY",  function() { return yBullet; }, function(_v) { yBullet = _v; } ); // HtmlView Page linking property 'InputY' for element 'bulletTrail'
          _view.bullet.linkProperty("X",  function() { return xBullet; }, function(_v) { xBullet = _v; } ); // HtmlView Page linking property 'X' for element 'bullet'
          _view.bullet.linkProperty("Y",  function() { return yBullet; }, function(_v) { yBullet = _v; } ); // HtmlView Page linking property 'Y' for element 'bullet'
          _view.rifle.linkProperty("Points",  function() { return riflePts; }, function(_v) { riflePts = _v; } ); // HtmlView Page linking property 'Points' for element 'rifle'
          _view.lineOfSight.linkProperty("Size",  function() { return lineSize; }, function(_v) { lineSize = _v; } ); // HtmlView Page linking property 'Size' for element 'lineOfSight'
          _view.time.linkProperty("Text",  function() { return "Time: " + t.toFixed(2); } ); // HtmlView Page linking property 'Text' for element 'time'
          _view.playPause.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'playPause'
          _view.playPause.linkProperty("State",  function() { return _isPaused; }, function(_v) { _isPaused = _v; } ); // HtmlView Page linking property 'State' for element 'playPause'
          _view.playPause.setAction("OnClick", _play); // HtmlView Page setting action 'OnClick' for element 'playPause'
          _view.stepBack.setAction("OnClick", function() {
  if (t > 0.0) {
    t-=dt;
    update();
    msg = "";
  }

}); // HtmlView Page setting action 'OnClick' for element 'stepBack'
          _view.step.setAction("OnClick", function() {
  if (xBullet < xApple) {
    t+=dt;
    update();
    msg = "";
  }
  else { msg = "Bull's Eye!"; }

}); // HtmlView Page setting action 'OnClick' for element 'step'
          _view.resetTime.setAction("OnClick", function() {
  _pause();
  _initialize();

}); // HtmlView Page setting action 'OnClick' for element 'resetTime'
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
function prob03_08_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = prob03_08_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function prob03_08_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"simPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'simPanel'
      .setProperty("CSS",{"page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'simPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"title", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'title'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"titleLabel", _view.title) // EJsS HtmlView.HtmlView Page: declaration of element 'titleLabel'
      .setProperty("Text","<h2> Problem 3.8: Shoot the Apple from the Tree </h2>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"animationPanel", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'animationPanel'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'animationPanel'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'animationPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"animation", _view.animationPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'animation'
      .setProperty("Text","Animation:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'animation'
      ;

    _view._addElement(EJSS_INTERFACE.radioButton,"animation1", _view.animationPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'animation1'
      .setProperty("Checked",true) // EJsS HtmlView.HtmlView Page: setting property 'Checked' for element 'animation1'
      .setProperty("Text","1") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'animation1'
      ;

    _view._addElement(EJSS_INTERFACE.radioButton,"animation2", _view.animationPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'animation2'
      .setProperty("Text","2") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'animation2'
      ;

    _view._addElement(EJSS_INTERFACE.radioButton,"animation3", _view.animationPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'animation3'
      .setProperty("Text","3") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'animation3'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"plot", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plot'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'plot'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.plot) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel'
      .setProperty("Height",250) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'drawingPanel'
      .setProperty("Width",350) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'drawingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"tree", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'tree'
      .setProperty("FillColor","rgb(165,122,33)") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'tree'
      .setProperty("SizeX",2.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'tree'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'tree'
      .setProperty("X",17.8) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'tree'
      .setProperty("Y",-2.3) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'tree'
      .setProperty("SizeY",40.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'tree'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"stem", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'stem'
      .setProperty("SizeX",0.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'stem'
      .setProperty("LineColor","green") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'stem'
      .setProperty("SizeY",1.6) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'stem'
      .setProperty("LineWidth",2.0) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'stem'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"apple", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'apple'
      .setProperty("FillColor","red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'apple'
      .setProperty("SizeX",12) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'apple'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'apple'
      .setProperty("SizeY",12) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'apple'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"bulletTrail", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'bulletTrail'
      .setProperty("LineColor","black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'bulletTrail'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"bullet", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'bullet'
      .setProperty("FillColor","black") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'bullet'
      .setProperty("SizeX",4) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'bullet'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'bullet'
      .setProperty("SizeY",4) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'bullet'
      ;

    _view._addElement(EJSS_DRAWING2D.polygon,"rifle", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'rifle'
      .setProperty("FillColor","black") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'rifle'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"lineOfSight", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'lineOfSight'
      .setProperty("LineColor","blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'lineOfSight'
      .setProperty("X",-22.0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'lineOfSight'
      .setProperty("Y",-8.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'lineOfSight'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"lineOfSightText", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'lineOfSightText'
      .setProperty("FillColor","blue") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'lineOfSightText'
      .setProperty("X",-19.0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'lineOfSightText'
      .setProperty("Y",-10.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'lineOfSightText'
      .setProperty("Text","Blue: Line of Sight") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'lineOfSightText'
      .setProperty("Font","normal normal 14px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'lineOfSightText'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"time", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'time'
      .setProperty("X",-25.0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'time'
      .setProperty("Y",16.5) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'time'
      .setProperty("Font","normal normal 14px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'time'
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
      .setProperty("Tooltip","Inrements time by one step.") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'step'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'step'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetTime", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'resetTime'
      .setProperty("Tooltip","Sets the time to zero.") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'resetTime'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset1.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'resetTime'
      ;

    _view._addElement(EJSS_INTERFACE.button,"reset", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'reset'
      .setProperty("Tooltip","Resets the simulation.") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'reset'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'reset'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"summary", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'summary'
      .setProperty("Html","<p> A hunter (off screen) aims his rifle at an  apple in a tree as shown in the animation  <strong>(position is given in meters and  time is given in seconds)</strong>. At the  instant the bullet leaves the rifle, the  apple starts falling from rest. Which of  the above animations correctly depicts the  hunter's aim that hits the apple? Note: All  three show the apple being hit, but only one  animation depicts correct physics. </p>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'summary'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new prob03_08("_topFrame","_ejs_library/",null);
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
