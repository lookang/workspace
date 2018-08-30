/* _inputParameters: an object with different values for the model parameters */
function prob03_04(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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
  var t; // EjsS Model.Variables.Var Table.t
  var dt; // EjsS Model.Variables.Var Table.dt
  var animation; // EjsS Model.Variables.Var Table.animation
  var msg; // EjsS Model.Variables.Var Table.msg

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      x : x,
      y : y,
      t : t,
      dt : dt,
      animation : animation,
      msg : msg
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.y != "undefined") y = json.y;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.animation != "undefined") animation = json.animation;
    if(typeof json.msg != "undefined") msg = json.msg;
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
    x = -5.0; // EjsS Model.Variables.Var Table.x
    y = -3.5; // EjsS Model.Variables.Var Table.y
    t = 0.0; // EjsS Model.Variables.Var Table.t
    dt = 0.05; // EjsS Model.Variables.Var Table.dt
    animation = 1; // EjsS Model.Variables.Var Table.animation
    msg = ""; // EjsS Model.Variables.Var Table.msg
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
      x = -5.0 + 3.3*t*Math.sin(4*t);  // > CustomCode.Update:3
      if (t < 1.0) { y = -3.5 + t; }  // > CustomCode.Update:4
      else if (1.0 <= t && t < 2.0) { y = -2.5; }  // > CustomCode.Update:5
      else { y = -2.5 + 2.95*(t - 2.0); }  // > CustomCode.Update:6
    }  // > CustomCode.Update:7
    else if (animation == 2) {  // > CustomCode.Update:8
      if (t < 1.0) {  // > CustomCode.Update:9
        x = -5.0 + 15.0*t;  // > CustomCode.Update:10
        y = -3.5;  // > CustomCode.Update:11
      }  // > CustomCode.Update:12
      else if (1.0 <= t && t < 3.8) {  // > CustomCode.Update:13
        x = 9.4;  // > CustomCode.Update:14
        y = -3.5 + 3.5*(t - 1.0);  // > CustomCode.Update:15
      }  // > CustomCode.Update:16
      else {   // > CustomCode.Update:17
        x += 0.6;   // > CustomCode.Update:18
        y += 0.1;  // > CustomCode.Update:19
      }  // > CustomCode.Update:20
    }  // > CustomCode.Update:21
    else if (animation == 3) {  // > CustomCode.Update:22
      x = -5.0 + 4.42*t;  // > CustomCode.Update:23
      y = -3.5 + 8.1*t - 1.53*t*t;  // > CustomCode.Update:24
    }  // > CustomCode.Update:25
    else {  // > CustomCode.Update:26
      x = -5.0 + 3.001*t;  // > CustomCode.Update:27
      if (t < 1.0) { y = -3.5 + t; }  // > CustomCode.Update:28
      else if (1.0 <= t && t < 2.0) { y = -2.5; }  // > CustomCode.Update:29
      else { y = -2.5 + 2.96*(t - 2.0); }  // > CustomCode.Update:30
    }  // > CustomCode.Update:31
  }  // > CustomCode.Update:32

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    t = 0.0;  // > Initialization.Init Page:1
    _view.trail.clear();  // > Initialization.Init Page:2
    x = -5.0;  // > Initialization.Init Page:3
    y = -3.5;  // > Initialization.Init Page:4
    msg = "";  // > Initialization.Init Page:5
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page"]) return;
    update();  // > Evolution.Evol Page:1
    if (x >= 10.0) {  // > Evolution.Evol Page:2
      _pause();  // > Evolution.Evol Page:3
      msg = "End of animation.";  // > Evolution.Evol Page:4
    }  // > Evolution.Evol Page:5
    else { t += dt; }  // > Evolution.Evol Page:6
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
    _view = new prob03_04_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
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
          _view.trail.linkProperty("InputX",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'InputX' for element 'trail'
          _view.trail.linkProperty("InputY",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'InputY' for element 'trail'
          _view.ball.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'ball'
          _view.ball.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'ball'
          _view.time.linkProperty("Text",  function() { return "Time: " + t.toFixed(2); } ); // HtmlView Page linking property 'Text' for element 'time'
          _view.hand.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'hand'
          _view.hand.linkProperty("Y",  function() { return y + 1.8; } ); // HtmlView Page linking property 'Y' for element 'hand'
          _view.string.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'string'
          _view.string.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'string'
          _view.playPause.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'playPause'
          _view.playPause.linkProperty("State",  function() { return _isPaused; }, function(_v) { _isPaused = _v; } ); // HtmlView Page linking property 'State' for element 'playPause'
          _view.playPause.setAction("OnClick", _play); // HtmlView Page setting action 'OnClick' for element 'playPause'
          _view.stepBack.setAction("OnClick", function() {
  _pause();
  if (t > 0.0) {
    t-=dt;
    update();
  }

}); // HtmlView Page setting action 'OnClick' for element 'stepBack'
          _view.step.setAction("OnClick", function() {
  _pause();
  if (x < 10.0) {
    t+=dt;
    update();
  }

}); // HtmlView Page setting action 'OnClick' for element 'step'
          _view.timeReset.setAction("OnClick", function() {
  _pause();
  _initialize();

}); // HtmlView Page setting action 'OnClick' for element 'timeReset'
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
function prob03_04_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = prob03_04_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function prob03_04_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"title", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'title'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"titleLabel", _view.title) // EJsS HtmlView.HtmlView Page: declaration of element 'titleLabel'
      .setProperty("Text","<h2> Problem 3.4: A Bowling Ball is Lifted onto a Shelf </h2>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"animationPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'animationPanel'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'animationPanel'
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

    _view._addElement(EJSS_INTERFACE.panel,"plots", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'plots'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'plots'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.plots) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel'
      .setProperty("Height",210) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'drawingPanel'
      .setProperty("Width",350) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'drawingPanel'
      .setProperty("MinimumX",-20.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'drawingPanel'
      .setProperty("CSS",{"border-style":"solid",  "border-width":"1px"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'drawingPanel'
      .setProperty("MinimumY",-4.5) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'drawingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'drawingPanel'
      .setProperty("Foreground","none") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'drawingPanel'
      .setProperty("MaximumY",11.5) // EJsS HtmlView.HtmlView Page: setting property 'MaximumY' for element 'drawingPanel'
      .setProperty("MaximumX",20.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"trail", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'trail'
      .setProperty("Maximum",1000) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'trail'
      .setProperty("LineColor","black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'trail'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"ball", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ball'
      .setProperty("FillColor","black") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'ball'
      .setProperty("SizeX",10) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'ball'
      .setProperty("DrawLines",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawLines' for element 'ball'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'ball'
      .setProperty("SizeY",10) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'ball'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"shelf", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'shelf'
      .setProperty("FillColor","rgb(101,178,179)") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'shelf'
      .setProperty("SizeX",4.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'shelf'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'shelf'
      .setProperty("X",12.0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'shelf'
      .setProperty("Y",1.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'shelf'
      .setProperty("SizeY",10.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'shelf'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"floor", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'floor'
      .setProperty("FillColor","grey") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'floor'
      .setProperty("SizeX",40.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'floor'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'floor'
      .setProperty("X",0.0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'floor'
      .setProperty("Y",-4.5) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'floor'
      .setProperty("SizeY",1.2) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'floor'
      .setProperty("LineWidth",0.5) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'floor'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"time", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'time'
      .setProperty("X",-19.2) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'time'
      .setProperty("Y",10.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'time'
      .setProperty("Font","normal normal 14px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'time'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"hand", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'hand'
      .setProperty("SizeX",14) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'hand'
      .setProperty("ImageUrl","./prob03_04/uppull.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'hand'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'hand'
      .setProperty("SizeY",33) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'hand'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"string", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'string'
      .setProperty("SizeX",0.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'string'
      .setProperty("SizeY",1.2) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'string'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttons", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'buttons'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"playPause", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'playPause'
      .setProperty("Tooltip","Plays or pauses the simulation") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'playPause'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'playPause'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'playPause'
      ;

    _view._addElement(EJSS_INTERFACE.button,"stepBack", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'stepBack'
      .setProperty("Tooltip","Decrements time by one step") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'stepBack'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepback.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'stepBack'
      ;

    _view._addElement(EJSS_INTERFACE.button,"step", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'step'
      .setProperty("Tooltip","Increments time by one step") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'step'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'step'
      ;

    _view._addElement(EJSS_INTERFACE.button,"timeReset", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'timeReset'
      .setProperty("Tooltip","Sets time to zero") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'timeReset'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset1.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'timeReset'
      ;

    _view._addElement(EJSS_INTERFACE.button,"reset", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'reset'
      .setProperty("Tooltip","Resets the simulation") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'reset'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'reset'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"summary", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'summary'
      .setProperty("Html","<p> A bowling ball is lifted from rest onto a shelf by an external agent  <strong>(position is given in meters and time is given in seconds)</strong>.  For each quantity listed below, rank the animations (numbered 1 through  4) from least to greatest. Ties in ( ) please. <i>For example, a suitable  response could be: 1,(2,3),4</i>. </p> <ol type=\"a\"> <li>Magnitude of displacement</li> <li>Magnitude of average velocity</li> </ol>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'summary'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new prob03_04("_topFrame","_ejs_library/",null);
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
