%% Laplace Transform Examples
%
%
%% Compute the Laplace transform of 1/sqrt(x). By default, the transform is in terms of s.
syms x y
f = 1/sqrt(x);
laplace(f)


%% Compute the Laplace transform of exp(-a*t). By default, the independent variable is t, and the transformation variable is s.

syms a t
f = exp(-a*t);
laplace(f)

%% Specify the transformation variable as y. If you specify only one variable, that variable is the transformation variable. The independent variable is still t.
laplace(f,y)

%% Specify both the independent and transformation variables as a and y in the second and third arguments, respectively.
laplace(f,a,y)

