/*
 * Class : gaussianView.java
 *  Generated using  *  Easy Java/Javascript Simulations Version 5.3, build 250218. Visit http://www.um.es/fem/Ejs
 */ 

package users.br.ahmed.gaussian_pkg;

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

class gaussianView extends org.colos.ejs.library.control.EjsControl implements org.colos.ejs.library.View {
  private gaussianSimulation _simulation=null;
  private gaussian _model=null;

  // Public variables for wrapped view elements:
  public java.awt.Component Frame;
  public javax.swing.JPanel Panel;
  public javax.swing.JPanel Panel1;
  public javax.swing.JButton reset;
  public javax.swing.JButton initialize;
  public javax.swing.JButton twoStateButton;
  public javax.swing.JCheckBox hundred;
  public javax.swing.JPanel Panel3;
  public org.opensourcephysics.drawing2d.DrawingPanel2D DrawingPanel;
  public org.opensourcephysics.displayejs.ElementSet ParticleSet;
  public org.opensourcephysics.displayejs.ElementSet TextSet;
  public org.opensourcephysics.displayejs.InteractiveText Text;
  public org.opensourcephysics.drawing2d.PlottingPanel2D PlottingPanel;
  public org.opensourcephysics.displayejs.ElementSet ParticleSet2;
  public org.opensourcephysics.displayejs.InteractivePoligon AnalyticCurve;

  // private variables to block changes in the view variables:
  private boolean __range_canBeChanged__ = true; // Variables.coordinate:1
  private boolean __xmin_canBeChanged__ = true; // Variables.coordinate:2
  private boolean __xmax_canBeChanged__ = true; // Variables.coordinate:3
  private boolean __ymin_canBeChanged__ = true; // Variables.coordinate:4
  private boolean __ymax_canBeChanged__ = true; // Variables.coordinate:5
  private boolean __t_canBeChanged__ = true; // Variables.coordinate:6
  private boolean __dt_canBeChanged__ = true; // Variables.coordinate:7
  private boolean __size_canBeChanged__ = true; // Variables.coordinate:8
  private boolean __label_canBeChanged__ = true; // Variables.coordinate:9
  private boolean __w_canBeChanged__ = true; // Variables.coordinate:10
  private boolean __hundred_canBeChanged__ = true; // Variables.coordinate:11
  private boolean __v_canBeChanged__ = true; // Variables.coordinate:12
  private boolean __sigma2_canBeChanged__ = true; // Variables.coordinate:13
  private boolean __l_play_canBeChanged__ = true; // Variables.language:1
  private boolean __l_pause_canBeChanged__ = true; // Variables.language:2
  private boolean __l_reset_canBeChanged__ = true; // Variables.language:3
  private boolean __l_init_canBeChanged__ = true; // Variables.language:4
  private boolean __l_hundred_canBeChanged__ = true; // Variables.language:5
  private boolean __l_title_canBeChanged__ = true; // Variables.language:6
  private boolean __l_msg_canBeChanged__ = true; // Variables.language:7
  private boolean __n_canBeChanged__ = true; // Variables.basic:1
  private boolean __n2_canBeChanged__ = true; // Variables.basic:2
  private boolean __n1_canBeChanged__ = true; // Variables.basic:3
  private boolean __n21_canBeChanged__ = true; // Variables.basic:4
  private boolean __x_canBeChanged__ = true; // Variables.basic:5
  private boolean __y_canBeChanged__ = true; // Variables.basic:6
  private boolean __count_canBeChanged__ = true; // Variables.basic:7
  private boolean __xp_canBeChanged__ = true; // Variables.basic:8
  private boolean __yp_canBeChanged__ = true; // Variables.basic:9
  private boolean __txt_canBeChanged__ = true; // Variables.basic:10
  private boolean __color_canBeChanged__ = true; // Variables.basic:11
  private boolean __blue_canBeChanged__ = true; // Variables.basic:12
  private boolean __red_canBeChanged__ = true; // Variables.basic:13
  private boolean __black_canBeChanged__ = true; // Variables.basic:14
  private boolean __clr_canBeChanged__ = true; // Variables.basic:15
  private boolean __cmax_canBeChanged__ = true; // Variables.basic:16
  private boolean __total_canBeChanged__ = true; // Variables.basic:17
  private boolean __testcount_canBeChanged__ = true; // Variables.basic:18
  private boolean __title_canBeChanged__ = true; // Variables.basic:19
  private boolean __cst_canBeChanged__ = true; // Variables.basic:20

// ---------- Class constructor -------------------

