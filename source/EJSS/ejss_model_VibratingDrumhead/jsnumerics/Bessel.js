"use strict";
var osp;
if(!osp) osp={}                   // if undefined make it an object;
if(!osp.numerics) osp.numerics={} // if undefined make it an object;
osp.numerics.Bessel={ };         // empty class

(function(){  // anonymous function to create closure
  
  /**
   * Computes the Bessel function of order n at x.
   * @param n
   * @param x
   * @return
   */
  function bessel(n,x){
    var sg, k;
    var y, tmp, pk, xk, pkm1, r, pkm2;
    if(n<0) {
      n = -n;
      if(n%2==0) {
        sg = 1;
      } else {
        sg = -1;
      }
    } else {
      sg = 1;
    }
    if(x<0) {
      if(n%2!=0) {
        sg = -sg;
      }
      x = -x;
    }
    if(n==0) {
      y = sg*bessel0(x);
      return y;
    }
    if(n==1) {
      y = sg*bessel1(x);
      return y;
    }
    if(n==2) {
      if(x==0) {
        y = 0;
      } else {
        y = sg*(2.0*bessel1(x)/x-bessel0(x));
      }
      return y;
    }
    if(x<1.e-12) {
      y = 0;
      return y;
    }
    k = 53;
    pk = 2*(n+k);
    tmp = pk;
    xk = x*x;
    while(k!=0) {
      pk = pk-2.0;
      tmp = pk-xk/tmp;
      k = k-1;
    }
    tmp = x/tmp;
    pk = 1.0;
    pkm1 = 1.0/tmp;
    k = n-1;
    r = 2*k;
    while(k!=0) {
      pkm2 = (pkm1*r-pk*x)/x;
      pk = pkm1;
      pkm1 = pkm2;
      r = r-2.0;
      k = k-1;
    }
    if(Math.abs(pk)>Math.abs(pkm1)) {
      tmp = bessel1(x)/pk;
    } else {
      tmp = bessel0(x)/pkm1;
    }
    return sg*tmp;
  }
  
    /**
   * Computes the derivative of the Bessel function of order n at x.
   * @param n
   * @param x
   * @return
   */
  function besselDerivative(n,x){
    var m, qm, qp, nm, np;
    var bjn, bjnm, bjnp;
    m = n;
    if(n==0) {
      bjn = bessel(1, x);
      return -bjn;
    }
    qm = 1;
    qp = 1;
    nm = m-1;
    np = m+1;
    if(m<0) {
      if(nm<0) {
        nm = -nm;
        qm = -1;
      }
      if(np<0) {
        np = -np;
        qp = -1;
      }
    }
    bjnm = bessel(nm, x);
    bjnp = bessel(np, x);
    bjnm = Math.pow(qm, nm)*bjnm;
    bjnp = Math.pow(qp, np)*bjnp;
    return(bjnm-bjnp)/2.;
  }

  /*
   * Comutes the Bessel function of order 0 at x.
   * Ref : http : //www.alglib.net/specialfunctions
   * Using the Algorithm of Stephen L.Moshier
   * The domain is divided into the intervals[0, 5] and (5, infinity).
   * In the first interval the following rational approximation is used:
   *      2        2
   * (w - r ) (w - r ) P (w) / Q (w)
   *      1        2   3       8
   * where w = x^2 and the two r 'sare zeros of the function. In the second
   * interval, the Hankel asymptotic expansion is employed with two
   * rational functions of degree 6 / 6 and 7 / 7.
   */
  function bessel0( x) {
      var nn, pzero, qzero, xsq, p1, q1, y;
      var zz = new Array(2);
      var p = [26857.86856980014981415848441, -40504123.71833132706360663322, 25071582855.36881945555156435, -8085222034853.793871199468171, 1434354939140344.111664316553, -136762035308817138.6865416609, 6382059341072356562.289432465, -117915762910761053603.8440800, 493378725179413356181.6813446];
      var q = [1.0, 1363.063652328970604442810507, 1114636.098462985378182402543, 669998767.2982239671814028660, 312304311494.1213172572469442, 112775673967979.8507056031594, 30246356167094626.98627330784, 5428918384092285160.200195092, 493378725179413356211.3278438];
      if(x<0) {
        x = -x;
      }
      if(x>8.0) {
        zz = besselasympt0(x);
        pzero = zz[0];
        qzero = zz[1];
        nn = x-Math.PI/4;
        y = Math.sqrt(2/Math.PI/x)*(pzero*Math.cos(nn)-qzero*Math.sin(nn));
        return y;
      }
      xsq = x*x;
      p1 = p[0];
      for(var i = 1; i<9; i++) {
        p1 = p[i]+p1*xsq;
      }
      q1 = q[0];
      for(var i = 1; i<9; i++) {
        q1 = q[i]+q1*xsq;
      }
      return p1/q1;
  }
  
  /*
   * Computes the Bessel function of order 1.
   * Ref : http : //www.alglib.net/specialfunctions
   * Using the Algorithm of Stephen L.Moshier
   * The domain is divided into the intervals[0, 8] and (8, infinity).
   * In the first interval a 24term Chebyshev expansion is used.In the
   * second, the asymptotic trigonometric representation is employed
   * using two rational functions of degree 5 / 5.
   */
  function bessel1( x) {
      var s, pzero, qzero, nn, p1, q1, y, xsq;
      var zz = new Array(2);
      var p = [2701.122710892323414856790990, -4695753.530642995859767162166, 3413234182.301700539091292655, -1322983480332.126453125473247, 290879526383477.5409737601689, -35888175699101060.50743641413, 2316433580634002297.931815435, -66721065689249162980.20941484, 581199354001606143928.050809];
      var q = [1.0, 1606.931573481487801970916749, 1501793.594998585505921097578, 1013863514.358673989967045588, 524371026216.7649715406728642, 208166122130760.7351240184229, 60920613989175217.46105196863, 11857707121903209998.37113348, 1162398708003212287858.529400];
      s=0;   //s = Math.signum(x) not available in JavaScript; assume x===0
      if(x>0) s=1; else if (x<0) s=-1;  // if x===0 s is unchanged
      if(x<0) {
        x = -x;
      }
      if(x>8.0) {
        zz = besselasympt1(x);
        pzero = zz[0];
        qzero = zz[1];
        nn = x-3*Math.PI/4;
        y = Math.sqrt(2/Math.PI/x)*(pzero*Math.cos(nn)-qzero*Math.sin(nn));
        if(s<0) {
          y = -y;
        }
        return y;
      }
      xsq = x*x;
      p1 = p[0];
      for(var i = 1; i<9; i++) {
        p1 = p[i]+p1*xsq;
      }
      q1 = q[0];
      for(var i = 1; i<9; i++) {
        q1 = q[i]+q1*xsq;
      }
      return s*x*p1/q1;
  } 
  
   /**
   * Computes nt zeroes of the n-th order Bessel function
   * param n  order of Bessel function
   * param nt number of zeros
   */
   function getZeros( n,  nt) {
    var l;
    var x, x0, bjn, djn;
    var rj0 = new Array(nt);
    if(n<0) {
      n = -n;
    }
    if(n<=20) {
      x = 2.82141+1.15859*n;
    } else {
      x = n+1.85576*Math.pow(n, 0.33333)+1.03315/Math.pow(n, 0.33333);
    }
    l = 0;
    while(true) {
      while(true) {
        x0 = x;
        bjn = bessel(n, x);
        djn = besselDerivative(n, x);
        x = x-bjn/djn; // Newton-Raphson step
        if(!(Math.abs(x-x0)>1.0e-6)) {
          break;
        }
      }
      rj0[l] = x;
      l = l+1;
      x = x+Math.PI+(0.0972+0.0679*n-0.000354*Math.pow(n, 2))/l;
      if(!(l<nt)) {
        break;
      }
    }
    return rj0;
  }
  
  // make functiona public by registering them in the namespace
  var namespace=osp.numerics.Bessel;
  namespace.Jn=bessel;
  namespace.DJn=besselDerivative;
  namespace.J0=bessel0;
  namespace.J1=bessel1;
  namespace.getZeros=getZeros;
  
  /*Private functions*/
  function besselasympt0( x) {
    var xsq, p2, q2, p3, q3, pzero, qzero;
    var zz = new Array(2);
    var p = [0.0, 2485.271928957404011288128951, 153982.6532623911470917825993, 2016135.283049983642487182349, 8413041.456550439208464315611, 12332384.76817638145232406055, 5393485.083869438325262122897];
    var q = [1.0, 2615.700736920839685159081813, 156001.7276940030940592769933, 2025066.801570134013891035236, 8426449.050629797331554404810, 12338310.22786324960844856182, 5393485.083869438325560444960];
    var pp = [0.0, -4.887199395841261531199129300, -226.2630641933704113967255053, -2365.956170779108192723612816, -8239.066313485606568803548860, -10381.41698748464093880530341, -3984.617357595222463506790588];
    var qq = [1.0, 408.7714673983499223402830260, 15704.89191515395519392882766, 156021.3206679291652539287109, 533291.3634216897168722255057, 666745.4239319826986004038103, 255015.5108860942382983170882];
    xsq = 64.0/x/x;
    p2 = p[0];
    for(var i = 1; i<7; i++) {
      p2 = p[i]+p2*xsq;
    }
    q2 = q[0];
    for(var i = 1; i<7; i++) {
      q2 = q[i]+q2*xsq;
    }
    p3 = pp[0];
    for(var i = 1; i<7; i++) {
      p3 = pp[i]+p3*xsq;
    }
    q3 = qq[0];
    for(var i = 1; i<7; i++) {
      q3 = qq[i]+q3*xsq;
    }
    pzero = p2/q2;
    qzero = 8*p3/q3/x;
    zz[0] = pzero;
    zz[1] = qzero;
    return zz;
  }
  
  
  function besselasympt1( x) {
    var xsq, p2, q2, p3, q3, pzero, qzero;
    var zz = new Array(2);
    var p = [-1611.616644324610116477412898, -109824.0554345934672737413139, -1523529.351181137383255105722, -6603373.248364939109255245434, -9942246.505077641195658377899, -4435757.816794127857114720794];
    var q = [1.0, -1455.009440190496182453565068, -107263.8599110382011903063867, -1511809.506634160881644546358, -6585339.479723087072826915069, -9934124.389934585658967556309, -4435757.816794127856828016962];
    var pp = [35.26513384663603218592175580, 1706.375429020768002061283546, 18494.26287322386679652009819, 66178.83658127083517939992166, 85145.16067533570196555001171, 33220.91340985722351859704442];
    var qq = [1.0, 863.8367769604990967475517183, 37890.22974577220264142952256, 400294.4358226697511708610813, 1419460.669603720892855755253, 1819458.042243997298924553839, 708712.8194102874357377502472];
    xsq = 64.0/x/x;
    p2 = p[0];
    for(var i = 1; i<6; i++) {
      p2 = p[i]+p2*xsq;
    }
    q2 = q[0];
    for(var i = 1; i<7; i++) {
      q2 = q[i]+q2*xsq;
    }
    p3 = pp[0];
    for(var i = 1; i<6; i++) {
      p3 = pp[i]+p3*xsq;
    }
    q3 = qq[0];
    for(var i = 1; i<7; i++) {
      q3 = qq[i]+q3*xsq;
    }
    pzero = p2/q2;
    qzero = 8*p3/q3/x;
    zz[0] = pzero;
    zz[1] = qzero;
    return zz;
  }
  
})();  // invoke anonymous function
