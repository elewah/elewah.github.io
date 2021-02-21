%% Calculating the Inverse Laplace F(t) transform of a function f(s) using Matlab.
%% First you need to specify that the variable t and s are symbolic ones. This is done with this command
syms t s
%% define the function that you want to calulate its laplace trasform
%f=-1.25+3.5*t*exp(-2*t)+1.25*exp(-2*t);
F=(s-5)/(s*(s+2)^2);
%% make the function readable using this command 
pretty(F)
%% Next you define the function f(t). The actual command to calculate the transform is
f= ilaplace(F);
%% To make the expression more readable, you can use these commands, simplify and pretty. here is an example for the function f(t),
t=simplify(f);
%% make your answer readable using this command 
pretty(t)