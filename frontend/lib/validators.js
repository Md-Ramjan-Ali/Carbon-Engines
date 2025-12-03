export function isEmail(v) { return typeof v === 'string' && /\S+@\S+\.\S+/.test(v); }
export function isStrongPassword(v) { return typeof v === 'string' && v.length >= 6; }