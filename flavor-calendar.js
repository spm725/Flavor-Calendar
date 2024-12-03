const flavorData = [
    { text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15' },
    { text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29' },
    { text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05' },
    { text: 'Coffee Toffee', start: '2025-01-06', end: '2025-01-12' },
    { text: 'Butterfinger®', start: '2025-01-13', end: '2025-01-19' },
    { text: 'Toasted Coconut', start: '2025-01-20', end: '2025-01-26' },
    { text: 'Peaches n\' Cream', start: '2025-01-27', end: '2025-02-02' },
    { text: 'Nutter Butter®', start: '2025-02-03', end: '2025-02-09' },
    { text: 'Strawberry Swirl', start: '2025-02-10', end: '2025-02-16' },
    { text: 'Cookies n\' Cream', start: '2025-02-17', end: '2025-02-23' },
    { text: 'Blueberry Pie', start: '2025-02-24', end: '2025-03-02' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-03-03', end: '2025-03-09' },
    { text: 'Black Raspberry', start: '2025-03-10', end: '2025-03-16' },
    { text: 'Mint Oreo®', start: '2025-03-17', end: '2025-03-23' },
    { text: 'Toasted Coconut', start: '2025-03-24', end: '2025-03-30' },
    { text: 'Orange Dreamsicle', start: '2025-03-31', end: '2025-04-06' },
    { text: 'Strawberry Cheesecake', start: '2025-04-07', end: '2025-04-13' },
    { text: 'Butterfinger®', start: '2025-04-14', end: '2025-04-20' },
    { text: 'Peaches n\' Cream', start: '2025-04-21', end: '2025-04-27' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-04-28', end: '2025-05-04' },
    { text: 'Oreo® Cheesecake', start: '2025-05-05', end: '2025-05-11' },
    { text: 'Blueberry Pie', start: '2025-05-12', end: '2025-05-18' },
    { text: 'Nutter Butter®', start: '2025-05-19', end: '2025-05-25' },
    { text: 'Mint Oreo®', start: '2025-05-26', end: '2025-06-01' },
    { text: 'Key Lime Pie', start: '2025-06-02', end: '2025-06-08' },
    { text: 'Toasted Coconut', start: '2025-06-09', end: '2025-06-15' },
    { text: 'Black Raspberry', start: '2025-06-16', end: '2025-06-22' },
    { text: 'Coffee Toffee', start: '2025-06-23', end: '2025-06-29' },
    { text: 'Strawberry Cheesecake', start: '2025-06-30', end: '2025-07-06' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-07-07', end: '2025-07-13' },
    { text: 'Orange Dreamsicle', start: '2025-07-14', end: '2025-07-20' },
    { text: 'Key Lime Pie', start: '2025-07-21', end: '2025-07-27' },
    { text: 'Reese\'s® Cheesecake', start: '2025-07-28', end: '2025-08-03' },
    { text: 'Cookies n\' Cream', start: '2025-08-04', end: '2025-08-10' },
    { text: 'Toasted Coconut', start: '2025-08-11', end: '2025-08-17' },
    { text: 'Blueberry Pie', start: '2025-08-18', end: '2025-08-24' },
    { text: 'Strawberry Cheesecake', start: '2025-08-25', end: '2025-08-31' },
    { text: 'Mint Oreo®', start: '2025-09-01', end: '2025-09-07' },
    { text: 'Black Raspberry', start: '2025-09-08', end: '2025-09-14' },
    { text: 'Nutter Butter®', start: '2025-09-15', end: '2025-09-21' },
    { text: 'Strawberry Swirl', start: '2025-09-22', end: '2025-09-28' },
    { text: 'Heath Bar®', start: '2025-09-29', end: '2025-10-05' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-10-06', end: '2025-10-12' },
    { text: 'Mint Oreo®', start: '2025-10-13', end: '2025-10-19' },
    { text: 'Butterfinger®', start: '2025-10-20', end: '2025-10-26' },
    { text: 'Oreo® Cheesecake', start: '2025-10-27', end: '2025-11-02' },
    { text: 'Toasted Coconut', start: '2025-11-03', end: '2025-11-09' },
    { text: 'Strawberry Swirl', start: '2025-11-10', end: '2025-11-16' },
    { text: 'Heath Bar®', start: '2025-11-17', end: '2025-11-23' },
    { text: 'Blueberry Pie', start: '2025-11-24', end: '2025-11-30' },
    { text: 'Nutter Butter', start: '2025-12-01', end: '2025-12-07' },
    { text: 'Coffee Toffee', start: '2025-12-08', end: '2025-12-14' },
    { text: 'Mint Oreo®', start: '2025-12-15', end: '2025-12-21' },
    { text: 'Strawberry Cheesecake', start: '2025-12-22', end: '2025-12-28' }
];

const calendarContainer = document.getElementById('calendar-container');
const monthDisplay = document.getElementById('month-display');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const currentFlavorBox = document.getElementById('featured-flavor');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Function to check and disable the "Previous" button for past months
function checkPrevButton() {
    const today = new Date();
    const displayedDate = new Date(currentYear, currentMonth, 1); // First day of the displayed month

    // Disable the "Previous" button if the displayed month is in the past
    if (displayedDate < today) {
        prevButton.disabled = false; // Allow navigation to months before the current one
    } else {
        prevButton.disabled = true; // Disable the "Previous" button if it's the current month or future months
    }
}

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

    checkPrevButton(); // Ensure the "Previous" button is correctly enabled/disabled
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
