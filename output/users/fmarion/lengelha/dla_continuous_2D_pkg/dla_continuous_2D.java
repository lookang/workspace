/*
 * Class : dla_continuous_2D.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package users.fmarion.lengelha.dla_continuous_2D_pkg;

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

public class dla_continuous_2D extends org.colos.ejs.library.Model {

  static {
    __translatorUtil = new org.colos.ejs.library.utils.TranslatorUtil();
  }

  static public boolean _sSwingView = true;

  static public int _sServerPort = -1;
  static public int _getServerPort() { return _sServerPort; }

  public dla_continuous_2DSimulation _simulation=null;
  public dla_continuous_2DView _view=null;
  public dla_continuous_2D _model=this;

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

  static public String _getEjsModel() { return "/users/fmarion/lengelha/dla_continuous_2D.ejs"; }

  static public String _getModelDirectory() { return "users/fmarion/lengelha/"; }

  static public java.awt.Dimension _getEjsAppletDimension() {
    return new java.awt.Dimension(894,707);
  }

  static public java.util.Set<String> _getEjsResources() {
    java.util.Set<String> list = new java.util.HashSet<String>();
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
    org.opensourcephysics.tools.ResourceLoader.addSearchPath("users/fmarion/lengelha/"); // This is for relative resources
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
    dla_continuous_2D._addHtmlPageInfo("Introduction","_default_","Introduction","./dla_continuous_2D_Intro_1.html");
    dla_continuous_2D._addHtmlPageInfo("Exercises","_default_","Exercises","./dla_continuous_2D_Intro_2.html");
    if (!underEjs) {
    }
    return true; // Everything went ok
  }

  static public void main (String[] _args) {
    if (!_common_initialization(_args)) {
      if (org.opensourcephysics.display.OSPRuntime.isLauncherMode()) return;
      System.exit(-1);
    }

    dla_continuous_2D __theModel = new dla_continuous_2D (_args);
  }

  static public javax.swing.JComponent getModelPane(String[] _args, javax.swing.JFrame _parentFrame) {
    if (!_common_initialization(_args)) return null;
    dla_continuous_2D __theModel = new dla_continuous_2D ("drawingFrame",_parentFrame,null,null,_args,true);
    return (javax.swing.JComponent) __theModel._getView().getComponent("drawingFrame");
  }

  public dla_continuous_2D () { this (null, null, null,null,null,false); } // slave application

  public dla_continuous_2D (String[] _args) { this (null, null, null,null,_args,true); }

  public dla_continuous_2D (String _replaceName, java.awt.Frame _replaceOwnerFrame, java.net.URL _codebase, org.colos.ejs.library.LauncherApplet _anApplet, String[] _args, boolean _allowAutoplay) {
    org.colos.ejs.library.control.swing.ControlWindow.setKeepHidden(true);
    __theArguments = _args;
    __theApplet = _anApplet;
    java.text.NumberFormat _Ejs_format = java.text.NumberFormat.getInstance();
    if (_Ejs_format instanceof java.text.DecimalFormat) {
      ((java.text.DecimalFormat) _Ejs_format).getDecimalFormatSymbols().setDecimalSeparator('.');
    }
    _simulation = new dla_continuous_2DSimulation (this,_replaceName,_replaceOwnerFrame,_codebase,_allowAutoplay);
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

  public int _getPreferredStepsPerDisplay() { return spd; }

  public void _resetModel () {
    _isEnabled_initialization1 = true; // Reset enabled condition for Model.Initialization.Init Page
    _isEnabled_evolution1 = true; // Reset enabled condition for Model.Evolution.Take one step
    n = 1; // Variables.All Variables:1    n = 1; // Variables.All Variables:1
    colorArray = new Color [n]; // Variables.All Variables:2
    walkerPos = new double [2]; // Variables.All Variables:3
    edge = 1; // Variables.All Variables:4    edge = 1; // Variables.All Variables:4
    stuckPos = new double [][]{{0,0}}; // Variables.All Variables:5
    diameter = 0.5; // Variables.All Variables:6    diameter = 0.5; // Variables.All Variables:6
    diamSq = diameter*diameter; // Variables.All Variables:7    diamSq = diameter*diameter; // Variables.All Variables:7
    spd = 1; // Variables.All Variables:8    spd = 1; // Variables.All Variables:8
    adjustStepSize = true; // Variables.All Variables:9    adjustStepSize = true; // Variables.All Variables:9
    minStepSize = 0.25*diameter; // Variables.All Variables:10    minStepSize = 0.25*diameter; // Variables.All Variables:10
    stepSize = minStepSize; // Variables.All Variables:11    stepSize = minStepSize; // Variables.All Variables:11
    maxRad = 0; // Variables.All Variables:12    maxRad = 0; // Variables.All Variables:12
    display = true; // Variables.All Variables:13    display = true; // Variables.All Variables:13
  }

  public void _initializeSolvers () { } // Do nothing 

  public void _initializeModel () {
    __shouldBreak = false;
    boolean _wasEnabled_initialization1 = _isEnabled_initialization1;
    if (_wasEnabled_initialization1) _initialization1 ();
    if (__shouldBreak) return;
    _initializeSolvers();
  }

  public void _automaticResetSolvers() { 
  }
  public void _resetSolvers() { 
  }
  public void _stepModel () {
    __shouldBreak = false;
    boolean _wasEnabled_evolution1 = _isEnabled_evolution1;
    if (_wasEnabled_evolution1) _evolution1 ();
    if (__shouldBreak) return;
  }

  public void _updateModel () {
    __shouldBreak = false;
  }

  public void _readFromViewAfterUpdate () {
  }

  public void _freeMemory () {
    getSimulation().setEnded(); // Signal that the simulation ended already
    colorArray = null;  // Variables.All Variables:2
    walkerPos = null;  // Variables.All Variables:3
    stuckPos = null;  // Variables.All Variables:5
    System.gc(); // Free memory from unused old arrays
  }

 // -------------------------------------------
 // Variables defined by the user
 // -------------------------------------------

 public int n  = 1; // Variables.All Variables:1
 public Color colorArray []; // Variables.All Variables:2
 public double walkerPos []; // Variables.All Variables:3
 public double edge  = 1; // Variables.All Variables:4
 public double stuckPos [][]; // Variables.All Variables:5
 public double diameter  = 0.5; // Variables.All Variables:6
 public double diamSq  = diameter*diameter; // Variables.All Variables:7
 public int spd  = 1; // Variables.All Variables:8
 public boolean adjustStepSize  = true; // Variables.All Variables:9
 public double minStepSize  = 0.25*diameter; // Variables.All Variables:10
 public double stepSize  = minStepSize; // Variables.All Variables:11
 public double maxRad  = 0; // Variables.All Variables:12
 public boolean display  = true; // Variables.All Variables:13

 // -------------------------------------------
 // Enabled condition of pages 
 // -------------------------------------------

  private boolean _isEnabled_initialization1 = true; // Enabled condition for Model.Initialization.Init Page
  private boolean _isEnabled_evolution1 = true; // Enabled condition for Model.Evolution.Take one step

  public void _setPageEnabled(String _pageName, boolean _enabled) { // Sets the enabled state of a page
    boolean _pageFound = false;
    if ("Init Page".equals(_pageName)) { _pageFound = true; _isEnabled_initialization1 = _enabled; } // Change enabled condition for Model.Initialization.Init Page
    if ("Take one step".equals(_pageName)) { _pageFound = true; _isEnabled_evolution1 = _enabled; } // Change enabled condition for Model.Evolution.Take one step
    if (!_pageFound) System.out.println ("_setPageEnabled() warning. Page not found: "+_pageName);
  }

 // -------------------------------------------
 // Methods defined by the user 
 // -------------------------------------------

 // --- Initialization

  public void _initialization1 () { // > Initialization.Init Page
    startingPos();  // Pick an initial position  // > Initialization.Init Page:1
  }  // > Initialization.Init Page

 // --- Evolution

  public void _evolution1 () { // > Evolution.Take one step
    // Adjust position of active particle  // > Evolution.Take one step:1
    // being careful not to take too big of a step!  // > Evolution.Take one step:2
    double theta = 2.0*Math.PI * Math.random();  // > Evolution.Take one step:3
    walkerPos[0] += stepSize*Math.cos(theta);  // > Evolution.Take one step:4
    walkerPos[1] += stepSize*Math.sin(theta);  // > Evolution.Take one step:5
    // Distance from center (reset if too large)  // > Evolution.Take one step:6
    double r = Math.sqrt(walkerPos[0]*walkerPos[0] + walkerPos[1]*walkerPos[1]);  // > Evolution.Take one step:7
    if (r > 2*edge) { // If outside, restart  // > Evolution.Take one step:8
      startingPos();  // > Evolution.Take one step:9
    } else {          // If inside, check for a collision  // > Evolution.Take one step:10
      checkCollision();  // > Evolution.Take one step:11
    }  // > Evolution.Take one step:12
  }  // > Evolution.Take one step

 // --- Constraints

 // --- Custom

  // Returns true if inside the box, false if outside  // > Custom.Inside:1
  public boolean inside(double[] xy) {  // > Custom.Inside:2
    for (int i = 0; i < 2; i++) {  // > Custom.Inside:3
      if (xy[i] < -edge || xy[i] > edge)  // > Custom.Inside:4
        return false;  // > Custom.Inside:5
    }  // > Custom.Inside:6
    return true;  // > Custom.Inside:7
  }  // > Custom.Inside:8

  public void startingPos () {  // > Custom.StartingPosition:1
    // Random angle  // > Custom.StartingPosition:2
    double theta = 2.0*Math.PI*Math.random();  // > Custom.StartingPosition:3
    // Radius = "edge" (=0.5*boxheight=0.5*boxwidth)  // > Custom.StartingPosition:4
    walkerPos[0] = edge * Math.cos(theta);  // > Custom.StartingPosition:5
    walkerPos[1] = edge * Math.sin(theta);  // > Custom.StartingPosition:6
      // > Custom.StartingPosition:7
    stepSize = minStepSize;  // Start w/small steps  // > Custom.StartingPosition:8
  }  // > Custom.StartingPosition:9

  // Returns true for collision, false otherwise  // > Custom.Check for Collision:1
  public boolean checkCollision () {  // > Custom.Check for Collision:2
      // > Custom.Check for Collision:3
    double x = walkerPos[0];  // > Custom.Check for Collision:4
    double y = walkerPos[1];  // > Custom.Check for Collision:5
    // separation^2 to the FARTHEST particle (initially an big, arbitrary number)  // > Custom.Check for Collision:6
    double smallest_dSq = 1000*edge*edge;  // > Custom.Check for Collision:7
    // Loop thru all particles, looking for collisions  // > Custom.Check for Collision:8
    for (int i=n-1; i>=0; i--) { // Start with most recent...  // > Custom.Check for Collision:9
        // > Custom.Check for Collision:10
      double dx = (stuckPos[i][0] - x);  // > Custom.Check for Collision:11
      double dy = (stuckPos[i][1] - y);  // > Custom.Check for Collision:12
        // > Custom.Check for Collision:13
      double dSq = dx*dx + dy*dy;  // Square of distance between particles  // > Custom.Check for Collision:14
        // > Custom.Check for Collision:15
      if (dSq > diamSq) {      // Not a collision  // > Custom.Check for Collision:16
        if (dSq < smallest_dSq)// Closest so far?  // > Custom.Check for Collision:17
          smallest_dSq = dSq;  // Record distance squared  // > Custom.Check for Collision:18
      }  // > Custom.Check for Collision:19
        // > Custom.Check for Collision:20
      else {  // A collision  // > Custom.Check for Collision:21
        double d = Math.sqrt(dSq);  // Distance between centers  // > Custom.Check for Collision:22
        interpolate(x,dx,y,dy,d);   // Shift back a bit to not overlap  // > Custom.Check for Collision:23
        stick();  // > Custom.Check for Collision:24
        adjustForCOM();  // > Custom.Check for Collision:25
        return true;  // > Custom.Check for Collision:26
      }  // > Custom.Check for Collision:27
    }  // > Custom.Check for Collision:28
      // > Custom.Check for Collision:29
    // Make step size as big as possible  // > Custom.Check for Collision:30
    if (adjustStepSize) {  // > Custom.Check for Collision:31
      double sep = Math.sqrt(smallest_dSq);  // > Custom.Check for Collision:32
      if (sep < 1.5*diameter) // If CLOSE  // > Custom.Check for Collision:33
        stepSize = minStepSize;  // > Custom.Check for Collision:34
      else // If FAR  // > Custom.Check for Collision:35
        stepSize = sep - 1.1*diameter;  // > Custom.Check for Collision:36
    }  // > Custom.Check for Collision:37
      // > Custom.Check for Collision:38
    return false; // No collision  // > Custom.Check for Collision:39
  }  // > Custom.Check for Collision:40

  // Update the walker position to be right at the edge  // > Custom.interpolate:1
  public void interpolate (double x, double dx,  // > Custom.interpolate:2
                           double y, double dy, double d) {  // > Custom.interpolate:3
    // We want the following ratio to be 1,  // > Custom.interpolate:4
    // but it is probably greater than 1.  // > Custom.interpolate:5
    double ratio = diameter / d;  // > Custom.interpolate:6
      // > Custom.interpolate:7
    // Adjust position based on ratio  // > Custom.interpolate:8
    x += dx*(1-ratio);  // > Custom.interpolate:9
    y += dy*(1-ratio);  // > Custom.interpolate:10
      // > Custom.interpolate:11
    walkerPos[0] = x;  // Save updated x,y  // > Custom.interpolate:12
    walkerPos[1] = y;  // > Custom.interpolate:13
      // > Custom.interpolate:14
    // Distance from new particle to center  // > Custom.interpolate:15
    double rad = Math.sqrt(x*x + y*y);  // > Custom.interpolate:16
      // > Custom.interpolate:17
    // Expand space if necessary  // > Custom.interpolate:18
    if (rad > maxRad) maxRad = rad;  // > Custom.interpolate:19
    edge = maxRad + 2*diameter;  // > Custom.interpolate:20
  }  // > Custom.interpolate:21

  public void stick() {  // > Custom.Stick:1
      // > Custom.Stick:2
    // store temporary data  // > Custom.Stick:3
    double[][] tempPos = new double[n][2];  // > Custom.Stick:4
    for (int i=0; i<n; i++) {  // > Custom.Stick:5
      for (int j=0; j<2; j++) {  // > Custom.Stick:6
        tempPos[i][j] = stuckPos[i][j];  // > Custom.Stick:7
      }  // > Custom.Stick:8
    }  // > Custom.Stick:9
      // > Custom.Stick:10
    // Increase n  // > Custom.Stick:11
    n++;  // > Custom.Stick:12
    stuckPos = new double[n][2];  // > Custom.Stick:13
    colorArray = new Color[n];  // > Custom.Stick:14
    if (display)  // > Custom.Stick:15
      updateColors();  // > Custom.Stick:16
      // > Custom.Stick:17
    // retrieve temporary data  // > Custom.Stick:18
    for (int i=0; i<n-1; i++) {  // > Custom.Stick:19
      for (int j=0; j<2; j++) {  // > Custom.Stick:20
        stuckPos[i][j] = tempPos[i][j];  // > Custom.Stick:21
      }  // > Custom.Stick:22
    }  // > Custom.Stick:23
      // > Custom.Stick:24
    // Add new particle  // > Custom.Stick:25
    for (int j=0; j<2; j++) {  // > Custom.Stick:26
      stuckPos[n-1][j] = walkerPos[j];  // > Custom.Stick:27
    }  // > Custom.Stick:28
      // > Custom.Stick:29
    startingPos(); // Start new particle at a new position  // > Custom.Stick:30
  }  // > Custom.Stick:31

  // Shift the cluster so the center-of-mass is at the middle  // > Custom.Center of Mass:1
  public void adjustForCOM () {  // > Custom.Center of Mass:2
      // > Custom.Center of Mass:3
    double[] accum = {0,0};  // > Custom.Center of Mass:4
      // > Custom.Center of Mass:5
    for (int i = 0; i < n; i++) {  // > Custom.Center of Mass:6
      for (int j = 0; j < 2; j++) {  // > Custom.Center of Mass:7
        accum[j] += stuckPos[i][j];  // > Custom.Center of Mass:8
      }  // > Custom.Center of Mass:9
    }  // > Custom.Center of Mass:10
      // > Custom.Center of Mass:11
    for (int j = 0; j < 2; j++) {  // > Custom.Center of Mass:12
      accum[j] /= n;  // > Custom.Center of Mass:13
    }  // > Custom.Center of Mass:14
      // > Custom.Center of Mass:15
    for (int i = 0; i < n; i++) {  // > Custom.Center of Mass:16
      for (int j = 0; j < 2; j++) {  // > Custom.Center of Mass:17
        stuckPos[i][j] -= accum[j];  // > Custom.Center of Mass:18
      }  // > Custom.Center of Mass:19
    }    // > Custom.Center of Mass:20
  }  // > Custom.Center of Mass:21

  public void updateColors () { // For each particle...  // > Custom.Update Colors:1
    for (int i = 0; i < n; i++)  // > Custom.Update Colors:2
      colorArray[i] = valueToColor(i,n);  // > Custom.Update Colors:3
  }  // > Custom.Update Colors:4

  // Returns a color based on the ratio value/maxValue  // > Custom.Value To Color:1
  // red for value = 0  // > Custom.Value To Color:2
  // green for value = 0.5*maxValue  // > Custom.Value To Color:3
  // blue for value = maxValue (and blue for value > maxValue)  // > Custom.Value To Color:4
  public Color valueToColor (int value, int maxValue) {  // > Custom.Value To Color:5
    // return blue if value > maxValue  // > Custom.Value To Color:6
    if (value > maxValue) return new Color(0, 0, 255);  // > Custom.Value To Color:7
    int r, g, b; // Number from 0 to 255 representing amount of red, green, and blue  // > Custom.Value To Color:8
      // > Custom.Value To Color:9
    double fraction = value / (double)maxValue;  // > Custom.Value To Color:10
    double remainder = 1.0 - fraction;  // > Custom.Value To Color:11
      // > Custom.Value To Color:12
    // Used within the "red to green" half or "green to blue" half  // > Custom.Value To Color:13
    double halfFraction, halfRemainder;  // > Custom.Value To Color:14
      // > Custom.Value To Color:15
    if (fraction <= 0.5) { // Between red and green  // > Custom.Value To Color:16
      // > Custom.Value To Color:17
      halfFraction  = 2*fraction;          // 0 for red and 1 for green  // > Custom.Value To Color:18
      halfRemainder = 2*(remainder-0.5);   // 0 for green and 1 for red  // > Custom.Value To Color:19
        // > Custom.Value To Color:20
      r = (int) (255*halfRemainder); // Starts our red (when fraction = 0)  // > Custom.Value To Color:21
      g = (int) (255*halfFraction);  // Turns green when half way to maxValue  // > Custom.Value To Color:22
      b = 0;  // no blue  // > Custom.Value To Color:23
    }  // > Custom.Value To Color:24
    else {  // Between green and blue  // > Custom.Value To Color:25
      // > Custom.Value To Color:26
      halfFraction  = 2*(fraction-0.5);    // 0 for green and 1 for blue  // > Custom.Value To Color:27
      halfRemainder = 2*remainder;         // 0 for blue and 1 for green  // > Custom.Value To Color:28
        // > Custom.Value To Color:29
      r = 0;  // no red  // > Custom.Value To Color:30
      g = (int) (255 * halfRemainder); // green when fraction = remainder = 0.5  // > Custom.Value To Color:31
      b = (int) (255 * halfFraction);  // blue when fraction = 1  // > Custom.Value To Color:32
    }  // > Custom.Value To Color:33
    return new Color(r, g, b);  // > Custom.Value To Color:34
  }  // > Custom.Value To Color:35

 // --- Methods for view elements

  public double _method_for_plottingPanel_minimumX () {
    return -edge;
  }

  public double _method_for_plottingPanel_minimumY () {
    return -edge;
  }

  public Object _method_for_polygon_data () {
    return new double[][]{{-edge, -edge}, {-edge,edge},{edge,edge},{edge,-edge},{-edge,-edge}};
  }

  public void _method_for_displayCheckBox_actionon () {
    updateColors();
  }
  public void _method_for_adjustCheckBox_actionoff () {
    stepSize = minStepSize;
  }
  public void _method_for_playPauseButton_actionOn () {
    _play();
  }
  public void _method_for_playPauseButton_actionOff () {
    _pause();
  }
  public void _method_for_resetButton_action () {
    _reset();
  }
  public void _method_for_button_action () {
    _step();
  }
} // End of class dla_continuous_2DModel

