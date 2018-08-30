/*
 * Class : gaussianApplet.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package users.br.ahmed.gaussian_pkg;

import org.colos.ejs.library._EjsConstants;

// Imports suggested by Model Elements:
// End of imports from Model Elements

public class gaussianApplet extends org.colos.ejs.library.LauncherApplet {

  static {
    org.opensourcephysics.display.OSPRuntime.loadTranslatorTool = false;
    org.opensourcephysics.display.OSPRuntime.loadExportTool = false;
  }

  public void init () {
    super.init();
    org.opensourcephysics.tools.ResourceLoader.addAppletSearchPath("/users/br/ahmed/");
    org.opensourcephysics.tools.ResourceLoader.addSearchPath(getCodeBase()+"users/br/ahmed/"); // This is for relative files
    org.opensourcephysics.tools.ResourceLoader.addSearchPath("users/br/ahmed/"); // This is for relative files, too
    //org.colos.ejs.library.Simulation.setPathToLibrary(getCodeBase()); // This is for classes (such as EjsMatlab) which needs to know where the library is
    gaussian._addHtmlPageInfo("Intro Page","_default_","Intro Page","./gaussian_Intro_1.html");
    if (getParentFrame()!=null) {
      _model = new gaussian ("Frame",getParentFrame(),getCodeBase(),this,(String[])null,true);
      _simulation = _model._getSimulation();
      _view = _model._getView();
    }
    else {
      _model = new gaussian (null,null,getCodeBase(),this,(String[])null,true);
      _simulation = _model._getSimulation();
      _view = _model._getView();
    }
    _simulation.initMoodle();
  }
  public void _reset() { ((gaussian)_model)._reset(); }
  public void _initialize() { ((gaussian)_model)._initialize(); }
  public void stop() { _model.getSimulation().onExit(); }
} // End of class gaussianApplet

