const flavorData = [
    { text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15' },
    { text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29' },
    { text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05' },
];

const calendarGrid = document.getElementById('calendar-grid');

// Helper function to format dates
const formatDate = (date) => date.toISOString().split('T')[0];

// Get the first and last day of the current month
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

// Generate all dates for the current month
const datesInMonth = [];
for (let d = new Date(firstDayOfMonth); d <= lastDayOfMonth; d.setDate(d.getDate() + 1)) {
    datesInMonth.push(new Date(d));
}

// Create calendar cells
datesInMonth.forEach((date) => {
    const cell = document.createElement('div');
    cell.className = 'calendar-cell';
    cell.textContent = date.getDate();

    // Highlight the current date
    if (formatDate(date) === formatDate(today)) {
        cell.classList.add('current-date');
    }

    calendarGrid.appendChild(cell);
});

// Add flavor bars
flavorData.forEach((flavor) => {
    const startDate = new Date(flavor.start);
    const endDate = new Date(flavor.end);

    // Skip flavors that don't overlap with the current month
    if (endDate < firstDayOfMonth || startDate > lastDayOfMonth) return;

    // Determine the start and end positions within the grid
    const startIndex = Math.max((startDate - firstDayOfMonth) / (1000 * 60 * 60 * 24), 0);
    const endIndex = Math.min((endDate - firstDayOfMonth) / (1000 * 60 * 60 * 24), datesInMonth.length - 1);

    // Create the flavor bar
    const flavorBar = document.createElement('div');
    flavorBar.className = 'flavor-bar';
    flavorBar.style.gridColumn = `${(startIndex % 7) + 1} / ${(endIndex % 7) + 2}`;
    flavorBar.style.gridRow = `${Math.floor(startIndex / 7) + 1} / ${Math.floor(endIndex / 7) + 1}`;
    flavorBar.textContent = flavor.text;

    calendarGrid.appendChild(flavorBar);
});
