/* 6.10 여러 함수를 변환 함수로 묶기 */
import _ from 'lodash';

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

function taxThreshold(year) {
  return 0.1;
}

export function enrichReading(original) {
  // const result = { ...original } // Object.assign: 얉은 복사
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year)
  );
  return result;
}

function calculateBaseCharge(reading) {
  return baseRate(reading.month, reading.year) * reading.quantity;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
