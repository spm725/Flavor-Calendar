const flavorData = [
    { id: 'flavor1', text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15' },
    { id: 'flavor2', text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29' },
    { id: 'flavor3', text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05' },
    // Add more flavors as needed...
];

// Get the calendar container
const calendarSection = document.getElementById('calendar-section');

// Helper function to format a date as "YYYY-MM-DD"
const formatDate = (date) => {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
};

// Generate dates for the current month
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// Find the first day of the month
const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
// Find the last day of the month
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

for (let date = firstDayOfMonth; date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
    const formattedDate = formatDate(date);

    // Check if the date matches a flavor range
    const flavor = flavorData.find((flavor) => {
        return formattedDate >= flavor.start && formattedDate <= flavor.end;
    });

    // Create a calendar cell
    const calendarCell = document.createElement('div');
    calendarCell.className = 'calendar-cell';

    // Highlight today's date
    if (formattedDate === formatDate(today)) {
        calendarCell.classList.add('current-date');
    }

    // Add the date and flavor text
    calendarCell.innerHTML = `
        <div>${date.getDate()}</div>
        <div class="flavor-text">${flavor ? flavor.text : ''}</div>
    `;

    // Append to the calendar section
    calendarSection.appendChild(calendarCell);
}
