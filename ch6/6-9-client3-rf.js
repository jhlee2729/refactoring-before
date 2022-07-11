import { acquireReading } from './6-9-rf.js';

const reading = acquireReading();
const basicChargeAmount = reading.baseCharge;
console.log(basicChargeAmount)