/*
 * Class : reference_circle_v2weeApplet.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package users.sgeducation.lookang.reference_circle_v2wee_pkg;

import org.colos.ejs.library._EjsConstants;

// Imports suggested by Model Elements:
// End of imports from Model Elements

public class reference_circle_v2weeApplet extends org.colos.ejs.library.LauncherApplet {

  static {
    org.opensourcephysics.display.OSPRuntime.loadTranslatorTool = false;
    org.opensourcephysics.display.OSPRuntime.loadDataTool = false;
    org.opensourcephysics.display.OSPRuntime.loadExportTool = false;
  }

  public void init () {
    super.init();
    org.opensourcephysics.tools.ResourceLoader.addAppletSearchPath("/users/sgeducation/lookang/");
    org.opensourcephysics.tools.ResourceLoader.addSearchPath(getCodeBase()+"users/sgeducation/lookang/"); // This is for relative files
    org.opensourcephysics.tools.ResourceLoader.addSearchPath("users/sgeducation/lookang/"); // This is for relative files, too
    //org.colos.ejs.library.Simulation.setPathToLibrary(getCodeBase()); // This is for classes (such as EjsMatlab) which needs to know where the library is
    reference_circle_v2wee._addHtmlPageInfo("Reference Circle","_default_","Reference Circle","./reference_circle_v2wee_Intro_1.html");
    reference_circle_v2wee._addHtmlPageInfo("Activities","_default_","Activities","./reference_circle_v2wee_Intro_2.html");
    if (getParentFrame()!=null) {
      _model = new reference_circle_v2wee ("MainWindow",getParentFrame(),getCodeBase(),this,(String[])null,true);
      _simulation = _model._getSimulation();
      _view = _model._getView();
    }
    else {
      _model = new reference_circle_v2wee (null,null,getCodeBase(),this,(String[])null,true);
      _simulation = _model._getSimulation();
      _view = _model._getView();
    }
    _simulation.initMoodle();
  }
  public void _reset() { ((reference_circle_v2wee)_model)._reset(); }
  public void _initialize() { ((reference_circle_v2wee)_model)._initialize(); }
  public void stop() { _model.getSimulation().onExit(); }
} // End of class reference_circle_v2weeApplet

