export function stringToUint8Array(s: string | Buffer): Uint8Array {
  return new TextEncoder().encode(String(s));
}

export function uint8ArrayToString(a: Uint8Array): string {
  return new TextDecoder('utf-8').decode(a);
}
