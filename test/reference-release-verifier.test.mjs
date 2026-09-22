import test from 'node:test';
import assert from 'node:assert/strict';
import { verifyReleaseEvidence } from '../src/reference-release-verifier.mjs';

function base(overrides = {}) {
  return {
    expectedArtifactSha: 'sha:release-42',
    observedArtifactSha: 'sha:release-42',
    originalReceiptArtifactSha: 'sha:release-42',
    originalReceiptEnvironment: 'apple-sandbox',
    recheckReceiptArtifactSha: 'sha:release-42',
    recheckReceiptEnvironment: 'apple-sandbox',
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

test('original receipt from another environment cannot be mixed into a passing release', () => {
  assert.deepEqual(verifyReleaseEvidence(base({ originalReceiptEnvironment: 'revenuecat-test-store' })), {
    status: 'INCONCLUSIVE', reason: 'ORIGINAL_RECEIPT_ENVIRONMENT_MISMATCH'
  });
});

test('recheck receipt from another environment cannot be mixed into a passing release', () => {
  assert.deepEqual(verifyReleaseEvidence(base({ recheckReceiptEnvironment: 'testflight' })), {
    status: 'INCONCLUSIVE', reason: 'RECHECK_RECEIPT_ENVIRONMENT_MISMATCH'
  });
});

test('non-boolean evidenceComplete cannot manufacture PASS through truthiness', () => {
  assert.deepEqual(verifyReleaseEvidence(base({ evidenceComplete: 'false' })), {
    status: 'INCONCLUSIVE', reason: 'INVALID_EVIDENCE_CONTRACT'
  });
});

test('empty artifact and environment identities cannot compare equal into PASS', () => {
  assert.deepEqual(verifyReleaseEvidence({
    expectedArtifactSha: '',
    observedArtifactSha: '',
    originalReceiptArtifactSha: '',
    originalReceiptEnvironment: '',
    recheckReceiptArtifactSha: '',
    recheckReceiptEnvironment: '',
    expectedEnvironment: '',
    observedEnvironment: '',
    evidenceComplete: true,
  }), {
    status: 'INCONCLUSIVE', reason: 'INVALID_EVIDENCE_CONTRACT'
  });
});
