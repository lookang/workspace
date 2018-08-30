#
#  ExB_Filter_Exercise_2.py
#
#  This file is used to numerically integrate 
#  the second order linear differential equations
#  that describe the trajectory of a charged particle through
#  an E x B velocity filter.
#
#  Here, it is assumed that the axis of the filter 
#  is aligned with the z-axis, that the magnetic field
#  is along the +x-direction, and that the electric field
#  is along the -y-direction.
#
#  The numerical integration is done using the built-in 
#  routine odeint.
#
#  By:
#  Ernest R. Behringer
#  Department of Physics and Astronomy
#  Eastern Michigan University
#  Ypsilanti, MI  48197
#  (734) 487-8799 (Office)
#  ebehringe@emich.edu
#
#  Last updated:
#
#  20160624 ERB
#

from pylab import figure,plot,xlim,xlabel,ylim,ylabel,grid,title,show
from numpy import sqrt,array,arange
from scipy.integrate import odeint

#
#  Initialize parameter values
#  
q = 1.60e-19 # particle charge [C]
m = 7.0*1.67e-27 # particle mass [kg]
KE_eV = 100.0 # particle kinetic energy [eV]
Ex = 0.0 # Ex = electric field in the +x direction [N/C]
Ey = -105.0 #  Ey = electric field in the +y direction [N/C]
Ez = 0.0 # Ez = electric field in the +z direction [N/C]
Bx = 0.002 # Bx = magnetic field in the +x direction [T]
By = 0.0 # By = magnetic field in the +x direction [T]
Bz = 0.0 # Bz = magnetic field in the +x direction [T]
L = 0.25 #  L = length of the crossed field region [mm]
u = [1.0,1.0,100.0]/sqrt(10002.0) # direction of the velocity vector

# Derived quantities
qoverm = q/m # charge to mass ratio [C/kg]
KE = KE_eV*1.602e-19 # particle kinetic energy [J]
vmag = sqrt(2.0*KE/m) # particle velocity magnitude [m/s]
v1x = vmag*u[0] #  v1x = x-component of the initial velocity [m/s]
v1y = vmag*u[1] #  v1y = y-component of the initial velocity [m/s]
v1z = vmag*u[2] #  v1z = z-component of the initial velocity [m/s]
vzpass = -Ey/Bx #  vzpass is the z-velocity required for no deflection [m/s]

#
#  Over what time interval do we integrate?
#
tmax = L/v1z;
#
# Here are the derivatives of position and velocity
def derivs(r,t):
    # derivatives of position components
    xp = r[1]
    yp = r[3]
    zp = r[5]
    dx = xp
    dy = yp
    dz = zp
    # derivatives of velocity components
    ddx = qoverm*(Ex + yp*Bz - zp*By)
    ddy = qoverm*(Ey + zp*Bx - xp*Bz)
    ddz = qoverm*(Ez + xp*By - yp*Bx)
    return array([dx,ddx,dy,ddy,dz,ddz],float)

# Specify initial conditions
x0 = 0.0 # initial x-coordinate of the charged particle [m]
dxdt0 = v1x # initial x-velocity of the charged particle [m/s]
y0 = 0.0 # initial y-coordinate of the charged particle [m]
dydt0 = v1y # initial y-velocity of the charged particle [m/s]
z0 = 0.0 # initial z-coordinate of the charged particle [m]
dzdt0 = v1z # initial z-velocity of the charged particle [m/s]
r0 = array([x0,dxdt0,y0,dydt0,z0,dzdt0],float)

# Set up the time interval
t1 = 0.0 # initial time
t2 = tmax # final scaled time
N = 1000 # number of time steps
h = (t2-t1)/N # time step size

# The array of time values at which to store the solution
tpoints = arange(t1,t2,h)

# Calculate the solution using odeint
r = odeint(derivs,r0,tpoints)

#
#  Extract the 1D matrices of position values
#
position_x = r[:,0]
xmin = min(position_x)
xmax = max(position_x)
position_y = r[:,2]
ymin = min(position_y)
ymax = max(position_y)
position_z = r[:,4]
zmin = min(position_z)
zmax = max(position_z)

#  Calculate the final velocity
vx = r[:,1]
vxf = vx[N-1]
vy = r[:,3]
vyf = vy[N-1]
vz = r[:,5]
vzf = vz[N-1]
vf = sqrt(vxf*vxf+vyf+vyf+vzf*vzf)
KEf_eV = 0.5*m*vf*vf/1.60e-19
print"The initial x-velocity = %.3e"%v1x," m/s."
print"The initial x-velocity = %.3e"%vx[0]," m/s."
print"The pass velocity = %.3e"%vzpass," m/s."
print"The magnitude of the initial velocity = %.3e"%vmag," m/s."
print"The magnitude of the final velocity = %.3e"%vf," m/s."
print"The initial kinetic energy = %.3e"%KE_eV," eV."
print"The final kinetic energy = %.3e"%KEf_eV," eV."

# start a new figure
figure()

# Plot the x-position versus time
plot(tpoints,position_x,"b-")
xlim(t1,t2)
ylim(xmin,xmax)
xlabel("Time $t$ [s]",fontsize=16)
ylabel("$x$ [m]",fontsize=16)
grid(True)
title('Wien filter: $v = $%.2e m, length $L = $%.2f m'%(vmag,L))
show()

# start a new figure
figure()

# Plot the y-position versus time
plot(tpoints,position_y,"b-")
xlim(t1,t2)
ylim(ymin,ymax)
xlabel("Time $t$ [s]",fontsize=16)
ylabel("$y$ [m]",fontsize=16)
grid(True)
title('Wien filter: $v = $%.2e m/s, length $L = $%.2f m'%(vmag,L))
show()

# start a new figure
figure()

# Plot the z-position versus time
plot(tpoints,position_z,"b-")
xlim(t1,t2)
ylim(zmin,zmax)
xlabel("Time $t$ [s]",fontsize=16)
ylabel("$z$ [m]",fontsize=16)
grid(True)
title('Wien filter: $v = $%.2e m/s, length $L = $%.2f m'%(vmag,L))
show()

# start a new figure
plot_trajectory = figure()

# Plot the trajectory in 3D
ax = plot_trajectory.gca(projection='3d')
ax.plot(position_x,position_y,position_z,"b-")
ax.set_xlabel("$x$ [m]")
ax.set_ylabel("$y$ [m]")
ax.set_zlabel("$z$ [m]")
ax.set_title("Wien filter: $v = $%.2e m/s, length $L$ = %s"%(vmag,L))
grid(True)
show()