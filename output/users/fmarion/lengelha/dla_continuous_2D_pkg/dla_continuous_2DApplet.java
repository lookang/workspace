/*
 * Class : dla_continuous_2DApplet.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package users.fmarion.lengelha.dla_continuous_2D_pkg;

import org.colos.ejs.library._EjsConstants;

// Imports suggested by Model Elements:
// End of imports from Model Elements

public class dla_continuous_2DApplet extends org.colos.ejs.library.LauncherApplet {

  static {
    org.opensourcephysics.display.OSPRuntime.loadTranslatorTool = false;
    org.opensourcephysics.display.OSPRuntime.loadVideoTool = false;
    org.opensourcephysics.display.OSPRuntime.loadDataTool = false;
    org.opensourcephysics.display.OSPRuntime.loadExportTool = false;
  }

  public void init () {
    super.init();
    org.opensourcephysics.tools.ResourceLoader.addAppletSearchPath("/users/fmarion/lengelha/");
    org.opensourcephysics.tools.ResourceLoader.addSearchPath(getCodeBase()+"users/fmarion/lengelha/"); // This is for relative files
    org.opensourcephysics.tools.ResourceLoader.addSearchPath("users/fmarion/lengelha/"); // This is for relative files, too
    //org.colos.ejs.library.Simulation.setPathToLibrary(getCodeBase()); // This is for classes (such as EjsMatlab) which needs to know where the library is
    dla_continuous_2D._addHtmlPageInfo("Introduction","_default_","Introduction","./dla_continuous_2D_Intro_1.html");
    dla_continuous_2D._addHtmlPageInfo("Exercises","_default_","Exercises","./dla_continuous_2D_Intro_2.html");
    if (getParentFrame()!=null) {
      _model = new dla_continuous_2D ("drawingFrame",getParentFrame(),getCodeBase(),this,(String[])null,true);
      _simulation = _model._getSimulation();
      _view = _model._getView();
    }
    else {
      _model = new dla_continuous_2D (null,null,getCodeBase(),this,(String[])null,true);
      _simulation = _model._getSimulation();
      _view = _model._getView();
    }
    _simulation.initMoodle();
  }
  public void _reset() { ((dla_continuous_2D)_model)._reset(); }
  public void _initialize() { ((dla_continuous_2D)_model)._initialize(); }
  public void stop() { _model.getSimulation().onExit(); }
} // End of class dla_continuous_2DApplet

