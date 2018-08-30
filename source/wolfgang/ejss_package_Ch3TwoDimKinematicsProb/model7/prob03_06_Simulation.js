/* _inputParameters: an object with different values for the model parameters */
function prob03_06(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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
  var vx; // EjsS Model.Variables.Motion Vars.vx
  var vy; // EjsS Model.Variables.Motion Vars.vy
  var t; // EjsS Model.Variables.Motion Vars.t
  var dt; // EjsS Model.Variables.Motion Vars.dt
  var msg; // EjsS Model.Variables.Motion Vars.msg

  var simWidth; // EjsS Model.Variables.Drawing Vars.simWidth
  var plotWidth; // EjsS Model.Variables.Drawing Vars.plotWidth

  var _privateOdesList;
  var _ODEi_evolution1;

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
    __pagesEnabled["Pause"] = true;
  });

  _model.addToReset(function() {
    x = 20.0; // EjsS Model.Variables.Motion Vars.x
    y = 2.0; // EjsS Model.Variables.Motion Vars.y
    vx = 0.0; // EjsS Model.Variables.Motion Vars.vx
    vy = 0.0; // EjsS Model.Variables.Motion Vars.vy
    t = 0.0; // EjsS Model.Variables.Motion Vars.t
    dt = 0.5; // EjsS Model.Variables.Motion Vars.dt
    msg = ""; // EjsS Model.Variables.Motion Vars.msg
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
    _privateOdesList=[];
    _ODEi_evolution1 = _ODE_evolution1();
    _privateOdesList.push(_ODEi_evolution1);
  });

  _model.addToReset(function() {
    _model.setAutoplay(false);
    _model.setPauseOnPageExit(true);
    _model.setFPS(20);
    _model.setStepsPerDisplay(1);
  });

  _model.addToInitialization(function() {
    _initializeSolvers();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page"]) return;
    _ODEi_evolution1.step();
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  function _initializeSolvers() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].initializeSolver();
  }

  function _automaticResetSolvers() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].automaticResetSolver();
  }

  _model.resetSolvers = function() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].resetSolver();
  };

  function _getODE(_odeName) {
    if (_odeName=="Evol Page") return _ODEi_evolution1;
    return null;
  }

  function _getEventSolver(_odeName) {
    var ode = _getODE(_odeName);
    if (ode===null) return null;
    return ode.getEventSolver();
  }

  function _setSolverClass(_odeName, _engine) {
    var ode = _getODE(_odeName);
    if (ode===null) return;
    if (!_engine.setODE) {
      var classname = _engine.toLowerCase();
      if      (classname.indexOf("boga")>=0)   _engine = EJSS_ODE_SOLVERS.bogackiShampine23;
      else if (classname.indexOf("cash")>=0)   _engine = EJSS_ODE_SOLVERS.cashKarp45;
      else if (classname.indexOf("dopri5")>=0) _engine = EJSS_ODE_SOLVERS.dopri5;
      else if (classname.indexOf("dopri8")>=0) _engine = EJSS_ODE_SOLVERS.dopri853;
      else if (classname.indexOf("richa")>=0)  _engine = EJSS_ODE_SOLVERS.eulerRichardson;
      else if (classname.indexOf("euler")>=0)  _engine = EJSS_ODE_SOLVERS.euler;
      else if (classname.indexOf("fehlberg87")>=0) _engine = EJSS_ODE_SOLVERS.fehlberg87;
      else if (classname.indexOf("fehlberg8")>=0)  _engine = EJSS_ODE_SOLVERS.fehlberg8;
      else if (classname.indexOf("radau")>=0)   _engine = EJSS_ODE_SOLVERS.radau5;
      else if (classname.indexOf("runge")>=0)  _engine = EJSS_ODE_SOLVERS.rungeKutta4;
      else if (classname.indexOf("rk4")>=0)    _engine = EJSS_ODE_SOLVERS.rungeKutta4;
      else if (classname.indexOf("verlet")>=0) _engine = EJSS_ODE_SOLVERS.velocityVerlet;
    }
    if (_engine) ode.setSolverClass(_engine);
  }

  function _ODE_evolution1() {
    var __odeSelf = {};
    var __eventSolver;
    var __solverClass = EJSS_ODE_SOLVERS.rungeKutta4;
    var __state=[];
    var _ODE_evolution1_Event1;
    var __ignoreErrors=false;
    var __mustInitialize=true;
    var __isEnabled=true;
    var __mustUserReinitialize=false;
    var __mustReinitialize=true;


    __odeSelf.setSolverClass = function(__aSolverClass) {
      __solverClass = __aSolverClass;
      __instantiateSolver();
    };

    function __instantiateSolver() {
      __state=[];
      __pushState();
      __eventSolver = EJSS_ODE_SOLVERS.interpolatorEventSolver(__solverClass(),__odeSelf);
      __mustInitialize = true;
    }

    __odeSelf.setEnabled = function(_enabled) { __isEnabled = _enabled; };

    __odeSelf.getIndependentVariableValue = function() { return __eventSolver.getIndependentVariableValue(); };

    __odeSelf.getInternalStepSize = function() { return __eventSolver.getInternalStepSize(); };

    __odeSelf.isAccelerationIndependentOfVelocity = function() { return false; };

    __odeSelf.initializeSolver = function() {
      if (__arraysChanged()) { __instantiateSolver(); __odeSelf.initializeSolver(); return; }
      __pushState();
      __eventSolver.initialize(dt);
      __eventSolver.setBestInterpolation(false);
      __eventSolver.setMaximumInternalSteps(10000);
      __eventSolver.removeAllEvents();
      if (__pagesEnabled["Pause"]) __eventSolver.addEvent(_ODE_evolution1_Event1());
      __eventSolver.setEstimateFirstStep(false);
      __eventSolver.setEnableExceptions(false);
      __eventSolver.setTolerances(0.00001,0.00001);
      __mustReinitialize = true;
      __mustInitialize = false;
    };

    function __pushState() {
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        if (__state[__cIn]!=x) __mustReinitialize = true;
        __state[__cIn++] = x;
        if (__state[__cIn]!=vx) __mustReinitialize = true;
        __state[__cIn++] = vx;
        if (__state[__cIn]!=y) __mustReinitialize = true;
        __state[__cIn++] = y;
        if (__state[__cIn]!=vy) __mustReinitialize = true;
        __state[__cIn++] = vy;
        if (__state[__cIn]!=t) __mustReinitialize = true;
        __state[__cIn++] = t;
    }

    function __arraysChanged () {
      return false;
    }

    __odeSelf.getEventSolver = function() {
      return __eventSolver;
    };

    __odeSelf.resetSolver = function() {
      __mustUserReinitialize = true;
    };

    __odeSelf.automaticResetSolver = function() {
      __mustReinitialize = true;
    };

    function __errorAction () {
      if (__ignoreErrors) return;
      console.log (__eventSolver.getErrorMessage());
      _pause();
      // Make sure the solver is reinitialized;
      __mustReinitialize = true;
    }

    __odeSelf.step = function() { return __privateStep(false); };

    __odeSelf.solverStep = function() { return __privateStep(true); };

    function __privateStep(__takeMaximumStep) {
      if (!__isEnabled) return 0;
      if (dt===0) return 0;
      if (__mustInitialize) __odeSelf.initializeSolver();
      if (__arraysChanged()) { __instantiateSolver(); __odeSelf.initializeSolver(); }
      __eventSolver.setStepSize(dt);
      __eventSolver.setInternalStepSize(dt);
      __eventSolver.setMaximumInternalSteps(10000);
      __eventSolver.setTolerances(0.00001,0.00001);
      __pushState();
      if (__mustUserReinitialize) { 
        __eventSolver.userReinitialize();
        __mustUserReinitialize = false;
        __mustReinitialize = false;
        if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      }
      else if (__mustReinitialize) { 
        __eventSolver.reinitialize();
        __mustReinitialize = false;
        if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      }
      var __stepTaken = __takeMaximumStep ? __eventSolver.maxStep() : __eventSolver.step();
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        x = __state[__cOut++];
        vx = __state[__cOut++];
        y = __state[__cOut++];
        vy = __state[__cOut++];
        t = __state[__cOut++];
      // Check for error
      if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      return __stepTaken;
    }

    __odeSelf.getState = function() { return __state; };

    __odeSelf.getRate = function(_aState,_aRate) {
      _aRate[_aRate.length-1] = 0.0; // In case the prelim code returns
      var __index=-1; // so that it can be used in preliminary code
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var x = _aState[__cOut++];
        var vx = _aState[__cOut++];
        var y = _aState[__cOut++];
        var vy = _aState[__cOut++];
        var t = _aState[__cOut++];
      // Preliminary code: Code to be executed before rate equations are evaluated
        var ax = 0.0;  // > Preliminary code for ODE.Evol Page:1
        if (t < 60.0) { ax = -0.005; }  // > Preliminary code for ODE.Evol Page:2
        else { ax = 0.0; }  // > Preliminary code for ODE.Evol Page:3
        var ay = 0.0;  // > Preliminary code for ODE.Evol Page:4
        if (t < 45.0) { ay = 0.005; }  // > Preliminary code for ODE.Evol Page:5
        else if (45.0 <= t && t < 90.0) { ay = -0.005; }  // > Preliminary code for ODE.Evol Page:6
        else { ay = 0.0; }  // > Preliminary code for ODE.Evol Page:7
      // Compute the rate
        var __cRate=0;
        _aRate[__cRate++] = vx; // Rate for ODE: Evol Page:x
        _aRate[__cRate++] = ax; // Rate for ODE: Evol Page:vx
        _aRate[__cRate++] = vy; // Rate for ODE: Evol Page:y
        _aRate[__cRate++] = ay; // Rate for ODE: Evol Page:vy
        _aRate[__cRate++] = 1; // independent variable
        return _aRate;
    }; //end of getRate

    _ODE_evolution1_Event1 = function() {
      var _eventSelf = {};

      _eventSelf.getTypeOfEvent = function() { return EJSS_ODE_SOLVERS.EVENT_TYPE.STATE_EVENT; };

      _eventSelf.getRootFindingMethod = function() { return EJSS_ODE_SOLVERS.EVENT_METHOD.BISECTION; };

      _eventSelf.getMaxIterations = function() { return 100; };

      _eventSelf.getTolerance = function() { return 1.0e-5; };

      _eventSelf.evaluate = function(_aState) { 
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var x = _aState[__cOut++];
        var vx = _aState[__cOut++];
        var y = _aState[__cOut++];
        var vy = _aState[__cOut++];
        var t = _aState[__cOut++];
        var min = 1.0e-5;  // > Event zero-condition for page Evol Page:1
        if (200.0 - t < min) { min = 200.0 - t; }  // > Event zero-condition for page Evol Page:2
        return min;  // > Event zero-condition for page Evol Page:3
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        x = __state[__cOut++];
        vx = __state[__cOut++];
        y = __state[__cOut++];
        vy = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = x;
        __state[__cIn++] = vx;
        __state[__cIn++] = y;
        __state[__cIn++] = vy;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        _pause();  // > Event action for page Evol Page:1
        msg = "End of animation.";  // > Event action for page Evol Page:2
        return true;
      }

      return _eventSelf;
    }; // End of event

    __instantiateSolver();

    return __odeSelf;
  }

  function _historic_x(__time) {
    var __index = 0;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_vx(__time) {
    var __index = 0 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_y(__time) {
    var __index = 0 + 1 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_vy(__time) {
    var __index = 0 + 1 + 1 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

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
    _view = new prob03_06_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.xPlottingPanel.linkProperty("Width",  function() { return plotWidth; }, function(_v) { plotWidth = _v; } ); // HtmlView Page linking property 'Width' for element 'xPlottingPanel'
          _view.xtrail.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'InputX' for element 'xtrail'
          _view.xtrail.linkProperty("InputY",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'InputY' for element 'xtrail'
          _view.xdot.linkProperty("X",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'X' for element 'xdot'
          _view.xdot.linkProperty("Y",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'Y' for element 'xdot'
          _view.yPlottingPanel.linkProperty("Width",  function() { return plotWidth; }, function(_v) { plotWidth = _v; } ); // HtmlView Page linking property 'Width' for element 'yPlottingPanel'
          _view.ytrail.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'InputX' for element 'ytrail'
          _view.ytrail.linkProperty("InputY",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'InputY' for element 'ytrail'
          _view.ydot.linkProperty("X",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'X' for element 'ydot'
          _view.ydot.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'ydot'
          _view.drawingPanel.linkProperty("Width",  function() { return simWidth; }, function(_v) { simWidth = _v; } ); // HtmlView Page linking property 'Width' for element 'drawingPanel'
          _view.drawingPanel.linkProperty("TRMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // HtmlView Page linking property 'TRMessage' for element 'drawingPanel'
          _view.ground.linkProperty("SizeX",  function() { return 2*27.0; } ); // HtmlView Page linking property 'SizeX' for element 'ground'
          _view.balloon.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'balloon'
          _view.balloon.linkProperty("Y",  function() { return y+3.0; } ); // HtmlView Page linking property 'Y' for element 'balloon'
          _view.time.linkProperty("Text",  function() { return "Time: " + t.toFixed(1); } ); // HtmlView Page linking property 'Text' for element 'time'
          _view.playPause.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'playPause'
          _view.playPause.linkProperty("State",  function() { return _isPaused; }, function(_v) { _isPaused = _v; } ); // HtmlView Page linking property 'State' for element 'playPause'
          _view.playPause.setAction("OnClick", _play); // HtmlView Page setting action 'OnClick' for element 'playPause'
          _view.step.setAction("OnClick", _step); // HtmlView Page setting action 'OnClick' for element 'step'
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
function prob03_06_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = prob03_06_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function prob03_06_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"simPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'simPanel'
      .setProperty("CSS",{"page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'simPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"title", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'title'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"titleLabel", _view.title) // EJsS HtmlView.HtmlView Page: declaration of element 'titleLabel'
      .setProperty("Text","<h2> Problem 3.6: A Hot-Air Balloon Takes Off </h2>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"topPlots", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'topPlots'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'topPlots'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"xPlottingPanel", _view.topPlots) // EJsS HtmlView.HtmlView Page: declaration of element 'xPlottingPanel'
      .setProperty("Height",180) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'xPlottingPanel'
      .setProperty("MinimumX",0.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'xPlottingPanel'
      .setProperty("CSS",{"display":"inline"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'xPlottingPanel'
      .setProperty("Gutters",[40,10,30,35]) // EJsS HtmlView.HtmlView Page: setting property 'Gutters' for element 'xPlottingPanel'
      .setProperty("MinimumY",-50.2) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'xPlottingPanel'
      .setProperty("TitleY","x (m)") // EJsS HtmlView.HtmlView Page: setting property 'TitleY' for element 'xPlottingPanel'
      .setProperty("TitleX","t (s)") // EJsS HtmlView.HtmlView Page: setting property 'TitleX' for element 'xPlottingPanel'
      .setProperty("MaximumY",50.2) // EJsS HtmlView.HtmlView Page: setting property 'MaximumY' for element 'xPlottingPanel'
      .setProperty("MaximumX",200.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'xPlottingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"xtrail", _view.xPlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xtrail'
      .setProperty("LineColor","blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'xtrail'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"xdot", _view.xPlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xdot'
      .setProperty("FillColor","red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'xdot'
      .setProperty("SizeX",6) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'xdot'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'xdot'
      .setProperty("SizeY",6) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'xdot'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"yPlottingPanel", _view.topPlots) // EJsS HtmlView.HtmlView Page: declaration of element 'yPlottingPanel'
      .setProperty("Height",180) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'yPlottingPanel'
      .setProperty("MinimumX",0.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'yPlottingPanel'
      .setProperty("CSS",{"display":"inline"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'yPlottingPanel'
      .setProperty("Gutters",[40,10,30,35]) // EJsS HtmlView.HtmlView Page: setting property 'Gutters' for element 'yPlottingPanel'
      .setProperty("MinimumY",0.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'yPlottingPanel'
      .setProperty("TitleY","y (m)") // EJsS HtmlView.HtmlView Page: setting property 'TitleY' for element 'yPlottingPanel'
      .setProperty("TitleX","t (s)") // EJsS HtmlView.HtmlView Page: setting property 'TitleX' for element 'yPlottingPanel'
      .setProperty("MaximumY",15.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumY' for element 'yPlottingPanel'
      .setProperty("MaximumX",200.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'yPlottingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"ytrail", _view.yPlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ytrail'
      .setProperty("LineColor","blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'ytrail'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"ydot", _view.yPlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ydot'
      .setProperty("FillColor","red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'ydot'
      .setProperty("SizeX",6) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'ydot'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'ydot'
      .setProperty("SizeY",6) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'ydot'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"bottomPlot", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'bottomPlot'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'bottomPlot'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.bottomPlot) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel'
      .setProperty("Height",210) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'drawingPanel'
      .setProperty("MinimumX",-27.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'drawingPanel'
      .setProperty("CSS",{"border-style":"solid",  "border-width":"1px"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'drawingPanel'
      .setProperty("MinimumY",-1.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'drawingPanel'
      .setProperty("Background","white") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'drawingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'drawingPanel'
      .setProperty("Foreground","none") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'drawingPanel'
      .setProperty("MaximumY",22.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumY' for element 'drawingPanel'
      .setProperty("MaximumX",27.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"ground", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ground'
      .setProperty("FillColor","green") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'ground'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'ground'
      .setProperty("Y",-0.5) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'ground'
      .setProperty("SizeY",1.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'ground'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"balloon", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'balloon'
      .setProperty("SizeX",60) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'balloon'
      .setProperty("ImageUrl","./prob03_06/balloon_color_sm.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'balloon'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'balloon'
      .setProperty("SizeY",80) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'balloon'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"time", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'time'
      .setProperty("X",-26.4) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'time'
      .setProperty("Y",20.3) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'time'
      .setProperty("Font","normal normal 14px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'time'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttons", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'buttons'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'buttons'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"playPause", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'playPause'
      .setProperty("TextOn","playPause") // EJsS HtmlView.HtmlView Page: setting property 'TextOn' for element 'playPause'
      .setProperty("Tooltip","Plays/pauses the animation") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'playPause'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'playPause'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'playPause'
      ;

    _view._addElement(EJSS_INTERFACE.button,"step", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'step'
      .setProperty("Tooltip","Increments time by one step") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'step'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'step'
      ;

    _view._addElement(EJSS_INTERFACE.button,"reset", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'reset'
      .setProperty("Tooltip","Resets the simulation") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'reset'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'reset'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"summary", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'summary'
      .setProperty("Html","<p> A hot-air balloon travels as shown in the animation  <strong>(position is given in meters and time is given in seconds)</strong>.  The x and y positions of the hot-air balloon's basket are shown in  the graphs. </p> <ol type=\"a\"> <li>During approximately what time interval is the magnitude of the y  velocity increasing?</li> <li>During approximately what time interval is the magnitude of the y  velocity decreasing?</li> <li>At approximately what instant of time does the y acceleration  change from positive to negative?</li> <li>What is the y velocity from t = 87 s until t = 200 s?</li> <li>What is the y acceleration from t = 87 s until t = 200 s?</li> <li>What is the x velocity from t = 87 s until t = 200 s?</li> <li>What is the x acceleration from t = 87 s until t = 200 s?</li> <li>What is the x displacement from t = 0 s until t = 200 s?</li> <li>What is the y displacement from t = 0 s until t = 200 s?</li> </ol>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'summary'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new prob03_06("_topFrame","_ejs_library/",null);
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