  public gaussianView (gaussianSimulation _sim, String _replaceName, java.awt.Frame _replaceOwnerFrame) {
    super(_sim,_replaceName,_replaceOwnerFrame);
    _simulation = _sim;
    _model = (gaussian) _sim.getModel();
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
    addListener("range"); // Variables.coordinate:1
    addListener("xmin"); // Variables.coordinate:2
    addListener("xmax"); // Variables.coordinate:3
    addListener("ymin"); // Variables.coordinate:4
    addListener("ymax"); // Variables.coordinate:5
    addListener("t"); // Variables.coordinate:6
    addListener("dt"); // Variables.coordinate:7
    addListener("size"); // Variables.coordinate:8
    addListener("label"); // Variables.coordinate:9
    addListener("w"); // Variables.coordinate:10
    addListener("hundred"); // Variables.coordinate:11
    addListener("v"); // Variables.coordinate:12
    addListener("sigma2"); // Variables.coordinate:13
    addListener("l_play"); // Variables.language:1
    addListener("l_pause"); // Variables.language:2
    addListener("l_reset"); // Variables.language:3
    addListener("l_init"); // Variables.language:4
    addListener("l_hundred"); // Variables.language:5
    addListener("l_title"); // Variables.language:6
    addListener("l_msg"); // Variables.language:7
    addListener("n"); // Variables.basic:1
    addListener("n2"); // Variables.basic:2
    addListener("n1"); // Variables.basic:3
    addListener("n21"); // Variables.basic:4
    addListener("x"); // Variables.basic:5
    addListener("y"); // Variables.basic:6
    addListener("count"); // Variables.basic:7
    addListener("xp"); // Variables.basic:8
    addListener("yp"); // Variables.basic:9
    addListener("txt"); // Variables.basic:10
    addListener("color"); // Variables.basic:11
    addListener("blue"); // Variables.basic:12
    addListener("red"); // Variables.basic:13
    addListener("black"); // Variables.basic:14
    addListener("clr"); // Variables.basic:15
    addListener("cmax"); // Variables.basic:16
    addListener("total"); // Variables.basic:17
    addListener("testcount"); // Variables.basic:18
    addListener("title"); // Variables.basic:19
    addListener("cst"); // Variables.basic:20
  }

// ---------- Implementation of View -------------------

  public void read() {
    // Ejs requires no read(). Actually, having it might cause problems!
  }

