// Flavor data with start and end dates
const flavorData = [
    { text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15', image: 'path/to/strawberry-cheesecake.jpg' },
    { text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29', image: 'path/to/mint-oreo.jpg' },
    { text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05', image: 'path/to/reeses-cheesecake.jpg' },
    { text: 'Coffee Toffee', start: '2025-01-06', end: '2025-01-12', image: 'path/to/coffee-toffee.jpg' },
    { text: 'Butterfinger®', start: '2025-01-13', end: '2025-01-19', image: 'path/to/butterfinger.jpg' },
    { text: 'Toasted Coconut', start: '2025-01-20', end: '2025-01-26', image: 'path/to/toasted-coconut.jpg' },
    { text: 'Peaches n\' Cream', start: '2025-01-27', end: '2025-02-02', image: 'path/to/peaches-cream.jpg' },
    { text: 'Nutter Butter®', start: '2025-02-03', end: '2025-02-09', image: 'path/to/nutter-butter.jpg' },
    { text: 'Strawberry Swirl', start: '2025-02-10', end: '2025-02-16', image: 'path/to/strawberry-swirl.jpg' },
    { text: 'Cookies n\' Cream', start: '2025-02-17', end: '2025-02-23', image: 'path/to/cookies-cream.jpg' },
    { text: 'Blueberry Pie', start: '2025-02-24', end: '2025-03-02', image: 'path/to/blueberry-pie.jpg' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-03-03', end: '2025-03-09', image: 'path/to/reeses-peanut-butter-cup.jpg' },
    { text: 'Black Raspberry', start: '2025-03-10', end: '2025-03-16', image: 'path/to/black-raspberry.jpg' },
    { text: 'Mint Oreo®', start: '2025-03-17', end: '2025-03-23', image: 'path/to/mint-oreo.jpg' },
    { text: 'Toasted Coconut', start: '2025-03-24', end: '2025-03-30', image: 'path/to/toasted-coconut.jpg' },
    { text: 'Orange Dreamsicle', start: '2025-03-31', end: '2025-04-06', image: 'path/to/orange-dreamsicle.jpg' },
    { text: 'Strawberry Cheesecake', start: '2025-04-07', end: '2025-04-13', image: 'path/to/strawberry-cheesecake.jpg' },
    { text: 'Butterfinger®', start: '2025-04-14', end: '2025-04-20', image: 'path/to/butterfinger.jpg' },
    { text: 'Peaches n\' Cream', start: '2025-04-21', end: '2025-04-27', image: 'path/to/peaches-cream.jpg' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-04-28', end: '2025-05-04', image: 'path/to/reeses-peanut-butter-cup.jpg' },
    { text: 'Oreo® Cheesecake', start: '2025-05-05', end: '2025-05-11', image: 'path/to/oreo-cheesecake.jpg' },
    { text: 'Blueberry Pie', start: '2025-05-12', end: '2025-05-18', image: 'path/to/blueberry-pie.jpg' },
    { text: 'Nutter Butter®', start: '2025-05-19', end: '2025-05-25', image: 'path/to/nutter-butter.jpg' },
    { text: 'Mint Oreo®', start: '2025-05-26', end: '2025-06-01', image: 'path/to/mint-oreo.jpg' },
    { text: 'Key Lime Pie', start: '2025-06-02', end: '2025-06-08', image: 'path/to/key-lime-pie.jpg' },
    { text: 'Toasted Coconut', start: '2025-06-09', end: '2025-06-15', image: 'path/to/toasted-coconut.jpg' },
    { text: 'Black Raspberry', start: '2025-06-16', end: '2025-06-22', image: 'path/to/black-raspberry.jpg' },
    { text: 'Coffee Toffee', start: '2025-06-23', end: '2025-06-29', image: 'path/to/coffee-toffee.jpg' },
    { text: 'Strawberry Cheesecake', start: '2025-06-30', end: '2025-07-06', image: 'path/to/strawberry-cheesecake.jpg' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-07-07', end: '2025-07-13', image: 'path/to/reeses-peanut-butter-cup.jpg' },
    { text: 'Orange Dreamsicle', start: '2025-07-14', end: '2025-07-20', image: 'path/to/orange-dreamsicle.jpg' },
    { text: 'Key Lime Pie', start: '2025-07-21', end: '2025-07-27', image: 'path/to/key-lime-pie.jpg' },
    { text: 'Reese\'s® Cheesecake', start: '2025-07-28', end: '2025-08-03', image: 'path/to/reeses-cheesecake.jpg' },
    { text: 'Cookies n\' Cream', start: '2025-08-04', end: '2025-08-10', image: 'path/to/cookies-cream.jpg' },
    { text: 'Toasted Coconut', start: '2025-08-11', end: '2025-08-17', image: 'path/to/toasted-coconut.jpg' },
    { text: 'Blueberry Pie', start: '2025-08-18', end: '2025-08-24', image: 'path/to/blueberry-pie.jpg' },
    { text: 'Strawberry Cheesecake', start: '2025-08-25', end: '2025-08-31', image: 'path/to/strawberry-cheesecake.jpg' },
    { text: 'Mint Oreo®', start: '2025-09-01', end: '2025-09-07', image: 'path/to/mint-oreo.jpg' },
    { text: 'Black Raspberry', start: '2025-09-08', end: '2025-09-14', image: 'path/to/black-raspberry.jpg' },
    { text: 'Nutter Butter®', start: '2025-09-15', end: '2025-09-21', image: 'path/to/nutter-butter.jpg' },
    { text: 'Strawberry Swirl', start: '2025-09-22', end: '2025-09-28', image: 'path/to/strawberry-swirl.jpg' },
    { text: 'Heath Bar®', start: '2025-09-29', end: '2025-10-05', image: 'path/to/heath-bar.jpg' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-10-06', end: '2025-10-12', image: 'path/to/reeses-peanut-butter-cup.jpg' },
    { text: 'Mint Oreo®', start: '2025-10-13', end: '2025-10-19', image: 'path/to/mint-oreo.jpg' },
    { text: 'Butterfinger®', start: '2025-10-20', end: '2025-10-26', image: 'path/to/butterfinger.jpg' },
    { text: 'Oreo® Cheesecake', start: '2025-10-27', end: '2025-11-02', image: 'path/to/oreo-cheesecake.jpg' },
    { text: 'Toasted Coconut', start: '2025-11-03', end: '2025-11-09', image: 'path/to/toasted-coconut.jpg' },
    { text: 'Strawberry Swirl', start: '2025-11-10', end: '2025-11-16', image: 'path/to/strawberry-swirl.jpg' }
];

// Normalize the date format (YYYY-MM-DD) for comparison
function normalizeDate(dateStr) {
    return new Date(dateStr).toISOString().split('T')[0];
}

// Function to generate the calendar for a given month and year
function generateCalendar(month, year) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();
    const calendarContainer = document.getElementById('calendar-container');
    calendarContainer.innerHTML = ''; // Clear existing cells

    // Loop through all the days in the month
    for (let i = 1; i <= totalDays; i++) {
        const currentDate = new Date(year, month, i);
        const dayOfWeek = currentDate.getDay(); // Get day of the week (0-6)

        // Create a new cell for the current day
        const cell = document.createElement('div');
        cell.classList.add('calendar-cell');

        // Add the day of the week label (Sun, Mon, Tue, etc.)
        const dayLabel = document.createElement('div');
        dayLabel.classList.add('day-of-week');
        dayLabel.textContent = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
        cell.appendChild(dayLabel);

        // Check if there is a flavor for this date
        const flavor = flavorData.find((flavor) => {
            const flavorStart = normalizeDate(flavor.start);
            const flavorEnd = normalizeDate(flavor.end);
            const currentNormalizedDate = normalizeDate(currentDate);
            return currentNormalizedDate >= flavorStart && currentNormalizedDate <= flavorEnd;
        });

        // If a flavor is found, add the flavor text and image
        if (flavor) {
            const flavorText = document.createElement('div');
            flavorText.classList.add('flavor-text');
            flavorText.textContent = flavor.text;
            cell.appendChild(flavorText);

            const flavorImage = document.createElement('img');
            flavorImage.src = flavor.image; // Add the image path for the flavor
            flavorImage.alt = flavor.text;
            flavorImage.classList.add('flavor-image');
            cell.appendChild(flavorImage);
        }

        // Add the date number
        const dateText = document.createElement('div');
        dateText.classList.add('date-text');
        dateText.textContent = i;
        cell.appendChild(dateText);

        // Highlight the current date
        const currentDateString = normalizeDate(new Date());
        const currentCellDate = normalizeDate(currentDate);
        if (currentDateString === currentCellDate) {
            cell.classList.add('current-date');
        }

        // Append the day cell to the calendar container
        calendarContainer.appendChild(cell);
    }
}

// Initialize the calendar for the current month
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
generateCalendar(currentMonth, currentYear);
