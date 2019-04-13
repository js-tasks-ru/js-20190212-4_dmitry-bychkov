<<<<<<< HEAD
'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
	let ul = document.createElement('ul');
	for (let i =0; i < friends.length; i++) {
		let li = document.createElement('li');
		li.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
		ul.appendChild(li);
	}
	return ul;
}
=======
'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
}
>>>>>>> 32483304f2f33564235ac0ba938fc34992ae7719
