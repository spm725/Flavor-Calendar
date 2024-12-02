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
for (let date = new Date(startCalendar); date <= endCalendar; date.setDate(date.getDate() + 1)) {
    const cell = document.createElement('div');
    cell.className = 'calendar-cell';

    // If the date is within the current month, add the day number
    if (date >= firstDayOfMonth && date <= lastDayOfMonth) {
        cell.textContent = date.getDate();

        // Highlight today's date
        if (formatDate(date) === formatDate(today)) {
            cell.classList.add('current-date');
        }
    }

    calendarContainer.appendChild(cell);
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

    // Calculate bar start and span
    const startDay = Math.floor((adjustedStart - startCalendar) / (1000 * 60 * 60 * 24));
    const endDay = Math.floor((adjustedEnd - startCalendar) / (1000 * 60 * 60 * 24));

    const bar = document.createElement('div');
    bar.className = 'flavor-bar';
    bar.textContent = flavor.text;

    // Place the bar in the correct position
    bar.style.gridColumn = `${(startDay % 7) + 1} / ${(endDay % 7) + 2}`;
    bar.style.gridRow = `${Math.floor(startDay / 7) + 2}`;

    calendarContainer.appendChild(bar);
});
