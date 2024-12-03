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

// Function to normalize date format
function normalizeDate(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
}

// Function to check and disable the "Previous" button for past months
function checkPrevButton() {
    const today = new Date();
    const displayedDate = new Date(currentYear, currentMonth, 1); // First day of the displayed month

    if (displayedDate < today) {
        prevButton.disabled = true; // Disable the button for past months of the current year
    } else {
        prevButton.disabled = false; // Allow navigation to past months of previous years
    }
}

// Function to check and disable the "Next" button if there are no scheduled flavors in the future
function checkNextButton() {
    const lastFlavorEndDate = flavorData.reduce((latest, flavor) => {
        const flavorEnd = normalizeDate(flavor.end);
        return flavorEnd > latest ? flavorEnd : latest;
    }, new Date(0)); // Start with a very early date

    const displayedDate = new Date(currentYear, currentMonth + 1, 0); // Last day of the current displayed month

    // If the displayed date is later than the last flavor's end date, disable the "Next" button
    if (displayedDate > lastFlavorEndDate) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// Function to update the calendar display
function updateCalendar() {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const calendarHtml = [];

    // Fill in empty cells before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarHtml.push('<div class="calendar-cell empty"></div>');
    }

    // Fill in the actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(currentYear, currentMonth, day);
        const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        // Check if there is a flavor for the current date
        const currentFlavor = flavorData.find((flavor) => {
            const flavorStart = normalizeDate(flavor.start);
            const flavorEnd = normalizeDate(flavor.end);
            return currentDate >= flavorStart && currentDate <= flavorEnd;
        });

        calendarHtml.push(`
            <div class="calendar-cell ${currentFlavor ? 'has-flavor' : ''}" data-date="${formattedDate}">
                ${day}
            </div>
        `);
    }

    // Display the month and year at the top
    monthDisplay.innerHTML = `${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`;

    // Append all the calendar cells to the container
    calendarContainer.innerHTML = calendarHtml.join('');
    checkPrevButton();
    checkNextButton();
    updateCurrentFlavor();
}

// Function to update the "Current Flavor" box
function updateCurrentFlavor() {
    const today = new Date();
    const todayNormalized = normalizeDate(today.toISOString().split('T')[0]);

    const currentFlavor = flavorData.find((flavor) => {
        const flavorStart = normalizeDate(flavor.start);
        const flavorEnd = normalizeDate(flavor.end);
        return todayNormalized >= flavorStart && todayNormalized <= flavorEnd;
    });

    if (currentFlavor) {
        currentFlavorBox.innerHTML = `
            <div class="title">Current Flavor</div>
            <div class="flavor-name">${currentFlavor.text}</div>
        `;
    } else {
        currentFlavorBox.innerHTML = `
            <div class="title">Current Flavor</div>
            <div class="flavor-name">No Current Flavor</div>
        `;
    }
}

// Navigation buttons event listeners
prevButton.addEventListener('click', () => {
    if (currentMonth > 0) {
        currentMonth--;
    } else {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar();
});

nextButton.addEventListener('click', () => {
    if (currentMonth < 11) {
        currentMonth++;
    } else {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
});

// Initialize the calendar
updateCalendar();
