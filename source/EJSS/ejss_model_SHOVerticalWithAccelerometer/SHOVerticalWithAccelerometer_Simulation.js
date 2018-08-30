function SHOVerticalWithAccelerometer(_topFrame,_libraryPath,_codebasePath) {
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
  var drawingWidth; // EjsS Model.Variables.Display Vars.drawingWidth
  var plotWidth; // EjsS Model.Variables.Display Vars.plotWidth
  var plotHeight; // EjsS Model.Variables.Display Vars.plotHeight
  var size; // EjsS Model.Variables.Display Vars.size
  var tableH; // EjsS Model.Variables.Display Vars.tableH
  var tableW; // EjsS Model.Variables.Display Vars.tableW
  var boxW; // EjsS Model.Variables.Display Vars.boxW
  var boxH; // EjsS Model.Variables.Display Vars.boxH
  var thickness; // EjsS Model.Variables.Display Vars.thickness
  var x0; // EjsS Model.Variables.Display Vars.x0
  var xDisplay; // EjsS Model.Variables.Display Vars.xDisplay
  var v0; // EjsS Model.Variables.Display Vars.v0
  var vDisplay; // EjsS Model.Variables.Display Vars.vDisplay
  var theta0; // EjsS Model.Variables.Display Vars.theta0
  var maxPts; // EjsS Model.Variables.Display Vars.maxPts

  var arrowScale; // EjsS Model.Variables.Constants.arrowScale
  var m; // EjsS Model.Variables.Constants.m
  var g; // EjsS Model.Variables.Constants.g
  var k; // EjsS Model.Variables.Constants.k
  var phi; // EjsS Model.Variables.Constants.phi
  var theta; // EjsS Model.Variables.Constants.theta
  var tilt; // EjsS Model.Variables.Constants.tilt
  var b; // EjsS Model.Variables.Constants.b
  var gxForce; // EjsS Model.Variables.Constants.gxForce
  var gyForce; // EjsS Model.Variables.Constants.gyForce
  var nForce; // EjsS Model.Variables.Constants.nForce
  var kForce; // EjsS Model.Variables.Constants.kForce
  var fForce; // EjsS Model.Variables.Constants.fForce
  var onBumper; // EjsS Model.Variables.Constants.onBumper
  var tmax; // EjsS Model.Variables.Constants.tmax
  var display; // EjsS Model.Variables.Constants.display
  var showForceBody; // EjsS Model.Variables.Constants.showForceBody
  var showVelocity; // EjsS Model.Variables.Constants.showVelocity
  var yTitle; // EjsS Model.Variables.Constants.yTitle
  var title; // EjsS Model.Variables.Constants.title

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
      drawingWidth : drawingWidth,
      plotWidth : plotWidth,
      plotHeight : plotHeight,
      size : size,
      tableH : tableH,
      tableW : tableW,
      boxW : boxW,
      boxH : boxH,
      thickness : thickness,
      x0 : x0,
      xDisplay : xDisplay,
      v0 : v0,
      vDisplay : vDisplay,
      theta0 : theta0,
      maxPts : maxPts,
      arrowScale : arrowScale,
      m : m,
      g : g,
      k : k,
      phi : phi,
      theta : theta,
      tilt : tilt,
      b : b,
      gxForce : gxForce,
      gyForce : gyForce,
      nForce : nForce,
      kForce : kForce,
      fForce : fForce,
      onBumper : onBumper,
      tmax : tmax,
      display : display,
      showForceBody : showForceBody,
      showVelocity : showVelocity,
      yTitle : yTitle,
      title : title,
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
    if(typeof json.drawingWidth != "undefined") drawingWidth = json.drawingWidth;
    if(typeof json.plotWidth != "undefined") plotWidth = json.plotWidth;
    if(typeof json.plotHeight != "undefined") plotHeight = json.plotHeight;
    if(typeof json.size != "undefined") size = json.size;
    if(typeof json.tableH != "undefined") tableH = json.tableH;
    if(typeof json.tableW != "undefined") tableW = json.tableW;
    if(typeof json.boxW != "undefined") boxW = json.boxW;
    if(typeof json.boxH != "undefined") boxH = json.boxH;
    if(typeof json.thickness != "undefined") thickness = json.thickness;
    if(typeof json.x0 != "undefined") x0 = json.x0;
    if(typeof json.xDisplay != "undefined") xDisplay = json.xDisplay;
    if(typeof json.v0 != "undefined") v0 = json.v0;
    if(typeof json.vDisplay != "undefined") vDisplay = json.vDisplay;
    if(typeof json.theta0 != "undefined") theta0 = json.theta0;
    if(typeof json.maxPts != "undefined") maxPts = json.maxPts;
    if(typeof json.arrowScale != "undefined") arrowScale = json.arrowScale;
    if(typeof json.m != "undefined") m = json.m;
    if(typeof json.g != "undefined") g = json.g;
    if(typeof json.k != "undefined") k = json.k;
    if(typeof json.phi != "undefined") phi = json.phi;
    if(typeof json.theta != "undefined") theta = json.theta;
    if(typeof json.tilt != "undefined") tilt = json.tilt;
    if(typeof json.b != "undefined") b = json.b;
    if(typeof json.gxForce != "undefined") gxForce = json.gxForce;
    if(typeof json.gyForce != "undefined") gyForce = json.gyForce;
    if(typeof json.nForce != "undefined") nForce = json.nForce;
    if(typeof json.kForce != "undefined") kForce = json.kForce;
    if(typeof json.fForce != "undefined") fForce = json.fForce;
    if(typeof json.onBumper != "undefined") onBumper = json.onBumper;
    if(typeof json.tmax != "undefined") tmax = json.tmax;
    if(typeof json.display != "undefined") display = json.display;
    if(typeof json.showForceBody != "undefined") showForceBody = json.showForceBody;
    if(typeof json.showVelocity != "undefined") showVelocity = json.showVelocity;
    if(typeof json.yTitle != "undefined") yTitle = json.yTitle;
    if(typeof json.title != "undefined") title = json.title;
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
    __pagesEnabled["Read sensor"] = true;
    __pagesEnabled["SHO ODE"] = true;
    __pagesEnabled["rightBumper"] = true;
    __pagesEnabled["leftBumper"] = true;
    __pagesEnabled["Compute FB Diagram"] = true;
  });

  _model.addToReset(function() {
    width = (_isMobile||_isEPub)?400:650; // EjsS Model.Variables.Display Vars.width
    drawingWidth = (_isMobile||_isEPub)?100:100; // EjsS Model.Variables.Display Vars.drawingWidth
    plotWidth = (_isMobile||_isEPub)?300:550; // EjsS Model.Variables.Display Vars.plotWidth
    plotHeight = (_isMobile||_isEPub)?300:350; // EjsS Model.Variables.Display Vars.plotHeight
    size = (_isMobile||_isEPub)?15:10; // EjsS Model.Variables.Display Vars.size
    tableH = size/8.0; // EjsS Model.Variables.Display Vars.tableH
    tableW = size-0.5; // EjsS Model.Variables.Display Vars.tableW
    boxW = 1; // EjsS Model.Variables.Display Vars.boxW
    boxH = 0.75; // EjsS Model.Variables.Display Vars.boxH
    thickness = 0.5; // EjsS Model.Variables.Display Vars.thickness
    x0 = 4; // EjsS Model.Variables.Display Vars.x0
    xDisplay = -x0; // EjsS Model.Variables.Display Vars.xDisplay
    v0 = 0; // EjsS Model.Variables.Display Vars.v0
    vDisplay = -v0; // EjsS Model.Variables.Display Vars.vDisplay
    theta0 = 0; // EjsS Model.Variables.Display Vars.theta0
    maxPts = 200; // EjsS Model.Variables.Display Vars.maxPts
  });

  _model.addToReset(function() {
    arrowScale = 0.5; // EjsS Model.Variables.Constants.arrowScale
    m = 0.1; // EjsS Model.Variables.Constants.m
    g = 9.8; // EjsS Model.Variables.Constants.g
    k = 1; // EjsS Model.Variables.Constants.k
    phi = 0; // EjsS Model.Variables.Constants.phi
    theta = theta0; // EjsS Model.Variables.Constants.theta
    tilt = 0.0; // EjsS Model.Variables.Constants.tilt
    b = 0.05; // EjsS Model.Variables.Constants.b
    gxForce = -m*g*Math.sin(theta+phi); // EjsS Model.Variables.Constants.gxForce
    gyForce = -m*g*Math.cos(theta+phi); // EjsS Model.Variables.Constants.gyForce
    nForce = -gyForce; // EjsS Model.Variables.Constants.nForce
    kForce = -k*x0; // EjsS Model.Variables.Constants.kForce
    fForce = -b*v0/m; // EjsS Model.Variables.Constants.fForce
    onBumper = false; // EjsS Model.Variables.Constants.onBumper
    tmax = 4*60; // EjsS Model.Variables.Constants.tmax
    display = "none"; // EjsS Model.Variables.Constants.display
    showForceBody = false; // EjsS Model.Variables.Constants.showForceBody
    showVelocity = false; // EjsS Model.Variables.Constants.showVelocity
    yTitle = "y"; // EjsS Model.Variables.Constants.yTitle
    title = "Position vs. Time"; // EjsS Model.Variables.Constants.title
  });

  _model.addToReset(function() {
    x = x0; // EjsS Model.Variables.Acceration Vars.x
    vx = 0; // EjsS Model.Variables.Acceration Vars.vx
    accX = g; // EjsS Model.Variables.Acceration Vars.accX
    accY = 0; // EjsS Model.Variables.Acceration Vars.accY
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
    vx=v0;  // > Initialization.Init Page:12
    x=x0;  // > Initialization.Init Page:13
  });

  _model.addToInitialization(function() {
    _initializeSolvers();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Read sensor"]) return;
    if (accelerometer.isPresent()||display==="block") {  // > Evolution.Read sensor:1
      var viewData = accelerometer.getViewData();  // > Evolution.Read sensor:2
      //accX = viewData.x;  // > Evolution.Read sensor:3
      //accY = viewData.y;  // > Evolution.Read sensor:4
      accX = -viewData.y;  // x axis is vertical in mass-spring view  // > Evolution.Read sensor:5
      accY = viewData.x;  // > Evolution.Read sensor:6
      accZ = viewData.z;  // > Evolution.Read sensor:7
      //Assume device is not present if all componets are zero  // > Evolution.Read sensor:8
      devicePresent=viewData.x||viewData.y||viewData.z;  // > Evolution.Read sensor:9
      msg=devicePresent?"":"Accelerometer not present. Use slider to simulate tilt.";  // > Evolution.Read sensor:10
    }  // > Evolution.Read sensor:11
    if(devicePresent && display!=="block"){ // sensor active  // > Evolution.Read sensor:12
      theta=0; // don't use slider  // > Evolution.Read sensor:13
      phi=Math.atan2(accX,-accY);  // > Evolution.Read sensor:14
    }else{  // sensor not active  // > Evolution.Read sensor:15
      phi=0;  // > Evolution.Read sensor:16
      accX=-g*Math.sin(theta-Math.PI/2);  // > Evolution.Read sensor:17
      accY=-g*Math.cos(theta-Math.PI/2);  // > Evolution.Read sensor:18
      display="block"; // show slider  // > Evolution.Read sensor:19
    }  // > Evolution.Read sensor:20
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["SHO ODE"]) return;
    _ODEi_evolution1.step();
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["Compute FB Diagram"]) return;
    x=Math.max(x,-tableW/2+boxW/2+thickness); // left bumper  // > FixedRelations.Compute FB Diagram:1
    x=Math.min(x,tableW/2-boxW/2-thickness); // right bumper  // > FixedRelations.Compute FB Diagram:2
    xDisplay=-x;  // > FixedRelations.Compute FB Diagram:3
    vDisplay=-vx;  // > FixedRelations.Compute FB Diagram:4
    tilt=theta+phi-Math.PI/2;  // > FixedRelations.Compute FB Diagram:5
    if(!devicePresent || display==="block"){  // no device mode  // > FixedRelations.Compute FB Diagram:6
      phi=0;  // > FixedRelations.Compute FB Diagram:7
      accX=-g*Math.sin(tilt);  // > FixedRelations.Compute FB Diagram:8
      accY=-g*Math.cos(tilt);  // > FixedRelations.Compute FB Diagram:9
      display="block"  // > FixedRelations.Compute FB Diagram:10
    }  // > FixedRelations.Compute FB Diagram:11
    fForce=-b*vx/m;  // friction force  // > FixedRelations.Compute FB Diagram:12
    gxForce=m*accX;  // > FixedRelations.Compute FB Diagram:13
    gyForce=m*accY;  // > FixedRelations.Compute FB Diagram:14
    kForce=-k*x;  // > FixedRelations.Compute FB Diagram:15
    nForce=-gyForce;  // > FixedRelations.Compute FB Diagram:16
    //console.log("tilt="+tilt+" gx="+gxForce + " gy="+gyForce);  // > FixedRelations.Compute FB Diagram:17
    if(t>=tmax){  // > FixedRelations.Compute FB Diagram:18
      _pause();  // > FixedRelations.Compute FB Diagram:19
      t=0;  // > FixedRelations.Compute FB Diagram:20
      msg="Max Time.  Use Run button to restart and to access accelerometer."  // > FixedRelations.Compute FB Diagram:21
    }  // > FixedRelations.Compute FB Diagram:22
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
    if (_odeName=="SHO ODE") return _ODEi_evolution1;
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
        var acc = -k*x/m+accX-b*vx/m;  // > Preliminary code for ODE.SHO ODE:1
        //_println("n="+n+"  gp="+gp +"  f="+f);  // > Preliminary code for ODE.SHO ODE:2
      // Compute the rate
        var __cRate=0;
        _aRate[__cRate++] = vx; // Rate for ODE: SHO ODE:x
        _aRate[__cRate++] = acc; // Rate for ODE: SHO ODE:vx
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
        var t = _aState[__cOut++];
        if (vx<=0) return 1;  // > Event zero-condition for page SHO ODE:1
        return tableW/2-boxW/2-thickness -x;  // > Event zero-condition for page SHO ODE:2
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
        vx=-Math.abs(vx);  // > Event action for page SHO ODE:1
        x=+tableW/2-boxW/2-thickness  // > Event action for page SHO ODE:2
        return true;
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
        var x = _aState[__cOut++];
        var vx = _aState[__cOut++];
        var t = _aState[__cOut++];
        if (vx>=0) return 1;  // > Event zero-condition for page SHO ODE:1
        return x+tableW/2+boxW/2+thickness;  // > Event zero-condition for page SHO ODE:2
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
        vx=Math.abs(vx);  // > Event action for page SHO ODE:1
        x=-tableW/2+boxW/2+thickness  // > Event action for page SHO ODE:2
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
    _view = new SHOVerticalWithAccelerometer_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.sliderPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'sliderPanel'
          _view.sliderPanel.linkProperty("Display",  function() { return display; }, function(_v) { display = _v; } ); // HtmlView Page linking property 'Display' for element 'sliderPanel'
          _view.angleSlider.linkProperty("Minimum",  function() { return -Math.PI/2; } ); // HtmlView Page linking property 'Minimum' for element 'angleSlider'
          _view.angleSlider.linkProperty("Maximum",  function() { return Math.PI/2; } ); // HtmlView Page linking property 'Maximum' for element 'angleSlider'
          _view.angleSlider.linkProperty("Value",  function() { return theta; }, function(_v) { theta = _v; } ); // HtmlView Page linking property 'Value' for element 'angleSlider'
          _view.angleSlider.setAction("OnChange", function() {
  if(_model.isPaused()) msg="Run simulation to observe motion.";
  else msg="";
  theta0=theta;

}); // HtmlView Page setting action 'OnChange' for element 'angleSlider'
          _view.centerPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'centerPanel'
          _view.shoDrawingPanell.linkProperty("Height",  function() { return plotHeight; }, function(_v) { plotHeight = _v; } ); // HtmlView Page linking property 'Height' for element 'shoDrawingPanell'
          _view.shoDrawingPanell.linkProperty("Width",  function() { return drawingWidth; }, function(_v) { drawingWidth = _v; } ); // HtmlView Page linking property 'Width' for element 'shoDrawingPanell'
          _view.shoDrawingPanell.linkProperty("MaximumY",  function() { return size/2; } ); // HtmlView Page linking property 'MaximumY' for element 'shoDrawingPanell'
          _view.shoDrawingPanell.linkProperty("MinimumY",  function() { return -size/2; } ); // HtmlView Page linking property 'MinimumY' for element 'shoDrawingPanell'
          _view.springGroup.linkProperty("Transformation",  function() { return -Math.PI/2; } ); // HtmlView Page linking property 'Transformation' for element 'springGroup'
          _view.leftSpring.linkProperty("SizeX",  function() { return -x-tableW/2+boxW/2; } ); // HtmlView Page linking property 'SizeX' for element 'leftSpring'
          _view.leftSpring.linkProperty("X",  function() { return x-boxW/2; } ); // HtmlView Page linking property 'X' for element 'leftSpring'
          _view.leftSpring.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'leftSpring'
          _view.leftSpring.linkProperty("Visibility",  function() { return !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'leftSpring'
          _view.rightSpring.linkProperty("SizeX",  function() { return -x+tableW/2-boxW/2; } ); // HtmlView Page linking property 'SizeX' for element 'rightSpring'
          _view.rightSpring.linkProperty("X",  function() { return x+boxW/2; } ); // HtmlView Page linking property 'X' for element 'rightSpring'
          _view.rightSpring.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'rightSpring'
          _view.rightSpring.linkProperty("Visibility",  function() { return !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'rightSpring'
          _view.leftStop.linkProperty("SizeX",  function() { return thickness/2; } ); // HtmlView Page linking property 'SizeX' for element 'leftStop'
          _view.leftStop.linkProperty("X",  function() { return -tableW/2; } ); // HtmlView Page linking property 'X' for element 'leftStop'
          _view.leftStop.linkProperty("Visibility",  function() { return !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'leftStop'
          _view.rightStop.linkProperty("SizeX",  function() { return thickness/2; } ); // HtmlView Page linking property 'SizeX' for element 'rightStop'
          _view.rightStop.linkProperty("X",  function() { return tableW/2; } ); // HtmlView Page linking property 'X' for element 'rightStop'
          _view.rightStop.linkProperty("Visibility",  function() { return !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'rightStop'
          _view.topSurface.linkProperty("SizeX",  function() { return tableW; }, function(_v) { tableW = _v; } ); // HtmlView Page linking property 'SizeX' for element 'topSurface'
          _view.topSurface.linkProperty("Visibility",  function() { return !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'topSurface'
          _view.topSurface.linkProperty("SizeY",  function() { return thickness; }, function(_v) { thickness = _v; } ); // HtmlView Page linking property 'SizeY' for element 'topSurface'
          _view.bottomSurface.linkProperty("SizeX",  function() { return tableW; }, function(_v) { tableW = _v; } ); // HtmlView Page linking property 'SizeX' for element 'bottomSurface'
          _view.bottomSurface.linkProperty("Visibility",  function() { return !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'bottomSurface'
          _view.bottomSurface.linkProperty("SizeY",  function() { return thickness; }, function(_v) { thickness = _v; } ); // HtmlView Page linking property 'SizeY' for element 'bottomSurface'
          _view.box.linkProperty("SizeX",  function() { return boxW; }, function(_v) { boxW = _v; } ); // HtmlView Page linking property 'SizeX' for element 'box'
          _view.box.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'box'
          _view.box.linkProperty("SizeY",  function() { return boxH; }, function(_v) { boxH = _v; } ); // HtmlView Page linking property 'SizeY' for element 'box'
          _view.gArrow.linkProperty("SizeX",  function() { return gxForce/arrowScale; } ); // HtmlView Page linking property 'SizeX' for element 'gArrow'
          _view.gArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'gArrow'
          _view.gArrow.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'gArrow'
          _view.gArrow.linkProperty("Visibility",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Visibility' for element 'gArrow'
          _view.gArrow.linkProperty("SizeY",  function() { return gyForce/arrowScale; } ); // HtmlView Page linking property 'SizeY' for element 'gArrow'
          _view.gText.linkProperty("X",  function() { return x+gxForce/arrowScale; } ); // HtmlView Page linking property 'X' for element 'gText'
          _view.gText.linkProperty("Y",  function() { return boxH/2 +gyForce/arrowScale; } ); // HtmlView Page linking property 'Y' for element 'gText'
          _view.gText.linkProperty("Visibility",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Visibility' for element 'gText'
          _view.nArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'nArrow'
          _view.nArrow.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'nArrow'
          _view.nArrow.linkProperty("Visibility",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Visibility' for element 'nArrow'
          _view.nArrow.linkProperty("SizeY",  function() { return nForce/arrowScale; } ); // HtmlView Page linking property 'SizeY' for element 'nArrow'
          _view.nText.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'nText'
          _view.nText.linkProperty("Y",  function() { return boxH/2+nForce/arrowScale+0.1; } ); // HtmlView Page linking property 'Y' for element 'nText'
          _view.nText.linkProperty("Visibility",  function() { return showForceBody && Math.abs(nForce)>0.2; } ); // HtmlView Page linking property 'Visibility' for element 'nText'
          _view.fArrow.linkProperty("SizeX",  function() { return fForce/arrowScale; } ); // HtmlView Page linking property 'SizeX' for element 'fArrow'
          _view.fArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'fArrow'
          _view.fArrow.linkProperty("Y",  function() { return boxH/2+0.05; } ); // HtmlView Page linking property 'Y' for element 'fArrow'
          _view.fArrow.linkProperty("Visibility",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Visibility' for element 'fArrow'
          _view.fText.linkProperty("X",  function() { return x +fForce/arrowScale; } ); // HtmlView Page linking property 'X' for element 'fText'
          _view.fText.linkProperty("Y",  function() { return boxH/2+0.2; } ); // HtmlView Page linking property 'Y' for element 'fText'
          _view.fText.linkProperty("Visibility",  function() { return showForceBody && Math.abs(fForce)>0.2; } ); // HtmlView Page linking property 'Visibility' for element 'fText'
          _view.kArrow.linkProperty("SizeX",  function() { return kForce/arrowScale; } ); // HtmlView Page linking property 'SizeX' for element 'kArrow'
          _view.kArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'kArrow'
          _view.kArrow.linkProperty("Y",  function() { return boxH/2-0.05; } ); // HtmlView Page linking property 'Y' for element 'kArrow'
          _view.kArrow.linkProperty("Visibility",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Visibility' for element 'kArrow'
          _view.kText.linkProperty("X",  function() { return x +kForce/arrowScale; } ); // HtmlView Page linking property 'X' for element 'kText'
          _view.kText.linkProperty("Y",  function() { return boxH/2-0.1; } ); // HtmlView Page linking property 'Y' for element 'kText'
          _view.kText.linkProperty("Visibility",  function() { return showForceBody && Math.abs(kForce)>0.2; } ); // HtmlView Page linking property 'Visibility' for element 'kText'
          _view.vArrow.linkProperty("SizeX",  function() { return vx/2; } ); // HtmlView Page linking property 'SizeX' for element 'vArrow'
          _view.vArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'vArrow'
          _view.vArrow.linkProperty("Visibility",  function() { return !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'vArrow'
          _view.vText.linkProperty("Transformation",  function() { return Math.PI/2; } ); // HtmlView Page linking property 'Transformation' for element 'vText'
          _view.vText.linkProperty("X",  function() { return x +1.15*vx/2; } ); // HtmlView Page linking property 'X' for element 'vText'
          _view.vText.linkProperty("Visibility",  function() { return Math.abs(vx)>0.2 && !showForceBody; } ); // HtmlView Page linking property 'Visibility' for element 'vText'
          _view.cursor.linkProperty("Y",  function() { return xDisplay; }, function(_v) { xDisplay = _v; } ); // HtmlView Page linking property 'Y' for element 'cursor'
          _view.cursor.setAction("OnDrag", function() {
  x=-xDisplay;
  x=Math.max(x,-tableW/2+boxW/2+thickness); // left bumper
  x=Math.min(x,tableW/2-boxW/2-thickness); // right bumper
  xDisplay=-x;

}); // HtmlView Page setting action 'OnDrag' for element 'cursor'
          _view.plottingPanel.linkProperty("Height",  function() { return plotHeight; }, function(_v) { plotHeight = _v; } ); // HtmlView Page linking property 'Height' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("Width",  function() { return plotWidth; }, function(_v) { plotWidth = _v; } ); // HtmlView Page linking property 'Width' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("Title",  function() { return title; }, function(_v) { title = _v; } ); // HtmlView Page linking property 'Title' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("MaximumY",  function() { return x0; }, function(_v) { x0 = _v; } ); // HtmlView Page linking property 'MaximumY' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("MaximumX",  function() { return 100*dt; } ); // HtmlView Page linking property 'MaximumX' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("MinimumY",  function() { return -x0; } ); // HtmlView Page linking property 'MinimumY' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("TitleY",  function() { return yTitle; }, function(_v) { yTitle = _v; } ); // HtmlView Page linking property 'TitleY' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("TLMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // HtmlView Page linking property 'TLMessage' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("BRMessage",  function() { return "time ="+t.toFixed(2); } ); // HtmlView Page linking property 'BRMessage' for element 'plottingPanel'
          _view.yTrail.linkProperty("Maximum",  function() { return maxPts; }, function(_v) { maxPts = _v; } ); // HtmlView Page linking property 'Maximum' for element 'yTrail'
          _view.yTrail.linkProperty("Measured",  function() { return !showVelocity; } ); // HtmlView Page linking property 'Measured' for element 'yTrail'
          _view.yTrail.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'InputX' for element 'yTrail'
          _view.yTrail.linkProperty("Visibility",  function() { return !showVelocity; } ); // HtmlView Page linking property 'Visibility' for element 'yTrail'
          _view.yTrail.linkProperty("InputY",  function() { return -x; } ); // HtmlView Page linking property 'InputY' for element 'yTrail'
          _view.vTrail.linkProperty("Maximum",  function() { return maxPts; }, function(_v) { maxPts = _v; } ); // HtmlView Page linking property 'Maximum' for element 'vTrail'
          _view.vTrail.linkProperty("Measured",  function() { return showVelocity; }, function(_v) { showVelocity = _v; } ); // HtmlView Page linking property 'Measured' for element 'vTrail'
          _view.vTrail.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'InputX' for element 'vTrail'
          _view.vTrail.linkProperty("Visibility",  function() { return showVelocity; }, function(_v) { showVelocity = _v; } ); // HtmlView Page linking property 'Visibility' for element 'vTrail'
          _view.vTrail.linkProperty("InputY",  function() { return -vx; } ); // HtmlView Page linking property 'InputY' for element 'vTrail'
          _view.demoCheck.linkProperty("Checked",  function() { return display==="block"; } ); // HtmlView Page linking property 'Checked' for element 'demoCheck'
          _view.demoCheck.setAction("OnCheckOff", function() {
  display="none";

}); // HtmlView Page setting action 'OnCheckOff' for element 'demoCheck'
          _view.demoCheck.setAction("OnCheckOn", function() {
  display="block";
  msg="";

}); // HtmlView Page setting action 'OnCheckOn' for element 'demoCheck'
          _view.forceBodyCheck.linkProperty("Checked",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Checked' for element 'forceBodyCheck'
          _view.velocityCheck.linkProperty("Checked",  function() { return showVelocity; }, function(_v) { showVelocity = _v; } ); // HtmlView Page linking property 'Checked' for element 'velocityCheck'
          _view.velocityCheck.setAction("OnCheckOff", function() {
  yTitle="y";
  title="Position vs. Time";

}); // HtmlView Page setting action 'OnCheckOff' for element 'velocityCheck'
          _view.velocityCheck.setAction("OnCheckOn", function() {
  yTitle="v";
  title="Velocity vs. Time";

}); // HtmlView Page setting action 'OnCheckOn' for element 'velocityCheck'
          _view.bField.linkProperty("Value",  function() { return b; }, function(_v) { b = _v; } ); // HtmlView Page linking property 'Value' for element 'bField'
          _view.bField.linkProperty("Editable",  function() { return _isPaused; } ); // HtmlView Page linking property 'Editable' for element 'bField'
          _view.bField.setAction("OnChange", function() {
  b=Math.max(0,b);
  b=Math.min(1,b);

}); // HtmlView Page setting action 'OnChange' for element 'bField'
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
  x=x0;
  vx=v0;
  theta=theta0;
  t=0;
  _view.yTrail.clear();
  _view.vTrail.clear();

}); // HtmlView Page setting action 'OnPress' for element 'resetTimeButton'
          _view.resetButton.setAction("OnClick", function() {
  _reset();

}); // HtmlView Page setting action 'OnClick' for element 'resetButton'
          _view.yField.linkProperty("Value",  function() { return xDisplay; }, function(_v) { xDisplay = _v; } ); // HtmlView Page linking property 'Value' for element 'yField'
          _view.yField.linkProperty("Editable",  function() { return _isPaused; } ); // HtmlView Page linking property 'Editable' for element 'yField'
          _view.yField.setAction("OnChange", function() {
  x=-xDisplay;
  x=Math.min(+tableW/2-boxW/2-thickness,x);
  x=Math.max(-tableW/2+boxW/2+thickness,x);
  x0=x;
  t=0;
  _view.yTrail.clear();
  _view.vTrail.clear();

}); // HtmlView Page setting action 'OnChange' for element 'yField'
          _view.vField.linkProperty("Value",  function() { return vDisplay; }, function(_v) { vDisplay = _v; } ); // HtmlView Page linking property 'Value' for element 'vField'
          _view.vField.linkProperty("Editable",  function() { return _isPaused; } ); // HtmlView Page linking property 'Editable' for element 'vField'
          _view.vField.setAction("OnChange", function() {
  vx=-vDisplay;
  vx=Math.min(vx,8);
  vx=Math.max(vx,-8);
  v0=vx;
  t=0;
  _view.yTrail.clear();
  _view.vTrail.clear();

}); // HtmlView Page setting action 'OnChange' for element 'vField'
          _view.thetaField.linkProperty("Value",  function() { return 180*tilt/Math.PI+90; } ); // HtmlView Page linking property 'Value' for element 'thetaField'
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
function SHOVerticalWithAccelerometer_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = SHOVerticalWithAccelerometer_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function SHOVerticalWithAccelerometer_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"titlePanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'titlePanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"titleLabel", _view.titlePanel) // EJsS HtmlView.HtmlView Page: declaration of element 'titleLabel'
      .setProperty("Foreground","Blue") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'titleLabel'
      .setProperty("Text","<h1>Mass and Spring with Accelerometer</h1>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titleLabel'
      .setProperty("Font","normal bold 120% ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'titleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.wrappedPanel,"wrappedPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'wrappedPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"topPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'topPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'topPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"sliderPanel", _view.topPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'sliderPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'sliderPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"tiltLabel", _view.sliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'tiltLabel'
      .setProperty("Text"," Simulate device tilt:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'tiltLabel'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"angleSlider", _view.sliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'angleSlider'
      .setProperty("Width",300) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'angleSlider'
      .setProperty("Step",.001) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'angleSlider'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"mainPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'mainPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"centerPanel", _view.mainPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'centerPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"shoDrawingPanell", _view.centerPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'shoDrawingPanell'
      .setProperty("CSS",{"display":"inline","line-height":"0"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'shoDrawingPanell'
      .setProperty("ShowAreaRectangle",false) // EJsS HtmlView.HtmlView Page: setting property 'ShowAreaRectangle' for element 'shoDrawingPanell'
      .setProperty("ShowCoordinates",false) // EJsS HtmlView.HtmlView Page: setting property 'ShowCoordinates' for element 'shoDrawingPanell'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'shoDrawingPanell'
      .setProperty("SquareAspect",true) // EJsS HtmlView.HtmlView Page: setting property 'SquareAspect' for element 'shoDrawingPanell'
      .setProperty("MaximumX",1) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'shoDrawingPanell'
      .setProperty("MinimumX",-0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'shoDrawingPanell'
      .setProperty("AutoScaleY",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'shoDrawingPanell'
      .setProperty("AutoScaleX",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'shoDrawingPanell'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"springGroup", _view.shoDrawingPanell) // EJsS HtmlView.HtmlView Page: declaration of element 'springGroup'
      .setProperty("X",0.25) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'springGroup'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'springGroup'
      ;

    _view._addElement(EJSS_DRAWING2D.spring,"leftSpring", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'leftSpring'
      .setProperty("Radius",0.2) // EJsS HtmlView.HtmlView Page: setting property 'Radius' for element 'leftSpring'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'leftSpring'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'leftSpring'
      ;

    _view._addElement(EJSS_DRAWING2D.spring,"rightSpring", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'rightSpring'
      .setProperty("Radius",0.2) // EJsS HtmlView.HtmlView Page: setting property 'Radius' for element 'rightSpring'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'rightSpring'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'rightSpring'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"leftStop", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'leftStop'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'leftStop'
      .setProperty("RelativePosition","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'leftStop'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'leftStop'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'leftStop'
      .setProperty("SizeY",0.75) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'leftStop'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"rightStop", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'rightStop'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'rightStop'
      .setProperty("RelativePosition","SOUTH_EAST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'rightStop'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'rightStop'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'rightStop'
      .setProperty("SizeY",0.75) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'rightStop'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"topSurface", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'topSurface'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'topSurface'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'topSurface'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'topSurface'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'topSurface'
      .setProperty("Y",0.75) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'topSurface'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"bottomSurface", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'bottomSurface'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'bottomSurface'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'bottomSurface'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'bottomSurface'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'bottomSurface'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'bottomSurface'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"box", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'box'
      .setProperty("FillColor","Pink") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'box'
      .setProperty("MovesGroup",false) // EJsS HtmlView.HtmlView Page: setting property 'MovesGroup' for element 'box'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'box'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'box'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"gArrow", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'gArrow'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'gArrow'
      .setProperty("LineColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'gArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'gArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'gArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"gText", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'gText'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'gText'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'gText'
      .setProperty("Text","Fg") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'gText'
      .setProperty("Font","normal bold 12px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'gText'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"nArrow", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'nArrow'
      .setProperty("Transformation",0) // EJsS HtmlView.HtmlView Page: setting property 'Transformation' for element 'nArrow'
      .setProperty("SizeX",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'nArrow'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'nArrow'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'nArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'nArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'nArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"nText", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'nText'
      .setProperty("FillColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'nText'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'nText'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'nText'
      .setProperty("Text","Fn") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'nText'
      .setProperty("Font","normal bold 12px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'nText'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"fArrow", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'fArrow'
      .setProperty("Transformation",0) // EJsS HtmlView.HtmlView Page: setting property 'Transformation' for element 'fArrow'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'fArrow'
      .setProperty("LineColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'fArrow'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'fArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'fArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'fArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"fText", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'fText'
      .setProperty("FillColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'fText'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'fText'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'fText'
      .setProperty("Text","Ff") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'fText'
      .setProperty("Font","normal bold 12px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'fText'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"kArrow", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'kArrow'
      .setProperty("Transformation",0) // EJsS HtmlView.HtmlView Page: setting property 'Transformation' for element 'kArrow'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'kArrow'
      .setProperty("LineColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'kArrow'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'kArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'kArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'kArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"kText", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'kText'
      .setProperty("FillColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'kText'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'kText'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'kText'
      .setProperty("Text","Fs") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'kText'
      .setProperty("Font","normal bold 12px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'kText'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"vArrow", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'vArrow'
      .setProperty("LineColor","Magenta") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'vArrow'
      .setProperty("Y",-1) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'vArrow'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'vArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'vArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"vText", _view.springGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'vText'
      .setProperty("FillColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'vText'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'vText'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'vText'
      .setProperty("Y",-0.9) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'vText'
      .setProperty("Text","v") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'vText'
      .setProperty("Font","normal bold 12px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'vText'
      ;

    _view._addElement(EJSS_DRAWING2D.cursor,"cursor", _view.shoDrawingPanell) // EJsS HtmlView.HtmlView Page: declaration of element 'cursor'
      .setProperty("CursorType","HORIZONTAL") // EJsS HtmlView.HtmlView Page: setting property 'CursorType' for element 'cursor'
      .setProperty("LineWidth",0) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'cursor'
      .setProperty("EnabledPosition","ENABLED_Y") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'cursor'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"plottingPanel", _view.centerPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plottingPanel'
      .setProperty("Gutters",[45,30,10,40]) // EJsS HtmlView.HtmlView Page: setting property 'Gutters' for element 'plottingPanel'
      .setProperty("XFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'XFixedTick' for element 'plottingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'plottingPanel'
      .setProperty("SquareAspect",false) // EJsS HtmlView.HtmlView Page: setting property 'SquareAspect' for element 'plottingPanel'
      .setProperty("YFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'YFixedTick' for element 'plottingPanel'
      .setProperty("GridYShow",true) // EJsS HtmlView.HtmlView Page: setting property 'GridYShow' for element 'plottingPanel'
      .setProperty("GridYLineColor","Gray") // EJsS HtmlView.HtmlView Page: setting property 'GridYLineColor' for element 'plottingPanel'
      .setProperty("AutoScaleY",true) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'plottingPanel'
      .setProperty("TitleX","t") // EJsS HtmlView.HtmlView Page: setting property 'TitleX' for element 'plottingPanel'
      .setProperty("AutoScaleX",true) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'plottingPanel'
      .setProperty("MarginY",5) // EJsS HtmlView.HtmlView Page: setting property 'MarginY' for element 'plottingPanel'
      .setProperty("GridXLineColor","Gray") // EJsS HtmlView.HtmlView Page: setting property 'GridXLineColor' for element 'plottingPanel'
      .setProperty("GridXShow",true) // EJsS HtmlView.HtmlView Page: setting property 'GridXShow' for element 'plottingPanel'
      .setProperty("Display","inline") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'plottingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"yTrail", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'yTrail'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'yTrail'
      .setProperty("NoRepeat",true) // EJsS HtmlView.HtmlView Page: setting property 'NoRepeat' for element 'yTrail'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'yTrail'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"vTrail", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vTrail'
      .setProperty("LineColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'vTrail'
      .setProperty("NoRepeat",true) // EJsS HtmlView.HtmlView Page: setting property 'NoRepeat' for element 'vTrail'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'vTrail'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"controlPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'controlPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'controlPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"muPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'muPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'muPanel'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"demoCheck", _view.muPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'demoCheck'
      .setProperty("Text","No sensor") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'demoCheck'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"forceBodyCheck", _view.muPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'forceBodyCheck'
      .setProperty("Text","Force body") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'forceBodyCheck'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"velocityCheck", _view.muPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'velocityCheck'
      .setProperty("Text","Velocity") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'velocityCheck'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"bLabel", _view.muPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'bLabel'
      .setProperty("Text"," Damping coef. =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'bLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"bField", _view.muPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'bField'
      .setProperty("Width",35) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'bField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'bField'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttonPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'buttonPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'buttonPanel'
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

    _view._addElement(EJSS_INTERFACE.panel,"ioPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ioPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'ioPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"yLabel", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'yLabel'
      .setProperty("Text"," x(m) =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'yLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"yField", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'yField'
      .setProperty("Width",35) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'yField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'yField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"vLabel", _view.ioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vLabel'
      .setProperty("Text"," v(m/s) =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'vLabel'
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
      .setProperty("Html","<p><i>Note:</i> When running this simulation on a tablet or smart-phone, set the parameters, then press the Play button. When running this simulation on a computer, be sure to check “No sensor,” then set the parameters and press the Play button. </p> <h1> Mass and Spring Harmonic Oscillator</h1> <p> The Vertical Mass and Spring Harmonic Oscillator mobile JavaScript model illustrates the forces and dynamics of a simple oscillator. This simulation uses <b> the accelerometer on your mobile device</b> to read the direction of the gravitation field <i>g</i>. You may need to lock the orientation of your screen to maintain a fixed view as you tilt your device. For use on computers without an accelerometer or for classroom use, the \"No sensor\" mode simulates a tilted device in the view.   See also the Horizontal Mass and Spring mobile JavaScript model.</p> <p>A force body (free body) diagram showing the spring force (blue), the normal force (red), the gravitational force (black), and the force of friction (green) is shown. Users can set the initial position and velocity and you can adjust the viscous damping (friction) coefficient when the simulation is paused. Test your knowledge of oscillator dynamics by answering the following questions and comparing your answers with the simulation results. Remember to <b>press the play button</b> after you set the initial values.</p> <p>Initial values, such as y<sub>0</sub> and v<sub>0</sub>, can be set when the simulation is paused but not when the simulation is running. (Non-editable input fields have a grey background.) You may also drag the mass when the simulation is paused. The reset button returns the system to its default state while the reset time button returns the system to the previous values of y<sub>0</sub> and v<sub>0</sub>.</p> <h3> Physics Exercises:</h3> <p>This simulation displays the cross section of a cylindrical mass m sliding in a hollow tube with springs and end caps. When the simulation is tilted, the tube walls exert a normal force that supports the mass and the caps limit the motion and cause the mass to bounce at the ends. The springs exert a <a href=\"https://en.wikipedia.org/wiki/Hooke%27s_law\">Hooke's Law</a> force F<sub>s</sub> = -ky on the cylinder and the there is a low speed <a href=\"https://en.wikipedia.org/wiki/Drag_(physics)\">viscous drag</a> (friction) force F<sub>drag</sub>=-bv that is determined by the damping coefficient b input field.</p> <ol> <li>Draw force body diagrams of the oscillator mass without tilt (&#952; = 0°) at y= {   -3, 0, 3 } , labeling all forces.</li> <li>Draw a force body diagram for  the simple harmonic oscillator mass with an arbitrary nonzero tilt angle of &#952;, labeling all forces.</li> <li>What is the frequency of oscillation in radians/sec and in cycles/sec when &#952; = 0° and the damping coefficient = 0.05? How does this value change with an arbitrary nonzero tilt angle? </li> <li>Find the spring constant k and the mass of the simple harmonic oscillator by tilting and making measuring the response of the system.</li> <li>Gently shake your mobile device up and down so that the amplitude of oscillation becomes large enough for the mass to bounce off the bumpers. What shaking frequency did you use to achieve this large amplitude oscillator? How does this frequency compare to the frequency of oscillation you obtain in #3?</li> <li>What is the phase shift between the position vs. time and the velocity vs. time graphs? Give a physical reason for this phase shift.</li> <li>What value of the damping coefficient b will cause the mass to reach its equilibrium point in the shortest possible time? Verify using the simulation.</li> </ol> <p><i>Note: </i> Because continuously reading the accelerometer may drain the battery on a mobile device, you must run the simulation to read the device tilt. The simulation will automatically pause after 4 minutes to conserve battery power.</p> <h3> Teaching and Learning Objectives:</h3> <ul> <li>Write the force law for simple harmonic motion involving a mass and a spring.</li> <li>Solve this equation for a general harmonic expression for the one-dimensional motion using either sines or cosines.</li> <li>Show that Newton’s Second Law forces a connection between angular velocity of the oscillation, and the spring constant and the mass.</li> <li>Write the general harmonic function describing periodic motion. Identify angular frequency and phase angle.</li> <li>Describe and derive the angular frequency for a specific spring/mass combination.</li> <li>Describe why the simple harmonic oscillator’s motion diminishes over time.</li> </ul> <h3> Credits:</h3> <p>The Vertical Mass and Spring Harmonic Oscillator mobile JavaScript model was developed by Wolfgang Christian using version 5 of the Easy Java Simulations (EJS 5) modeling tool. Although EJS is a Java program, EJS 5 creates stand alone JavaScript programs that run in almost any browser. Information about EJS is available at: &lt;<b><a href=\"http://www.um.es/fem/Ejs/\">http://www.um.es/fem/Ejs/</a></b>&gt; and in the AAPT-ComPADRE Open Source Physics collection &lt;<b><a href=\"http://www.compadre.org/OSP/\" >http://www.compadre.org/OSP/</a></b>&gt;.</p>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'narrativePanel'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new SHOVerticalWithAccelerometer("_topFrame","_ejs_library/",null);
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
