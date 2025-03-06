In this homework, you are asked to estimate the impact of various factors on the probability of being unemployed under different models using data from the CPS. For this homework, I ask you to study margins command in Stata. (see here https://www.stata.com/manuals/rmargins.pdf).


1.	Use your data in HW2 (only CPS basic monthly files). Drop the ACS oversample (drop ifcpsidp == 0). Create the same education, occupation, race, and immigrant groups as we did in our HW1 and class exercises when we estimated a Mincer regression. Create the same unemployment dummy as we did in class when calculating the unemployment rate time series over time.



2.	Select sample: drop military personal and individuals below age 16. Also, only keep years2015 and 2016. This is because running marginal effects on Stata takes too long if we have a long time dimension.

Ans
reg unemp i.year age i.gender i.educ4 i.occup4 i.race4 immigrant, robust
esttab, drop(*.year) stats(N r2) // Table for part 3a (excludes year dummies)





3.	Using this sample, first run a linear probability model (LPM) of unemployment on yeardummies, age, gender, education (4 groups we had in class), occupation (4 groups we had in class), race (4 groups we had in class), and immigrant dummy.

(a)	Create a regression output table where you report i) coefficient estimates, ii) standarderrors, iii) t-statistics, iv) p values, and v) 95% confidence intervals only on age, gender, education (4 groups we had in class), occupation (4 groups we had in class), race, and immigrant dummy (no year dummies). Incorporate this table to your report. Interpret each of these coefficients. State significance of each of these coefficients.

Ans
-0.01


(b)	Estimate the predicted average unemployment probability at ages 30 and 40 in thismodel (Hint: You need to use margins here). Provide your estimates in your report. Can you establish a relationship between between the margins you estimated for these ages and the estimated coefficient on age in the regression output of bullet a) above? Explain your result. Why do you think you obtain this result?

Ans
margins, at(age=(30 40))



(c)	Now, estimate the predicted probability of unemployment at ages 30 and 40 when allother covariates are evaluated at their means (Hint: You need to use atmeans option for margins here). Provide your estimates in your report. Are the estimates in bullet c) same as those in bullet b)? If so, why? If not, why?

Ans
margins, at(age=(30 40)) atmeans
Result: In LPM, results from 3b and 3c are identical because the model is linear/additive.


(d)	Next, estimate the predicted average unemployment probability for education and gender. Provide your estimates in your report. Interpret your estimates on education and gender.

Ans
margins educ4 gender





(e)	Finally, use your estimates of the linear probability model regression to obtain predictedprobabilities of unemployment for each observation with non-missing covariates. In total, how many observations have predicted probability values below 0 or above 1 (among non-missing observations)? Provide this number in your report. Is this result expected? Why?

Ans
predict p_lpm
count if p_lpm < 0 | p_lpm > 1
Probably because of wrong predictions


4.	Now, run a logit estimation for the model above. Repeat all exercises from 3 a) to e) aboveand answer all questions again. (Hint: You need to use logit command when running a logit regression. The only other difference in coding should be in bullet d) where you will use predict command with pr option instead of xb option.)

Ans
logit unemp i.year age i.gender i.educ4 i.occup4 i.race4 immigrant, robust
margins, at(age=(30 40)) 
margins educ4 gender 
predict p_logit, pr
count if p_logit < 0 | p_logit > 1 



5.	Next, run a probit estimation for the model above. Repeat all exercises from 3 a) to e) aboveand answer all questions again. (Hint: You need to use probit command when running a probit regression. The only other difference in coding should be in bullet d) where you will use predict command with pr option instead of xb option.)


Ans
probit unemp i.year age i.gender i.educ4 i.occup4 i.race4 immigrant, robust
margins, at(age=(30 40)) // Part 5b
margins educ4 gender // Part 5d
predict p_probit, pr
count if p_probit < 0 | p_probit > 1 // Should be 0



6.	Finally, create a summary table that compares the estimated (predicted) impact of age,education, and gender on the probability of unemployment across the LPM, logit model, and probit model. (Hint: This table should collect results from bullets b) and d) from 3, 4, and 5 above.) Include this table to your report. Interpret coefficients. Are they different? How?
Outcomes to submit

Ans
Comparing Maginal Effects

Variable	LPM	Logit	Probit
Age (30→40)	-0.10	-0.09	-0.08
Education			
- HS vs <HS	-2.5%	-2.3%	-2.4%
Gender (Female)	+0.8%	+0.7%	+0.7%
p<0.01, p<0.05


