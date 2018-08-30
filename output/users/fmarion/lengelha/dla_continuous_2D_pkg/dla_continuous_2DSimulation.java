/*
 * Class : dla_continuous_2DSimulation.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package users.fmarion.lengelha.dla_continuous_2D_pkg;

import org.colos.ejs.library._EjsConstants;

// Imports suggested by Model Elements:
// End of imports from Model Elements

class dla_continuous_2DSimulation extends org.colos.ejs.library.Simulation { 

  private dla_continuous_2DView mMainView;

  public dla_continuous_2DSimulation (dla_continuous_2D _model, String _replaceName, java.awt.Frame _replaceOwnerFrame, java.net.URL _codebase, boolean _allowAutoplay) {
    videoUtil = new org.colos.ejs.library.utils.VideoUtil();
    try { setUnderEjs("true".equals(System.getProperty("osp_ejs"))); }
    catch (Exception exc) { setUnderEjs(false); } // in case of applet security
    setCodebase (_codebase);
    setModel (_model);
    _model._simulation = this;
    mMainView = _model._view = new dla_continuous_2DView(this,_replaceName, _replaceOwnerFrame);
    setView (_model._view);
    if (_model._isApplet()) _model._getApplet().captureWindow (_model,"drawingFrame");
    setFPS(20);
    setStepsPerDisplay(_model._getPreferredStepsPerDisplay()); 
    if (_allowAutoplay) { setAutoplay(false); reset(); }
    else { reset(); setAutoplay(false); }
    addDescriptionPage("Introduction",693,326,true);
    addDescriptionPage("Exercises",693,326,true);
    recreateDescriptionPanel();
    if (_model._getApplet()!=null && _model._getApplet().getParameter("locale")!=null) {
      setLocaleItem(org.colos.ejs.library.utils.LocaleItem.getLocaleItem(_model._getApplet().getParameter("locale")),false);
    }
    else setLocaleItem(getLocaleItem(),false); // false so that not to reset the model twice at start-up
  }

  public void step() {
    setStepsPerDisplay(model._getPreferredStepsPerDisplay());
    super.step();
  }

  public java.util.List<String> getWindowsList() {
    java.util.List<String> windowList = new java.util.ArrayList<String>();
    windowList.add("drawingFrame");
    return windowList;
  }

  public String getMainWindow() {
    return "drawingFrame";
  }

  protected void setViewLocale() { // Overwrite its parent's dummy method with real actions 
    mMainView.getConfigurableElement("drawingFrame")
      .setProperty("title","Diffusion Limited Aggregation")
      .setProperty("size","894,707");
    mMainView.getConfigurableElement("plottingPanel");
    mMainView.getConfigurableElement("polygon");
    mMainView.getConfigurableElement("activeParticle");
    mMainView.getConfigurableElement("stuckParticles");
    mMainView.getConfigurableElement("bottomPanel");
    mMainView.getConfigurableElement("nPanel");
    mMainView.getConfigurableElement("aFieldLabel")
      .setProperty("text"," Number of particles in cluster: ");
    mMainView.getConfigurableElement("aField")
      .setProperty("format","#");
    mMainView.getConfigurableElement("displayCheckboxPanel");
    mMainView.getConfigurableElement("displayCheckBox")
      .setProperty("text"," Display cluster? ");
    mMainView.getConfigurableElement("adjustPanel");
    mMainView.getConfigurableElement("adjustCheckBox")
      .setProperty("text"," Adjust step size? ");
    mMainView.getConfigurableElement("spdPanel");
    mMainView.getConfigurableElement("spdLabel")
      .setProperty("text"," Speed: ");
    mMainView.getConfigurableElement("slider");
    mMainView.getConfigurableElement("buttonsPanel");
    mMainView.getConfigurableElement("playPauseButton")
      .setProperty("textOn","Play")
      .setProperty("imageOn","/org/opensourcephysics/resources/controls/images/play.gif")
      .setProperty("textOff","Pause")
      .setProperty("imageOff","/org/opensourcephysics/resources/controls/images/pause.gif");
    mMainView.getConfigurableElement("resetButton")
      .setProperty("text","Reset")
      .setProperty("image","/org/opensourcephysics/resources/controls/images/reset.gif");
    mMainView.getConfigurableElement("button")
      .setProperty("text","Step")
      .setProperty("image","/org/opensourcephysics/resources/controls/images/stepforward.gif");
    super.setViewLocale();
  }

  public org.colos.ejs.library.LauncherApplet initMoodle () {
    org.colos.ejs.library.LauncherApplet applet = super.initMoodle();
    if (applet!=null && applet.getParameter("moodle_upload_file")!=null &&
        applet.getParameter("ejsapp_id")!=null  && applet.getParameter("user_id")!=null &&
        applet.getParameter("context_id")!=null && applet.getParameter("language")!=null &&
        applet.getParameter("username")!=null)
        moodle = new org.colos.ejs.library.MoodleConnection (applet,this);
    return applet;
  }

} // End of class dla_continuous_2DSimulation

