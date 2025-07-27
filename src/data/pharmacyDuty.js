// Список аптек с цветами (пример)
export const pharmacies = [
  { name: '"Heiligen-Geist-Apotheke"', address: 'Anton Plochberger Str. 2, Steyr', color: 'yellow' },
  { name: '"Bahnhof-Apotheke"', address: 'Bahnhofstraße 18, Steyr', color: 'pink' },
  { name: '"St. Berthold-Apotheke"', address: 'St. Berthold-Allee 23, Garsten', color: 'violet' },
  { name: '"Münichholz-Apotheke"', address: 'Hans-Wagner-Straße 8, Steyr', color: 'blue' },
  { name: '"Apotheke Zur Mariahilf"', address: 'Kirchenplatz 3, Sierning', color: 'green' },
  { name: '"Ennsleiten-Apotheke"', address: 'Arbeiterstraße 11, Steyr', color: 'orange' },
  { name: '"Steyrtal-Apotheke"', address: 'Josef Teufel Platz 1, Neuzug', color: 'brown' },
  { name: '"Alte Stadt-Apotheke"', address: 'Stadtplatz 7, Steyr', color: 'gray' },
  { name: '"Löwen-Apotheke"', address: 'Enge Gasse 1, Steyr', color: 'purple' },
  { name: '"Tabor-Apotheke"', address: 'Rooseveltstraße 12, Steyr', color: 'red' },
  { name: '"Apotheke Am Resthof"', address: 'Siemensstraße 12, Steyr', color: 'lightblue' },
  { name: '"Gründberg-Apotheke"', address: 'Sierninger Straße 174A, Steyr', color: 'lightgreen' },
  { name: '"HAIHO Apotheke"', address: 'Haidershofen 99, Haidershofen', color: 'lightgreen' },
];

// Календарь дежурств (автоматически сгенерирован на 2025-07-21 — 2025-12-31)
const colorOrder = [
  'lightgreen', 'yellow', 'pink', 'blue', 'green', 'orange', 'violet', 'brown', 'gray', 'purple', 'red', 'lightblue'
];

function generateDutyCalendar() {
  const calendar = {};
  let date = new Date('2025-07-27');
  const end = new Date('2025-12-31');
  let colorIdx = 0;
  while (date <= end) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const key = `${yyyy}-${mm}-${dd}`;
    calendar[key] = [colorOrder[colorIdx]];
    colorIdx = (colorIdx + 1) % colorOrder.length;
    date.setDate(date.getDate() + 1);
  }
  return calendar;
}

export const dutyCalendar = generateDutyCalendar(); 