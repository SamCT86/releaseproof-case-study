# Verification approach

ReleaseProof is built around a simple principle: **a plausible implementation is not the same thing as verified release behavior**.

## Verification layers

### 1. Candidate identity
The system needs to know which release artifact the evidence belongs to.

### 2. Journey execution
The bounded subscription journey is exercised against explicit expectations rather than inferred from source intent.

### 3. Evidence capture
Relevant observations are preserved with enough context to support later review.

### 4. Verdict discipline
The result should remain one of:

```text
PASS | FAIL | INCONCLUSIVE
```

`INCONCLUSIVE` is not a soft pass. It means the available evidence is insufficient for the stronger claim.

### 5. Recheck
A corrected candidate can be re-evaluated without silently inheriting proof from a different artifact.

## What AI-generated work must survive

AI can accelerate implementation and test generation, but the final decision boundary should still answer:

- Did the exact candidate perform the required journey?
- Is the evidence tied to that candidate and environment?
- Is the failure classification supported by what was observed?
- Is any required evidence missing?
- Can the result be rechecked?

## What is deliberately not public

The private repository contains implementation-specific contracts, fixtures, selectors, execution machinery and evidence structures. Publishing those would make this case study less useful as a portfolio boundary and more useful as a blueprint for reproducing the product.
