import { acquireReading } from './6-9-rf.js';

const reading = acquireReading();
export const taxableCharge = reading.taxableCharge;
console.log(taxableCharge)
