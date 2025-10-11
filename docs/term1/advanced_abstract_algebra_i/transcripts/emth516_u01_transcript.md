---
title: "EMTH516 – Unit 1: Review of Groups (Transcript)"
course: "Advanced Abstract Algebra I"
lecture: "Unit 1 – Review of Groups"
type: "Transcript"
tags: [MScMathematics, Transcript, EMTH516, Groups]
---

# EMTH516 – Unit 1: Review of Groups

## Learning Outcomes
After completing this unit, you will be able to:
- Understand the concept of binary operations on sets.
- Analyze algebraic structures such as groups and subgroups.
- Understand the properties of cosets and normal subgroups.
- State and prove Lagrange’s theorem.
- Find the order of an element of a group.
- Define cyclic and quotient (factor) groups.
- Define and work with homomorphisms and isomorphisms between groups.

---

## 1. Introduction
Group theory is one of the oldest and most powerful branches of abstract algebra. It finds applications across mathematics, physics, chemistry, and computer science. Its origins lie in the work of Lagrange, Ruffini, and Galois during the eighteenth and nineteenth centuries.

This unit provides a comprehensive review of groups, subgroups, normal subgroups, cosets, homomorphisms, isomorphisms, and related results that serve as foundations for later topics such as rings, fields, and Galois theory.

---

## 1.1 Definition of Group and Subgroup

### Binary Operations on a Set
A **binary operation** $*$ on a non-empty set $S$ is a function $* : S \times S \to S$ that assigns every ordered pair $(a, b) \in S \times S$ to a unique element $a * b \in S$.

#### Examples
1. **(Integers under addition)**: Addition, subtraction, and multiplication of integers are binary operations on $\mathbb{Z}$.
2. **(Function composition)**: If $X$ is a non-empty set and $F(X)$ denotes all functions from $X \to X$, then function composition is a binary operation on $F(X)$.

#### Non-examples
1. Subtraction is *not* a binary operation on $\mathbb{N}$ (e.g. $2 - 3 = -1 \notin \mathbb{N}$).
2. Division is *not* a binary operation on $\mathbb{Z}$ (e.g. $1 / 2 \notin \mathbb{Z}$).

---

### Properties of Binary Operations
Let $*$ be a binary operation on $S$.

1. **Closure:** $a * b \in S,\ \forall a,b \in S.$  
2. **Associativity:** $(a * b) * c = a * (b * c).$  
3. **Identity Element:** An element $e \in S$ such that $e * a = a * e = a,\ \forall a \in S.$  
4. **Inverse Element:** For $a \in S$, an element $b \in S$ such that $a * b = b * a = e.$  
5. **Commutativity:** $a * b = b * a,\ \forall a,b \in S.$

---

### Examples of Properties
- Addition on $\mathbb{Z}$ is **associative** and **commutative**, with identity $0$ and inverses $-a$.
- Multiplication on $\mathbb{Z}$ is associative and commutative but not every element has an inverse (only 1 and -1).
- Subtraction on $\mathbb{Z}$ is neither associative nor commutative and lacks an identity.

---

### Algebraic Structures
- **Quasi-group:** Any non-empty set with a binary operation.  
- **Semigroup:** A set with an associative binary operation.  
- **Monoid:** A semigroup with an identity element.  
- **Group:** A monoid in which every element has an inverse.

---

### Definition 1.1.15 (Group)
A **group** is a non-empty set $G$ equipped with a binary operation $*$ satisfying:
1. **Associativity:** $(a*b)*c = a*(b*c),\ \forall a,b,c \in G.$  
2. **Identity:** There exists $e \in G$ such that $e*a = a*e = a,\ \forall a \in G.$  
3. **Inverse:** For each $a \in G$, there exists $a^{-1} \in G$ such that $a*a^{-1} = a^{-1}*a = e.$

A group is **abelian** if it also satisfies commutativity.

#### Examples
1. $(\mathbb{Z}, +)$ – Group under addition.  
2. $(\mathbb{Q}^*, \times)$ – Non-zero rationals under multiplication.  
3. $(M_{2}(\mathbb{R}), +)$ – 2×2 real matrices under addition.  
4. $\{1, -1, i, -i\}$ under complex multiplication – finite group of order 4.

---

### Subgroups
A non-empty subset $H \subseteq G$ is a **subgroup** of $G$ if it is itself a group under the same operation.

#### Theorem 1.1.27 (Subgroup Criterion)
A non-empty subset $H \subseteq G$ ius a subgroup of $G$ iff $ab^{-1} \in H,\ \forall a,b \in H.$

#### Example
Let $G = (\mathbb{R}, +)$ and $H = (\mathbb{Z}, +)$. Then $H$ is a subgroup of $G$.

---

## 1.2 Normal Subgroups and Cosets

### Cosets
If $H$ is a subgroup of $G$ and $g \in G$, the **left coset** of $H$ in $G$ is $gH = \{gh \mid h \in H\}$, and the **right coset** is $Hg = \{hg \mid h \in H\}.$

Cosets partition the group into disjoint subsets of equal size.

#### Theorem 1.2.5 (Lagrange’s Theorem)
If $H$ is a subgroup of finite group $G$, then the order of $H$ divides the order of $G$:
$$
|G| = [G:H] \cdot |H|
$$

---

