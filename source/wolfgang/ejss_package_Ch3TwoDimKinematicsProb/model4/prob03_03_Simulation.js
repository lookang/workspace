/* _inputParameters: an object with different values for the model parameters */
function prob03_03(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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

  var x; // EjsS Model.Variables.Motion Vars.x
  var y; // EjsS Model.Variables.Motion Vars.y
  var t; // EjsS Model.Variables.Motion Vars.t
  var dt; // EjsS Model.Variables.Motion Vars.dt

  var animation; // EjsS Model.Variables.Draw Vars.animation
  var msg; // EjsS Model.Variables.Draw Vars.msg
  var slopePts; // EjsS Model.Variables.Draw Vars.slopePts
  var shadowX; // EjsS Model.Variables.Draw Vars.shadowX
  var shadowY; // EjsS Model.Variables.Draw Vars.shadowY
  var count; // EjsS Model.Variables.Draw Vars.count
  var next; // EjsS Model.Variables.Draw Vars.next
  var xmin; // EjsS Model.Variables.Draw Vars.xmin
  var xmax; // EjsS Model.Variables.Draw Vars.xmax
  var ymin; // EjsS Model.Variables.Draw Vars.ymin
  var ymax; // EjsS Model.Variables.Draw Vars.ymax
  var arrowPos; // EjsS Model.Variables.Draw Vars.arrowPos
  var arrowSize; // EjsS Model.Variables.Draw Vars.arrowSize

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      x : x,
      y : y,
      t : t,
      dt : dt,
      animation : animation,
      msg : msg,
      slopePts : slopePts,
      shadowX : shadowX,
      shadowY : shadowY,
      count : count,
      next : next,
      xmin : xmin,
      xmax : xmax,
      ymin : ymin,
      ymax : ymax,
      arrowPos : arrowPos,
      arrowSize : arrowSize
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.y != "undefined") y = json.y;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.animation != "undefined") animation = json.animation;
    if(typeof json.msg != "undefined") msg = json.msg;
    if(typeof json.slopePts != "undefined") slopePts = json.slopePts;
    if(typeof json.shadowX != "undefined") shadowX = json.shadowX;
    if(typeof json.shadowY != "undefined") shadowY = json.shadowY;
    if(typeof json.count != "undefined") count = json.count;
    if(typeof json.next != "undefined") next = json.next;
    if(typeof json.xmin != "undefined") xmin = json.xmin;
    if(typeof json.xmax != "undefined") xmax = json.xmax;
    if(typeof json.ymin != "undefined") ymin = json.ymin;
    if(typeof json.ymax != "undefined") ymax = json.ymax;
    if(typeof json.arrowPos != "undefined") arrowPos = json.arrowPos;
    if(typeof json.arrowSize != "undefined") arrowSize = json.arrowSize;
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
    x = 2.44; // EjsS Model.Variables.Motion Vars.x
    y = 0.1; // EjsS Model.Variables.Motion Vars.y
    t = 0.0; // EjsS Model.Variables.Motion Vars.t
    dt = 0.02; // EjsS Model.Variables.Motion Vars.dt
  });

  _model.addToReset(function() {
    animation = 1; // EjsS Model.Variables.Draw Vars.animation
    msg = ""; // EjsS Model.Variables.Draw Vars.msg
    slopePts = [[2.4,0.0],[0.0,0.0],[0.0,1.4],[0.0,1.4]]; // EjsS Model.Variables.Draw Vars.slopePts
    shadowX = new Array(5); // EjsS Model.Variables.Draw Vars.shadowX
    (function () {
      var _i0;
      for (_i0=0; _i0<5; _i0+=1) {  // EjsS Model.Variables.Draw Vars.shadowX
        shadowX[_i0] = x;  // EjsS Model.Variables.Draw Vars.shadowX
      }
    }());
    shadowY = new Array(5); // EjsS Model.Variables.Draw Vars.shadowY
    (function () {
      var _i0;
      for (_i0=0; _i0<5; _i0+=1) {  // EjsS Model.Variables.Draw Vars.shadowY
        shadowY[_i0] = y;  // EjsS Model.Variables.Draw Vars.shadowY
      }
    }());
    count = 1; // EjsS Model.Variables.Draw Vars.count
    next = 0.2; // EjsS Model.Variables.Draw Vars.next
    xmin = -0.9; // EjsS Model.Variables.Draw Vars.xmin
    xmax = 2.7; // EjsS Model.Variables.Draw Vars.xmax
    ymin = -0.3; // EjsS Model.Variables.Draw Vars.ymin
    ymax = 1.9; // EjsS Model.Variables.Draw Vars.ymax
    arrowPos = [2.2,0.0]; // EjsS Model.Variables.Draw Vars.arrowPos
    arrowSize = [-2.2,1.3]; // EjsS Model.Variables.Draw Vars.arrowSize
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
    if (animation == 1) {  // > CustomCode.Update:2
      x = 2.44 - 5*t*0.866 + 0.866*t*t*2.5;  // > CustomCode.Update:3
      y = 0.1 + 5*t*0.5 - 0.5*t*t*2.5;  // > CustomCode.Update:4
    }  // > CustomCode.Update:5
    else if (animation == 2) {  // > CustomCode.Update:6
      x = -0.3 + 2*t;  // > CustomCode.Update:7
      y = 0.3;  // > CustomCode.Update:8
    }  // > CustomCode.Update:9
    else if (animation == 3) {  // > CustomCode.Update:10
      x = -0.9647*t*t*2.5;  // > CustomCode.Update:11
      y = 0.81 - 0.263117*t*t*2.5;  // > CustomCode.Update:12
    }  // > CustomCode.Update:13
    else if (animation == 4) {  // > CustomCode.Update:14
      x = 1.7 - 4*t+2*t*t;  // > CustomCode.Update:15
      y = 0.3;  // > CustomCode.Update:16
    }  // > CustomCode.Update:17
    else if (animation == 5) {  // > CustomCode.Update:18
      x = 4*t*0.6;  // > CustomCode.Update:19
      y = 0.81 - 1.07*t*0.6;  // > CustomCode.Update:20
    }  // > CustomCode.Update:21
    else {  // > CustomCode.Update:22
      x = -2.45 + 0.866*t*t*2.5;  // > CustomCode.Update:23
      y = 0.09 + 0.5*t*t*2.5;  // > CustomCode.Update:24
    }  // > CustomCode.Update:25
    if (t >= next) {  // > CustomCode.Update:26
      shadowX[count] = x;  // > CustomCode.Update:27
      shadowY[count] = y;  // > CustomCode.Update:28
      count++;  // > CustomCode.Update:29
      next+=0.2;  // > CustomCode.Update:30
    }  // > CustomCode.Update:31
  }  // > CustomCode.Update:32

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    t = 0.0;  // > Initialization.Init Page:1
    count = 1;  // > Initialization.Init Page:2
    next = 0.2;  // > Initialization.Init Page:3
    msg = "";  // > Initialization.Init Page:4
    if (animation == 1) {  // > Initialization.Init Page:5
      x = 2.44;  // > Initialization.Init Page:6
      y = 0.1;  // > Initialization.Init Page:7
      xmin = -0.9; xmax = 2.7;  // > Initialization.Init Page:8
      slopePts = [[2.4,0.0],[0.0,0.0],[0.0,1.4],[0.0,1.4]];  // > Initialization.Init Page:9
      arrowPos = [2.2, 0.0]; arrowSize = [-2.2, 1.3];  // > Initialization.Init Page:10
    }  // > Initialization.Init Page:11
    else if (animation == 2) {  // > Initialization.Init Page:12
      x = -0.3;  // > Initialization.Init Page:13
      y = 0.3;  // > Initialization.Init Page:14
      xmin = -0.9; xmax = 2.7;  // > Initialization.Init Page:15
      slopePts = [[-0.7,0.2],[-0.7,0.0],[1.7,0.0],[1.7,0.2]];  // > Initialization.Init Page:16
      arrowPos = [-0.6,0.1]; arrowSize = [2.1,0.0];  // > Initialization.Init Page:17
    }  // > Initialization.Init Page:18
    else if (animation == 3) {  // > Initialization.Init Page:19
      x = 0.0;  // > Initialization.Init Page:20
      y = 0.81;  // > Initialization.Init Page:21
      xmin = -3.0; xmax = 0.6;  // > Initialization.Init Page:22
      slopePts = [[-2.65,0.0],[0.0,0.0],[0.0,0.7],[0.0,0.7]];  // > Initialization.Init Page:23
      arrowPos = [-0.1, 0.6]; arrowSize = [-2.0, -0.53];  // > Initialization.Init Page:24
    }  // > Initialization.Init Page:25
    else if (animation == 4) {  // > Initialization.Init Page:26
      x = 1.7;  // > Initialization.Init Page:27
      y = 0.3;  // > Initialization.Init Page:28
      xmin = -1.0; xmax = 2.5;  // > Initialization.Init Page:29
      slopePts = [[1.7,0.0],[1.7,0.2],[-0.7,0.2],[-0.7,0.0]];  // > Initialization.Init Page:30
      arrowPos = [1.6, 0.1]; arrowSize = [-2.1, 0.0];  // > Initialization.Init Page:31
    }  // > Initialization.Init Page:32
    else if (animation == 5) {  // > Initialization.Init Page:33
      x = 0.0;  // > Initialization.Init Page:34
      y = 0.81;  // > Initialization.Init Page:35
      xmin = -0.6; xmax = 3.0;  // > Initialization.Init Page:36
      slopePts = [[2.65, 0.0], [0.0,0.0], [0.0, 0.7], [0.0,0.7]];  // > Initialization.Init Page:37
      arrowPos = [0.1, 0.6]; arrowSize = [2.0, -0.53];  // > Initialization.Init Page:38
    }  // > Initialization.Init Page:39
    else {  // > Initialization.Init Page:40
      x = -2.45;  // > Initialization.Init Page:41
      y = 0.09;  // > Initialization.Init Page:42
      xmin = -2.8; xmax = 0.8;  // > Initialization.Init Page:43
      slopePts = [[-2.4, 0.0], [0.0,0.0], [0.0, 1.4], [0.0,1.4]];  // > Initialization.Init Page:44
      arrowPos = [-2.2, 0.0]; arrowSize = [2.2, 1.28];  // > Initialization.Init Page:45
    }  // > Initialization.Init Page:46
    // reset traces  // > Initialization.Init Page:47
    shadowX[0] = x;  // > Initialization.Init Page:48
    shadowY[0] = y;  // > Initialization.Init Page:49
    for (var i=1; i<5; i++) {  // > Initialization.Init Page:50
      shadowX[i] = 100.0; // off screen  // > Initialization.Init Page:51
      shadowY[i] = 100.0;  // > Initialization.Init Page:52
    }  // > Initialization.Init Page:53
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page"]) return;
    if (t.toFixed(2) == 1.00) {  // > Evolution.Evol Page:1
      _pause();  // > Evolution.Evol Page:2
      msg = "End of animation.";  // > Evolution.Evol Page:3
    }  // > Evolution.Evol Page:4
    else {  // > Evolution.Evol Page:5
      update();  // > Evolution.Evol Page:6
      t+=dt;  // > Evolution.Evol Page:7
    }  // > Evolution.Evol Page:8
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
    _view = new prob03_03_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
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
          _view.animation4.setAction("OnCheckOn", function() {
  _pause();
  animation = 4;
  _initialize();

}); // HtmlView Page setting action 'OnCheckOn' for element 'animation4'
          _view.animation5.setAction("OnCheckOn", function() {
  _pause();
  animation = 5;
  _initialize();

}); // HtmlView Page setting action 'OnCheckOn' for element 'animation5'
          _view.animation6.setAction("OnCheckOn", function() {
  _pause();
  animation = 6;
  _initialize();

}); // HtmlView Page setting action 'OnCheckOn' for element 'animation6'
          _view.drawingPanel.linkProperty("MinimumX",  function() { return xmin; }, function(_v) { xmin = _v; } ); // HtmlView Page linking property 'MinimumX' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("MinimumY",  function() { return ymin; }, function(_v) { ymin = _v; } ); // HtmlView Page linking property 'MinimumY' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("MaximumY",  function() { return ymax; }, function(_v) { ymax = _v; } ); // HtmlView Page linking property 'MaximumY' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("MaximumX",  function() { return xmax; }, function(_v) { xmax = _v; } ); // HtmlView Page linking property 'MaximumX' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("BRMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // HtmlView Page linking property 'BRMessage' for element 'drawingPanel'
          _view.slope.linkProperty("Points",  function() { return slopePts; }, function(_v) { slopePts = _v; } ); // HtmlView Page linking property 'Points' for element 'slope'
          _view.shadows.linkProperty("X",  function() { return shadowX; }, function(_v) { shadowX = _v; } ); // HtmlView Page linking property 'X' for element 'shadows'
          _view.shadows.linkProperty("Y",  function() { return shadowY; }, function(_v) { shadowY = _v; } ); // HtmlView Page linking property 'Y' for element 'shadows'
          _view.ball.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'ball'
          _view.ball.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'ball'
          _view.time.linkProperty("X",  function() { return xmin+0.06; } ); // HtmlView Page linking property 'X' for element 'time'
          _view.time.linkProperty("Text",  function() { return "Time: " + t.toFixed(2); } ); // HtmlView Page linking property 'Text' for element 'time'
          _view.arrow.linkProperty("Position",  function() { return arrowPos; }, function(_v) { arrowPos = _v; } ); // HtmlView Page linking property 'Position' for element 'arrow'
          _view.arrow.linkProperty("Size",  function() { return arrowSize; }, function(_v) { arrowSize = _v; } ); // HtmlView Page linking property 'Size' for element 'arrow'
          _view.playPause.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'playPause'
          _view.playPause.linkProperty("State",  function() { return _isPaused; }, function(_v) { _isPaused = _v; } ); // HtmlView Page linking property 'State' for element 'playPause'
          _view.playPause.setAction("OnClick", _play); // HtmlView Page setting action 'OnClick' for element 'playPause'
          _view.step.setAction("OnClick", _step); // HtmlView Page setting action 'OnClick' for element 'step'
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
function prob03_03_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = prob03_03_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function prob03_03_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"simPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'simPanel'
      .setProperty("CSS",{"page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'simPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"title", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'title'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"titleLabel", _view.title) // EJsS HtmlView.HtmlView Page: declaration of element 'titleLabel'
      .setProperty("Text","<h2> Problem 3.3: Rank the Motion Diagrams </h2>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titleLabel'
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

    _view._addElement(EJSS_INTERFACE.radioButton,"animation4", _view.animationPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'animation4'
      .setProperty("Text","4") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'animation4'
      ;

    _view._addElement(EJSS_INTERFACE.radioButton,"animation5", _view.animationPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'animation5'
      .setProperty("Text","5") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'animation5'
      ;

    _view._addElement(EJSS_INTERFACE.radioButton,"animation6", _view.animationPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'animation6'
      .setProperty("Text","6") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'animation6'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"plots", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plots'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'plots'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.plots) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel'
      .setProperty("Height",250) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'drawingPanel'
      .setProperty("Width",350) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'drawingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.polygon,"slope", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'slope'
      .setProperty("FillColor","black") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'slope'
      ;

    _view._addElement(EJSS_DRAWING2D.shapeSet,"shadows", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'shadows'
      .setProperty("NumberOfElements",5) // EJsS HtmlView.HtmlView Page: setting property 'NumberOfElements' for element 'shadows'
      .setProperty("FillColor","rgb(239,191,190)") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'shadows'
      .setProperty("SizeX",22) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'shadows'
      .setProperty("ShapeType","WHEEL") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'shadows'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'shadows'
      .setProperty("SizeY",22) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'shadows'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"ball", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ball'
      .setProperty("FillColor","red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'ball'
      .setProperty("SizeX",22) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'ball'
      .setProperty("SizeY",22) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'ball'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'ball'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"time", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'time'
      .setProperty("Y",1.75) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'time'
      .setProperty("Font","normal normal 14px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'time'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"arrow", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'arrow'
      .setProperty("MarkEnd","POINTED") // EJsS HtmlView.HtmlView Page: setting property 'MarkEnd' for element 'arrow'
      .setProperty("LineColor","red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'arrow'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttons", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'buttons'
      .setProperty("Height",40) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'buttons'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'buttons'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"playPause", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'playPause'
      .setProperty("TextOn","playPause") // EJsS HtmlView.HtmlView Page: setting property 'TextOn' for element 'playPause'
      .setProperty("Tooltip","Plays or pauses the simulation") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'playPause'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'playPause'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'playPause'
      ;

    _view._addElement(EJSS_INTERFACE.button,"step", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'step'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'step'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetTime", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'resetTime'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset1.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'resetTime'
      ;

    _view._addElement(EJSS_INTERFACE.button,"reset", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'reset'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'reset'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"summary", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'summary'
      .setProperty("Html","<p> The animations represent the motion of a ball on various surfaces  <strong>(position is given in meters and time is given in seconds)</strong>.  The \"ghosts\" are placed at equal time intervals. Such a picture is  often called a motion diagram. </p> <p> Answer the following questions using the coordinate system specified  in each animation by the <font style=\"color:red\">red arrow</font>. Please  indicate ties by ( ). For example a suitable response could be:  1,(2,3),4,5,6. </p> <p> For parts (a), (b), and (c), use the ghost images to qualitatively  rank the quantities. </p> <ol type=\"a\"> <li>Rank each case from highest to lowest displacement.</li> <li>Rank each case from highest to lowest final velocity.</li> <li>Rank each case from highest to lowest acceleration (assume  constant acceleration).</li> </ol> <p> Now use the usual x and y coordinates that you can access by click-dragging in the animation. </p> <ol type=\"a\" start=\"4\"> <li>Calculate the displacement vector for each animation.</li> <li>Calculate the acceleration vector for each animation (assume  that in Animation 3 and Animation 6 the ball starts at rest and  that in Animation 1 and Animation 4 the ball ends at rest).</li> </ol>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'summary'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new prob03_03("_topFrame","_ejs_library/",null);
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
