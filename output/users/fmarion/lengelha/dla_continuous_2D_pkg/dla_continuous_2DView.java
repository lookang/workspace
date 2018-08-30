/*
 * Class : dla_continuous_2DView.java
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

import org.colos.ejs.library.View;

class dla_continuous_2DView extends org.colos.ejs.library.control.EjsControl implements org.colos.ejs.library.View {
  private dla_continuous_2DSimulation _simulation=null;
  private dla_continuous_2D _model=null;

  // Public variables for wrapped view elements:
  public java.awt.Component drawingFrame;
  public org.opensourcephysics.drawing2d.PlottingPanel2D plottingPanel;
  public org.opensourcephysics.drawing2d.ElementPolygon polygon;
  public org.opensourcephysics.drawing2d.ElementShape activeParticle;
  public org.opensourcephysics.drawing2d.Set stuckParticles;
  public javax.swing.JPanel bottomPanel;
  public javax.swing.JPanel nPanel;
  public javax.swing.JLabel aFieldLabel;
  public javax.swing.JTextField aField;
  public javax.swing.JPanel displayCheckboxPanel;
  public javax.swing.JCheckBox displayCheckBox;
  public javax.swing.JPanel adjustPanel;
  public javax.swing.JCheckBox adjustCheckBox;
  public javax.swing.JPanel spdPanel;
  public javax.swing.JLabel spdLabel;
  public org.colos.ejs.library.control.swing.JSliderDouble slider;
  public javax.swing.JPanel buttonsPanel;
  public javax.swing.JButton playPauseButton;
  public javax.swing.JButton resetButton;
  public javax.swing.JButton button;

  // private variables to block changes in the view variables:
  private boolean __n_canBeChanged__ = true; // Variables.All Variables:1
  private boolean __colorArray_canBeChanged__ = true; // Variables.All Variables:2
  private boolean __walkerPos_canBeChanged__ = true; // Variables.All Variables:3
  private boolean __edge_canBeChanged__ = true; // Variables.All Variables:4
  private boolean __stuckPos_canBeChanged__ = true; // Variables.All Variables:5
  private boolean __diameter_canBeChanged__ = true; // Variables.All Variables:6
  private boolean __diamSq_canBeChanged__ = true; // Variables.All Variables:7
  private boolean __spd_canBeChanged__ = true; // Variables.All Variables:8
  private boolean __adjustStepSize_canBeChanged__ = true; // Variables.All Variables:9
  private boolean __minStepSize_canBeChanged__ = true; // Variables.All Variables:10
  private boolean __stepSize_canBeChanged__ = true; // Variables.All Variables:11
  private boolean __maxRad_canBeChanged__ = true; // Variables.All Variables:12
  private boolean __display_canBeChanged__ = true; // Variables.All Variables:13

// ---------- Class constructor -------------------

  public dla_continuous_2DView (dla_continuous_2DSimulation _sim, String _replaceName, java.awt.Frame _replaceOwnerFrame) {
    super(_sim,_replaceName,_replaceOwnerFrame);
    _simulation = _sim;
    _model = (dla_continuous_2D) _sim.getModel();
    _model._view = this;
    addTarget("_simulation",_simulation);
    addTarget("_model",_model);
    _model._resetModel();
    initialize();
    setUpdateSimulation(false);
    // The following is used by the JNLP file for the simulation to help find resources
    try { setUserCodebase(new java.net.URL(System.getProperty("jnlp.codebase"))); }
    catch (Exception exc) { } // Do nothing and keep quiet if it fails
    update();
    if (javax.swing.SwingUtilities.isEventDispatchThread()) createControl();
    else try {
      javax.swing.SwingUtilities.invokeAndWait(new Runnable() {
        public void run () { 
          createControl();
        }
      });
    } catch (java.lang.reflect.InvocationTargetException it_exc) { it_exc.printStackTrace(); 
    } catch (InterruptedException i_exc) { i_exc.printStackTrace(); };
    addElementsMenuEntries();
    update();
    setUpdateSimulation(true);
    addListener("n"); // Variables.All Variables:1
    addListener("colorArray"); // Variables.All Variables:2
    addListener("walkerPos"); // Variables.All Variables:3
    addListener("edge"); // Variables.All Variables:4
    addListener("stuckPos"); // Variables.All Variables:5
    addListener("diameter"); // Variables.All Variables:6
    addListener("diamSq"); // Variables.All Variables:7
    addListener("spd"); // Variables.All Variables:8
    addListener("adjustStepSize"); // Variables.All Variables:9
    addListener("minStepSize"); // Variables.All Variables:10
    addListener("stepSize"); // Variables.All Variables:11
    addListener("maxRad"); // Variables.All Variables:12
    addListener("display"); // Variables.All Variables:13
  }

// ---------- Implementation of View -------------------

  public void read() {
    // Ejs requires no read(). Actually, having it might cause problems!
  }

  @SuppressWarnings("unchecked")
  public void read(String _variable) {
    if ("n".equals(_variable)) {
      _model.n = getInt("n"); // Variables.All Variables:1
      __n_canBeChanged__ = true;
    }
    if ("colorArray".equals(_variable)) {
      Color[] _data = (Color[]) getValue("colorArray").getObject();
      int _n0 = _data.length;
      if (_n0>_model.colorArray.length) _n0 = _model.colorArray.length;
      for (int _i0=0; _i0<_n0; _i0++) {
        _model.colorArray[_i0] = _data[_i0];
      }
      __colorArray_canBeChanged__ = true;
    }
    if ("walkerPos".equals(_variable)) {
      double[] _data = (double[]) getValue("walkerPos").getObject();
      int _n0 = _data.length;
      if (_n0>_model.walkerPos.length) _n0 = _model.walkerPos.length;
      for (int _i0=0; _i0<_n0; _i0++) {
        _model.walkerPos[_i0] = _data[_i0];
      }
      __walkerPos_canBeChanged__ = true;
    }
    if ("edge".equals(_variable)) {
      _model.edge = getDouble("edge"); // Variables.All Variables:4
      __edge_canBeChanged__ = true;
    }
    if ("stuckPos".equals(_variable)) {
      double[][] _data = (double[][]) getValue("stuckPos").getObject();
      int _n0 = _data.length;
      if (_n0>_model.stuckPos.length) _n0 = _model.stuckPos.length;
      for (int _i0=0; _i0<_n0; _i0++) {
        int _n1 = _data[_i0].length;
        if (_n1>_model.stuckPos[_i0].length) _n1 = _model.stuckPos[_i0].length;
        for (int _i1=0; _i1<_n1; _i1++) {
          _model.stuckPos[_i0][_i1] = _data[_i0][_i1];
        }
      }
      __stuckPos_canBeChanged__ = true;
    }
    if ("diameter".equals(_variable)) {
      _model.diameter = getDouble("diameter"); // Variables.All Variables:6
      __diameter_canBeChanged__ = true;
    }
    if ("diamSq".equals(_variable)) {
      _model.diamSq = getDouble("diamSq"); // Variables.All Variables:7
      __diamSq_canBeChanged__ = true;
    }
    if ("spd".equals(_variable)) {
      _model.spd = getInt("spd"); // Variables.All Variables:8
      __spd_canBeChanged__ = true;
    }
    if ("adjustStepSize".equals(_variable)) {
      _model.adjustStepSize = getBoolean("adjustStepSize"); // Variables.All Variables:9
      __adjustStepSize_canBeChanged__ = true;
    }
    if ("minStepSize".equals(_variable)) {
      _model.minStepSize = getDouble("minStepSize"); // Variables.All Variables:10
      __minStepSize_canBeChanged__ = true;
    }
    if ("stepSize".equals(_variable)) {
      _model.stepSize = getDouble("stepSize"); // Variables.All Variables:11
      __stepSize_canBeChanged__ = true;
    }
    if ("maxRad".equals(_variable)) {
      _model.maxRad = getDouble("maxRad"); // Variables.All Variables:12
      __maxRad_canBeChanged__ = true;
    }
    if ("display".equals(_variable)) {
      _model.display = getBoolean("display"); // Variables.All Variables:13
      __display_canBeChanged__ = true;
    }
  }

  public void propagateValues () {
    setValue ("_isPlaying",_simulation.isPlaying());
    setValue ("_isPaused", _simulation.isPaused());
    if(__n_canBeChanged__) setValue("n",_model.n); // Variables.All Variables:1
    if(__colorArray_canBeChanged__) setValue("colorArray",_model.colorArray); // Variables.All Variables:2
    if(__walkerPos_canBeChanged__) setValue("walkerPos",_model.walkerPos); // Variables.All Variables:3
    if(__edge_canBeChanged__) setValue("edge",_model.edge); // Variables.All Variables:4
    if(__stuckPos_canBeChanged__) setValue("stuckPos",_model.stuckPos); // Variables.All Variables:5
    if(__diameter_canBeChanged__) setValue("diameter",_model.diameter); // Variables.All Variables:6
    if(__diamSq_canBeChanged__) setValue("diamSq",_model.diamSq); // Variables.All Variables:7
    if(__spd_canBeChanged__) setValue("spd",_model.spd); // Variables.All Variables:8
    if(__adjustStepSize_canBeChanged__) setValue("adjustStepSize",_model.adjustStepSize); // Variables.All Variables:9
    if(__minStepSize_canBeChanged__) setValue("minStepSize",_model.minStepSize); // Variables.All Variables:10
    if(__stepSize_canBeChanged__) setValue("stepSize",_model.stepSize); // Variables.All Variables:11
    if(__maxRad_canBeChanged__) setValue("maxRad",_model.maxRad); // Variables.All Variables:12
    if(__display_canBeChanged__) setValue("display",_model.display); // Variables.All Variables:13
  }

  @SuppressWarnings("unchecked")
  public void blockVariable(String _variable) {
    if ("n".equals(_variable)) __n_canBeChanged__ = false; // Variables.All Variables:1
    if ("colorArray".equals(_variable)) __colorArray_canBeChanged__ = false; // Variables.All Variables:2
    if ("walkerPos".equals(_variable)) __walkerPos_canBeChanged__ = false; // Variables.All Variables:3
    if ("edge".equals(_variable)) __edge_canBeChanged__ = false; // Variables.All Variables:4
    if ("stuckPos".equals(_variable)) __stuckPos_canBeChanged__ = false; // Variables.All Variables:5
    if ("diameter".equals(_variable)) __diameter_canBeChanged__ = false; // Variables.All Variables:6
    if ("diamSq".equals(_variable)) __diamSq_canBeChanged__ = false; // Variables.All Variables:7
    if ("spd".equals(_variable)) __spd_canBeChanged__ = false; // Variables.All Variables:8
    if ("adjustStepSize".equals(_variable)) __adjustStepSize_canBeChanged__ = false; // Variables.All Variables:9
    if ("minStepSize".equals(_variable)) __minStepSize_canBeChanged__ = false; // Variables.All Variables:10
    if ("stepSize".equals(_variable)) __stepSize_canBeChanged__ = false; // Variables.All Variables:11
    if ("maxRad".equals(_variable)) __maxRad_canBeChanged__ = false; // Variables.All Variables:12
    if ("display".equals(_variable)) __display_canBeChanged__ = false; // Variables.All Variables:13
  }

// ---------- Creation of the interface  -------------------

  private void createControl() {
    // This first frame is added due to what I consider a bug in Java (Paco)
    addElement( new org.colos.ejs.library.control.swing.ControlFrame(),"_TOP_SECRET_")
      .setProperty("waitForReset","true")
      .setProperty("visible","false")
      .setProperty("background","green")
      .setProperty("size","100,100");
    drawingFrame = (java.awt.Component)
      addElement(new org.colos.ejs.library.control.swing.ControlFrame(),"drawingFrame")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("exit","true")
      .setProperty("waitForReset","true")
      .setProperty("title","Diffusion Limited Aggregation")
      .setProperty("layout","border")
      .setProperty("visible","true")
      .setProperty("location","109,375")
      .setProperty("size","894,707")
      .getObject();
    plottingPanel = (org.opensourcephysics.drawing2d.PlottingPanel2D)
      addElement(new org.colos.ejs.library.control.swing.ControlPlottingPanel(),"plottingPanel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","center")
      .setProperty("parent","drawingFrame")
      .setProperty("autoscaleX","false")
      .setProperty("autoscaleY","false")
      .setProperty("minimumX","%_model._method_for_plottingPanel_minimumX()%" )
      .setProperty("maximumX","edge")
      .setProperty("minimumY","%_model._method_for_plottingPanel_minimumY()%" )
      .setProperty("maximumY","edge")
      .setProperty("square","true")
      .setProperty("showAxes","false")
      .setProperty("axesType","NONE")
      .setProperty("majorTicksX","false")
      .setProperty("majorTicksY","false")
      .setProperty("background","WHITE")
      .getObject();
    polygon = (org.opensourcephysics.drawing2d.ElementPolygon)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlPolygon2D(),"polygon")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","plottingPanel")
      .setProperty("data","%_model._method_for_polygon_data()%" )
      .setProperty("visible","false")
      .setProperty("lineColor","RED")
      .setProperty("fillColor","0,0,0,0")
      .setProperty("lineWidth","2")
      .getObject();
    activeParticle = (org.opensourcephysics.drawing2d.ElementShape)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlShape2D(),"activeParticle")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","plottingPanel")
      .setProperty("position","walkerPos")
      .setProperty("sizeX","diameter")
      .setProperty("sizeY","diameter")
      .setProperty("visible","display")
      .setProperty("fillColor","black")
      .getObject();
    stuckParticles = (org.opensourcephysics.drawing2d.Set)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlShapeSet2D(),"stuckParticles")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","plottingPanel")
      .setProperty("numberOfElements","n")
      .setProperty("position","stuckPos")
      .setProperty("sizeX","diameter")
      .setProperty("sizeY","diameter")
      .setProperty("visible","display")
      .setProperty("lineColor","colorArray")
      .setProperty("fillColor","colorArray")
      .getObject();
    bottomPanel = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"bottomPanel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","south")
      .setProperty("parent","drawingFrame")
      .setProperty("layout","HBOX")
      .setProperty("borderType","ROUNDED_LINE")
      .getObject();
    nPanel = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"nPanel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","bottomPanel")
      .setProperty("layout","HBOX")
      .setProperty("borderType","RAISED_BEVEL")
      .getObject();
    aFieldLabel = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"aFieldLabel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","center")
      .setProperty("parent","nPanel")
      .setProperty("text"," Number of particles in cluster: ")
      .getObject();
    aField = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlParsedNumberField(),"aField")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","north")
      .setProperty("parent","nPanel")
      .setProperty("variable","n")
      .setProperty("format","#")
      .setProperty("editable","false")
      .setProperty("columns","6")
      .getObject();
    displayCheckboxPanel = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"displayCheckboxPanel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","bottomPanel")
      .setProperty("layout","HBOX")
      .setProperty("borderType","RAISED_BEVEL")
      .getObject();
    displayCheckBox = (javax.swing.JCheckBox)
      addElement(new org.colos.ejs.library.control.swing.ControlCheckBox(),"displayCheckBox")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","center")
      .setProperty("parent","displayCheckboxPanel")
      .setProperty("variable","display")
      .setProperty("text"," Display cluster? ")
      .setProperty("actionon","_model._method_for_displayCheckBox_actionon()" )
      .getObject();
    adjustPanel = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"adjustPanel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","bottomPanel")
      .setProperty("layout","HBOX")
      .setProperty("borderType","RAISED_BEVEL")
      .getObject();
    adjustCheckBox = (javax.swing.JCheckBox)
      addElement(new org.colos.ejs.library.control.swing.ControlCheckBox(),"adjustCheckBox")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","center")
      .setProperty("parent","adjustPanel")
      .setProperty("variable","adjustStepSize")
      .setProperty("text"," Adjust step size? ")
      .setProperty("actionoff","_model._method_for_adjustCheckBox_actionoff()" )
      .getObject();
    spdPanel = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"spdPanel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","bottomPanel")
      .setProperty("layout","HBOX")
      .setProperty("borderType","RAISED_BEVEL")
      .getObject();
    spdLabel = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"spdLabel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","spdPanel")
      .setProperty("text"," Speed: ")
      .getObject();
    slider = (org.colos.ejs.library.control.swing.JSliderDouble)
      addElement(new org.colos.ejs.library.control.swing.ControlSlider(),"slider")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","east")
      .setProperty("parent","spdPanel")
      .setProperty("variable","spd")
      .setProperty("minimum","1")
      .setProperty("maximum","10000")
      .setProperty("orientation","HORIZONTAL")
      .getObject();
    buttonsPanel = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"buttonsPanel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","south")
      .setProperty("parent","bottomPanel")
      .setProperty("layout","HBOX")
      .setProperty("borderType","RAISED_BEVEL")
      .getObject();
    playPauseButton = (javax.swing.JButton)
      addElement(new org.colos.ejs.library.control.swing.ControlTwoStateButton(),"playPauseButton")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","buttonsPanel")
      .setProperty("variable","_isPaused")
      .setProperty("textOn","Play")
      .setProperty("imageOn","/org/opensourcephysics/resources/controls/images/play.gif")
      .setProperty("actionOn","_model._method_for_playPauseButton_actionOn()" )
      .setProperty("textOff","Pause")
      .setProperty("imageOff","/org/opensourcephysics/resources/controls/images/pause.gif")
      .setProperty("actionOff","_model._method_for_playPauseButton_actionOff()" )
      .getObject();
    resetButton = (javax.swing.JButton)
      addElement(new org.colos.ejs.library.control.swing.ControlButton(),"resetButton")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","buttonsPanel")
      .setProperty("text","Reset")
      .setProperty("image","/org/opensourcephysics/resources/controls/images/reset.gif")
      .setProperty("action","_model._method_for_resetButton_action()" )
      .getObject();
    button = (javax.swing.JButton)
      addElement(new org.colos.ejs.library.control.swing.ControlButton(),"button")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","buttonsPanel")
      .setProperty("text","Step")
      .setProperty("image","/org/opensourcephysics/resources/controls/images/stepforward.gif")
      .setProperty("action","_model._method_for_button_action()" )
      .getObject();
  }

// ---------- Resetting the interface  -------------------

  public void reset() {
    getElement("drawingFrame")
      .setProperty("title","Diffusion Limited Aggregation")
      .setProperty("visible","true");
    getElement("plottingPanel")
      .setProperty("autoscaleX","false")
      .setProperty("autoscaleY","false")
      .setProperty("square","true")
      .setProperty("showAxes","false")
      .setProperty("axesType","NONE")
      .setProperty("majorTicksX","false")
      .setProperty("majorTicksY","false")
      .setProperty("background","WHITE");
    getElement("polygon")
      .setProperty("visible","false")
      .setProperty("lineColor","RED")
      .setProperty("fillColor","0,0,0,0")
      .setProperty("lineWidth","2");
    getElement("activeParticle")
      .setProperty("fillColor","black");
    getElement("stuckParticles");
    getElement("bottomPanel")
      .setProperty("borderType","ROUNDED_LINE");
    getElement("nPanel")
      .setProperty("borderType","RAISED_BEVEL");
    getElement("aFieldLabel")
      .setProperty("text"," Number of particles in cluster: ");
    getElement("aField")
      .setProperty("format","#")
      .setProperty("editable","false")
      .setProperty("columns","6");
    getElement("displayCheckboxPanel")
      .setProperty("borderType","RAISED_BEVEL");
    getElement("displayCheckBox")
      .setProperty("text"," Display cluster? ");
    getElement("adjustPanel")
      .setProperty("borderType","RAISED_BEVEL");
    getElement("adjustCheckBox")
      .setProperty("text"," Adjust step size? ");
    getElement("spdPanel")
      .setProperty("borderType","RAISED_BEVEL");
    getElement("spdLabel")
      .setProperty("text"," Speed: ");
    getElement("slider")
      .setProperty("minimum","1")
      .setProperty("maximum","10000")
      .setProperty("orientation","HORIZONTAL");
    getElement("buttonsPanel")
      .setProperty("borderType","RAISED_BEVEL");
    getElement("playPauseButton")
      .setProperty("textOn","Play")
      .setProperty("imageOn","/org/opensourcephysics/resources/controls/images/play.gif")
      .setProperty("textOff","Pause")
      .setProperty("imageOff","/org/opensourcephysics/resources/controls/images/pause.gif");
    getElement("resetButton")
      .setProperty("text","Reset")
      .setProperty("image","/org/opensourcephysics/resources/controls/images/reset.gif");
    getElement("button")
      .setProperty("text","Step")
      .setProperty("image","/org/opensourcephysics/resources/controls/images/stepforward.gif");
    __n_canBeChanged__ = true; // Variables.All Variables:1
    __colorArray_canBeChanged__ = true; // Variables.All Variables:2
    __walkerPos_canBeChanged__ = true; // Variables.All Variables:3
    __edge_canBeChanged__ = true; // Variables.All Variables:4
    __stuckPos_canBeChanged__ = true; // Variables.All Variables:5
    __diameter_canBeChanged__ = true; // Variables.All Variables:6
    __diamSq_canBeChanged__ = true; // Variables.All Variables:7
    __spd_canBeChanged__ = true; // Variables.All Variables:8
    __adjustStepSize_canBeChanged__ = true; // Variables.All Variables:9
    __minStepSize_canBeChanged__ = true; // Variables.All Variables:10
    __stepSize_canBeChanged__ = true; // Variables.All Variables:11
    __maxRad_canBeChanged__ = true; // Variables.All Variables:12
    __display_canBeChanged__ = true; // Variables.All Variables:13
    super.reset();
  }

} // End of class dla_continuous_2DView

