const flavorData = [
    { text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15' },
    { text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29' },
    { text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05' },
    { text: 'Coffee Toffee', start: '2025-01-06', end: '2025-01-12' },
    { text: 'Butterfinger®', start: '2025-01-13', end: '2025-01-19' },
];

const calendarContainer = document.getElementById('calendar-container');
const monthDisplay = document.getElementById('month-display');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Helper function to format dates
const formatDate = (date) => date.toISOString().split('T')[0];

// Function to render the calendar
function renderCalendar(year, month) {
    calendarContainer.innerHTML = ''; // Clear previous calendar
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Update the month display
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    monthDisplay.textContent = `${monthNames[month]} ${year}`;

    // Generate calendar cells
    for (let date = new Date(firstDayOfMonth); date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
        const cell = document.createElement('div');
        cell.className = 'calendar-cell';

        // Add the day number
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

        calendarContainer.appendChild(cell);
    }
}

// Event listeners for navigation
prevButton.addEventListener('click', () => {
    currentMonth -= 1;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear -= 1;
    }
    renderCalendar(currentYear, currentMonth);
});

nextButton.addEventListener('click', () => {
    currentMonth += 1;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear += 1;
    }
    renderCalendar(currentYear, currentMonth);
});

// Initial render
renderCalendar(currentYear, currentMonth);
