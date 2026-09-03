# AI in the ReleaseProof workflow

AI speeds up the implementation loop. It does not define the release truth.

## Where I use it

- exploring implementation options;
- drafting and revising code candidates;
- investigating integration behavior;
- generating test and edge-case ideas;
- reviewing assumptions and documentation.

## What I keep explicit

For ReleaseProof, the important decisions stay outside model plausibility:

- which exact artifact is being evaluated;
- which environment produced the evidence;
- what the subscription journey must demonstrate;
- what evidence is required for a blocker;
- when the only defensible result is `INCONCLUSIVE`;
- whether two runs are comparable enough for a valid recheck.

## Working loop

```text
release risk
   ↓
explicit journey + evidence boundary
   ↓
AI-assisted implementation
   ↓
run / test / inspect
   ↓
PASS / FAIL / INCONCLUSIVE
   ↓
revise only from evidence
```

The important part of my AI workflow is not how much code the model generated. It is whether I can explain the boundary, detect when the generated implementation violates it, and narrow the claim when the evidence is weaker than expected.

For concrete implementation evidence, see [../PROOF.md](../PROOF.md).
