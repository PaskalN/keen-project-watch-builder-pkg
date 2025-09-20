#!/usr/bin/env node
import fs from 'fs';

const msgFile = process.argv[2];
const msg = fs.readFileSync(msgFile, 'utf8').trim();

// Regex: KA-<number>:<ADD|FIX|DELETE>: message
const pattern = /^KWBP-\d+:(ADD|FIX|DELETE): .+/;

if (!pattern.test(msg)) {
    console.error(`❌ Invalid commit message: "${msg}" \n \n ❌ Required format: KWBP-<number>:<ADD|FIX|DELETE>: <message>`);
    process.exit(1);
}

process.exit(0);
