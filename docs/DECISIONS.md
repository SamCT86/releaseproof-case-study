# Selected engineering decisions

These are public reasoning boundaries, not a dump of private implementation details.

## 1. Verify the exact candidate, not only the repository

A release decision concerns the artifact that will actually be submitted. That makes artifact identity part of the problem, not bookkeeping.

**Trade-off:** a narrower exact-build workflow is less general than broad static analysis, but it produces evidence closer to the release decision that matters.

## 2. Keep the first journey narrow

The core public case focuses on purchase, entitlement and clean-session restore for a bounded subscription path.

**Trade-off:** this does not prove the whole app works. It does make the claim more defensible.

## 3. Treat environment as evidence

A result observed in one environment should not silently be presented as equivalent to a result in another.

**Trade-off:** this adds operational discipline, but prevents a cleaner-looking verdict from outrunning its context.

## 4. Preserve `INCONCLUSIVE`

If the evidence needed for a decision is incomplete, the system should say so.

**Trade-off:** this produces fewer binary answers. It also avoids manufacturing confidence from missing data.

## 5. Recheck without evidence mixing

A recheck after a fix should preserve which evidence came from which release candidate.

**Trade-off:** provenance is more work than a simple pass/fail log, but it keeps the release record inspectable.

## Interview questions this should create

- Why exact-artifact verification instead of source analysis?
- Which evidence is necessary for a blocker?
- How do you distinguish a product failure from an environment failure?
- What makes a recheck reproducible?
- Where would this model break for a different subscription stack?
