/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
let m = prompt('Число', 0);
let n = prompt('Степень', 0);
function pow (m, n) {
	let res = m;
	for (let i = 1; i < n; i++) {
		res *= m;
	}
  return res;
}
if (n > 0 && n%1 === 0) {
  alert(pow(m, n));
} else {
  alert('Incorrect');
}
