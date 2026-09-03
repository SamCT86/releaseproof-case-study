# How I build with AI

AI is part of the implementation workflow, not the proof that the system works.

## Where AI helps

I use AI to accelerate work such as:

- exploring solution shapes;
- breaking a problem into implementable parts;
- generating or revising implementation candidates;
- investigating integration behavior;
- producing test scaffolding and edge-case candidates;
- comparing approaches;
- reviewing assumptions and documentation.

## What still needs an explicit owner

AI output does not remove the need to decide:

- what problem is actually being solved;
- which facts are authoritative;
- what the system is allowed to do;
- what must remain deterministic;
- what counts as sufficient evidence;
- which failures are acceptable;
- when the correct answer is `INCONCLUSIVE`;
- whether the implementation survives the real release constraint.

## My quality model

```text
AI-assisted candidate
        ↓
constraint check
        ↓
implementation / integration
        ↓
explicit test or evidence
        ↓
accept / reject / revise
```

For ReleaseProof, this matters because plausible source code is weaker evidence than the exact release candidate demonstrating the critical subscription journey in the relevant environment.

The public repository intentionally shows this workflow without publishing the private prompts, source code, contracts or verifier implementation.
