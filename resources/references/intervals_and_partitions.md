---
title: "Intervals and Partitions"
course: "Preliminaries for Real Analysis"
lecture: "Intervals and Partitions of Intervals"
type: "Transcript"
tags: [MScMathematics, RealAnalysis, Transcript, Notes]
---

# Transcript: Intervals and Partitions in Real Analysis

---

## Learning Outcomes
By the end of this note, you should be able to:
1. Define and distinguish between **open, closed, and half-open intervals**.  
2. Represent intervals both formally (set-builder notation) and geometrically (number line).  
3. Understand the role of intervals in defining **partitions**.  
4. Explain what a **partition** of an interval is and why it is important for **Riemann integration**.  

---

## 1. Intervals

An **interval** is a subset of the real numbers $\mathbb{R}$ consisting of all real numbers lying between two given numbers $a$ and $b$ (with $a < b$).

### Closed Interval
$$
[a,b] = \{ x \in \mathbb{R} : a \leq x \leq b \}.
$$
- Includes both endpoints.
- Example: $[0,1] = \{ x : 0 \leq x \leq 1 \}$.

### Open Interval
$$
(a,b) = \{ x \in \mathbb{R} : a < x < b \}.
$$
- Excludes both endpoints.
- Example: $(0,1) = \{ x : 0 < x < 1 \}$.

### Half-Open Intervals
$$
[a,b) = \{ x : a \leq x < b \}, \quad (a,b] = \{ x : a < x \leq b \}.
$$
- Includes only one endpoint.

---

## 2. Partitions of Intervals

**Definition:** A **partition** $P$ of an interval $[a,b]$ is a finite sequence of points
$$
P = \{x_0, x_1, \dots, x_n\}
$$
such that
$$
a = x_0 < x_1 < x_2 < \dots < x_{n-1} < x_n = b.
$$

- The points divide the interval $[a,b]$ into **subintervals**
  $$
  [x_0, x_1], [x_1, x_2], \dots, [x_{n-1}, x_n].
  $$

- If instead we considered an **open interval** $(a,b)$, then the partition would satisfy
  $$
  a < x_0 < x_1 < \dots < x_n < b.
  $$
  But in Riemann integration, we almost always work with closed intervals $[a,b]$.

---

## 3. Why Partitions Matter

- **Riemann Integration:** A Riemann sum is formed by choosing sample points in each subinterval of a partition, then summing up rectangles that approximate the area under a curve.
- **Flexibility:** Different partitions lead to different Riemann sums, but as partitions become finer, these sums approach the integral.
- **Endpoint Inclusion:** The use of closed intervals $[a,b]$ ensures that both boundary points are included, avoiding ambiguity.

---

## 4. Visual Representation

On the number line:

- Partition of $[a,b]$:  
  $a = x_0 < x_1 < x_2 < \dots < x_n = b$.

- This creates subintervals:
  $[x_0,x_1], [x_1,x_2], \dots, [x_{n-1},x_n]$.

---

## Glossary

- **Interval:** A set of real numbers between two endpoints.  
- **Closed interval:** $[a,b]$, includes both endpoints.  
- **Open interval:** $(a,b)$, excludes both endpoints.  
- **Half-open interval:** Includes one endpoint, excludes the other.  
- **Partition:** A finite ordered set of points dividing an interval into smaller subintervals.  
- **Subinterval:** A smaller interval formed by consecutive points of a partition.  
- **Riemann sum:** Approximation of an integral using a partition and sample points.  

---

✅ **Summary:**  
- Intervals may be open, closed, or half-open depending on whether endpoints are included.  
- A partition of $[a,b]$ is a finite ordered set $a = x_0 < x_1 < \dots < x_n = b$.  
- Partitions are the foundation for defining Riemann sums and integrals.
