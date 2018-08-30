function PendulumWithMovingSupport(_topFrame,_libraryPath,_codebasePath) {
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

  var width; // EjsS Model.Variables.Drawing Vars.width
  var height; // EjsS Model.Variables.Drawing Vars.height
  var ns; // EjsS Model.Variables.Drawing Vars.ns
  var nr; // EjsS Model.Variables.Drawing Vars.nr
  var dxSpoke; // EjsS Model.Variables.Drawing Vars.dxSpoke
  var dySpoke; // EjsS Model.Variables.Drawing Vars.dySpoke
  var radii; // EjsS Model.Variables.Drawing Vars.radii
  var xCursor; // EjsS Model.Variables.Drawing Vars.xCursor

  var arrowScale; // EjsS Model.Variables.Constants.arrowScale
  var g0; // EjsS Model.Variables.Constants.g0
  var g; // EjsS Model.Variables.Constants.g
  var L; // EjsS Model.Variables.Constants.L
  var k; // EjsS Model.Variables.Constants.k
  var b; // EjsS Model.Variables.Constants.b
  var bcrit; // EjsS Model.Variables.Constants.bcrit
  var phi; // EjsS Model.Variables.Constants.phi
  var showForceBody; // EjsS Model.Variables.Constants.showForceBody
  var gxForce; // EjsS Model.Variables.Constants.gxForce
  var gyForce; // EjsS Model.Variables.Constants.gyForce
  var txForce; // EjsS Model.Variables.Constants.txForce
  var tyForce; // EjsS Model.Variables.Constants.tyForce
  var fxForce; // EjsS Model.Variables.Constants.fxForce
  var fyForce; // EjsS Model.Variables.Constants.fyForce
  var theta0; // EjsS Model.Variables.Constants.theta0
  var omega0; // EjsS Model.Variables.Constants.omega0
  var displaySlider; // EjsS Model.Variables.Constants.displaySlider

  var t; // EjsS Model.Variables.Dynamic Vars.t
  var dt; // EjsS Model.Variables.Dynamic Vars.dt
  var theta; // EjsS Model.Variables.Dynamic Vars.theta
  var omega; // EjsS Model.Variables.Dynamic Vars.omega
  var xPivot; // EjsS Model.Variables.Dynamic Vars.xPivot
  var vPivot; // EjsS Model.Variables.Dynamic Vars.vPivot

  var maxR; // EjsS Model.Variables.Auxiliary Vars.maxR
  var tiltMsg; // EjsS Model.Variables.Auxiliary Vars.tiltMsg
  var dragMsg; // EjsS Model.Variables.Auxiliary Vars.dragMsg
  var startMsg; // EjsS Model.Variables.Auxiliary Vars.startMsg
  var showThetaGraph; // EjsS Model.Variables.Auxiliary Vars.showThetaGraph
  var x; // EjsS Model.Variables.Auxiliary Vars.x
  var y; // EjsS Model.Variables.Auxiliary Vars.y
  var vx; // EjsS Model.Variables.Auxiliary Vars.vx
  var vy; // EjsS Model.Variables.Auxiliary Vars.vy
  var accX; // EjsS Model.Variables.Auxiliary Vars.accX
  var accY; // EjsS Model.Variables.Auxiliary Vars.accY
  var accZ; // EjsS Model.Variables.Auxiliary Vars.accZ
  var msg; // EjsS Model.Variables.Auxiliary Vars.msg
  var accelPresent; // EjsS Model.Variables.Auxiliary Vars.accelPresent
  var accelRunning; // EjsS Model.Variables.Auxiliary Vars.accelRunning

  var _privateOdesList;
  var _ODEi_evolution1;

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      width : width,
      height : height,
      ns : ns,
      nr : nr,
      dxSpoke : dxSpoke,
      dySpoke : dySpoke,
      radii : radii,
      xCursor : xCursor,
      arrowScale : arrowScale,
      g0 : g0,
      g : g,
      L : L,
      k : k,
      b : b,
      bcrit : bcrit,
      phi : phi,
      showForceBody : showForceBody,
      gxForce : gxForce,
      gyForce : gyForce,
      txForce : txForce,
      tyForce : tyForce,
      fxForce : fxForce,
      fyForce : fyForce,
      theta0 : theta0,
      omega0 : omega0,
      displaySlider : displaySlider,
      t : t,
      dt : dt,
      theta : theta,
      omega : omega,
      xPivot : xPivot,
      vPivot : vPivot,
      maxR : maxR,
      tiltMsg : tiltMsg,
      dragMsg : dragMsg,
      startMsg : startMsg,
      showThetaGraph : showThetaGraph,
      x : x,
      y : y,
      vx : vx,
      vy : vy,
      accX : accX,
      accY : accY,
      accZ : accZ,
      msg : msg,
      accelPresent : accelPresent,
      accelRunning : accelRunning
    };
  };

  function _unserialize(json) { return _model.unserialize(json); }

  _model._userUnserialize = function(json) {
    if(typeof json.width != "undefined") width = json.width;
    if(typeof json.height != "undefined") height = json.height;
    if(typeof json.ns != "undefined") ns = json.ns;
    if(typeof json.nr != "undefined") nr = json.nr;
    if(typeof json.dxSpoke != "undefined") dxSpoke = json.dxSpoke;
    if(typeof json.dySpoke != "undefined") dySpoke = json.dySpoke;
    if(typeof json.radii != "undefined") radii = json.radii;
    if(typeof json.xCursor != "undefined") xCursor = json.xCursor;
    if(typeof json.arrowScale != "undefined") arrowScale = json.arrowScale;
    if(typeof json.g0 != "undefined") g0 = json.g0;
    if(typeof json.g != "undefined") g = json.g;
    if(typeof json.L != "undefined") L = json.L;
    if(typeof json.k != "undefined") k = json.k;
    if(typeof json.b != "undefined") b = json.b;
    if(typeof json.bcrit != "undefined") bcrit = json.bcrit;
    if(typeof json.phi != "undefined") phi = json.phi;
    if(typeof json.showForceBody != "undefined") showForceBody = json.showForceBody;
    if(typeof json.gxForce != "undefined") gxForce = json.gxForce;
    if(typeof json.gyForce != "undefined") gyForce = json.gyForce;
    if(typeof json.txForce != "undefined") txForce = json.txForce;
    if(typeof json.tyForce != "undefined") tyForce = json.tyForce;
    if(typeof json.fxForce != "undefined") fxForce = json.fxForce;
    if(typeof json.fyForce != "undefined") fyForce = json.fyForce;
    if(typeof json.theta0 != "undefined") theta0 = json.theta0;
    if(typeof json.omega0 != "undefined") omega0 = json.omega0;
    if(typeof json.displaySlider != "undefined") displaySlider = json.displaySlider;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.theta != "undefined") theta = json.theta;
    if(typeof json.omega != "undefined") omega = json.omega;
    if(typeof json.xPivot != "undefined") xPivot = json.xPivot;
    if(typeof json.vPivot != "undefined") vPivot = json.vPivot;
    if(typeof json.maxR != "undefined") maxR = json.maxR;
    if(typeof json.tiltMsg != "undefined") tiltMsg = json.tiltMsg;
    if(typeof json.dragMsg != "undefined") dragMsg = json.dragMsg;
    if(typeof json.startMsg != "undefined") startMsg = json.startMsg;
    if(typeof json.showThetaGraph != "undefined") showThetaGraph = json.showThetaGraph;
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.y != "undefined") y = json.y;
    if(typeof json.vx != "undefined") vx = json.vx;
    if(typeof json.vy != "undefined") vy = json.vy;
    if(typeof json.accX != "undefined") accX = json.accX;
    if(typeof json.accY != "undefined") accY = json.accY;
    if(typeof json.accZ != "undefined") accZ = json.accZ;
    if(typeof json.msg != "undefined") msg = json.msg;
    if(typeof json.accelPresent != "undefined") accelPresent = json.accelPresent;
    if(typeof json.accelRunning != "undefined") accelRunning = json.accelRunning;
   _resetSolvers();
   _model.update();
  };

  _model.addToReset(function() {
    __pagesEnabled["Draw Polar Coord"] = true;
    __pagesEnabled["Init Acc"] = true;
    __pagesEnabled["Read Sensor"] = true;
    __pagesEnabled["Pendulum ODE"] = true;
    __pagesEnabled["Max Time"] = true;
    __pagesEnabled["Compute derived variables"] = true;
  });

  _model.addToReset(function() {
    width = _isMobile?350:450; // EjsS Model.Variables.Drawing Vars.width
    height = _isMobile?350:450; // EjsS Model.Variables.Drawing Vars.height
    ns = 16; // EjsS Model.Variables.Drawing Vars.ns
    nr = ns; // EjsS Model.Variables.Drawing Vars.nr
    dxSpoke = new Array(ns); // EjsS Model.Variables.Drawing Vars.dxSpoke
    dySpoke = new Array(ns); // EjsS Model.Variables.Drawing Vars.dySpoke
    radii = new Array(nr); // EjsS Model.Variables.Drawing Vars.radii
    xCursor = 0; // EjsS Model.Variables.Drawing Vars.xCursor
  });

  _model.addToReset(function() {
    arrowScale = 20; // EjsS Model.Variables.Constants.arrowScale
    g0 = 9.8; // EjsS Model.Variables.Constants.g0
    g = g0; // EjsS Model.Variables.Constants.g
    L = 1.0; // EjsS Model.Variables.Constants.L
    k = 32; // EjsS Model.Variables.Constants.k
    b = 0; // EjsS Model.Variables.Constants.b
    bcrit = 2.0*Math.sqrt(k); // EjsS Model.Variables.Constants.bcrit
    phi = 0; // EjsS Model.Variables.Constants.phi
    showForceBody = false; // EjsS Model.Variables.Constants.showForceBody
    gxForce = -g*Math.sin(phi); // EjsS Model.Variables.Constants.gxForce
    gyForce = -g*Math.cos(phi); // EjsS Model.Variables.Constants.gyForce
    txForce = g*Math.sin(phi); // EjsS Model.Variables.Constants.txForce
    tyForce = g*Math.cos(phi); // EjsS Model.Variables.Constants.tyForce
    fxForce = 0; // EjsS Model.Variables.Constants.fxForce
    fyForce = 0; // EjsS Model.Variables.Constants.fyForce
    theta0 = 0; // EjsS Model.Variables.Constants.theta0
    omega0 = 0; // EjsS Model.Variables.Constants.omega0
    displaySlider = "none"; // EjsS Model.Variables.Constants.displaySlider
  });

  _model.addToReset(function() {
    t = 0.0; // EjsS Model.Variables.Dynamic Vars.t
    dt = 0.1; // EjsS Model.Variables.Dynamic Vars.dt
    theta = theta0; // EjsS Model.Variables.Dynamic Vars.theta
    omega = omega0; // EjsS Model.Variables.Dynamic Vars.omega
    xPivot = 0; // EjsS Model.Variables.Dynamic Vars.xPivot
    vPivot = 0; // EjsS Model.Variables.Dynamic Vars.vPivot
  });

  _model.addToReset(function() {
    maxR = 2; // EjsS Model.Variables.Auxiliary Vars.maxR
    tiltMsg = ""; // EjsS Model.Variables.Auxiliary Vars.tiltMsg
    dragMsg = ""; // EjsS Model.Variables.Auxiliary Vars.dragMsg
    startMsg = "Drag the pendulum."; // EjsS Model.Variables.Auxiliary Vars.startMsg
    x = L*Math.sin(theta); // EjsS Model.Variables.Auxiliary Vars.x
    y = -L*Math.cos(theta); // EjsS Model.Variables.Auxiliary Vars.y
    vx = omega*L*Math.cos(theta); // EjsS Model.Variables.Auxiliary Vars.vx
    vy = omega*L*Math.sin(theta); // EjsS Model.Variables.Auxiliary Vars.vy
    accX = 0; // EjsS Model.Variables.Auxiliary Vars.accX
    accY = -g; // EjsS Model.Variables.Auxiliary Vars.accY
    accZ = 0; // EjsS Model.Variables.Auxiliary Vars.accZ
    msg = "message"; // EjsS Model.Variables.Auxiliary Vars.msg
    accelPresent = false; // EjsS Model.Variables.Auxiliary Vars.accelPresent
    accelRunning = false; // EjsS Model.Variables.Auxiliary Vars.accelRunning
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

  function newPosition () {  // > CustomCode.User new position:1
    // length is constant  // > CustomCode.User new position:2
    theta = Math.atan2(x,-y);  // > CustomCode.User new position:3
    x=L*Math.sin(theta);  // > CustomCode.User new position:4
    y=-L*Math.cos(theta);  // > CustomCode.User new position:5
    vx = omega*L*Math.cos(theta);  // > CustomCode.User new position:6
    vy = omega*L*Math.sin(theta);  // > CustomCode.User new position:7
    t = 0.0;  // > CustomCode.User new position:8
  }  // > CustomCode.User new position:9
  function resetTime () {  // > CustomCode.User new position:10
    xCursor=xPivot=0;  // > CustomCode.User new position:11
    vPivot=0;  // > CustomCode.User new position:12
    t=0;  // > CustomCode.User new position:13
    theta=theta0;  // > CustomCode.User new position:14
    omega=omega0;  // > CustomCode.User new position:15
    x=L*Math.sin(theta);  // > CustomCode.User new position:16
    y=-L*Math.cos(theta);  // > CustomCode.User new position:17
    vx = omega*L*Math.cos(theta);  // > CustomCode.User new position:18
    vy = omega*L*Math.sin(theta);  // > CustomCode.User new position:19
  }  // > CustomCode.User new position:20

  function startAccelerometer () {  // > CustomCode.Sensor Functions:1
    msg="";  // > CustomCode.Sensor Functions:2
    displaySlider="none";  // > CustomCode.Sensor Functions:3
    theta=0; // slider not used  // > CustomCode.Sensor Functions:4
    xCursor=xPivot=0;  // > CustomCode.Sensor Functions:5
    accelerometer.start();  // > CustomCode.Sensor Functions:6
    accelerometer.setAverageInterval(0.1);  // > CustomCode.Sensor Functions:7
    accelRunning=true;  // > CustomCode.Sensor Functions:8
    updateAccValues();  // > CustomCode.Sensor Functions:9
  }  // > CustomCode.Sensor Functions:10
  function stopAccelerometer () {  // > CustomCode.Sensor Functions:11
    accelerometer.stop();  // > CustomCode.Sensor Functions:12
    msg="Use slider to simulate acceleration."  // > CustomCode.Sensor Functions:13
    phi=0; // acceleromter angle not used  // > CustomCode.Sensor Functions:14
    accX=0;  // > CustomCode.Sensor Functions:15
    accY=g;  // > CustomCode.Sensor Functions:16
    accZ=0;  // > CustomCode.Sensor Functions:17
    displaySlider="block";  // > CustomCode.Sensor Functions:18
    accelRunning=false;  // > CustomCode.Sensor Functions:19
  }  // > CustomCode.Sensor Functions:20
  function readAccelerometer () {  // > CustomCode.Sensor Functions:21
    var viewData = accelerometer.getViewData();  // > CustomCode.Sensor Functions:22
    accX = viewData.x;  // > CustomCode.Sensor Functions:23
    accY = viewData.y;  // > CustomCode.Sensor Functions:24
    accZ = viewData.z;  // > CustomCode.Sensor Functions:25
    //Assume sensor is not present if all componets are zero  // > CustomCode.Sensor Functions:26
    var hasData=viewData.x||viewData.y||viewData.z;  // > CustomCode.Sensor Functions:27
    msg=hasData?"":"Accelerometer not detected. Use slider to simulate acceleration.";  // > CustomCode.Sensor Functions:28
    //phi=hasData?Math.atan2(accX,-accY):0;  // > CustomCode.Sensor Functions:29
    if(hasData){  // > CustomCode.Sensor Functions:30
      phi=-Math.atan2(accX,-accY);   //tilt angle  // > CustomCode.Sensor Functions:31
      xCursor=xPivot=0;              // center the pivor  // > CustomCode.Sensor Functions:32
      g=Math.sqrt(accX*accX+accY*accY);  // > CustomCode.Sensor Functions:33
    }else{  // fake data  // > CustomCode.Sensor Functions:34
      phi=0; // no tilt  // > CustomCode.Sensor Functions:35
      g=g0;  // > CustomCode.Sensor Functions:36
      accX=0;  // > CustomCode.Sensor Functions:37
      accY=g;  // > CustomCode.Sensor Functions:38
    }  // > CustomCode.Sensor Functions:39
  }  // > CustomCode.Sensor Functions:40

  function updateAccValues() {  // > CustomCode.Callback:1
    if(accelRunning){  // > CustomCode.Callback:2
      if(_isPaused ){  // > CustomCode.Callback:3
        readAccelerometer();  // > CustomCode.Callback:4
        _model.update();  // > CustomCode.Callback:5
        _view._update();  // > CustomCode.Callback:6
        _view._render();  // > CustomCode.Callback:7
       }  // > CustomCode.Callback:8
      window.setTimeout(updateAccValues, 100);// read accelerometer every 1/10 sec  // > CustomCode.Callback:9
    }  // > CustomCode.Callback:10
  }  // > CustomCode.Callback:11

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Draw Polar Coord"]) return;
    var theta=0, dtheta=2*Math.PI/ns;  // > Initialization.Draw Polar Coord:1
    for(var i=0; i<ns; i++){  // > Initialization.Draw Polar Coord:2
      dxSpoke[i]=2*maxR*Math.sin(theta);  // > Initialization.Draw Polar Coord:3
      dySpoke[i]=2*maxR*Math.cos(theta);  // > Initialization.Draw Polar Coord:4
      theta+=dtheta;  // > Initialization.Draw Polar Coord:5
    }  // > Initialization.Draw Polar Coord:6
    var dr=0.5;  // > Initialization.Draw Polar Coord:7
    var r=dr;  // > Initialization.Draw Polar Coord:8
    for(var i=0; i<nr; i++){  // > Initialization.Draw Polar Coord:9
      radii[i]=2*r;  // > Initialization.Draw Polar Coord:10
      r+=dr;  // > Initialization.Draw Polar Coord:11
    }  // > Initialization.Draw Polar Coord:12
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Acc"]) return;
    accelPresent=accelerometer.isPresent();  // for accelerometer; may give false positive  // > Initialization.Init Acc:1
    if (accelPresent) {  // > Initialization.Init Acc:2
      startAccelerometer();  // > Initialization.Init Acc:3
    }else{  // > Initialization.Init Acc:4
      stopAccelerometer();  // > Initialization.Init Acc:5
    }  // > Initialization.Init Acc:6
    resetTime ();  // > Initialization.Init Acc:7
  });

  _model.addToInitialization(function() {
    _initializeSolvers();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Read Sensor"]) return;
    readAccelerometer ();  // > Evolution.Read Sensor:1
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Pendulum ODE"]) return;
    _ODEi_evolution1.step();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Max Time"]) return;
    if(t>15*60){  // pause after 15 minutes to save battery  // > Evolution.Max Time:1
      _pause();  // > Evolution.Max Time:2
      stopAccelerometer();  // > Evolution.Max Time:3
      msg="Saving battery. Reselect Sensor and press run to continue.";  // > Evolution.Max Time:4
      t=0;  // > Evolution.Max Time:5
    }  // > Evolution.Max Time:6
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["Compute derived variables"]) return;
    x= L*Math.sin(theta);  // > FixedRelations.Compute derived variables:1
    y = -L*Math.cos(theta);  // > FixedRelations.Compute derived variables:2
    vx = omega*L*Math.cos(theta);  // > FixedRelations.Compute derived variables:3
    vy = omega*L*Math.sin(theta);  // > FixedRelations.Compute derived variables:4
    if(_model.isPaused())xPivot=xCursor;  // > FixedRelations.Compute derived variables:5
    var mag=Math.sqrt(accX*accX+accY*accY+accZ*accZ);  // > FixedRelations.Compute derived variables:6
    var projection=(accelRunning && mag>1E-2)?g0*g/mag:g0;  // > FixedRelations.Compute derived variables:7
    gxForce=-projection*Math.sin(phi);  // > FixedRelations.Compute derived variables:8
    gyForce=-projection*Math.cos(phi);  // > FixedRelations.Compute derived variables:9
    var centripetal=omega*omega*L;  // > FixedRelations.Compute derived variables:10
    var tension=centripetal+g*Math.cos(theta+phi);  // tension in rod due to centripetal force and gravity component  // > FixedRelations.Compute derived variables:11
    txForce=tension*Math.sin(-theta);  // > FixedRelations.Compute derived variables:12
    tyForce=tension*Math.cos(theta);  // > FixedRelations.Compute derived variables:13
    fxForce=-b*L*omega*Math.cos(theta);  // > FixedRelations.Compute derived variables:14
    fyForce=-b*L*omega*Math.sin(theta);  // > FixedRelations.Compute derived variables:15
    tiltMsg=accelRunning?"device tilt ="+(phi*180/Math.PI).toFixed(1):"";  // > FixedRelations.Compute derived variables:16
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
    if (_odeName=="Pendulum ODE") return _ODEi_evolution1;
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
    var __solverClass = EJSS_ODE_SOLVERS.cashKarp45;
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
      __eventSolver.setTolerances(1.0E-6,1.0E-6);
      __mustReinitialize = true;
      __mustInitialize = false;
    };

    function __pushState() {
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        if (__state[__cIn]!=theta) __mustReinitialize = true;
        __state[__cIn++] = theta;
        if (__state[__cIn]!=omega) __mustReinitialize = true;
        __state[__cIn++] = omega;
        if (__state[__cIn]!=xPivot) __mustReinitialize = true;
        __state[__cIn++] = xPivot;
        if (__state[__cIn]!=vPivot) __mustReinitialize = true;
        __state[__cIn++] = vPivot;
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
      __eventSolver.setTolerances(1.0E-6,1.0E-6);
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
        theta = __state[__cOut++];
        omega = __state[__cOut++];
        xPivot = __state[__cOut++];
        vPivot = __state[__cOut++];
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
        var theta = _aState[__cOut++];
        var omega = _aState[__cOut++];
        var xPivot = _aState[__cOut++];
        var vPivot = _aState[__cOut++];
        var t = _aState[__cOut++];
      // Preliminary code: Code to be executed before rate equations are evaluated
        var alpha=0;  // > Preliminary code for ODE.Pendulum ODE:1
        if(accelRunning){ // use sensor and proper acceleration  // > Preliminary code for ODE.Pendulum ODE:2
          alpha=-(g/L)*Math.sin(theta+phi)-b*L*omega;  // > Preliminary code for ODE.Pendulum ODE:3
        }else{  // use slider and ignore sensor  // > Preliminary code for ODE.Pendulum ODE:4
          var ax=-0.1*k*(xPivot-xCursor); // scaled acceleration of pivot  // > Preliminary code for ODE.Pendulum ODE:5
          alpha = -ax*Math.cos(theta)/L-g0*Math.sin(theta)/L-b*L*omega;  // > Preliminary code for ODE.Pendulum ODE:6
        }  // > Preliminary code for ODE.Pendulum ODE:7
      // Compute the rate
        var __cRate=0;
        _aRate[__cRate++] = omega; // Rate for ODE: Pendulum ODE:theta
        _aRate[__cRate++] = alpha; // Rate for ODE: Pendulum ODE:omega
        _aRate[__cRate++] = vPivot; // Rate for ODE: Pendulum ODE:xPivot
        _aRate[__cRate++] = -k*(xPivot-xCursor)-bcrit*vPivot; // Rate for ODE: Pendulum ODE:vPivot
        _aRate[__cRate++] = 1; // independent variable
        return _aRate;
    }; //end of getRate

    __instantiateSolver();

    return __odeSelf;
  }

  function _historic_theta(__time) {
    var __index = 0;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_omega(__time) {
    var __index = 0 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_xPivot(__time) {
    var __index = 0 + 1 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_vPivot(__time) {
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
    _viewsInfo[_counter++] = { name : "Pendulum View", width : 800, height : 600 };
    return _viewsInfo;
  } // end of _getViews

  function _selectView(_viewNumber) {
    _view = null;
    _view = new PendulumWithMovingSupport_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view._setRootProperty(_model,"OnBlur",function() {
  stopAccelerometer();

}) // Pendulum View setting property 'OnBlur' for root element
          _view.accelCheck.linkProperty("Checked",  function() { return accelRunning; }, function(_v) { accelRunning = _v; } ); // Pendulum View linking property 'Checked' for element 'accelCheck'
          _view.accelCheck.setAction("OnCheckOff", function() {
  stopAccelerometer ();

}); // Pendulum View setting action 'OnCheckOff' for element 'accelCheck'
          _view.accelCheck.setAction("OnCheckOn", function() {
  accelPresent=accelerometer.isPresent();  // for accelerometer; may give false positive
  if (accelPresent) {
    startAccelerometer();
  }else{
    stopAccelerometer();
  }

}); // Pendulum View setting action 'OnCheckOn' for element 'accelCheck'
          _view.forceBodyCheck.linkProperty("Checked",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // Pendulum View linking property 'Checked' for element 'forceBodyCheck'
          _view.sliderPanel.linkProperty("Display",  function() { return displaySlider; }, function(_v) { displaySlider = _v; } ); // Pendulum View linking property 'Display' for element 'sliderPanel'
          _view.xSlider.linkProperty("Minimum",  function() { return -maxR/2; } ); // Pendulum View linking property 'Minimum' for element 'xSlider'
          _view.xSlider.linkProperty("Maximum",  function() { return maxR/2; } ); // Pendulum View linking property 'Maximum' for element 'xSlider'
          _view.xSlider.linkProperty("Value",  function() { return xCursor; }, function(_v) { xCursor = _v; } ); // Pendulum View linking property 'Value' for element 'xSlider'
          _view.xSlider.setAction("OnChange", function() {
  _view._update();

}); // Pendulum View setting action 'OnChange' for element 'xSlider'
          _view.penduumDrawingPanel.linkProperty("Height",  function() { return height; }, function(_v) { height = _v; } ); // Pendulum View linking property 'Height' for element 'penduumDrawingPanel'
          _view.penduumDrawingPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // Pendulum View linking property 'Width' for element 'penduumDrawingPanel'
          _view.penduumDrawingPanel.linkProperty("MinimumX",  function() { return -maxR; } ); // Pendulum View linking property 'MinimumX' for element 'penduumDrawingPanel'
          _view.penduumDrawingPanel.linkProperty("MinimumY",  function() { return -maxR; } ); // Pendulum View linking property 'MinimumY' for element 'penduumDrawingPanel'
          _view.penduumDrawingPanel.linkProperty("BLMessage",  function() { return tiltMsg; }, function(_v) { tiltMsg = _v; } ); // Pendulum View linking property 'BLMessage' for element 'penduumDrawingPanel'
          _view.penduumDrawingPanel.linkProperty("MaximumY",  function() { return maxR; }, function(_v) { maxR = _v; } ); // Pendulum View linking property 'MaximumY' for element 'penduumDrawingPanel'
          _view.penduumDrawingPanel.linkProperty("TLMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // Pendulum View linking property 'TLMessage' for element 'penduumDrawingPanel'
          _view.penduumDrawingPanel.linkProperty("MaximumX",  function() { return maxR; }, function(_v) { maxR = _v; } ); // Pendulum View linking property 'MaximumX' for element 'penduumDrawingPanel'
          _view.penduumDrawingPanel.linkProperty("BRMessage",  function() { return "t ="+t.toFixed(2); } ); // Pendulum View linking property 'BRMessage' for element 'penduumDrawingPanel'
          _view.pendulumGroup.linkProperty("X",  function() { return xPivot; }, function(_v) { xPivot = _v; } ); // Pendulum View linking property 'X' for element 'pendulumGroup'
          _view.radiiSet.linkProperty("NumberOfElements",  function() { return nr; }, function(_v) { nr = _v; } ); // Pendulum View linking property 'NumberOfElements' for element 'radiiSet'
          _view.radiiSet.linkProperty("SizeX",  function() { return radii; }, function(_v) { radii = _v; } ); // Pendulum View linking property 'SizeX' for element 'radiiSet'
          _view.radiiSet.linkProperty("SizeY",  function() { return radii; }, function(_v) { radii = _v; } ); // Pendulum View linking property 'SizeY' for element 'radiiSet'
          _view.spokeSet.linkProperty("NumberOfElements",  function() { return ns; }, function(_v) { ns = _v; } ); // Pendulum View linking property 'NumberOfElements' for element 'spokeSet'
          _view.spokeSet.linkProperty("SizeX",  function() { return dxSpoke; }, function(_v) { dxSpoke = _v; } ); // Pendulum View linking property 'SizeX' for element 'spokeSet'
          _view.spokeSet.linkProperty("SizeY",  function() { return dySpoke; }, function(_v) { dySpoke = _v; } ); // Pendulum View linking property 'SizeY' for element 'spokeSet'
          _view.pivotShape.linkProperty("Transformation",  function() { return theta; }, function(_v) { theta = _v; } ); // Pendulum View linking property 'Transformation' for element 'pivotShape'
          _view.armSegment.linkProperty("SizeX",  function() { return x; }, function(_v) { x = _v; } ); // Pendulum View linking property 'SizeX' for element 'armSegment'
          _view.armSegment.linkProperty("Visibility",  function() { return !showForceBody; } ); // Pendulum View linking property 'Visibility' for element 'armSegment'
          _view.armSegment.linkProperty("SizeY",  function() { return y; }, function(_v) { y = _v; } ); // Pendulum View linking property 'SizeY' for element 'armSegment'
          _view.bobShape.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // Pendulum View linking property 'X' for element 'bobShape'
          _view.bobShape.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // Pendulum View linking property 'Y' for element 'bobShape'
          _view.bobShape.setAction("OnDrag", newPosition); // Pendulum View setting action 'OnDrag' for element 'bobShape'
          _view.velocityArrow.linkProperty("SizeX",  function() { return vx/4; } ); // Pendulum View linking property 'SizeX' for element 'velocityArrow'
          _view.velocityArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // Pendulum View linking property 'X' for element 'velocityArrow'
          _view.velocityArrow.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // Pendulum View linking property 'Y' for element 'velocityArrow'
          _view.velocityArrow.linkProperty("Visibility",  function() { return !showForceBody; } ); // Pendulum View linking property 'Visibility' for element 'velocityArrow'
          _view.velocityArrow.linkProperty("SizeY",  function() { return vy/4; } ); // Pendulum View linking property 'SizeY' for element 'velocityArrow'
          _view.vText.linkProperty("X",  function() { return x +1.05*vx/4; } ); // Pendulum View linking property 'X' for element 'vText'
          _view.vText.linkProperty("Y",  function() { return y +1.05*vy/4; } ); // Pendulum View linking property 'Y' for element 'vText'
          _view.vText.linkProperty("Visibility",  function() { return Math.sqrt(vx*vx+vy*vy)>0.2 && !showForceBody; } ); // Pendulum View linking property 'Visibility' for element 'vText'
          _view.forceBodyGroup.linkProperty("Visibility",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // Pendulum View linking property 'Visibility' for element 'forceBodyGroup'
          _view.gArrow.linkProperty("SizeX",  function() { return gxForce/arrowScale; } ); // Pendulum View linking property 'SizeX' for element 'gArrow'
          _view.gArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // Pendulum View linking property 'X' for element 'gArrow'
          _view.gArrow.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // Pendulum View linking property 'Y' for element 'gArrow'
          _view.gArrow.linkProperty("SizeY",  function() { return gyForce/arrowScale; } ); // Pendulum View linking property 'SizeY' for element 'gArrow'
          _view.gText.linkProperty("Transformation",  function() { return -phi; } ); // Pendulum View linking property 'Transformation' for element 'gText'
          _view.gText.linkProperty("X",  function() { return x+gxForce/arrowScale; } ); // Pendulum View linking property 'X' for element 'gText'
          _view.gText.linkProperty("Y",  function() { return y+gyForce/arrowScale; } ); // Pendulum View linking property 'Y' for element 'gText'
          _view.tArrow.linkProperty("SizeX",  function() { return txForce/arrowScale; } ); // Pendulum View linking property 'SizeX' for element 'tArrow'
          _view.tArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // Pendulum View linking property 'X' for element 'tArrow'
          _view.tArrow.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // Pendulum View linking property 'Y' for element 'tArrow'
          _view.tArrow.linkProperty("SizeY",  function() { return tyForce/arrowScale; } ); // Pendulum View linking property 'SizeY' for element 'tArrow'
          _view.tText.linkProperty("Transformation",  function() { return -phi; } ); // Pendulum View linking property 'Transformation' for element 'tText'
          _view.tText.linkProperty("X",  function() { return x+txForce/arrowScale; } ); // Pendulum View linking property 'X' for element 'tText'
          _view.tText.linkProperty("Y",  function() { return y+tyForce/arrowScale+0.04; } ); // Pendulum View linking property 'Y' for element 'tText'
          _view.fArrow.linkProperty("SizeX",  function() { return fxForce/arrowScale; } ); // Pendulum View linking property 'SizeX' for element 'fArrow'
          _view.fArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // Pendulum View linking property 'X' for element 'fArrow'
          _view.fArrow.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // Pendulum View linking property 'Y' for element 'fArrow'
          _view.fArrow.linkProperty("SizeY",  function() { return fyForce/arrowScale; } ); // Pendulum View linking property 'SizeY' for element 'fArrow'
          _view.fText.linkProperty("Transformation",  function() { return -phi; } ); // Pendulum View linking property 'Transformation' for element 'fText'
          _view.fText.linkProperty("X",  function() { return x+fxForce/arrowScale; } ); // Pendulum View linking property 'X' for element 'fText'
          _view.fText.linkProperty("Y",  function() { return y+fyForce/arrowScale+0.04; } ); // Pendulum View linking property 'Y' for element 'fText'
          _view.cursor.linkProperty("X",  function() { return xCursor; }, function(_v) { xCursor = _v; } ); // Pendulum View linking property 'X' for element 'cursor'
          _view.thetaField.linkProperty("Value",  function() { return theta; }, function(_v) { theta = _v; } ); // Pendulum View linking property 'Value' for element 'thetaField'
          _view.thetaField.linkProperty("Editable",  function() { return _isPaused; } ); // Pendulum View linking property 'Editable' for element 'thetaField'
          _view.thetaField.setAction("OnChange", function() {
  theta=Math.max(-Math.PI,theta);
  theta=Math.min(Math.PI,theta);
  theta0=theta;

}); // Pendulum View setting action 'OnChange' for element 'thetaField'
          _view.omegaField.linkProperty("Value",  function() { return omega; }, function(_v) { omega = _v; } ); // Pendulum View linking property 'Value' for element 'omegaField'
          _view.omegaField.linkProperty("Editable",  function() { return _isPaused; } ); // Pendulum View linking property 'Editable' for element 'omegaField'
          _view.omegaField.setAction("OnChange", function() {
  omega=Math.max(-2*Math.PI,omega);
  omega=Math.min(2*Math.PI,omega);
  omega0=omega;

}); // Pendulum View setting action 'OnChange' for element 'omegaField'
          _view.lengthField.linkProperty("Value",  function() { return L; }, function(_v) { L = _v; } ); // Pendulum View linking property 'Value' for element 'lengthField'
          _view.lengthField.linkProperty("Editable",  function() { return _isPaused; } ); // Pendulum View linking property 'Editable' for element 'lengthField'
          _view.lengthField.setAction("OnChange", function() {
  L=Math.max(0.5,L);
  L=Math.min(1.5,L);

}); // Pendulum View setting action 'OnChange' for element 'lengthField'
          _view.bField.linkProperty("Value",  function() { return b; }, function(_v) { b = _v; } ); // Pendulum View linking property 'Value' for element 'bField'
          _view.bField.linkProperty("Editable",  function() { return _isPaused; } ); // Pendulum View linking property 'Editable' for element 'bField'
          _view.bField.setAction("OnChange", function() {
  b=Math.max(0,b);
  b=Math.min(1,b);

}); // Pendulum View setting action 'OnChange' for element 'bField'
          _view.runPauseButton.setAction("OffClick", _pause); // Pendulum View setting action 'OffClick' for element 'runPauseButton'
          _view.runPauseButton.linkProperty("State",  function() { return _isPaused; } ); // Pendulum View linking property 'State' for element 'runPauseButton'
          _view.runPauseButton.setAction("OnClick", function() {
  _play();

}); // Pendulum View setting action 'OnClick' for element 'runPauseButton'
          _view.stepButton.setAction("OnClick", function() {
  _step();

}); // Pendulum View setting action 'OnClick' for element 'stepButton'
          _view.resetTimeButton.setAction("OnPress", function() {
  _pause();
  resetTime();

}); // Pendulum View setting action 'OnPress' for element 'resetTimeButton'
          _view.resetButton.setAction("OnClick", function() {
  _reset();

}); // Pendulum View setting action 'OnClick' for element 'resetButton'
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
function PendulumWithMovingSupport_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = PendulumWithMovingSupport_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function PendulumWithMovingSupport_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"labelPanel", _view._topFrame) // EJsS HtmlView.Pendulum View: declaration of element 'labelPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.Pendulum View: setting property 'CSS' for element 'labelPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"labelTitle", _view.labelPanel) // EJsS HtmlView.Pendulum View: declaration of element 'labelTitle'
      .setProperty("Foreground","Blue") // EJsS HtmlView.Pendulum View: setting property 'Foreground' for element 'labelTitle'
      .setProperty("Text","<h1>Pendulum with Moving Support</h1>") // EJsS HtmlView.Pendulum View: setting property 'Text' for element 'labelTitle'
      ;

    _view._addElement(EJSS_INTERFACE.wrappedPanel,"wrappedPanel", _view._topFrame) // EJsS HtmlView.Pendulum View: declaration of element 'wrappedPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"topPanel", _view.wrappedPanel) // EJsS HtmlView.Pendulum View: declaration of element 'topPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"checkPanel", _view.topPanel) // EJsS HtmlView.Pendulum View: declaration of element 'checkPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.Pendulum View: setting property 'CSS' for element 'checkPanel'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"accelCheck", _view.checkPanel) // EJsS HtmlView.Pendulum View: declaration of element 'accelCheck'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.Pendulum View: setting property 'CSS' for element 'accelCheck'
      .setProperty("Tooltip","Enable the accelometer") // EJsS HtmlView.Pendulum View: setting property 'Tooltip' for element 'accelCheck'
      .setProperty("Text","Accelerometer") // EJsS HtmlView.Pendulum View: setting property 'Text' for element 'accelCheck'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"forceBodyCheck", _view.checkPanel) // EJsS HtmlView.Pendulum View: declaration of element 'forceBodyCheck'
      .setProperty("Text","Force body") // EJsS HtmlView.Pendulum View: setting property 'Text' for element 'forceBodyCheck'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"sliderPanel", _view.topPanel) // EJsS HtmlView.Pendulum View: declaration of element 'sliderPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"aLabel", _view.sliderPanel) // EJsS HtmlView.Pendulum View: declaration of element 'aLabel'
      .setProperty("Text"," x =") // EJsS HtmlView.Pendulum View: setting property 'Text' for element 'aLabel'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"xSlider", _view.sliderPanel) // EJsS HtmlView.Pendulum View: declaration of element 'xSlider'
      .setProperty("Width",300) // EJsS HtmlView.Pendulum View: setting property 'Width' for element 'xSlider'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"mainPanel", _view.wrappedPanel) // EJsS HtmlView.Pendulum View: declaration of element 'mainPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.Pendulum View: setting property 'CSS' for element 'mainPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"penduumDrawingPanel", _view.mainPanel) // EJsS HtmlView.Pendulum View: declaration of element 'penduumDrawingPanel'
      .setProperty("ShowAreaRectangle",false) // EJsS HtmlView.Pendulum View: setting property 'ShowAreaRectangle' for element 'penduumDrawingPanel'
      .setProperty("ShowCoordinates",false) // EJsS HtmlView.Pendulum View: setting property 'ShowCoordinates' for element 'penduumDrawingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.Pendulum View: setting property 'Enabled' for element 'penduumDrawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"pendulumGroup", _view.penduumDrawingPanel) // EJsS HtmlView.Pendulum View: declaration of element 'pendulumGroup'
      ;

    _view._addElement(EJSS_DRAWING2D.shapeSet,"radiiSet", _view.pendulumGroup) // EJsS HtmlView.Pendulum View: declaration of element 'radiiSet'
      .setProperty("LineColor","LightGray") // EJsS HtmlView.Pendulum View: setting property 'LineColor' for element 'radiiSet'
      .setProperty("X",0) // EJsS HtmlView.Pendulum View: setting property 'X' for element 'radiiSet'
      .setProperty("Y",0) // EJsS HtmlView.Pendulum View: setting property 'Y' for element 'radiiSet'
      .setProperty("LineWidth",2) // EJsS HtmlView.Pendulum View: setting property 'LineWidth' for element 'radiiSet'
      .setProperty("DrawFill",false) // EJsS HtmlView.Pendulum View: setting property 'DrawFill' for element 'radiiSet'
      ;

    _view._addElement(EJSS_DRAWING2D.segmentSet,"spokeSet", _view.pendulumGroup) // EJsS HtmlView.Pendulum View: declaration of element 'spokeSet'
      .setProperty("LineColor","LightGray") // EJsS HtmlView.Pendulum View: setting property 'LineColor' for element 'spokeSet'
      .setProperty("X",0) // EJsS HtmlView.Pendulum View: setting property 'X' for element 'spokeSet'
      .setProperty("Y",0) // EJsS HtmlView.Pendulum View: setting property 'Y' for element 'spokeSet'
      .setProperty("LineWidth",2) // EJsS HtmlView.Pendulum View: setting property 'LineWidth' for element 'spokeSet'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"pivotShape", _view.pendulumGroup) // EJsS HtmlView.Pendulum View: declaration of element 'pivotShape'
      .setProperty("ShapeType","WHEEL") // EJsS HtmlView.Pendulum View: setting property 'ShapeType' for element 'pivotShape'
      .setProperty("X",0) // EJsS HtmlView.Pendulum View: setting property 'X' for element 'pivotShape'
      .setProperty("Y",0) // EJsS HtmlView.Pendulum View: setting property 'Y' for element 'pivotShape'
      .setProperty("DrawFill",false) // EJsS HtmlView.Pendulum View: setting property 'DrawFill' for element 'pivotShape'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"armSegment", _view.pendulumGroup) // EJsS HtmlView.Pendulum View: declaration of element 'armSegment'
      .setProperty("X",0) // EJsS HtmlView.Pendulum View: setting property 'X' for element 'armSegment'
      .setProperty("LineColor","Black") // EJsS HtmlView.Pendulum View: setting property 'LineColor' for element 'armSegment'
      .setProperty("Y",0) // EJsS HtmlView.Pendulum View: setting property 'Y' for element 'armSegment'
      .setProperty("LineWidth",3) // EJsS HtmlView.Pendulum View: setting property 'LineWidth' for element 'armSegment'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"bobShape", _view.pendulumGroup) // EJsS HtmlView.Pendulum View: declaration of element 'bobShape'
      .setProperty("FillColor","Pink") // EJsS HtmlView.Pendulum View: setting property 'FillColor' for element 'bobShape'
      .setProperty("SizeX",0.2) // EJsS HtmlView.Pendulum View: setting property 'SizeX' for element 'bobShape'
      .setProperty("SizeY",0.2) // EJsS HtmlView.Pendulum View: setting property 'SizeY' for element 'bobShape'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.Pendulum View: setting property 'EnabledPosition' for element 'bobShape'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"velocityArrow", _view.pendulumGroup) // EJsS HtmlView.Pendulum View: declaration of element 'velocityArrow'
      .setProperty("FillColor","Red") // EJsS HtmlView.Pendulum View: setting property 'FillColor' for element 'velocityArrow'
      .setProperty("Measured",false) // EJsS HtmlView.Pendulum View: setting property 'Measured' for element 'velocityArrow'
      .setProperty("LineColor","Magenta") // EJsS HtmlView.Pendulum View: setting property 'LineColor' for element 'velocityArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.Pendulum View: setting property 'LineWidth' for element 'velocityArrow'
      .setProperty("DrawFill",true) // EJsS HtmlView.Pendulum View: setting property 'DrawFill' for element 'velocityArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"vText", _view.pendulumGroup) // EJsS HtmlView.Pendulum View: declaration of element 'vText'
      .setProperty("FillColor","Red") // EJsS HtmlView.Pendulum View: setting property 'FillColor' for element 'vText'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.Pendulum View: setting property 'RelativePosition' for element 'vText'
      .setProperty("Measured",false) // EJsS HtmlView.Pendulum View: setting property 'Measured' for element 'vText'
      .setProperty("Text","v") // EJsS HtmlView.Pendulum View: setting property 'Text' for element 'vText'
      .setProperty("Font","normal bold 14px ") // EJsS HtmlView.Pendulum View: setting property 'Font' for element 'vText'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"forceBodyGroup", _view.pendulumGroup) // EJsS HtmlView.Pendulum View: declaration of element 'forceBodyGroup'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"gArrow", _view.forceBodyGroup) // EJsS HtmlView.Pendulum View: declaration of element 'gArrow'
      .setProperty("Measured",false) // EJsS HtmlView.Pendulum View: setting property 'Measured' for element 'gArrow'
      .setProperty("LineColor","Black") // EJsS HtmlView.Pendulum View: setting property 'LineColor' for element 'gArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.Pendulum View: setting property 'LineWidth' for element 'gArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.Pendulum View: setting property 'Offset' for element 'gArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"gText", _view.forceBodyGroup) // EJsS HtmlView.Pendulum View: declaration of element 'gText'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.Pendulum View: setting property 'RelativePosition' for element 'gText'
      .setProperty("Measured",false) // EJsS HtmlView.Pendulum View: setting property 'Measured' for element 'gText'
      .setProperty("Text","Fg") // EJsS HtmlView.Pendulum View: setting property 'Text' for element 'gText'
      .setProperty("Font","normal bold 12px ") // EJsS HtmlView.Pendulum View: setting property 'Font' for element 'gText'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"tArrow", _view.forceBodyGroup) // EJsS HtmlView.Pendulum View: declaration of element 'tArrow'
      .setProperty("Measured",false) // EJsS HtmlView.Pendulum View: setting property 'Measured' for element 'tArrow'
      .setProperty("LineColor","Blue") // EJsS HtmlView.Pendulum View: setting property 'LineColor' for element 'tArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.Pendulum View: setting property 'LineWidth' for element 'tArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.Pendulum View: setting property 'Offset' for element 'tArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"tText", _view.forceBodyGroup) // EJsS HtmlView.Pendulum View: declaration of element 'tText'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.Pendulum View: setting property 'RelativePosition' for element 'tText'
      .setProperty("Measured",false) // EJsS HtmlView.Pendulum View: setting property 'Measured' for element 'tText'
      .setProperty("Text","Ft") // EJsS HtmlView.Pendulum View: setting property 'Text' for element 'tText'
      .setProperty("Font","normal bold 12px ") // EJsS HtmlView.Pendulum View: setting property 'Font' for element 'tText'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"fArrow", _view.forceBodyGroup) // EJsS HtmlView.Pendulum View: declaration of element 'fArrow'
      .setProperty("Measured",false) // EJsS HtmlView.Pendulum View: setting property 'Measured' for element 'fArrow'
      .setProperty("LineColor","Green") // EJsS HtmlView.Pendulum View: setting property 'LineColor' for element 'fArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.Pendulum View: setting property 'LineWidth' for element 'fArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.Pendulum View: setting property 'Offset' for element 'fArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"fText", _view.forceBodyGroup) // EJsS HtmlView.Pendulum View: declaration of element 'fText'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.Pendulum View: setting property 'RelativePosition' for element 'fText'
      .setProperty("Measured",false) // EJsS HtmlView.Pendulum View: setting property 'Measured' for element 'fText'
      .setProperty("Text","Ff") // EJsS HtmlView.Pendulum View: setting property 'Text' for element 'fText'
      .setProperty("Font","normal bold 12px ") // EJsS HtmlView.Pendulum View: setting property 'Font' for element 'fText'
      ;

    _view._addElement(EJSS_DRAWING2D.cursor,"cursor", _view.penduumDrawingPanel) // EJsS HtmlView.Pendulum View: declaration of element 'cursor'
      .setProperty("Sensitivity",10) // EJsS HtmlView.Pendulum View: setting property 'Sensitivity' for element 'cursor'
      .setProperty("Y",0) // EJsS HtmlView.Pendulum View: setting property 'Y' for element 'cursor'
      .setProperty("CursorType","VERTICAL") // EJsS HtmlView.Pendulum View: setting property 'CursorType' for element 'cursor'
      .setProperty("Visibility",false) // EJsS HtmlView.Pendulum View: setting property 'Visibility' for element 'cursor'
      .setProperty("EnabledPosition","ENABLED_NONE") // EJsS HtmlView.Pendulum View: setting property 'EnabledPosition' for element 'cursor'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"controlPanel", _view.wrappedPanel) // EJsS HtmlView.Pendulum View: declaration of element 'controlPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.Pendulum View: setting property 'CSS' for element 'controlPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"ioPanel", _view.controlPanel) // EJsS HtmlView.Pendulum View: declaration of element 'ioPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.Pendulum View: setting property 'CSS' for element 'ioPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"thetaLabel", _view.ioPanel) // EJsS HtmlView.Pendulum View: declaration of element 'thetaLabel'
      .setProperty("Text","&#952; =") // EJsS HtmlView.Pendulum View: setting property 'Text' for element 'thetaLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"thetaField", _view.ioPanel) // EJsS HtmlView.Pendulum View: declaration of element 'thetaField'
      .setProperty("Width",35) // EJsS HtmlView.Pendulum View: setting property 'Width' for element 'thetaField'
      .setProperty("Format","0.00") // EJsS HtmlView.Pendulum View: setting property 'Format' for element 'thetaField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"omegaLabel", _view.ioPanel) // EJsS HtmlView.Pendulum View: declaration of element 'omegaLabel'
      .setProperty("Text","&#969; =") // EJsS HtmlView.Pendulum View: setting property 'Text' for element 'omegaLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"omegaField", _view.ioPanel) // EJsS HtmlView.Pendulum View: declaration of element 'omegaField'
      .setProperty("Width",35) // EJsS HtmlView.Pendulum View: setting property 'Width' for element 'omegaField'
      .setProperty("Format","0.00") // EJsS HtmlView.Pendulum View: setting property 'Format' for element 'omegaField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"lengthLabel", _view.ioPanel) // EJsS HtmlView.Pendulum View: declaration of element 'lengthLabel'
      .setProperty("Text"," L =") // EJsS HtmlView.Pendulum View: setting property 'Text' for element 'lengthLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"lengthField", _view.ioPanel) // EJsS HtmlView.Pendulum View: declaration of element 'lengthField'
      .setProperty("Width",30) // EJsS HtmlView.Pendulum View: setting property 'Width' for element 'lengthField'
      .setProperty("Format","0.0") // EJsS HtmlView.Pendulum View: setting property 'Format' for element 'lengthField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"bLabel", _view.ioPanel) // EJsS HtmlView.Pendulum View: declaration of element 'bLabel'
      .setProperty("Width",45) // EJsS HtmlView.Pendulum View: setting property 'Width' for element 'bLabel'
      .setProperty("Text"," D =") // EJsS HtmlView.Pendulum View: setting property 'Text' for element 'bLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"bField", _view.ioPanel) // EJsS HtmlView.Pendulum View: declaration of element 'bField'
      .setProperty("Width",30) // EJsS HtmlView.Pendulum View: setting property 'Width' for element 'bField'
      .setProperty("Format","0.00") // EJsS HtmlView.Pendulum View: setting property 'Format' for element 'bField'
      .setProperty("Tooltip","Damping coefficient") // EJsS HtmlView.Pendulum View: setting property 'Tooltip' for element 'bField'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttonPanel", _view.controlPanel) // EJsS HtmlView.Pendulum View: declaration of element 'buttonPanel'
      .setProperty("Width",200) // EJsS HtmlView.Pendulum View: setting property 'Width' for element 'buttonPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.Pendulum View: setting property 'CSS' for element 'buttonPanel'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"runPauseButton", _view.buttonPanel) // EJsS HtmlView.Pendulum View: declaration of element 'runPauseButton'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.Pendulum View: setting property 'ImageOnUrl' for element 'runPauseButton'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.Pendulum View: setting property 'ImageOffUrl' for element 'runPauseButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"stepButton", _view.buttonPanel) // EJsS HtmlView.Pendulum View: declaration of element 'stepButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.Pendulum View: setting property 'ImageUrl' for element 'stepButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetTimeButton", _view.buttonPanel) // EJsS HtmlView.Pendulum View: declaration of element 'resetTimeButton'
      .setProperty("Tooltip","Resets the time") // EJsS HtmlView.Pendulum View: setting property 'Tooltip' for element 'resetTimeButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset1.gif") // EJsS HtmlView.Pendulum View: setting property 'ImageUrl' for element 'resetTimeButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetButton", _view.buttonPanel) // EJsS HtmlView.Pendulum View: declaration of element 'resetButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.Pendulum View: setting property 'ImageUrl' for element 'resetButton'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"textPanel", _view._topFrame) // EJsS HtmlView.Pendulum View: declaration of element 'textPanel'
      .setProperty("Html","<p><i>Note:</i> When running this simulation on a tablet or smart-phone, set the parameters, then press the Play button. When running this simulation on a computer, be sure to uncheck “Accelerometer,” then set the parameters and press the Play button. </p> <h1> Pendulum with Moving Support</h1> <p> The Pendulum with Moving Support mobile JavaScript model illustrates the forces and dynamics of a pendulum attached to a moving support. This simulation uses <b> the accelerometer on your mobile device</b> to read the <a href=\"https://en.wikipedia.org/wiki/Proper_acceleration\" >proper acceleration</a> as measure by the mobile device. The proper acceleration is the acceleration relative to a freely falling observer whereas coordinate acceleration is dependent on the choice of reference frame acceleration.  Note that the proper acceleration for an object at rest relative to Earth is +9.8 m/s^2 in the up direction as seen by a freely falling observer.  The mobile device accelerometer measures proper acceleration because it is acted on by gravity and  by the device acceleration but it is interesting to note that proper acceleration is fundamental in Einstein's general <a href=\"https://en.wikipedia.org/wiki/Theory_of_relativity\">theory of relativity</a> because this theory assumes that gravity is equivalent to acceleration in spacetime.</p> <p>You may need to lock the orientation of your screen to maintain a fixed view as you tilt and (gently) accelerate your device. For use on computers without an accelerometer or for classroom use, the \"No sensor\" mode simulates back and forth motion. Search for \"mobile JavaScript model\" in the Open Source Physics digital library to find other simulations that use mobile device sensors.</p> <p>A force body (free body) diagram showing the pendulum rod force (blue), the gravitational force (black), and the force of friction (green) can also be shown. Users set the initial angle in radians and angular velocity in radians/second and you can adjust the viscous damping (friction) coefficient when the simulation is paused. Test your knowledge of pendulum motion by answering the following questions and comparing your answers with the simulation results. Remember to <b>press the play button</b> after you set the initial values.</p> <p>Initial values, such as &#952;<sub>0</sub> and &#969;<sub>0</sub>, can be set when the simulation is paused but not when the simulation is running. (Non-editable input fields have a grey background.) You may also drag the mass when the simulation is paused. The reset button returns the system to its default state while the reset time button returns the system to the previous values of &#952;<sub>0</sub> and &#969;<sub>0</sub>.</p> <h3> Physics Exercises:</h3> <p>This simulation shows a mass m=1 handing from a rod of length L hanging from a moveable support point.   The support point's motion is either  the motion of the mobile device or the motion of the slider when the \"no sensor\" option is selected.  There is also a low speed <a href=\"https://en.wikipedia.org/wiki/Drag_(physics)\">viscous drag</a> (friction) force <i>F</i><sub>drag</sub>=-<i>Dv</i> that is proportional to the speed <i>v</i> and the damping coefficient <i>D</i>.  Setting the non-zero drag is useful to damp out transient motion when making observations.</p> <ol> <li>Draw force body diagrams labeling all forces for the pendulum mass at &#952; = {   0°,  45°, 90°   180° } without friction and with &#969;=0.  Note that the angular position is entered using radians, not degrees, in the simulation.</li> <li>How will your answer to 1 change if &#969; is not zero?</li> <li>What is the small angle frequency of oscillation in radians/sec and in cycles/sec?</li> <li>Tilt the device back and forth.  Does this motion produce a pendulum oscillation? Explain.</li> <li>Push and pull your device back and forth.   Does this motion produce a pendulum oscillation? Explain. </li> <li>How often (what frequency) should you push and pull your device to cause the pendulum to swing over the top?  Does it make a difference when you push and when you pull?</li> <li>Enter a larger initial angular velocity and observe the motion and free body diagram. Describe the push-pull motion needed to stop the pendulum motion. </li> </ol> <p><i>Note: </i> Continuously reading the accelerometer may drain the mobile device battery.  Uncheck \"Accelerometer\" or navigate to a different HTML page to conserve battery power. The sensor should stop when navigating to another browser page but this behavior is platform dependent.</p> <h3> Teaching and Learning Objectives:</h3> <ul> <li>Write the force law for pendulum motion involving physical properties such as the mass, the rod length, and the acceleration due to Earth's gravitational field.</li> <li>Solve this equation for small angle oscillations using either sines or cosines.</li> <li>Describe the effect of a moving support.  </li> <li>Suppose you are holding your mobile device while riding on a merry-go-round.  How can you determine the angular velocity of the merry-go-round using measurements from the provided by the simulation if you are sitting a distance R from the center of the merry-go-round.</li> </ul>") // EJsS HtmlView.Pendulum View: setting property 'Html' for element 'textPanel'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () { 
          _model =  new PendulumWithMovingSupport("_topFrame","_ejs_library/",null);
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
