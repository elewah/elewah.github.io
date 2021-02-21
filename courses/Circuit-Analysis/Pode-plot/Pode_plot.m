%% Pode Plot example
num=[1 0 0 0];
den = [1 14.8 38.1 2554];
w = logspace(-1,3);
bode(num, den, w);
title('Bode plot for a highpass filter')