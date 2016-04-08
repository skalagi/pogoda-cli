import humanWeekDay from './humanWeekDay';

export default function($index) {
  let today = new Date().getDay();
  let day = today + $index / 2;
  let night = day != day.toFixed();

  day = day > 6 ? day - 7 : day;

  return night ? 'noc' : humanWeekDay(day);
}
