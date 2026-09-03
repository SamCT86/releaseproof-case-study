# Observable proof

This file answers a hiring-manager question that a case-study README cannot answer by itself:

> **What is actually implemented, and what evidence exists that the system behaves as described?**

The points below were derived from a fresh read of the private implementation repository. No private source code, prompts, exact contracts, selectors, credentials or raw release artifacts are copied here.

**Ownership note:** implementation evidence is not the same as a claim that I personally hand-authored or independently selected every low-level technical mechanism. My direct role is product research/direction, system blueprint and requirements, expert/persona orchestration, acceptance criteria and quality gates; AI is used heavily in implementation.

## Implemented surfaces visible in the private source

The current implementation contains distinct components for:

- a web/control surface;
- an Expo / React Native release canary;
- shared release/evidence contracts;
- exact-artifact and inventory resolution;
- runtime journey execution;
- evidence capture and failure classification;
- identical recheck comparison;
- CI / operational scripts and tests.

The current core journey covers **purchase → provider entitlement → local premium access → clean-session restore**.

## Evidence-backed behavior

### Controlled subscription mechanism proof

The private evidence state records a technically closed controlled gate in **RevenueCat Test Store**.

Safe public conclusion:

> The bounded subscription mechanism has demonstrated controlled-environment behavior strongly enough to pass that internal mechanism gate.

Unsafe conclusion — intentionally not made:

> The exact commercial Apple submission candidate has therefore been proven in Apple Sandbox/TestFlight.

Those are different environments and different claims.

### Artifact-bound verdicts

Evidence records are bound to a concrete artifact identity rather than an `auto` or floating latest-build concept. Rechecks compare evidence only when provenance is sufficiently comparable.

### Preserved failure replay

The implementation includes a preserved-failure replay path whose criterion is that the **same failing build should reproduce the same correctly classified result across repeated runs**.

### Test evidence

The private source contains automated tests around runtime evidence and identical-recheck behavior, in addition to ordinary lint/typecheck/build workflows.

## One concrete failure mode

A historical runtime artifact and a later project/filesystem snapshot can diverge.

Treating the later snapshot as if it produced the earlier result would create cleaner-looking evidence and weaker truth. The implementation instead keeps the relationship explicit.

## Sanitized output shape

See [examples/sanitized-verdict.json](examples/sanitized-verdict.json).

The example is synthetic/redacted, but its fields reflect the public decision model: artifact identity, environment, bounded journey checks, verdict and scope note.

## Implemented now vs still unproven

| Area | Public evidence state |
|---|---|
| Exact-artifact identity | Implemented in private source |
| Subscription journey contracts | Implemented in private source |
| RevenueCat Test Store mechanism proof | Controlled gate passed |
| Runtime evidence + recheck tooling | Implemented / tested |
| Apple Sandbox/TestFlight commercial-environment proof | Not claimed here |
| Customer adoption / paid repeat use | Not claimed |
| Broad framework coverage | Not claimed |

## What I personally own and can explain

- why I pursued the release-verification problem and what product risk I wanted the system to address;
- the high-level blueprint and required product behavior;
- how I structured expert/persona workflows to research, build, critique and revise the system;
- the quality gates and evidence standard I required before accepting stronger claims;
- what the current proof supports and what it explicitly does not support;
- how I send AI-generated work back for further iteration when it does not meet the system or quality requirements.

For low-level choices such as a specific library, data structure or implementation technique, I distinguish between **implementation evidence** and **a decision I personally made**.

## Disclosure boundary

The exact schemas, verifier implementation, selectors, fixtures, artifact hashes, operational credentials and raw evidence stay private. The goal is to make the existence and shape of the engineering proof inspectable without making the product reproducible from the portfolio repo.