### Normal Subgroups
A subgroup $H \trianglelefteq G$ (read “H is normal in G”) if $gH = Hg,\ \forall g \in G.$

Equivalent condition: $g^{-1}hg \in H,\ \forall g \in G, h \in H.$

#### Example
The center of a group $Z(G) = \{x \in G \mid xg = gx,\ \forall g \in G\}$ is a normal subgroup.

---

## 1.3 Order of Elements and Factor Groups

### Order of an Element
The **order** of an element $a \in G$ is the least positive integer $n$ such that $a^n = e$. If no such $n$ exists, $a$ is of infinite order.

#### Example
In $(\mathbb{C}^*, \times)$, $i$ has order 4 since $i^4 = 1.$

### Cyclic Groups
A group $G$ is **cyclic** if there exists an element $a \in G$ such that every element of $G$ can be written as a power of $a$. We write $G = \langle a \rangle.$

Every cyclic group is abelian.

### Factor (Quotient) Groups
If $H \trianglelefteq G$, the set of all right cosets $G/H = \{Hg \mid g \in G\}$ forms a group under the operation:
$$
(Ha)(Hb) = H(ab)
$$
This group is called the **quotient group** of $G$ modulo $H$.

---

## 1.4 Group Homomorphisms
A function $\phi: (G, *) \to (G', \circ)$ is a **group homomorphism** if
$$
\phi(a*b) = \phi(a) \circ \phi(b),\ \forall a,b \in G.
$$

### Key Results
- $\phi(e_G) = e_{G'}$  
- $\phi(a^{-1}) = (\phi(a))^{-1}$

### Kernel and Image
- **Kernel:** $\ker(\phi) = \{g \in G \mid \phi(g) = e'\}$  
- **Image:** $\text{Im}(\phi) = \{\phi(g) \mid g \in G\}$

#### Theorem
The kernel of a homomorphism is a normal subgroup of $G$. The image is a subgroup of $G'$.

#### Fundamental Theorem of Homomorphisms
If $\phi: G \to G'$ is a homomorphism, then
$$
G/\ker(\phi) \cong \text{Im}(\phi).
$$

---

## 1.5 Permutation Groups and Integers Modulo n

### Symmetric Group
The **symmetric group** on $n$ symbols, denoted $S_n$, is the set of all bijections from $\{1,2,\dots,n\}$ to itself under composition.  
$|S_n| = n!$

Each element of $S_n$ is a **permutation** and can be written in cycle notation.

### Alternating Group
The **alternating group** $A_n$ is the subgroup of even permutations of $S_n$, with order $n!/2.$

### Group of Integers Modulo n
Let $\mathbb{Z}_n = \{0,1,2,\dots,n-1\}$ with operation addition modulo $n$. Then $(\mathbb{Z}_n, +_n)$ is a finite cyclic group of order $n$.

---

## Summary
- Binary operations and algebraic structures build up to the definition of a group.
- Subgroups, cosets, and normal subgroups structure groups into layers.
- Lagrange’s theorem links subgroup size to the group order.
- Homomorphisms preserve group structure, with kernels leading to quotient groups.
- Symmetric and cyclic groups provide concrete examples of abstract theory.

---

## Self-Assessment (MCQs)
1. Which of the following is **not** a semigroup?  
   - A. $(\mathbb{Q}, +)$  
   - B. $(\mathbb{Q}, \cdot)$  
   - C. $(\mathbb{Z}, +)$  
   - D. $(\mathbb{Z}, -)$  

2. Which of the following is **not** a binary operation on $\mathbb{Z}$?  
   - A. Addition  
   - B. Multiplication  
   - C. Division  
   - D. Subtraction  

3. A quasigroup is a group if:  
   - A. It is associative  
   - B. It has an identity element  
   - C. Every element has an inverse  
   - D. All of the above  

4. Let $G$ be a cyclic group of order $n$. Then every element $a \in G$ satisfies $a^n = e$.  

5. The center $Z(G)$ of a group $G$ is:  
   - A. Always a subgroup  
   - B. Always normal  
   - C. Both (A) and (B)

---

## Review Questions
1. Prove that the set of cube roots of unity forms a finite group under multiplication.  
2. Show that the set of positive rationals with operation $a*b = ab/2$ forms an abelian group.  
3. Determine which of the following systems are groups:  
   - (i) Non-singular 2×2 matrices under multiplication.  
   - (ii) Natural numbers under addition.  
   - (iii) Real numbers under multiplication.  
4. Prove that the identity element of a group is unique.  
5. Prove that if $H$ and $K$ are normal in $G$, then $HK$ is normal in $G$.

---

## Further Reading
- Bhattacharya, Jain & Nagpal, *Basic Abstract Algebra* (Cambridge University Press)  
- I.N. Herstein, *Topics in Algebra* (Wiley)  
- Dummit & Foote, *Abstract Algebra* (Wiley)  
- NPTEL Online Course: [Abstract Algebra](https://nptel.ac.in/courses/111102009)

---

## Glossary
- **Binary Operation:** Rule combining two elements to produce one.  
- **Subgroup:** Non-empty subset closed under operation and inverses.  
- **Normal Subgroup:** Subgroup invariant under conjugation.  
- **Cyclic Group:** Generated by one element.  
- **Homomorphism:** Structure-preserving map between groups.  
- **Isomorphism:** Bijective homomorphism.

---

End of Transcript.
