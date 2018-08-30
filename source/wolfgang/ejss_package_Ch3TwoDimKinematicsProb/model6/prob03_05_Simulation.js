/* _inputParameters: an object with different values for the model parameters */
function prob03_05(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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
  var msg; // EjsS Model.Variables.Var Table.msg

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      x : x,
      y : y,
      t : t,
      dt : dt,
      msg : msg
    };
  };

  _model._readParameters = function(json) {
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
    x = 5.0; // EjsS Model.Variables.Var Table.x
    y = 4.0; // EjsS Model.Variables.Var Table.y
    t = 0.0; // EjsS Model.Variables.Var Table.t
    dt = 0.5; // EjsS Model.Variables.Var Table.dt
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
    x = 5.0 - 0.5*t;  // > CustomCode.Update:2
    y = 4.0 + 0.3*t;  // > CustomCode.Update:3
  }  // > CustomCode.Update:4

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page"]) return;
    update();  // > Evolution.Evol Page:1
    if (t.toFixed(2) == 35.00) {   // > Evolution.Evol Page:2
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
    _view = new prob03_05_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.drawingPanel.linkProperty("BRMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // HtmlView Page linking property 'BRMessage' for element 'drawingPanel'
          _view.helicopter.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'helicopter'
          _view.helicopter.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'helicopter'
          _view.time.linkProperty("Text",  function() { return "Time: " + t.toFixed(1); } ); // HtmlView Page linking property 'Text' for element 'time'
          _view.axisLabels.linkProperty("Text",  function() { return ["+x","+y"]; } ); // HtmlView Page linking property 'Text' for element 'axisLabels'
          _view.xField.linkProperty("Value",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'Value' for element 'xField'
          _view.yField.linkProperty("Value",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Value' for element 'yField'
          _view.tField.linkProperty("Value",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'Value' for element 'tField'
          _view.playPause.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'playPause'
          _view.playPause.linkProperty("State",  function() { return _isPaused; }, function(_v) { _isPaused = _v; } ); // HtmlView Page linking property 'State' for element 'playPause'
          _view.playPause.setAction("OnClick", _play); // HtmlView Page setting action 'OnClick' for element 'playPause'
          _view.stepBack.setAction("OnClick", function() {
  _pause();
  if (t.toFixed(2) > 0.00) {
    t-=dt;
    update();
    msg = "";
  }

}); // HtmlView Page setting action 'OnClick' for element 'stepBack'
          _view.step.setAction("OnClick", function() {
  _pause();
  if (t.toFixed(2) < 35.00) {
    t+=dt;
    update();
    msg = "";
  }
  else {
    msg = "End of animation.";
  }

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
function prob03_05_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = prob03_05_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function prob03_05_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"simPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'simPanel'
      .setProperty("CSS",{"page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'simPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"title", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'title'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"titleLabel", _view.title) // EJsS HtmlView.HtmlView Page: declaration of element 'titleLabel'
      .setProperty("Text","<h2> Problem 3.5: A Helicopter Takes Off </h2>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"plot", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plot'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'plot'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.plot) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel'
      .setProperty("Height",220) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'drawingPanel'
      .setProperty("Width",350) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'drawingPanel'
      .setProperty("MinimumX",-11.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'drawingPanel'
      .setProperty("MinimumY",-1.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'drawingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'drawingPanel'
      .setProperty("MaximumY",14.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumY' for element 'drawingPanel'
      .setProperty("MaximumX",8.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"ground", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ground'
      .setProperty("FillColor","green") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'ground'
      .setProperty("SizeX",24.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'ground'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'ground'
      .setProperty("Y",-0.5) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'ground'
      .setProperty("SizeY",1.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'ground'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"helicopter", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'helicopter'
      .setProperty("SizeX",80) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'helicopter'
      .setProperty("ImageUrl","./prob03_05/helicopter.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'helicopter'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'helicopter'
      .setProperty("SizeY",54) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'helicopter'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"time", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'time'
      .setProperty("X",-10.8) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'time'
      .setProperty("Y",13.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'time'
      .setProperty("Font","normal normal 14px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'time'
      ;

    _view._addElement(EJSS_DRAWING2D.arrowSet,"axes", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'axes'
      .setProperty("NumberOfElements",2) // EJsS HtmlView.HtmlView Page: setting property 'NumberOfElements' for element 'axes'
      .setProperty("SizeX",[4.0,0.0]) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'axes'
      .setProperty("X",-3.0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'axes'
      .setProperty("Y",0.6) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'axes'
      .setProperty("SizeY",[0.0,4.8]) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'axes'
      ;

    _view._addElement(EJSS_DRAWING2D.textSet,"axisLabels", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'axisLabels'
      .setProperty("NumberOfElements",2) // EJsS HtmlView.HtmlView Page: setting property 'NumberOfElements' for element 'axisLabels'
      .setProperty("X",[1.2,-3.5]) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'axisLabels'
      .setProperty("Y",[0.35, 5.8]) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'axisLabels'
      .setProperty("Font","font font 14px") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'axisLabels'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"dataPanel", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'dataPanel'
      .setProperty("Height",30) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'dataPanel'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'dataPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"xPanel", _view.dataPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xPanel'
      .setProperty("CSS",{"display":"inline"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'xPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"x", _view.xPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'x'
      .setProperty("CSS",{"font-weight":"bold"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'x'
      .setProperty("Text","x:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'x'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"xField", _view.xPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xField'
      .setProperty("Width",40) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'xField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'xField'
      .setProperty("Editable",false) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'xField'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"yPanel", _view.dataPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'yPanel'
      .setProperty("CSS",{"display":"inline"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'yPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"y", _view.yPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'y'
      .setProperty("CSS",{"font-weight":"bold"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'y'
      .setProperty("Text","y:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'y'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"yField", _view.yPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'yField'
      .setProperty("Width",35) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'yField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'yField'
      .setProperty("Editable",false) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'yField'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"tPanel", _view.dataPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'tPanel'
      .setProperty("CSS",{"display":"inline"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'tPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"t", _view.tPanel) // EJsS HtmlView.HtmlView Page: declaration of element 't'
      .setProperty("CSS",{"font-weight":"bold"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 't'
      .setProperty("Text","t:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 't'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"tField", _view.tPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'tField'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'tField'
      .setProperty("Format","0.0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'tField'
      .setProperty("Editable",false) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'tField'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttons", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'buttons'
      .setProperty("Height",40) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'buttons'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'buttons'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"playPause", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'playPause'
      .setProperty("Tooltip","Plays or pauses the animation") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'playPause'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'playPause'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'playPause'
      ;

    _view._addElement(EJSS_INTERFACE.button,"stepBack", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'stepBack'
      .setProperty("Tooltip","Decrements time by one step") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'stepBack'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepback.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'stepBack'
      ;

    _view._addElement(EJSS_INTERFACE.button,"step", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'step'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'step'
      ;

    _view._addElement(EJSS_INTERFACE.button,"reset", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'reset'
      .setProperty("Tooltip","Resets the simulation") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'reset'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'reset'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"summary", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'summary'
      .setProperty("Html","<p> A flying helicopter is shown in the animation <strong>(position is  given in meters and time is given in seconds)</strong>. </p> <ol type=\"a\"> <li>Sketch a graph of x position vs. time for the helicopter.</li> <li>Sketch a graph of y position vs. time for the helicopter.</li> <li>What is the x velocity of the helicopter at any instant?</li> <li>What is the y velocity of the helicopter at any instant?</li> <li>What is the speed of the helicopter at any instant?</li> </ol>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'summary'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new prob03_05("_topFrame","_ejs_library/",null);
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
