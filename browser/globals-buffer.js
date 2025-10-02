// browser/globals-buffer.js
try {
  if (typeof globalThis.Buffer === 'undefined') {
    const { Buffer } = require('buffer');
    globalThis.Buffer = Buffer;
  }
} catch {}