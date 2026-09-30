import ical from 'node-ical';
async function run() {
  const data = ical.parseICS('BEGIN:VCALENDAR\nEND:VCALENDAR');
  console.log(data);
}
run();
