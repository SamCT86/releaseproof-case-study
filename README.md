# ReleaseProof — Public Engineering Case Study

**Status:** Building  
**Focus:** Exact-build subscription release verification  
**Portfolio:** https://sarmadtawfeek.se/

> This repository is a public case study of the problem, system boundary and engineering decisions. The implementation source remains private by design.

## The problem

A subscription flow can look correct in source code and still fail in the exact release candidate a team is preparing to ship. Purchase, entitlement state and clean-session restore are particularly expensive places to discover that mismatch late.

ReleaseProof explores a narrower operational question:

**Can the exact release candidate demonstrate that its critical subscription journey works, with evidence that can be inspected and rechecked?**

It does **not** predict or guarantee App Store approval.

## System at a glance

```text
Exact iOS release candidate
          ↓
Critical subscription journey
          ↓
Purchase / entitlement / restore checks
          ↓
Artifact-bound evidence
          ↓
PASS / FAIL / INCONCLUSIVE
          ↓
Recheck + release decision support
```

## What I want a technical reviewer to inspect

This case study is less about showing a large codebase and more about showing the decisions behind a trustworthy verification workflow:

- **Exact artifact over source intent.** The release candidate being evaluated matters more than what the repository suggests should happen.
- **Environment belongs to the result.** A verdict is weaker when the execution environment is not part of the evidence.
- **Inconclusive is legitimate.** Missing or ambiguous evidence should not be silently converted into a pass or a blocker.
- **Evidence should not cross artifact boundaries.** A clean recheck should not mix proof from different release candidates.
- **Reproducibility matters.** A fixed failure should be re-evaluated through the same bounded journey.

## AI-native build approach

AI is part of how I explore and accelerate implementation. I use it as engineering leverage for solution exploration, implementation candidates, integration investigation, test scaffolding and review.

The quality gate is not whether AI produced plausible code. The quality gate is whether the relevant behavior survives explicit constraints and evidence.

```text
Problem + release risk
        ↓
Explicit journey + constraints
        ↓
AI-assisted exploration / implementation
        ↓
Integration with the release environment
        ↓
Acceptance criteria
        ↓
Evidence + failure states
        ↓
Review / recheck / revise
```

More detail: [docs/HOW_I_BUILD_WITH_AI.md](docs/HOW_I_BUILD_WITH_AI.md)

## Technical context

Current project evidence supports work with:

`TypeScript` · `Node.js` · `Next.js` · `Supabase` · `Expo / React Native` · `RevenueCat`

These are implementation contexts, not self-rated proficiency badges.

## Verification mindset

The core distinction is between **what the source intends** and **what the exact candidate actually demonstrated**. ReleaseProof preserves artifact identity, evidence, execution context and an explicit inconclusive state so the release decision can be challenged rather than merely trusted.

See [docs/VERIFICATION.md](docs/VERIFICATION.md).

## Current truth boundary

This repository does **not** claim:

- App Store approval prediction or guarantee;
- broad framework support;
- production-scale customer adoption;
- customer outcome metrics;
- a finished general release-governance platform.

Those claims require separate evidence.

## Public / private boundary

The private product implementation is not mirrored here. Source code, exact contracts, internal verifier logic, private fixtures, prompts, raw evidence and implementation details that would materially reproduce the system remain private.

See [PUBLIC_BOUNDARY.md](PUBLIC_BOUNDARY.md).
