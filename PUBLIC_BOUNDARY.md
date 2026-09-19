# Public disclosure boundary

This repository contains a **bounded public reference implementation** for inspecting and running one engineering invariant. It is not a mirror or source release of the private ReleaseProof production system.

## Intentionally public

- the exact-artifact release-verification problem;
- a small independently bounded artifact/evidence verifier;
- synthetic artifact identities, adversarial tests and public CI;
- `PASS | FAIL | INCONCLUSIVE` behavior;
- no-cross-artifact evidence mixing and environment-bound verdict principles;
- selected engineering trade-offs and failure-state philosophy;
- the AI-assisted workflow at a non-sensitive level;
- explicit non-claims.

## Intentionally private

- production artifact resolver, journey/runtime and provider implementation;
- real canary/customer artifacts and private evidence;
- production schemas, infrastructure and environment configuration;
- provider credentials, secrets, selectors and unpublished endpoints;
- proprietary release workflows and unreleased commercial logic;
- internal prompts/agent instructions and private repository/document state;
- private commercial experiments and roadmap sequencing;
- implementation details that would materially reproduce the production system.

## Release rule

Public proof is selected by default-deny:

`PRIVATE SOURCE → MINIMUM PROOF → SYNTHETIC ARTIFACTS → IP/SECRET REVIEW → TEST → PUBLIC`

The reference edition demonstrates identity and evidence integrity without exposing the production release runtime.

No license to the private implementation is granted or implied by this public reference edition.
