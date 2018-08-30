/* _inputParameters: an object with different values for the model parameters */
function prob03_16(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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
  var theta; // EjsS Model.Variables.Var Table.theta
  var omega; // EjsS Model.Variables.Var Table.omega
  var r; // EjsS Model.Variables.Var Table.r
  var x; // EjsS Model.Variables.Var Table.x
  var y; // EjsS Model.Variables.Var Table.y
  var t; // EjsS Model.Variables.Var Table.t
  var dt; // EjsS Model.Variables.Var Table.dt
  var msg; // EjsS Model.Variables.Var Table.msg

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      n : n,
      theta0 : theta0,
      theta : theta,
      omega : omega,
      r : r,
      x : x,
      y : y,
      t : t,
      dt : dt,
      msg : msg
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.n != "undefined") n = json.n;
    if(typeof json.theta0 != "undefined") theta0 = json.theta0;
    if(typeof json.theta != "undefined") theta = json.theta;
    if(typeof json.omega != "undefined") omega = json.omega;
    if(typeof json.r != "undefined") r = json.r;
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.y != "undefined") y = json.y;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.msg != "undefined") msg = json.msg;
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
    n = 4; // EjsS Model.Variables.Var Table.n
    theta0 = [0.0, Math.PI/2.0, Math.PI, 3*Math.PI/2.0]; // EjsS Model.Variables.Var Table.theta0
    theta = [0.0, Math.PI/2.0, Math.PI, 3*Math.PI/2.0]; // EjsS Model.Variables.Var Table.theta
    omega = Math.PI / 2.0; // EjsS Model.Variables.Var Table.omega
    r = 0.5; // EjsS Model.Variables.Var Table.r
    x = [r*Math.cos(theta[0]), r*Math.cos(theta[1]), r*Math.cos(theta[2]), r*Math.cos(theta[3])]; // EjsS Model.Variables.Var Table.x
    y = [r*Math.sin(theta[0]), r*Math.sin(theta[1]), r*Math.sin(theta[2]), r*Math.sin(theta[3])]; // EjsS Model.Variables.Var Table.y
    t = 0.0; // EjsS Model.Variables.Var Table.t
    dt = 0.05; // EjsS Model.Variables.Var Table.dt
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
    for (var i=0; i<n; i++) {   // > CustomCode.Update:2
      theta[i] = theta0[i] + omega*t;   // > CustomCode.Update:3
        // > CustomCode.Update:4
      x[i] = r*Math.cos(theta[i]);  // > CustomCode.Update:5
      y[i] = r*Math.sin(theta[i]);  // > CustomCode.Update:6
    }  // > CustomCode.Update:7
  }  // > CustomCode.Update:8

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page"]) return;
    update();  // > Evolution.Evol Page:1
    if (t.toFixed(3) == 2.500) {  // > Evolution.Evol Page:2
      _pause();  // > Evolution.Evol Page:3
      msg = "End of animation.";  // > Evolution.Evol Page:4
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
    _view = new prob03_16_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.drawingPanel.linkProperty("BRMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // HtmlView Page linking property 'BRMessage' for element 'drawingPanel'
          _view.points.linkProperty("NumberOfElements",  function() { return n; }, function(_v) { n = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'points'
          _view.points.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'points'
          _view.points.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'points'
          _view.segments.linkProperty("NumberOfElements",  function() { return n; }, function(_v) { n = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'segments'
          _view.segments.linkProperty("SizeX",  function() { return [x[1]-x[0], x[2] - x[1], x[3] - x[2], x[0] - x[3]]; } ); // HtmlView Page linking property 'SizeX' for element 'segments'
          _view.segments.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'segments'
          _view.segments.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'segments'
          _view.segments.linkProperty("SizeY",  function() { return [y[1]-y[0],y[2]-y[1],y[3]-y[2],y[0]-y[3]]; } ); // HtmlView Page linking property 'SizeY' for element 'segments'
          _view.A.linkProperty("X",  function() { return x[1] - 0.08; } ); // HtmlView Page linking property 'X' for element 'A'
          _view.A.linkProperty("Y",  function() { return y[1] + 0.06; } ); // HtmlView Page linking property 'Y' for element 'A'
          _view.time.linkProperty("Text",  function() { return "Time: " + t.toFixed(2); } ); // HtmlView Page linking property 'Text' for element 'time'
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
  if (t.toFixed(3) < 2.500) {
    t+=dt;
    update();
    msg = "";
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
function prob03_16_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = prob03_16_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function prob03_16_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"simPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'simPanel'
      .setProperty("CSS",{"page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'simPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"title", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'title'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"titleLabel", _view.title) // EJsS HtmlView.HtmlView Page: declaration of element 'titleLabel'
      .setProperty("Text","<h2> Problem 3.16: Rotating Square </h2>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"plot", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plot'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'plot'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.plot) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel'
      .setProperty("Height",350) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'drawingPanel'
      .setProperty("Width",350) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'drawingPanel'
      .setProperty("MinimumX",-1.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'drawingPanel'
      .setProperty("MinimumY",-1.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'drawingPanel'
      .setProperty("Background","white") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'drawingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'drawingPanel'
      .setProperty("MaximumY",1.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumY' for element 'drawingPanel'
      .setProperty("MaximumX",1.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.shapeSet,"points", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'points'
      .setProperty("FillColor","black") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'points'
      .setProperty("SizeX",10) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'points'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'points'
      .setProperty("SizeY",10) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'points'
      ;

    _view._addElement(EJSS_DRAWING2D.segmentSet,"segments", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'segments'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"A", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'A'
      .setProperty("Text","A") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'A'
      .setProperty("Font","normal normal 15px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'A'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"time", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'time'
      .setProperty("X",-0.95) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'time'
      .setProperty("Y",0.9) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'time'
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
      .setProperty("Tooltip","Increments time by one step.") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'step'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'step'
      ;

    _view._addElement(EJSS_INTERFACE.button,"reset", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'reset'
      .setProperty("Tooltip","Resets the animation.") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'reset'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'reset'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"summary", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'summary'
      .setProperty("Html","<p> A square rotates as shown in the animation <strong>(position is  given in meters and time is given in seconds)</strong>.  A corner of the square is labeled A. For all of the following  questions consider the motion of point A from t = 0.5 s to  t = 2.5 s. </p> <ol type=\"a\"> <li>What is the displacement of point A during this time  interval?</li> <li>What is its distance traveled during this interval?</li> <li>What is its average velocity during this interval?</li> <li>What is its average speed during this interval?</li> </ol>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'summary'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new prob03_16("_topFrame","_ejs_library/",null);
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
