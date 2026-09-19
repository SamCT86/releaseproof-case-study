# ReleaseProof — exact-artifact release verification

[![verify-reference](https://github.com/SamCT86/releaseproof-case-study/actions/workflows/verify-reference.yml/badge.svg)](https://github.com/SamCT86/releaseproof-case-study/actions/workflows/verify-reference.yml)

A small executable reference for one ReleaseProof invariant: **evidence belongs to the exact artifact and environment that produced it.** The production release-verification system remains private.

**Portfolio:** https://sarmadtawfeek.se

## Run locally

```bash
git clone https://github.com/SamCT86/releaseproof-case-study.git
cd releaseproof-case-study
npm test
```

Key files:

- `src/reference-release-verifier.mjs` — bounded exact-artifact verifier;
- `test/reference-release-verifier.test.mjs` — identity, cross-artifact and inconclusive-state tests;
- `fixtures/exact-artifact-pass.json` — synthetic exact-build evidence;
- `PROOF.md` — broader implementation evidence;
- `PUBLIC_BOUNDARY.md` — public/private boundary.

## Verification contract

```text
exact artifact identity
+ same-artifact original evidence
+ same-artifact recheck evidence
+ expected environment
+ complete evidence
→ PASS | FAIL | INCONCLUSIVE
```

The reference demonstrates that:

- observed artifact mismatch fails closed;
- evidence from another artifact cannot be silently reused;
- recheck evidence from another artifact cannot be mixed in;
- environment mismatch is `INCONCLUSIVE`, not a pass;
- incomplete evidence is `INCONCLUSIVE`, not a pass;
- only an exact, complete, same-environment evidence chain reaches `PASS`.

The artifact being shipped is the object being verified.

## Production boundary

The private implementation is materially broader: artifact resolution, journey execution, provider observations, evidence capture, recheck/sign-off, canary apps, control surfaces, persistence, CI and commercial-environment tooling. None of that production runtime is published here.

Public here:

- bounded exact-artifact verification logic;
- synthetic artifact/evidence identities;
- executable tests and CI;
- non-proprietary system/evidence documentation.

Private:

- production artifact resolver/runtime;
- provider credentials and environments;
- canary/customer artifacts and evidence;
- production schemas and infrastructure;
- proprietary release workflows and unreleased commercial logic.

## Engineering process

AI tools are part of the implementation workflow. I remain accountable for system boundaries, architecture constraints, code review, debugging, acceptance criteria, tests and release decisions.

## Related references

- [Billable Meetings](https://github.com/SamCT86/billable-meetings-os-case-study) — deterministic contract + evidence → billability.
- [MachineOutcome](https://github.com/SamCT86/machineoutcome-case-study) — observed-state verification and safe retry boundaries.
- [PriceBriefs](https://github.com/SamCT86/pricebriefs-case-study) — evidence eligibility and explicit refusal states.

## Scope

ReleaseProof does not predict or guarantee App Store approval. This repository does not claim customer outcome metrics, broad framework coverage, product-market fit, or that this bounded reference is the production ReleaseProof runtime.