  @SuppressWarnings("unchecked")
  public void read(String _variable) {
    if ("range".equals(_variable)) {
      _model.range = getDouble("range"); // Variables.coordinate:1
      __range_canBeChanged__ = true;
    }
    if ("xmin".equals(_variable)) {
      _model.xmin = getDouble("xmin"); // Variables.coordinate:2
      __xmin_canBeChanged__ = true;
    }
    if ("xmax".equals(_variable)) {
      _model.xmax = getDouble("xmax"); // Variables.coordinate:3
      __xmax_canBeChanged__ = true;
    }
    if ("ymin".equals(_variable)) {
      _model.ymin = getDouble("ymin"); // Variables.coordinate:4
      __ymin_canBeChanged__ = true;
    }
    if ("ymax".equals(_variable)) {
      _model.ymax = getDouble("ymax"); // Variables.coordinate:5
      __ymax_canBeChanged__ = true;
    }
    if ("t".equals(_variable)) {
      _model.t = getDouble("t"); // Variables.coordinate:6
      __t_canBeChanged__ = true;
    }
    if ("dt".equals(_variable)) {
      _model.dt = getDouble("dt"); // Variables.coordinate:7
      __dt_canBeChanged__ = true;
    }
    if ("size".equals(_variable)) {
      _model.size = getDouble("size"); // Variables.coordinate:8
      __size_canBeChanged__ = true;
    }
    if ("label".equals(_variable)) {
      _model.label = getString("label"); // Variables.coordinate:9
      __label_canBeChanged__ = true;
    }
    if ("w".equals(_variable)) {
      _model.w = getDouble("w"); // Variables.coordinate:10
      __w_canBeChanged__ = true;
    }
    if ("hundred".equals(_variable)) {
      _model.hundred = getBoolean("hundred"); // Variables.coordinate:11
      __hundred_canBeChanged__ = true;
    }
    if ("v".equals(_variable)) {
      _model.v = getDouble("v"); // Variables.coordinate:12
      __v_canBeChanged__ = true;
    }
    if ("sigma2".equals(_variable)) {
      _model.sigma2 = getDouble("sigma2"); // Variables.coordinate:13
      __sigma2_canBeChanged__ = true;
    }
    if ("l_play".equals(_variable)) {
      _model.l_play = getString("l_play"); // Variables.language:1
      __l_play_canBeChanged__ = true;
    }
    if ("l_pause".equals(_variable)) {
      _model.l_pause = getString("l_pause"); // Variables.language:2
      __l_pause_canBeChanged__ = true;
    }
    if ("l_reset".equals(_variable)) {
      _model.l_reset = getString("l_reset"); // Variables.language:3
      __l_reset_canBeChanged__ = true;
    }
    if ("l_init".equals(_variable)) {
      _model.l_init = getString("l_init"); // Variables.language:4
      __l_init_canBeChanged__ = true;
    }
    if ("l_hundred".equals(_variable)) {
      _model.l_hundred = getString("l_hundred"); // Variables.language:5
      __l_hundred_canBeChanged__ = true;
    }
    if ("l_title".equals(_variable)) {
      _model.l_title = getString("l_title"); // Variables.language:6
      __l_title_canBeChanged__ = true;
    }
    if ("l_msg".equals(_variable)) {
      _model.l_msg = getString("l_msg"); // Variables.language:7
      __l_msg_canBeChanged__ = true;
    }
    if ("n".equals(_variable)) {
      _model.n = getInt("n"); // Variables.basic:1
      __n_canBeChanged__ = true;
    }
    if ("n2".equals(_variable)) {
      _model.n2 = getInt("n2"); // Variables.basic:2
      __n2_canBeChanged__ = true;
    }
    if ("n1".equals(_variable)) {
      _model.n1 = getInt("n1"); // Variables.basic:3
      __n1_canBeChanged__ = true;
    }
    if ("n21".equals(_variable)) {
      _model.n21 = getInt("n21"); // Variables.basic:4
      __n21_canBeChanged__ = true;
    }
    if ("x".equals(_variable)) {
      double[] _data = (double[]) getValue("x").getObject();
      int _n0 = _data.length;
      if (_n0>_model.x.length) _n0 = _model.x.length;
      for (int _i0=0; _i0<_n0; _i0++) {
        _model.x[_i0] = _data[_i0];
      }
      __x_canBeChanged__ = true;
    }
    if ("y".equals(_variable)) {
      double[] _data = (double[]) getValue("y").getObject();
      int _n0 = _data.length;
      if (_n0>_model.y.length) _n0 = _model.y.length;
      for (int _i0=0; _i0<_n0; _i0++) {
        _model.y[_i0] = _data[_i0];
      }
      __y_canBeChanged__ = true;
    }
    if ("count".equals(_variable)) {
      double[] _data = (double[]) getValue("count").getObject();
      int _n0 = _data.length;
      if (_n0>_model.count.length) _n0 = _model.count.length;
      for (int _i0=0; _i0<_n0; _i0++) {
        _model.count[_i0] = _data[_i0];
      }
      __count_canBeChanged__ = true;
    }
    if ("xp".equals(_variable)) {
      double[] _data = (double[]) getValue("xp").getObject();
      int _n0 = _data.length;
      if (_n0>_model.xp.length) _n0 = _model.xp.length;
      for (int _i0=0; _i0<_n0; _i0++) {
        _model.xp[_i0] = _data[_i0];
      }
      __xp_canBeChanged__ = true;
    }
    if ("yp".equals(_variable)) {
      double[] _data = (double[]) getValue("yp").getObject();
      int _n0 = _data.length;
      if (_n0>_model.yp.length) _n0 = _model.yp.length;
      for (int _i0=0; _i0<_n0; _i0++) {
        _model.yp[_i0] = _data[_i0];
      }
      __yp_canBeChanged__ = true;
    }
    if ("txt".equals(_variable)) {
      String[] _data = (String[]) getValue("txt").getObject();
      int _n0 = _data.length;
      if (_n0>_model.txt.length) _n0 = _model.txt.length;
      for (int _i0=0; _i0<_n0; _i0++) {
        _model.txt[_i0] = _data[_i0];
      }
      __txt_canBeChanged__ = true;
    }
    if ("color".equals(_variable)) {
      Object[] _data = (Object[]) getValue("color").getObject();
      int _n0 = _data.length;
      if (_n0>_model.color.length) _n0 = _model.color.length;
      for (int _i0=0; _i0<_n0; _i0++) {
        _model.color[_i0] = _data[_i0];
      }
      __color_canBeChanged__ = true;
    }
    if ("blue".equals(_variable)) {
      _model.blue = getObject("blue"); // Variables.basic:12
      __blue_canBeChanged__ = true;
    }
    if ("red".equals(_variable)) {
      _model.red = getObject("red"); // Variables.basic:13
      __red_canBeChanged__ = true;
    }
    if ("black".equals(_variable)) {
      _model.black = getObject("black"); // Variables.basic:14
      __black_canBeChanged__ = true;
    }
    if ("clr".equals(_variable)) {
      _model.clr = getObject("clr"); // Variables.basic:15
      __clr_canBeChanged__ = true;
    }
    if ("cmax".equals(_variable)) {
      _model.cmax = getDouble("cmax"); // Variables.basic:16
      __cmax_canBeChanged__ = true;
    }
    if ("total".equals(_variable)) {
      _model.total = getString("total"); // Variables.basic:17
      __total_canBeChanged__ = true;
    }
    if ("testcount".equals(_variable)) {
      _model.testcount = getInt("testcount"); // Variables.basic:18
      __testcount_canBeChanged__ = true;
    }
    if ("title".equals(_variable)) {
      _model.title = getString("title"); // Variables.basic:19
      __title_canBeChanged__ = true;
    }
    if ("cst".equals(_variable)) {
      _model.cst = getDouble("cst"); // Variables.basic:20
      __cst_canBeChanged__ = true;
    }
  }

