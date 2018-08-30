/*
 * Class : gaussian.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package users.br.ahmed.gaussian_pkg;

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

public class gaussian extends org.colos.ejs.library.Model {

  static {
    org.opensourcephysics.tools.ToolForData.setTool(new org.opensourcephysics.tools.ToolForDataFull());
    __translatorUtil = new org.colos.ejs.library.utils.TranslatorResourceUtil("users.br.ahmed.gaussian_pkg.gaussian");
  }

  static public boolean _sSwingView = true;

  static public int _sServerPort = -1;
  static public int _getServerPort() { return _sServerPort; }

  public gaussianSimulation _simulation=null;
  public gaussianView _view=null;
  public gaussian _model=this;

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

  static public String _getEjsModel() { return "/users/br/ahmed/gaussian.xml"; }

  static public String _getModelDirectory() { return "users/br/ahmed/"; }

  static public java.awt.Dimension _getEjsAppletDimension() {
    return new java.awt.Dimension(590,342);
  }

  static public java.util.Set<String> _getEjsResources() {
    java.util.Set<String> list = new java.util.HashSet<String>();
    list.add("/data/play.gif");
    list.add("/data/init.gif");
    list.add("/data/reset.gif");
    list.add("/data/pause.gif");
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
    org.opensourcephysics.tools.ResourceLoader.addSearchPath("users/br/ahmed/"); // This is for relative resources
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
    gaussian._addHtmlPageInfo("Intro Page","_default_","Intro Page","./gaussian_Intro_1.html");
    if (!underEjs) {
    }
    return true; // Everything went ok
  }

  static public void main (String[] _args) {
    if (!_common_initialization(_args)) {
      if (org.opensourcephysics.display.OSPRuntime.isLauncherMode()) return;
      System.exit(-1);
    }

    gaussian __theModel = new gaussian (_args);
  }

  static public javax.swing.JComponent getModelPane(String[] _args, javax.swing.JFrame _parentFrame) {
    if (!_common_initialization(_args)) return null;
    gaussian __theModel = new gaussian ("Frame",_parentFrame,null,null,_args,true);
    return (javax.swing.JComponent) __theModel._getView().getComponent("Frame");
  }

  public gaussian () { this (null, null, null,null,null,false); } // slave application

  public gaussian (String[] _args) { this (null, null, null,null,_args,true); }

  public gaussian (String _replaceName, java.awt.Frame _replaceOwnerFrame, java.net.URL _codebase, org.colos.ejs.library.LauncherApplet _anApplet, String[] _args, boolean _allowAutoplay) {
    org.colos.ejs.library.control.swing.ControlWindow.setKeepHidden(true);
    __theArguments = _args;
    __theApplet = _anApplet;
    java.text.NumberFormat _Ejs_format = java.text.NumberFormat.getInstance();
    if (_Ejs_format instanceof java.text.DecimalFormat) {
      ((java.text.DecimalFormat) _Ejs_format).getDecimalFormatSymbols().setDecimalSeparator('.');
    }
    _simulation = new gaussianSimulation (this,_replaceName,_replaceOwnerFrame,_codebase,_allowAutoplay);
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
    _isEnabled_constraints1 = true; // Reset enabled condition for Model.Constraints.Cons Page
    range = 200; // Variables.coordinate:1    range = 200; // Variables.coordinate:1
    xmin = -range/2; // Variables.coordinate:2    xmin = -range/2; // Variables.coordinate:2
    xmax = range/2; // Variables.coordinate:3    xmax = range/2; // Variables.coordinate:3
    ymin = -range/2; // Variables.coordinate:4    ymin = -range/2; // Variables.coordinate:4
    ymax = range/2; // Variables.coordinate:5    ymax = range/2; // Variables.coordinate:5
    t = 0.0; // Variables.coordinate:6    t = 0.0; // Variables.coordinate:6
    dt = 0.05; // Variables.coordinate:7    dt = 0.05; // Variables.coordinate:7
    size = range/40; // Variables.coordinate:8    size = range/40; // Variables.coordinate:8
    label = "play"; // Variables.coordinate:9    label = "play"; // Variables.coordinate:9
    w = 1; // Variables.coordinate:10    w = 1; // Variables.coordinate:10
    hundred = true; // Variables.coordinate:11    hundred = true; // Variables.coordinate:11
    v = 5.0; // Variables.coordinate:12    v = 5.0; // Variables.coordinate:12
    sigma2 = 0.0; // Variables.coordinate:13    sigma2 = 0.0; // Variables.coordinate:13
    l_play = "play"; // Variables.language:1    l_play = "play"; // Variables.language:1
    l_pause = "pause"; // Variables.language:2    l_pause = "pause"; // Variables.language:2
    l_reset = "reset"; // Variables.language:3    l_reset = "reset"; // Variables.language:3
    l_init = "initialize"; // Variables.language:4    l_init = "initialize"; // Variables.language:4
    l_hundred = "hundred"; // Variables.language:5    l_hundred = "hundred"; // Variables.language:5
    l_title = "test run # = "; // Variables.language:6    l_title = "test run # = "; // Variables.language:6
    l_msg = "red dots # = "; // Variables.language:7    l_msg = "red dots # = "; // Variables.language:7
    n = 100; // Variables.basic:1    n = 100; // Variables.basic:1
    n2 = 10; // Variables.basic:2    n2 = 10; // Variables.basic:2
    n1 = n2; // Variables.basic:3    n1 = n2; // Variables.basic:3
    n21 = n2-1; // Variables.basic:4    n21 = n2-1; // Variables.basic:4
    x = new double [n]; // Variables.basic:5
    for (int _i0=0; _i0<n; _i0++) x[_i0] = 0; // Variables.basic:5
    y = new double [n]; // Variables.basic:6
    for (int _i0=0; _i0<n; _i0++) y[_i0] = 0; // Variables.basic:6
    count = new double [n+1]; // Variables.basic:7
    for (int _i0=0; _i0<n+1; _i0++) count[_i0] = 0; // Variables.basic:7
    xp = new double [n+1]; // Variables.basic:8
    for (int _i0=0; _i0<n+1; _i0++) xp[_i0] = 0; // Variables.basic:8
    yp = new double [n2]; // Variables.basic:9
    for (int _i0=0; _i0<n2; _i0++) yp[_i0] = 0.0; // Variables.basic:9
    txt = new String [n2]; // Variables.basic:10
    color = new Object [n]; // Variables.basic:11
    cmax = 0.0; // Variables.basic:16    cmax = 0.0; // Variables.basic:16
    total = ""; // Variables.basic:17    total = ""; // Variables.basic:17
    testcount = 0; // Variables.basic:18    testcount = 0; // Variables.basic:18
    title = ""; // Variables.basic:19    title = ""; // Variables.basic:19
    cst = 0.0; // Variables.basic:20    cst = 0.0; // Variables.basic:20
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
  }

  public void _updateModel () {
    __shouldBreak = false;
    boolean _wasEnabled_constraints1 = _isEnabled_constraints1;
    if (_wasEnabled_constraints1) _constraints1 ();
    if (__shouldBreak) return;
  }

  public void _readFromViewAfterUpdate () {
  }

  public void _freeMemory () {
    getSimulation().setEnded(); // Signal that the simulation ended already
    x = null;  // Variables.basic:5
    y = null;  // Variables.basic:6
    count = null;  // Variables.basic:7
    xp = null;  // Variables.basic:8
    yp = null;  // Variables.basic:9
    txt = null;  // Variables.basic:10
    color = null;  // Variables.basic:11
    System.gc(); // Free memory from unused old arrays
  }

 // -------------------------------------------
 // Variables defined by the user
 // -------------------------------------------

 public double range  = 200; // Variables.coordinate:1
 public double xmin  = -range/2; // Variables.coordinate:2
 public double xmax  = range/2; // Variables.coordinate:3
 public double ymin  = -range/2; // Variables.coordinate:4
 public double ymax  = range/2; // Variables.coordinate:5
 public double t  = 0.0; // Variables.coordinate:6
 public double dt  = 0.05; // Variables.coordinate:7
 public double size  = range/40; // Variables.coordinate:8
 public String label  = "play"; // Variables.coordinate:9
 public double w  = 1; // Variables.coordinate:10
 public boolean hundred  = true; // Variables.coordinate:11
 public double v  = 5.0; // Variables.coordinate:12
 public double sigma2  = 0.0; // Variables.coordinate:13
 public String l_play  = "play"; // Variables.language:1
 public String l_pause  = "pause"; // Variables.language:2
 public String l_reset  = "reset"; // Variables.language:3
 public String l_init  = "initialize"; // Variables.language:4
 public String l_hundred  = "hundred"; // Variables.language:5
 public String l_title  = "test run # = "; // Variables.language:6
 public String l_msg  = "red dots # = "; // Variables.language:7
 public int n  = 100; // Variables.basic:1
 public int n2  = 10; // Variables.basic:2
 public int n1  = n2; // Variables.basic:3
 public int n21  = n2-1; // Variables.basic:4
 public double x []; // Variables.basic:5
 public double y []; // Variables.basic:6
 public double count []; // Variables.basic:7
 public double xp []; // Variables.basic:8
 public double yp []; // Variables.basic:9
 public String txt []; // Variables.basic:10
 public Object color []; // Variables.basic:11
 public Object blue  = null; // Variables.basic:12
 public Object red  = null; // Variables.basic:13
 public Object black  = null; // Variables.basic:14
 public Object clr  = null; // Variables.basic:15
 public double cmax  = 0.0; // Variables.basic:16
 public String total  = ""; // Variables.basic:17
 public int testcount  = 0; // Variables.basic:18
 public String title  = ""; // Variables.basic:19
 public double cst  = 0.0; // Variables.basic:20

 // -------------------------------------------
 // Enabled condition of pages 
 // -------------------------------------------

  private boolean _isEnabled_initialization1 = true; // Enabled condition for Model.Initialization.Init Page
  private boolean _isEnabled_constraints1 = true; // Enabled condition for Model.Constraints.Cons Page

  public void _setPageEnabled(String _pageName, boolean _enabled) { // Sets the enabled state of a page
    boolean _pageFound = false;
    if ("Init Page".equals(_pageName)) { _pageFound = true; _isEnabled_initialization1 = _enabled; } // Change enabled condition for Model.Initialization.Init Page
    if ("Cons Page".equals(_pageName)) { _pageFound = true; _isEnabled_constraints1 = _enabled; } // Change enabled condition for Model.Constraints.Cons Page
    if (!_pageFound) System.out.println ("_setPageEnabled() warning. Page not found: "+_pageName);
  }

 // -------------------------------------------
 // Methods defined by the user 
 // -------------------------------------------

 // --- Initialization

  public void _initialization1 () { // > Initialization.Init Page
    int j;  // > Initialization.Init Page:1
    testcount=0;  // > Initialization.Init Page:2
    double d=range/(n1+1);  // > Initialization.Init Page:3
    if(hundred){  // > Initialization.Init Page:4
      n2=n;  // > Initialization.Init Page:5
      n21=n2-1;  // > Initialization.Init Page:6
    }else{  // > Initialization.Init Page:7
      n2=10;  // > Initialization.Init Page:8
      n21=n2-1;  // > Initialization.Init Page:9
    }  // > Initialization.Init Page:10
    for(int i=0;i<n+1;i++){  // > Initialization.Init Page:11
     xp[i]=i;  // > Initialization.Init Page:12
     count[i]=0;  // > Initialization.Init Page:13
    }  // > Initialization.Init Page:14
    for(int i=0;i<n1;i++) yp[i]=ymin+(i+1)*d;  // > Initialization.Init Page:15
    cst=1./Math.sqrt(2*Math.PI);  // > Initialization.Init Page:16
    for(int i=0;i<n;i++){  // > Initialization.Init Page:17
       j=i%n1;  // > Initialization.Init Page:18
       x[i]=xmin+d*(j+1);  // > Initialization.Init Page:19
       y[i]=ymin+(i/n1+1)*d;  // > Initialization.Init Page:20
    }  // > Initialization.Init Page:21
    red=new java.awt.Color(255,0,0);  // > Initialization.Init Page:22
    blue=new java.awt.Color(0,0,255);  // > Initialization.Init Page:23
    black=new java.awt.Color(0,0,0);  // > Initialization.Init Page:24
    if(hundred){  // > Initialization.Init Page:25
     v=50.;  // > Initialization.Init Page:26
     clr=blue;  // > Initialization.Init Page:27
     sigma2=n;  // > Initialization.Init Page:28
    }else{  // > Initialization.Init Page:29
      v=5;  // > Initialization.Init Page:30
      clr=black;  // > Initialization.Init Page:31
     cst=cst*Math.sqrt(1000);  // > Initialization.Init Page:32
     sigma2=10;  // > Initialization.Init Page:33
    }  // > Initialization.Init Page:34
  }  // > Initialization.Init Page

 // --- Evolution

 // --- Constraints

  public void _constraints1 () { // > Fixed relations.Cons Page
    newrun();  // > Fixed relations.Cons Page:1
  }  // > Fixed relations.Cons Page

 // --- Custom

  public void playpause () {  // > Custom.playpause:1
   if(label==l_play){  // > Custom.playpause:2
    label=l_pause;  // > Custom.playpause:3
    _play();  // > Custom.playpause:4
   }else{  // > Custom.playpause:5
    label=l_play;  // > Custom.playpause:6
    _pause();  // > Custom.playpause:7
   }  // > Custom.playpause:8
  }  // > Custom.playpause:9

  int cnt=0,cnt2=0;  // > Custom.newrun:1
  public void newrun () {  // > Custom.newrun:2
   testcount++;  // > Custom.newrun:3
   cnt2=0;  // > Custom.newrun:4
   for(int i=0;i<n;i++){  // > Custom.newrun:5
     if(i%n1==0)cnt=0;  // > Custom.newrun:6
     if(Math.random()>0.5){  // > Custom.newrun:7
      color[i]=red;  // > Custom.newrun:8
      cnt++;  // > Custom.newrun:9
      cnt2++;  // > Custom.newrun:10
     }else color[i]=blue;  // > Custom.newrun:11
     if(i%n1==(n1-1)){  // > Custom.newrun:12
       if(!hundred)count[cnt]+=1;  // > Custom.newrun:13
       txt[i/n1]=""+cnt;  // > Custom.newrun:14
     }  // > Custom.newrun:15
   }  // > Custom.newrun:16
   cmax=0;  // > Custom.newrun:17
   for(int i=0;i<n2+1;i++){  // > Custom.newrun:18
    if(count[i]>cmax)cmax=count[i];  // > Custom.newrun:19
   }  // > Custom.newrun:20
   if(hundred)count[cnt2]+=1;  // > Custom.newrun:21
   cmax=cmax+2;  // > Custom.newrun:22
   total=l_msg+cnt2;  // > Custom.newrun:23
   title=l_title+testcount;  // > Custom.newrun:24
  }  // > Custom.newrun:25

  public void zh_tw () {  // > Custom.chinese:1
   l_play="����";  // > Custom.chinese:2
   l_reset="���]";  // > Custom.chinese:3
   l_pause="�Ȱ�";  // > Custom.chinese:4
   l_init="��l��";  // > Custom.chinese:5
   l_title="���զ��� = ";  // > Custom.chinese:6
   l_msg="���I�ƥ� = ";  // > Custom.chinese:7
   label=l_play;  // > Custom.chinese:8
   _initialize();  // > Custom.chinese:9
  }  // > Custom.chinese:10
  public void locale(String type){  // > Custom.chinese:11
   if(type.equals("zh_tw"))zh_tw();  // > Custom.chinese:12
  }  // > Custom.chinese:13

 // --- Methods for view elements

  public void _method_for_reset_action () {
    _reset();
  }
  public void _method_for_initialize_action () {
    _initialize();
  }
  public void _method_for_twoStateButton_actionOn () {
    _play();
  }
  public void _method_for_twoStateButton_actionOff () {
    _pause();
  }
  public void _method_for_hundred_action () {
    _initialize();
  }
} // End of class gaussianModel

