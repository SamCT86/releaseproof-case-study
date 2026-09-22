export function verifyReleaseEvidence(input) {
  if (typeof input?.evidenceComplete !== 'boolean') {
    return { status: 'INCONCLUSIVE', reason: 'INVALID_EVIDENCE_CONTRACT' };
  }
  const identityFields = [
    'expectedArtifactSha',
    'observedArtifactSha',
    'originalReceiptArtifactSha',
    'originalReceiptEnvironment',
    'recheckReceiptArtifactSha',
    'recheckReceiptEnvironment',
    'expectedEnvironment',
    'observedEnvironment',
  ];
  if (identityFields.some((field) => typeof input?.[field] !== 'string' || input[field].trim() === '')) {
    return { status: 'INCONCLUSIVE', reason: 'INVALID_EVIDENCE_CONTRACT' };
  }
  if (input.observedArtifactSha !== input.expectedArtifactSha) {
    return { status: 'FAIL', reason: 'ARTIFACT_IDENTITY_MISMATCH' };
  }
  if (input.originalReceiptArtifactSha !== input.expectedArtifactSha) {
    return { status: 'FAIL', reason: 'CROSS_ARTIFACT_EVIDENCE' };
  }
  if (input.recheckReceiptArtifactSha !== input.expectedArtifactSha) {
    return { status: 'FAIL', reason: 'RECHECK_ARTIFACT_MISMATCH' };
  }
  if (input.originalReceiptEnvironment !== input.expectedEnvironment) {
    return { status: 'INCONCLUSIVE', reason: 'ORIGINAL_RECEIPT_ENVIRONMENT_MISMATCH' };
  }
  if (input.recheckReceiptEnvironment !== input.expectedEnvironment) {
    return { status: 'INCONCLUSIVE', reason: 'RECHECK_RECEIPT_ENVIRONMENT_MISMATCH' };
  }
  if (input.observedEnvironment !== input.expectedEnvironment) {
    return { status: 'INCONCLUSIVE', reason: 'ENVIRONMENT_MISMATCH' };
  }
  if (!input.evidenceComplete) {
    return { status: 'INCONCLUSIVE', reason: 'EVIDENCE_INCOMPLETE' };
  }
  return { status: 'PASS', reason: 'EXACT_ARTIFACT_VERIFIED' };
}
