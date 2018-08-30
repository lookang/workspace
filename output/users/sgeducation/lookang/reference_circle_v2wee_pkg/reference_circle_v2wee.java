/*
 * Class : reference_circle_v2wee.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package users.sgeducation.lookang.reference_circle_v2wee_pkg;

import org.colos.ejs.library._EjsConstants;

// Imports suggested by Model Elements:
// End of imports from Model Elements

import javax.swing.event.*;
import javax.swing.*;
import java.awt.event.*;
import java.awt.*;
import java.net.*;
import java.util.*;
import java.io.*;
import java.lang.*;

import javax.json.*;

public class reference_circle_v2wee extends org.colos.ejs.library.Model {

  static {
    __translatorUtil = new org.colos.ejs.library.utils.TranslatorUtil();
  }

  static public boolean _sSwingView = true;

  static public int _sServerPort = -1;
  static public int _getServerPort() { return _sServerPort; }

  public reference_circle_v2weeSimulation _simulation=null;
  public reference_circle_v2weeView _view=null;
  public reference_circle_v2wee _model=this;

  // -------------------------- 
  // Information on HTML pages
  // -------------------------- 

  static private java.util.Map<String,java.util.Set<org.colos.ejs.library.utils.HtmlPageInfo>> __htmlPagesMap =
    new java.util.HashMap<String,java.util.Set<org.colos.ejs.library.utils.HtmlPageInfo>>();

  /**
   * Adds info about an html on the model
   */
  static public void _addHtmlPageInfo(String _pageName, String _localeStr, String _title, String _link) {
    java.util.Set<org.colos.ejs.library.utils.HtmlPageInfo> pages = __htmlPagesMap.get(_pageName);
    if (pages==null) {
      pages = new java.util.HashSet<org.colos.ejs.library.utils.HtmlPageInfo>();
      __htmlPagesMap.put(_pageName, pages);
    }
    org.colos.ejs.library.utils.LocaleItem item = org.colos.ejs.library.utils.LocaleItem.getLocaleItem(_localeStr);
    if (item!=null) pages.add(new org.colos.ejs.library.utils.HtmlPageInfo(item, _title, _link));
  }

  /**
   * Returns info about an html on the model
   */
  static public org.colos.ejs.library.utils.HtmlPageInfo _getHtmlPageClassInfo(String _pageName, org.colos.ejs.library.utils.LocaleItem _item) {
    java.util.Set<org.colos.ejs.library.utils.HtmlPageInfo> pages = __htmlPagesMap.get(_pageName);
    if (pages==null) return null;
    org.colos.ejs.library.utils.HtmlPageInfo defaultInfo=null;
    for (org.colos.ejs.library.utils.HtmlPageInfo info : pages) {
      if (info.getLocaleItem().isDefaultItem()) defaultInfo = info;
      if (info.getLocaleItem().equals(_item)) return info;
    }
    return defaultInfo;
  }

  public org.colos.ejs.library.utils.HtmlPageInfo _getHtmlPageInfo(String _pageName, org.colos.ejs.library.utils.LocaleItem _item) { return _getHtmlPageClassInfo(_pageName,_item); }

  // -------------------------- 
  // static methods 
  // -------------------------- 

  static public String _getEjsModel() { return "/users/sgeducation/lookang/reference_circle_v2wee.xml"; }

  static public String _getModelDirectory() { return "users/sgeducation/lookang/"; }

  static public java.awt.Dimension _getEjsAppletDimension() {
    return new java.awt.Dimension(708,540);
  }

  static public java.util.Set<String> _getEjsResources() {
    java.util.Set<String> list = new java.util.HashSet<String>();
    list.add("/users/sgeducation/lookang/Phase difference SHM and circular motion/lookangphoto.png");
    list.add("/users/sgeducation/lookang/Phase difference SHM and circular motion/Phase difference.png");
    list.add("/users/sgeducation/lookang/Phase difference SHM and circular motion/lookangphoto.png");
    list.add("/users/sgeducation/lookang/Phase difference SHM and circular motion/Phase difference.png");
    return list;
  };

  static public boolean _common_initialization(String[] _args) {
    String lookAndFeel = null;
    boolean decorated = true;
    if (_args!=null) for (int i=0; i<_args.length; i++) {
      if      (_args[i].equals("-_lookAndFeel"))          lookAndFeel = _args[++i];
      else if (_args[i].equals("-_decorateWindows"))      decorated = true;
      else if (_args[i].equals("-_doNotDecorateWindows")) decorated = false;
      else if (_args[i].equals("-_noSwingView")) _sSwingView = false;
      else if (_args[i].equals("-_serverPort")) try { _sServerPort = Integer.parseInt(_args[++i]); } catch (Exception exc) { _sServerPort = -1; exc.printStackTrace(); } 
    }
    if (lookAndFeel!=null) org.opensourcephysics.display.OSPRuntime.setLookAndFeel(decorated,lookAndFeel);
    org.opensourcephysics.tools.ResourceLoader.addSearchPath("users/sgeducation/lookang/"); // This is for relative resources
    boolean pathsSet = false, underEjs = false;
    try { // in case of security problems
      if ("true".equals(System.getProperty("org.osp.launcher"))) { // Running under Launcher
        org.opensourcephysics.display.OSPRuntime.setLauncherMode(true);
      }
    }
    catch (Exception _exception) { } // do not complain
    try { // in case of security problems
      if (System.getProperty("osp_ejs")!=null) { // Running under EJS
        underEjs = true;
        org.colos.ejs.library.Simulation.setPathToLibrary("/Users/lookang/Google Drive/PublicLawrence/EjsS_5.3.SG_180225/bin/config/"); // This is for classes (such as EjsMatlab) which needs to know where the library is
        pathsSet = true;
      }
    }
    catch (Exception _exception) { pathsSet = false; } // maybe an unsigned Web start?
    try { org.colos.ejs.library.control.EjsControl.setDefaultScreen(Integer.parseInt(System.getProperty("screen"))); } // set default screen 
    catch (Exception _exception) { } // Ignore any error here
    if (!pathsSet) {
      org.colos.ejs.library.Simulation.setPathToLibrary("/Users/lookang/Google Drive/PublicLawrence/EjsS_5.3.SG_180225/bin/config/"); // This is for classes (such as EjsMatlab) which needs to know where the library is
    }
    reference_circle_v2wee._addHtmlPageInfo("Reference Circle","_default_","Reference Circle","./reference_circle_v2wee_Intro_1.html");
    reference_circle_v2wee._addHtmlPageInfo("Activities","_default_","Activities","./reference_circle_v2wee_Intro_2.html");
    if (!underEjs) {
    }
    return true; // Everything went ok
  }

  static public void main (String[] _args) {
    if (!_common_initialization(_args)) {
      if (org.opensourcephysics.display.OSPRuntime.isLauncherMode()) return;
      System.exit(-1);
    }

    reference_circle_v2wee __theModel = new reference_circle_v2wee (_args);
  }

  static public javax.swing.JComponent getModelPane(String[] _args, javax.swing.JFrame _parentFrame) {
    if (!_common_initialization(_args)) return null;
    reference_circle_v2wee __theModel = new reference_circle_v2wee ("MainWindow",_parentFrame,null,null,_args,true);
    return (javax.swing.JComponent) __theModel._getView().getComponent("MainWindow");
  }

  public reference_circle_v2wee () { this (null, null, null,null,null,false); } // slave application

  public reference_circle_v2wee (String[] _args) { this (null, null, null,null,_args,true); }

  public reference_circle_v2wee (String _replaceName, java.awt.Frame _replaceOwnerFrame, java.net.URL _codebase, org.colos.ejs.library.LauncherApplet _anApplet, String[] _args, boolean _allowAutoplay) {
    org.colos.ejs.library.control.swing.ControlWindow.setKeepHidden(true);
    __theArguments = _args;
    __theApplet = _anApplet;
    java.text.NumberFormat _Ejs_format = java.text.NumberFormat.getInstance();
    if (_Ejs_format instanceof java.text.DecimalFormat) {
      ((java.text.DecimalFormat) _Ejs_format).getDecimalFormatSymbols().setDecimalSeparator('.');
    }
    _simulation = new reference_circle_v2weeSimulation (this,_replaceName,_replaceOwnerFrame,_codebase,_allowAutoplay);
    _simulation.processArguments(_args);
    if (_sSwingView)       org.colos.ejs.library.control.swing.ControlWindow.setKeepHidden(false);
  }

 // -------------------------------------------
 // Abstract part of Model 
 // -------------------------------------------

  public String _getClassEjsModel() { return _getEjsModel(); }

  public java.util.Set<String> _getClassEjsResources() { return _getEjsResources(); }

  public String _getClassModelDirectory() { return _getModelDirectory(); }

  public org.colos.ejs.library.View _getView() { return _view; }

  public org.colos.ejs.library.Simulation _getSimulation() { return _simulation; }

  public int _getPreferredStepsPerDisplay() { return 1; }

  public void _resetModel () {
    _isEnabled_initialization1 = true; // Reset enabled condition for Model.Initialization.Init Page
    _isEnabled_evolution1 = false; // Reset enabled condition for Model.Evolution.Evol Page
    _isEnabled_evolution2 = true; // Reset enabled condition for Model.Evolution.Evol Page 2
    _isEnabled_constraints1 = true; // Reset enabled condition for Model.Constraints.Cons Page
    _isEnabled_constraints2 = true; // Reset enabled condition for Model.Constraints.lookang
    _isEnabled_constraints3 = true; // Reset enabled condition for Model.Constraints.answercheck
    _isEnabled_constraints4 = true; // Reset enabled condition for Model.Constraints.angle
    _isEnabled_constraints5 = true; // Reset enabled condition for Model.Constraints.view
    m = 0.9999750000000001; // Variables.basic variables:1    m = 0.9999750000000001; // Variables.basic variables:1
    m2 = 1.0; // Variables.basic variables:2    m2 = 1.0; // Variables.basic variables:2
    k = 0.9999750000000001; // Variables.basic variables:3    k = 0.9999750000000001; // Variables.basic variables:3
    k2 = 0.9999750000000001; // Variables.basic variables:4    k2 = 0.9999750000000001; // Variables.basic variables:4
    A = 0.39999700000000005; // Variables.basic variables:5    A = 0.39999700000000005; // Variables.basic variables:5
    A2 = 0.799993; // Variables.basic variables:6    A2 = 0.799993; // Variables.basic variables:6
    phase = 0; // Variables.basic variables:7    phase = 0; // Variables.basic variables:7
    phase2 = 0; // Variables.basic variables:8    phase2 = 0; // Variables.basic variables:8
    theta = phase*Math.PI/180.0; // Variables.basic variables:9    theta = phase*Math.PI/180.0; // Variables.basic variables:9
    theta2 = phase2*Math.PI/180.0; // Variables.basic variables:10    theta2 = phase2*Math.PI/180.0; // Variables.basic variables:10
    omega = Math.sqrt(k/m); // Variables.basic variables:11    omega = Math.sqrt(k/m); // Variables.basic variables:11
    omega2 = Math.sqrt(k2/m2); // Variables.basic variables:12    omega2 = Math.sqrt(k2/m2); // Variables.basic variables:12
    L = 1.0; // Variables.basic variables:13    L = 1.0; // Variables.basic variables:13
    y0 = -1.1; // Variables.basic variables:16    y0 = -1.1; // Variables.basic variables:16
    y = A*Math.sin(theta); // Variables.basic variables:17    y = A*Math.sin(theta); // Variables.basic variables:17
    y02 = -1.4; // Variables.basic variables:18    y02 = -1.4; // Variables.basic variables:18
    y2 = A2*Math.sin(theta2); // Variables.basic variables:19    y2 = A2*Math.sin(theta2); // Variables.basic variables:19
    t = 0.0; // Variables.basic variables:24    t = 0.0; // Variables.basic variables:24
    dt = 0.02; // Variables.basic variables:25    dt = 0.02; // Variables.basic variables:25
    PE = 0.5*k*x*x; // Variables.basic variables:26    PE = 0.5*k*x*x; // Variables.basic variables:26
    PE2 = 0.5*k2*x2*x2; // Variables.basic variables:27    PE2 = 0.5*k2*x2*x2; // Variables.basic variables:27
    KE = 0.5*m*v*v; // Variables.basic variables:28    KE = 0.5*m*v*v; // Variables.basic variables:28
    KE2 = 0.5*m2*v2*v2; // Variables.basic variables:29    KE2 = 0.5*m2*v2*v2; // Variables.basic variables:29
    EMax = 1.1*(PE+KE); // Variables.basic variables:30    EMax = 1.1*(PE+KE); // Variables.basic variables:30
    EMax2 = 1.1*(PE2+KE2); // Variables.basic variables:31    EMax2 = 1.1*(PE2+KE2); // Variables.basic variables:31
    newEMax = 0.0; // Variables.basic variables:32    newEMax = 0.0; // Variables.basic variables:32
    helpLabel = "Show Help"; // Variables.basic variables:33    helpLabel = "Show Help"; // Variables.basic variables:33
    helpFlag = false; // Variables.basic variables:34    helpFlag = false; // Variables.basic variables:34
    numTicks = 17; // Variables.basic variables:35    numTicks = 17; // Variables.basic variables:35
    xTicks = new double [numTicks]; // Variables.basic variables:36
    color1 = new java.awt.Color(0,0,255,255); // Variables.lookang:1    color1 = new java.awt.Color(0,0,255,255); // Variables.lookang:1
    color2 = new java.awt.Color(255,0,0,255); // Variables.lookang:2    color2 = new java.awt.Color(255,0,0,255); // Variables.lookang:2
    colorsum = new java.awt.Color(128,0,128,255); // Variables.lookang:3    colorsum = new java.awt.Color(128,0,128,255); // Variables.lookang:3
    pi = Math.PI; // Variables.lookang:4    pi = Math.PI; // Variables.lookang:4
    cta = 0; // Variables.lookang:5    cta = 0; // Variables.lookang:5
    cta2 = pi/3; // Variables.lookang:6    cta2 = pi/3; // Variables.lookang:6
    rotation = true; // Variables.lookang:17    rotation = true; // Variables.lookang:17
    rotation2 = true; // Variables.lookang:18    rotation2 = true; // Variables.lookang:18
    sign = 1; // Variables.lookang:19    sign = 1; // Variables.lookang:19
    sign2 = 1; // Variables.lookang:20    sign2 = 1; // Variables.lookang:20
    nangle = 36; // Variables.angle:2    nangle = 36; // Variables.angle:2
    px = new double [nangle]; // Variables.angle:3
    py = new double [nangle]; // Variables.angle:4
    _ODEi_evolution2 = new _ODE_evolution2();
  }

  public void _initializeSolvers () { for (org.opensourcephysics.numerics.ode_solvers.EjsS_ODE __pode : _privateOdesList.values()) __pode.initializeSolver(); }

  public void _initializeModel () {
    __shouldBreak = false;
    boolean _wasEnabled_initialization1 = _isEnabled_initialization1;
    if (_wasEnabled_initialization1) _initialization1 ();
    if (__shouldBreak) return;
    _initializeSolvers();
  }

  public void _automaticResetSolvers() { 
    _ODEi_evolution2.automaticResetSolver();
  }
  public void _resetSolvers() { 
    _ODEi_evolution2.resetSolver();
  }
  public void _stepModel () {
    __shouldBreak = false;
    boolean _wasEnabled_evolution1 = _isEnabled_evolution1;
    boolean _wasEnabled_evolution2 = _isEnabled_evolution2;
    if (_wasEnabled_evolution1) _evolution1 ();
    if (__shouldBreak) return;
    if (_wasEnabled_evolution2) _ODEi_evolution2.step();
    if (__shouldBreak) return;
  }

  public void _updateModel () {
    __shouldBreak = false;
    boolean _wasEnabled_constraints1 = _isEnabled_constraints1;
    boolean _wasEnabled_constraints2 = _isEnabled_constraints2;
    boolean _wasEnabled_constraints3 = _isEnabled_constraints3;
    boolean _wasEnabled_constraints4 = _isEnabled_constraints4;
    boolean _wasEnabled_constraints5 = _isEnabled_constraints5;
    if (_wasEnabled_constraints1) _constraints1 ();
    if (__shouldBreak) return;
    if (_wasEnabled_constraints2) _constraints2 ();
    if (__shouldBreak) return;
    if (_wasEnabled_constraints3) _constraints3 ();
    if (__shouldBreak) return;
    if (_wasEnabled_constraints4) _constraints4 ();
    if (__shouldBreak) return;
    if (_wasEnabled_constraints5) _constraints5 ();
    if (__shouldBreak) return;
  }

  public void _readFromViewAfterUpdate () {
  }

  public void _freeMemory () {
    getSimulation().setEnded(); // Signal that the simulation ended already
    xTicks = null;  // Variables.basic variables:36
    px = null;  // Variables.angle:3
    py = null;  // Variables.angle:4
    _ODEi_evolution2=null;
    System.gc(); // Free memory from unused old arrays
  }

 // -------------------------------------------
 // ODEs declaration 
 // -------------------------------------------

  protected java.util.Hashtable<String,org.opensourcephysics.numerics.ode_solvers.EjsS_ODE> _privateOdesList = new java.util.Hashtable<String,org.opensourcephysics.numerics.ode_solvers.EjsS_ODE>();

  public org.opensourcephysics.numerics.ode_solvers.EjsS_ODE _getODE(String _odeName) {
    try { return _privateOdesList.get(_odeName); }
    catch (Exception __exc) { return null; }
  }

  public org.opensourcephysics.numerics.ode_solvers.InterpolatorEventSolver _getEventSolver(String _odeName) {
    try { return _privateOdesList.get(_odeName).getEventSolver(); }
    catch (Exception __exc) { return null; }
  }

  public void _setSolverClass (String _odeName, Class<?> _solverClass) { // Change the solver in run-time
    try { _privateOdesList.get(_odeName).setSolverClass(_solverClass); }
    catch (Exception __exc) { System.err.println ("There is no ODE with this name "+_odeName); }
  }

  public String _setSolverClass (String _odeName, String _solverClassName) { // Change the solver in run-time
    if (_solverClassName==null) { System.err.println ("Null solver class name!"); return null; }
    try { return _privateOdesList.get(_odeName).setSolverClass(_solverClassName); }
    catch (Exception __exc) { System.err.println ("There is no ODE with this name "+_odeName); return null; }
  }

 // -------------------------------------------
 // Variables defined by the user
 // -------------------------------------------

 public double m  = 0.9999750000000001; // Variables.basic variables:1
 public double m2  = 1.0; // Variables.basic variables:2
 public double k  = 0.9999750000000001; // Variables.basic variables:3
 public double k2  = 0.9999750000000001; // Variables.basic variables:4
 public double A  = 0.39999700000000005; // Variables.basic variables:5
 public double A2  = 0.799993; // Variables.basic variables:6
 public double phase  = 0; // Variables.basic variables:7
 public double phase2  = 0; // Variables.basic variables:8
 public double theta  = phase*Math.PI/180.0; // Variables.basic variables:9
 public double theta2  = phase2*Math.PI/180.0; // Variables.basic variables:10
 public double omega  = Math.sqrt(k/m); // Variables.basic variables:11
 public double omega2  = Math.sqrt(k2/m2); // Variables.basic variables:12
 public double L  = 1.0; // Variables.basic variables:13
 public double x ; // Variables.basic variables:14
 public double x2 ; // Variables.basic variables:15
 public double y0  = -1.1; // Variables.basic variables:16
 public double y  = A*Math.sin(theta); // Variables.basic variables:17
 public double y02  = -1.4; // Variables.basic variables:18
 public double y2  = A2*Math.sin(theta2); // Variables.basic variables:19
 public double v ; // Variables.basic variables:20
 public double v2 ; // Variables.basic variables:21
 public double a ; // Variables.basic variables:22
 public double a2 ; // Variables.basic variables:23
 public double t  = 0.0; // Variables.basic variables:24
 public double dt  = 0.02; // Variables.basic variables:25
 public double PE  = 0.5*k*x*x; // Variables.basic variables:26
 public double PE2  = 0.5*k2*x2*x2; // Variables.basic variables:27
 public double KE  = 0.5*m*v*v; // Variables.basic variables:28
 public double KE2  = 0.5*m2*v2*v2; // Variables.basic variables:29
 public double EMax  = 1.1*(PE+KE); // Variables.basic variables:30
 public double EMax2  = 1.1*(PE2+KE2); // Variables.basic variables:31
 public double newEMax  = 0.0; // Variables.basic variables:32
 public String helpLabel  = "Show Help"; // Variables.basic variables:33
 public boolean helpFlag  = false; // Variables.basic variables:34
 public int numTicks  = 17; // Variables.basic variables:35
 public double xTicks []; // Variables.basic variables:36
 public int i ; // Variables.basic variables:37
 public Object color1  = new java.awt.Color(0,0,255,255); // Variables.lookang:1
 public Object color2  = new java.awt.Color(255,0,0,255); // Variables.lookang:2
 public Object colorsum  = new java.awt.Color(128,0,128,255); // Variables.lookang:3
 public double pi  = Math.PI; // Variables.lookang:4
 public double cta  = 0; // Variables.lookang:5
 public double cta2  = pi/3; // Variables.lookang:6
 public double Asum ; // Variables.lookang:7
 public double xsum ; // Variables.lookang:8
 public double ysum ; // Variables.lookang:9
 public double phasesum ; // Variables.lookang:10
 public boolean showPloty ; // Variables.lookang:11
 public boolean showPlotx ; // Variables.lookang:12
 public boolean showsum ; // Variables.lookang:13
 public double T ; // Variables.lookang:14
 public double ctadeg ; // Variables.lookang:15
 public double cta2deg ; // Variables.lookang:16
 public boolean rotation  = true; // Variables.lookang:17
 public boolean rotation2  = true; // Variables.lookang:18
 public double sign  = 1; // Variables.lookang:19
 public double sign2  = 1; // Variables.lookang:20
 public String A1correct  = ""; // Variables.answerscheck:1
 public double enterA1 ; // Variables.answerscheck:2
 public Object A1correctbackground  = null; // Variables.answerscheck:3
 public boolean showhint ; // Variables.answerscheck:4
 public double Answer ; // Variables.answerscheck:5
 public String answertext  = ""; // Variables.answerscheck:6
 public double dcangle ; // Variables.angle:1
 public int nangle  = 36; // Variables.angle:2
 public double px []; // Variables.angle:3
 public double py []; // Variables.angle:4
 public double c ; // Variables.angle:5
 public double R ; // Variables.view:1
 public double xmin ; // Variables.view:2
 public double xmax ; // Variables.view:3
 public double ymin ; // Variables.view:4
 public double ymax ; // Variables.view:5

 // -------------------------------------------
 // Enabled condition of pages 
 // -------------------------------------------

  private boolean _isEnabled_initialization1 = true; // Enabled condition for Model.Initialization.Init Page
  private boolean _isEnabled_evolution1 = false; // Enabled condition for Model.Evolution.Evol Page
  private boolean _isEnabled_evolution2 = true; // Enabled condition for Model.Evolution.Evol Page 2
  private boolean _isEnabled_constraints1 = true; // Enabled condition for Model.Constraints.Cons Page
  private boolean _isEnabled_constraints2 = true; // Enabled condition for Model.Constraints.lookang
  private boolean _isEnabled_constraints3 = true; // Enabled condition for Model.Constraints.answercheck
  private boolean _isEnabled_constraints4 = true; // Enabled condition for Model.Constraints.angle
  private boolean _isEnabled_constraints5 = true; // Enabled condition for Model.Constraints.view

  public void _setPageEnabled(String _pageName, boolean _enabled) { // Sets the enabled state of a page
    boolean _pageFound = false;
    if ("Init Page".equals(_pageName)) { _pageFound = true; _isEnabled_initialization1 = _enabled; } // Change enabled condition for Model.Initialization.Init Page
    if ("Evol Page".equals(_pageName)) { _pageFound = true; _isEnabled_evolution1 = _enabled; } // Change enabled condition for Model.Evolution.Evol Page
    if ("Evol Page 2".equals(_pageName)) { _pageFound = true; _isEnabled_evolution2 = _enabled; _automaticResetSolvers(); } // Change enabled condition for Model.Evolution.Evol Page 2
    if ("Cons Page".equals(_pageName)) { _pageFound = true; _isEnabled_constraints1 = _enabled; } // Change enabled condition for Model.Constraints.Cons Page
    if ("lookang".equals(_pageName)) { _pageFound = true; _isEnabled_constraints2 = _enabled; } // Change enabled condition for Model.Constraints.lookang
    if ("answercheck".equals(_pageName)) { _pageFound = true; _isEnabled_constraints3 = _enabled; } // Change enabled condition for Model.Constraints.answercheck
    if ("angle".equals(_pageName)) { _pageFound = true; _isEnabled_constraints4 = _enabled; } // Change enabled condition for Model.Constraints.angle
    if ("view".equals(_pageName)) { _pageFound = true; _isEnabled_constraints5 = _enabled; } // Change enabled condition for Model.Constraints.view
    if (!_pageFound) System.out.println ("_setPageEnabled() warning. Page not found: "+_pageName);
  }

 // -------------------------------------------
 // Methods defined by the user 
 // -------------------------------------------

 // --- Initialization

  public void _initialization1 () { // > Initialization.Init Page
    _view.plottingPanel.setAntialiasTextOn(true);  // > Initialization.Init Page:1
    _view.plottingPanel.setAntialiasShapeOn(true);  // > Initialization.Init Page:2
    EMax = 1.1*(PE + KE);  // > Initialization.Init Page:3
    for (i = 0; i < numTicks; i++)  // > Initialization.Init Page:4
    {  // > Initialization.Init Page:5
      xTicks[i] = -0.8 + i*0.1;  // > Initialization.Init Page:6
    }  // > Initialization.Init Page:7
    restart();  // > Initialization.Init Page:8
  }  // > Initialization.Init Page

 // --- Evolution

  public void _evolution1 () { // > Evolution.Evol Page
    x = A*Math.cos(omega*t + theta);  // > Evolution.Evol Page:1
    y = A*Math.sin(omega*t + theta);  // > Evolution.Evol Page:2
    x2 = A2*Math.cos(omega2*t + theta2);  // > Evolution.Evol Page:3
    y2 = A2*Math.sin(omega2*t + theta2);  // > Evolution.Evol Page:4
    xsum = x+x2;  // > Evolution.Evol Page:5
    ysum= y+y2;  // > Evolution.Evol Page:6
    v = -A*omega*Math.sin(omega*t + theta);  // > Evolution.Evol Page:7
    v2 = -A2*omega2*Math.sin(omega2*t + theta2);  // > Evolution.Evol Page:8
    a = -A*omega*omega*Math.cos(omega*t + theta);  // > Evolution.Evol Page:9
    a2 = -A2*omega2*omega2*Math.cos(omega2*t + theta2);  // > Evolution.Evol Page:10
    t = t + dt;  // > Evolution.Evol Page:11
  }  // > Evolution.Evol Page

  private _ODE_evolution2 _ODEi_evolution2;


  // ----------- private class for ODE in page Evolution:Evol Page 2

  private class _ODE_evolution2 implements org.opensourcephysics.numerics.ode_solvers.EjsS_ODE, org.opensourcephysics.numerics.ode_solvers.symplectic.VelocityVerletSavvy {
    private org.opensourcephysics.numerics.ode_solvers.SolverEngine __solver=null; // The solver engine
    private org.opensourcephysics.numerics.ode_solvers.InterpolatorEventSolver __eventSolver=null; // The event solver
    private Class<?> __solverClass=null; // The solver class
    private double[] __state=null; // Our state array
    private boolean __ignoreErrors=false; // Whether to ignore solver errors
    private boolean __mustInitialize=true; // Be sure to initialize the solver
    private boolean __isEnabled=true; // Whether it is enabled
    private boolean __mustUserReinitialize=false; // Whether the user asked to reset the solver
    private boolean __mustReinitialize=true; // flag to reinitialize the solver

    _ODE_evolution2() { // Class constructor
      __solverClass = org.opensourcephysics.numerics.ode_solvers.rk.RK4.class;
      __instantiateSolver();
      _privateOdesList.put("Evol Page 2",this);
    }

    public org.opensourcephysics.numerics.ode_solvers.InterpolatorEventSolver getEventSolver() { return __eventSolver; } 

    public void setSolverClass (Class<?> __aSolverClass) { // Change the solver in run-time
      this.__solverClass = __aSolverClass;
      __instantiateSolver();
    }

    public String setSolverClass (String _solverClassName) { // Change the solver in run-time
      String _prefix = "org.opensourcephysics.numerics.ode_solvers.";
      _solverClassName = _solverClassName.trim().toLowerCase();
      if (_solverClassName.indexOf("euler")>=0) {
        if (_solverClassName.indexOf("rich")>=0) _solverClassName = _prefix + "rk.EulerRichardson";
        else _solverClassName = _prefix + "rk.Euler";
      }
      else if (_solverClassName.indexOf("verlet")>=0) _solverClassName = _prefix + "symplectic.VelocityVerlet";
      else if (_solverClassName.indexOf("runge")>=0)  _solverClassName = _prefix + "rk.RK4";
      else if (_solverClassName.indexOf("rk4")>=0)    _solverClassName = _prefix + "rk.RK4";
      else if (_solverClassName.indexOf("boga")>=0)  _solverClassName = _prefix + "rk.BogackiShampine23";
      else if (_solverClassName.indexOf("cash")>=0)  _solverClassName = _prefix + "rk.CashKarp45";
      else if (_solverClassName.indexOf("fehl")>=0) {
        if (_solverClassName.indexOf("7")>=0) _solverClassName = _prefix + "rk.Fehlberg78";
        else _solverClassName = _prefix + "rk.Fehlberg8";
      }
      else if (_solverClassName.indexOf("dorm")>=0 || _solverClassName.indexOf("dopri")>=0) {
        if (_solverClassName.indexOf("8")>=0) _solverClassName = _prefix + "rk.Dopri853";
        else _solverClassName = _prefix + "rk.Dopri5";
      }
      else if (_solverClassName.indexOf("radau")>=0) _solverClassName = _prefix + "rk.Radau5";
      else { System.err.println ("There is no solver with this name "+_solverClassName); return null; }
      try { setSolverClass(Class.forName(_solverClassName)); }
      catch (Exception exc) { exc.printStackTrace(); }
      return _solverClassName;
    }

    private void __instantiateSolver () {
      __state = new double[1+1+1];
      __pushState();
      try { // Create the solver by reflection
        Class<?>[] __c = { };
        Object[] __o = { };
        java.lang.reflect.Constructor<?> __constructor = __solverClass.getDeclaredConstructor(__c);
        __solver = (org.opensourcephysics.numerics.ode_solvers.SolverEngine) __constructor.newInstance(__o);
      } catch (Exception exc) { exc.printStackTrace(); } 
      __eventSolver = new org.opensourcephysics.numerics.ode_solvers.InterpolatorEventSolver(__solver,this);
      __mustInitialize = true;
    }

    public void setEnabled (boolean __enabled) { __isEnabled = __enabled; }

    public double getIndependentVariableValue () { return __eventSolver.getIndependentVariableValue(); }

    public double getInternalStepSize () { return __eventSolver.getInternalStepSize(); }

    public boolean isAccelerationIndependentOfVelocity() { return false; }

    public void initializeSolver () {
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
    }

    private void __pushState () { // Copy our variables to the state
      // Copy our variables to __state[] 
      int __cIn=0;
      if (__state[__cIn]!=cta) __mustReinitialize = true;
      __state[__cIn++] = cta;
      if (__state[__cIn]!=cta2) __mustReinitialize = true;
      __state[__cIn++] = cta2;
      if (__state[__cIn]!=t) __mustReinitialize = true;
      __state[__cIn++] = t;
    }

    public void resetSolver () {
      __mustUserReinitialize = true;
    }

    public void automaticResetSolver () {
      __mustReinitialize = true;
    }

    private void __errorAction () {
      if (__ignoreErrors) return;
      System.err.println (__eventSolver.getErrorMessage());
      int __option = javax.swing.JOptionPane.showConfirmDialog(_view.getComponent(_simulation.getMainWindow()),org.colos.ejs.library.Simulation.getEjsString("ODEError.Continue"),
        org.colos.ejs.library.Simulation.getEjsString("Error"), javax.swing.JOptionPane.YES_NO_CANCEL_OPTION);
      if (__option==javax.swing.JOptionPane.YES_OPTION) __ignoreErrors = true;
      else if (__option==javax.swing.JOptionPane.CANCEL_OPTION) _pause();
      // Make sure the solver is reinitialized;
      __mustReinitialize = true;
    }

    public double step() { return __privateStep(false); }

    public double solverStep() { return __privateStep(true); }

    private double __privateStep(boolean __takeMaximumStep) {
      if (!__isEnabled) return 0;
      if (dt==0) return 0;
      if (__mustInitialize) initializeSolver();
      __eventSolver.setStepSize(dt);
      __eventSolver.setInternalStepSize(dt);
      __eventSolver.setMaximumInternalSteps(10000);
      __eventSolver.setTolerances(0.00001,0.00001);
      __pushState();
      if (__mustUserReinitialize) { 
        __eventSolver.userReinitialize();
        __mustUserReinitialize = false;
        __mustReinitialize = false;
        if (__eventSolver.getErrorCode()!=org.opensourcephysics.numerics.ode_solvers.InterpolatorEventSolver.ERROR.NO_ERROR) __errorAction();
      }
      else if (__mustReinitialize) { 
        __eventSolver.reinitialize();
        __mustReinitialize = false;
        if (__eventSolver.getErrorCode()!=org.opensourcephysics.numerics.ode_solvers.InterpolatorEventSolver.ERROR.NO_ERROR) __errorAction();
      }
      double __stepTaken = __takeMaximumStep ? __eventSolver.maxStep() : __eventSolver.step();
      // Extract our variables from __state
      int __cOut=0;
      cta = __state[__cOut++];
      cta2 = __state[__cOut++];
      t = __state[__cOut++];
      // Check for error
      if (__eventSolver.getErrorCode()!=org.opensourcephysics.numerics.ode_solvers.InterpolatorEventSolver.ERROR.NO_ERROR) __errorAction();
      return __stepTaken;
    }

    public double[] getState () { return __state; }

    public void getRate (double[] __aState, double[] __aRate) {
      __aRate[__aRate.length-1] = 0.0; // In case the prelim code returns
      int __index=-1; // so that it can be used in preliminary code
      // Extract our variables from __aState
      int __cOut=0;
      double cta = __aState[__cOut++];
      double cta2 = __aState[__cOut++];
      double t = __aState[__cOut++];
      // Preliminary code: Code to be executed before rate equations are evaluated
      // Compute the rate
      int __cRate = 0;
      __aRate[__cRate++] = sign*omega; // Evolution:Evol Page 2:1
      __aRate[__cRate++] = sign*omega2; // Evolution:Evol Page 2:2
      __aRate[__cRate++] = 1.0; // The independent variable 
    }//end of getRate

  } // End of class _ODE_evolution2

 // --- Constraints

  public void _constraints1 () { // > Fixed relations.Cons Page
    PE = 0.5*k*x*x;  // > Fixed relations.Cons Page:1
    KE = 0.5*m*v*v;  // > Fixed relations.Cons Page:2
    PE2 = 0.5*k2*x2*x2;  // > Fixed relations.Cons Page:3
    KE2 = 0.5*m2*v2*v2;  // > Fixed relations.Cons Page:4
  }  // > Fixed relations.Cons Page

  public void _constraints2 () { // > Fixed relations.lookang
    x = A*Math.sin(cta);  // > Fixed relations.lookang:1
    y = A*Math.cos(cta);  // > Fixed relations.lookang:2
    x2 = A2*Math.sin(cta2);  // > Fixed relations.lookang:3
    y2 = A2*Math.cos(cta2);  // > Fixed relations.lookang:4
    xsum = x+x2;  // > Fixed relations.lookang:5
    ysum= y+y2;  // > Fixed relations.lookang:6
    ctadeg = Math.toDegrees(cta)%360;  // > Fixed relations.lookang:7
    cta2deg = Math.toDegrees(cta2)%360;;  // > Fixed relations.lookang:8
    T = 2*pi/omega;  // > Fixed relations.lookang:9
  }  // > Fixed relations.lookang

  public void _constraints3 () { // > Fixed relations.answercheck
    if (sign==1){  // > Fixed relations.answercheck:1
    Answer = Math.toDegrees(2*pi+cta-cta2)%360;  // > Fixed relations.answercheck:2
    }  // > Fixed relations.answercheck:3
    else if (sign==-1){  // > Fixed relations.answercheck:4
    Answer = Math.toDegrees(cta2-cta)%360;  // > Fixed relations.answercheck:5
    }  // > Fixed relations.answercheck:6
    if (Math.abs(Answer - enterA1%360) < 1) {  // > Fixed relations.answercheck:7
        A1correct = "  Yes";  // > Fixed relations.answercheck:8
        A1correctbackground = java.awt.Color.GREEN;  // > Fixed relations.answercheck:9
          // > Fixed relations.answercheck:10
          // > Fixed relations.answercheck:11
       answertext = "$\\delta$$\\phi$ = "+_view.format(Answer,"000.0")+"";  // > Fixed relations.answercheck:12
      }  // > Fixed relations.answercheck:13
      else {  // > Fixed relations.answercheck:14
          // > Fixed relations.answercheck:15
        if (showhint==true) {  // > Fixed relations.answercheck:16
          if (sign==1){  // > Fixed relations.answercheck:17
          A1correct = "  No, hint: $\\delta$$\\phi$ = $\\phi$1 - $\\phi$2";  // > Fixed relations.answercheck:18
          answertext = "$\\delta$$\\phi$ = $\\phi$1 - $\\phi$2";  // > Fixed relations.answercheck:19
    }  // > Fixed relations.answercheck:20
    else if (sign==-1){  // > Fixed relations.answercheck:21
           A1correct = "  No, hint: $\\delta$$\\phi$ = $\\phi$2 - $\\phi$1";  // > Fixed relations.answercheck:22
          answertext = "$\\delta$$\\phi$ = $\\phi$2 - $\\phi$1";  // > Fixed relations.answercheck:23
    }  // > Fixed relations.answercheck:24
      //    A1correct = "  No, hint: $\\delta$$\\phi$ = $\\phi$1 - $\\phi$2";  // > Fixed relations.answercheck:25
      //    answertext = "$\\delta$$\\phi$ = $\\phi$1 - $\\phi$2";  // > Fixed relations.answercheck:26
          }  // > Fixed relations.answercheck:27
        else if (showhint==false) {  // > Fixed relations.answercheck:28
          A1correct = "  No ";  // > Fixed relations.answercheck:29
          answertext = "$\\delta$$\\phi$";  // > Fixed relations.answercheck:30
        }  // > Fixed relations.answercheck:31
        A1correctbackground = java.awt.Color.RED;  // > Fixed relations.answercheck:32
      }  // > Fixed relations.answercheck:33
    /*  // > Fixed relations.answercheck:34
    B= Cestimated;  // > Fixed relations.answercheck:35
      if (Math.abs(B - enterB1) < 1) {  // > Fixed relations.answercheck:36
        B1correct = "  Yes";  // > Fixed relations.answercheck:37
        B1correctbackground = java.awt.Color.GREEN;  // > Fixed relations.answercheck:38
      }  // > Fixed relations.answercheck:39
      else {  // > Fixed relations.answercheck:40
          // > Fixed relations.answercheck:41
        if (showhint==true) {  // > Fixed relations.answercheck:42
          B1correct = "  No, hint: s/C = theta/360";  // > Fixed relations.answercheck:43
          }  // > Fixed relations.answercheck:44
        else if (showhint==false) {  // > Fixed relations.answercheck:45
          B1correct = "  No ";  // > Fixed relations.answercheck:46
        }  // > Fixed relations.answercheck:47
           B1correctbackground = java.awt.Color.RED;  // > Fixed relations.answercheck:48
          // > Fixed relations.answercheck:49
      }  // > Fixed relations.answercheck:50
      */  // > Fixed relations.answercheck:51
  }  // > Fixed relations.answercheck

  public void _constraints4 () { // > Fixed relations.angle
    //drawing angle  // > Fixed relations.angle:1
    //dcangle = (cta2-cta)/(nangle-2);  // > Fixed relations.angle:2
    //dcangle = cta/(n-2);  // > Fixed relations.angle:3
    // px[0] and px[0] define the centre of polygon  // > Fixed relations.angle:4
    px[0]=0; // for drawing angle polygon  // > Fixed relations.angle:5
    py[0]=0; //  // > Fixed relations.angle:6
    // if statement to draw polygon angle  // > Fixed relations.angle:7
    for(int counter=1;counter<nangle;counter++){  // > Fixed relations.angle:8
    //  c=Math.atan2(y,x)-(i-1)*dcangle;  // modify to work drawing from black line  // > Fixed relations.angle:9
    //  c=(Math.atan2(y,x))-(i-1)*dcangle;  // > Fixed relations.angle:10
    if (sign==1){  // > Fixed relations.angle:11
      dcangle = (2*pi+cta-cta2)/(nangle-2);  // > Fixed relations.angle:12
      c = (2*pi+cta-cta2)-(counter-1)*dcangle;  // > Fixed relations.angle:13
      px[counter]=0+Math.min(A,A2)/2*Math.cos(-cta+c+pi/2); // complementary  // > Fixed relations.angle:14
    py[counter]=0+Math.min(A,A2)/2*Math.sin(-cta+c+pi/2); //  // > Fixed relations.angle:15
      // c = (cta2-cta)-(counter-1)*dcangle;  // > Fixed relations.angle:16
     //  px[counter]=0+Math.min(A,A2)/2*Math.cos(-cta-c+pi/2); //  // > Fixed relations.angle:17
    //py[counter]=0+Math.min(A,A2)/2*Math.sin(-cta-c+pi/2); //  // > Fixed relations.angle:18
    // px[counter]=0+Math.min(A,A2)/2*Math.cos(-cta2+c+pi/2); // complementary  // > Fixed relations.angle:19
    //py[counter]=0+Math.min(A,A2)/2*Math.sin(-cta2+c+pi/2); //  // > Fixed relations.angle:20
    }  // > Fixed relations.angle:21
    else if (sign==-1){  // > Fixed relations.angle:22
      dcangle = (cta2-cta)/(nangle-2);  // > Fixed relations.angle:23
     c = (cta2-cta)-(counter-1)*dcangle;  // > Fixed relations.angle:24
      px[counter]=0+Math.min(A,A2)/2*Math.cos(-cta-c+pi/2); //  // > Fixed relations.angle:25
    py[counter]=0+Math.min(A,A2)/2*Math.sin(-cta-c+pi/2); //  // > Fixed relations.angle:26
     //c = (cta-cta2)-(counter-1)*dcangle;  // > Fixed relations.angle:27
      // px[counter]=0+Math.min(A,A2)/2*Math.cos(c-cta-pi/4); //  // > Fixed relations.angle:28
    //py[counter]=0+Math.min(A,A2)/2*Math.sin(c-cta-pi/4); //  // > Fixed relations.angle:29
      }  // > Fixed relations.angle:30
    // if(c>pi)c-=2*pi; // to overcome pi to -pi problem  // > Fixed relations.angle:31
     // if(c<-pi)c+=2*pi;  // > Fixed relations.angle:32
     // else if (c>pi) c-=2*pi;  // > Fixed relations.angle:33
    }  // > Fixed relations.angle:34
  }  // > Fixed relations.angle

  public void _constraints5 () { // > Fixed relations.view
    R = Math.sqrt(xsum*xsum+ysum*ysum);  // > Fixed relations.view:1
    xmin = -Math.max(R,Math.max(A,A2));  // > Fixed relations.view:2
    xmax = -xmin;  // > Fixed relations.view:3
    ymin = -Math.max(R,Math.max(A,A2));  // > Fixed relations.view:4
    ymax = -ymin;  // > Fixed relations.view:5
  }  // > Fixed relations.view

 // --- Custom

  public void restart () {  // > Custom.restart:1
  t = 0.0;  // > Custom.restart:2
  x = A*Math.cos(omega*t + theta);  // > Custom.restart:3
  y = A*Math.sin(omega*t + theta);  // > Custom.restart:4
  x2 = A2*Math.cos(omega2*t + theta2);  // > Custom.restart:5
  y2 = A2*Math.sin(omega2*t + theta2);  // > Custom.restart:6
  v = -A*omega*Math.sin(omega*t + theta);  // > Custom.restart:7
  v2 = -A2*omega2*Math.sin(omega2*t + theta2);  // > Custom.restart:8
  a = -A*omega*omega*Math.cos(omega*t + theta);  // > Custom.restart:9
  a2 = -A2*omega2*omega2*Math.cos(omega2*t + theta2);  // > Custom.restart:10
  _view.resetTraces();  // > Custom.restart:11
  PE = 0.5*k*x*x;  // > Custom.restart:12
  KE = 0.5*m*v*v;  // > Custom.restart:13
  PE2 = 0.5*k2*x2*x2;  // > Custom.restart:14
  KE2 = 0.5*m2*v2*v2;  // > Custom.restart:15
  }  // > Custom.restart:16

 // --- Methods for view elements

  public double _method_for_text_x () {
    return px[17]*1.2;
  }

  public double _method_for_text_y () {
    return py[17]*1.2;
  }

  public boolean _method_for_trail3_connected () {
    return _isPlaying();
  }

  public boolean _method_for_trail22_connected () {
    return _isPlaying();
  }

  public boolean _method_for_trail2222_connected () {
    return _isPlaying();
  }

  public double _method_for_spring323_x () {
    return -(A+A2);
  }

  public double _method_for_spring323_sizeX () {
    return (A+A2)+x;
  }

  public double _method_for_spring33_x () {
    return (A+A2);
  }

  public double _method_for_spring33_sizeX () {
    return -(A+A2)+x;
  }

  public double _method_for_spring3222_x () {
    return (A+A2);
  }

  public double _method_for_spring3222_sizeX () {
    return -(A+A2)+x2;
  }

  public void _method_for_amplitude_dragaction () {
    restart();
  }
  public void _method_for_amplitude_action () {
    restart();
  }
  public void _method_for_mass_dragaction () {
    omega = Math.sqrt(k/m);
    restart();
  }
  public void _method_for_mass_action () {
    omega = Math.sqrt(k/m);
    restart();
  }
  public void _method_for_k_dragaction () {
    omega = Math.sqrt(k/m);
    restart();
  }
  public void _method_for_k_action () {
    omega = Math.sqrt(k/m);
    restart();
  }
  public void _method_for_mass3522_action () {
    cta = Math.toRadians(ctadeg);
    //theta = phase*Math.PI/180.0;
    //restart();
  }
  public void _method_for_rotation2_actionon () {
    sign = 1;
  }
  public void _method_for_rotation2_actionoff () {
    sign = -1;
  }
  public void _method_for_phase_dragaction () {
    cta = Math.toRadians(ctadeg);
    //theta = phase*Math.PI/180.0;
    //restart();
  }
  public void _method_for_phase_action () {
    //theta = phase*Math.PI/180.0;
    //restart();
  }
  public void _method_for_amplitude2_dragaction () {
    restart();
  }
  public void _method_for_amplitude2_action () {
    restart();
  }
  public void _method_for_mass2_dragaction () {
    omega2 = Math.sqrt(k2/m2);
    restart();
  }
  public void _method_for_mass2_action () {
    omega2 = Math.sqrt(k2/m2);
    restart();
  }
  public void _method_for_k2_dragaction () {
    omega2 = Math.sqrt(k2/m2);
    restart();
  }
  public void _method_for_k2_action () {
    omega2 = Math.sqrt(k2/m2);
    restart();
  }
  public void _method_for_mass35222_action () {
    cta2 = Math.toRadians(cta2deg);
    //theta = phase*Math.PI/180.0;
    //restart();
  }
  public void _method_for_phase2_dragaction () {
    cta2 = Math.toRadians(cta2deg);
  }
  public boolean _method_for_label4_visible () {
    return (Math.abs(Answer - enterA1%360) < 1);
  }

  public boolean _method_for_label_visible () {
    return !showhint&&(Math.abs(Answer - enterA1%360) > 1);
  }

  public boolean _method_for_label2_visible () {
    return showhint&&(Math.abs(Answer - enterA1%360) > 1);
  }

  public void _method_for_playpause_actionOn () {
    _play();
  }
  public void _method_for_playpause_actionOff () {
    _pause();
  }
  public void _method_for_stepforward_action () {
    _step();
  }
  public void _method_for_Reset_action () {
    _reset();
  }
  public void _method_for_instructions_action () {
    if (helpFlag)
    {
    helpFlag = false;
    helpLabel = "Show Help";
    }
    else
    {
    helpFlag = true;
    helpLabel = "Hide Help";
    };
  }
  public double _method_for_spring32_sizeY () {
    return -ymax+y;
  }

  public double _method_for_spring322_sizeY () {
    return -ymax+y2;
  }

  public double _method_for_AccelerationGraph_minimumY () {
    return -(A+A2);
  }

  public double _method_for_AccelerationGraph_maximumY () {
    return (A+A2);
  }

  public void _method_for_helpBox_onClosing () {
    helpFlag = false;
    helpLabel = "Show Help";
  }
} // End of class reference_circle_v2weeModel

