const flavorData = [
    { text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15' },
    { text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29' },
    { text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05' },
];

const calendarSection = document.getElementById('calendar-section');

// Helper function to generate all dates in a range
const generateDates = (start, end) => {
    const dates = [];
    let current = new Date(start);
    const last = new Date(end);

    while (current <= last) {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }

    return dates;
};

// Helper function to format a date as "YYYY-MM-DD"
const formatDate = (date) => date.toISOString().split('T')[0];

// Get current month and year
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// Get first and last day of the month
const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

// Generate calendar layout
const allDates = generateDates(firstDayOfMonth, lastDayOfMonth);

// Create a row for each week
let currentRow = document.createElement('div');
currentRow.className = 'calendar-row';

// Add calendar cells for the entire month
allDates.forEach((date, index) => {
    const calendarCell = document.createElement('div');
    calendarCell.className = 'calendar-cell';

    // Highlight current date
    if (formatDate(date) === formatDate(today)) {
        calendarCell.innerHTML = `<span class="current-date">${date.getDate()}</span>`;
    } else {
        calendarCell.textContent = date.getDate();
    }

    currentRow.appendChild(calendarCell);

    // Create a new row every 7 days
    if ((index + 1) % 7 === 0) {
        calendarSection.appendChild(currentRow);
        currentRow = document.createElement('div');
        currentRow.className = 'calendar-row';
    }
});

// Append the final row
if (currentRow.childElementCount > 0) {
    calendarSection.appendChild(currentRow);
}

// Add flavor bars
flavorData.forEach((flavor) => {
    const startDate = new Date(flavor.start);
    const endDate = new Date(flavor.end);

    // Skip bars not in the current month
    if (endDate < firstDayOfMonth || startDate > lastDayOfMonth) return;

    // Calculate start and end positions
    const startDayIndex = Math.max(Math.floor((startDate - firstDayOfMonth) / (1000 * 60 * 60 * 24)), 0);
    const endDayIndex = Math.min(Math.floor((endDate - firstDayOfMonth) / (1000 * 60 * 60 * 24)), allDates.length - 1);

    // Create flavor bar
    const flavorBar = document.createElement('div');
    flavorBar.className = 'flavor-bar';
    flavorBar.style.gridColumn = `${(startDayIndex % 7) + 1} / ${(endDayIndex % 7) + 2}`;
    flavorBar.textContent = flavor.text;

    // Append bar to the correct week row
    const weekRowIndex = Math.floor(startDayIndex / 7);
    const targetRow = calendarSection.children[weekRowIndex];
    targetRow.appendChild(flavorBar);
});
