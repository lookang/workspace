function FourSpringAccelerometer(_topFrame,_libraryPath,_codebasePath) {
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

var accelerometer = EJSS_HARDWARE.accelerometer();
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

  var width; // EjsS Model.Variables.Display Vars.width
  var height; // EjsS Model.Variables.Display Vars.height
  var size; // EjsS Model.Variables.Display Vars.size
  var space; // EjsS Model.Variables.Display Vars.space
  var theta0; // EjsS Model.Variables.Display Vars.theta0
  var maxPts; // EjsS Model.Variables.Display Vars.maxPts
  var ballSize; // EjsS Model.Variables.Display Vars.ballSize
  var showForceBody; // EjsS Model.Variables.Display Vars.showForceBody
  var showTrajectory; // EjsS Model.Variables.Display Vars.showTrajectory

  var display; // EjsS Model.Variables.Constants.display
  var arrowScale; // EjsS Model.Variables.Constants.arrowScale
  var m; // EjsS Model.Variables.Constants.m
  var g; // EjsS Model.Variables.Constants.g
  var kx; // EjsS Model.Variables.Constants.kx
  var ky; // EjsS Model.Variables.Constants.ky
  var phi; // EjsS Model.Variables.Constants.phi
  var theta; // EjsS Model.Variables.Constants.theta
  var tilt; // EjsS Model.Variables.Constants.tilt
  var b; // EjsS Model.Variables.Constants.b
  var gxForce; // EjsS Model.Variables.Constants.gxForce
  var gyForce; // EjsS Model.Variables.Constants.gyForce
  var kxForce; // EjsS Model.Variables.Constants.kxForce
  var kyForce; // EjsS Model.Variables.Constants.kyForce
  var fxForce; // EjsS Model.Variables.Constants.fxForce
  var fyForce; // EjsS Model.Variables.Constants.fyForce
  var x0; // EjsS Model.Variables.Constants.x0
  var y0; // EjsS Model.Variables.Constants.y0
  var vx0; // EjsS Model.Variables.Constants.vx0
  var vy0; // EjsS Model.Variables.Constants.vy0

  var x; // EjsS Model.Variables.Acceleration Vars.x
  var vx; // EjsS Model.Variables.Acceleration Vars.vx
  var y; // EjsS Model.Variables.Acceleration Vars.y
  var vy; // EjsS Model.Variables.Acceleration Vars.vy
  var accX; // EjsS Model.Variables.Acceleration Vars.accX
  var accY; // EjsS Model.Variables.Acceleration Vars.accY
  var accZ; // EjsS Model.Variables.Acceleration Vars.accZ
  var t; // EjsS Model.Variables.Acceleration Vars.t
  var dt; // EjsS Model.Variables.Acceleration Vars.dt
  var devicePresent; // EjsS Model.Variables.Acceleration Vars.devicePresent
  var msg; // EjsS Model.Variables.Acceleration Vars.msg

  var _privateOdesList;
  var _ODEi_evolution1;

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      width : width,
      height : height,
      size : size,
      space : space,
      theta0 : theta0,
      maxPts : maxPts,
      ballSize : ballSize,
      showForceBody : showForceBody,
      showTrajectory : showTrajectory,
      display : display,
      arrowScale : arrowScale,
      m : m,
      g : g,
      kx : kx,
      ky : ky,
      phi : phi,
      theta : theta,
      tilt : tilt,
      b : b,
      gxForce : gxForce,
      gyForce : gyForce,
      kxForce : kxForce,
      kyForce : kyForce,
      fxForce : fxForce,
      fyForce : fyForce,
      x0 : x0,
      y0 : y0,
      vx0 : vx0,
      vy0 : vy0,
      x : x,
      vx : vx,
      y : y,
      vy : vy,
      accX : accX,
      accY : accY,
      accZ : accZ,
      t : t,
      dt : dt,
      devicePresent : devicePresent,
      msg : msg
    };
  };

  function _unserialize(json) { return _model.unserialize(json); }

  _model._userUnserialize = function(json) {
    if(typeof json.width != "undefined") width = json.width;
    if(typeof json.height != "undefined") height = json.height;
    if(typeof json.size != "undefined") size = json.size;
    if(typeof json.space != "undefined") space = json.space;
    if(typeof json.theta0 != "undefined") theta0 = json.theta0;
    if(typeof json.maxPts != "undefined") maxPts = json.maxPts;
    if(typeof json.ballSize != "undefined") ballSize = json.ballSize;
    if(typeof json.showForceBody != "undefined") showForceBody = json.showForceBody;
    if(typeof json.showTrajectory != "undefined") showTrajectory = json.showTrajectory;
    if(typeof json.display != "undefined") display = json.display;
    if(typeof json.arrowScale != "undefined") arrowScale = json.arrowScale;
    if(typeof json.m != "undefined") m = json.m;
    if(typeof json.g != "undefined") g = json.g;
    if(typeof json.kx != "undefined") kx = json.kx;
    if(typeof json.ky != "undefined") ky = json.ky;
    if(typeof json.phi != "undefined") phi = json.phi;
    if(typeof json.theta != "undefined") theta = json.theta;
    if(typeof json.tilt != "undefined") tilt = json.tilt;
    if(typeof json.b != "undefined") b = json.b;
    if(typeof json.gxForce != "undefined") gxForce = json.gxForce;
    if(typeof json.gyForce != "undefined") gyForce = json.gyForce;
    if(typeof json.kxForce != "undefined") kxForce = json.kxForce;
    if(typeof json.kyForce != "undefined") kyForce = json.kyForce;
    if(typeof json.fxForce != "undefined") fxForce = json.fxForce;
    if(typeof json.fyForce != "undefined") fyForce = json.fyForce;
    if(typeof json.x0 != "undefined") x0 = json.x0;
    if(typeof json.y0 != "undefined") y0 = json.y0;
    if(typeof json.vx0 != "undefined") vx0 = json.vx0;
    if(typeof json.vy0 != "undefined") vy0 = json.vy0;
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.vx != "undefined") vx = json.vx;
    if(typeof json.y != "undefined") y = json.y;
    if(typeof json.vy != "undefined") vy = json.vy;
    if(typeof json.accX != "undefined") accX = json.accX;
    if(typeof json.accY != "undefined") accY = json.accY;
    if(typeof json.accZ != "undefined") accZ = json.accZ;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.devicePresent != "undefined") devicePresent = json.devicePresent;
    if(typeof json.msg != "undefined") msg = json.msg;
   _resetSolvers();
   _model.update();
  };

  _model.addToReset(function() {
    __pagesEnabled["Init Page"] = true;
    __pagesEnabled["Read Sensor"] = true;
    __pagesEnabled["Spring ODEs"] = true;
    __pagesEnabled["FixRel Page"] = true;
  });

  _model.addToReset(function() {
    width = _isMobile?350:450; // EjsS Model.Variables.Display Vars.width
    height = _isMobile?350:450; // EjsS Model.Variables.Display Vars.height
    size = 5; // EjsS Model.Variables.Display Vars.size
    space = size*Math.sqrt(2); // EjsS Model.Variables.Display Vars.space
    theta0 = 0; // EjsS Model.Variables.Display Vars.theta0
    maxPts = 200; // EjsS Model.Variables.Display Vars.maxPts
    ballSize = size/10.0; // EjsS Model.Variables.Display Vars.ballSize
    showForceBody = false; // EjsS Model.Variables.Display Vars.showForceBody
    showTrajectory = false; // EjsS Model.Variables.Display Vars.showTrajectory
  });

  _model.addToReset(function() {
    display = "block"; // EjsS Model.Variables.Constants.display
    arrowScale = 0.5; // EjsS Model.Variables.Constants.arrowScale
    m = 0.1; // EjsS Model.Variables.Constants.m
    g = 9.8; // EjsS Model.Variables.Constants.g
    kx = 1; // EjsS Model.Variables.Constants.kx
    ky = 1; // EjsS Model.Variables.Constants.ky
    phi = 0; // EjsS Model.Variables.Constants.phi
    theta = theta0; // EjsS Model.Variables.Constants.theta
    tilt = 0.0; // EjsS Model.Variables.Constants.tilt
    b = 0.05; // EjsS Model.Variables.Constants.b
    gxForce = -m*g*Math.sin(theta+phi); // EjsS Model.Variables.Constants.gxForce
    gyForce = -m*g*Math.cos(theta+phi); // EjsS Model.Variables.Constants.gyForce
    kxForce = -m*g*Math.sin(theta+phi); // EjsS Model.Variables.Constants.kxForce
    kyForce = -m*g*Math.cos(theta+phi); // EjsS Model.Variables.Constants.kyForce
    fxForce = -m*g*Math.sin(theta+phi); // EjsS Model.Variables.Constants.fxForce
    fyForce = -m*g*Math.cos(theta+phi); // EjsS Model.Variables.Constants.fyForce
    x0 = 0; // EjsS Model.Variables.Constants.x0
    y0 = 0; // EjsS Model.Variables.Constants.y0
    vx0 = 0; // EjsS Model.Variables.Constants.vx0
    vy0 = 0; // EjsS Model.Variables.Constants.vy0
  });

  _model.addToReset(function() {
    x = x0; // EjsS Model.Variables.Acceleration Vars.x
    vx = y0; // EjsS Model.Variables.Acceleration Vars.vx
    y = vx0; // EjsS Model.Variables.Acceleration Vars.y
    vy = vy0; // EjsS Model.Variables.Acceleration Vars.vy
    accX = 0; // EjsS Model.Variables.Acceleration Vars.accX
    accY = -g; // EjsS Model.Variables.Acceleration Vars.accY
    accZ = 0; // EjsS Model.Variables.Acceleration Vars.accZ
    t = 0; // EjsS Model.Variables.Acceleration Vars.t
    dt = 0.1; // EjsS Model.Variables.Acceleration Vars.dt
    devicePresent = false; // EjsS Model.Variables.Acceleration Vars.devicePresent
    msg = "Select Sensor to enable accelerometer."; // EjsS Model.Variables.Acceleration Vars.msg
  });

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

  function startSensor() {  // > CustomCode.Sensor Methods:1
    if (accelerometer.isPresent()) {  // > CustomCode.Sensor Methods:2
      accelerometer.start();  // > CustomCode.Sensor Methods:3
      accelerometer.setAverageInterval(0.1);  // > CustomCode.Sensor Methods:4
      var viewData = accelerometer.getViewData();  // > CustomCode.Sensor Methods:5
      accX = viewData.x;  // > CustomCode.Sensor Methods:6
      accY = viewData.y;  // > CustomCode.Sensor Methods:7
      accZ = viewData.z;  // > CustomCode.Sensor Methods:8
      //Assume sensor is not present if all componets are zero  // > CustomCode.Sensor Methods:9
      devicePresent=viewData.x||viewData.y||viewData.z;  // > CustomCode.Sensor Methods:10
      msg=devicePresent?"":"Accelerometer not available. Use slider to simulate tilt.";  // > CustomCode.Sensor Methods:11
    }  // > CustomCode.Sensor Methods:12
    display=devicePresent?"none":"block";  // > CustomCode.Sensor Methods:13
    space=devicePresent?size:size*Math.sqrt(2);  // > CustomCode.Sensor Methods:14
    if (!devicePresent) {  // > CustomCode.Sensor Methods:15
      phi=0;  // > CustomCode.Sensor Methods:16
      accX=-g*Math.sin(theta);  // > CustomCode.Sensor Methods:17
      accY=-g*Math.cos(theta);  // > CustomCode.Sensor Methods:18
      window.alert("Sensor not available.");  // > CustomCode.Sensor Methods:19
    }  // > CustomCode.Sensor Methods:20
  }  // > CustomCode.Sensor Methods:21
  function stopSensor() {  // > CustomCode.Sensor Methods:22
    if (accelerometer.isPresent()) {  // > CustomCode.Sensor Methods:23
      accelerometer.stop();  // > CustomCode.Sensor Methods:24
    }  // > CustomCode.Sensor Methods:25
    display="block";  // > CustomCode.Sensor Methods:26
    space=size*Math.sqrt(2);  // > CustomCode.Sensor Methods:27
  }  // > CustomCode.Sensor Methods:28

  function resetTime () {  // > CustomCode.Reset Time:1
    t=0;  // > CustomCode.Reset Time:2
    x=x0;  // > CustomCode.Reset Time:3
    y=y0;  // > CustomCode.Reset Time:4
    vx=vx0;  // > CustomCode.Reset Time:5
    vy=vy0;  // > CustomCode.Reset Time:6
    _view.trajectoryTrail.clear();  // > CustomCode.Reset Time:7
  }  // > CustomCode.Reset Time:8

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    _view._addOnBlurAction(function () { stopSensor() });  // > Initialization.Init Page:1
  });

  _model.addToInitialization(function() {
    _initializeSolvers();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Read Sensor"]) return;
    if (accelerometer.isPresent()||display==="block") {  // > Evolution.Read Sensor:1
      var viewData = accelerometer.getViewData();  // > Evolution.Read Sensor:2
      accX = viewData.x;  // > Evolution.Read Sensor:3
      accY = viewData.y;  // > Evolution.Read Sensor:4
      accZ = viewData.z;  // > Evolution.Read Sensor:5
      //Assume sensor is not present if all componets are zero  // > Evolution.Read Sensor:6
      devicePresent=viewData.x||viewData.y||viewData.z;  // > Evolution.Read Sensor:7
      msg=devicePresent?"":"Accelerometer not available. Use slider to simulate tilt.";  // > Evolution.Read Sensor:8
    }  // > Evolution.Read Sensor:9
    if(devicePresent && display!=="block"){ // sensor active  // > Evolution.Read Sensor:10
      theta=0; // don't use slider  // > Evolution.Read Sensor:11
      phi=Math.atan2(accX,-accY);  // > Evolution.Read Sensor:12
    }else{  // sensor not available  // > Evolution.Read Sensor:13
      phi=0;  // > Evolution.Read Sensor:14
      accX=-g*Math.sin(theta);  // > Evolution.Read Sensor:15
      accY=-g*Math.cos(theta);  // > Evolution.Read Sensor:16
      display="block"; // show slider  // > Evolution.Read Sensor:17
    }  // > Evolution.Read Sensor:18
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Spring ODEs"]) return;
    _ODEi_evolution1.step();
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["FixRel Page"]) return;
    x=Math.min(size,x);  // > FixedRelations.FixRel Page:1
    x=Math.max(-size,x);  // > FixedRelations.FixRel Page:2
    y=Math.min(size,y);  // > FixedRelations.FixRel Page:3
    y=Math.max(-size,y);  // > FixedRelations.FixRel Page:4
    tilt=theta+phi;  // > FixedRelations.FixRel Page:5
    fForce=-b*Math.sqrt(vx*vx+vy*vy)/m;  // friction force  // > FixedRelations.FixRel Page:6
    gxForce=m*accX;  // > FixedRelations.FixRel Page:7
    gyForce=m*accY;  // > FixedRelations.FixRel Page:8
    kxForce=-kx*x;  // > FixedRelations.FixRel Page:9
    kyForce=-ky*y;  // > FixedRelations.FixRel Page:10
    fxForce=-b*vx/m;  // > FixedRelations.FixRel Page:11
    fyForce=-b*vy/m;  // > FixedRelations.FixRel Page:12
  });

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
    if (_odeName=="Spring ODEs") return _ODEi_evolution1;
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
        var ax = -kx*x/m+accX-b*vx/m;  // > Preliminary code for ODE.Spring ODEs:1
        var ay = -ky*y/m+accY-b*vy/m;  // > Preliminary code for ODE.Spring ODEs:2
      // Compute the rate
        var __cRate=0;
        _aRate[__cRate++] = vx; // Rate for ODE: Spring ODEs:x
        _aRate[__cRate++] = ax; // Rate for ODE: Spring ODEs:vx
        _aRate[__cRate++] = vy; // Rate for ODE: Spring ODEs:y
        _aRate[__cRate++] = ay; // Rate for ODE: Spring ODEs:vy
        _aRate[__cRate++] = 1; // independent variable
        return _aRate;
    }; //end of getRate

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
    _viewsInfo[_counter++] = { name : "HtmlView Page", width : 800, height : 600 };
    return _viewsInfo;
  } // end of _getViews

  function _selectView(_viewNumber) {
    _view = null;
    _view = new FourSpringAccelerometer_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.sensorCheck.linkProperty("Checked",  function() { return display==="none"; } ); // HtmlView Page linking property 'Checked' for element 'sensorCheck'
          _view.sensorCheck.setAction("OnCheckOff", function() {
  stopSensor();

}); // HtmlView Page setting action 'OnCheckOff' for element 'sensorCheck'
          _view.sensorCheck.setAction("OnCheckOn", function() {
  startSensor ();

}); // HtmlView Page setting action 'OnCheckOn' for element 'sensorCheck'
          _view.forceBodyCheck.linkProperty("Checked",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Checked' for element 'forceBodyCheck'
          _view.trajectoryCheck.linkProperty("Checked",  function() { return showTrajectory; }, function(_v) { showTrajectory = _v; } ); // HtmlView Page linking property 'Checked' for element 'trajectoryCheck'
          _view.sliderPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'sliderPanel'
          _view.sliderPanel.linkProperty("Display",  function() { return display; }, function(_v) { display = _v; } ); // HtmlView Page linking property 'Display' for element 'sliderPanel'
          _view.angleSlider.linkProperty("Minimum",  function() { return -Math.PI/2; } ); // HtmlView Page linking property 'Minimum' for element 'angleSlider'
          _view.angleSlider.linkProperty("Maximum",  function() { return Math.PI/2; } ); // HtmlView Page linking property 'Maximum' for element 'angleSlider'
          _view.angleSlider.linkProperty("Value",  function() { return theta; }, function(_v) { theta = _v; } ); // HtmlView Page linking property 'Value' for element 'angleSlider'
          _view.angleSlider.setAction("OnChange", function() {
  if(_model.isPaused()) msg="Run simulation to observe motion.";
  else msg="";
  theta0=theta;
  if (!devicePresent) {
      phi=0;
      accX=-g*Math.sin(theta);
      accY=-g*Math.cos(theta);
  }

}); // HtmlView Page setting action 'OnChange' for element 'angleSlider'
          _view.centerPanel.linkProperty("Height",  function() { return height; }, function(_v) { height = _v; } ); // HtmlView Page linking property 'Height' for element 'centerPanel'
          _view.centerPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'centerPanel'
          _view.shoDrawingPanell.linkProperty("Height",  function() { return height; }, function(_v) { height = _v; } ); // HtmlView Page linking property 'Height' for element 'shoDrawingPanell'
          _view.shoDrawingPanell.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'shoDrawingPanell'
          _view.shoDrawingPanell.linkProperty("MinimumX",  function() { return -space; } ); // HtmlView Page linking property 'MinimumX' for element 'shoDrawingPanell'
          _view.shoDrawingPanell.linkProperty("MinimumY",  function() { return -space; } ); // HtmlView Page linking property 'MinimumY' for element 'shoDrawingPanell'
          _view.shoDrawingPanell.linkProperty("MaximumY",  function() { return space; }, function(_v) { space = _v; } ); // HtmlView Page linking property 'MaximumY' for element 'shoDrawingPanell'
          _view.shoDrawingPanell.linkProperty("TLMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // HtmlView Page linking property 'TLMessage' for element 'shoDrawingPanell'
          _view.shoDrawingPanell.linkProperty("MaximumX",  function() { return space; }, function(_v) { space = _v; } ); // HtmlView Page linking property 'MaximumX' for element 'shoDrawingPanell'
          _view.wallGroup.linkProperty("Transformation",  function() { return theta; }, function(_v) { theta = _v; } ); // HtmlView Page linking property 'Transformation' for element 'wallGroup'
          _view.wallShape.linkProperty("SizeX",  function() { return 2*size; } ); // HtmlView Page linking property 'SizeX' for element 'wallShape'
          _view.wallShape.linkProperty("SizeY",  function() { return 2*size; } ); // HtmlView Page linking property 'SizeY' for element 'wallShape'
          _view.topSpring.linkProperty("Radius",  function() { return ballSize/3; } ); // HtmlView Page linking property 'Radius' for element 'topSpring'
          _view.topSpring.linkProperty("SizeX",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'SizeX' for element 'topSpring'
          _view.topSpring.linkProperty("Y",  function() { return size; }, function(_v) { size = _v; } ); // HtmlView Page linking property 'Y' for element 'topSpring'
          _view.topSpring.linkProperty("Visibility",  function() { return !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'topSpring'
          _view.topSpring.linkProperty("SizeY",  function() { return y-size; } ); // HtmlView Page linking property 'SizeY' for element 'topSpring'
          _view.bottomSpring.linkProperty("Radius",  function() { return ballSize/3; } ); // HtmlView Page linking property 'Radius' for element 'bottomSpring'
          _view.bottomSpring.linkProperty("SizeX",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'SizeX' for element 'bottomSpring'
          _view.bottomSpring.linkProperty("Y",  function() { return -size; } ); // HtmlView Page linking property 'Y' for element 'bottomSpring'
          _view.bottomSpring.linkProperty("Visibility",  function() { return !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'bottomSpring'
          _view.bottomSpring.linkProperty("SizeY",  function() { return size+y; } ); // HtmlView Page linking property 'SizeY' for element 'bottomSpring'
          _view.rightSpring.linkProperty("Radius",  function() { return ballSize/3; } ); // HtmlView Page linking property 'Radius' for element 'rightSpring'
          _view.rightSpring.linkProperty("SizeX",  function() { return x-size; } ); // HtmlView Page linking property 'SizeX' for element 'rightSpring'
          _view.rightSpring.linkProperty("X",  function() { return size; }, function(_v) { size = _v; } ); // HtmlView Page linking property 'X' for element 'rightSpring'
          _view.rightSpring.linkProperty("Visibility",  function() { return !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'rightSpring'
          _view.rightSpring.linkProperty("SizeY",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'SizeY' for element 'rightSpring'
          _view.leftSpring.linkProperty("Radius",  function() { return ballSize/3; } ); // HtmlView Page linking property 'Radius' for element 'leftSpring'
          _view.leftSpring.linkProperty("SizeX",  function() { return size+x; } ); // HtmlView Page linking property 'SizeX' for element 'leftSpring'
          _view.leftSpring.linkProperty("X",  function() { return -size; } ); // HtmlView Page linking property 'X' for element 'leftSpring'
          _view.leftSpring.linkProperty("Visibility",  function() { return !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'leftSpring'
          _view.leftSpring.linkProperty("SizeY",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'SizeY' for element 'leftSpring'
          _view.trajectoryTrail.linkProperty("Active",  function() { return _isPlaying; } ); // HtmlView Page linking property 'Active' for element 'trajectoryTrail'
          _view.trajectoryTrail.linkProperty("InputX",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'InputX' for element 'trajectoryTrail'
          _view.trajectoryTrail.linkProperty("Visibility",  function() { return showTrajectory; }, function(_v) { showTrajectory = _v; } ); // HtmlView Page linking property 'Visibility' for element 'trajectoryTrail'
          _view.trajectoryTrail.linkProperty("InputY",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'InputY' for element 'trajectoryTrail'
          _view.massShape.linkProperty("SizeX",  function() { return ballSize; }, function(_v) { ballSize = _v; } ); // HtmlView Page linking property 'SizeX' for element 'massShape'
          _view.massShape.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'massShape'
          _view.massShape.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'massShape'
          _view.massShape.linkProperty("SizeY",  function() { return ballSize; }, function(_v) { ballSize = _v; } ); // HtmlView Page linking property 'SizeY' for element 'massShape'
          _view.gArrow.linkProperty("SizeX",  function() { return gxForce/arrowScale; } ); // HtmlView Page linking property 'SizeX' for element 'gArrow'
          _view.gArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'gArrow'
          _view.gArrow.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'gArrow'
          _view.gArrow.linkProperty("Visibility",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Visibility' for element 'gArrow'
          _view.gArrow.linkProperty("SizeY",  function() { return gyForce/arrowScale; } ); // HtmlView Page linking property 'SizeY' for element 'gArrow'
          _view.gText.linkProperty("Transformation",  function() { return -tilt; } ); // HtmlView Page linking property 'Transformation' for element 'gText'
          _view.gText.linkProperty("X",  function() { return x+gxForce/arrowScale; } ); // HtmlView Page linking property 'X' for element 'gText'
          _view.gText.linkProperty("Y",  function() { return y+gyForce/arrowScale; } ); // HtmlView Page linking property 'Y' for element 'gText'
          _view.gText.linkProperty("Visibility",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Visibility' for element 'gText'
          _view.kArrow.linkProperty("SizeX",  function() { return kxForce/arrowScale; } ); // HtmlView Page linking property 'SizeX' for element 'kArrow'
          _view.kArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'kArrow'
          _view.kArrow.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'kArrow'
          _view.kArrow.linkProperty("Visibility",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Visibility' for element 'kArrow'
          _view.kArrow.linkProperty("SizeY",  function() { return kyForce/arrowScale; } ); // HtmlView Page linking property 'SizeY' for element 'kArrow'
          _view.kText.linkProperty("Transformation",  function() { return -tilt; } ); // HtmlView Page linking property 'Transformation' for element 'kText'
          _view.kText.linkProperty("X",  function() { return x+(kxForce)/arrowScale; } ); // HtmlView Page linking property 'X' for element 'kText'
          _view.kText.linkProperty("Y",  function() { return y+(kyForce+0.2)/arrowScale; } ); // HtmlView Page linking property 'Y' for element 'kText'
          _view.kText.linkProperty("Visibility",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Visibility' for element 'kText'
          _view.fArrow.linkProperty("SizeX",  function() { return fxForce/arrowScale; } ); // HtmlView Page linking property 'SizeX' for element 'fArrow'
          _view.fArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'fArrow'
          _view.fArrow.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'fArrow'
          _view.fArrow.linkProperty("Visibility",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Visibility' for element 'fArrow'
          _view.fArrow.linkProperty("SizeY",  function() { return fyForce/arrowScale; } ); // HtmlView Page linking property 'SizeY' for element 'fArrow'
          _view.fText.linkProperty("Transformation",  function() { return -tilt; } ); // HtmlView Page linking property 'Transformation' for element 'fText'
          _view.fText.linkProperty("X",  function() { return x+(fxForce)/arrowScale; } ); // HtmlView Page linking property 'X' for element 'fText'
          _view.fText.linkProperty("Y",  function() { return y+(fyForce+0.2)/arrowScale; } ); // HtmlView Page linking property 'Y' for element 'fText'
          _view.fText.linkProperty("Visibility",  function() { return showForceBody && Math.abs(fForce)>0.2; } ); // HtmlView Page linking property 'Visibility' for element 'fText'
          _view.vArrow.linkProperty("SizeX",  function() { return vx; }, function(_v) { vx = _v; } ); // HtmlView Page linking property 'SizeX' for element 'vArrow'
          _view.vArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'vArrow'
          _view.vArrow.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'vArrow'
          _view.vArrow.linkProperty("Visibility",  function() { return !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'vArrow'
          _view.vArrow.linkProperty("SizeY",  function() { return vy; }, function(_v) { vy = _v; } ); // HtmlView Page linking property 'SizeY' for element 'vArrow'
          _view.vText.linkProperty("X",  function() { return x +1.05*vx; } ); // HtmlView Page linking property 'X' for element 'vText'
          _view.vText.linkProperty("Y",  function() { return y +1.05*vy; } ); // HtmlView Page linking property 'Y' for element 'vText'
          _view.vText.linkProperty("Visibility",  function() { return Math.sqrt(vx*vx+vy*vy)>0.2 && !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'vText'
          _view.x0Field.linkProperty("Value",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'Value' for element 'x0Field'
          _view.x0Field.setAction("OnChange", function() {
  x=Math.min(size,x);
  x=Math.max(-size,x);
  x0=x;

}); // HtmlView Page setting action 'OnChange' for element 'x0Field'
          _view.y0Field.linkProperty("Value",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Value' for element 'y0Field'
          _view.y0Field.setAction("OnChange", function() {
  y=Math.min(size,y);
  y=Math.max(-size,y);
  y0=y;

}); // HtmlView Page setting action 'OnChange' for element 'y0Field'
          _view.vx0Field.linkProperty("Value",  function() { return vx; }, function(_v) { vx = _v; } ); // HtmlView Page linking property 'Value' for element 'vx0Field'
          _view.vx0Field.setAction("OnChange", function() {
  vx=Math.min(10,vx);
  vx=Math.max(-10,vx);
  vx0=vx;

}); // HtmlView Page setting action 'OnChange' for element 'vx0Field'
          _view.vy0Field.linkProperty("Value",  function() { return vy; }, function(_v) { vy = _v; } ); // HtmlView Page linking property 'Value' for element 'vy0Field'
          _view.vy0Field.setAction("OnChange", function() {
  vy=Math.min(10,vy);
  vy=Math.max(-10,vy);
  vy0=vy;

}); // HtmlView Page setting action 'OnChange' for element 'vy0Field'
          _view.kxField.linkProperty("Value",  function() { return kx; }, function(_v) { kx = _v; } ); // HtmlView Page linking property 'Value' for element 'kxField'
          _view.kyField.linkProperty("Value",  function() { return ky; }, function(_v) { ky = _v; } ); // HtmlView Page linking property 'Value' for element 'kyField'
          _view.bField.linkProperty("Value",  function() { return b; }, function(_v) { b = _v; } ); // HtmlView Page linking property 'Value' for element 'bField'
          _view.bField.linkProperty("Editable",  function() { return _isPaused; } ); // HtmlView Page linking property 'Editable' for element 'bField'
          _view.bField.setAction("OnChange", function() {
  b=Math.max(0,b);
  b=Math.min(1,b);

}); // HtmlView Page setting action 'OnChange' for element 'bField'
          _view.thetaField.linkProperty("Value",  function() { return 180*tilt/Math.PI; } ); // HtmlView Page linking property 'Value' for element 'thetaField'
          _view.runButton.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'runButton'
          _view.runButton.linkProperty("State",  function() { return _isPaused; } ); // HtmlView Page linking property 'State' for element 'runButton'
          _view.runButton.setAction("OnClick", function() {
  accelerometer.start();
  accelerometer.setAverageInterval(0.1);
  _play();

}); // HtmlView Page setting action 'OnClick' for element 'runButton'
          _view.stepButton.setAction("OnPress", _step); // HtmlView Page setting action 'OnPress' for element 'stepButton'
          _view.resetTimeButton.setAction("OnPress", function() {
  _pause();
  resetTime();

}); // HtmlView Page setting action 'OnPress' for element 'resetTimeButton'
          _view.resetButton.setAction("OnClick", function() {
  _reset();

}); // HtmlView Page setting action 'OnClick' for element 'resetButton'
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
function FourSpringAccelerometer_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = FourSpringAccelerometer_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function FourSpringAccelerometer_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"titlePanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'titlePanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"titleLabel", _view.titlePanel) // EJsS HtmlView.HtmlView Page: declaration of element 'titleLabel'
      .setProperty("Foreground","Blue") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'titleLabel'
      .setProperty("Text","<h1>Four Spring Accelerometer</h1>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titleLabel'
      .setProperty("Font","normal bold 120% ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'titleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.wrappedPanel,"wrappedPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'wrappedPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"topPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'topPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'topPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"checkPanel", _view.topPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'checkPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'checkPanel'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"sensorCheck", _view.checkPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'sensorCheck'
      .setProperty("Text","Sensor") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'sensorCheck'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"forceBodyCheck", _view.checkPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'forceBodyCheck'
      .setProperty("Text","Force body") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'forceBodyCheck'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"trajectoryCheck", _view.checkPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'trajectoryCheck'
      .setProperty("Text","Trajectory") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'trajectoryCheck'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"sliderPanel", _view.topPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'sliderPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"tiltLabel", _view.sliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'tiltLabel'
      .setProperty("Text","Simulated tilt:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'tiltLabel'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"angleSlider", _view.sliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'angleSlider'
      .setProperty("Width",250) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'angleSlider'
      .setProperty("Step",.001) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'angleSlider'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"mainPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'mainPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"centerPanel", _view.mainPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'centerPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"shoDrawingPanell", _view.centerPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'shoDrawingPanell'
      .setProperty("CSS",{"display":"block","line-height":"0"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'shoDrawingPanell'
      .setProperty("AutoScaleY",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'shoDrawingPanell'
      .setProperty("AutoScaleX",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'shoDrawingPanell'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'shoDrawingPanell'
      .setProperty("SquareAspect",true) // EJsS HtmlView.HtmlView Page: setting property 'SquareAspect' for element 'shoDrawingPanell'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"wallGroup", _view.shoDrawingPanell) // EJsS HtmlView.HtmlView Page: declaration of element 'wallGroup'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"wallShape", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'wallShape'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'wallShape'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'wallShape'
      .setProperty("LineColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'wallShape'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'wallShape'
      .setProperty("DrawLines",true) // EJsS HtmlView.HtmlView Page: setting property 'DrawLines' for element 'wallShape'
      .setProperty("LineWidth",3) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'wallShape'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'wallShape'
      ;

    _view._addElement(EJSS_DRAWING2D.spring,"topSpring", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'topSpring'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'topSpring'
      .setProperty("LineColor","DarkGray") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'topSpring'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'topSpring'
      ;

    _view._addElement(EJSS_DRAWING2D.spring,"bottomSpring", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'bottomSpring'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'bottomSpring'
      .setProperty("LineColor","DarkGray") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'bottomSpring'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'bottomSpring'
      ;

    _view._addElement(EJSS_DRAWING2D.spring,"rightSpring", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'rightSpring'
      .setProperty("LineColor","DarkGray") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'rightSpring'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'rightSpring'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'rightSpring'
      ;

    _view._addElement(EJSS_DRAWING2D.spring,"leftSpring", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'leftSpring'
      .setProperty("LineColor","DarkGray") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'leftSpring'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'leftSpring'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'leftSpring'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"trajectoryTrail", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'trajectoryTrail'
      .setProperty("Maximum",500) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'trajectoryTrail'
      .setProperty("LineColor","Pink") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'trajectoryTrail'
      .setProperty("NoRepeat",true) // EJsS HtmlView.HtmlView Page: setting property 'NoRepeat' for element 'trajectoryTrail'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'trajectoryTrail'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"massShape", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'massShape'
      .setProperty("FillColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'massShape'
      .setProperty("MovesGroup",false) // EJsS HtmlView.HtmlView Page: setting property 'MovesGroup' for element 'massShape'
      .setProperty("ShapeType","ELLIPSE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'massShape'
      .setProperty("LineColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'massShape'
      .setProperty("DrawLines",true) // EJsS HtmlView.HtmlView Page: setting property 'DrawLines' for element 'massShape'
      .setProperty("LineWidth",1) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'massShape'
      .setProperty("DrawFill",true) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'massShape'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'massShape'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"gArrow", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'gArrow'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'gArrow'
      .setProperty("LineColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'gArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'gArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'gArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"gText", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'gText'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'gText'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'gText'
      .setProperty("Text","Fg") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'gText'
      .setProperty("Font","normal bold 12px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'gText'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"kArrow", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'kArrow'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'kArrow'
      .setProperty("LineColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'kArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'kArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'kArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"kText", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'kText'
      .setProperty("RelativePosition","CENTERED") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'kText'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'kText'
      .setProperty("Text","Fs") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'kText'
      .setProperty("Font","normal bold 12px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'kText'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"fArrow", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'fArrow'
      .setProperty("Transformation",0) // EJsS HtmlView.HtmlView Page: setting property 'Transformation' for element 'fArrow'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'fArrow'
      .setProperty("LineColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'fArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'fArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'fArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"fText", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'fText'
      .setProperty("FillColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'fText'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'fText'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'fText'
      .setProperty("Text","Ff") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'fText'
      .setProperty("Font","normal bold 12px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'fText'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"vArrow", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'vArrow'
      .setProperty("LineColor","Magenta") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'vArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'vArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"vText", _view.wallGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'vText'
      .setProperty("FillColor","Magenta") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'vText'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'vText'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'vText'
      .setProperty("Text","v") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'vText'
      .setProperty("Font","normal bold 14px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'vText'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"controlPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'controlPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'controlPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"ioPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ioPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'ioPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"xyPanel", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xyPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'xyPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"x0Label", _view.xyPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'x0Label'
      .setProperty("Width",45) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'x0Label'
      .setProperty("Text"," x =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'x0Label'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"x0Field", _view.xyPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'x0Field'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'x0Field'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'x0Field'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"y0Label", _view.xyPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'y0Label'
      .setProperty("Width",45) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'y0Label'
      .setProperty("Text"," y=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'y0Label'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"y0Field", _view.xyPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'y0Field'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'y0Field'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'y0Field'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"vxyPanel", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vxyPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'vxyPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"v0Label", _view.vxyPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'v0Label'
      .setProperty("Width",45) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'v0Label'
      .setProperty("Text"," vx =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'v0Label'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"vx0Field", _view.vxyPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vx0Field'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'vx0Field'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'vx0Field'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"vy0Label", _view.vxyPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vy0Label'
      .setProperty("Width",45) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'vy0Label'
      .setProperty("Text"," vy=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'vy0Label'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"vy0Field", _view.vxyPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vy0Field'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'vy0Field'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'vy0Field'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"kPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'kPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'kPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"kxLabel", _view.kPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'kxLabel'
      .setProperty("Width",45) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'kxLabel'
      .setProperty("Text","kx =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'kxLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"kxField", _view.kPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'kxField'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'kxField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'kxField'
      .setProperty("Tooltip","Spring constant") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'kxField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"kyLabel", _view.kPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'kyLabel'
      .setProperty("Width",45) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'kyLabel'
      .setProperty("Text","ky =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'kyLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"kyField", _view.kPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'kyField'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'kyField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'kyField'
      .setProperty("Tooltip","Spring constant") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'kyField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"bLabel", _view.kPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'bLabel'
      .setProperty("Width",45) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'bLabel'
      .setProperty("Text"," D =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'bLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"bField", _view.kPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'bField'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'bField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'bField'
      .setProperty("Tooltip","Damping coefficient") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'bField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"thetaLabel", _view.kPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'thetaLabel'
      .setProperty("Width",45) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'thetaLabel'
      .setProperty("Text","&#952; =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'thetaLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"thetaField", _view.kPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'thetaField'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'thetaField'
      .setProperty("Format","000") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'thetaField'
      .setProperty("Tooltip","Tilt angle") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'thetaField'
      .setProperty("Editable",false) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'thetaField'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttonPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'buttonPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'buttonPanel'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"runButton", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'runButton'
      .setProperty("Tooltip","Starts and pauses the simulation") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'runButton'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'runButton'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'runButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"stepButton", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'stepButton'
      .setProperty("Tooltip","Advance by one time step") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'stepButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'stepButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetTimeButton", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'resetTimeButton'
      .setProperty("Tooltip","Resets the time") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'resetTimeButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset1.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'resetTimeButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetButton", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'resetButton'
      .setProperty("Tooltip","Resets simulation to the orginal state") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'resetButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'resetButton'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"narrativePanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'narrativePanel'
      .setProperty("Html","<p><i>Note:</i> When running this simulation on a tablet or smart-phone, select Sensor to read the 			device accelerometer.  Then tilt your device to test it! When running this simulation on a 			computer,  uncheck “Sensor” to simulate the device tilt.  Press the Play button after you set 			parameters and initial conditions to observe the motion of the mass.</p> 		<h1>Four-Spring Accelerometer</h1> 		<p> The Four-Spring Accelerometer mobile JavaScript model is intended to show how a mobile device 			detects acceleration.  The simulation displays the forces and dynamics of a small mass 			connected to four walls by springs and it is designed to use <b> the accelerometer on your 				mobile device</b> to respond to the direction of the gravitation field <i>g</i> and the 			mobile device's xy-acceleration. You may need to lock the orientation of your screen to 			maintain a fixed view as you tilt your device. For use on computers without an accelerometer 			or for classroom use, uncheck Sensor to simulate a tilted device in the view.</p> 		<p>A force body (free body) diagram showing the spring force (blue), the gravitational force 			(black), and the force of friction (green) is shown. Users can set the initial position, 			velocity, and the viscous damping (friction) coefficient using the input fields above the 			buttons. Test your understanding of how the accelerometer works by answering the questions and 			comparing your answers with the simulation results. Remember to <b>press the play button</b> 			after you set the initial values to observe motion.</p> 		<p>Initial values, such as x<sub>0</sub> and vx<sub>0</sub>, should be set when the simulation is 			paused but not when the simulation is running. (Non-editable input fields have a grey 			background.) You may also drag the mass when the simulation is paused. The reset button 			returns the system to its default state while the reset time button returns the system to the 			previous values of x<sub>0</sub> and v<sub>0</sub>.</p>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'narrativePanel'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new FourSpringAccelerometer("_topFrame","_ejs_library/",null);
          if (typeof _isApp !== "undefined") _model.setRunAlways(true);
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