  public void propagateValues () {
    setValue ("_isPlaying",_simulation.isPlaying());
    setValue ("_isPaused", _simulation.isPaused());
    if(__range_canBeChanged__) setValue("range",_model.range); // Variables.coordinate:1
    if(__xmin_canBeChanged__) setValue("xmin",_model.xmin); // Variables.coordinate:2
    if(__xmax_canBeChanged__) setValue("xmax",_model.xmax); // Variables.coordinate:3
    if(__ymin_canBeChanged__) setValue("ymin",_model.ymin); // Variables.coordinate:4
    if(__ymax_canBeChanged__) setValue("ymax",_model.ymax); // Variables.coordinate:5
    if(__t_canBeChanged__) setValue("t",_model.t); // Variables.coordinate:6
    if(__dt_canBeChanged__) setValue("dt",_model.dt); // Variables.coordinate:7
    if(__size_canBeChanged__) setValue("size",_model.size); // Variables.coordinate:8
    if(__label_canBeChanged__) setValue("label",_model.label); // Variables.coordinate:9
    if(__w_canBeChanged__) setValue("w",_model.w); // Variables.coordinate:10
    if(__hundred_canBeChanged__) setValue("hundred",_model.hundred); // Variables.coordinate:11
    if(__v_canBeChanged__) setValue("v",_model.v); // Variables.coordinate:12
    if(__sigma2_canBeChanged__) setValue("sigma2",_model.sigma2); // Variables.coordinate:13
    if(__l_play_canBeChanged__) setValue("l_play",_model.l_play); // Variables.language:1
    if(__l_pause_canBeChanged__) setValue("l_pause",_model.l_pause); // Variables.language:2
    if(__l_reset_canBeChanged__) setValue("l_reset",_model.l_reset); // Variables.language:3
    if(__l_init_canBeChanged__) setValue("l_init",_model.l_init); // Variables.language:4
    if(__l_hundred_canBeChanged__) setValue("l_hundred",_model.l_hundred); // Variables.language:5
    if(__l_title_canBeChanged__) setValue("l_title",_model.l_title); // Variables.language:6
    if(__l_msg_canBeChanged__) setValue("l_msg",_model.l_msg); // Variables.language:7
    if(__n_canBeChanged__) setValue("n",_model.n); // Variables.basic:1
    if(__n2_canBeChanged__) setValue("n2",_model.n2); // Variables.basic:2
    if(__n1_canBeChanged__) setValue("n1",_model.n1); // Variables.basic:3
    if(__n21_canBeChanged__) setValue("n21",_model.n21); // Variables.basic:4
    if(__x_canBeChanged__) setValue("x",_model.x); // Variables.basic:5
    if(__y_canBeChanged__) setValue("y",_model.y); // Variables.basic:6
    if(__count_canBeChanged__) setValue("count",_model.count); // Variables.basic:7
    if(__xp_canBeChanged__) setValue("xp",_model.xp); // Variables.basic:8
    if(__yp_canBeChanged__) setValue("yp",_model.yp); // Variables.basic:9
    if(__txt_canBeChanged__) setValue("txt",_model.txt); // Variables.basic:10
    if(__color_canBeChanged__) setValue("color",_model.color); // Variables.basic:11
    if(__blue_canBeChanged__) setValue("blue",_model.blue); // Variables.basic:12
    if(__red_canBeChanged__) setValue("red",_model.red); // Variables.basic:13
    if(__black_canBeChanged__) setValue("black",_model.black); // Variables.basic:14
    if(__clr_canBeChanged__) setValue("clr",_model.clr); // Variables.basic:15
    if(__cmax_canBeChanged__) setValue("cmax",_model.cmax); // Variables.basic:16
    if(__total_canBeChanged__) setValue("total",_model.total); // Variables.basic:17
    if(__testcount_canBeChanged__) setValue("testcount",_model.testcount); // Variables.basic:18
    if(__title_canBeChanged__) setValue("title",_model.title); // Variables.basic:19
    if(__cst_canBeChanged__) setValue("cst",_model.cst); // Variables.basic:20
  }

