const flavorData = [
    { id: 'flavor5', text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15', imageSrc: 'https://www.dropbox.com/scl/fi/84qi6d4bxvefx2k63is86/FoW-Strawberry-Cheesecake.jpg?rlkey=t566tbzkm8d3pzuqe8gohyxfz&st=1airezf6&raw=1' },
    { id: 'flavor6', text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29', imageSrc: 'https://www.dropbox.com/scl/fi/7c08vzdssay0jwu98q8hj/FoW-Mint-Oreo.jpg?rlkey=oe8mwqnzwesg91wwyubyk71tg&st=nb9xo8d4&dl=0' },
    { id: 'flavor7', text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05', imageSrc: 'images/reeses-cheesecake.jpg' },
    { id: 'flavor8', text: 'Coffee Toffee', start: '2025-01-06', end: '2025-01-12', imageSrc: 'images/coffee-toffee.jpg' },
    { id: 'flavor9', text: 'Butterfinger®', start: '2025-01-13', end: '2025-01-19', imageSrc: 'images/butterfinger.jpg' },
    { id: 'flavor10', text: 'Toasted Coconut', start: '2025-01-20', end: '2025-01-26', imageSrc: 'images/toasted-coconut.jpg' },
    // Add more flavors as needed
];

const calendarContainer = document.getElementById('calendar-container');
const monthDisplay = document.getElementById('month-display');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Normalize dates for comparison
const normalizeDate = (dateString) => new Date(dateString);

// Render the featured flavor
function renderFeaturedFlavor() {
    const today = new Date();
    const currentFlavor = flavorData.find((flavor) => {
        const flavorStart = normalizeDate(flavor.start);
        const flavorEnd = normalizeDate(flavor.end);
        return today >= flavorStart && today <= flavorEnd;
    });

    const featuredSection = document.getElementById('featured-flavor');
    if (currentFlavor) {
        featuredSection.innerHTML = `
            <h2>Current Flavor</h2>
            <img src="${currentFlavor.imageSrc}" alt="${currentFlavor.text}" class="featured-image">
            <p>${currentFlavor.text}</p>
        `;
    } else {
        featuredSection.innerHTML = `
            <h2>Current Flavor</h2>
            <p>No flavor available at this time.</p>
        `;
    }
}

// Render the calendar
function renderCalendar(year, month) {
    calendarContainer.innerHTML = ''; // Clear previous calendar
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const today = new Date();

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    monthDisplay.textContent = `${monthNames[month]} ${year}`;

    // Disable previous button for past months
    prevButton.disabled = year < today.getFullYear() || (year === today.getFullYear() && month <= today.getMonth());

    // Generate calendar cells
    for (let d = new Date(firstDayOfMonth); d <= lastDayOfMonth; d.setDate(d.getDate() + 1)) {
        const date = new Date(d);
        const cell = document.createElement('div');
        cell.className = 'calendar-cell';

        // Add day of the week and date number
        const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });
        const dayLabel = document.createElement('div');
        dayLabel.textContent = dayOfWeek;
        dayLabel.className = 'day-o
