/*
 * Class : gaussianSimulation.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package users.br.ahmed.gaussian_pkg;

import org.colos.ejs.library._EjsConstants;

// Imports suggested by Model Elements:
// End of imports from Model Elements

class gaussianSimulation extends org.colos.ejs.library.Simulation { 

  private gaussianView mMainView;

  public gaussianSimulation (gaussian _model, String _replaceName, java.awt.Frame _replaceOwnerFrame, java.net.URL _codebase, boolean _allowAutoplay) {
    videoUtil = new org.colos.ejs.library.utils.VideoUtilClass();
    try { setUnderEjs("true".equals(System.getProperty("osp_ejs"))); }
    catch (Exception exc) { setUnderEjs(false); } // in case of applet security
    setCodebase (_codebase);
    setModel (_model);
    _model._simulation = this;
    mMainView = _model._view = new gaussianView(this,_replaceName, _replaceOwnerFrame);
    setView (_model._view);
    if (_model._isApplet()) _model._getApplet().captureWindow (_model,"Frame");
    setFPS(25);
    setStepsPerDisplay(_model._getPreferredStepsPerDisplay()); 
    if (_allowAutoplay) { setAutoplay(false); reset(); }
    else { reset(); setAutoplay(false); }
    addDescriptionPage("Intro Page",693,326,true);
    recreateDescriptionPanel();
    if (_model._getApplet()!=null && _model._getApplet().getParameter("locale")!=null) {
      setLocaleItem(org.colos.ejs.library.utils.LocaleItem.getLocaleItem(_model._getApplet().getParameter("locale")),false);
    }
    else setLocaleItem(getLocaleItem(),false); // false so that not to reset the model twice at start-up
  }

  public java.util.List<String> getWindowsList() {
    java.util.List<String> windowList = new java.util.ArrayList<String>();
    windowList.add("Frame");
    return windowList;
  }

  public String getMainWindow() {
    return "Frame";
  }

  protected void setViewLocale() { // Overwrite its parent's dummy method with real actions 
    mMainView.getConfigurableElement("Frame")
      .setProperty("title",translateString("View.Frame.title","Frame"))
      .setProperty("size",translateString("View.Frame.size","\"590,342\""));
    mMainView.getConfigurableElement("Panel");
    mMainView.getConfigurableElement("Panel1");
    mMainView.getConfigurableElement("reset")
      .setProperty("image",translateString("View.reset.image","\"data/reset.gif\""))
      .setProperty("size",translateString("View.reset.size","\"90,35\""));
    mMainView.getConfigurableElement("initialize")
      .setProperty("image",translateString("View.initialize.image","\"data/init.gif\""))
      .setProperty("size",translateString("View.initialize.size","\"90,35\""));
    mMainView.getConfigurableElement("twoStateButton")
      .setProperty("size",translateString("View.twoStateButton.size","\"90,30\""))
      .setProperty("imageOn",translateString("View.twoStateButton.imageOn","\"data/play.gif\""))
      .setProperty("imageOff",translateString("View.twoStateButton.imageOff","\"data/pause.gif\""));
    mMainView.getConfigurableElement("hundred");
    mMainView.getConfigurableElement("Panel3");
    mMainView.getConfigurableElement("DrawingPanel");
    mMainView.getConfigurableElement("ParticleSet");
    mMainView.getConfigurableElement("TextSet");
    mMainView.getConfigurableElement("Text");
    mMainView.getConfigurableElement("PlottingPanel");
    mMainView.getConfigurableElement("ParticleSet2");
    mMainView.getConfigurableElement("AnalyticCurve");
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

} // End of class gaussianSimulation

