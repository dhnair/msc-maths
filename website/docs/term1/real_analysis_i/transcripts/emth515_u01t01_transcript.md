---
title: "EMTH515 - U01T01 Transcript"
course: "EMTH515 - Real Analysis I"
lecture: "U01T01 - Riemann-Stieltjes Integral (Definition & Existence)"
type: "Transcript"
tags: [MScMathematics, RealAnalysis, EMTH515, Transcript, Detailed, Pedagogical]
---

# Real Analysis I - Unit 01, Topic 01

## Learning Outcomes
After this lecture, you will be able to:
- Recall the definition of a **bounded function**.
- Understand the concepts of **partition, mesh, infimum, and supremum**.
- Define and compute **lower and upper Riemann sums**.
- Understand conditions for **Riemann integrability**.
- Extend the idea to the **Riemann–Stieltjes integral**.
- Recognize that the **Riemann integral** is a special case of the Riemann–Stieltjes integral.

---

## 1. Introduction
This lecture introduces the **Riemann–Stieltjes integral**, its definition, existence, and properties.  
We begin with the classical **Riemann integral** before extending it.

---

## 2. Definitions and Setup

- Let $f:[a,b] \to \mathbb{R}$ be a **bounded function**.

**Definition 2.1 (Bounded Function).**  
A function $f$ is bounded on $[a,b]$ if there exist real numbers $m, M$ such that:
$$
m \leq f(x) \leq M, \quad \forall x \in [a,b].
$$

- A **partition** $P$ of $[a,b]$ is:
$$
P = \{x_0, x_1, \dots, x_n\}, \quad a=x_0 < x_1 < \dots < x_n=b.
$$

**Definition 2.2 (Mesh).**  
For each subinterval:
$$
\Delta x_i = x_i - x_{i-1}, \quad i=1,2,\dots,n.
$$
Clearly, $\Delta x_i \geq 0$, and:
$$
\sum_{i=1}^n \Delta x_i = b-a.
$$

**Definition 2.3 (Infimum and Supremum).**  
For each subinterval $[x_{i-1},x_i]$:
- $m_i = \inf \{f(x): x \in [x_{i-1},x_i]\}$  
- $M_i = \sup \{f(x): x \in [x_{i-1},x_i]\}$  

Relation:
$$
m \leq m_i \leq M_i \leq M.
$$

---

## 3. Riemann Sums

**Definition 3.1 (Lower and Upper Sums).**  
- Lower sum:
$$
L(P,f) = \sum_{i=1}^n m_i \Delta x_i
$$
- Upper sum:
$$
U(P,f) = \sum_{i=1}^n M_i \Delta x_i
$$

**Theorem 3.1 (Bounds on Riemann Sums).**  
For all partitions $P$,
$$
m(b-a) \leq L(P,f) \leq U(P,f) \leq M(b-a).
$$

**Proof:**  
Since $m \leq m_i \leq M_i \leq M$ and $\Delta x_i \geq 0$, multiplying by $\Delta x_i$ preserves inequalities. Summing over $i=1$ to $n$ yields the stated inequality.  
□

---

## 4. Riemann Integral

**Definition 4.1 (Lower Riemann Integral).**
$$
\underline{\int_a^b} f(x)\,dx = \sup_{P} L(P,f)
$$

**Definition 4.2 (Upper Riemann Integral).**
$$
\overline{\int_a^b} f(x)\,dx = \inf_{P} U(P,f)
$$

**Definition 4.3 (Riemann Integrability).**  
If $\underline{\int_a^b} f(x)\,dx = \overline{\int_a^b} f(x)\,dx$, we define:
$$
\int_a^b f(x)\,dx
$$
and say $f$ is **Riemann integrable**.

---

## 5. Refinement of Partitions

- If $P^* \supseteq P$, then $P^*$ is a **refinement** of $P$.  
- If $P = P_1 \cup P_2$, then $P$ is the **common refinement** of $P_1, P_2$.

---

## 6. Riemann–Stieltjes Integral

**Definition 6.1 (Riemann–Stieltjes Integral).**  
Let $f:[a,b] \to \mathbb{R}$ be bounded, and let $\alpha:[a,b]\to\mathbb{R}$ be **monotonically increasing**.  
Define:
$$
\Delta \alpha_i = \alpha(x_i) - \alpha(x_{i-1}) \geq 0.
$$

- Lower sum:
$$
L(P,f,\alpha) = \sum_{i=1}^n m_i \Delta \alpha_i
$$
- Upper sum:
$$
U(P,f,\alpha) = \sum_{i=1}^n M_i \Delta \alpha_i
$$

**Theorem 6.1 (Bounds on Riemann–Stieltjes Sums).**  
For all partitions $P$,
$$
m(\alpha(b)-\alpha(a)) \leq L(P,f,\alpha) \leq U(P,f,\alpha) \leq M(\alpha(b)-\alpha(a)).
$$

**Proof:**  
Same reasoning as Theorem 3.1, but using $\Delta \alpha_i \geq 0$ since $\alpha$ is monotone increasing.  
□

**Definition 6.2 (Riemann–Stieltjes Integrability).**  
- Lower integral:
$$
\underline{\int_a^b} f(x)\,d\alpha(x) = \sup_{P} L(P,f,\alpha)
$$
- Upper integral:
$$
\overline{\int_a^b} f(x)\,d\alpha(x) = \inf_{P} U(P,f,\alpha)
$$

If equal, then:
$$
\int_a^b f(x)\,d\alpha(x)
$$
exists, and $f$ is **Riemann–Stieltjes integrable**.

---

## 7. Special Case

If $\alpha(x) = x$, then:
$$
\int_a^b f(x)\,d\alpha(x) = \int_a^b f(x)\,dx
$$
Thus the Riemann integral is a **special case** of the Riemann–Stieltjes integral.

---

## 8. Summary
- Defined bounded function, partition, infimum, supremum.  
- Introduced lower and upper Riemann sums.  
- Defined Riemann integrability.  
- Extended to Riemann–Stieltjes integral using monotone increasing $\alpha$.  
- Riemann integral = special case with $\alpha(x)=x$.

---

## 9. Footer: Glossary & Notation

### Glossary
- **Bounded Function:** $f:[a,b]\to\mathbb{R}$ is bounded if $\exists m,M \in \mathbb{R}$ with $m \leq f(x)\leq M$ for all $x\in[a,b]$.  
- **Partition:** A finite sequence $a=x_0<x_1<\dots<x_n=b$.  
- **Mesh:** $\Delta x_i = x_i-x_{i-1}$.  
- **Infimum (inf):** Greatest lower bound of a set.  
- **Supremum (sup):** Least upper bound of a set.  
- **Riemann Integral:** Defined using limits of sums over partitions.  
- **Riemann–Stieltjes Integral:** Generalization of Riemann integral with monotone increasing $\alpha$.  

### Notation
- $\mathbb{R}$ = set of real numbers  
- $\mathbb{N}$ = set of natural numbers  
- $L(P,f)$ = lower Riemann sum  
- $U(P,f)$ = upper Riemann sum  

---

End of Transcript
