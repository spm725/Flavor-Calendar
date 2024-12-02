const flavorData = [
    { text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15' },
    { text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29' },
    { text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05' },
];

const calendarSection = document.getElementById('calendar-section');
const flavorBarsSection = document.getElementById('flavor-bars-section');

// Helper function to format dates
const formatDate = (date) => date.toISOString().split('T')[0];

// Get current month and year
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// Get first and last day of the month
const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

// Generate the calendar grid
for (let date = firstDayOfMonth; date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
    const currentDate = new Date(date);
    const calendarCell = document.createElement('div');
    calendarCell.className = 'calendar-cell';
    calendarCell.textContent = currentDate.getDate();

    // Highlight the current date
    if (formatDate(currentDate) === formatDate(today)) {
        calendarCell.innerHTML = `<span class="current-date">${currentDate.getDate()}</span>`;
    }

    calendarSection.appendChild(calendarCell);
}

// Generate flavor bars
flavorData.forEach((flavor) => {
    const startDate = new Date(flavor.start);
    const endDate = new Date(flavor.end);

    // Skip bars outside the current month
    if (endDate < firstDayOfMonth || startDate > lastDayOfMonth) return;

    // Adjust start and end dates if they overlap the current month boundaries
    const adjustedStart = new Date(Math.max(startDate, firstDayOfMonth));
    const adjustedEnd = new Date(Math.min(endDate, lastDayOfMonth));

    // Create the flavor bar
    const flavorBar = document.createElement('div');
    flavorBar.className = 'flavor-bar';
    flavorBar.textContent = `${flavor.text} (${formatDate(adjustedStart)} - ${formatDate(adjustedEnd)})`;

    flavorBarsSection.appendChild(flavorBar);
});
