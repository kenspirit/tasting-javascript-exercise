'use strict'

var months = [
  {month: 1, name: 'Jan'}, {month: 2, name: 'Feb'},
  {month: 3, name: 'Mar'}, {month: 4, name: 'Apr'},
  {month: 5, name: 'May'}, {month: 6, name: 'Jun'},
  {month: 7, name: 'Jul'}, {month: 8, name: 'Aug'},
  {month: 9, name: 'Sep'}, {month: 10, name: 'Oct'},
  {month: 11, name: 'Nov'}, {month: 12, name: 'Dec'}
];

function getMonthName(month) {
  for (var i = 0; i < months.length; i++) {
    if (months[i].month == month) {
      return months[i].name
    }
  }
  return ''
}
