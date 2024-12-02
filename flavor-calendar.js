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

// Generate calendar cells up to the last day of the month
for (let date = new Date(startCalendar); date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
    const cell = document.createElement('div');
    cell.className = 'calendar-cell';

    // Add the day number and flavor if it's within the current month
    if (date >= firstDayOfMonth && date <= lastDayOfMonth) {
        const day = document.createElement('div');
        day.textContent = date.getDate();
        cell.appendChild(day);

        // Check if the date matches a flavor range
        const flavor = flavorData.find((flavor) => {
            const flavorStart = new Date(flavor.start);
            const flavorEnd = new Date(flavor.end);
            return date >= flavorStart && date <= flavorEnd;
        });

        // Add flavor text if applicable
        if (flavor) {
            const flavorText = document.createElement('div');
            flavorText.textContent = flavor.text;
            flavorText.className = 'flavor-text';
            cell.appendChild(flavorText);
        }

        // Highlight today's date
        if (formatDate(date) === formatDate(today)) {
            cell.classList.add('current-date');
        }
    }

    calendarContainer.appendChild(cell);
}