  @SuppressWarnings("unchecked")
  public void blockVariable(String _variable) {
    if ("range".equals(_variable)) __range_canBeChanged__ = false; // Variables.coordinate:1
    if ("xmin".equals(_variable)) __xmin_canBeChanged__ = false; // Variables.coordinate:2
    if ("xmax".equals(_variable)) __xmax_canBeChanged__ = false; // Variables.coordinate:3
    if ("ymin".equals(_variable)) __ymin_canBeChanged__ = false; // Variables.coordinate:4
    if ("ymax".equals(_variable)) __ymax_canBeChanged__ = false; // Variables.coordinate:5
    if ("t".equals(_variable)) __t_canBeChanged__ = false; // Variables.coordinate:6
    if ("dt".equals(_variable)) __dt_canBeChanged__ = false; // Variables.coordinate:7
    if ("size".equals(_variable)) __size_canBeChanged__ = false; // Variables.coordinate:8
    if ("label".equals(_variable)) __label_canBeChanged__ = false; // Variables.coordinate:9
    if ("w".equals(_variable)) __w_canBeChanged__ = false; // Variables.coordinate:10
    if ("hundred".equals(_variable)) __hundred_canBeChanged__ = false; // Variables.coordinate:11
    if ("v".equals(_variable)) __v_canBeChanged__ = false; // Variables.coordinate:12
    if ("sigma2".equals(_variable)) __sigma2_canBeChanged__ = false; // Variables.coordinate:13
    if ("l_play".equals(_variable)) __l_play_canBeChanged__ = false; // Variables.language:1
    if ("l_pause".equals(_variable)) __l_pause_canBeChanged__ = false; // Variables.language:2
    if ("l_reset".equals(_variable)) __l_reset_canBeChanged__ = false; // Variables.language:3
    if ("l_init".equals(_variable)) __l_init_canBeChanged__ = false; // Variables.language:4
    if ("l_hundred".equals(_variable)) __l_hundred_canBeChanged__ = false; // Variables.language:5
    if ("l_title".equals(_variable)) __l_title_canBeChanged__ = false; // Variables.language:6
    if ("l_msg".equals(_variable)) __l_msg_canBeChanged__ = false; // Variables.language:7
    if ("n".equals(_variable)) __n_canBeChanged__ = false; // Variables.basic:1
    if ("n2".equals(_variable)) __n2_canBeChanged__ = false; // Variables.basic:2
    if ("n1".equals(_variable)) __n1_canBeChanged__ = false; // Variables.basic:3
    if ("n21".equals(_variable)) __n21_canBeChanged__ = false; // Variables.basic:4
    if ("x".equals(_variable)) __x_canBeChanged__ = false; // Variables.basic:5
    if ("y".equals(_variable)) __y_canBeChanged__ = false; // Variables.basic:6
    if ("count".equals(_variable)) __count_canBeChanged__ = false; // Variables.basic:7
    if ("xp".equals(_variable)) __xp_canBeChanged__ = false; // Variables.basic:8
    if ("yp".equals(_variable)) __yp_canBeChanged__ = false; // Variables.basic:9
    if ("txt".equals(_variable)) __txt_canBeChanged__ = false; // Variables.basic:10
    if ("color".equals(_variable)) __color_canBeChanged__ = false; // Variables.basic:11
    if ("blue".equals(_variable)) __blue_canBeChanged__ = false; // Variables.basic:12
    if ("red".equals(_variable)) __red_canBeChanged__ = false; // Variables.basic:13
    if ("black".equals(_variable)) __black_canBeChanged__ = false; // Variables.basic:14
    if ("clr".equals(_variable)) __clr_canBeChanged__ = false; // Variables.basic:15
    if ("cmax".equals(_variable)) __cmax_canBeChanged__ = false; // Variables.basic:16
    if ("total".equals(_variable)) __total_canBeChanged__ = false; // Variables.basic:17
    if ("testcount".equals(_variable)) __testcount_canBeChanged__ = false; // Variables.basic:18
    if ("title".equals(_variable)) __title_canBeChanged__ = false; // Variables.basic:19
    if ("cst".equals(_variable)) __cst_canBeChanged__ = false; // Variables.basic:20
  }

// ---------- Creation of the interface  -------------------

