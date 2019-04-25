'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');
    this.el.innerHTML = '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td>';
    let tbody = document.createElement('tbody');
    this.el.appendChild(tbody);
    
    for (let i = 0; i < items.length; i++) {
        let tr = document.createElement('tr');

        for (let j in items[i]) {
            let td = document.createElement('td');
            td.innerHTML = items[i][j];
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }
    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) { 
        let rows = [];

        for (let i = 1; i < this.el.rows.length; i++) {
          rows.push(this.el.rows[i]);
        }
        if (column === 2) { 
            rows.sort((a, b) => +a.cells[column].innerHTML > +b.cells[column].innerHTML ? 1 : -1);
        } else {
            rows.sort((a, b) => a.cells[column].innerHTML > b.cells[column].innerHTML ? 1 : -1);
        }

        if (desc) rows.reverse();

        for (let i = 0; i < rows.length; i++) {
          this.el.tBodies[0].appendChild(rows[i]);
        }
    };
}

