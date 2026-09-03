# System view

This diagram is intentionally an abstraction. It explains the decision flow without publishing implementation architecture.

```text
┌───────────────────────────┐
│ Exact iOS release candidate│
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ Critical subscription path│
│ purchase → entitlement →  │
│ clean-session restore     │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ Evidence captured with    │
│ artifact + environment    │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ PASS / FAIL / INCONCLUSIVE│
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ Recheck / sign-off support│
└───────────────────────────┘
```

## Boundaries that matter

### Artifact identity
A result should answer **which candidate was evaluated**. Source intent is not enough.

### Journey identity
The system verifies a bounded revenue-critical journey rather than claiming broad application correctness.

### Evidence identity
Evidence belongs to the artifact and execution context that produced it. Mixing evidence across candidates weakens the decision.

### Uncertainty
If relevant evidence is missing or ambiguous, `INCONCLUSIVE` is a valid state.

## Why this is public

A technical reviewer can inspect the system thinking and ask meaningful questions without receiving the private code, exact contracts, selectors, evidence formats or execution machinery.
