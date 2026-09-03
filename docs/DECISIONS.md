# System requirements and trade-offs

These are requirements and trade-offs represented by the current ReleaseProof system. They explain the product/system boundary without claiming that I personally originated every low-level engineering choice used to implement it.

My direct ownership is the product direction, high-level blueprint, expert/persona orchestration, constraints, acceptance criteria and quality gates. The implementation process is heavily AI-assisted.

## 1. Verify the exact candidate, not only the repository

A release decision concerns the artifact that will actually be submitted. That makes artifact identity part of the problem, not bookkeeping.

**Trade-off:** a narrower exact-build workflow is less general than broad static analysis, but it produces evidence closer to the release decision that matters.

## 2. Keep the first journey narrow

The core public case focuses on purchase, entitlement and clean-session restore for a bounded subscription path.

**Trade-off:** this does not prove the whole app works. It does make the claim more defensible.

## 3. Treat environment as evidence

A result observed in one environment should not silently be presented as equivalent to a result in another.

**Trade-off:** more operational discipline, less risk that a verdict outruns its context.

## 4. Preserve `INCONCLUSIVE`

If the evidence needed for a decision is incomplete, the system should say so.

**Trade-off:** fewer binary answers, less manufactured confidence from missing data.

## 5. Recheck without evidence mixing

A recheck after a fix should preserve which evidence came from which release candidate.

**Trade-off:** provenance is more work than a simple pass/fail log, but it keeps the release record inspectable.

## Questions this case study is intended to create

- What release risk is the product trying to remove?
- Why is exact-artifact evidence stronger than a source-only claim for this use case?
- What should count as sufficient evidence for a release decision?
- What makes a recheck trustworthy?
- Which parts of the blueprint were requirements I set, and which low-level choices came from the AI-assisted implementation process?