  private void createControl() {
    // This first frame is added due to what I consider a bug in Java (Paco)
    addElement( new org.colos.ejs.library.control.swing.ControlFrame(),"_TOP_SECRET_")
      .setProperty("waitForReset","true")
      .setProperty("visible","false")
      .setProperty("background","green")
      .setProperty("size","100,100");
    Frame = (java.awt.Component)
      addElement(new org.colos.ejs.library.control.swing.ControlFrame(),"Frame")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("exit","true")
      .setProperty("waitForReset","true")
      .setProperty("title",_simulation.translateString("View.Frame.title","Frame"))
      .setProperty("layout","border")
      .setProperty("visible","true")
      .setProperty("location","17,22")
      .setProperty("size",_simulation.translateString("View.Frame.size","\"590,342\""))
      .setProperty("background","DARKGRAY")
      .getObject();
    Panel = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"Panel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","south")
      .setProperty("parent","Frame")
      .setProperty("layout","grid:0,1,0,0")
      .getObject();
    Panel1 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"Panel1")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","south")
      .setProperty("parent","Panel")
      .setProperty("layout","grid:1,0,0,0")
      .getObject();
    reset = (javax.swing.JButton)
      addElement(new org.colos.ejs.library.control.swing.ControlButton(),"reset")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","Panel1")
      .setProperty("image",_simulation.translateString("View.reset.image","\"data/reset.gif\""))
      .setProperty("action","_model._method_for_reset_action()" )
      .setProperty("size",_simulation.translateString("View.reset.size","\"90,35\""))
      .getObject();
    initialize = (javax.swing.JButton)
      addElement(new org.colos.ejs.library.control.swing.ControlButton(),"initialize")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","Panel1")
      .setProperty("image",_simulation.translateString("View.initialize.image","\"data/init.gif\""))
      .setProperty("action","_model._method_for_initialize_action()" )
      .setProperty("size",_simulation.translateString("View.initialize.size","\"90,35\""))
      .getObject();
    twoStateButton = (javax.swing.JButton)
      addElement(new org.colos.ejs.library.control.swing.ControlTwoStateButton(),"twoStateButton")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","Panel1")
      .setProperty("variable","_isPaused")
      .setProperty("size",_simulation.translateString("View.twoStateButton.size","\"90,30\""))
      .setProperty("imageOn",_simulation.translateString("View.twoStateButton.imageOn","\"data/play.gif\""))
      .setProperty("actionOn","_model._method_for_twoStateButton_actionOn()" )
      .setProperty("imageOff",_simulation.translateString("View.twoStateButton.imageOff","\"data/pause.gif\""))
      .setProperty("actionOff","_model._method_for_twoStateButton_actionOff()" )
      .getObject();
    hundred = (javax.swing.JCheckBox)
      addElement(new org.colos.ejs.library.control.swing.ControlCheckBox(),"hundred")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","Panel1")
      .setProperty("variable","hundred")
      .setProperty("text",_simulation.translateString("View.hundred.text","%l_hundred%"))
      .setProperty("action","_model._method_for_hundred_action()" )
      .setProperty("foreground","0,255,0")
      .getObject();
    Panel3 = (javax.swing.JPanel)
      addElement(new org.colos.ejs.library.control.swing.ControlPanel(),"Panel3")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","center")
      .setProperty("parent","Frame")
      .setProperty("layout","grid:1,0,0,0")
      .getObject();
    DrawingPanel = (org.opensourcephysics.drawing2d.DrawingPanel2D)
      addElement(new org.colos.ejs.library.control.swing.ControlDrawingPanel(),"DrawingPanel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("position","center")
      .setProperty("parent","Panel3")
      .setProperty("autoscaleX","false")
      .setProperty("autoscaleY","false")
      .setProperty("minimumX","xmin")
      .setProperty("maximumX","xmax")
      .setProperty("minimumY","ymin")
      .setProperty("maximumY","ymax")
      .setProperty("square","true")
      .getObject();
    ParticleSet = (org.opensourcephysics.displayejs.ElementSet)
      addElement(new org.colos.ejs.library.control.displayejs.ControlParticleSet(),"ParticleSet")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","DrawingPanel")
      .setProperty("elementnumber","n")
      .setProperty("x","x")
      .setProperty("y","y")
      .setProperty("sizex","size")
      .setProperty("sizey","size")
      .setProperty("enabled","true")
      .setProperty("secondaryColor","color")
      .setProperty("color","color")
      .getObject();
    TextSet = (org.opensourcephysics.displayejs.ElementSet)
      addElement(new org.colos.ejs.library.control.displayejs.ControlTextSet(),"TextSet")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","DrawingPanel")
      .setProperty("elementnumber","n1")
      .setProperty("x","xmax")
      .setProperty("y","yp")
      .setProperty("enabled","false")
      .setProperty("text",_simulation.translateString("View.TextSet.text","%txt%"))
      .setProperty("elementposition","EAST")
      .setProperty("color","255,192,0")
      .getObject();
    Text = (org.opensourcephysics.displayejs.InteractiveText)
      addElement(new org.colos.ejs.library.control.displayejs.ControlText(),"Text")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","DrawingPanel")
      .setProperty("x","xmax")
      .setProperty("y","ymin")
      .setProperty("enabled","false")
      .setProperty("text",_simulation.translateString("View.Text.text","%total%"))
      .setProperty("elementposition","SOUTH_EAST")
      .setProperty("color","255,64,0")
      .getObject();
    PlottingPanel = (org.opensourcephysics.drawing2d.PlottingPanel2D)
      addElement(new org.colos.ejs.library.control.swing.ControlPlottingPanel(),"PlottingPanel")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","Panel3")
      .setProperty("autoscaleX","false")
      .setProperty("autoscaleY","false")
      .setProperty("minimumX","zero")
      .setProperty("maximumX","n2")
      .setProperty("minimumY","zero")
      .setProperty("maximumY","cmax")
      .setProperty("title",_simulation.translateString("View.PlottingPanel.title","%title%"))
      .setProperty("majorTicksX","true")
      .setProperty("interiorBackground","128,192,0")
      .setProperty("foreground","192,128,0")
      .getObject();
    ParticleSet2 = (org.opensourcephysics.displayejs.ElementSet)
      addElement(new org.colos.ejs.library.control.displayejs.ControlParticleSet(),"ParticleSet2")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PlottingPanel")
      .setProperty("elementnumber","n2")
      .setProperty("x","xp")
      .setProperty("y","zero")
      .setProperty("sizex","w")
      .setProperty("sizey","count")
      .setProperty("enabled","false")
      .setProperty("style","RECTANGLE")
      .setProperty("elementposition","SOUTH")
      .setProperty("secondaryColor","192,192,0")
      .setProperty("color","128,0,64")
      .getObject();
    AnalyticCurve = (org.opensourcephysics.displayejs.InteractivePoligon)
      addElement(new org.colos.ejs.library.control.displayejs.ControlAnalyticCurve(),"AnalyticCurve")
      .setProperty("_ejs_SecondAction_","updateAfterModelAction()")
      .setProperty("parent","PlottingPanel")
      .setProperty("points","n")
      .setProperty("min","0")
      .setProperty("max","n")
      .setProperty("variable","u")
      .setProperty("functionx","u")
      .setProperty("functiony","2*testcount*cst/Math.sqrt(n)*Math.exp(-2*(u-v)*(u-v)/sigma2)")
      .setProperty("javaSyntax","true")
      .setProperty("color","CYAN")
      .setProperty("stroke","3")
      .setProperty("enabled","false")
      .getObject();
  }

