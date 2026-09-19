# ReleaseProof — exact-artifact release verification, runnable reference

[![verify-reference](https://github.com/SamCT86/releaseproof-case-study/actions/workflows/verify-reference.yml/badge.svg)](https://github.com/SamCT86/releaseproof-case-study/actions/workflows/verify-reference.yml)

A public, executable engineering reference for one ReleaseProof principle: **evidence belongs to the exact artifact and environment that produced it.** The production release-verification system remains private.

## Run locally

```bash
git clone https://github.com/SamCT86/releaseproof-case-study.git
cd releaseproof-case-study
npm test
```

Then inspect:

- `src/reference-release-verifier.mjs` — bounded exact-artifact verifier;
- `test/reference-release-verifier.test.mjs` — identity, cross-artifact and inconclusive-state tests;
- `fixtures/exact-artifact-pass.json` — synthetic exact-build evidence;
- `PROOF.md` — broader implementation evidence;
- `PUBLIC_BOUNDARY.md` — what intentionally stays private.

## What this proves

The reference enforces a small release-evidence contract:

```text
exact artifact identity
+ same-artifact original evidence
+ same-artifact recheck evidence
+ expected environment
+ complete evidence
→ PASS | FAIL | INCONCLUSIVE
```

It demonstrates that:

- observed artifact mismatch fails closed;
- evidence from another artifact cannot be silently reused;
- recheck evidence from another artifact cannot be mixed in;
- environment mismatch is `INCONCLUSIVE`, not a pass;
- incomplete evidence is `INCONCLUSIVE`, not a pass;
- only an exact, complete, same-environment evidence chain reaches `PASS`.

This is deliberately stricter than source-level confidence. The artifact being shipped is the object being verified.

## Production system

The private implementation is materially broader: artifact resolution, journey execution, provider observations, evidence capture, recheck/sign-off, canary apps, control surfaces, persistence, CI and commercial-environment tooling. None of that production runtime is published here.

This repository is a **reference edition**, not a source release of ReleaseProof.

## Engineering ownership

AI tools are part of my implementation workflow. I use them to accelerate investigation, implementation, testing and review, while remaining accountable for the system boundary, architecture constraints, code review, debugging, acceptance criteria and the decision to ship or reject a change.

The useful question here is not who typed each token. It is whether the behavior is explicit, testable, reproducible and safe under failure. The executable tests and design trade-offs in this repository are the public evidence for that claim.

## Public/private boundary

Public here:

- bounded exact-artifact verification logic;
- synthetic artifact/evidence identities;
- executable tests;
- CI;
- non-proprietary system/evidence documentation.

Private:

- production artifact resolver/runtime;
- provider credentials and environments;
- canary/customer artifacts and evidence;
- production schemas and infrastructure;
- proprietary release workflows and unreleased commercial logic.

## Related runnable references

- [Billable Meetings](https://github.com/SamCT86/billable-meetings-os-case-study) — deterministic contract + evidence → billability.
- [MachineOutcome](https://github.com/SamCT86/machineoutcome-case-study) — observed-state verification and safe retry boundaries.
- [PriceBriefs](https://github.com/SamCT86/pricebriefs-case-study) — evidence eligibility and explicit refusal states.

## Not claimed

ReleaseProof does not predict or guarantee App Store approval. This repository does not claim customer outcome metrics, broad framework coverage, product-market fit, or that this small reference implementation is the production ReleaseProof runtime.
