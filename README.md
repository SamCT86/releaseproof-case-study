# ReleaseProof — verify the artifact that will actually ship

[![verify-reference](https://github.com/SamCT86/releaseproof-case-study/actions/workflows/verify-reference.yml/badge.svg)](https://github.com/SamCT86/releaseproof-case-study/actions/workflows/verify-reference.yml)

**Engineering signal:** release identity, artifact provenance, evidence integrity and reproducible rechecks.

**Portfolio:** https://sarmadtawfeek.se

A green source tree is not the same thing as a verified release artifact. Build configuration, environment, packaging or recheck drift can make valid-looking evidence belong to something other than the binary being shipped.

ReleaseProof treats that identity problem as a first-class system invariant:

> **Evidence belongs to the exact artifact and environment that produced it.**

This repository publishes a small executable verifier for that boundary. The broader release-verification runtime remains private.

## Run the verifier

```bash
git clone https://github.com/SamCT86/releaseproof-case-study.git
cd releaseproof-case-study
npm test
```

Primary surfaces:

- `src/reference-release-verifier.mjs` — exact-artifact verification logic
- `test/reference-release-verifier.test.mjs` — identity, cross-artifact and inconclusive-state tests
- `fixtures/exact-artifact-pass.json` — synthetic exact-build evidence
- `PROOF.md` — broader implementation evidence
- `PUBLIC_BOUNDARY.md` — public/private boundary

## Release identity contract

```text
candidate artifact identity
+ original same-artifact evidence
+ recheck same-artifact evidence
+ expected environment
+ complete evidence chain
→ PASS | FAIL | INCONCLUSIVE
```

The executable reference demonstrates that:

1. observed artifact mismatch fails closed;
2. evidence from another build cannot be silently reused;
3. recheck evidence from another artifact cannot be mixed in;
4. environment mismatch remains `INCONCLUSIVE`;
5. incomplete evidence remains `INCONCLUSIVE`;
6. only an exact, complete, same-environment chain reaches `PASS`.

The object being verified is the artifact being shipped—not the intent represented by a branch, commit message or source directory.

## Why this matters

Release automation becomes misleading when it can answer “tests passed” without proving **which artifact** those tests actually describe.

The private implementation goes materially further: artifact resolution, journey execution, provider observations, evidence capture, hash-bound receipts, recheck/sign-off, canary apps, persistence, CI and commercial-environment tooling.

A representative private mechanism verifies finalization hashes and artifact/run/evidence identity before a recheck can resolve an adverse finding. That implementation stays private; the public reference isolates the transferable engineering invariant.

## Public / private boundary

Published here:

- bounded exact-artifact verification logic;
- synthetic artifact/evidence identities;
- executable tests and CI;
- non-proprietary system documentation.

Kept private:

- production artifact resolver/runtime;
- provider credentials and environments;
- canary/customer artifacts and evidence;
- production schemas and infrastructure;
- proprietary release workflows and unreleased commercial logic.

## Engineering accountability

AI tools are part of my implementation workflow. I remain accountable for problem framing, architecture constraints, debugging, acceptance criteria, verification design, tests and release decisions.

## Related engineering proof

- [Agent Forecast Foundry](https://github.com/SamCT86/agent-forecast-foundry-case-study) — bounded post-model verification and AI evaluation mechanics.
- [MachineOutcome](https://github.com/SamCT86/machineoutcome-case-study) — observed-state reconciliation before agent retry.
- [Billable Meetings](https://github.com/SamCT86/billable-meetings-os-case-study) — deterministic commercial decisions from contract + evidence.
- [PriceBriefs](https://github.com/SamCT86/pricebriefs-case-study) — source eligibility and evidence-backed market decisions.

## Scope

ReleaseProof does not predict or guarantee App Store approval. This repository does not claim customer outcome metrics, broad framework coverage, product-market fit, or that this bounded reference is the production ReleaseProof runtime.
