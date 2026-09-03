# Observable proof

This file exists to answer the hiring-manager question that a case-study README cannot answer by itself:

> **What is actually implemented, and what evidence exists that the system behaves as described?**

The points below were derived from a fresh read of the private implementation repository. No private source code, prompts, exact contracts, selectors, credentials or raw release artifacts are copied here.

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

Evidence records are bound to a concrete artifact identity rather than an `auto` or floating latest-build concept. Rechecks are designed to compare evidence only when provenance is sufficiently comparable.

### Preserved failure replay

The implementation includes a preserved-failure replay path whose criterion is that the **same failing build should reproduce the same correctly classified result across repeated runs**.

That matters because a recheck system is weak if it silently changes the identity of the thing being evaluated.

### Test evidence

The private source contains automated tests around runtime evidence and identical-recheck behavior, in addition to ordinary lint/typecheck/build workflows.

## One concrete failure mode

A historical runtime artifact and a later project/filesystem snapshot can diverge.

The tempting shortcut is to treat the later snapshot as if it were the thing that produced the earlier result. That creates cleaner-looking evidence and weaker truth.

The system instead keeps the relationship explicit and refuses to collapse different artifact states into one proof record.

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

## What I can defend in an interview

- why exact artifact identity is part of the product rather than bookkeeping;
- why environment must travel with the verdict;
- why missing evidence maps to `INCONCLUSIVE` instead of guesswork;
- how a recheck can become invalid through cross-artifact evidence mixing;
- why controlled mechanism proof and commercial-environment proof are separate gates;
- where AI accelerated implementation and where deterministic evidence had to overrule model plausibility.

## Disclosure boundary

The exact schemas, verifier implementation, selectors, fixtures, artifact hashes, operational credentials and raw evidence stay private. The goal here is to make the **existence and shape of the engineering proof inspectable** without making the product reproducible from the portfolio repo.
