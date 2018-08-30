/*
 * Class : debugView.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package kahhean.debug_pkg;

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

class debugView extends org.colos.ejs.library.control.EjsControl implements org.colos.ejs.library.View {
  private debugSimulation _simulation=null;
  private debug _model=null;

  // Public variables for wrapped view elements:
  public java.awt.Component drawingFrame;
  public org.opensourcephysics.drawing2d.DrawingPanel2D drawingPanel;
  public org.opensourcephysics.drawing2d.ElementShape origin;
  public org.opensourcephysics.drawing2d.ElementShape circle;
  public javax.swing.JPanel buttonsPanel;
  public javax.swing.JLabel aFieldLabel;
  public javax.swing.JTextField aField;

  // private variables to block changes in the view variables:
  private boolean __y_canBeChanged__ = true; // Variables.L:1
  private boolean __x_canBeChanged__ = true; // Variables.L:2
  private boolean __radius_canBeChanged__ = true; // Variables.L:3
  private boolean __value_canBeChanged__ = true; // Variables.L:4

// ---------- Class constructor -------------------

  public debugView (debugSimulation _sim, String _replaceName, java.awt.Frame _replaceOwnerFrame) {
    super(_sim,_replaceName,_replaceOwnerFrame);
    _simulation = _sim;
    _model = (debug) _sim.getModel();
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
    addListener("y"); // Variables.L:1
    addListener("x"); // Variables.L:2
    addListener("radius"); // Variables.L:3
    addListener("value"); // Variables.L:4
  }

// ---------- Implementation of View -------------------

  public void read() {
    // Ejs requires no read(). Actually, having it might cause problems!
  }

  @SuppressWarnings("unchecked")
  public void read(String _variable) {
    if ("y".equals(_variable)) {
      _model.y = getDouble("y"); // Variables.L:1
      __y_canBeChanged__ = true;
    }
    if ("x".equals(_variable)) {
      _model.x = getDouble("x"); // Variables.L:2
      __x_canBeChanged__ = true;
    }
    if ("radius".equals(_variable)) {
      _model.radius = getDouble("radius"); // Variables.L:3
      __radius_canBeChanged__ = true;
    }
    if ("value".equals(_variable)) {
      _model.value = getDouble("value"); // Variables.L:4
      __value_canBeChanged__ = true;
    }
  }

  public void propagateValues () {
    setValue ("_isPlaying",_simulation.isPlaying());
    setValue ("_isPaused", _simulation.isPaused());
    if(__y_canBeChanged__) setValue("y",_model.y); // Variables.L:1
    if(__x_canBeChanged__) setValue("x",_model.x); // Variables.L:2
    if(__radius_canBeChanged__) setValue("radius",_model.radius); // Variables.L:3
    if(__value_canBeChanged__) setValue("value",_model.value); // Variables.L:4
  }

  @SuppressWarnings("unchecked")
  public void blockVariable(String _variable) {
    if ("y".equals(_variable)) __y_canBeChanged__ = false; // Variables.L:1
    if ("x".equals(_variable)) __x_canBeChanged__ = false; // Variables.L:2
    if ("radius".equals(_variable)) __radius_canBeChanged__ = false; // Variables.L:3
    if ("value".equals(_variable)) __value_canBeChanged__ = false; // Variables.L:4
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
      .setProperty("title","Frame")
      .setProperty("layout","border")
      .setProperty("visible","true")
      .setProperty("location","0,412")
      .setProperty("size","500,500")
      .getObject();
    drawingPanel = (org.opensourcephysics.drawing2d.DrawingPanel2D)
      addElement(new org.colos.ejs.library.control.swing.ControlDrawingPanel(),"drawingPanel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","center")
      .setProperty("parent","drawingFrame")
      .setProperty("autoscaleX","false")
      .setProperty("autoscaleY","false")
      .setProperty("minimumX","-10")
      .setProperty("maximumX","10")
      .setProperty("minimumY","-10")
      .setProperty("maximumY","10")
      .setProperty("square","true")
      .getObject();
    origin = (org.opensourcephysics.drawing2d.ElementShape)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlShape2D(),"origin")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","drawingPanel")
      .setProperty("x","0")
      .setProperty("y","0")
      .setProperty("sizeX","1")
      .setProperty("sizeY","1")
      .getObject();
    circle = (org.opensourcephysics.drawing2d.ElementShape)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlShape2D(),"circle")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","drawingPanel")
      .setProperty("x","x")
      .setProperty("y","y")
      .setProperty("sizeX","%_model._method_for_circle_sizeX()%" )
      .setProperty("sizeY","%_model._method_for_circle_sizeY()%" )
      .setProperty("style","ELLIPSE")
      .setProperty("lineWidth","3")
      .setProperty("drawingFill","false")
      .getObject();
    buttonsPanel = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"buttonsPanel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","south")
      .setProperty("parent","drawingFrame")
      .setProperty("layout","BORDER:0,0")
      .setProperty("borderType","LOWERED_ETCHED")
      .getObject();
    aFieldLabel = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"aFieldLabel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","north")
      .setProperty("parent","buttonsPanel")
      .setProperty("text"," value=")
      .getObject();
    aField = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlParsedNumberField(),"aField")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","center")
      .setProperty("parent","buttonsPanel")
      .setProperty("variable","value")
      .setProperty("editable","true")
      .setProperty("action","_model._method_for_aField_action()" )
      .setProperty("size","500,50")
      .getObject();
  }

// ---------- Resetting the interface  -------------------

  public void reset() {
    getElement("drawingFrame")
      .setProperty("title","Frame")
      .setProperty("visible","true");
    getElement("drawingPanel")
      .setProperty("autoscaleX","false")
      .setProperty("autoscaleY","false")
      .setProperty("minimumX","-10")
      .setProperty("maximumX","10")
      .setProperty("minimumY","-10")
      .setProperty("maximumY","10")
      .setProperty("square","true");
    getElement("origin")
      .setProperty("x","0")
      .setProperty("y","0")
      .setProperty("sizeX","1")
      .setProperty("sizeY","1");
    getElement("circle")
      .setProperty("style","ELLIPSE")
      .setProperty("lineWidth","3")
      .setProperty("drawingFill","false");
    getElement("buttonsPanel")
      .setProperty("borderType","LOWERED_ETCHED");
    getElement("aFieldLabel")
      .setProperty("text"," value=");
    getElement("aField")
      .setProperty("editable","true")
      .setProperty("size","500,50");
    __y_canBeChanged__ = true; // Variables.L:1
    __x_canBeChanged__ = true; // Variables.L:2
    __radius_canBeChanged__ = true; // Variables.L:3
    __value_canBeChanged__ = true; // Variables.L:4
    super.reset();
  }

} // End of class debugView

