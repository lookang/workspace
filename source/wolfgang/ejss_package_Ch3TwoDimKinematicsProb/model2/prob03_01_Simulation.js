/* _inputParameters: an object with different values for the model parameters */
function prob03_01(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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

  var xmin; // EjsS Model.Variables.Var Table.xmin
  var xmax; // EjsS Model.Variables.Var Table.xmax
  var ymin; // EjsS Model.Variables.Var Table.ymin
  var ymax; // EjsS Model.Variables.Var Table.ymax
  var n; // EjsS Model.Variables.Var Table.n
  var xVert; // EjsS Model.Variables.Var Table.xVert
  var yHoriz; // EjsS Model.Variables.Var Table.yHoriz
  var msg; // EjsS Model.Variables.Var Table.msg

  var vectorA; // EjsS Model.Variables.Vector Vars.vectorA
  var vectorB; // EjsS Model.Variables.Vector Vars.vectorB
  var vectorC; // EjsS Model.Variables.Vector Vars.vectorC
  var vectorD; // EjsS Model.Variables.Vector Vars.vectorD
  var vectorE; // EjsS Model.Variables.Vector Vars.vectorE
  var vectorPos; // EjsS Model.Variables.Vector Vars.vectorPos
  var offset; // EjsS Model.Variables.Vector Vars.offset
  var yoffset; // EjsS Model.Variables.Vector Vars.yoffset

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      xmin : xmin,
      xmax : xmax,
      ymin : ymin,
      ymax : ymax,
      n : n,
      xVert : xVert,
      yHoriz : yHoriz,
      msg : msg,
      vectorA : vectorA,
      vectorB : vectorB,
      vectorC : vectorC,
      vectorD : vectorD,
      vectorE : vectorE,
      vectorPos : vectorPos,
      offset : offset,
      yoffset : yoffset
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.xmin != "undefined") xmin = json.xmin;
    if(typeof json.xmax != "undefined") xmax = json.xmax;
    if(typeof json.ymin != "undefined") ymin = json.ymin;
    if(typeof json.ymax != "undefined") ymax = json.ymax;
    if(typeof json.n != "undefined") n = json.n;
    if(typeof json.xVert != "undefined") xVert = json.xVert;
    if(typeof json.yHoriz != "undefined") yHoriz = json.yHoriz;
    if(typeof json.msg != "undefined") msg = json.msg;
    if(typeof json.vectorA != "undefined") vectorA = json.vectorA;
    if(typeof json.vectorB != "undefined") vectorB = json.vectorB;
    if(typeof json.vectorC != "undefined") vectorC = json.vectorC;
    if(typeof json.vectorD != "undefined") vectorD = json.vectorD;
    if(typeof json.vectorE != "undefined") vectorE = json.vectorE;
    if(typeof json.vectorPos != "undefined") vectorPos = json.vectorPos;
    if(typeof json.offset != "undefined") offset = json.offset;
    if(typeof json.yoffset != "undefined") yoffset = json.yoffset;
  };

  function _unserialize(json) { return _model.unserialize(json); }

  _model._userUnserialize = function(json) {
    _model._readParameters(json);
   _resetSolvers();
   _model.update();
  };

  _model.addToReset(function() {
    __pagesEnabled["Init Page"] = true;
  });

  _model.addToReset(function() {
    xmin = -19.0; // EjsS Model.Variables.Var Table.xmin
    xmax = 19.0; // EjsS Model.Variables.Var Table.xmax
    ymin = -19.0; // EjsS Model.Variables.Var Table.ymin
    ymax = 19.0; // EjsS Model.Variables.Var Table.ymax
    n = 37; // EjsS Model.Variables.Var Table.n
    xVert = new Array(n); // EjsS Model.Variables.Var Table.xVert
    yHoriz = new Array(n); // EjsS Model.Variables.Var Table.yHoriz
    msg = ""; // EjsS Model.Variables.Var Table.msg
  });

  _model.addToReset(function() {
    vectorA = [0.0,0.0]; // EjsS Model.Variables.Vector Vars.vectorA
    vectorB = [-12.0,0.0]; // EjsS Model.Variables.Vector Vars.vectorB
    vectorC = [-6.0,-14.0]; // EjsS Model.Variables.Vector Vars.vectorC
    vectorD = [-6.0,-14.0]; // EjsS Model.Variables.Vector Vars.vectorD
    vectorE = [15.0,0.0]; // EjsS Model.Variables.Vector Vars.vectorE
    vectorPos = [[0.0,0.0],[-12.0,0.0],[-6.0,-14.0],[-6.0,-14.0],[15.0,0.0]]; // EjsS Model.Variables.Vector Vars.vectorPos
    offset = 8.2; // EjsS Model.Variables.Vector Vars.offset
    yoffset = 8.0; // EjsS Model.Variables.Vector Vars.yoffset
  });

  if (_inputParameters) {
    _inputParameters = _model.parseInputParameters(_inputParameters);
    if (_inputParameters) _model.addToReset(function() { _model._readParameters(_inputParameters); });
  }

  _model.addToReset(function() {
    _model.setAutoplay(false);
    _model.setFPS(20);
    _model.setStepsPerDisplay(1);
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    // draw grid  // > Initialization.Init Page:1
    for (var i=xmin+1.0; i<xmax+1.0; i++) {  // > Initialization.Init Page:2
      xVert[i-xmin-1.0] = i;  // > Initialization.Init Page:3
      yHoriz[i-xmin-1.0] = i;  // > Initialization.Init Page:4
    }  // > Initialization.Init Page:5
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
    _view = new prob03_01_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.drawingPanel.linkProperty("MinimumX",  function() { return xmin; }, function(_v) { xmin = _v; } ); // HtmlView Page linking property 'MinimumX' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("MinimumY",  function() { return ymin; }, function(_v) { ymin = _v; } ); // HtmlView Page linking property 'MinimumY' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("MaximumY",  function() { return ymax; }, function(_v) { ymax = _v; } ); // HtmlView Page linking property 'MaximumY' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("MaximumX",  function() { return xmax; }, function(_v) { xmax = _v; } ); // HtmlView Page linking property 'MaximumX' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("BRMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // HtmlView Page linking property 'BRMessage' for element 'drawingPanel'
          _view.gridVert.linkProperty("NumberOfElements",  function() { return n; }, function(_v) { n = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'gridVert'
          _view.gridVert.linkProperty("X",  function() { return xVert; }, function(_v) { xVert = _v; } ); // HtmlView Page linking property 'X' for element 'gridVert'
          _view.gridVert.linkProperty("Y",  function() { return ymin; }, function(_v) { ymin = _v; } ); // HtmlView Page linking property 'Y' for element 'gridVert'
          _view.gridVert.linkProperty("SizeY",  function() { return ymax-ymin; } ); // HtmlView Page linking property 'SizeY' for element 'gridVert'
          _view.gridHoriz.linkProperty("NumberOfElements",  function() { return n; }, function(_v) { n = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'gridHoriz'
          _view.gridHoriz.linkProperty("SizeX",  function() { return xmax-xmin; } ); // HtmlView Page linking property 'SizeX' for element 'gridHoriz'
          _view.gridHoriz.linkProperty("X",  function() { return xmin; }, function(_v) { xmin = _v; } ); // HtmlView Page linking property 'X' for element 'gridHoriz'
          _view.gridHoriz.linkProperty("Y",  function() { return yHoriz; }, function(_v) { yHoriz = _v; } ); // HtmlView Page linking property 'Y' for element 'gridHoriz'
          _view.axisLabels.linkProperty("Text",  function() { return ["+x","-x","+y","-y"]; } ); // HtmlView Page linking property 'Text' for element 'axisLabels'
          _view.vectors.linkProperty("Position",  function() { return vectorPos; }, function(_v) { vectorPos = _v; } ); // HtmlView Page linking property 'Position' for element 'vectors'
          _view.vectors.linkProperty("Size",  function() { return [[8.0,8.0],[8.0,8.0],[8.0,8.0],[-8.0,8.0],[-8.0,-8.0]]; } ); // HtmlView Page linking property 'Size' for element 'vectors'
          _view.vectors.linkProperty("LineColor",  function() { return ["blue","red","green","magenta","cyan"]; } ); // HtmlView Page linking property 'LineColor' for element 'vectors'
          _view.vectorMarkers.linkProperty("Position",  function() { return vectorPos; }, function(_v) { vectorPos = _v; } ); // HtmlView Page linking property 'Position' for element 'vectorMarkers'
          _view.vectorMarkers.linkProperty("LineColor",  function() { return ["blue","red","green","magenta","cyan"]; } ); // HtmlView Page linking property 'LineColor' for element 'vectorMarkers'
          _view.vectorLabels.linkProperty("FillColor",  function() { return ["blue","red","green","magenta","cyan"]; } ); // HtmlView Page linking property 'FillColor' for element 'vectorLabels'
          _view.vectorLabels.linkProperty("X",  function() { return [vectorPos[0][0]+offset,vectorPos[1][0]+offset,vectorPos[2][0]+offset,vectorPos[3][0]-offset-1.0,vectorPos[4][0]-offset-1.0]; } ); // HtmlView Page linking property 'X' for element 'vectorLabels'
          _view.vectorLabels.linkProperty("Y",  function() { return [vectorPos[0][1]+offset,vectorPos[1][1]+offset,vectorPos[2][1]+offset,vectorPos[3][1]+offset,vectorPos[4][1]-offset-1.0]; } ); // HtmlView Page linking property 'Y' for element 'vectorLabels'
          _view.vectorLabels.linkProperty("Text",  function() { return ["A","B","C","D","E"]; } ); // HtmlView Page linking property 'Text' for element 'vectorLabels'
          _view.restart.setAction("OnClick", _reset); // HtmlView Page setting action 'OnClick' for element 'restart'
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
function prob03_01_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = prob03_01_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function prob03_01_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"simPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'simPanel'
      .setProperty("CSS",{"page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'simPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"title", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'title'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"titleLabel", _view.title) // EJsS HtmlView.HtmlView Page: declaration of element 'titleLabel'
      .setProperty("Text","<h2> Problem 3.1: Rank the 5 Vectors </h2>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"plot", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plot'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'plot'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.plot) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel'
      .setProperty("Height",350) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'drawingPanel'
      .setProperty("Width",350) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'drawingPanel'
      .setProperty("CSS",{"border-style":"solid",  "border-width":"1px"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'drawingPanel'
      .setProperty("Background","white") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'drawingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'drawingPanel'
      .setProperty("Foreground","none") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.segmentSet,"gridVert", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'gridVert'
      .setProperty("SizeX",0.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'gridVert'
      .setProperty("LineColor","lightgrey") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'gridVert'
      .setProperty("LineWidth",0.5) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'gridVert'
      ;

    _view._addElement(EJSS_DRAWING2D.segmentSet,"gridHoriz", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'gridHoriz'
      .setProperty("LineColor","lightgrey") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'gridHoriz'
      .setProperty("SizeY",0.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'gridHoriz'
      .setProperty("LineWidth",0.5) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'gridHoriz'
      ;

    _view._addElement(EJSS_DRAWING2D.arrowSet,"xyAxes", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xyAxes'
      .setProperty("NumberOfElements",4) // EJsS HtmlView.HtmlView Page: setting property 'NumberOfElements' for element 'xyAxes'
      .setProperty("SizeX",[16.0,-16.0,0.0,0.0]) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'xyAxes'
      .setProperty("X",0.0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'xyAxes'
      .setProperty("Y",0.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'xyAxes'
      .setProperty("SizeY",[0.0,0.0,16.0,-16.0]) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'xyAxes'
      ;

    _view._addElement(EJSS_DRAWING2D.textSet,"axisLabels", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'axisLabels'
      .setProperty("NumberOfElements",4) // EJsS HtmlView.HtmlView Page: setting property 'NumberOfElements' for element 'axisLabels'
      .setProperty("X",[16.5,-18.0,-1.2,-1.1]) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'axisLabels'
      .setProperty("Y",[-0.4,-0.4,16.7,-17.4]) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'axisLabels'
      .setProperty("Font","normal normal 15px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'axisLabels'
      ;

    _view._addElement(EJSS_DRAWING2D.arrowSet,"vectors", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vectors'
      .setProperty("NumberOfElements",5) // EJsS HtmlView.HtmlView Page: setting property 'NumberOfElements' for element 'vectors'
      ;

    _view._addElement(EJSS_DRAWING2D.shapeSet,"vectorMarkers", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vectorMarkers'
      .setProperty("NumberOfElements",5) // EJsS HtmlView.HtmlView Page: setting property 'NumberOfElements' for element 'vectorMarkers'
      .setProperty("FillColor","grey") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'vectorMarkers'
      .setProperty("SizeX",5) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'vectorMarkers'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'vectorMarkers'
      .setProperty("SizeY",5) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'vectorMarkers'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'vectorMarkers'
      ;

    _view._addElement(EJSS_DRAWING2D.textSet,"vectorLabels", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vectorLabels'
      .setProperty("NumberOfElements",5) // EJsS HtmlView.HtmlView Page: setting property 'NumberOfElements' for element 'vectorLabels'
      .setProperty("Font","normal normal 15px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'vectorLabels'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttons", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'buttons'
      .setProperty("Height",40) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'buttons'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'buttons'
      ;

    _view._addElement(EJSS_INTERFACE.button,"restart", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'restart'
      .setProperty("Tooltip","Restores vectors to their original positions") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'restart'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'restart'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"summary", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'summary'
      .setProperty("Html","<p> Five vectors are shown on the coordinate grid <strong>(position is given in  meters)</strong>. You can change the position of a vector by click-dragging at  the base of the vector. Click restart to return the vectors to their original  positions. </p> <ol type=\"a\"> <li>Rank the x components of the five vectors shown (smallest to largest).</li> <li>Rank the y components of the five vectors shown (smallest to largest).</li> <li>What are the components of the vector that results when Vector B is added to Vector D?</li> </ol>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'summary'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new prob03_01("_topFrame","_ejs_library/",null);
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
