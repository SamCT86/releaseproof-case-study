# ReleaseProof - verify the artifact that will actually ship

[![verify-reference](https://github.com/SamCT86/releaseproof-case-study/actions/workflows/verify-reference.yml/badge.svg)](https://github.com/SamCT86/releaseproof-case-study/actions/workflows/verify-reference.yml)

**Portfolio:** https://sarmadtawfeek.se

A green source tree does not automatically mean the final release artifact is verified.

Build settings, environment differences, packaging, or a later recheck can make valid-looking evidence belong to something other than the binary that will actually ship. I built ReleaseProof around that identity problem.

> **Release evidence should belong to the exact artifact and environment that produced it.**

This repository contains a small executable verifier for that rule. The broader release-verification system remains private.

## Try it

```bash
git clone https://github.com/SamCT86/releaseproof-case-study.git
cd releaseproof-case-study
npm test
```

## How it works

```text
candidate artifact identity
+ original evidence from that artifact
+ recheck evidence from that artifact
+ expected environment
+ complete evidence chain
-> PASS | FAIL | INCONCLUSIVE
```

The reference demonstrates that:

1. artifact mismatch fails closed;
2. evidence from another build cannot be reused silently;
3. original and recheck receipts must name the same environment as the candidate;
4. recheck evidence from another artifact cannot be mixed in;
5. malformed or empty identity fields remain `INCONCLUSIVE`;
6. environment mismatch stays `INCONCLUSIVE`;
7. incomplete evidence stays `INCONCLUSIVE`;
8. only an exact, complete, same-artifact and same-environment chain reaches `PASS`.

The object being verified is the artifact that will ship, not the intent represented by a branch name, commit message, or source directory. The public verifier treats artifact identity and environment as part of the evidence contract; matching values are not enough if required identity fields are empty or malformed.

## What to inspect

- `src/reference-release-verifier.mjs` - exact-artifact verification logic.
- `test/reference-release-verifier.test.mjs` - identity, cross-artifact, and inconclusive-state tests.
- `fixtures/exact-artifact-pass.json` - synthetic exact-build evidence.
- `PROOF.md` - broader implementation evidence.
- `PUBLIC_BOUNDARY.md` - what is public and what stays private.

## Why this matters

Release automation becomes misleading when it can say "tests passed" without proving **which artifact** those tests describe.

The private implementation goes further with artifact resolution, journey execution, provider observations, evidence capture, hash-bound receipts, recheck/sign-off, canary apps, persistence, CI, and commercial-environment tooling.

A representative private mechanism checks finalization hashes and artifact/run/evidence identity before a recheck can resolve an adverse finding. That implementation stays private; this repository isolates the reusable engineering pattern.

## Public and private boundary

Published here:

- exact-artifact verification logic;
- synthetic artifact and evidence identities;
- executable tests and CI;
- non-proprietary system documentation.

Kept private:

- production artifact resolver and runtime;
- provider credentials and environments;
- canary/customer artifacts and evidence;
- production schemas and infrastructure;
- proprietary release workflows and unreleased commercial logic.

## The claim I want this repo to earn

If a release check says `PASS`, the evidence should be tied to the exact artifact and environment being judged. That is the engineering idea this public slice is built to demonstrate.

It does **not** predict App Store approval, prove customer outcomes, claim broad framework coverage, or pretend that this reference is the production ReleaseProof runtime.

I use AI tools during implementation. I still own the identity model, failure cases, debugging, verification design, tests, and release decisions.

For the broader portfolio and how these public references fit together, see [my GitHub profile](https://github.com/SamCT86) or [sarmadtawfeek.se](https://sarmadtawfeek.se).