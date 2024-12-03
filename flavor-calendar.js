const flavorData = [
    { text: 'Strawberry Cheesecake', start: new Date('2024-12-02'), end: new Date('2024-12-15') },
    { text: 'Mint Oreo®', start: new Date('2024-12-16'), end: new Date('2024-12-29') },
    { text: 'Reese\'s® Cheesecake', start: new Date('2024-12-30'), end: new Date('2025-01-05') },
    { text: 'Coffee Toffee', start: new Date('2025-01-06'), end: new Date('2025-01-12') },
    { text: 'Butterfinger®', start: new Date('2025-01-13'), end: new Date('2025-01-19') },
];

const calendarContainer = document.getElementById('calendar-container');
const monthDisplay = document.getElementById('month-display');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Helper function to normalize a date (removes time components)
const normalizeDate = (date) => {
    const normalized = new Date(date);
    normalized.setHours(0, 0, 0, 0);
    return normalized;
};

// Function to render the calendar
function renderCalendar(year, month) {
    calendarContainer.innerHTML = ''; // Clear previous calendar
    const today = normalizeDate(new Date());
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Update the month display
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    monthDisplay.textContent = `${monthNames[month]} ${year}`;

    // Disable the Previous button if the current month is before today's month
    if (year < today.getFullYear() || (year === today.getFullYear() && month <= today.getMonth())) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    // Generate calendar cells
    for (let d = new Date(firstDayOfMonth); d <= lastDayOfMonth; d = new Date(d.setDate(d.getDate() + 1))) {
        const date = normalizeDate(d); // Clone and normalize date
        const cell = document.createElement('div');
        cell.className = 'calendar-cell';

        // Add the day of the week
        const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' }); // "Mon", "Tue", etc.
        const dayLabel = document.createElement('div');
        dayLabel.textContent = dayOfWeek;
        dayLabel.className = 'day-of-week';
        cell.appendChild(dayLabel);

        // Add the day number
        const dayNumber = document.createElement('div');
        dayNumber.textContent = date.getDate();
        cell.appendChild(dayNumber);

        // Highlight today's date
        if (today.getTime() === date.getTime()) {
            cell.classList.add('current-date');
        }

        // Check if the date matches a flavor range
        const flavor = flavorData.find((flavor) => {
            const flavorStart = normalizeDate(flavor.start);
            const flavorEnd = normalizeDate(flavor.end);
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
