/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
	let sorted = [];
	data.map(function(item) {
		if(item.age <= age) {
			sorted.push(`${item.name}, ${item.balance}`);
		}
	});
	return sorted.join('\n');
}


