const flavorData = [
    { text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15' },
    { text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29' },
    { text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05' },
];

const calendarSection = document.getElementById('calendar-section');

// Helper function to generate date range
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

// Generate calendar cells for the entire month
const allDates = generateDates(firstDayOfMonth, lastDayOfMonth);

allDates.forEach((date) => {
    const calendarCell = document.createElement('div');
    calendarCell.className = 'calendar-cell';

    // Highlight current date
    if (formatDate(date) === formatDate(today)) {
        calendarCell.innerHTML = `<span class="current-date">${date.getDate()}</span>`;
    } else {
        calendarCell.textContent = date.getDate();
    }

    calendarSection.appendChild(calendarCell);
});

// Add flavor bars
flavorData.forEach((flavor) => {
    const startDate = new Date(flavor.start);
    const endDate = new Date(flavor.end);

    // Skip bars not in the current month
    if (endDate < firstDayOfMonth || startDate > lastDayOfMonth) return;

    // Calculate start and end positions
    const startDay = Math.max((startDate - firstDayOfMonth) / (1000 * 60 * 60 * 24), 0) + 1;
    const endDay = Math.min((endDate - firstDayOfMonth) / (1000 * 60 * 60 * 24) + 1, allDates.length);

    // Create flavor bar
    const flavorBar = document.createElement('div');
    flavorBar.className = 'flavor-bar';
    flavorBar.style.gridColumn = `${startDay} / ${endDay + 1}`;
    flavorBar.textContent = flavor.text;

    calendarSection.appendChild(flavorBar);
});
