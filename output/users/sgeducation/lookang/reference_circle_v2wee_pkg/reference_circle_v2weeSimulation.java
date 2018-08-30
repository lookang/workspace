/*
 * Class : reference_circle_v2weeSimulation.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package users.sgeducation.lookang.reference_circle_v2wee_pkg;

import org.colos.ejs.library._EjsConstants;

// Imports suggested by Model Elements:
// End of imports from Model Elements

class reference_circle_v2weeSimulation extends org.colos.ejs.library.Simulation { 

  private reference_circle_v2weeView mMainView;

  public reference_circle_v2weeSimulation (reference_circle_v2wee _model, String _replaceName, java.awt.Frame _replaceOwnerFrame, java.net.URL _codebase, boolean _allowAutoplay) {
    videoUtil = new org.colos.ejs.library.utils.VideoUtilClass();
    try { setUnderEjs("true".equals(System.getProperty("osp_ejs"))); }
    catch (Exception exc) { setUnderEjs(false); } // in case of applet security
    setCodebase (_codebase);
    setModel (_model);
    _model._simulation = this;
    mMainView = _model._view = new reference_circle_v2weeView(this,_replaceName, _replaceOwnerFrame);
    setView (_model._view);
    if (_model._isApplet()) _model._getApplet().captureWindow (_model,"MainWindow");
    setFPS(25);
    setStepsPerDisplay(_model._getPreferredStepsPerDisplay()); 
    if (_allowAutoplay) { setAutoplay(false); reset(); }
    else { reset(); setAutoplay(false); }
    addDescriptionPage("Reference Circle",693,326,true);
    addDescriptionPage("Activities",693,326,true);
    recreateDescriptionPanel();
    if (_model._getApplet()!=null && _model._getApplet().getParameter("locale")!=null) {
      setLocaleItem(org.colos.ejs.library.utils.LocaleItem.getLocaleItem(_model._getApplet().getParameter("locale")),false);
    }
    else setLocaleItem(getLocaleItem(),false); // false so that not to reset the model twice at start-up
  }

  public java.util.List<String> getWindowsList() {
    java.util.List<String> windowList = new java.util.ArrayList<String>();
    windowList.add("MainWindow");
    windowList.add("helpBox");
    return windowList;
  }

  public String getMainWindow() {
    return "MainWindow";
  }

  protected void setViewLocale() { // Overwrite its parent's dummy method with real actions 
    mMainView.getConfigurableElement("MainWindow")
      .setProperty("title","The Connection between Simple Harmonic Motion and Circular Motion")
      .setProperty("size","708,540");
    mMainView.getConfigurableElement("centre");
    mMainView.getConfigurableElement("plottingPanel")
      .setProperty("title","Circular Motion")
      .setProperty("titleX","position x")
      .setProperty("titleY","position y");
    mMainView.getConfigurableElement("angle");
    mMainView.getConfigurableElement("text");
    mMainView.getConfigurableElement("shape");
    mMainView.getConfigurableElement("shape2");
    mMainView.getConfigurableElement("trail3");
    mMainView.getConfigurableElement("trail22");
    mMainView.getConfigurableElement("A1");
    mMainView.getConfigurableElement("A2");
    mMainView.getConfigurableElement("sum");
    mMainView.getConfigurableElement("shape222");
    mMainView.getConfigurableElement("trail2222");
    mMainView.getConfigurableElement("arrow2");
    mMainView.getConfigurableElement("bottom");
    mMainView.getConfigurableElement("bottom2");
    mMainView.getConfigurableElement("PositionGraphx2")
      .setProperty("title","Time (s)")
      .setProperty("titleX","Position x")
      .setProperty("titleY","Position (m)");
    mMainView.getConfigurableElement("Displacement3");
    mMainView.getConfigurableElement("Displacement22");
    mMainView.getConfigurableElement("Displacementsum2");
    mMainView.getConfigurableElement("spring323");
    mMainView.getConfigurableElement("shape33");
    mMainView.getConfigurableElement("spring33");
    mMainView.getConfigurableElement("spring3222");
    mMainView.getConfigurableElement("shape323");
    mMainView.getConfigurableElement("shape3222");
    mMainView.getConfigurableElement("panel");
    mMainView.getConfigurableElement("ButtonsPanel");
    mMainView.getConfigurableElement("A");
    mMainView.getConfigurableElement("panel635223");
    mMainView.getConfigurableElement("label935223")
      .setProperty("text"," A = ")
      .setProperty("tooltip","amplitude f object 1");
    mMainView.getConfigurableElement("mass35223")
      .setProperty("format","0.00")
      .setProperty("tooltip","amplitude f object 1");
    mMainView.getConfigurableElement("label1035223")
      .setProperty("text"," m ")
      .setProperty("tooltip","metre");
    mMainView.getConfigurableElement("amplitude")
      .setProperty("tooltip","amplitude of object 1");
    mMainView.getConfigurableElement("mass")
      .setProperty("format","m1 = 0.00 kg")
      .setProperty("tooltip","mass of object 1");
    mMainView.getConfigurableElement("k")
      .setProperty("format","k = 0.00 N/m#")
      .setProperty("tooltip","spring constant of object 1");
    mMainView.getConfigurableElement("phase3");
    mMainView.getConfigurableElement("panel63522");
    mMainView.getConfigurableElement("label93522")
      .setProperty("text"," $\\phi$1 = ")
      .setProperty("tooltip","phase angle of object 1");
    mMainView.getConfigurableElement("mass3522")
      .setProperty("format","000")
      .setProperty("tooltip","phase angle of object 1");
    mMainView.getConfigurableElement("label103522")
      .setProperty("text"," deg ")
      .setProperty("tooltip","degrees");
    mMainView.getConfigurableElement("panel3");
    mMainView.getConfigurableElement("rotation2")
      .setProperty("tooltip","rotate the other sense");
    mMainView.getConfigurableElement("phase")
      .setProperty("tooltip","phase angle of object 1");
    mMainView.getConfigurableElement("A3");
    mMainView.getConfigurableElement("panel6352232");
    mMainView.getConfigurableElement("label9352232")
      .setProperty("text"," A2 = ")
      .setProperty("tooltip","amplitude f object 1");
    mMainView.getConfigurableElement("mass352232")
      .setProperty("format","0.00")
      .setProperty("tooltip","amplitude f object 2");
    mMainView.getConfigurableElement("label10352232")
      .setProperty("text"," m ")
      .setProperty("tooltip","metre");
    mMainView.getConfigurableElement("amplitude2")
      .setProperty("tooltip","amplitude of object 2");
    mMainView.getConfigurableElement("mass2")
      .setProperty("format","m2 = 0.00 kg")
      .setProperty("tooltip","mass of object 1");
    mMainView.getConfigurableElement("k2")
      .setProperty("format","k = 0.00 N/m")
      .setProperty("tooltip","spring constant of object 2");
    mMainView.getConfigurableElement("phase32");
    mMainView.getConfigurableElement("panel635222");
    mMainView.getConfigurableElement("label935222")
      .setProperty("text"," $\\phi$2 = ")
      .setProperty("tooltip","phase angle of object 2");
    mMainView.getConfigurableElement("mass35222")
      .setProperty("format","000")
      .setProperty("tooltip","phase angle of object 2");
    mMainView.getConfigurableElement("label1035222")
      .setProperty("text"," deg ")
      .setProperty("tooltip","degrees");
    mMainView.getConfigurableElement("panel4");
    mMainView.getConfigurableElement("phase2")
      .setProperty("tooltip","phase angle of object 2");
    mMainView.getConfigurableElement("panel2");
    mMainView.getConfigurableElement("PlotMotion")
      .setProperty("tooltip","Show motion graphof y versus t");
    mMainView.getConfigurableElement("PlotMotion2")
      .setProperty("tooltip","Show motion graphof x versus t");
    mMainView.getConfigurableElement("showsum")
      .setProperty("tooltip","Show vector sum of object 1 and 2");
    mMainView.getConfigurableElement("showhint")
      .setProperty("tooltip","Show hint of phase lead of object 1 over object 2");
    mMainView.getConfigurableElement("panel22");
    mMainView.getConfigurableElement("label3")
      .setProperty("text"," $\\delta$$\\phi$ = ")
      .setProperty("tooltip","phase lead of object 1 over object 2 ");
    mMainView.getConfigurableElement("ampvalue")
      .setProperty("format","0.##");
    mMainView.getConfigurableElement("label32")
      .setProperty("text"," deg ")
      .setProperty("tooltip"," degree ");
    mMainView.getConfigurableElement("label4")
      .setProperty("text","  yes  ");
    mMainView.getConfigurableElement("label")
      .setProperty("text","  no  ");
    mMainView.getConfigurableElement("label2")
      .setProperty("text","  No, hint: $\\delta$$\\phi$ = $\\phi$1 - $\\phi$2$  ");
    mMainView.getConfigurableElement("bar")
      .setProperty("format","t = 0.00 s")
      .setProperty("tooltip","time in seconds");
    mMainView.getConfigurableElement("playpause")
      .setProperty("imageOn","/org/opensourcephysics/resources/controls/images/play.gif")
      .setProperty("imageOff","/org/opensourcephysics/resources/controls/images/pause.gif");
    mMainView.getConfigurableElement("stepforward")
      .setProperty("image","/org/opensourcephysics/resources/controls/images/stepforward.gif");
    mMainView.getConfigurableElement("Reset")
      .setProperty("image","/org/opensourcephysics/resources/controls/images/reset.gif");
    mMainView.getConfigurableElement("instructions")
      .setProperty("text","?");
    mMainView.getConfigurableElement("left");
    mMainView.getConfigurableElement("PositionGraphx")
      .setProperty("title","Position y")
      .setProperty("titleX","Time (s)")
      .setProperty("titleY","Position (m)");
    mMainView.getConfigurableElement("Displacement");
    mMainView.getConfigurableElement("Displacement2");
    mMainView.getConfigurableElement("Displacementsum");
    mMainView.getConfigurableElement("spring32");
    mMainView.getConfigurableElement("shape3");
    mMainView.getConfigurableElement("spring322");
    mMainView.getConfigurableElement("shape32");
    mMainView.getConfigurableElement("shape322");
    mMainView.getConfigurableElement("VelocityGraph")
      .setProperty("title","Velocity")
      .setProperty("titleX","Time (s)")
      .setProperty("titleY","v (m/s)");
    mMainView.getConfigurableElement("Velocity");
    mMainView.getConfigurableElement("Velocity2");
    mMainView.getConfigurableElement("AccelerationGraph")
      .setProperty("title","Acceleration")
      .setProperty("titleX","Time (s)")
      .setProperty("titleY","a in m/s^2");
    mMainView.getConfigurableElement("Acceleration");
    mMainView.getConfigurableElement("Acceleration2");
    mMainView.getConfigurableElement("helpBox")
      .setProperty("title","Help")
      .setProperty("size","764,308");
    mMainView.getConfigurableElement("line1");
    mMainView.getConfigurableElement("line2");
    mMainView.getConfigurableElement("line3");
    mMainView.getConfigurableElement("line3b");
    mMainView.getConfigurableElement("line5");
    mMainView.getConfigurableElement("line4");
    mMainView.getConfigurableElement("line6");
    mMainView.getConfigurableElement("line6b");
    mMainView.getConfigurableElement("line7");
    mMainView.getConfigurableElement("line8");
    mMainView.getConfigurableElement("line9");
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

} // End of class reference_circle_v2weeSimulation

