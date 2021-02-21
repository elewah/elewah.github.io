%% Calculating the Laplace F(s) transform of a function f(t) using Matlab.
%% First you need to specify that the variable t and s are symbolic ones. This is done with this command
syms t s
%% define the function that you want to calulate its laplace trasform
f=-1.25+3.5*t*exp(-2*t)+1.25*exp(-2*t);
%% make the function readable using this command 
pretty(f)
%% Next you define the function f(t). The actual command to calculate the transform is
F=laplace(f,t,s);
%% To make the expression more readable, you can use these commands, simplify and pretty.
s=simplify(F);
%% make your answer readable using this command 
pretty(s)