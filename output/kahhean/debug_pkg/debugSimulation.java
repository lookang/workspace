/*
 * Class : debugSimulation.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package kahhean.debug_pkg;

import org.colos.ejs.library._EjsConstants;

// Imports suggested by Model Elements:
// End of imports from Model Elements

class debugSimulation extends org.colos.ejs.library.Simulation { 

  private debugView mMainView;

  public debugSimulation (debug _model, String _replaceName, java.awt.Frame _replaceOwnerFrame, java.net.URL _codebase, boolean _allowAutoplay) {
    videoUtil = new org.colos.ejs.library.utils.VideoUtil();
    try { setUnderEjs("true".equals(System.getProperty("osp_ejs"))); }
    catch (Exception exc) { setUnderEjs(false); } // in case of applet security
    setCodebase (_codebase);
    setModel (_model);
    _model._simulation = this;
    mMainView = _model._view = new debugView(this,_replaceName, _replaceOwnerFrame);
    setView (_model._view);
    if (_model._isApplet()) _model._getApplet().captureWindow (_model,"drawingFrame");
    setFPS(20);
    setStepsPerDisplay(_model._getPreferredStepsPerDisplay()); 
    if (_allowAutoplay) { setAutoplay(false); reset(); }
    else { reset(); setAutoplay(false); }
    recreateDescriptionPanel();
    if (_model._getApplet()!=null && _model._getApplet().getParameter("locale")!=null) {
      setLocaleItem(org.colos.ejs.library.utils.LocaleItem.getLocaleItem(_model._getApplet().getParameter("locale")),false);
    }
    else setLocaleItem(getLocaleItem(),false); // false so that not to reset the model twice at start-up
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
      .setProperty("title","Frame")
      .setProperty("size","500,500");
    mMainView.getConfigurableElement("drawingPanel");
    mMainView.getConfigurableElement("origin");
    mMainView.getConfigurableElement("circle");
    mMainView.getConfigurableElement("buttonsPanel");
    mMainView.getConfigurableElement("aFieldLabel")
      .setProperty("text"," value=");
    mMainView.getConfigurableElement("aField")
      .setProperty("size","500,50");
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

} // End of class debugSimulation

