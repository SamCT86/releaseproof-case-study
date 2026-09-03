# ReleaseProof — exact-build subscription release verification

**Sarmad Tawfeek · AI systems · technical implementation · automation**  
**Status:** Building  
**Portfolio:** https://sarmadtawfeek.se/

## My role in this build

I researched the product problem, chose the direction, defined the system blueprint and quality expectations, and used specialist AI personas/agents to drive implementation and iteration.

The implementation is heavily AI-assisted. I do **not** claim that I personally hand-wrote every line of code or independently selected every low-level library, data structure or implementation technique. My direct ownership is the problem definition, product direction, system requirements, expert/persona orchestration, acceptance criteria and quality gates used to decide whether the build is good enough.

A subscription flow can look correct in source and still fail in the exact iOS candidate a team is preparing to ship. ReleaseProof narrows that risk to a concrete question:

> **Can this exact release candidate demonstrate purchase, entitlement and clean-session restore with evidence tied to the artifact and environment that produced it?**

ReleaseProof does **not** predict or guarantee App Store approval.

## What exists today

Current private-source evidence includes:

- a Next.js control surface plus an Expo / React Native canary path;
- shared domain contracts for release, journey and evidence semantics;
- exact-artifact resolution and evidence tooling;
- a Gate-1 execution runtime;
- purchase, provider entitlement, local premium access and clean-session restore checks;
- evidence capture, failure classification, recheck and sign-off behavior;
- automated tests around runtime evidence and identical rechecks;
- CI / operational tooling around the verification flow.

A controlled mechanism gate has passed in **RevenueCat Test Store**. The public claim stays deliberately narrow: controlled Test Store proof is not the same thing as submission-relevant Apple Sandbox/TestFlight proof.

**Start with the evidence layer:** [PROOF.md](PROOF.md)

## System boundary

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

Three system constraints matter most:

1. **Exact artifact over source intent.** The thing being shipped is the thing that must be evaluated.
2. **No cross-artifact evidence mixing.** A later build cannot silently inherit proof from an earlier one.
3. **`INCONCLUSIVE` is valid.** Missing evidence is not a pass and not automatically a blocker.

These describe the current system behavior. They are not a claim that I personally originated every low-level mechanism used to implement them.

## A failure boundary in the implementation

A later filesystem or project snapshot can differ from the artifact that actually produced a historical run. If the system silently binds that later state to the earlier evidence, the release record becomes misleading.

The implementation preserves artifact identity and provenance rather than collapsing different states into one proof record.

## How AI fits

AI agents/models are used heavily for implementation, integration investigation, test generation, review and iteration.

My role is to define what the product must accomplish, structure the expert/persona workflow, set the blueprint and constraints, require evidence and quality gates, and push the build through further revision when the result does not meet those requirements.

More detail: [docs/HOW_I_BUILD_WITH_AI.md](docs/HOW_I_BUILD_WITH_AI.md)

## Technical context

`TypeScript` · `Node.js` · `Next.js` · `Supabase` · `Expo / React Native` · `RevenueCat` · `Git / CI`

Technology is listed as implementation context, not as a claim that I personally selected or hand-authored every technical component.

## Inspect the case study

- [Observable proof](PROOF.md)
- [System view](docs/SYSTEM_VIEW.md)
- [System requirements & trade-offs](docs/DECISIONS.md)
- [Verification approach](docs/VERIFICATION.md)
- [Public / private boundary](PUBLIC_BOUNDARY.md)

## Not claimed

- App Store approval prediction or guarantee;
- broad framework coverage;
- production-scale customer adoption;
- customer outcome metrics;
- a finished general release-governance platform;
- personal authorship of every implementation detail.

The implementation remains private. This repo is intended to show how I direct and quality-gate an AI-assisted technical build without publishing the product blueprint.

## Related engineering case studies

- [Billable Meetings OS](https://github.com/SamCT86/billable-meetings-os-case-study) — deterministic contract + evidence verification.
- [PriceBriefs](https://github.com/SamCT86/pricebriefs-case-study) — evidence-bound commercial decisions and refusal states.
- [MachineOutcome](https://github.com/SamCT86/machineoutcome-case-study) — verified AI-agent outcomes before reliability claims.
