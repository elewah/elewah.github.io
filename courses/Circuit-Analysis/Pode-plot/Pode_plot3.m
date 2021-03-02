%% plot the Bode plot of a network function
num=[0.01 10];
den = [0.000001 0.0101 1];
w = logspace(0,5);
bode(num, den, w);
title('Bode plot for a highpass filter')