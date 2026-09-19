import test from 'node:test';
import assert from 'node:assert/strict';
import { verifyReleaseEvidence } from '../src/reference-release-verifier.mjs';

function base(overrides = {}) {
  return {
    expectedArtifactSha: 'sha:release-42',
    observedArtifactSha: 'sha:release-42',
    originalReceiptArtifactSha: 'sha:release-42',
    recheckReceiptArtifactSha: 'sha:release-42',
    expectedEnvironment: 'apple-sandbox',
    observedEnvironment: 'apple-sandbox',
    evidenceComplete: true,
    ...overrides,
  };
}

test('exact artifact and complete same-environment evidence passes', () => {
  assert.deepEqual(verifyReleaseEvidence(base()), { status: 'PASS', reason: 'EXACT_ARTIFACT_VERIFIED' });
});

test('observed artifact mismatch fails closed', () => {
  assert.deepEqual(verifyReleaseEvidence(base({ observedArtifactSha: 'sha:other' })), {
    status: 'FAIL', reason: 'ARTIFACT_IDENTITY_MISMATCH'
  });
});

test('original evidence from another artifact cannot be mixed', () => {
  assert.deepEqual(verifyReleaseEvidence(base({ originalReceiptArtifactSha: 'sha:older' })), {
    status: 'FAIL', reason: 'CROSS_ARTIFACT_EVIDENCE'
  });
});

test('recheck evidence from another artifact cannot be mixed', () => {
  assert.deepEqual(verifyReleaseEvidence(base({ recheckReceiptArtifactSha: 'sha:newer' })), {
    status: 'FAIL', reason: 'RECHECK_ARTIFACT_MISMATCH'
  });
});

test('environment mismatch remains INCONCLUSIVE instead of pass', () => {
  assert.deepEqual(verifyReleaseEvidence(base({ observedEnvironment: 'test-store' })), {
    status: 'INCONCLUSIVE', reason: 'ENVIRONMENT_MISMATCH'
  });
});

test('incomplete evidence remains INCONCLUSIVE instead of pass', () => {
  assert.deepEqual(verifyReleaseEvidence(base({ evidenceComplete: false })), {
    status: 'INCONCLUSIVE', reason: 'EVIDENCE_INCOMPLETE'
  });
});
