const flavorData = [
    { text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15' },
    { text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29' },
    { text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05' },
];

const calendarContainer = document.getElementById('calendar-container');

// Helper function to format dates
const formatDate = (date) => date.toISOString().split('T')[0];

// Get the first and last day of the current month
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

// Find the first day of the week for the calendar
const startCalendar = new Date(firstDayOfMonth);
startCalendar.setDate(startCalendar.getDate() - startCalendar.getDay());

// Find the last day of the week for the calendar
const endCalendar = new Date(lastDayOfMonth);
endCalendar.setDate(endCalendar.getDate() + (6 - endCalendar.getDay()));

// Generate calendar cells
const calendarCells = [];
for (let date = new Date(startCalendar); date <= endCalendar; date.setDate(date.getDate() + 1)) {
    const cell = document.createElement('div');
    cell.className = 'calendar-cell';

    // Add the day number only if it's within the current month
    if (date >= firstDayOfMonth && date <= lastDayOfMonth) {
        cell.textContent = date.getDate();

        // Highlight today's date
        if (formatDate(date) === formatDate(today)) {
            cell.classList.add('current-date');
        }
    }

    calendarContainer.appendChild(cell);
    calendarCells.push(cell);
}

// Add flavor bars
flavorData.forEach((flavor) => {
    const startDate = new Date(flavor.start);
    const endDate = new Date(flavor.end);

    // Skip flavors that don't overlap with the current month
    if (endDate < firstDayOfMonth || startDate > lastDayOfMonth) return;

    // Adjust start and end dates if they overlap the calendar range
    const adjustedStart = new Date(Math.max(startDate, startCalendar));
    const adjustedEnd = new Date(Math.min(endDate, endCalendar));

    // Calculate start and end index within the calendar
    const startIndex = Math.floor((adjustedStart - startCalendar) / (1000 * 60 * 60 * 24));
    const endIndex = Math.floor((adjustedEnd - startCalendar) / (1000 * 60 * 60 * 24));

    // Create the flavor bar
    const bar = document.createElement('div');
    bar.className = 'flavor-bar';
    bar.textContent = flavor.text;

    // Place the bar using grid positioning
    const startColumn = (startIndex % 7) + 1;
    const endColumn = (endIndex % 7) + 2; // Adjust to include the last day
    const startRow = Math.floor(startIndex / 7) + 1;
    const endRow = Math.floor(endIndex / 7) + 1;

    bar.style.gridColumn = `${startColumn} / span ${endColumn - startColumn}`;
    bar.style.gridRow = `${startRow} / span ${endRow - startRow}`;

    calendarContainer.appendChild(bar);
});
