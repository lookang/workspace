/* _inputParameters: an object with different values for the model parameters */
function prob03_17(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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

  var n; // EjsS Model.Variables.Var Table.n
  var theta0; // EjsS Model.Variables.Var Table.theta0
  var omega; // EjsS Model.Variables.Var Table.omega
  var r; // EjsS Model.Variables.Var Table.r
  var x; // EjsS Model.Variables.Var Table.x
  var y; // EjsS Model.Variables.Var Table.y
  var t; // EjsS Model.Variables.Var Table.t
  var dt; // EjsS Model.Variables.Var Table.dt

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      n : n,
      theta0 : theta0,
      omega : omega,
      r : r,
      x : x,
      y : y,
      t : t,
      dt : dt
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.n != "undefined") n = json.n;
    if(typeof json.theta0 != "undefined") theta0 = json.theta0;
    if(typeof json.omega != "undefined") omega = json.omega;
    if(typeof json.r != "undefined") r = json.r;
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.y != "undefined") y = json.y;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
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
    n = 12; // EjsS Model.Variables.Var Table.n
    theta0 = new Array(n); // EjsS Model.Variables.Var Table.theta0
    omega = Math.PI / 2.0; // EjsS Model.Variables.Var Table.omega
    r = 1.0; // EjsS Model.Variables.Var Table.r
    x = new Array(n); // EjsS Model.Variables.Var Table.x
    (function () {
      var _i0;
      for (_i0=0; _i0<n; _i0+=1) {  // EjsS Model.Variables.Var Table.x
        x[_i0] = 1.0;  // EjsS Model.Variables.Var Table.x
      }
    }());
    y = new Array(n); // EjsS Model.Variables.Var Table.y
    (function () {
      var _i0;
      for (_i0=0; _i0<n; _i0+=1) {  // EjsS Model.Variables.Var Table.y
        y[_i0] = 0.0;  // EjsS Model.Variables.Var Table.y
      }
    }());
    t = 0.0; // EjsS Model.Variables.Var Table.t
    dt = 0.05; // EjsS Model.Variables.Var Table.dt
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
    for (var i=0; i<n; i++) {  // > CustomCode.Update:2
      x[i] = r*Math.cos(theta0[i] + omega*t);  // > CustomCode.Update:3
      y[i] = r*Math.sin(theta0[i] + omega*t);  // > CustomCode.Update:4
    }  // > CustomCode.Update:5
  }  // > CustomCode.Update:6

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    var ang = 0.0;  // > Initialization.Init Page:1
    for (var i=0; i<n; i++) {  // > Initialization.Init Page:2
      theta0[i] = ang;  // > Initialization.Init Page:3
      x[i] = r*Math.cos(ang);  // > Initialization.Init Page:4
      y[i] = r*Math.sin(ang);  // > Initialization.Init Page:5
      ang += Math.PI / 6.0;  // > Initialization.Init Page:6
    }  // > Initialization.Init Page:7
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page"]) return;
    update();  // > Evolution.Evol Page:1
    t+=dt;  // > Evolution.Evol Page:2
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
    _view = new prob03_17_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.spokes.linkProperty("NumberOfElements",  function() { return n; }, function(_v) { n = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'spokes'
          _view.spokes.linkProperty("SizeX",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'SizeX' for element 'spokes'
          _view.spokes.linkProperty("SizeY",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'SizeY' for element 'spokes'
          _view.inner.linkProperty("SizeX",  function() { return r / 3.0; } ); // HtmlView Page linking property 'SizeX' for element 'inner'
          _view.inner.linkProperty("SizeY",  function() { return r / 3.0; } ); // HtmlView Page linking property 'SizeY' for element 'inner'
          _view.outer.linkProperty("SizeX",  function() { return 2*r; } ); // HtmlView Page linking property 'SizeX' for element 'outer'
          _view.outer.linkProperty("SizeY",  function() { return 2*r; } ); // HtmlView Page linking property 'SizeY' for element 'outer'
          _view.point.linkProperty("X",  function() { return x[0]; } ); // HtmlView Page linking property 'X' for element 'point'
          _view.point.linkProperty("Y",  function() { return y[0]; } ); // HtmlView Page linking property 'Y' for element 'point'
          _view.time.linkProperty("Text",  function() { return "Time: " + t.toFixed(2); } ); // HtmlView Page linking property 'Text' for element 'time'
          _view.playPause.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'playPause'
          _view.playPause.linkProperty("State",  function() { return _isPaused; }, function(_v) { _isPaused = _v; } ); // HtmlView Page linking property 'State' for element 'playPause'
          _view.playPause.setAction("OnClick", _play); // HtmlView Page setting action 'OnClick' for element 'playPause'
          _view.stepBack.setAction("OnClick", function() {
  _pause();
  if (t.toFixed(3) > 0.000) {
    t-=dt;
    update();
  }

}); // HtmlView Page setting action 'OnClick' for element 'stepBack'
          _view.step.setAction("OnClick", function() {
  _pause();
  t+=dt;
  update();

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
function prob03_17_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = prob03_17_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function prob03_17_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"simPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'simPanel'
      .setProperty("CSS",{"page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'simPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"title", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'title'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"titleLabel", _view.title) // EJsS HtmlView.HtmlView Page: declaration of element 'titleLabel'
      .setProperty("Text","<h2> Problem 3.17: Uniform Circular Motion of a Wheel </h2>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"plot", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plot'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'plot'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.plot) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel'
      .setProperty("Height",350) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'drawingPanel'
      .setProperty("Width",350) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'drawingPanel'
      .setProperty("MinimumX",-1.5) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'drawingPanel'
      .setProperty("Background","WHITE") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'drawingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'drawingPanel'
      .setProperty("SquareAspect",true) // EJsS HtmlView.HtmlView Page: setting property 'SquareAspect' for element 'drawingPanel'
      .setProperty("MaximumX",1.5) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.segmentSet,"spokes", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'spokes'
      .setProperty("X",0.0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'spokes'
      .setProperty("Y",0.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'spokes'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"inner", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'inner'
      .setProperty("FillColor","white") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'inner'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"outer", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'outer'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'outer'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"point", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'point'
      .setProperty("FillColor","red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'point'
      .setProperty("SizeX",10) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'point'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'point'
      .setProperty("SizeY",10) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'point'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"time", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'time'
      .setProperty("X",-1.45) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'time'
      .setProperty("Y",1.35) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'time'
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
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'step'
      ;

    _view._addElement(EJSS_INTERFACE.button,"reset", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'reset'
      .setProperty("Tooltip","Resets the animation.") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'reset'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'reset'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"summary", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'summary'
      .setProperty("Html","<p> A point (<font style=\"color:red\">red</font>) on a rotating wheel  is shown in the animation <strong>(position given in meters and  time given in seconds)</strong>. </p> <ol type=\"a\"> <li>What is the period of the wheel (the time it takes the red  point to complete one revolution)?</li> <li>What is the speed of the red point?</li> <li>What is the magnitude of the acceleration of the red point?</li> <li>At t = 5.0 s, what is the direction of the velocity vector  and what is the direction of the acceleration vector for the  red point?</li> </ol>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'summary'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new prob03_17("_topFrame","_ejs_library/",null);
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
