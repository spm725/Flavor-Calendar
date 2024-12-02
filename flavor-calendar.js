const flavorData = [
    { text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15' },
    { text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29' },
    { text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05' },
];

const calendarSection = document.getElementById('calendar-section');

// Helper function to format dates
const formatDate = (date) => date.toISOString().split('T')[0];

// Get current month and year
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// Get first and last day of the month
const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

// Generate the calendar
let weekRow = document.createElement('div');
weekRow.className = 'calendar-row';

for (let date = firstDayOfMonth; date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
    const currentDate = new Date(date);
    const calendarCell = document.createElement('div');
    calendarCell.className = 'calendar-cell';
    calendarCell.textContent = currentDate.getDate();

    // Highlight current date
    if (formatDate(currentDate) === formatDate(today)) {
        calendarCell.innerHTML = `<span class="current-date">${currentDate.getDate()}</span>`;
    }

    weekRow.appendChild(calendarCell);

    // Create a new row every 7 days
    if (currentDate.getDay() === 6 || currentDate.getTime() === lastDayOfMonth.getTime()) {
        calendarSection.appendChild(weekRow);
        weekRow = document.createElement('div');
        weekRow.className = 'calendar-row';
    }
}

// Add flavor bars
flavorData.forEach((flavor) => {
    const startDate = new Date(flavor.start);
    const endDate = new Date(flavor.end);

    // Skip bars that don't overlap the current month
    if (endDate < firstDayOfMonth || startDate > lastDayOfMonth) return;

    // Calculate bar position
    const startDayIndex = Math.max((startDate - firstDayOfMonth) / (1000 * 60 * 60 * 24), 0);
    const endDayIndex = Math.min((endDate - firstDayOfMonth) / (1000 * 60 * 60 * 24), (lastDayOfMonth - firstDayOfMonth) / (1000 * 60 * 60 * 24));

    const barRowIndex = Math.floor(startDayIndex / 7);
    const barStart = (startDayIndex % 7) + 1;
    const barEnd = (endDayIndex % 7) + 2;

    // Create the flavor bar
    const flavorBar = document.createElement('div');
    flavorBar.className = 'flavor-bar';
    flavorBar.style.gridColumn = `${barStart} / ${barEnd}`;
    flavorBar.textContent = flavor.text;

    // Append the flavor bar to the correct week row
    const targetRow = calendarSection.children[barRowIndex];
    targetRow.appendChild(flavorBar);
});
