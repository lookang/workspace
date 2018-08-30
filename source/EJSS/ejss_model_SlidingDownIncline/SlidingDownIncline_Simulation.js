function SlidingDownIncline(_topFrame,_libraryPath,_codebasePath) {
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
  var tableH; // EjsS Model.Variables.Display Vars.tableH
  var tableW; // EjsS Model.Variables.Display Vars.tableW
  var boxW; // EjsS Model.Variables.Display Vars.boxW
  var boxH; // EjsS Model.Variables.Display Vars.boxH
  var thickness; // EjsS Model.Variables.Display Vars.thickness
  var x0; // EjsS Model.Variables.Display Vars.x0
  var xHot; // EjsS Model.Variables.Display Vars.xHot

  var arrowScale; // EjsS Model.Variables.Constants.arrowScale
  var g; // EjsS Model.Variables.Constants.g
  var phi; // EjsS Model.Variables.Constants.phi
  var theta; // EjsS Model.Variables.Constants.theta
  var thetaLeft; // EjsS Model.Variables.Constants.thetaLeft
  var thetaRight; // EjsS Model.Variables.Constants.thetaRight
  var tilt; // EjsS Model.Variables.Constants.tilt
  var normal; // EjsS Model.Variables.Constants.normal
  var friction; // EjsS Model.Variables.Constants.friction
  var muStatic; // EjsS Model.Variables.Constants.muStatic
  var muKinetic; // EjsS Model.Variables.Constants.muKinetic
  var onBumper; // EjsS Model.Variables.Constants.onBumper
  var direction; // EjsS Model.Variables.Constants.direction
  var tmax; // EjsS Model.Variables.Constants.tmax
  var display; // EjsS Model.Variables.Constants.display

  var x; // EjsS Model.Variables.Acceration Vars.x
  var vx; // EjsS Model.Variables.Acceration Vars.vx
  var accX; // EjsS Model.Variables.Acceration Vars.accX
  var accY; // EjsS Model.Variables.Acceration Vars.accY
  var accZ; // EjsS Model.Variables.Acceration Vars.accZ
  var t; // EjsS Model.Variables.Acceration Vars.t
  var dt; // EjsS Model.Variables.Acceration Vars.dt
  var devicePresent; // EjsS Model.Variables.Acceration Vars.devicePresent
  var msg; // EjsS Model.Variables.Acceration Vars.msg

  var _privateOdesList;
  var _ODEi_evolution1;

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      width : width,
      height : height,
      size : size,
      tableH : tableH,
      tableW : tableW,
      boxW : boxW,
      boxH : boxH,
      thickness : thickness,
      x0 : x0,
      xHot : xHot,
      arrowScale : arrowScale,
      g : g,
      phi : phi,
      theta : theta,
      thetaLeft : thetaLeft,
      thetaRight : thetaRight,
      tilt : tilt,
      normal : normal,
      friction : friction,
      muStatic : muStatic,
      muKinetic : muKinetic,
      onBumper : onBumper,
      direction : direction,
      tmax : tmax,
      display : display,
      x : x,
      vx : vx,
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
    if(typeof json.tableH != "undefined") tableH = json.tableH;
    if(typeof json.tableW != "undefined") tableW = json.tableW;
    if(typeof json.boxW != "undefined") boxW = json.boxW;
    if(typeof json.boxH != "undefined") boxH = json.boxH;
    if(typeof json.thickness != "undefined") thickness = json.thickness;
    if(typeof json.x0 != "undefined") x0 = json.x0;
    if(typeof json.xHot != "undefined") xHot = json.xHot;
    if(typeof json.arrowScale != "undefined") arrowScale = json.arrowScale;
    if(typeof json.g != "undefined") g = json.g;
    if(typeof json.phi != "undefined") phi = json.phi;
    if(typeof json.theta != "undefined") theta = json.theta;
    if(typeof json.thetaLeft != "undefined") thetaLeft = json.thetaLeft;
    if(typeof json.thetaRight != "undefined") thetaRight = json.thetaRight;
    if(typeof json.tilt != "undefined") tilt = json.tilt;
    if(typeof json.normal != "undefined") normal = json.normal;
    if(typeof json.friction != "undefined") friction = json.friction;
    if(typeof json.muStatic != "undefined") muStatic = json.muStatic;
    if(typeof json.muKinetic != "undefined") muKinetic = json.muKinetic;
    if(typeof json.onBumper != "undefined") onBumper = json.onBumper;
    if(typeof json.direction != "undefined") direction = json.direction;
    if(typeof json.tmax != "undefined") tmax = json.tmax;
    if(typeof json.display != "undefined") display = json.display;
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.vx != "undefined") vx = json.vx;
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
    __pagesEnabled["Set Accel"] = true;
    __pagesEnabled["Sliding"] = true;
    __pagesEnabled["rightBumper"] = true;
    __pagesEnabled["leftBumper"] = true;
    __pagesEnabled["zeroVelocity"] = true;
    __pagesEnabled["Compute FB Diagram"] = true;
  });

  _model.addToReset(function() {
    width = _isMobile?400:550; // EjsS Model.Variables.Display Vars.width
    height = _isMobile?350:500; // EjsS Model.Variables.Display Vars.height
    size = 10; // EjsS Model.Variables.Display Vars.size
    tableH = size/8.0; // EjsS Model.Variables.Display Vars.tableH
    tableW = size; // EjsS Model.Variables.Display Vars.tableW
    boxW = 1; // EjsS Model.Variables.Display Vars.boxW
    boxH = 0.75; // EjsS Model.Variables.Display Vars.boxH
    thickness = 0.5; // EjsS Model.Variables.Display Vars.thickness
    x0 = 4; // EjsS Model.Variables.Display Vars.x0
    xHot = x0; // EjsS Model.Variables.Display Vars.xHot
  });

  _model.addToReset(function() {
    arrowScale = 4; // EjsS Model.Variables.Constants.arrowScale
    g = 9.8; // EjsS Model.Variables.Constants.g
    phi = 0; // EjsS Model.Variables.Constants.phi
    theta = 0; // EjsS Model.Variables.Constants.theta
    thetaLeft = theta; // EjsS Model.Variables.Constants.thetaLeft
    thetaRight = theta; // EjsS Model.Variables.Constants.thetaRight
    tilt = 0.0; // EjsS Model.Variables.Constants.tilt
    normal = g*Math.cos(theta); // EjsS Model.Variables.Constants.normal
    friction = g*Math.sin(theta); // EjsS Model.Variables.Constants.friction
    muStatic = 0.6; // EjsS Model.Variables.Constants.muStatic
    muKinetic = 0.5; // EjsS Model.Variables.Constants.muKinetic
    onBumper = false; // EjsS Model.Variables.Constants.onBumper
    direction = 0; // EjsS Model.Variables.Constants.direction
    tmax = 4*60; // EjsS Model.Variables.Constants.tmax
    display = "none"; // EjsS Model.Variables.Constants.display
  });

  _model.addToReset(function() {
    x = x0; // EjsS Model.Variables.Acceration Vars.x
    vx = 0; // EjsS Model.Variables.Acceration Vars.vx
    accX = 0; // EjsS Model.Variables.Acceration Vars.accX
    accY = -g; // EjsS Model.Variables.Acceration Vars.accY
    accZ = 0; // EjsS Model.Variables.Acceration Vars.accZ
    t = 0; // EjsS Model.Variables.Acceration Vars.t
    dt = 0.1; // EjsS Model.Variables.Acceration Vars.dt
    devicePresent = false; // EjsS Model.Variables.Acceration Vars.devicePresent
    msg = "message"; // EjsS Model.Variables.Acceration Vars.msg
  });

  _model.addToReset(function() {
    _privateOdesList=[];
    _ODEi_evolution1 = _ODE_evolution1();
    _privateOdesList.push(_ODEi_evolution1);
  });

  _model.addToReset(function() {
    _model.setAutoplay(false);
    _model.setPauseOnPageExit(true);
    _model.setFPS(10);
    _model.setStepsPerDisplay(1);
  });

  //  Sets the sliding flag based on coefficient of friction  // > CustomCode.Set Sliding:1
  function setSliding (vx) {  // > CustomCode.Set Sliding:2
    if(vx!==0) { // sliding if vx!=0  // > CustomCode.Set Sliding:3
      direction=(vx>0)?1:-1;  // sliding left or right depending on vx  // > CustomCode.Set Sliding:4
    } else {  // vx==0   // > CustomCode.Set Sliding:5
      tilt=theta+phi;  // > CustomCode.Set Sliding:6
      var f = muStatic*Math.abs(g*Math.cos(tilt)); // maximum static friction  // > CustomCode.Set Sliding:7
      var parallel = g *Math.sin(tilt); //gravitaitonal component along incline  // > CustomCode.Set Sliding:8
      if(tilt==0 || Math.abs(parallel)<=f) { // not sliding if parallel component is < f  // > CustomCode.Set Sliding:9
        direction=0;  // > CustomCode.Set Sliding:10
      } else {  // > CustomCode.Set Sliding:11
        direction= (tilt>0)?1:-1;  // > CustomCode.Set Sliding:12
      }  // > CustomCode.Set Sliding:13
    }  // > CustomCode.Set Sliding:14
    _resetSolvers();  // > CustomCode.Set Sliding:15
  }  // > CustomCode.Set Sliding:16

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    devicePresent=accelerometer.isPresent();  // > Initialization.Init Page:1
    if (!devicePresent) {  // > Initialization.Init Page:2
      alert("Accelerometer is not present." );  // > Initialization.Init Page:3
      msg="Accelerometer is not present. Use slider to simulate tilt."  // > Initialization.Init Page:4
      accX=0;  // > Initialization.Init Page:5
      accY=-g;  // > Initialization.Init Page:6
    }else{  // > Initialization.Init Page:7
      msg="Use Run button to start and to access accelerometer."  // > Initialization.Init Page:8
    }  // > Initialization.Init Page:9
    //display=demo?"block":"none";  // > Initialization.Init Page:10
    onBumper=false;  // > Initialization.Init Page:11
    vx=0;  // > Initialization.Init Page:12
  });

  _model.addToInitialization(function() {
    _initializeSolvers();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Set Accel"]) return;
    if (devicePresent||display==="block") {  // > Evolution.Set Accel:1
      var viewData = accelerometer.getViewData();  // > Evolution.Set Accel:2
      accX = viewData.x;  // > Evolution.Set Accel:3
      accY = viewData.y;  // > Evolution.Set Accel:4
      accZ = viewData.z;  // > Evolution.Set Accel:5
      //Assume device is not present if all componets are zero  // > Evolution.Set Accel:6
      devicePresent=viewData.x||viewData.y||viewData.z;  // > Evolution.Set Accel:7
      msg=devicePresent?"":"Accelerometer not present. Use slider to simulate tilt.";  // > Evolution.Set Accel:8
    }  // > Evolution.Set Accel:9
    if(devicePresent && display!=="block"){  // > Evolution.Set Accel:10
      thetaRight=thetaLeft=theta=0;  // > Evolution.Set Accel:11
      phi=Math.atan2(accX,-accY);  // > Evolution.Set Accel:12
    }else{  // > Evolution.Set Accel:13
      phi=0;  // > Evolution.Set Accel:14
      accX=0;  // > Evolution.Set Accel:15
      accY=-g;  // > Evolution.Set Accel:16
      display="block"  // > Evolution.Set Accel:17
    }  // > Evolution.Set Accel:18
    direction=(vx>0)?1:-1; // sliding left or right  // > Evolution.Set Accel:19
    if(vx==0)direction=0;  // not sliding  // > Evolution.Set Accel:20
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Sliding"]) return;
    _ODEi_evolution1.step();
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["Compute FB Diagram"]) return;
    xHot=x-tableW;  // > FixedRelations.Compute FB Diagram:1
    if(!devicePresent || display==="block"){  // in demo mode  // > FixedRelations.Compute FB Diagram:2
      phi=0;  // > FixedRelations.Compute FB Diagram:3
      accX=0;  // > FixedRelations.Compute FB Diagram:4
      accY=-g;  // > FixedRelations.Compute FB Diagram:5
      display="block"  // > FixedRelations.Compute FB Diagram:6
    }  // > FixedRelations.Compute FB Diagram:7
    tilt=theta+phi;  // > FixedRelations.Compute FB Diagram:8
    if(tilt<0 && x>5) onBumper=false;  // > FixedRelations.Compute FB Diagram:9
    if(tilt>0 && x<5) onBumper=false;  // > FixedRelations.Compute FB Diagram:10
    var normal = Math.abs(g*Math.cos(tilt));  // > FixedRelations.Compute FB Diagram:11
    var f = (direction===0)?muStatic*normal:muKinetic*normal;  // > FixedRelations.Compute FB Diagram:12
    var parallel = g *Math.sin(tilt); //gravitaitonal component along incline  // > FixedRelations.Compute FB Diagram:13
    if(vx>0){            // friction is toward -x  // > FixedRelations.Compute FB Diagram:14
      friction = -normal*muKinetic;  // > FixedRelations.Compute FB Diagram:15
    }else if(vx<0){     // friction is toward +x   // > FixedRelations.Compute FB Diagram:16
      friction = normal*muKinetic;  // > FixedRelations.Compute FB Diagram:17
    }else if(onBumper || direction ===0){  // > FixedRelations.Compute FB Diagram:18
      friction=-parallel;// friction balances gravity component  // > FixedRelations.Compute FB Diagram:19
    }else{  // > FixedRelations.Compute FB Diagram:20
      friction=(tilt>0)?-normal*muKinetic:normal*muKinetic;  // > FixedRelations.Compute FB Diagram:21
    }  // > FixedRelations.Compute FB Diagram:22
    //_println("vx= "+vx);  // > FixedRelations.Compute FB Diagram:23
    if(t>=tmax){  // > FixedRelations.Compute FB Diagram:24
      _pause();  // > FixedRelations.Compute FB Diagram:25
      t=0;  // > FixedRelations.Compute FB Diagram:26
      msg="Max Time.  Use Run button to restart and to access accelerometer."  // > FixedRelations.Compute FB Diagram:27
    }  // > FixedRelations.Compute FB Diagram:28
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
    if (_odeName=="Sliding") return _ODEi_evolution1;
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
      if (__pagesEnabled["rightBumper"]) __eventSolver.addEvent(_ODE_evolution1_Event1());
      if (__pagesEnabled["leftBumper"]) __eventSolver.addEvent(_ODE_evolution1_Event2());
      if (__pagesEnabled["zeroVelocity"]) __eventSolver.addEvent(_ODE_evolution1_Event3());
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
        var t = _aState[__cOut++];
      // Preliminary code: Code to be executed before rate equations are evaluated
        var acc =0; // assume block is not sliding  // > Preliminary code for ODE.Sliding:1
        if(!onBumper) { // check if not on bumper  // > Preliminary code for ODE.Sliding:2
          var n=Math.abs(g*Math.cos(theta+phi)); // normal force  // > Preliminary code for ODE.Sliding:3
          var f=(direction===0)?muStatic*n:muKinetic*n;  // friction  // > Preliminary code for ODE.Sliding:4
          var gp=Math.abs(g*Math.sin(theta+phi));// g parallel to surface  // > Preliminary code for ODE.Sliding:5
          if(direction==1){ // friction is in - x direction  // > Preliminary code for ODE.Sliding:6
            acc=(theta+phi>0)?gp-f:-f-gp;  // > Preliminary code for ODE.Sliding:7
          }else if(direction==-1){ // friction is in + x direction  // > Preliminary code for ODE.Sliding:8
            acc=(theta+phi>0)?gp+f:f-gp;  // > Preliminary code for ODE.Sliding:9
          }else if(gp>f) { //slide if gravity greater than friction  // > Preliminary code for ODE.Sliding:10
            acc=(theta+phi>0)?gp-f:f-gp;  // > Preliminary code for ODE.Sliding:11
          };  // > Preliminary code for ODE.Sliding:12
        }  // > Preliminary code for ODE.Sliding:13
        //_println("n="+n+"  gp="+gp +"  f="+f);  // > Preliminary code for ODE.Sliding:14
      // Compute the rate
        var __cRate=0;
        _aRate[__cRate++] = vx; // Rate for ODE: Sliding:x
        _aRate[__cRate++] = acc; // Rate for ODE: Sliding:vx
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
        var x = _aState[__cOut++];
        var vx = _aState[__cOut++];
        var t = _aState[__cOut++];
        return tableW-x-boxW/2-thickness;  // > Event zero-condition for page Sliding:1
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        x = __state[__cOut++];
        vx = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = x;
        __state[__cIn++] = vx;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        onBumper=true;  // > Event action for page Sliding:1
        direction=0;  // > Event action for page Sliding:2
        vx=0;  // > Event action for page Sliding:3
        //_pause();  // > Event action for page Sliding:4
        return true;
      }

      return _eventSelf;
    }; // End of event

    _ODE_evolution1_Event2 = function() {
      var _eventSelf = {};

      _eventSelf.getTypeOfEvent = function() { return EJSS_ODE_SOLVERS.EVENT_TYPE.CROSSING_EVENT; };

      _eventSelf.getRootFindingMethod = function() { return EJSS_ODE_SOLVERS.EVENT_METHOD.BISECTION; };

      _eventSelf.getMaxIterations = function() { return 100; };

      _eventSelf.getTolerance = function() { return 1.0e-5; };

      _eventSelf.evaluate = function(_aState) { 
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var x = _aState[__cOut++];
        var vx = _aState[__cOut++];
        var t = _aState[__cOut++];
        return x-boxW/2-thickness;  // > Event zero-condition for page Sliding:1
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        x = __state[__cOut++];
        vx = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = x;
        __state[__cIn++] = vx;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        onBumper=true;  // > Event action for page Sliding:1
        direction=0;  // > Event action for page Sliding:2
        vx=0;  // > Event action for page Sliding:3
        //_pause();  // > Event action for page Sliding:4
        return true;
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
        var x = _aState[__cOut++];
        var vx = _aState[__cOut++];
        var t = _aState[__cOut++];
        return vx;  // > Event zero-condition for page Sliding:1
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        x = __state[__cOut++];
        vx = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = x;
        __state[__cIn++] = vx;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        direction=0;  // > Event action for page Sliding:1
        vx=0;  // vx is exactly zero  // > Event action for page Sliding:2
        setSliding (0);  // > Event action for page Sliding:3
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
    _view = new SlidingDownIncline_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.sliderPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'sliderPanel'
          _view.sliderPanel.linkProperty("Display",  function() { return display; }, function(_v) { display = _v; } ); // HtmlView Page linking property 'Display' for element 'sliderPanel'
          _view.angleSlider.linkProperty("Width",  function() { return tableW; }, function(_v) { tableW = _v; } ); // HtmlView Page linking property 'Width' for element 'angleSlider'
          _view.angleSlider.linkProperty("Minimum",  function() { return -Math.PI/2; } ); // HtmlView Page linking property 'Minimum' for element 'angleSlider'
          _view.angleSlider.linkProperty("Maximum",  function() { return Math.PI/2; } ); // HtmlView Page linking property 'Maximum' for element 'angleSlider'
          _view.angleSlider.linkProperty("Value",  function() { return theta; }, function(_v) { theta = _v; } ); // HtmlView Page linking property 'Value' for element 'angleSlider'
          _view.angleSlider.setAction("OnChange", function() {
  if(theta>0){
    thetaRight=theta;
    thetaLeft=0; 
  }else{
    thetaRight=0;
    thetaLeft=theta;  
  }
  setSliding (vx);

}); // HtmlView Page setting action 'OnChange' for element 'angleSlider'
          _view.plottingPanel.linkProperty("Height",  function() { return height; }, function(_v) { height = _v; } ); // HtmlView Page linking property 'Height' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("MaximumY",  function() { return size; }, function(_v) { size = _v; } ); // HtmlView Page linking property 'MaximumY' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("MaximumX",  function() { return size; }, function(_v) { size = _v; } ); // HtmlView Page linking property 'MaximumX' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("TLMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // HtmlView Page linking property 'TLMessage' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("BRMessage",  function() { return "time ="+t.toFixed(2); } ); // HtmlView Page linking property 'BRMessage' for element 'plottingPanel'
          _view.leftCorner.linkProperty("Transformation",  function() { return -thetaLeft; } ); // HtmlView Page linking property 'Transformation' for element 'leftCorner'
          _view.leftCorner.linkProperty("Y",  function() { return tableH; }, function(_v) { tableH = _v; } ); // HtmlView Page linking property 'Y' for element 'leftCorner'
          _view.tableGroup.linkProperty("Transformation",  function() { return -thetaRight; } ); // HtmlView Page linking property 'Transformation' for element 'tableGroup'
          _view.tableGroup.linkProperty("X",  function() { return tableW; }, function(_v) { tableW = _v; } ); // HtmlView Page linking property 'X' for element 'tableGroup'
          _view.leftLeg.linkProperty("SizeX",  function() { return thickness/2; } ); // HtmlView Page linking property 'SizeX' for element 'leftLeg'
          _view.leftLeg.linkProperty("X",  function() { return 2-tableW; } ); // HtmlView Page linking property 'X' for element 'leftLeg'
          _view.leftStop.linkProperty("SizeX",  function() { return thickness/2; } ); // HtmlView Page linking property 'SizeX' for element 'leftStop'
          _view.leftStop.linkProperty("X",  function() { return 0.25-tableW; } ); // HtmlView Page linking property 'X' for element 'leftStop'
          _view.rightStop.linkProperty("SizeX",  function() { return thickness/2; } ); // HtmlView Page linking property 'SizeX' for element 'rightStop'
          _view.rightLeg.linkProperty("SizeX",  function() { return thickness/2; } ); // HtmlView Page linking property 'SizeX' for element 'rightLeg'
          _view.tableTop.linkProperty("SizeX",  function() { return size*0.95; } ); // HtmlView Page linking property 'SizeX' for element 'tableTop'
          _view.tableTop.linkProperty("X",  function() { return size/2-tableW; } ); // HtmlView Page linking property 'X' for element 'tableTop'
          _view.tableTop.linkProperty("SizeY",  function() { return thickness; }, function(_v) { thickness = _v; } ); // HtmlView Page linking property 'SizeY' for element 'tableTop'
          _view.box.linkProperty("SizeX",  function() { return boxW; }, function(_v) { boxW = _v; } ); // HtmlView Page linking property 'SizeX' for element 'box'
          _view.box.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'box'
          _view.box.linkProperty("SizeY",  function() { return boxH; }, function(_v) { boxH = _v; } ); // HtmlView Page linking property 'SizeY' for element 'box'
          _view.hotSpot.linkProperty("X",  function() { return xHot; }, function(_v) { xHot = _v; } ); // HtmlView Page linking property 'X' for element 'hotSpot'
          _view.hotSpot.setAction("OnDrag", function() {
  x=xHot+tableW;

}); // HtmlView Page setting action 'OnDrag' for element 'hotSpot'
          _view.gArrow.linkProperty("Transformation",  function() { return theta; }, function(_v) { theta = _v; } ); // HtmlView Page linking property 'Transformation' for element 'gArrow'
          _view.gArrow.linkProperty("SizeX",  function() { return accX/arrowScale; } ); // HtmlView Page linking property 'SizeX' for element 'gArrow'
          _view.gArrow.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'gArrow'
          _view.gArrow.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'gArrow'
          _view.gArrow.linkProperty("SizeY",  function() { return accY/arrowScale; } ); // HtmlView Page linking property 'SizeY' for element 'gArrow'
          _view.nArrow.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'nArrow'
          _view.nArrow.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'nArrow'
          _view.nArrow.linkProperty("SizeY",  function() { return normal/arrowScale; } ); // HtmlView Page linking property 'SizeY' for element 'nArrow'
          _view.fArrow.linkProperty("SizeX",  function() { return friction/arrowScale; } ); // HtmlView Page linking property 'SizeX' for element 'fArrow'
          _view.fArrow.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'fArrow'
          _view.fArrow.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'fArrow'
          _view.staticField.linkProperty("Value",  function() { return muStatic; }, function(_v) { muStatic = _v; } ); // HtmlView Page linking property 'Value' for element 'staticField'
          _view.staticField.linkProperty("Editable",  function() { return _isPaused; } ); // HtmlView Page linking property 'Editable' for element 'staticField'
          _view.staticField.setAction("OnChange", function() {
  muStatic=Math.min(muStatic,1);
  muStatic=Math.max(muStatic,0);
  muKinetic=Math.min(muStatic,muKinetic);

}); // HtmlView Page setting action 'OnChange' for element 'staticField'
          _view.keField.linkProperty("Value",  function() { return muKinetic; }, function(_v) { muKinetic = _v; } ); // HtmlView Page linking property 'Value' for element 'keField'
          _view.keField.linkProperty("Editable",  function() { return _isPaused; } ); // HtmlView Page linking property 'Editable' for element 'keField'
          _view.keField.setAction("OnChange", function() {
  muKinetic=Math.min(muKinetic,1);
  muKinetic=Math.max(muKinetic,0);
  muStatic=Math.min(muStatic,muKinetic);

}); // HtmlView Page setting action 'OnChange' for element 'keField'
          _view.demoCheck.linkProperty("Checked",  function() { return display==="block"; } ); // HtmlView Page linking property 'Checked' for element 'demoCheck'
          _view.demoCheck.setAction("OnCheckOff", function() {
  display="none";

}); // HtmlView Page setting action 'OnCheckOff' for element 'demoCheck'
          _view.demoCheck.setAction("OnCheckOn", function() {
  display="block";

}); // HtmlView Page setting action 'OnCheckOn' for element 'demoCheck'
          _view.runButton.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'runButton'
          _view.runButton.linkProperty("State",  function() { return _isPaused; } ); // HtmlView Page linking property 'State' for element 'runButton'
          _view.runButton.setAction("OnClick", function() {
  accelerometer.start();
  accelerometer.setAverageInterval(0.1);
  _play();

}); // HtmlView Page setting action 'OnClick' for element 'runButton'
          _view.resetTimeButton.setAction("OnPress", function() {
  _pause();
  t=0;

}); // HtmlView Page setting action 'OnPress' for element 'resetTimeButton'
          _view.resetButton.setAction("OnClick", function() {
  _reset();

}); // HtmlView Page setting action 'OnClick' for element 'resetButton'
          _view.xField.linkProperty("Value",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'Value' for element 'xField'
          _view.xField.linkProperty("Editable",  function() { return _isPaused; } ); // HtmlView Page linking property 'Editable' for element 'xField'
          _view.xField.setAction("OnChange", function() {
  x=Math.min(9,x);
  x=Math.max(1,x);

}); // HtmlView Page setting action 'OnChange' for element 'xField'
          _view.vField.linkProperty("Value",  function() { return vx; }, function(_v) { vx = _v; } ); // HtmlView Page linking property 'Value' for element 'vField'
          _view.vField.linkProperty("Editable",  function() { return _isPaused; } ); // HtmlView Page linking property 'Editable' for element 'vField'
          _view.vField.setAction("OnChange", function() {
  vx=Math.min(vx,8);
  vx=Math.max(vx,-8);
  setSliding (vx);

}); // HtmlView Page setting action 'OnChange' for element 'vField'
          _view.thetaField.linkProperty("Value",  function() { return 180*tilt/Math.PI; } ); // HtmlView Page linking property 'Value' for element 'thetaField'
          break;
      } // end of switch
    }; // end of new reset

    _model.setView(_view);
    _model.reset();
    _view._enableEPub();
  } // end of _selectView

  _model.setAutoplay(false);
  _model.setFPS(10);
  _model.setStepsPerDisplay(1);
  _selectView(_model._autoSelectView(_getViews())); // this includes _model.reset()
  return _model;
}
function SlidingDownIncline_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = SlidingDownIncline_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function SlidingDownIncline_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"titlePanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'titlePanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"titleLabel", _view.titlePanel) // EJsS HtmlView.HtmlView Page: declaration of element 'titleLabel'
      .setProperty("Foreground","Blue") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'titleLabel'
      .setProperty("Text","<h1>Block On An Incline Plane</h1>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titleLabel'
      .setProperty("Font","normal bold 120% ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'titleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.wrappedPanel,"wrappedPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'wrappedPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"topPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'topPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'topPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"sliderPanel", _view.topPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'sliderPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'sliderPanel'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"angleSlider", _view.sliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'angleSlider'
      .setProperty("CSS",{"display":"inline"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'angleSlider'
      .setProperty("Step",.001) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'angleSlider'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"centerPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'centerPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'centerPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"plottingPanel", _view.centerPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plottingPanel'
      .setProperty("CSS",{"display":"inline"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'plottingPanel'
      .setProperty("XFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'XFixedTick' for element 'plottingPanel'
      .setProperty("Title","Tilt your mobile device") // EJsS HtmlView.HtmlView Page: setting property 'Title' for element 'plottingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'plottingPanel'
      .setProperty("YFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'YFixedTick' for element 'plottingPanel'
      .setProperty("MinimumX",0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'plottingPanel'
      .setProperty("MinimumY",-1) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'plottingPanel'
      .setProperty("TitleY","y") // EJsS HtmlView.HtmlView Page: setting property 'TitleY' for element 'plottingPanel'
      .setProperty("AutoScaleY",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'plottingPanel'
      .setProperty("TitleX","x") // EJsS HtmlView.HtmlView Page: setting property 'TitleX' for element 'plottingPanel'
      .setProperty("AutoScaleX",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'plottingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"leftCorner", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'leftCorner'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'leftCorner'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"tableGroup", _view.leftCorner) // EJsS HtmlView.HtmlView Page: declaration of element 'tableGroup'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"leftLeg", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'leftLeg'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'leftLeg'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'leftLeg'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'leftLeg'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'leftLeg'
      .setProperty("SizeY",5) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'leftLeg'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"leftStop", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'leftStop'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'leftStop'
      .setProperty("RelativePosition","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'leftStop'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'leftStop'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'leftStop'
      .setProperty("SizeY",0.75) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'leftStop'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"rightStop", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'rightStop'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'rightStop'
      .setProperty("RelativePosition","SOUTH_EAST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'rightStop'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'rightStop'
      .setProperty("X",-0.25) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'rightStop'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'rightStop'
      .setProperty("SizeY",0.75) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'rightStop'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"rightLeg", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'rightLeg'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'rightLeg'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'rightLeg'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'rightLeg'
      .setProperty("X",-2) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'rightLeg'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'rightLeg'
      .setProperty("SizeY",5) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'rightLeg'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"tableTop", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'tableTop'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'tableTop'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'tableTop'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'tableTop'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'tableTop'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"box", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'box'
      .setProperty("FillColor","Pink") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'box'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'box'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'box'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"hotSpot", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'hotSpot'
      .setProperty("SizeX",25) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'hotSpot'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'hotSpot'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'hotSpot'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'hotSpot'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'hotSpot'
      .setProperty("SizeY",25) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'hotSpot'
      .setProperty("EnabledPosition","ENABLED_NONE") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'hotSpot'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"gArrow", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'gArrow'
      .setProperty("LineColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'gArrow'
      .setProperty("Visibility",true) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'gArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'gArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'gArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"nArrow", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'nArrow'
      .setProperty("Transformation",0) // EJsS HtmlView.HtmlView Page: setting property 'Transformation' for element 'nArrow'
      .setProperty("SizeX",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'nArrow'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'nArrow'
      .setProperty("Visibility",true) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'nArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'nArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'nArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"fArrow", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'fArrow'
      .setProperty("Transformation",0) // EJsS HtmlView.HtmlView Page: setting property 'Transformation' for element 'fArrow'
      .setProperty("LineColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'fArrow'
      .setProperty("Visibility",true) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'fArrow'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'fArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'fArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'fArrow'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"controlPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'controlPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'controlPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"muPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'muPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'muPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"staticLabel", _view.muPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'staticLabel'
      .setProperty("Text","&#956;<sub>s</sub> =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'staticLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"staticField", _view.muPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'staticField'
      .setProperty("Width",35) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'staticField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'staticField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"keLabel", _view.muPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'keLabel'
      .setProperty("Text","&#956;<sub>k</sub> =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'keLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"keField", _view.muPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'keField'
      .setProperty("Width",35) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'keField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'keField'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttonPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'buttonPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'buttonPanel'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"demoCheck", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'demoCheck'
      .setProperty("Text","Demo") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'demoCheck'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"runButton", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'runButton'
      .setProperty("Tooltip","Starts and pauses the simulation") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'runButton'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'runButton'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'runButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetTimeButton", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'resetTimeButton'
      .setProperty("Tooltip","Resets the time") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'resetTimeButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepback.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'resetTimeButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetButton", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'resetButton'
      .setProperty("Tooltip","Resets simulation to the orginal state") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'resetButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'resetButton'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"ioPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ioPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'ioPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"xLabel", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xLabel'
      .setProperty("Text"," x =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'xLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"xField", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xField'
      .setProperty("Width",35) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'xField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'xField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"vLabel", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vLabel'
      .setProperty("Text"," v =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'vLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"vField", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vField'
      .setProperty("Width",35) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'vField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'vField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"thetaLabel", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'thetaLabel'
      .setProperty("Text","&#952; =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'thetaLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"thetaField", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'thetaField'
      .setProperty("Width",35) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'thetaField'
      .setProperty("Format","000") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'thetaField'
      .setProperty("Editable",false) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'thetaField'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"narrativePanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'narrativePanel'
      .setProperty("Html","<p> The Block On An Incline Plane mobile JavaScript model illustrates the forces and dynamics of a block sliding on a surface. This simulation uses <b> the accelerometer on mobile devices</b> to read the direction of the gravitation field <i>g</i>. You may, of course, need to lock the orientation of your screen to maintain a fixed view as you rotate your device. For use on computers without an accelerometer or for classroom use, the demo mode simulates a gravitational field in the y-direction. Remember to <b>press the play button</b> after you set the initial values.</p> <p>A free body diagram showing the normal force (red), the gravitational force (black), and the force of friction (green) is shown.  Users can set the initial position and velocity and can adjust both the static and kinetic coefficient of friction when the simulation is paused.  Test your knowledge of  incline plane dynamics by answering the following questions and comparing your answers with the simulation results.</p> <ol> <li>Set x=1, set the tilt to zero, and give the block an initial speed of 3 m/s. How far will the block move if the static coefficient of friction &#956;<sub>s</sub>= 0.5? </li> <li>Set x=1, set the tilt to +30 degrees, and give the block an initial speed of 3 m/s up the incline. How far will the block move if the static coefficient of friction &#956;<sub>s</sub> = 0.5? Set the tilt to 030 degrees and repeat down the incline?</li> <li>Find the maximum tilt angle without the block slipping (v<sub>x</sub>= 0) when &#956;<sub>s</sub>= {   0.5, 0.6, 0.8, 1.0 } .</li> <li>The magnitude of the force of friction <i>f</i> when the block is not slipping is often given in textbooks as <i>f</i> = &#956;<sub>s</sub><i>N</i> where <i>N</i> is the magnitude of the normal force.  But the simulation shows that the magnitude of the force of friction changes as the surface tilts.  Explain why the force of friction is not constant.</li> </ol> <p><i>Note: </i> Because continuously reading the accelerometer may drain the battery on a mobile device, you must run the simulation to read the gravitational field <i>g</i>. The simulation will automatically pause after 4 minutes to conserve battery power.</p> <h3> Credits:</h3> <p> The Block On An Incline Plane JavaScript Model was developed by Wolfgang Christian using version 5 of the Easy Java Simulations (EJS 5) modeling tool. Although EJS is a Java program, EJS 5 creates stand alone JavaScript programs that run in almost any browser. Information about EJS is available at: &lt;<b><a href=\"http://www.um.es/fem/Ejs/\" >http://www.um.es/fem/Ejs/</a></b>&gt; and in the AAPT-ComPADRE Open Source Physics collection &lt;<b><a href=\"http://www.compadre.org/OSP/\" >http://www.compadre.org/OSP/</a></b>&gt;.</p>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'narrativePanel'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new SlidingDownIncline("_topFrame","_ejs_library/",null);
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
