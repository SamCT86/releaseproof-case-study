# How I direct the AI-assisted ReleaseProof build

ReleaseProof is built with heavy use of AI agents/models. My role is not to claim authorship of every line of code; it is to direct the build toward a product and quality bar I define.

## What I own

- researching the product problem and deciding that it is worth pursuing;
- defining the product direction and high-level system blueprint;
- creating specialist personas/experts and assigning them responsibilities;
- setting constraints, required outputs and acceptance criteria;
- demanding tests, evidence and repeated quality review before accepting a result;
- deciding when the public claim must remain narrower than the implementation might suggest.

## What AI handles heavily

- implementation and code generation/revision;
- exploration of technical options;
- integration investigation;
- test scaffolding and edge-case generation;
- technical review and documentation.

I do **not** claim that I independently chose or hand-authored every library, data structure, code path or low-level engineering mechanism in the private implementation.

## Working loop

```text
research the problem
        ↓
define product + blueprint + quality bar
        ↓
assign specialist AI personas / agents
        ↓
AI-assisted implementation and iteration
        ↓
tests / evidence / quality gates
        ↓
accept, reject or send back for revision
```

For ReleaseProof, the quality bar includes a bounded release-verification flow whose evidence does not outrun the artifact or environment it came from. The implementation details used to satisfy that bar may be AI-generated or AI-selected unless I explicitly state otherwise.

## Interview boundary

I can explain the product problem, the blueprint I required, how I structured the AI workflow, the quality gates I demanded, what evidence exists today and what the project still does not prove.

For a low-level implementation choice, I will distinguish between **a requirement I set** and **a technical choice made inside the AI-assisted implementation process** rather than pretending I personally originated both.

For concrete implementation evidence, see [../PROOF.md](../PROOF.md).
