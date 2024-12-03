const flavorData = [
    { text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15' },
    { text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29' },
    { text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05' },
];

const calendarContainer = document.getElementById('calendar-container');
const monthDisplay = document.getElementById('month-display');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const currentFlavorBox = document.getElementById('featured-flavor'); // Corrected selector

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const normalizeDate = (dateString) => {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
};

// Update the "Current Flavor" box
function updateCurrentFlavor() {
    const today = new Date();
    const todayNormalized = normalizeDate(today.toISOString().split('T')[0]);

    const currentFlavor = flavorData.find((flavor) => {
        const flavorStart = normalizeDate(flavor.start);
        const flavorEnd = normalizeDate(flavor.end);
        return todayNormalized >= flavorStart && todayNormalized <= flavorEnd;
    });

    if (currentFlavor) {
        currentFlavorBox.textContent = `Current Flavor: ${currentFlavor.text}`;
    } else {
        currentFlavorBox.textContent = 'No Current Flavor';
    }
}

// Render the calendar
function renderCalendar(year, month) {
    calendarContainer.innerHTML = '';
    const today = new Date();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    monthDisplay.textContent = `${monthNames[month]} ${year}`;

    for (let d = new Date(firstDayOfMonth); d <= lastDayOfMonth; d.setDate(d.getDate() + 1)) {
        const cell = document.createElement('div');
        cell.className = 'calendar-cell';

        const dayOfWeek = d.toLocaleString('en-US', { weekday: 'short' });
        const dayLabel = document.createElement('div');
        dayLabel.textContent = dayOfWeek;
        dayLabel.className = 'day-of-week';
        cell.appendChild(dayLabel);

        const dayNumber = document.createElement('div');
        dayNumber.textContent = d.getDate();
        cell.appendChild(dayNumber);

        if (
            today.getFullYear() === d.getFullYear() &&
            today.getMonth() === d.getMonth() &&
            today.getDate() === d.getDate()
        ) {
            cell.classList.add('current-date');
        }

        const flavor = flavorData.find((flavor) => {
            const flavorStart = normalizeDate(flavor.start);
            const flavorEnd = normalizeDate(flavor.end);
            return d >= flavorStart && d <= flavorEnd;
        });

        if (flavor) {
            const flavorText = document.createElement('div');
            flavorText.textContent = flavor.text;
            flavorText.className = 'flavor-text';
            cell.appendChild(flavorText);
        }

        calendarContainer.appendChild(cell);
    }
}

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

// Initialize the calendar and "Current Flavor" box
updateCurrentFlavor();
renderCalendar(currentYear, currentMonth);
