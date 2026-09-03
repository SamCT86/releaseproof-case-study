# ReleaseProof — exact-build subscription release verification

**Sarmad Tawfeek · AI systems · technical implementation · automation**  
**Status:** Building  
**Portfolio:** https://sarmadtawfeek.se/

A subscription flow can look correct in source and still fail in the exact iOS candidate a team is preparing to ship. ReleaseProof narrows that risk to a concrete question:

> **Can this exact release candidate demonstrate purchase, entitlement and clean-session restore with evidence tied to the artifact and environment that produced it?**

ReleaseProof does **not** predict or guarantee App Store approval.

## What exists today

The private implementation is more than this documentation layer. Current source evidence includes:

- a Next.js control surface plus an Expo / React Native canary path;
- shared domain contracts for release, journey and evidence semantics;
- exact-artifact resolution and evidence tooling;
- a Gate-1 execution runtime;
- purchase, provider entitlement, local premium access and clean-session restore checks;
- evidence capture, failure classification, recheck and sign-off behavior;
- automated tests around runtime evidence and identical rechecks;
- CI / operational tooling around the verification flow.

A controlled mechanism gate has passed in **RevenueCat Test Store**. I keep that claim deliberately narrow: controlled Test Store proof is not the same thing as submission-relevant Apple Sandbox/TestFlight proof.

**Start with the evidence layer:** [PROOF.md](PROOF.md)

## Why the design is narrow

```text
Exact iOS release candidate
          ↓
Revenue-critical journey
purchase → entitlement → restore
          ↓
Artifact + environment-bound evidence
          ↓
PASS / FAIL / INCONCLUSIVE
          ↓
Recheck / release decision support
```

Three decisions matter most:

1. **Exact artifact over source intent.** The thing being shipped is the thing that must be evaluated.
2. **No cross-artifact evidence mixing.** A later build cannot silently inherit proof from an earlier one.
3. **`INCONCLUSIVE` is valid.** Missing evidence is not a pass and not automatically a blocker.

## A failure mode I had to design around

A later filesystem or project snapshot can differ from the artifact that actually produced a historical run. If the system silently binds that later state to the earlier evidence, the release record becomes misleading.

The safer rule is to preserve artifact identity and provenance even when that produces a less convenient answer. This is one reason rechecks and evidence lineage are first-class parts of the design.

## Where AI fits

I use AI to accelerate implementation candidates, integration investigation, test ideas and review. I do **not** use model plausibility as the release verdict.

The human-owned part of the workflow is deciding the release boundary, evidence authority, failure states and acceptance criteria — then checking whether the implementation survives them.

More detail: [docs/HOW_I_BUILD_WITH_AI.md](docs/HOW_I_BUILD_WITH_AI.md)

## Technical context

`TypeScript` · `Node.js` · `Next.js` · `Supabase` · `Expo / React Native` · `RevenueCat` · `Git / CI`

Technology is listed as implementation context, not as a self-rated proficiency score.

## Inspect the reasoning

- [Observable proof](PROOF.md)
- [System view](docs/SYSTEM_VIEW.md)
- [Engineering decisions](docs/DECISIONS.md)
- [Verification approach](docs/VERIFICATION.md)
- [Public / private boundary](PUBLIC_BOUNDARY.md)

## Not claimed

- App Store approval prediction or guarantee;
- broad framework coverage;
- production-scale customer adoption;
- customer outcome metrics;
- a finished general release-governance platform.

The implementation remains private. This repo exposes enough evidence to evaluate my engineering judgment without publishing the product blueprint.

## Related engineering case studies

- [Billable Meetings OS](https://github.com/SamCT86/billable-meetings-os-case-study) — deterministic contract + evidence verification.
- [PriceBriefs](https://github.com/SamCT86/pricebriefs-case-study) — evidence-bound commercial decisions and refusal states.
- [MachineOutcome](https://github.com/SamCT86/machineoutcome-case-study) — verified AI-agent outcomes before reliability claims.
