/* _inputParameters: an object with different values for the model parameters */
function prob03_10(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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

  var xCar; // EjsS Model.Variables.Car Vars.xCar
  var vCar; // EjsS Model.Variables.Car Vars.vCar
  var t; // EjsS Model.Variables.Car Vars.t
  var dt; // EjsS Model.Variables.Car Vars.dt
  var msg; // EjsS Model.Variables.Car Vars.msg

  var x; // EjsS Model.Variables.Projectile Vars.x
  var y; // EjsS Model.Variables.Projectile Vars.y
  var v; // EjsS Model.Variables.Projectile Vars.v
  var ang; // EjsS Model.Variables.Projectile Vars.ang
  var vx; // EjsS Model.Variables.Projectile Vars.vx
  var vy; // EjsS Model.Variables.Projectile Vars.vy
  var ay; // EjsS Model.Variables.Projectile Vars.ay

  var n; // EjsS Model.Variables.Ghost Vars.n
  var ghostX; // EjsS Model.Variables.Ghost Vars.ghostX
  var ghostY; // EjsS Model.Variables.Ghost Vars.ghostY
  var next; // EjsS Model.Variables.Ghost Vars.next
  var counter; // EjsS Model.Variables.Ghost Vars.counter

  var _privateOdesList;
  var _ODEi_evolution1;

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      xCar : xCar,
      vCar : vCar,
      t : t,
      dt : dt,
      msg : msg,
      x : x,
      y : y,
      v : v,
      ang : ang,
      vx : vx,
      vy : vy,
      ay : ay,
      n : n,
      ghostX : ghostX,
      ghostY : ghostY,
      next : next,
      counter : counter
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.xCar != "undefined") xCar = json.xCar;
    if(typeof json.vCar != "undefined") vCar = json.vCar;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.msg != "undefined") msg = json.msg;
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.y != "undefined") y = json.y;
    if(typeof json.v != "undefined") v = json.v;
    if(typeof json.ang != "undefined") ang = json.ang;
    if(typeof json.vx != "undefined") vx = json.vx;
    if(typeof json.vy != "undefined") vy = json.vy;
    if(typeof json.ay != "undefined") ay = json.ay;
    if(typeof json.n != "undefined") n = json.n;
    if(typeof json.ghostX != "undefined") ghostX = json.ghostX;
    if(typeof json.ghostY != "undefined") ghostY = json.ghostY;
    if(typeof json.next != "undefined") next = json.next;
    if(typeof json.counter != "undefined") counter = json.counter;
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
    __pagesEnabled["Launch Projectile"] = true;
    __pagesEnabled["Ghost Images"] = true;
    __pagesEnabled["Car Hit"] = true;
    __pagesEnabled["Ground Hit"] = true;
  });

  _model.addToReset(function() {
    xCar = -12.0; // EjsS Model.Variables.Car Vars.xCar
    vCar = 12.0; // EjsS Model.Variables.Car Vars.vCar
    t = -1.0; // EjsS Model.Variables.Car Vars.t
    dt = 0.02; // EjsS Model.Variables.Car Vars.dt
    msg = ""; // EjsS Model.Variables.Car Vars.msg
  });

  _model.addToReset(function() {
    x = 0.0; // EjsS Model.Variables.Projectile Vars.x
    y = 0.0; // EjsS Model.Variables.Projectile Vars.y
    v = 20.0; // EjsS Model.Variables.Projectile Vars.v
    ang = 45.0; // EjsS Model.Variables.Projectile Vars.ang
    vx = 0.0; // EjsS Model.Variables.Projectile Vars.vx
    vy = 0.0; // EjsS Model.Variables.Projectile Vars.vy
    ay = 0.0; // EjsS Model.Variables.Projectile Vars.ay
  });

  _model.addToReset(function() {
    n = 50.0; // EjsS Model.Variables.Ghost Vars.n
    ghostX = new Array(n); // EjsS Model.Variables.Ghost Vars.ghostX
    (function () {
      var _i0;
      for (_i0=0; _i0<n; _i0+=1) {  // EjsS Model.Variables.Ghost Vars.ghostX
        ghostX[_i0] = -100.0;  // EjsS Model.Variables.Ghost Vars.ghostX
      }
    }());
    ghostY = new Array(n); // EjsS Model.Variables.Ghost Vars.ghostY
    (function () {
      var _i0;
      for (_i0=0; _i0<n; _i0+=1) {  // EjsS Model.Variables.Ghost Vars.ghostY
        ghostY[_i0] = 0.0;  // EjsS Model.Variables.Ghost Vars.ghostY
      }
    }());
    next = 0.0; // EjsS Model.Variables.Ghost Vars.next
    counter = 0; // EjsS Model.Variables.Ghost Vars.counter
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
    if (!__pagesEnabled["Init Page"]) return;
    t = -1.0;  // > Initialization.Init Page:1
    vx = 0.0;  // > Initialization.Init Page:2
    vy = 0.0;  // > Initialization.Init Page:3
    ay = 0.0;  // > Initialization.Init Page:4
    xCar = -12.0;  // > Initialization.Init Page:5
    x = 0.0;  // > Initialization.Init Page:6
    y = 0.0;  // > Initialization.Init Page:7
    msg = "";  // > Initialization.Init Page:8
    counter = 0;  // > Initialization.Init Page:9
    next = 0.0;  // > Initialization.Init Page:10
    // reset ghost images to be off screen  // > Initialization.Init Page:11
    for (var i=0; i<n; i++) { ghostX[i] = -100.0; ghostY[i] = 0.0; }  // > Initialization.Init Page:12
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
    var _ODE_evolution1_Event2;
    var _ODE_evolution1_Event3;
    var _ODE_evolution1_Event4;
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
      if (__pagesEnabled["Launch Projectile"]) __eventSolver.addEvent(_ODE_evolution1_Event1());
      if (__pagesEnabled["Ghost Images"]) __eventSolver.addEvent(_ODE_evolution1_Event2());
      if (__pagesEnabled["Car Hit"]) __eventSolver.addEvent(_ODE_evolution1_Event3());
      if (__pagesEnabled["Ground Hit"]) __eventSolver.addEvent(_ODE_evolution1_Event4());
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
        if (__state[__cIn]!=xCar) __mustReinitialize = true;
        __state[__cIn++] = xCar;
        if (__state[__cIn]!=x) __mustReinitialize = true;
        __state[__cIn++] = x;
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
        xCar = __state[__cOut++];
        x = __state[__cOut++];
        y = __state[__cOut++];
        vy = __state[__cOut++];
        t = __state[__cOut++];
      // Check for error
      if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      return __stepTaken;
    }

    __odeSelf.getState = function() { return __state; };

    __odeSelf.getRate = function(_aState,_aRate) {
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var xCar = _aState[__cOut++];
        var x = _aState[__cOut++];
        var y = _aState[__cOut++];
        var vy = _aState[__cOut++];
        var t = _aState[__cOut++];
      // Compute the rate
        var __cRate=0;
        _aRate[__cRate++] = vCar; // Rate for ODE: Evol Page:xCar
        _aRate[__cRate++] = vx; // Rate for ODE: Evol Page:x
        _aRate[__cRate++] = vy; // Rate for ODE: Evol Page:y
        _aRate[__cRate++] = ay; // Rate for ODE: Evol Page:vy
        _aRate[__cRate++] = 1; // independent variable
        return _aRate;
    }; //end of getRate

    _ODE_evolution1_Event1 = function() {
      var _eventSelf = {};

      _eventSelf.getTypeOfEvent = function() { return EJSS_ODE_SOLVERS.EVENT_TYPE.CROSSING_EVENT; };

      _eventSelf.getRootFindingMethod = function() { return EJSS_ODE_SOLVERS.EVENT_METHOD.BISECTION; };

      _eventSelf.getMaxIterations = function() { return 100; };

      _eventSelf.getTolerance = function() { return 1.0e-5; };

      _eventSelf.evaluate = function(_aState) { 
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var xCar = _aState[__cOut++];
        var x = _aState[__cOut++];
        var y = _aState[__cOut++];
        var vy = _aState[__cOut++];
        var t = _aState[__cOut++];
        return xCar;  // > Event zero-condition for page Evol Page:1
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        xCar = __state[__cOut++];
        x = __state[__cOut++];
        y = __state[__cOut++];
        vy = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = xCar;
        __state[__cIn++] = x;
        __state[__cIn++] = y;
        __state[__cIn++] = vy;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        vx = v*Math.cos(ang*Math.PI / 180.0);  // > Event action for page Evol Page:1
        vy = v*Math.sin(ang*Math.PI / 180.0);  // > Event action for page Evol Page:2
        ay = -9.8;  // > Event action for page Evol Page:3
        return false;
      }

      return _eventSelf;
    }; // End of event

    _ODE_evolution1_Event2 = function() {
      var _eventSelf = {};

      _eventSelf.getTypeOfEvent = function() { return EJSS_ODE_SOLVERS.EVENT_TYPE.STATE_EVENT; };

      _eventSelf.getRootFindingMethod = function() { return EJSS_ODE_SOLVERS.EVENT_METHOD.BISECTION; };

      _eventSelf.getMaxIterations = function() { return 100; };

      _eventSelf.getTolerance = function() { return 1.0e-5; };

      _eventSelf.evaluate = function(_aState) { 
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var xCar = _aState[__cOut++];
        var x = _aState[__cOut++];
        var y = _aState[__cOut++];
        var vy = _aState[__cOut++];
        var t = _aState[__cOut++];
        var min = 1.0e-5;  // > Event zero-condition for page Evol Page:1
        if (next-t < min) { min = next - t; }  // > Event zero-condition for page Evol Page:2
        return min;  // > Event zero-condition for page Evol Page:3
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        xCar = __state[__cOut++];
        x = __state[__cOut++];
        y = __state[__cOut++];
        vy = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = xCar;
        __state[__cIn++] = x;
        __state[__cIn++] = y;
        __state[__cIn++] = vy;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        ghostX[counter] = x;  // > Event action for page Evol Page:1
        ghostY[counter] = y;  // > Event action for page Evol Page:2
        counter++;  // > Event action for page Evol Page:3
        next+=0.2;  // > Event action for page Evol Page:4
        return false;
      }

      return _eventSelf;
    }; // End of event

    _ODE_evolution1_Event3 = function() {
      var _eventSelf = {};

      _eventSelf.getTypeOfEvent = function() { return EJSS_ODE_SOLVERS.EVENT_TYPE.CROSSING_EVENT; };

      _eventSelf.getRootFindingMethod = function() { return EJSS_ODE_SOLVERS.EVENT_METHOD.BISECTION; };

      _eventSelf.getMaxIterations = function() { return 100; };

      _eventSelf.getTolerance = function() { return 1.0e-5; };

      _eventSelf.evaluate = function(_aState) { 
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var xCar = _aState[__cOut++];
        var x = _aState[__cOut++];
        var y = _aState[__cOut++];
        var vy = _aState[__cOut++];
        var t = _aState[__cOut++];
        return y;  // > Event zero-condition for page Evol Page:1
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        xCar = __state[__cOut++];
        x = __state[__cOut++];
        y = __state[__cOut++];
        vy = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = xCar;
        __state[__cIn++] = x;
        __state[__cIn++] = y;
        __state[__cIn++] = vy;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        if (xCar - 0.7 <= x && x <= xCar + 0.7) {  // > Event action for page Evol Page:1
          _pause();  // > Event action for page Evol Page:2
          msg = "Car hit! Nice job!";  // > Event action for page Evol Page:3
        }  // > Event action for page Evol Page:4
        return false;
      }

      return _eventSelf;
    }; // End of event

    _ODE_evolution1_Event4 = function() {
      var _eventSelf = {};

      _eventSelf.getTypeOfEvent = function() { return EJSS_ODE_SOLVERS.EVENT_TYPE.CROSSING_EVENT; };

      _eventSelf.getRootFindingMethod = function() { return EJSS_ODE_SOLVERS.EVENT_METHOD.BISECTION; };

      _eventSelf.getMaxIterations = function() { return 100; };

      _eventSelf.getTolerance = function() { return 1.0e-5; };

      _eventSelf.evaluate = function(_aState) { 
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var xCar = _aState[__cOut++];
        var x = _aState[__cOut++];
        var y = _aState[__cOut++];
        var vy = _aState[__cOut++];
        var t = _aState[__cOut++];
        return y + 3.5;  // > Event zero-condition for page Evol Page:1
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        xCar = __state[__cOut++];
        x = __state[__cOut++];
        y = __state[__cOut++];
        vy = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = xCar;
        __state[__cIn++] = x;
        __state[__cIn++] = y;
        __state[__cIn++] = vy;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        _pause();  // > Event action for page Evol Page:1
        msg = "Car missed, try again!";  // > Event action for page Evol Page:2
        return true;
      }

      return _eventSelf;
    }; // End of event

    __instantiateSolver();

    return __odeSelf;
  }

  function _historic_xCar(__time) {
    var __index = 0;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_x(__time) {
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
    _view = new prob03_10_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.drawingPanel.linkProperty("BRMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // HtmlView Page linking property 'BRMessage' for element 'drawingPanel'
          _view.ghostImages.linkProperty("NumberOfElements",  function() { return n; }, function(_v) { n = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'ghostImages'
          _view.ghostImages.linkProperty("X",  function() { return ghostX; }, function(_v) { ghostX = _v; } ); // HtmlView Page linking property 'X' for element 'ghostImages'
          _view.ghostImages.linkProperty("Y",  function() { return ghostY; }, function(_v) { ghostY = _v; } ); // HtmlView Page linking property 'Y' for element 'ghostImages'
          _view.car.linkProperty("X",  function() { return xCar; }, function(_v) { xCar = _v; } ); // HtmlView Page linking property 'X' for element 'car'
          _view.carHitBox.linkProperty("X",  function() { return xCar; }, function(_v) { xCar = _v; } ); // HtmlView Page linking property 'X' for element 'carHitBox'
          _view.projectile.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'projectile'
          _view.projectile.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'projectile'
          _view.time.linkProperty("Text",  function() { return "Time: " + t.toFixed(2); } ); // HtmlView Page linking property 'Text' for element 'time'
          _view.vSlider.linkProperty("Value",  function() { return v; }, function(_v) { v = _v; } ); // HtmlView Page linking property 'Value' for element 'vSlider'
          _view.vSlider.setAction("OnChange", function() {
  _pause();
  _initialize();

}); // HtmlView Page setting action 'OnChange' for element 'vSlider'
          _view.vField.linkProperty("Value",  function() { return v; }, function(_v) { v = _v; } ); // HtmlView Page linking property 'Value' for element 'vField'
          _view.vField.setAction("OnChange", function() {
  _pause();
  v = Math.min(v, 25.0);
  v = Math.max(v, 5.0);
  _initialize();

}); // HtmlView Page setting action 'OnChange' for element 'vField'
          _view.angSlider.linkProperty("Value",  function() { return ang; }, function(_v) { ang = _v; } ); // HtmlView Page linking property 'Value' for element 'angSlider'
          _view.angSlider.setAction("OnChange", function() {
  _pause();
  _initialize();

}); // HtmlView Page setting action 'OnChange' for element 'angSlider'
          _view.angField.linkProperty("Value",  function() { return ang; }, function(_v) { ang = _v; } ); // HtmlView Page linking property 'Value' for element 'angField'
          _view.angField.setAction("OnChange", function() {
  _pause();
  ang = Math.min(ang, 65.0);
  ang = Math.max(ang, 10.0);
  _initialize();

}); // HtmlView Page setting action 'OnChange' for element 'angField'
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
function prob03_10_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = prob03_10_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function prob03_10_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"simPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'simPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"title", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'title'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"titleLabel", _view.title) // EJsS HtmlView.HtmlView Page: declaration of element 'titleLabel'
      .setProperty("Text","<h2> Problem 3.10: Aim the Projectile to Hit the Moving Lamborghini </h2>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"plot", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plot'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'plot'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.plot) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel'
      .setProperty("Height",220) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'drawingPanel'
      .setProperty("Width",350) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'drawingPanel'
      .setProperty("MinimumX",-3.3) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'drawingPanel'
      .setProperty("CSS",{"border-style":"solid",  "border-width":"1px"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'drawingPanel'
      .setProperty("MinimumY",-7.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'drawingPanel'
      .setProperty("AutoScaleX",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'drawingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'drawingPanel'
      .setProperty("Foreground","none") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'drawingPanel'
      .setProperty("MaximumY",25.8) // EJsS HtmlView.HtmlView Page: setting property 'MaximumY' for element 'drawingPanel'
      .setProperty("MaximumX",49.1) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"road", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'road'
      .setProperty("FillColor","grey") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'road'
      .setProperty("SizeX",60.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'road'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'road'
      .setProperty("X",23.0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'road'
      .setProperty("Y",-6.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'road'
      .setProperty("SizeY",6.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'road'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"ground", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ground'
      .setProperty("FillColor","rgb(186,149,44)") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'ground'
      .setProperty("SizeX",60.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'ground'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'ground'
      .setProperty("X",23.0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'ground'
      .setProperty("Y",-1.5) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'ground'
      .setProperty("SizeY",3.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'ground'
      ;

    _view._addElement(EJSS_DRAWING2D.shapeSet,"ghostImages", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ghostImages'
      .setProperty("FillColor","rgb(239,191,190)") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'ghostImages'
      .setProperty("SizeX",8) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'ghostImages'
      .setProperty("ShapeType","WHEEL") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'ghostImages'
      .setProperty("SizeY",8) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'ghostImages'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'ghostImages'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"car", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'car'
      .setProperty("SizeX",142) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'car'
      .setProperty("ImageUrl","./prob03_10/r_ghini.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'car'
      .setProperty("Y",-3.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'car'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'car'
      .setProperty("SizeY",39) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'car'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"carHitBox", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'carHitBox'
      .setProperty("FillColor","yellow") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'carHitBox'
      .setProperty("SizeX",1.4) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'carHitBox'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'carHitBox'
      .setProperty("Y",-0.5) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'carHitBox'
      .setProperty("SizeY",1.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'carHitBox'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"projectile", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'projectile'
      .setProperty("FillColor","red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'projectile'
      .setProperty("SizeX",8) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'projectile'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'projectile'
      .setProperty("SizeY",8) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'projectile'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"time", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'time'
      .setProperty("RelativePosition","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'time'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'time'
      .setProperty("X",-1) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'time'
      .setProperty("Y",23.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'time'
      .setProperty("Font","normal normal 14px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'time'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"inputPanel", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'inputPanel'
      .setProperty("Height",60) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'inputPanel'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'inputPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"vPanel", _view.inputPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"vLabel", _view.vPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vLabel'
      .setProperty("Width",160) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'vLabel'
      .setProperty("Text","v intial (m/s):") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'vLabel'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"vSlider", _view.vPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vSlider'
      .setProperty("Maximum",25.0) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'vSlider'
      .setProperty("Minimum",5.0) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'vSlider'
      .setProperty("Step",0.001) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'vSlider'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"vField", _view.vPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vField'
      .setProperty("Width",35) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'vField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'vField'
      .setProperty("Editable",true) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'vField'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"angPanel", _view.inputPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'angPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"angLabel", _view.angPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'angLabel'
      .setProperty("Width",160) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'angLabel'
      .setProperty("Text","&#952; (deg):") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'angLabel'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"angSlider", _view.angPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'angSlider'
      .setProperty("Maximum",65.0) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'angSlider'
      .setProperty("Minimum",10.0) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'angSlider'
      .setProperty("Step",0.01) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'angSlider'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"angField", _view.angPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'angField'
      .setProperty("Width",35) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'angField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'angField'
      .setProperty("Editable",true) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'angField'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttons", _view.simPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'buttons'
      .setProperty("Height",40) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'buttons'
      .setProperty("CSS",{"display":"block",  "page-break-inside":"avoid"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'buttons'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"playPause", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'playPause'
      .setProperty("Tooltip","Plays/pauses the animation.") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'playPause'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'playPause'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'playPause'
      ;

    _view._addElement(EJSS_INTERFACE.button,"step", _view.buttons) // EJsS HtmlView.HtmlView Page: declaration of element 'step'
      .setProperty("Tooltip","Increments time by one step") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'step'
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
      .setProperty("Html","<p> A projectile is launched when the yellow  Lamborghini (not shown to scale) goes by at  t = 0 s <strong>(position is given in meters  and time is given in seconds)</strong>. You  may change the projectile's launch angle and  initial speed by using the sliders and text  boxes and then clicking \"play.\" Find the  relationship between v<sub>0</sub> and &#952;  such that the projectile will always hit the  car. When you determine the relationship,  make sure to test it with a few values of  v<sub>0</sub> and &#952;. </p>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'summary'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new prob03_10("_topFrame","_ejs_library/",null);
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
