---
title: EMTH515 - U01T01 Study Notes
course: EMTH515 - Real Analysis I
lecture: U01T01 - Riemann–Stieltjes Integral (Definition & Existence)
type: StudyNotes
tags:
  - MScMathematics
  - RealAnalysis
  - EMTH515
  - Revision
  - QuickNotes
---

# 🧮 Quick Revision Notes: Riemann–Stieltjes Integral

## Key Concepts

Let a partition be denoted as $ P = \{x_0, x_1, \dots, x_n\} $  
where $ a = x_0 $ and $ b = x_n $.

For each subinterval $ [x_{i-1}, x_i] $:

- $ m_i = \inf\{ f(x) : x \in [x_{i-1}, x_i] \} $
- $ M_i = \sup\{ f(x) : x \in [x_{i-1}, x_i] \} $
- $ \Delta x_i = x_i - x_{i-1} \ge 0 $

---

## Riemann Sums

- **Lower Sum:**  
  $ L(P, f) = \sum_i m_i \, \Delta x_i $

- **Upper Sum:**  
  $ U(P, f) = \sum_i M_i \, \Delta x_i $

- **Relation:**  
  $ m(b - a) \le L(P, f) \le U(P, f) \le M(b - a) $

If $ \sup L(P, f) = \inf U(P, f) $,  
then $ f $ is **Riemann integrable** on \([a, b]$.

---

## Riemann–Stieltjes Generalization

Let $ \alpha(x) $ be a monotonically increasing function.  
Define $ \Delta \alpha_i = \alpha(x_i) - \alpha(x_{i-1}) \ge 0 $.

- **Lower Sum:**  
  $ L(P, f, \alpha) = \sum_i m_i \, \Delta \alpha_i $

- **Upper Sum:**  
  $ U(P, f, \alpha) = \sum_i M_i \, \Delta \alpha_i $

- **Relation:**  
  $ m[\alpha(b) - \alpha(a)] \le L(P, f, \alpha) \le U(P, f, \alpha) \le M[\alpha(b) - \alpha(a)] $

If $ \sup L(P, f, \alpha) = \inf U(P, f, \alpha) $,  
then $ f \in R(\alpha) $, i.e. $ f $ is **Riemann–Stieltjes integrable** with respect to $ \alpha $.

---

## Special Case

If $ \alpha(x) = x $,  
then the Riemann–Stieltjes integral reduces to the **Riemann integral**.

That is,  
\[
\int_a^b f(x) \, d\alpha(x) = \int_a^b f(x) \, dx
\]

---

## Summary Table

| Concept | Classical Riemann | Riemann–Stieltjes |
|----------|------------------|-------------------|
| Interval measure | $ \Delta x_i = x_i - x_{i-1} $ | $ \Delta \alpha_i = \alpha(x_i) - \alpha(x_{i-1}) $ |
| Integrability condition | $ \sup L(P,f) = \inf U(P,f) $ | $ \sup L(P,f,\alpha) = \inf U(P,f,\alpha) $ |
| Special case | — | $ \alpha(x) = x $ |

---

## Exam Tip 💡

- Always check that $ \alpha(x) $ is **monotonic**.  
- For step functions $ \alpha(x) $, integration reduces to summation.  
- The Riemann–Stieltjes integral exists only if the upper and lower sums coincide.

---

Use these notes for **quick recall before exams** ✍️
