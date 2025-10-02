---
title: "EMTH515 - U01T01 Full Transcript"
course: "EMTH515 - Real Analysis I"
lecture: "U01T01 - Riemann-Stieltjes Integral (Definition & Existence)"
type: "Transcript"
tags: [MScMathematics, RealAnalysis, EMTH515, Transcript, LectureNotes]
---

# Real Analysis I - Unit 01 Topic 01

## Introduction
This lecture introduces the **Riemann-Stieltjes integral**, its definition, existence, and properties.

## Function Setup
- Let f: [a,b] → R be a **bounded function**.
- Partition P = {x₀, x₁, …, xₙ} with a = x₀ ≤ x₁ ≤ … ≤ xₙ = b.
- Define:  
  - mᵢ = inf f(x) on [xᵢ₋₁, xᵢ]  
  - Mᵢ = sup f(x) on [xᵢ₋₁, xᵢ]  
  - Δxᵢ = xᵢ − xᵢ₋₁ ≥ 0

Bounds: m ≤ mᵢ ≤ Mᵢ ≤ M, where m, M are global bounds of f.

## Sums
- **Lower sum**: L(P,f) = Σ mᵢ Δxᵢ  
- **Upper sum**: U(P,f) = Σ Mᵢ Δxᵢ

Important relation:  
m(b−a) ≤ L(P,f) ≤ U(P,f) ≤ M(b−a)

- **Lower Riemann integral**: supₚ L(P,f)  
- **Upper Riemann integral**: infₚ U(P,f)

If both are equal, f is **Riemann integrable**, denoted f ∈ R.

## Refinement of Partitions
- A refinement P* contains P.  
- Common refinement: P = P₁ ∪ P₂.

## Riemann–Stieltjes Integral
- Generalization: ∫ₐᵇ f(x) dα(x)
- Here, f is bounded, α is monotonically increasing.  
- Define Δαᵢ = α(xᵢ) − α(xᵢ₋₁) ≥ 0.

- Lower sum: L(P,f,α) = Σ mᵢ Δαᵢ  
- Upper sum: U(P,f,α) = Σ Mᵢ Δαᵢ

Relation:  
m(α(b)−α(a)) ≤ L(P,f,α) ≤ U(P,f,α) ≤ M(α(b)−α(a))

- **Lower Riemann–Stieltjes integral**: supₚ L(P,f,α)  
- **Upper Riemann–Stieltjes integral**: infₚ U(P,f,α)

If equal, then f ∈ R(α), i.e., f is Riemann–Stieltjes integrable.

## Important Note
- Riemann integral is a **special case** of Riemann–Stieltjes integral when α(x) = x.

---
End of Lecture Transcript
