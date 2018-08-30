#
# Three-bar_Pendulum_Exercise_1.py
#
# A three-bar pendulum is a central bar
# supported by a friction-free bearing at its end
# and fastened to two other bars which are
# identical to each other, but not to the central bar.
# The combination is mirror-symmetric.
#  
# This file will generate a contour plot of 
# the period of small oscillations 
# versus scaled overlap (horizontal axis) and 
# mass ratio (vertical axis)
# for a fixed length ratio.
#
# Written by:
#
# Ernest R. Behringer
# Department of Physics and Astronomy
# Eastern Michigan University
# Ypsilanti, MI 48197
# (734) 487-8799
# ebehringe@emich.edu
#
# 20151228 by ERB
#

# import the commands needed to make the plot
from pylab import xlabel,ylabel,show,contour,contourf,colorbar,figure,title

# import the command needed to make a 1D array
from numpy import arange,pi,sqrt,meshgrid

# inputs
m1 = 0.1 # mass of the central bar [kg]
l1 = 1.0 # length of the central bar [m]
g = 9.8 # gravitational acceleration [m/s2]
l2 = 1.0 # length of the non-central bars [m]

# calculate the length ratio
l2_sc = l2/l1

# interval and endpoints for the scaled overlap
deltaoratio = 0.01 
oratio_low = 0.0
oratio_hi = 1.0
# interval and endpoints for the mass ratio
deltamratio = 0.01 
mratio_low = 0.5
mratio_hi = 2.0

oratio = arange(oratio_low,oratio_hi,deltaoratio) #x data point array
mratio = arange(mratio_low,mratio_hi,deltamratio) #y data point arry

# create the grid of values on which the period will be evaluated
oratio, mratio = meshgrid(oratio,mratio)

# calculate the period
numsq = l1*(1.0/3.0 + 2.0*mratio*((l2_sc**2)/12.0 + (1 - oratio + 0.5*l2_sc)**2))
denomsq = g*(0.5 + 2.0*mratio*(1.0 - oratio + 0.5*l2_sc))
period = 2.0*pi*sqrt(numsq/denomsq)
    
# make a contour plot of the period vs overlap and length ratios
figure()
contour(oratio,mratio,period,10)
title('Central bar length $l_1 = $%s m, $l_2/l_1 = $%s'%(l1,l2_sc))
xlabel("$\\tilde{s} \equiv s/l_1$",size=16)
ylabel("$\\tilde{m}_2 \equiv m_2/m_1$",size=16)
colorbar().set_label(label='Period [s]',size=16)
show()

# make a filled contour plot of the period vs overlap and length ratios
figure()
contourf(oratio,mratio,period,100)
title('Central bar length $l_1 = $%s m, $l_2/l_1 = $%s'%(l1,l2_sc))
xlabel("$\\tilde{s} \equiv s/l_1$",size=16)
ylabel("$\\tilde{m}_2 \equiv m_2/m_1$",size=16)
colorbar().set_label(label='Period [s]',size=16)
show()