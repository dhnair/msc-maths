---
title: "EMTH515 - U01T01 Study Notes"
course: "EMTH515 - Real Analysis I"
lecture: "U01T01 - Riemann-Stieltjes Integral (Definition & Existence)"
type: "StudyNotes"
tags: [MScMathematics, RealAnalysis, EMTH515, Revision, QuickNotes]
---

# Quick Revision Notes: Riemann–Stieltjes Integral

## Key Concepts
- Partition: P = {x₀, x₁, …, xₙ}, with a = x₀, b = xₙ.
- mᵢ = inf f(x), Mᵢ = sup f(x) on subintervals.
- Δxᵢ = xᵢ − xᵢ₋₁ ≥ 0.

## Riemann Sums
- Lower sum: L(P,f) = Σ mᵢ Δxᵢ
- Upper sum: U(P,f) = Σ Mᵢ Δxᵢ
- Relation: m(b−a) ≤ L(P,f) ≤ U(P,f) ≤ M(b−a)
- If sup L(P,f) = inf U(P,f), then f is Riemann integrable.

## Riemann–Stieltjes Generalization
- α: monotonically increasing function.
- Δαᵢ = α(xᵢ) − α(xᵢ₋₁) ≥ 0.
- Lower sum: L(P,f,α) = Σ mᵢ Δαᵢ
- Upper sum: U(P,f,α) = Σ Mᵢ Δαᵢ
- Relation: m(α(b)−α(a)) ≤ L(P,f,α) ≤ U(P,f,α) ≤ M(α(b)−α(a))
- If equal → f ∈ R(α).

## Special Case
- If α(x) = x → Riemann integral is a special case of Riemann–Stieltjes integral.

---
Use these notes for **quick recall before exams**.
