'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function compareNumeric(a, b) {
  	return a - b;
}
      
function getMinMax(str) {
        
    let arr = str.split(/[\s,]/);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      	let p = parseFloat(arr[i]);
      	if (!isNaN(p)) {
      		newArr.push(p);
      	}
    }
    newArr.sort(compareNumeric);
    let min = +newArr[0];
    let max = +newArr[newArr.length - 1];
    return {min: min, max: max};
}