// ---------- Resetting the interface  -------------------

  public void reset() {
    getElement("Frame")
      .setProperty("title",_simulation.translateString("View.Frame.title","Frame"))
      .setProperty("visible","true")
      .setProperty("background","DARKGRAY");
    getElement("Panel");
    getElement("Panel1");
    getElement("reset")
      .setProperty("image",_simulation.translateString("View.reset.image","\"data/reset.gif\""))
      .setProperty("size",_simulation.translateString("View.reset.size","\"90,35\""));
    getElement("initialize")
      .setProperty("image",_simulation.translateString("View.initialize.image","\"data/init.gif\""))
      .setProperty("size",_simulation.translateString("View.initialize.size","\"90,35\""));
    getElement("twoStateButton")
      .setProperty("size",_simulation.translateString("View.twoStateButton.size","\"90,30\""))
      .setProperty("imageOn",_simulation.translateString("View.twoStateButton.imageOn","\"data/play.gif\""))
      .setProperty("imageOff",_simulation.translateString("View.twoStateButton.imageOff","\"data/pause.gif\""));
    getElement("hundred")
      .setProperty("foreground","0,255,0");
    getElement("Panel3");
    getElement("DrawingPanel")
      .setProperty("autoscaleX","false")
      .setProperty("autoscaleY","false")
      .setProperty("square","true");
    getElement("ParticleSet")
      .setProperty("enabled","true");
    getElement("TextSet")
      .setProperty("enabled","false")
      .setProperty("elementposition","EAST")
      .setProperty("color","255,192,0");
    getElement("Text")
      .setProperty("enabled","false")
      .setProperty("elementposition","SOUTH_EAST")
      .setProperty("color","255,64,0");
    getElement("PlottingPanel")
      .setProperty("autoscaleX","false")
      .setProperty("autoscaleY","false")
      .setProperty("majorTicksX","true")
      .setProperty("interiorBackground","128,192,0")
      .setProperty("foreground","192,128,0");
    getElement("ParticleSet2")
      .setProperty("enabled","false")
      .setProperty("style","RECTANGLE")
      .setProperty("elementposition","SOUTH")
      .setProperty("secondaryColor","192,192,0")
      .setProperty("color","128,0,64");
    getElement("AnalyticCurve")
      .setProperty("min","0")
      .setProperty("variable","u")
      .setProperty("functionx","u")
      .setProperty("functiony","2*testcount*cst/Math.sqrt(n)*Math.exp(-2*(u-v)*(u-v)/sigma2)")
      .setProperty("javaSyntax","true")
      .setProperty("color","CYAN")
      .setProperty("stroke","3")
      .setProperty("enabled","false");
    __range_canBeChanged__ = true; // Variables.coordinate:1
    __xmin_canBeChanged__ = true; // Variables.coordinate:2
    __xmax_canBeChanged__ = true; // Variables.coordinate:3
    __ymin_canBeChanged__ = true; // Variables.coordinate:4
    __ymax_canBeChanged__ = true; // Variables.coordinate:5
    __t_canBeChanged__ = true; // Variables.coordinate:6
    __dt_canBeChanged__ = true; // Variables.coordinate:7
    __size_canBeChanged__ = true; // Variables.coordinate:8
    __label_canBeChanged__ = true; // Variables.coordinate:9
    __w_canBeChanged__ = true; // Variables.coordinate:10
    __hundred_canBeChanged__ = true; // Variables.coordinate:11
    __v_canBeChanged__ = true; // Variables.coordinate:12
    __sigma2_canBeChanged__ = true; // Variables.coordinate:13
    __l_play_canBeChanged__ = true; // Variables.language:1
    __l_pause_canBeChanged__ = true; // Variables.language:2
    __l_reset_canBeChanged__ = true; // Variables.language:3
    __l_init_canBeChanged__ = true; // Variables.language:4
    __l_hundred_canBeChanged__ = true; // Variables.language:5
    __l_title_canBeChanged__ = true; // Variables.language:6
    __l_msg_canBeChanged__ = true; // Variables.language:7
    __n_canBeChanged__ = true; // Variables.basic:1
    __n2_canBeChanged__ = true; // Variables.basic:2
    __n1_canBeChanged__ = true; // Variables.basic:3
    __n21_canBeChanged__ = true; // Variables.basic:4
    __x_canBeChanged__ = true; // Variables.basic:5
    __y_canBeChanged__ = true; // Variables.basic:6
    __count_canBeChanged__ = true; // Variables.basic:7
    __xp_canBeChanged__ = true; // Variables.basic:8
    __yp_canBeChanged__ = true; // Variables.basic:9
    __txt_canBeChanged__ = true; // Variables.basic:10
    __color_canBeChanged__ = true; // Variables.basic:11
    __blue_canBeChanged__ = true; // Variables.basic:12
    __red_canBeChanged__ = true; // Variables.basic:13
    __black_canBeChanged__ = true; // Variables.basic:14
    __clr_canBeChanged__ = true; // Variables.basic:15
    __cmax_canBeChanged__ = true; // Variables.basic:16
    __total_canBeChanged__ = true; // Variables.basic:17
    __testcount_canBeChanged__ = true; // Variables.basic:18
    __title_canBeChanged__ = true; // Variables.basic:19
    __cst_canBeChanged__ = true; // Variables.basic:20
    super.reset();
  }

} // End of class gaussianView

