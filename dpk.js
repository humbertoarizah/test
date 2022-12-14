const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const createHash = (method, data) => (crypto.createHash(method).update(data).digest("hex"))

const handleHash = (method, data) => {
  if (data.length > MAX_PARTITION_KEY_LENGTH) return createHash(method, data)
  return data
}

const validateTypeCandidate = (candidate) => (typeof candidate !== "string" ? JSON.stringify(candidate): candidate)

exports.deterministicPartitionKey = (event) => {
  let candidate = TRIVIAL_PARTITION_KEY

  if (event) {
    if (!event.partitionKey) return createHash("sha3-512", JSON.stringify(event))
    candidate = event.partitionKey
  }
  candidate = validateTypeCandidate(candidate)

  candidate = handleHash("sha3-512",candidate)

  return candidate;
};