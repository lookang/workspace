/*
 * Class : reference_circle_v2weeView.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package users.sgeducation.lookang.reference_circle_v2wee_pkg;

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

class reference_circle_v2weeView extends org.colos.ejs.library.control.EjsControl implements org.colos.ejs.library.View {
  private reference_circle_v2weeSimulation _simulation=null;
  private reference_circle_v2wee _model=null;

  // Public variables for wrapped view elements:
  public java.awt.Component MainWindow;
  public javax.swing.JPanel centre;
  public org.opensourcephysics.drawing2d.PlottingPanel2D plottingPanel;
  public org.opensourcephysics.drawing2d.ElementPolygon angle;
  public org.opensourcephysics.drawing2d.ElementText text;
  public org.opensourcephysics.drawing2d.ElementShape shape;
  public org.opensourcephysics.drawing2d.ElementShape shape2;
  public org.opensourcephysics.drawing2d.ElementTrail trail3;
  public org.opensourcephysics.drawing2d.ElementTrail trail22;
  public org.opensourcephysics.drawing2d.ElementArrow A1;
  public org.opensourcephysics.drawing2d.ElementArrow A2;
  public org.opensourcephysics.drawing2d.Group sum;
  public org.opensourcephysics.drawing2d.ElementShape shape222;
  public org.opensourcephysics.drawing2d.ElementTrail trail2222;
  public org.opensourcephysics.drawing2d.ElementArrow arrow2;
  public javax.swing.JPanel bottom;
  public javax.swing.JPanel bottom2;
  public org.opensourcephysics.drawing2d.PlottingPanel2D PositionGraphx2;
  public org.opensourcephysics.displayejs.InteractiveTrace Displacement3;
  public org.opensourcephysics.displayejs.InteractiveTrace Displacement22;
  public org.opensourcephysics.displayejs.InteractiveTrace Displacementsum2;
  public org.opensourcephysics.drawing2d.ElementSpring spring323;
  public org.opensourcephysics.drawing2d.ElementShape shape33;
  public org.opensourcephysics.drawing2d.ElementSpring spring33;
  public org.opensourcephysics.drawing2d.ElementSpring spring3222;
  public org.opensourcephysics.drawing2d.ElementShape shape323;
  public org.opensourcephysics.drawing2d.ElementShape shape3222;
  public javax.swing.JPanel panel;
  public javax.swing.JPanel ButtonsPanel;
  public javax.swing.JPanel A;
  public javax.swing.JPanel panel635223;
  public javax.swing.JLabel label935223;
  public javax.swing.JTextField mass35223;
  public javax.swing.JLabel label1035223;
  public org.colos.ejs.library.control.swing.JSliderDouble amplitude;
  public org.colos.ejs.library.control.swing.JSliderDouble mass;
  public org.colos.ejs.library.control.swing.JSliderDouble k;
  public javax.swing.JPanel phase3;
  public javax.swing.JPanel panel63522;
  public javax.swing.JLabel label93522;
  public javax.swing.JTextField mass3522;
  public javax.swing.JLabel label103522;
  public javax.swing.JPanel panel3;
  public javax.swing.JCheckBox rotation2;
  public org.colos.ejs.library.control.swing.JSliderDouble phase;
  public javax.swing.JPanel A3;
  public javax.swing.JPanel panel6352232;
  public javax.swing.JLabel label9352232;
  public javax.swing.JTextField mass352232;
  public javax.swing.JLabel label10352232;
  public org.colos.ejs.library.control.swing.JSliderDouble amplitude2;
  public org.colos.ejs.library.control.swing.JSliderDouble mass2;
  public org.colos.ejs.library.control.swing.JSliderDouble k2;
  public javax.swing.JPanel phase32;
  public javax.swing.JPanel panel635222;
  public javax.swing.JLabel label935222;
  public javax.swing.JTextField mass35222;
  public javax.swing.JLabel label1035222;
  public javax.swing.JPanel panel4;
  public org.colos.ejs.library.control.swing.JSliderDouble phase2;
  public javax.swing.JPanel panel2;
  public javax.swing.JCheckBox PlotMotion;
  public javax.swing.JCheckBox PlotMotion2;
  public javax.swing.JCheckBox showsum;
  public javax.swing.JCheckBox showhint;
  public javax.swing.JPanel panel22;
  public javax.swing.JLabel label3;
  public javax.swing.JTextField ampvalue;
  public javax.swing.JLabel label32;
  public javax.swing.JLabel label4;
  public javax.swing.JLabel label;
  public javax.swing.JLabel label2;
  public org.colos.ejs.library.control.swing.JProgressBarDouble bar;
  public javax.swing.JButton playpause;
  public javax.swing.JButton stepforward;
  public javax.swing.JButton Reset;
  public javax.swing.JButton instructions;
  public javax.swing.JPanel left;
  public org.opensourcephysics.drawing2d.PlottingPanel2D PositionGraphx;
  public org.opensourcephysics.displayejs.InteractiveTrace Displacement;
  public org.opensourcephysics.displayejs.InteractiveTrace Displacement2;
  public org.opensourcephysics.displayejs.InteractiveTrace Displacementsum;
  public org.opensourcephysics.drawing2d.ElementSpring spring32;
  public org.opensourcephysics.drawing2d.ElementShape shape3;
  public org.opensourcephysics.drawing2d.ElementSpring spring322;
  public org.opensourcephysics.drawing2d.ElementShape shape32;
  public org.opensourcephysics.drawing2d.ElementShape shape322;
  public org.opensourcephysics.drawing2d.PlottingPanel2D VelocityGraph;
  public org.opensourcephysics.displayejs.InteractiveTrace Velocity;
  public org.opensourcephysics.displayejs.InteractiveTrace Velocity2;
  public org.opensourcephysics.drawing2d.PlottingPanel2D AccelerationGraph;
  public org.opensourcephysics.displayejs.InteractiveTrace Acceleration;
  public org.opensourcephysics.displayejs.InteractiveTrace Acceleration2;
  public java.awt.Component helpBox;
  public javax.swing.JTextField line1;
  public javax.swing.JTextField line2;
  public javax.swing.JTextField line3;
  public javax.swing.JTextField line3b;
  public javax.swing.JTextField line5;
  public javax.swing.JTextField line4;
  public javax.swing.JTextField line6;
  public javax.swing.JTextField line6b;
  public javax.swing.JTextField line7;
  public javax.swing.JTextField line8;
  public javax.swing.JTextField line9;

  // private variables to block changes in the view variables:
  private boolean __m_canBeChanged__ = true; // Variables.basic variables:1
  private boolean __m2_canBeChanged__ = true; // Variables.basic variables:2
  private boolean __k_canBeChanged__ = true; // Variables.basic variables:3
  private boolean __k2_canBeChanged__ = true; // Variables.basic variables:4
  private boolean __A_canBeChanged__ = true; // Variables.basic variables:5
  private boolean __A2_canBeChanged__ = true; // Variables.basic variables:6
  private boolean __phase_canBeChanged__ = true; // Variables.basic variables:7
  private boolean __phase2_canBeChanged__ = true; // Variables.basic variables:8
  private boolean __theta_canBeChanged__ = true; // Variables.basic variables:9
  private boolean __theta2_canBeChanged__ = true; // Variables.basic variables:10
  private boolean __omega_canBeChanged__ = true; // Variables.basic variables:11
  private boolean __omega2_canBeChanged__ = true; // Variables.basic variables:12
  private boolean __L_canBeChanged__ = true; // Variables.basic variables:13
  private boolean __x_canBeChanged__ = true; // Variables.basic variables:14
  private boolean __x2_canBeChanged__ = true; // Variables.basic variables:15
  private boolean __y0_canBeChanged__ = true; // Variables.basic variables:16
  private boolean __y_canBeChanged__ = true; // Variables.basic variables:17
  private boolean __y02_canBeChanged__ = true; // Variables.basic variables:18
  private boolean __y2_canBeChanged__ = true; // Variables.basic variables:19
  private boolean __v_canBeChanged__ = true; // Variables.basic variables:20
  private boolean __v2_canBeChanged__ = true; // Variables.basic variables:21
  private boolean __a_canBeChanged__ = true; // Variables.basic variables:22
  private boolean __a2_canBeChanged__ = true; // Variables.basic variables:23
  private boolean __t_canBeChanged__ = true; // Variables.basic variables:24
  private boolean __dt_canBeChanged__ = true; // Variables.basic variables:25
  private boolean __PE_canBeChanged__ = true; // Variables.basic variables:26
  private boolean __PE2_canBeChanged__ = true; // Variables.basic variables:27
  private boolean __KE_canBeChanged__ = true; // Variables.basic variables:28
  private boolean __KE2_canBeChanged__ = true; // Variables.basic variables:29
  private boolean __EMax_canBeChanged__ = true; // Variables.basic variables:30
  private boolean __EMax2_canBeChanged__ = true; // Variables.basic variables:31
  private boolean __newEMax_canBeChanged__ = true; // Variables.basic variables:32
  private boolean __helpLabel_canBeChanged__ = true; // Variables.basic variables:33
  private boolean __helpFlag_canBeChanged__ = true; // Variables.basic variables:34
  private boolean __numTicks_canBeChanged__ = true; // Variables.basic variables:35
  private boolean __xTicks_canBeChanged__ = true; // Variables.basic variables:36
  private boolean __i_canBeChanged__ = true; // Variables.basic variables:37
  private boolean __color1_canBeChanged__ = true; // Variables.lookang:1
  private boolean __color2_canBeChanged__ = true; // Variables.lookang:2
  private boolean __colorsum_canBeChanged__ = true; // Variables.lookang:3
  private boolean __pi_canBeChanged__ = true; // Variables.lookang:4
  private boolean __cta_canBeChanged__ = true; // Variables.lookang:5
  private boolean __cta2_canBeChanged__ = true; // Variables.lookang:6
  private boolean __Asum_canBeChanged__ = true; // Variables.lookang:7
  private boolean __xsum_canBeChanged__ = true; // Variables.lookang:8
  private boolean __ysum_canBeChanged__ = true; // Variables.lookang:9
  private boolean __phasesum_canBeChanged__ = true; // Variables.lookang:10
  private boolean __showPloty_canBeChanged__ = true; // Variables.lookang:11
  private boolean __showPlotx_canBeChanged__ = true; // Variables.lookang:12
  private boolean __showsum_canBeChanged__ = true; // Variables.lookang:13
  private boolean __T_canBeChanged__ = true; // Variables.lookang:14
  private boolean __ctadeg_canBeChanged__ = true; // Variables.lookang:15
  private boolean __cta2deg_canBeChanged__ = true; // Variables.lookang:16
  private boolean __rotation_canBeChanged__ = true; // Variables.lookang:17
  private boolean __rotation2_canBeChanged__ = true; // Variables.lookang:18
  private boolean __sign_canBeChanged__ = true; // Variables.lookang:19
  private boolean __sign2_canBeChanged__ = true; // Variables.lookang:20
  private boolean __A1correct_canBeChanged__ = true; // Variables.answerscheck:1
  private boolean __enterA1_canBeChanged__ = true; // Variables.answerscheck:2
  private boolean __A1correctbackground_canBeChanged__ = true; // Variables.answerscheck:3
  private boolean __showhint_canBeChanged__ = true; // Variables.answerscheck:4
  private boolean __Answer_canBeChanged__ = true; // Variables.answerscheck:5
  private boolean __answertext_canBeChanged__ = true; // Variables.answerscheck:6
  private boolean __dcangle_canBeChanged__ = true; // Variables.angle:1
  private boolean __nangle_canBeChanged__ = true; // Variables.angle:2
  private boolean __px_canBeChanged__ = true; // Variables.angle:3
  private boolean __py_canBeChanged__ = true; // Variables.angle:4
  private boolean __c_canBeChanged__ = true; // Variables.angle:5
  private boolean __R_canBeChanged__ = true; // Variables.view:1
  private boolean __xmin_canBeChanged__ = true; // Variables.view:2
  private boolean __xmax_canBeChanged__ = true; // Variables.view:3
  private boolean __ymin_canBeChanged__ = true; // Variables.view:4
  private boolean __ymax_canBeChanged__ = true; // Variables.view:5

// ---------- Class constructor -------------------

  public reference_circle_v2weeView (reference_circle_v2weeSimulation _sim, String _replaceName, java.awt.Frame _replaceOwnerFrame) {
    super(_sim,_replaceName,_replaceOwnerFrame);
    _simulation = _sim;
    _model = (reference_circle_v2wee) _sim.getModel();
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
    addListener("m"); // Variables.basic variables:1
    addListener("m2"); // Variables.basic variables:2
    addListener("k"); // Variables.basic variables:3
    addListener("k2"); // Variables.basic variables:4
    addListener("A"); // Variables.basic variables:5
    addListener("A2"); // Variables.basic variables:6
    addListener("phase"); // Variables.basic variables:7
    addListener("phase2"); // Variables.basic variables:8
    addListener("theta"); // Variables.basic variables:9
    addListener("theta2"); // Variables.basic variables:10
    addListener("omega"); // Variables.basic variables:11
    addListener("omega2"); // Variables.basic variables:12
    addListener("L"); // Variables.basic variables:13
    addListener("x"); // Variables.basic variables:14
    addListener("x2"); // Variables.basic variables:15
    addListener("y0"); // Variables.basic variables:16
    addListener("y"); // Variables.basic variables:17
    addListener("y02"); // Variables.basic variables:18
    addListener("y2"); // Variables.basic variables:19
    addListener("v"); // Variables.basic variables:20
    addListener("v2"); // Variables.basic variables:21
    addListener("a"); // Variables.basic variables:22
    addListener("a2"); // Variables.basic variables:23
    addListener("t"); // Variables.basic variables:24
    addListener("dt"); // Variables.basic variables:25
    addListener("PE"); // Variables.basic variables:26
    addListener("PE2"); // Variables.basic variables:27
    addListener("KE"); // Variables.basic variables:28
    addListener("KE2"); // Variables.basic variables:29
    addListener("EMax"); // Variables.basic variables:30
    addListener("EMax2"); // Variables.basic variables:31
    addListener("newEMax"); // Variables.basic variables:32
    addListener("helpLabel"); // Variables.basic variables:33
    addListener("helpFlag"); // Variables.basic variables:34
    addListener("numTicks"); // Variables.basic variables:35
    addListener("xTicks"); // Variables.basic variables:36
    addListener("i"); // Variables.basic variables:37
    addListener("color1"); // Variables.lookang:1
    addListener("color2"); // Variables.lookang:2
    addListener("colorsum"); // Variables.lookang:3
    addListener("pi"); // Variables.lookang:4
    addListener("cta"); // Variables.lookang:5
    addListener("cta2"); // Variables.lookang:6
    addListener("Asum"); // Variables.lookang:7
    addListener("xsum"); // Variables.lookang:8
    addListener("ysum"); // Variables.lookang:9
    addListener("phasesum"); // Variables.lookang:10
    addListener("showPloty"); // Variables.lookang:11
    addListener("showPlotx"); // Variables.lookang:12
    addListener("showsum"); // Variables.lookang:13
    addListener("T"); // Variables.lookang:14
    addListener("ctadeg"); // Variables.lookang:15
    addListener("cta2deg"); // Variables.lookang:16
    addListener("rotation"); // Variables.lookang:17
    addListener("rotation2"); // Variables.lookang:18
    addListener("sign"); // Variables.lookang:19
    addListener("sign2"); // Variables.lookang:20
    addListener("A1correct"); // Variables.answerscheck:1
    addListener("enterA1"); // Variables.answerscheck:2
    addListener("A1correctbackground"); // Variables.answerscheck:3
    addListener("showhint"); // Variables.answerscheck:4
    addListener("Answer"); // Variables.answerscheck:5
    addListener("answertext"); // Variables.answerscheck:6
    addListener("dcangle"); // Variables.angle:1
    addListener("nangle"); // Variables.angle:2
    addListener("px"); // Variables.angle:3
    addListener("py"); // Variables.angle:4
    addListener("c"); // Variables.angle:5
    addListener("R"); // Variables.view:1
    addListener("xmin"); // Variables.view:2
    addListener("xmax"); // Variables.view:3
    addListener("ymin"); // Variables.view:4
    addListener("ymax"); // Variables.view:5
  }

// ---------- Implementation of View -------------------

  public void read() {
    // Ejs requires no read(). Actually, having it might cause problems!
  }

  @SuppressWarnings("unchecked")
  public void read(String _variable) {
    if ("m".equals(_variable)) {
      _model.m = getDouble("m"); // Variables.basic variables:1
      __m_canBeChanged__ = true;
    }
    if ("m2".equals(_variable)) {
      _model.m2 = getDouble("m2"); // Variables.basic variables:2
      __m2_canBeChanged__ = true;
    }
    if ("k".equals(_variable)) {
      _model.k = getDouble("k"); // Variables.basic variables:3
      __k_canBeChanged__ = true;
    }
    if ("k2".equals(_variable)) {
      _model.k2 = getDouble("k2"); // Variables.basic variables:4
      __k2_canBeChanged__ = true;
    }
    if ("A".equals(_variable)) {
      _model.A = getDouble("A"); // Variables.basic variables:5
      __A_canBeChanged__ = true;
    }
    if ("A2".equals(_variable)) {
      _model.A2 = getDouble("A2"); // Variables.basic variables:6
      __A2_canBeChanged__ = true;
    }
    if ("phase".equals(_variable)) {
      _model.phase = getDouble("phase"); // Variables.basic variables:7
      __phase_canBeChanged__ = true;
    }
    if ("phase2".equals(_variable)) {
      _model.phase2 = getDouble("phase2"); // Variables.basic variables:8
      __phase2_canBeChanged__ = true;
    }
    if ("theta".equals(_variable)) {
      _model.theta = getDouble("theta"); // Variables.basic variables:9
      __theta_canBeChanged__ = true;
    }
    if ("theta2".equals(_variable)) {
      _model.theta2 = getDouble("theta2"); // Variables.basic variables:10
      __theta2_canBeChanged__ = true;
    }
    if ("omega".equals(_variable)) {
      _model.omega = getDouble("omega"); // Variables.basic variables:11
      __omega_canBeChanged__ = true;
    }
    if ("omega2".equals(_variable)) {
      _model.omega2 = getDouble("omega2"); // Variables.basic variables:12
      __omega2_canBeChanged__ = true;
    }
    if ("L".equals(_variable)) {
      _model.L = getDouble("L"); // Variables.basic variables:13
      __L_canBeChanged__ = true;
    }
    if ("x".equals(_variable)) {
      _model.x = getDouble("x"); // Variables.basic variables:14
      __x_canBeChanged__ = true;
    }
    if ("x2".equals(_variable)) {
      _model.x2 = getDouble("x2"); // Variables.basic variables:15
      __x2_canBeChanged__ = true;
    }
    if ("y0".equals(_variable)) {
      _model.y0 = getDouble("y0"); // Variables.basic variables:16
      __y0_canBeChanged__ = true;
    }
    if ("y".equals(_variable)) {
      _model.y = getDouble("y"); // Variables.basic variables:17
      __y_canBeChanged__ = true;
    }
    if ("y02".equals(_variable)) {
      _model.y02 = getDouble("y02"); // Variables.basic variables:18
      __y02_canBeChanged__ = true;
    }
    if ("y2".equals(_variable)) {
      _model.y2 = getDouble("y2"); // Variables.basic variables:19
      __y2_canBeChanged__ = true;
    }
    if ("v".equals(_variable)) {
      _model.v = getDouble("v"); // Variables.basic variables:20
      __v_canBeChanged__ = true;
    }
    if ("v2".equals(_variable)) {
      _model.v2 = getDouble("v2"); // Variables.basic variables:21
      __v2_canBeChanged__ = true;
    }
    if ("a".equals(_variable)) {
      _model.a = getDouble("a"); // Variables.basic variables:22
      __a_canBeChanged__ = true;
    }
    if ("a2".equals(_variable)) {
      _model.a2 = getDouble("a2"); // Variables.basic variables:23
      __a2_canBeChanged__ = true;
    }
    if ("t".equals(_variable)) {
      _model.t = getDouble("t"); // Variables.basic variables:24
      __t_canBeChanged__ = true;
    }
    if ("dt".equals(_variable)) {
      _model.dt = getDouble("dt"); // Variables.basic variables:25
      __dt_canBeChanged__ = true;
    }
    if ("PE".equals(_variable)) {
      _model.PE = getDouble("PE"); // Variables.basic variables:26
      __PE_canBeChanged__ = true;
    }
    if ("PE2".equals(_variable)) {
      _model.PE2 = getDouble("PE2"); // Variables.basic variables:27
      __PE2_canBeChanged__ = true;
    }
    if ("KE".equals(_variable)) {
      _model.KE = getDouble("KE"); // Variables.basic variables:28
      __KE_canBeChanged__ = true;
    }
    if ("KE2".equals(_variable)) {
      _model.KE2 = getDouble("KE2"); // Variables.basic variables:29
      __KE2_canBeChanged__ = true;
    }
    if ("EMax".equals(_variable)) {
      _model.EMax = getDouble("EMax"); // Variables.basic variables:30
      __EMax_canBeChanged__ = true;
    }
    if ("EMax2".equals(_variable)) {
      _model.EMax2 = getDouble("EMax2"); // Variables.basic variables:31
      __EMax2_canBeChanged__ = true;
    }
    if ("newEMax".equals(_variable)) {
      _model.newEMax = getDouble("newEMax"); // Variables.basic variables:32
      __newEMax_canBeChanged__ = true;
    }
    if ("helpLabel".equals(_variable)) {
      _model.helpLabel = getString("helpLabel"); // Variables.basic variables:33
      __helpLabel_canBeChanged__ = true;
    }
    if ("helpFlag".equals(_variable)) {
      _model.helpFlag = getBoolean("helpFlag"); // Variables.basic variables:34
      __helpFlag_canBeChanged__ = true;
    }
    if ("numTicks".equals(_variable)) {
      _model.numTicks = getInt("numTicks"); // Variables.basic variables:35
      __numTicks_canBeChanged__ = true;
    }
    if ("xTicks".equals(_variable)) {
      double[] _data = (double[]) getValue("xTicks").getObject();
      int _n0 = _data.length;
      if (_n0>_model.xTicks.length) _n0 = _model.xTicks.length;
      for (int _i0=0; _i0<_n0; _i0++) {
        _model.xTicks[_i0] = _data[_i0];
      }
      __xTicks_canBeChanged__ = true;
    }
    if ("i".equals(_variable)) {
      _model.i = getInt("i"); // Variables.basic variables:37
      __i_canBeChanged__ = true;
    }
    if ("color1".equals(_variable)) {
      _model.color1 = getObject("color1"); // Variables.lookang:1
      __color1_canBeChanged__ = true;
    }
    if ("color2".equals(_variable)) {
      _model.color2 = getObject("color2"); // Variables.lookang:2
      __color2_canBeChanged__ = true;
    }
    if ("colorsum".equals(_variable)) {
      _model.colorsum = getObject("colorsum"); // Variables.lookang:3
      __colorsum_canBeChanged__ = true;
    }
    if ("pi".equals(_variable)) {
      _model.pi = getDouble("pi"); // Variables.lookang:4
      __pi_canBeChanged__ = true;
    }
    if ("cta".equals(_variable)) {
      _model.cta = getDouble("cta"); // Variables.lookang:5
      __cta_canBeChanged__ = true;
    }
    if ("cta2".equals(_variable)) {
      _model.cta2 = getDouble("cta2"); // Variables.lookang:6
      __cta2_canBeChanged__ = true;
    }
    if ("Asum".equals(_variable)) {
      _model.Asum = getDouble("Asum"); // Variables.lookang:7
      __Asum_canBeChanged__ = true;
    }
    if ("xsum".equals(_variable)) {
      _model.xsum = getDouble("xsum"); // Variables.lookang:8
      __xsum_canBeChanged__ = true;
    }
    if ("ysum".equals(_variable)) {
      _model.ysum = getDouble("ysum"); // Variables.lookang:9
      __ysum_canBeChanged__ = true;
    }
    if ("phasesum".equals(_variable)) {
      _model.phasesum = getDouble("phasesum"); // Variables.lookang:10
      __phasesum_canBeChanged__ = true;
    }
    if ("showPloty".equals(_variable)) {
      _model.showPloty = getBoolean("showPloty"); // Variables.lookang:11
      __showPloty_canBeChanged__ = true;
    }
    if ("showPlotx".equals(_variable)) {
      _model.showPlotx = getBoolean("showPlotx"); // Variables.lookang:12
      __showPlotx_canBeChanged__ = true;
    }
    if ("showsum".equals(_variable)) {
      _model.showsum = getBoolean("showsum"); // Variables.lookang:13
      __showsum_canBeChanged__ = true;
    }
    if ("T".equals(_variable)) {
      _model.T = getDouble("T"); // Variables.lookang:14
      __T_canBeChanged__ = true;
    }
    if ("ctadeg".equals(_variable)) {
      _model.ctadeg = getDouble("ctadeg"); // Variables.lookang:15
      __ctadeg_canBeChanged__ = true;
    }
    if ("cta2deg".equals(_variable)) {
      _model.cta2deg = getDouble("cta2deg"); // Variables.lookang:16
      __cta2deg_canBeChanged__ = true;
    }
    if ("rotation".equals(_variable)) {
      _model.rotation = getBoolean("rotation"); // Variables.lookang:17
      __rotation_canBeChanged__ = true;
    }
    if ("rotation2".equals(_variable)) {
      _model.rotation2 = getBoolean("rotation2"); // Variables.lookang:18
      __rotation2_canBeChanged__ = true;
    }
    if ("sign".equals(_variable)) {
      _model.sign = getDouble("sign"); // Variables.lookang:19
      __sign_canBeChanged__ = true;
    }
    if ("sign2".equals(_variable)) {
      _model.sign2 = getDouble("sign2"); // Variables.lookang:20
      __sign2_canBeChanged__ = true;
    }
    if ("A1correct".equals(_variable)) {
      _model.A1correct = getString("A1correct"); // Variables.answerscheck:1
      __A1correct_canBeChanged__ = true;
    }
    if ("enterA1".equals(_variable)) {
      _model.enterA1 = getDouble("enterA1"); // Variables.answerscheck:2
      __enterA1_canBeChanged__ = true;
    }
    if ("A1correctbackground".equals(_variable)) {
      _model.A1correctbackground = getObject("A1correctbackground"); // Variables.answerscheck:3
      __A1correctbackground_canBeChanged__ = true;
    }
    if ("showhint".equals(_variable)) {
      _model.showhint = getBoolean("showhint"); // Variables.answerscheck:4
      __showhint_canBeChanged__ = true;
    }
    if ("Answer".equals(_variable)) {
      _model.Answer = getDouble("Answer"); // Variables.answerscheck:5
      __Answer_canBeChanged__ = true;
    }
    if ("answertext".equals(_variable)) {
      _model.answertext = getString("answertext"); // Variables.answerscheck:6
      __answertext_canBeChanged__ = true;
    }
    if ("dcangle".equals(_variable)) {
      _model.dcangle = getDouble("dcangle"); // Variables.angle:1
      __dcangle_canBeChanged__ = true;
    }
    if ("nangle".equals(_variable)) {
      _model.nangle = getInt("nangle"); // Variables.angle:2
      __nangle_canBeChanged__ = true;
    }
    if ("px".equals(_variable)) {
      double[] _data = (double[]) getValue("px").getObject();
      int _n0 = _data.length;
      if (_n0>_model.px.length) _n0 = _model.px.length;
      for (int _i0=0; _i0<_n0; _i0++) {
        _model.px[_i0] = _data[_i0];
      }
      __px_canBeChanged__ = true;
    }
    if ("py".equals(_variable)) {
      double[] _data = (double[]) getValue("py").getObject();
      int _n0 = _data.length;
      if (_n0>_model.py.length) _n0 = _model.py.length;
      for (int _i0=0; _i0<_n0; _i0++) {
        _model.py[_i0] = _data[_i0];
      }
      __py_canBeChanged__ = true;
    }
    if ("c".equals(_variable)) {
      _model.c = getDouble("c"); // Variables.angle:5
      __c_canBeChanged__ = true;
    }
    if ("R".equals(_variable)) {
      _model.R = getDouble("R"); // Variables.view:1
      __R_canBeChanged__ = true;
    }
    if ("xmin".equals(_variable)) {
      _model.xmin = getDouble("xmin"); // Variables.view:2
      __xmin_canBeChanged__ = true;
    }
    if ("xmax".equals(_variable)) {
      _model.xmax = getDouble("xmax"); // Variables.view:3
      __xmax_canBeChanged__ = true;
    }
    if ("ymin".equals(_variable)) {
      _model.ymin = getDouble("ymin"); // Variables.view:4
      __ymin_canBeChanged__ = true;
    }
    if ("ymax".equals(_variable)) {
      _model.ymax = getDouble("ymax"); // Variables.view:5
      __ymax_canBeChanged__ = true;
    }
  }

  public void propagateValues () {
    setValue ("_isPlaying",_simulation.isPlaying());
    setValue ("_isPaused", _simulation.isPaused());
    if(__m_canBeChanged__) setValue("m",_model.m); // Variables.basic variables:1
    if(__m2_canBeChanged__) setValue("m2",_model.m2); // Variables.basic variables:2
    if(__k_canBeChanged__) setValue("k",_model.k); // Variables.basic variables:3
    if(__k2_canBeChanged__) setValue("k2",_model.k2); // Variables.basic variables:4
    if(__A_canBeChanged__) setValue("A",_model.A); // Variables.basic variables:5
    if(__A2_canBeChanged__) setValue("A2",_model.A2); // Variables.basic variables:6
    if(__phase_canBeChanged__) setValue("phase",_model.phase); // Variables.basic variables:7
    if(__phase2_canBeChanged__) setValue("phase2",_model.phase2); // Variables.basic variables:8
    if(__theta_canBeChanged__) setValue("theta",_model.theta); // Variables.basic variables:9
    if(__theta2_canBeChanged__) setValue("theta2",_model.theta2); // Variables.basic variables:10
    if(__omega_canBeChanged__) setValue("omega",_model.omega); // Variables.basic variables:11
    if(__omega2_canBeChanged__) setValue("omega2",_model.omega2); // Variables.basic variables:12
    if(__L_canBeChanged__) setValue("L",_model.L); // Variables.basic variables:13
    if(__x_canBeChanged__) setValue("x",_model.x); // Variables.basic variables:14
    if(__x2_canBeChanged__) setValue("x2",_model.x2); // Variables.basic variables:15
    if(__y0_canBeChanged__) setValue("y0",_model.y0); // Variables.basic variables:16
    if(__y_canBeChanged__) setValue("y",_model.y); // Variables.basic variables:17
    if(__y02_canBeChanged__) setValue("y02",_model.y02); // Variables.basic variables:18
    if(__y2_canBeChanged__) setValue("y2",_model.y2); // Variables.basic variables:19
    if(__v_canBeChanged__) setValue("v",_model.v); // Variables.basic variables:20
    if(__v2_canBeChanged__) setValue("v2",_model.v2); // Variables.basic variables:21
    if(__a_canBeChanged__) setValue("a",_model.a); // Variables.basic variables:22
    if(__a2_canBeChanged__) setValue("a2",_model.a2); // Variables.basic variables:23
    if(__t_canBeChanged__) setValue("t",_model.t); // Variables.basic variables:24
    if(__dt_canBeChanged__) setValue("dt",_model.dt); // Variables.basic variables:25
    if(__PE_canBeChanged__) setValue("PE",_model.PE); // Variables.basic variables:26
    if(__PE2_canBeChanged__) setValue("PE2",_model.PE2); // Variables.basic variables:27
    if(__KE_canBeChanged__) setValue("KE",_model.KE); // Variables.basic variables:28
    if(__KE2_canBeChanged__) setValue("KE2",_model.KE2); // Variables.basic variables:29
    if(__EMax_canBeChanged__) setValue("EMax",_model.EMax); // Variables.basic variables:30
    if(__EMax2_canBeChanged__) setValue("EMax2",_model.EMax2); // Variables.basic variables:31
    if(__newEMax_canBeChanged__) setValue("newEMax",_model.newEMax); // Variables.basic variables:32
    if(__helpLabel_canBeChanged__) setValue("helpLabel",_model.helpLabel); // Variables.basic variables:33
    if(__helpFlag_canBeChanged__) setValue("helpFlag",_model.helpFlag); // Variables.basic variables:34
    if(__numTicks_canBeChanged__) setValue("numTicks",_model.numTicks); // Variables.basic variables:35
    if(__xTicks_canBeChanged__) setValue("xTicks",_model.xTicks); // Variables.basic variables:36
    if(__i_canBeChanged__) setValue("i",_model.i); // Variables.basic variables:37
    if(__color1_canBeChanged__) setValue("color1",_model.color1); // Variables.lookang:1
    if(__color2_canBeChanged__) setValue("color2",_model.color2); // Variables.lookang:2
    if(__colorsum_canBeChanged__) setValue("colorsum",_model.colorsum); // Variables.lookang:3
    if(__pi_canBeChanged__) setValue("pi",_model.pi); // Variables.lookang:4
    if(__cta_canBeChanged__) setValue("cta",_model.cta); // Variables.lookang:5
    if(__cta2_canBeChanged__) setValue("cta2",_model.cta2); // Variables.lookang:6
    if(__Asum_canBeChanged__) setValue("Asum",_model.Asum); // Variables.lookang:7
    if(__xsum_canBeChanged__) setValue("xsum",_model.xsum); // Variables.lookang:8
    if(__ysum_canBeChanged__) setValue("ysum",_model.ysum); // Variables.lookang:9
    if(__phasesum_canBeChanged__) setValue("phasesum",_model.phasesum); // Variables.lookang:10
    if(__showPloty_canBeChanged__) setValue("showPloty",_model.showPloty); // Variables.lookang:11
    if(__showPlotx_canBeChanged__) setValue("showPlotx",_model.showPlotx); // Variables.lookang:12
    if(__showsum_canBeChanged__) setValue("showsum",_model.showsum); // Variables.lookang:13
    if(__T_canBeChanged__) setValue("T",_model.T); // Variables.lookang:14
    if(__ctadeg_canBeChanged__) setValue("ctadeg",_model.ctadeg); // Variables.lookang:15
    if(__cta2deg_canBeChanged__) setValue("cta2deg",_model.cta2deg); // Variables.lookang:16
    if(__rotation_canBeChanged__) setValue("rotation",_model.rotation); // Variables.lookang:17
    if(__rotation2_canBeChanged__) setValue("rotation2",_model.rotation2); // Variables.lookang:18
    if(__sign_canBeChanged__) setValue("sign",_model.sign); // Variables.lookang:19
    if(__sign2_canBeChanged__) setValue("sign2",_model.sign2); // Variables.lookang:20
    if(__A1correct_canBeChanged__) setValue("A1correct",_model.A1correct); // Variables.answerscheck:1
    if(__enterA1_canBeChanged__) setValue("enterA1",_model.enterA1); // Variables.answerscheck:2
    if(__A1correctbackground_canBeChanged__) setValue("A1correctbackground",_model.A1correctbackground); // Variables.answerscheck:3
    if(__showhint_canBeChanged__) setValue("showhint",_model.showhint); // Variables.answerscheck:4
    if(__Answer_canBeChanged__) setValue("Answer",_model.Answer); // Variables.answerscheck:5
    if(__answertext_canBeChanged__) setValue("answertext",_model.answertext); // Variables.answerscheck:6
    if(__dcangle_canBeChanged__) setValue("dcangle",_model.dcangle); // Variables.angle:1
    if(__nangle_canBeChanged__) setValue("nangle",_model.nangle); // Variables.angle:2
    if(__px_canBeChanged__) setValue("px",_model.px); // Variables.angle:3
    if(__py_canBeChanged__) setValue("py",_model.py); // Variables.angle:4
    if(__c_canBeChanged__) setValue("c",_model.c); // Variables.angle:5
    if(__R_canBeChanged__) setValue("R",_model.R); // Variables.view:1
    if(__xmin_canBeChanged__) setValue("xmin",_model.xmin); // Variables.view:2
    if(__xmax_canBeChanged__) setValue("xmax",_model.xmax); // Variables.view:3
    if(__ymin_canBeChanged__) setValue("ymin",_model.ymin); // Variables.view:4
    if(__ymax_canBeChanged__) setValue("ymax",_model.ymax); // Variables.view:5
  }

  @SuppressWarnings("unchecked")
  public void blockVariable(String _variable) {
    if ("m".equals(_variable)) __m_canBeChanged__ = false; // Variables.basic variables:1
    if ("m2".equals(_variable)) __m2_canBeChanged__ = false; // Variables.basic variables:2
    if ("k".equals(_variable)) __k_canBeChanged__ = false; // Variables.basic variables:3
    if ("k2".equals(_variable)) __k2_canBeChanged__ = false; // Variables.basic variables:4
    if ("A".equals(_variable)) __A_canBeChanged__ = false; // Variables.basic variables:5
    if ("A2".equals(_variable)) __A2_canBeChanged__ = false; // Variables.basic variables:6
    if ("phase".equals(_variable)) __phase_canBeChanged__ = false; // Variables.basic variables:7
    if ("phase2".equals(_variable)) __phase2_canBeChanged__ = false; // Variables.basic variables:8
    if ("theta".equals(_variable)) __theta_canBeChanged__ = false; // Variables.basic variables:9
    if ("theta2".equals(_variable)) __theta2_canBeChanged__ = false; // Variables.basic variables:10
    if ("omega".equals(_variable)) __omega_canBeChanged__ = false; // Variables.basic variables:11
    if ("omega2".equals(_variable)) __omega2_canBeChanged__ = false; // Variables.basic variables:12
    if ("L".equals(_variable)) __L_canBeChanged__ = false; // Variables.basic variables:13
    if ("x".equals(_variable)) __x_canBeChanged__ = false; // Variables.basic variables:14
    if ("x2".equals(_variable)) __x2_canBeChanged__ = false; // Variables.basic variables:15
    if ("y0".equals(_variable)) __y0_canBeChanged__ = false; // Variables.basic variables:16
    if ("y".equals(_variable)) __y_canBeChanged__ = false; // Variables.basic variables:17
    if ("y02".equals(_variable)) __y02_canBeChanged__ = false; // Variables.basic variables:18
    if ("y2".equals(_variable)) __y2_canBeChanged__ = false; // Variables.basic variables:19
    if ("v".equals(_variable)) __v_canBeChanged__ = false; // Variables.basic variables:20
    if ("v2".equals(_variable)) __v2_canBeChanged__ = false; // Variables.basic variables:21
    if ("a".equals(_variable)) __a_canBeChanged__ = false; // Variables.basic variables:22
    if ("a2".equals(_variable)) __a2_canBeChanged__ = false; // Variables.basic variables:23
    if ("t".equals(_variable)) __t_canBeChanged__ = false; // Variables.basic variables:24
    if ("dt".equals(_variable)) __dt_canBeChanged__ = false; // Variables.basic variables:25
    if ("PE".equals(_variable)) __PE_canBeChanged__ = false; // Variables.basic variables:26
    if ("PE2".equals(_variable)) __PE2_canBeChanged__ = false; // Variables.basic variables:27
    if ("KE".equals(_variable)) __KE_canBeChanged__ = false; // Variables.basic variables:28
    if ("KE2".equals(_variable)) __KE2_canBeChanged__ = false; // Variables.basic variables:29
    if ("EMax".equals(_variable)) __EMax_canBeChanged__ = false; // Variables.basic variables:30
    if ("EMax2".equals(_variable)) __EMax2_canBeChanged__ = false; // Variables.basic variables:31
    if ("newEMax".equals(_variable)) __newEMax_canBeChanged__ = false; // Variables.basic variables:32
    if ("helpLabel".equals(_variable)) __helpLabel_canBeChanged__ = false; // Variables.basic variables:33
    if ("helpFlag".equals(_variable)) __helpFlag_canBeChanged__ = false; // Variables.basic variables:34
    if ("numTicks".equals(_variable)) __numTicks_canBeChanged__ = false; // Variables.basic variables:35
    if ("xTicks".equals(_variable)) __xTicks_canBeChanged__ = false; // Variables.basic variables:36
    if ("i".equals(_variable)) __i_canBeChanged__ = false; // Variables.basic variables:37
    if ("color1".equals(_variable)) __color1_canBeChanged__ = false; // Variables.lookang:1
    if ("color2".equals(_variable)) __color2_canBeChanged__ = false; // Variables.lookang:2
    if ("colorsum".equals(_variable)) __colorsum_canBeChanged__ = false; // Variables.lookang:3
    if ("pi".equals(_variable)) __pi_canBeChanged__ = false; // Variables.lookang:4
    if ("cta".equals(_variable)) __cta_canBeChanged__ = false; // Variables.lookang:5
    if ("cta2".equals(_variable)) __cta2_canBeChanged__ = false; // Variables.lookang:6
    if ("Asum".equals(_variable)) __Asum_canBeChanged__ = false; // Variables.lookang:7
    if ("xsum".equals(_variable)) __xsum_canBeChanged__ = false; // Variables.lookang:8
    if ("ysum".equals(_variable)) __ysum_canBeChanged__ = false; // Variables.lookang:9
    if ("phasesum".equals(_variable)) __phasesum_canBeChanged__ = false; // Variables.lookang:10
    if ("showPloty".equals(_variable)) __showPloty_canBeChanged__ = false; // Variables.lookang:11
    if ("showPlotx".equals(_variable)) __showPlotx_canBeChanged__ = false; // Variables.lookang:12
    if ("showsum".equals(_variable)) __showsum_canBeChanged__ = false; // Variables.lookang:13
    if ("T".equals(_variable)) __T_canBeChanged__ = false; // Variables.lookang:14
    if ("ctadeg".equals(_variable)) __ctadeg_canBeChanged__ = false; // Variables.lookang:15
    if ("cta2deg".equals(_variable)) __cta2deg_canBeChanged__ = false; // Variables.lookang:16
    if ("rotation".equals(_variable)) __rotation_canBeChanged__ = false; // Variables.lookang:17
    if ("rotation2".equals(_variable)) __rotation2_canBeChanged__ = false; // Variables.lookang:18
    if ("sign".equals(_variable)) __sign_canBeChanged__ = false; // Variables.lookang:19
    if ("sign2".equals(_variable)) __sign2_canBeChanged__ = false; // Variables.lookang:20
    if ("A1correct".equals(_variable)) __A1correct_canBeChanged__ = false; // Variables.answerscheck:1
    if ("enterA1".equals(_variable)) __enterA1_canBeChanged__ = false; // Variables.answerscheck:2
    if ("A1correctbackground".equals(_variable)) __A1correctbackground_canBeChanged__ = false; // Variables.answerscheck:3
    if ("showhint".equals(_variable)) __showhint_canBeChanged__ = false; // Variables.answerscheck:4
    if ("Answer".equals(_variable)) __Answer_canBeChanged__ = false; // Variables.answerscheck:5
    if ("answertext".equals(_variable)) __answertext_canBeChanged__ = false; // Variables.answerscheck:6
    if ("dcangle".equals(_variable)) __dcangle_canBeChanged__ = false; // Variables.angle:1
    if ("nangle".equals(_variable)) __nangle_canBeChanged__ = false; // Variables.angle:2
    if ("px".equals(_variable)) __px_canBeChanged__ = false; // Variables.angle:3
    if ("py".equals(_variable)) __py_canBeChanged__ = false; // Variables.angle:4
    if ("c".equals(_variable)) __c_canBeChanged__ = false; // Variables.angle:5
    if ("R".equals(_variable)) __R_canBeChanged__ = false; // Variables.view:1
    if ("xmin".equals(_variable)) __xmin_canBeChanged__ = false; // Variables.view:2
    if ("xmax".equals(_variable)) __xmax_canBeChanged__ = false; // Variables.view:3
    if ("ymin".equals(_variable)) __ymin_canBeChanged__ = false; // Variables.view:4
    if ("ymax".equals(_variable)) __ymax_canBeChanged__ = false; // Variables.view:5
  }

// ---------- Creation of the interface  -------------------

  private void createControl() {
    // This first frame is added due to what I consider a bug in Java (Paco)
    addElement( new org.colos.ejs.library.control.swing.ControlFrame(),"_TOP_SECRET_")
      .setProperty("waitForReset","true")
      .setProperty("visible","false")
      .setProperty("background","green")
      .setProperty("size","100,100");
    MainWindow = (java.awt.Component)
      addElement(new org.colos.ejs.library.control.swing.ControlFrame(),"MainWindow")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("exit","true")
      .setProperty("waitForReset","true")
      .setProperty("title","The Connection between Simple Harmonic Motion and Circular Motion")
      .setProperty("layout","border")
      .setProperty("visible","true")
      .setProperty("location","500,175")
      .setProperty("size","708,540")
      .getObject();
    centre = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"centre")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","center")
      .setProperty("parent","MainWindow")
      .setProperty("layout","border")
      .getObject();
    plottingPanel = (org.opensourcephysics.drawing2d.PlottingPanel2D)
      addElement(new org.colos.ejs.library.control.swing.ControlPlottingPanel(),"plottingPanel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","center")
      .setProperty("parent","centre")
      .setProperty("autoscaleX","false")
      .setProperty("autoscaleY","false")
      .setProperty("minimumX","xmin")
      .setProperty("maximumX","xmax")
      .setProperty("minimumY","ymin")
      .setProperty("maximumY","ymax")
      .setProperty("square","true")
      .setProperty("title","Circular Motion")
      .setProperty("titleX","position x")
      .setProperty("titleY","position y")
      .getObject();
    angle = (org.opensourcephysics.drawing2d.ElementPolygon)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlPolygon2D(),"angle")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","plottingPanel")
      .setProperty("xData","px")
      .setProperty("yData","py")
      .setProperty("x","0")
      .setProperty("y","0")
      .setProperty("visible","showhint")
      .setProperty("lineColor","0,192,255,255")
      .setProperty("fillColor","0,192,255,255")
      .getObject();
    text = (org.opensourcephysics.drawing2d.ElementText)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlText2D(),"text")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","plottingPanel")
      .setProperty("x","%_model._method_for_text_x()%" )
      .setProperty("y","%_model._method_for_text_y()%" )
      .setProperty("pixelSize","true")
      .setProperty("visible","showhint")
      .setProperty("text","%answertext%")
      .getObject();
    shape = (org.opensourcephysics.drawing2d.ElementShape)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlShape2D(),"shape")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","plottingPanel")
      .setProperty("x","x")
      .setProperty("y","y")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ELLIPSE")
      .setProperty("fillColor","color1")
      .getObject();
    shape2 = (org.opensourcephysics.drawing2d.ElementShape)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlShape2D(),"shape2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","plottingPanel")
      .setProperty("x","x2")
      .setProperty("y","y2")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ELLIPSE")
      .setProperty("fillColor","color2")
      .getObject();
    trail3 = (org.opensourcephysics.drawing2d.ElementTrail)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlTrail2D(),"trail3")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","plottingPanel")
      .setProperty("inputX","x")
      .setProperty("inputY","y")
      .setProperty("maximumPoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","%_model._method_for_trail3_connected()%" )
      .setProperty("lineColor","color1")
      .setProperty("lineWidth","2")
      .getObject();
    trail22 = (org.opensourcephysics.drawing2d.ElementTrail)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlTrail2D(),"trail22")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","plottingPanel")
      .setProperty("inputX","x2")
      .setProperty("inputY","y2")
      .setProperty("maximumPoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","%_model._method_for_trail22_connected()%" )
      .setProperty("lineColor","color2")
      .setProperty("lineWidth","2")
      .getObject();
    A1 = (org.opensourcephysics.drawing2d.ElementArrow)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlArrow2D(),"A1")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","plottingPanel")
      .setProperty("x","0")
      .setProperty("y","0")
      .setProperty("sizeX","x")
      .setProperty("sizeY","y")
      .setProperty("lineColor","color1")
      .setProperty("fillColor","color1")
      .getObject();
    A2 = (org.opensourcephysics.drawing2d.ElementArrow)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlArrow2D(),"A2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","plottingPanel")
      .setProperty("x","0")
      .setProperty("y","0")
      .setProperty("sizeX","x2")
      .setProperty("sizeY","y2")
      .setProperty("lineColor","color2")
      .setProperty("fillColor","color2")
      .getObject();
    sum = (org.opensourcephysics.drawing2d.Group)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlGroup2D(),"sum")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","plottingPanel")
      .setProperty("visible","showsum")
      .getObject();
    shape222 = (org.opensourcephysics.drawing2d.ElementShape)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlShape2D(),"shape222")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","sum")
      .setProperty("x","xsum")
      .setProperty("y","ysum")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ELLIPSE")
      .setProperty("fillColor","colorsum")
      .getObject();
    trail2222 = (org.opensourcephysics.drawing2d.ElementTrail)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlTrail2D(),"trail2222")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","sum")
      .setProperty("inputX","xsum")
      .setProperty("inputY","ysum")
      .setProperty("maximumPoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","%_model._method_for_trail2222_connected()%" )
      .setProperty("lineColor","colorsum")
      .setProperty("lineWidth","2")
      .getObject();
    arrow2 = (org.opensourcephysics.drawing2d.ElementArrow)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlArrow2D(),"arrow2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","sum")
      .setProperty("x","0")
      .setProperty("y","0")
      .setProperty("sizeX","xsum")
      .setProperty("sizeY","ysum")
      .setProperty("lineColor","colorsum")
      .setProperty("fillColor","colorsum")
      .getObject();
    bottom = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"bottom")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","south")
      .setProperty("parent","MainWindow")
      .setProperty("layout","VBOX")
      .getObject();
    bottom2 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"bottom2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","bottom")
      .setProperty("layout","HBOX")
      .setProperty("visible","showPlotx")
      .getObject();
    PositionGraphx2 = (org.opensourcephysics.drawing2d.PlottingPanel2D)
      addElement(new org.colos.ejs.library.control.swing.ControlPlottingPanel(),"PositionGraphx2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","center")
      .setProperty("parent","bottom2")
      .setProperty("minimumX","xmin")
      .setProperty("maximumX","xmax")
      .setProperty("yMarginPercentage","5")
      .setProperty("title","Time (s)")
      .setProperty("titleX","Position x")
      .setProperty("titleY","Position (m)")
      .getObject();
    Displacement3 = (org.opensourcephysics.displayejs.InteractiveTrace)
      addElement(new org.colos.ejs.library.control.displayejs.ControlTrace(),"Displacement3")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx2")
      .setProperty("x","x")
      .setProperty("y","t")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","color1")
      .setProperty("stroke","2")
      .getObject();
    Displacement22 = (org.opensourcephysics.displayejs.InteractiveTrace)
      addElement(new org.colos.ejs.library.control.displayejs.ControlTrace(),"Displacement22")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx2")
      .setProperty("x","x2")
      .setProperty("y","t")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","color2")
      .setProperty("stroke","2")
      .getObject();
    Displacementsum2 = (org.opensourcephysics.displayejs.InteractiveTrace)
      addElement(new org.colos.ejs.library.control.displayejs.ControlTrace(),"Displacementsum2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx2")
      .setProperty("x","xsum")
      .setProperty("y","t")
      .setProperty("visible","showsum")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","colorsum")
      .setProperty("stroke","2")
      .getObject();
    spring323 = (org.opensourcephysics.drawing2d.ElementSpring)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlSpring2D(),"spring323")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx2")
      .setProperty("x","%_model._method_for_spring323_x()%" )
      .setProperty("y","t")
      .setProperty("sizeX","%_model._method_for_spring323_sizeX()%" )
      .setProperty("sizeY","0")
      .setProperty("lineColor","color1")
      .getObject();
    shape33 = (org.opensourcephysics.drawing2d.ElementShape)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlShape2D(),"shape33")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx2")
      .setProperty("x","x")
      .setProperty("y","t")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ROUND_RECTANGLE")
      .setProperty("lineColor","color1")
      .setProperty("fillColor","color1")
      .getObject();
    spring33 = (org.opensourcephysics.drawing2d.ElementSpring)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlSpring2D(),"spring33")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx2")
      .setProperty("x","%_model._method_for_spring33_x()%" )
      .setProperty("y","t")
      .setProperty("sizeX","%_model._method_for_spring33_sizeX()%" )
      .setProperty("sizeY","0")
      .setProperty("visible","false")
      .setProperty("lineColor","color1")
      .getObject();
    spring3222 = (org.opensourcephysics.drawing2d.ElementSpring)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlSpring2D(),"spring3222")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx2")
      .setProperty("x","%_model._method_for_spring3222_x()%" )
      .setProperty("y","t")
      .setProperty("sizeX","%_model._method_for_spring3222_sizeX()%" )
      .setProperty("sizeY","0")
      .setProperty("lineColor","color2")
      .getObject();
    shape323 = (org.opensourcephysics.drawing2d.ElementShape)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlShape2D(),"shape323")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx2")
      .setProperty("x","x2")
      .setProperty("y","t")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ROUND_RECTANGLE")
      .setProperty("lineColor","color2")
      .setProperty("fillColor","color2")
      .getObject();
    shape3222 = (org.opensourcephysics.drawing2d.ElementShape)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlShape2D(),"shape3222")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx2")
      .setProperty("x","xsum")
      .setProperty("y","t")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("visible","showsum")
      .setProperty("style","ROUND_RECTANGLE")
      .setProperty("lineColor","colorsum")
      .setProperty("fillColor","colorsum")
      .getObject();
    panel = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"panel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","center")
      .setProperty("parent","bottom")
      .setProperty("layout","HBOX")
      .getObject();
    ButtonsPanel = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"ButtonsPanel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel")
      .setProperty("layout","HBOX")
      .getObject();
    A = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"A")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","ButtonsPanel")
      .setProperty("layout","VBOX")
      .getObject();
    panel635223 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"panel635223")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","A")
      .setProperty("layout","hbox")
      .getObject();
    label935223 = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"label935223")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel635223")
      .setProperty("text"," A = ")
      .setProperty("background","color1")
      .setProperty("foreground","white")
      .setProperty("tooltip","amplitude f object 1")
      .getObject();
    mass35223 = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlNumberField(),"mass35223")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel635223")
      .setProperty("variable","A")
      .setProperty("format","0.00")
      .setProperty("tooltip","amplitude f object 1")
      .getObject();
    label1035223 = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"label1035223")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel635223")
      .setProperty("text"," m ")
      .setProperty("background","color1")
      .setProperty("foreground","white")
      .setProperty("tooltip","metre")
      .getObject();
    amplitude = (org.colos.ejs.library.control.swing.JSliderDouble)
      addElement(new org.colos.ejs.library.control.swing.ControlSlider(),"amplitude")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","A")
      .setProperty("variable","A")
      .setProperty("minimum","0.1")
      .setProperty("maximum","1.0")
      .setProperty("ticks","10")
      .setProperty("closest","true")
      .setProperty("dragaction","_model._method_for_amplitude_dragaction()" )
      .setProperty("action","_model._method_for_amplitude_action()" )
      .setProperty("background","color1")
      .setProperty("foreground","white")
      .setProperty("tooltip","amplitude of object 1")
      .getObject();
    mass = (org.colos.ejs.library.control.swing.JSliderDouble)
      addElement(new org.colos.ejs.library.control.swing.ControlSlider(),"mass")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","ButtonsPanel")
      .setProperty("variable","m")
      .setProperty("minimum","0.5")
      .setProperty("maximum","4.0")
      .setProperty("format","m1 = 0.00 kg")
      .setProperty("ticks","8")
      .setProperty("closest","true")
      .setProperty("dragaction","_model._method_for_mass_dragaction()" )
      .setProperty("action","_model._method_for_mass_action()" )
      .setProperty("background","color1")
      .setProperty("foreground","white")
      .setProperty("tooltip","mass of object 1")
      .getObject();
    k = (org.colos.ejs.library.control.swing.JSliderDouble)
      addElement(new org.colos.ejs.library.control.swing.ControlSlider(),"k")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","ButtonsPanel")
      .setProperty("variable","k")
      .setProperty("minimum","0.5")
      .setProperty("maximum","4.0")
      .setProperty("format","k = 0.00 N/m#")
      .setProperty("ticks","8")
      .setProperty("closest","true")
      .setProperty("dragaction","_model._method_for_k_dragaction()" )
      .setProperty("action","_model._method_for_k_action()" )
      .setProperty("background","color1")
      .setProperty("foreground","white")
      .setProperty("tooltip","spring constant of object 1")
      .getObject();
    phase3 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"phase3")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","ButtonsPanel")
      .setProperty("layout","VBOX")
      .getObject();
    panel63522 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"panel63522")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","phase3")
      .setProperty("layout","hbox")
      .getObject();
    label93522 = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"label93522")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel63522")
      .setProperty("text"," $\\phi$1 = ")
      .setProperty("background","color1")
      .setProperty("foreground","white")
      .setProperty("tooltip","phase angle of object 1")
      .getObject();
    mass3522 = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlNumberField(),"mass3522")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel63522")
      .setProperty("variable","ctadeg")
      .setProperty("format","000")
      .setProperty("action","_model._method_for_mass3522_action()" )
      .setProperty("tooltip","phase angle of object 1")
      .getObject();
    label103522 = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"label103522")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel63522")
      .setProperty("text"," deg ")
      .setProperty("background","color1")
      .setProperty("foreground","white")
      .setProperty("tooltip","degrees")
      .getObject();
    panel3 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"panel3")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","phase3")
      .setProperty("layout","HBOX")
      .getObject();
    rotation2 = (javax.swing.JCheckBox)
      addElement(new org.colos.ejs.library.control.swing.ControlCheckBox(),"rotation2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel3")
      .setProperty("variable","rotation")
      .setProperty("actionon","_model._method_for_rotation2_actionon()" )
      .setProperty("actionoff","_model._method_for_rotation2_actionoff()" )
      .setProperty("background","color1")
      .setProperty("tooltip","rotate the other sense")
      .getObject();
    phase = (org.colos.ejs.library.control.swing.JSliderDouble)
      addElement(new org.colos.ejs.library.control.swing.ControlSlider(),"phase")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel3")
      .setProperty("variable","ctadeg")
      .setProperty("minimum","0.0")
      .setProperty("maximum","360")
      .setProperty("ticks","19")
      .setProperty("closest","true")
      .setProperty("dragaction","_model._method_for_phase_dragaction()" )
      .setProperty("action","_model._method_for_phase_action()" )
      .setProperty("background","color1")
      .setProperty("foreground","white")
      .setProperty("tooltip","phase angle of object 1")
      .getObject();
    A3 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"A3")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","ButtonsPanel")
      .setProperty("layout","VBOX")
      .getObject();
    panel6352232 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"panel6352232")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","A3")
      .setProperty("layout","hbox")
      .getObject();
    label9352232 = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"label9352232")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel6352232")
      .setProperty("text"," A2 = ")
      .setProperty("background","color2")
      .setProperty("tooltip","amplitude f object 1")
      .getObject();
    createControl50();
  }

  private void createControl50() {
    mass352232 = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlNumberField(),"mass352232")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel6352232")
      .setProperty("variable","A2")
      .setProperty("format","0.00")
      .setProperty("tooltip","amplitude f object 2")
      .getObject();
    label10352232 = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"label10352232")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel6352232")
      .setProperty("text"," m ")
      .setProperty("background","color2")
      .setProperty("tooltip","metre")
      .getObject();
    amplitude2 = (org.colos.ejs.library.control.swing.JSliderDouble)
      addElement(new org.colos.ejs.library.control.swing.ControlSlider(),"amplitude2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","A3")
      .setProperty("variable","A2")
      .setProperty("minimum","0.1")
      .setProperty("maximum","1")
      .setProperty("ticks","10")
      .setProperty("closest","true")
      .setProperty("dragaction","_model._method_for_amplitude2_dragaction()" )
      .setProperty("action","_model._method_for_amplitude2_action()" )
      .setProperty("background","color2")
      .setProperty("tooltip","amplitude of object 2")
      .getObject();
    mass2 = (org.colos.ejs.library.control.swing.JSliderDouble)
      addElement(new org.colos.ejs.library.control.swing.ControlSlider(),"mass2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","ButtonsPanel")
      .setProperty("variable","m2")
      .setProperty("minimum","0.5")
      .setProperty("maximum","4.0")
      .setProperty("format","m2 = 0.00 kg")
      .setProperty("ticks","8")
      .setProperty("closest","true")
      .setProperty("dragaction","_model._method_for_mass2_dragaction()" )
      .setProperty("action","_model._method_for_mass2_action()" )
      .setProperty("background","color2")
      .setProperty("tooltip","mass of object 1")
      .getObject();
    k2 = (org.colos.ejs.library.control.swing.JSliderDouble)
      addElement(new org.colos.ejs.library.control.swing.ControlSlider(),"k2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","ButtonsPanel")
      .setProperty("variable","k2")
      .setProperty("minimum","0.5")
      .setProperty("maximum","4.0")
      .setProperty("format","k = 0.00 N/m")
      .setProperty("ticks","8")
      .setProperty("closest","true")
      .setProperty("dragaction","_model._method_for_k2_dragaction()" )
      .setProperty("action","_model._method_for_k2_action()" )
      .setProperty("background","color2")
      .setProperty("tooltip","spring constant of object 2")
      .getObject();
    phase32 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"phase32")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","ButtonsPanel")
      .setProperty("layout","VBOX")
      .getObject();
    panel635222 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"panel635222")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","phase32")
      .setProperty("layout","hbox")
      .getObject();
    label935222 = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"label935222")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel635222")
      .setProperty("text"," $\\phi$2 = ")
      .setProperty("background","color2")
      .setProperty("tooltip","phase angle of object 2")
      .getObject();
    mass35222 = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlNumberField(),"mass35222")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel635222")
      .setProperty("variable","cta2deg")
      .setProperty("format","000")
      .setProperty("action","_model._method_for_mass35222_action()" )
      .setProperty("tooltip","phase angle of object 2")
      .getObject();
    label1035222 = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"label1035222")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel635222")
      .setProperty("text"," deg ")
      .setProperty("background","color2")
      .setProperty("tooltip","degrees")
      .getObject();
    panel4 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"panel4")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","phase32")
      .setProperty("layout","HBOX")
      .getObject();
    phase2 = (org.colos.ejs.library.control.swing.JSliderDouble)
      addElement(new org.colos.ejs.library.control.swing.ControlSlider(),"phase2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel4")
      .setProperty("variable","cta2deg")
      .setProperty("minimum","0.0")
      .setProperty("maximum","360")
      .setProperty("ticks","19")
      .setProperty("closest","true")
      .setProperty("dragaction","_model._method_for_phase2_dragaction()" )
      .setProperty("background","color2")
      .setProperty("tooltip","phase angle of object 2")
      .getObject();
    panel2 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"panel2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","north")
      .setProperty("parent","bottom")
      .setProperty("layout","HBOX")
      .getObject();
    PlotMotion = (javax.swing.JCheckBox)
      addElement(new org.colos.ejs.library.control.swing.ControlCheckBox(),"PlotMotion")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel2")
      .setProperty("variable","showPloty")
      .setProperty("tooltip","Show motion graphof y versus t")
      .getObject();
    PlotMotion2 = (javax.swing.JCheckBox)
      addElement(new org.colos.ejs.library.control.swing.ControlCheckBox(),"PlotMotion2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel2")
      .setProperty("variable","showPlotx")
      .setProperty("tooltip","Show motion graphof x versus t")
      .getObject();
    showsum = (javax.swing.JCheckBox)
      addElement(new org.colos.ejs.library.control.swing.ControlCheckBox(),"showsum")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel2")
      .setProperty("variable","showsum")
      .setProperty("tooltip","Show vector sum of object 1 and 2")
      .getObject();
    showhint = (javax.swing.JCheckBox)
      addElement(new org.colos.ejs.library.control.swing.ControlCheckBox(),"showhint")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel2")
      .setProperty("variable","showhint")
      .setProperty("tooltip","Show hint of phase lead of object 1 over object 2")
      .getObject();
    panel22 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"panel22")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel2")
      .setProperty("layout","HBOX")
      .getObject();
    label3 = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"label3")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel22")
      .setProperty("text"," $\\delta$$\\phi$ = ")
      .setProperty("tooltip","phase lead of object 1 over object 2 ")
      .getObject();
    ampvalue = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlParsedNumberField(),"ampvalue")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel22")
      .setProperty("variable","enterA1")
      .setProperty("format","0.##")
      .setProperty("editable","true")
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
    label32 = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"label32")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel22")
      .setProperty("text"," deg ")
      .setProperty("tooltip"," degree ")
      .getObject();
    label4 = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"label4")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel22")
      .setProperty("text","  yes  ")
      .setProperty("visible","%_model._method_for_label4_visible()%" )
      .setProperty("background","A1correctbackground")
      .getObject();
    label = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"label")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel22")
      .setProperty("text","  no  ")
      .setProperty("visible","%_model._method_for_label_visible()%" )
      .setProperty("background","A1correctbackground")
      .getObject();
    label2 = (javax.swing.JLabel)
      addElement(new org.colos.ejs.library.control.swing.ControlLabel(),"label2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel22")
      .setProperty("text","  No, hint: $\\delta$$\\phi$ = $\\phi$1 - $\\phi$2$  ")
      .setProperty("visible","%_model._method_for_label2_visible()%" )
      .setProperty("background","A1correctbackground")
      .getObject();
    bar = (org.colos.ejs.library.control.swing.JProgressBarDouble)
      addElement(new org.colos.ejs.library.control.swing.ControlBar(),"bar")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel2")
      .setProperty("variable","t")
      .setProperty("minimum","0.0")
      .setProperty("maximum","T")
      .setProperty("format","t = 0.00 s")
      .setProperty("tooltip","time in seconds")
      .getObject();
    playpause = (javax.swing.JButton)
      addElement(new org.colos.ejs.library.control.swing.ControlTwoStateButton(),"playpause")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel2")
      .setProperty("variable","_isPaused")
      .setProperty("font","Dialog,BOLD,16")
      .setProperty("imageOn","/org/opensourcephysics/resources/controls/images/play.gif")
      .setProperty("actionOn","_model._method_for_playpause_actionOn()" )
      .setProperty("imageOff","/org/opensourcephysics/resources/controls/images/pause.gif")
      .setProperty("actionOff","_model._method_for_playpause_actionOff()" )
      .getObject();
    stepforward = (javax.swing.JButton)
      addElement(new org.colos.ejs.library.control.swing.ControlButton(),"stepforward")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel2")
      .setProperty("image","/org/opensourcephysics/resources/controls/images/stepforward.gif")
      .setProperty("action","_model._method_for_stepforward_action()" )
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
    Reset = (javax.swing.JButton)
      addElement(new org.colos.ejs.library.control.swing.ControlButton(),"Reset")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel2")
      .setProperty("image","/org/opensourcephysics/resources/controls/images/reset.gif")
      .setProperty("action","_model._method_for_Reset_action()" )
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
    instructions = (javax.swing.JButton)
      addElement(new org.colos.ejs.library.control.swing.ControlButton(),"instructions")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","panel2")
      .setProperty("text","?")
      .setProperty("action","_model._method_for_instructions_action()" )
      .setProperty("visible","false")
      .setProperty("background","BLUE")
      .setProperty("foreground","YELLOW")
      .getObject();
    left = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"left")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","west")
      .setProperty("parent","MainWindow")
      .setProperty("layout","VBOX")
      .setProperty("visible","showPloty")
      .getObject();
    PositionGraphx = (org.opensourcephysics.drawing2d.PlottingPanel2D)
      addElement(new org.colos.ejs.library.control.swing.ControlPlottingPanel(),"PositionGraphx")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","center")
      .setProperty("parent","left")
      .setProperty("minimumY","ymin")
      .setProperty("maximumY","ymax")
      .setProperty("xMarginPercentage","10")
      .setProperty("title","Position y")
      .setProperty("titleX","Time (s)")
      .setProperty("titleY","Position (m)")
      .getObject();
    Displacement = (org.opensourcephysics.displayejs.InteractiveTrace)
      addElement(new org.colos.ejs.library.control.displayejs.ControlTrace(),"Displacement")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx")
      .setProperty("x","t")
      .setProperty("y","y")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","color1")
      .setProperty("stroke","2")
      .getObject();
    Displacement2 = (org.opensourcephysics.displayejs.InteractiveTrace)
      addElement(new org.colos.ejs.library.control.displayejs.ControlTrace(),"Displacement2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx")
      .setProperty("x","t")
      .setProperty("y","y2")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","color2")
      .setProperty("stroke","2")
      .getObject();
    Displacementsum = (org.opensourcephysics.displayejs.InteractiveTrace)
      addElement(new org.colos.ejs.library.control.displayejs.ControlTrace(),"Displacementsum")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx")
      .setProperty("x","t")
      .setProperty("y","ysum")
      .setProperty("visible","showsum")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","colorsum")
      .setProperty("stroke","2")
      .getObject();
    spring32 = (org.opensourcephysics.drawing2d.ElementSpring)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlSpring2D(),"spring32")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx")
      .setProperty("x","t")
      .setProperty("y","ymax")
      .setProperty("sizeX","0")
      .setProperty("sizeY","%_model._method_for_spring32_sizeY()%" )
      .setProperty("radius","0.5")
      .setProperty("lineColor","color1")
      .getObject();
    shape3 = (org.opensourcephysics.drawing2d.ElementShape)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlShape2D(),"shape3")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx")
      .setProperty("x","t")
      .setProperty("y","y")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ROUND_RECTANGLE")
      .setProperty("lineColor","color1")
      .setProperty("fillColor","color1")
      .getObject();
    spring322 = (org.opensourcephysics.drawing2d.ElementSpring)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlSpring2D(),"spring322")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx")
      .setProperty("x","t")
      .setProperty("y","ymax")
      .setProperty("sizeX","0")
      .setProperty("sizeY","%_model._method_for_spring322_sizeY()%" )
      .setProperty("radius","0.5")
      .setProperty("lineColor","color2")
      .getObject();
    shape32 = (org.opensourcephysics.drawing2d.ElementShape)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlShape2D(),"shape32")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx")
      .setProperty("x","t")
      .setProperty("y","y2")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ROUND_RECTANGLE")
      .setProperty("lineColor","color2")
      .setProperty("fillColor","color2")
      .getObject();
    shape322 = (org.opensourcephysics.drawing2d.ElementShape)
      addElement(new org.colos.ejs.library.control.drawing2d.ControlShape2D(),"shape322")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PositionGraphx")
      .setProperty("x","t")
      .setProperty("y","ysum")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("visible","showsum")
      .setProperty("style","ROUND_RECTANGLE")
      .setProperty("lineColor","colorsum")
      .setProperty("fillColor","colorsum")
      .getObject();
    VelocityGraph = (org.opensourcephysics.drawing2d.PlottingPanel2D)
      addElement(new org.colos.ejs.library.control.swing.ControlPlottingPanel(),"VelocityGraph")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","north")
      .setProperty("parent","left")
      .setProperty("autoscaleX","true")
      .setProperty("autoscaleY","true")
      .setProperty("minimumY","-0.5")
      .setProperty("maximumY","0.5")
      .setProperty("title","Velocity")
      .setProperty("titleX","Time (s)")
      .setProperty("titleY","v (m/s)")
      .setProperty("visible","false")
      .getObject();
    Velocity = (org.opensourcephysics.displayejs.InteractiveTrace)
      addElement(new org.colos.ejs.library.control.displayejs.ControlTrace(),"Velocity")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","VelocityGraph")
      .setProperty("x","t")
      .setProperty("y","v")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","192,0,0")
      .setProperty("stroke","2")
      .getObject();
    Velocity2 = (org.opensourcephysics.displayejs.InteractiveTrace)
      addElement(new org.colos.ejs.library.control.displayejs.ControlTrace(),"Velocity2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","VelocityGraph")
      .setProperty("x","t")
      .setProperty("y","v2")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","0,128,64")
      .setProperty("stroke","2")
      .getObject();
    AccelerationGraph = (org.opensourcephysics.drawing2d.PlottingPanel2D)
      addElement(new org.colos.ejs.library.control.swing.ControlPlottingPanel(),"AccelerationGraph")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","south")
      .setProperty("parent","left")
      .setProperty("autoscaleX","true")
      .setProperty("autoscaleY","true")
      .setProperty("minimumY","%_model._method_for_AccelerationGraph_minimumY()%" )
      .setProperty("maximumY","%_model._method_for_AccelerationGraph_maximumY()%" )
      .setProperty("title","Acceleration")
      .setProperty("titleX","Time (s)")
      .setProperty("titleY","a in m/s^2")
      .setProperty("visible","false")
      .getObject();
    Acceleration = (org.opensourcephysics.displayejs.InteractiveTrace)
      addElement(new org.colos.ejs.library.control.displayejs.ControlTrace(),"Acceleration")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","AccelerationGraph")
      .setProperty("x","t")
      .setProperty("y","a")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","192,0,0")
      .setProperty("stroke","2")
      .getObject();
    Acceleration2 = (org.opensourcephysics.displayejs.InteractiveTrace)
      addElement(new org.colos.ejs.library.control.displayejs.ControlTrace(),"Acceleration2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","AccelerationGraph")
      .setProperty("x","t")
      .setProperty("y","a2")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","0,128,64")
      .setProperty("stroke","2")
      .getObject();
    helpBox = (java.awt.Component)
      addElement(new org.colos.ejs.library.control.swing.ControlFrame(),"helpBox")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("waitForReset","true")
      .setProperty("title","Help")
      .setProperty("layout","grid:0,1,0,0")
      .setProperty("visible","false")
      .setProperty("onClosing","_model._method_for_helpBox_onClosing()" )
      .setProperty("location","167,22")
      .setProperty("size","764,308")
      .getObject();
    line1 = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlTextField(),"line1")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","helpBox")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
    line2 = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlTextField(),"line2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","helpBox")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
    line3 = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlTextField(),"line3")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","helpBox")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
    line3b = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlTextField(),"line3b")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","helpBox")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
    createControl100();
  }

  private void createControl100() {
    line5 = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlTextField(),"line5")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","helpBox")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
    line4 = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlTextField(),"line4")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","helpBox")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
    line6 = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlTextField(),"line6")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","helpBox")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
    line6b = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlTextField(),"line6b")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","helpBox")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
    line7 = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlTextField(),"line7")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","helpBox")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
    line8 = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlTextField(),"line8")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","helpBox")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
    line9 = (javax.swing.JTextField)
      addElement(new org.colos.ejs.library.control.swing.ControlTextField(),"line9")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","helpBox")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16")
      .getObject();
  }

// ---------- Resetting the interface  -------------------

  public void reset() {
    getElement("MainWindow")
      .setProperty("title","The Connection between Simple Harmonic Motion and Circular Motion")
      .setProperty("visible","true");
    getElement("centre");
    getElement("plottingPanel")
      .setProperty("autoscaleX","false")
      .setProperty("autoscaleY","false")
      .setProperty("square","true")
      .setProperty("title","Circular Motion")
      .setProperty("titleX","position x")
      .setProperty("titleY","position y");
    getElement("angle")
      .setProperty("x","0")
      .setProperty("y","0")
      .setProperty("lineColor","0,192,255,255")
      .setProperty("fillColor","0,192,255,255");
    getElement("text")
      .setProperty("pixelSize","true");
    getElement("shape")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ELLIPSE");
    getElement("shape2")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ELLIPSE");
    getElement("trail3")
      .setProperty("maximumPoints","400")
      .setProperty("norepeat","true")
      .setProperty("lineWidth","2");
    getElement("trail22")
      .setProperty("maximumPoints","400")
      .setProperty("norepeat","true")
      .setProperty("lineWidth","2");
    getElement("A1")
      .setProperty("x","0")
      .setProperty("y","0");
    getElement("A2")
      .setProperty("x","0")
      .setProperty("y","0");
    getElement("sum");
    getElement("shape222")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ELLIPSE");
    getElement("trail2222")
      .setProperty("maximumPoints","400")
      .setProperty("norepeat","true")
      .setProperty("lineWidth","2");
    getElement("arrow2")
      .setProperty("x","0")
      .setProperty("y","0");
    getElement("bottom");
    getElement("bottom2");
    getElement("PositionGraphx2")
      .setProperty("yMarginPercentage","5")
      .setProperty("title","Time (s)")
      .setProperty("titleX","Position x")
      .setProperty("titleY","Position (m)");
    getElement("Displacement3")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("stroke","2");
    getElement("Displacement22")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("stroke","2");
    getElement("Displacementsum2")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("stroke","2");
    getElement("spring323")
      .setProperty("sizeY","0");
    getElement("shape33")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ROUND_RECTANGLE");
    getElement("spring33")
      .setProperty("sizeY","0")
      .setProperty("visible","false");
    getElement("spring3222")
      .setProperty("sizeY","0");
    getElement("shape323")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ROUND_RECTANGLE");
    getElement("shape3222")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ROUND_RECTANGLE");
    getElement("panel");
    getElement("ButtonsPanel");
    getElement("A");
    getElement("panel635223");
    getElement("label935223")
      .setProperty("text"," A = ")
      .setProperty("foreground","white")
      .setProperty("tooltip","amplitude f object 1");
    getElement("mass35223")
      .setProperty("format","0.00")
      .setProperty("tooltip","amplitude f object 1");
    getElement("label1035223")
      .setProperty("text"," m ")
      .setProperty("foreground","white")
      .setProperty("tooltip","metre");
    getElement("amplitude")
      .setProperty("minimum","0.1")
      .setProperty("maximum","1.0")
      .setProperty("ticks","10")
      .setProperty("closest","true")
      .setProperty("foreground","white")
      .setProperty("tooltip","amplitude of object 1");
    getElement("mass")
      .setProperty("minimum","0.5")
      .setProperty("maximum","4.0")
      .setProperty("format","m1 = 0.00 kg")
      .setProperty("ticks","8")
      .setProperty("closest","true")
      .setProperty("foreground","white")
      .setProperty("tooltip","mass of object 1");
    getElement("k")
      .setProperty("minimum","0.5")
      .setProperty("maximum","4.0")
      .setProperty("format","k = 0.00 N/m#")
      .setProperty("ticks","8")
      .setProperty("closest","true")
      .setProperty("foreground","white")
      .setProperty("tooltip","spring constant of object 1");
    getElement("phase3");
    getElement("panel63522");
    getElement("label93522")
      .setProperty("text"," $\\phi$1 = ")
      .setProperty("foreground","white")
      .setProperty("tooltip","phase angle of object 1");
    getElement("mass3522")
      .setProperty("format","000")
      .setProperty("tooltip","phase angle of object 1");
    getElement("label103522")
      .setProperty("text"," deg ")
      .setProperty("foreground","white")
      .setProperty("tooltip","degrees");
    getElement("panel3");
    getElement("rotation2")
      .setProperty("tooltip","rotate the other sense");
    getElement("phase")
      .setProperty("minimum","0.0")
      .setProperty("maximum","360")
      .setProperty("ticks","19")
      .setProperty("closest","true")
      .setProperty("foreground","white")
      .setProperty("tooltip","phase angle of object 1");
    getElement("A3");
    getElement("panel6352232");
    getElement("label9352232")
      .setProperty("text"," A2 = ")
      .setProperty("tooltip","amplitude f object 1");
    getElement("mass352232")
      .setProperty("format","0.00")
      .setProperty("tooltip","amplitude f object 2");
    getElement("label10352232")
      .setProperty("text"," m ")
      .setProperty("tooltip","metre");
    getElement("amplitude2")
      .setProperty("minimum","0.1")
      .setProperty("maximum","1")
      .setProperty("ticks","10")
      .setProperty("closest","true")
      .setProperty("tooltip","amplitude of object 2");
    getElement("mass2")
      .setProperty("minimum","0.5")
      .setProperty("maximum","4.0")
      .setProperty("format","m2 = 0.00 kg")
      .setProperty("ticks","8")
      .setProperty("closest","true")
      .setProperty("tooltip","mass of object 1");
    getElement("k2")
      .setProperty("minimum","0.5")
      .setProperty("maximum","4.0")
      .setProperty("format","k = 0.00 N/m")
      .setProperty("ticks","8")
      .setProperty("closest","true")
      .setProperty("tooltip","spring constant of object 2");
    getElement("phase32");
    getElement("panel635222");
    getElement("label935222")
      .setProperty("text"," $\\phi$2 = ")
      .setProperty("tooltip","phase angle of object 2");
    getElement("mass35222")
      .setProperty("format","000")
      .setProperty("tooltip","phase angle of object 2");
    getElement("label1035222")
      .setProperty("text"," deg ")
      .setProperty("tooltip","degrees");
    getElement("panel4");
    getElement("phase2")
      .setProperty("minimum","0.0")
      .setProperty("maximum","360")
      .setProperty("ticks","19")
      .setProperty("closest","true")
      .setProperty("tooltip","phase angle of object 2");
    getElement("panel2");
    getElement("PlotMotion")
      .setProperty("tooltip","Show motion graphof y versus t");
    getElement("PlotMotion2")
      .setProperty("tooltip","Show motion graphof x versus t");
    getElement("showsum")
      .setProperty("tooltip","Show vector sum of object 1 and 2");
    getElement("showhint")
      .setProperty("tooltip","Show hint of phase lead of object 1 over object 2");
    getElement("panel22");
    getElement("label3")
      .setProperty("text"," $\\delta$$\\phi$ = ")
      .setProperty("tooltip","phase lead of object 1 over object 2 ");
    getElement("ampvalue")
      .setProperty("format","0.##")
      .setProperty("editable","true")
      .setProperty("font","Dialog,BOLD,16");
    getElement("label32")
      .setProperty("text"," deg ")
      .setProperty("tooltip"," degree ");
    getElement("label4")
      .setProperty("text","  yes  ");
    getElement("label")
      .setProperty("text","  no  ");
    getElement("label2")
      .setProperty("text","  No, hint: $\\delta$$\\phi$ = $\\phi$1 - $\\phi$2$  ");
    getElement("bar")
      .setProperty("minimum","0.0")
      .setProperty("format","t = 0.00 s")
      .setProperty("tooltip","time in seconds");
    getElement("playpause")
      .setProperty("font","Dialog,BOLD,16")
      .setProperty("imageOn","/org/opensourcephysics/resources/controls/images/play.gif")
      .setProperty("imageOff","/org/opensourcephysics/resources/controls/images/pause.gif");
    getElement("stepforward")
      .setProperty("image","/org/opensourcephysics/resources/controls/images/stepforward.gif")
      .setProperty("font","Dialog,BOLD,16");
    getElement("Reset")
      .setProperty("image","/org/opensourcephysics/resources/controls/images/reset.gif")
      .setProperty("font","Dialog,BOLD,16");
    getElement("instructions")
      .setProperty("text","?")
      .setProperty("visible","false")
      .setProperty("background","BLUE")
      .setProperty("foreground","YELLOW");
    getElement("left");
    getElement("PositionGraphx")
      .setProperty("xMarginPercentage","10")
      .setProperty("title","Position y")
      .setProperty("titleX","Time (s)")
      .setProperty("titleY","Position (m)");
    getElement("Displacement")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("stroke","2");
    getElement("Displacement2")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("stroke","2");
    getElement("Displacementsum")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("stroke","2");
    getElement("spring32")
      .setProperty("sizeX","0")
      .setProperty("radius","0.5");
    getElement("shape3")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ROUND_RECTANGLE");
    getElement("spring322")
      .setProperty("sizeX","0")
      .setProperty("radius","0.5");
    getElement("shape32")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ROUND_RECTANGLE");
    getElement("shape322")
      .setProperty("sizeX","5")
      .setProperty("sizeY","5")
      .setProperty("pixelSize","true")
      .setProperty("style","ROUND_RECTANGLE");
    getElement("VelocityGraph")
      .setProperty("autoscaleX","true")
      .setProperty("autoscaleY","true")
      .setProperty("minimumY","-0.5")
      .setProperty("maximumY","0.5")
      .setProperty("title","Velocity")
      .setProperty("titleX","Time (s)")
      .setProperty("titleY","v (m/s)")
      .setProperty("visible","false");
    getElement("Velocity")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","192,0,0")
      .setProperty("stroke","2");
    getElement("Velocity2")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","0,128,64")
      .setProperty("stroke","2");
    getElement("AccelerationGraph")
      .setProperty("autoscaleX","true")
      .setProperty("autoscaleY","true")
      .setProperty("title","Acceleration")
      .setProperty("titleX","Time (s)")
      .setProperty("titleY","a in m/s^2")
      .setProperty("visible","false");
    getElement("Acceleration")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","192,0,0")
      .setProperty("stroke","2");
    getElement("Acceleration2")
      .setProperty("maxpoints","400")
      .setProperty("norepeat","true")
      .setProperty("connected","true")
      .setProperty("color","0,128,64")
      .setProperty("stroke","2");
    getElement("helpBox")
      .setProperty("title","Help")
      .setProperty("visible","false");
    getElement("line1")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16");
    getElement("line2")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16");
    getElement("line3")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16");
    getElement("line3b")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16");
    getElement("line5")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16");
    getElement("line4")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16");
    getElement("line6")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16");
    getElement("line6b")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16");
    getElement("line7")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16");
    getElement("line8")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16");
    getElement("line9")
      .setProperty("editable","false")
      .setProperty("font","Dialog,BOLD,16");
    __m_canBeChanged__ = true; // Variables.basic variables:1
    __m2_canBeChanged__ = true; // Variables.basic variables:2
    __k_canBeChanged__ = true; // Variables.basic variables:3
    __k2_canBeChanged__ = true; // Variables.basic variables:4
    __A_canBeChanged__ = true; // Variables.basic variables:5
    __A2_canBeChanged__ = true; // Variables.basic variables:6
    __phase_canBeChanged__ = true; // Variables.basic variables:7
    __phase2_canBeChanged__ = true; // Variables.basic variables:8
    __theta_canBeChanged__ = true; // Variables.basic variables:9
    __theta2_canBeChanged__ = true; // Variables.basic variables:10
    __omega_canBeChanged__ = true; // Variables.basic variables:11
    __omega2_canBeChanged__ = true; // Variables.basic variables:12
    __L_canBeChanged__ = true; // Variables.basic variables:13
    __x_canBeChanged__ = true; // Variables.basic variables:14
    __x2_canBeChanged__ = true; // Variables.basic variables:15
    __y0_canBeChanged__ = true; // Variables.basic variables:16
    __y_canBeChanged__ = true; // Variables.basic variables:17
    __y02_canBeChanged__ = true; // Variables.basic variables:18
    __y2_canBeChanged__ = true; // Variables.basic variables:19
    __v_canBeChanged__ = true; // Variables.basic variables:20
    __v2_canBeChanged__ = true; // Variables.basic variables:21
    __a_canBeChanged__ = true; // Variables.basic variables:22
    __a2_canBeChanged__ = true; // Variables.basic variables:23
    __t_canBeChanged__ = true; // Variables.basic variables:24
    __dt_canBeChanged__ = true; // Variables.basic variables:25
    __PE_canBeChanged__ = true; // Variables.basic variables:26
    __PE2_canBeChanged__ = true; // Variables.basic variables:27
    __KE_canBeChanged__ = true; // Variables.basic variables:28
    __KE2_canBeChanged__ = true; // Variables.basic variables:29
    __EMax_canBeChanged__ = true; // Variables.basic variables:30
    __EMax2_canBeChanged__ = true; // Variables.basic variables:31
    __newEMax_canBeChanged__ = true; // Variables.basic variables:32
    __helpLabel_canBeChanged__ = true; // Variables.basic variables:33
    __helpFlag_canBeChanged__ = true; // Variables.basic variables:34
    __numTicks_canBeChanged__ = true; // Variables.basic variables:35
    __xTicks_canBeChanged__ = true; // Variables.basic variables:36
    __i_canBeChanged__ = true; // Variables.basic variables:37
    __color1_canBeChanged__ = true; // Variables.lookang:1
    __color2_canBeChanged__ = true; // Variables.lookang:2
    __colorsum_canBeChanged__ = true; // Variables.lookang:3
    __pi_canBeChanged__ = true; // Variables.lookang:4
    __cta_canBeChanged__ = true; // Variables.lookang:5
    __cta2_canBeChanged__ = true; // Variables.lookang:6
    __Asum_canBeChanged__ = true; // Variables.lookang:7
    __xsum_canBeChanged__ = true; // Variables.lookang:8
    __ysum_canBeChanged__ = true; // Variables.lookang:9
    __phasesum_canBeChanged__ = true; // Variables.lookang:10
    __showPloty_canBeChanged__ = true; // Variables.lookang:11
    __showPlotx_canBeChanged__ = true; // Variables.lookang:12
    __showsum_canBeChanged__ = true; // Variables.lookang:13
    __T_canBeChanged__ = true; // Variables.lookang:14
    __ctadeg_canBeChanged__ = true; // Variables.lookang:15
    __cta2deg_canBeChanged__ = true; // Variables.lookang:16
    __rotation_canBeChanged__ = true; // Variables.lookang:17
    __rotation2_canBeChanged__ = true; // Variables.lookang:18
    __sign_canBeChanged__ = true; // Variables.lookang:19
    __sign2_canBeChanged__ = true; // Variables.lookang:20
    __A1correct_canBeChanged__ = true; // Variables.answerscheck:1
    __enterA1_canBeChanged__ = true; // Variables.answerscheck:2
    __A1correctbackground_canBeChanged__ = true; // Variables.answerscheck:3
    __showhint_canBeChanged__ = true; // Variables.answerscheck:4
    __Answer_canBeChanged__ = true; // Variables.answerscheck:5
    __answertext_canBeChanged__ = true; // Variables.answerscheck:6
    __dcangle_canBeChanged__ = true; // Variables.angle:1
    __nangle_canBeChanged__ = true; // Variables.angle:2
    __px_canBeChanged__ = true; // Variables.angle:3
    __py_canBeChanged__ = true; // Variables.angle:4
    __c_canBeChanged__ = true; // Variables.angle:5
    __R_canBeChanged__ = true; // Variables.view:1
    __xmin_canBeChanged__ = true; // Variables.view:2
    __xmax_canBeChanged__ = true; // Variables.view:3
    __ymin_canBeChanged__ = true; // Variables.view:4
    __ymax_canBeChanged__ = true; // Variables.view:5
    super.reset();
  }

} // End of class reference_circle_v2weeView

