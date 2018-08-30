# Written by:
# Kelly Roos
# Engineering Physics
# Bradley University
# rooster@bradley.edu | 309.677.2997

import numpy as np
import matplotlib.pyplot as plt

# Input parameters for model
g=9.8 # accel due to gravity (m/s^2)
m=1 # mass of pendulum in kg
l=1 # length of pendulum in meters
b=0.2 # damping strength (kg m^2/s)
omega=3 # driving frequency in rad/sec
tau_d=1 # driving torque in Nm

dt=0.01 # time step (s)
t_steps=100000 # total number of iterations
theta_i=120*3.14159/180 # convert to radians
theta_dot_i=0


# Defines the 1D arrays to be used in the computation and 
# sets all values in the arrays to zero
time = np.zeros(t_steps)
theta = np.zeros(t_steps)
theta_dot = np.zeros(t_steps)
alpha = np.zeros(t_steps)
theta_sa = np.zeros(t_steps)


# Initial conditions
time[1] = 0
theta[1] = theta_i
theta_dot[1] = theta_dot_i
theta_sa[1] = theta_i*np.cos(np.sqrt(2*g/l)*time[1])
alpha[1] = -2*g*np.sin(theta[1])/l-4*b*theta_dot[1]/(m*l*l)+4*tau_d*np.cos(omega*time[1])/(m*l*l)

# Main loop: Euler algorithm, euler-Cromer, and evaluation of exact solutions for v and y
for i in range(2, t_steps):
    time[i] = time[i-1] + dt
    
    # Euler-Cromer
    theta_dot[i]=theta_dot[i-1]+alpha[i-1]*dt
    theta[i]=theta[i-1]+theta_dot[i]*dt
    alpha[i]=-2*g*np.sin(theta[i])/l-4*b*theta_dot[i]/(m*l*l)+4*tau_d*np.cos(omega*time[i])/(m*l*l)
    
    # small angle approximation
    theta_sa[i]=theta_i*np.cos(np.sqrt(2*g/l)*time[i])    
    
    # constrain theta between -pi and +pi     
    if theta[i] > 3.14159265:
         theta[i]=theta[i]-2*3.14159265
    elif theta[i] < -3.14159265:
         theta[i]=theta[i]+2*3.14159265
    else:
         theta[i]=theta[i]
    
# Plotting Results
#plt.plot(theta,theta_dot)
plt.plot(time,theta,time,theta_sa)
plt.ylim((-3, 3))
plt.xlim((0, 20))
plt.xlabel('time (s)')
plt.ylabel('ang. position (rad)')
plt.title('ang. position vs. time')
plt.show()
