/*
 * Class : debugApplet.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package kahhean.debug_pkg;

import org.colos.ejs.library._EjsConstants;

// Imports suggested by Model Elements:
// End of imports from Model Elements

public class debugApplet extends org.colos.ejs.library.LauncherApplet {

  static {
    org.opensourcephysics.display.OSPRuntime.loadTranslatorTool = false;
    org.opensourcephysics.display.OSPRuntime.loadVideoTool = false;
    org.opensourcephysics.display.OSPRuntime.loadDataTool = false;
    org.opensourcephysics.display.OSPRuntime.loadExportTool = false;
  }

  public void init () {
    super.init();
    org.opensourcephysics.tools.ResourceLoader.addAppletSearchPath("/kahhean/");
    org.opensourcephysics.tools.ResourceLoader.addSearchPath(getCodeBase()+"kahhean/"); // This is for relative files
    org.opensourcephysics.tools.ResourceLoader.addSearchPath("kahhean/"); // This is for relative files, too
    //org.colos.ejs.library.Simulation.setPathToLibrary(getCodeBase()); // This is for classes (such as EjsMatlab) which needs to know where the library is
    if (getParentFrame()!=null) {
      _model = new debug ("drawingFrame",getParentFrame(),getCodeBase(),this,(String[])null,true);
      _simulation = _model._getSimulation();
      _view = _model._getView();
    }
    else {
      _model = new debug (null,null,getCodeBase(),this,(String[])null,true);
      _simulation = _model._getSimulation();
      _view = _model._getView();
    }
    _simulation.initMoodle();
  }
  public void _reset() { ((debug)_model)._reset(); }
  public void _initialize() { ((debug)_model)._initialize(); }
  public void stop() { _model.getSimulation().onExit(); }
} // End of class debugApplet

