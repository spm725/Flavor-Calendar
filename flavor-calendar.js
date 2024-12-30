// Base URL for the images folder
const imageBaseURL = "https://spm725.github.io/Flavor-Calendar/Images/";

// Function to dynamically generate image URLs based on flavor names
function getImageURL(flavorName) {
    const formattedFlavor = flavorName
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/®/g, "")
        .replace(/'/g, "");
    return `${imageBaseURL}${formattedFlavor}.jpg`;
}

// Updated flavorData array
const flavorData = [
    { text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15', image: getImageURL('Strawberry Cheesecake') },
    { text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29', image: getImageURL('Mint Oreo®') },
    { text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05', image: getImageURL('Reese\'s® Cheesecake') },
    { text: 'Coffee Toffee', start: '2025-01-06', end: '2025-01-12', image: getImageURL('Coffee Toffee') },
    { text: 'Butterfinger®', start: '2025-01-13', end: '2025-01-19', image: getImageURL('Butterfinger®') },
    { text: 'Toasted Coconut', start: '2025-01-20', end: '2025-01-26', image: getImageURL('Toasted Coconut') },
    { text: 'Peaches n\' Cream', start: '2025-01-27', end: '2025-02-02', image: getImageURL('Peaches n\' Cream') },
    { text: 'Nutter Butter®', start: '2025-02-03', end: '2025-02-09', image: getImageURL('Nutter Butter®') },
    { text: 'Strawberry Swirl', start: '2025-02-10', end: '2025-02-16', image: getImageURL('Strawberry Swirl') },
    { text: 'Cookies n\' Cream', start: '2025-02-17', end: '2025-02-23', image: getImageURL('Cookies n\' Cream') },
    { text: 'Blueberry Pie', start: '2025-02-24', end: '2025-03-02', image: getImageURL('Blueberry Pie') },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-03-03', end: '2025-03-09', image: getImageURL('Reese\'s Peanut Butter Cup®') },
    { text: 'Black Raspberry', start: '2025-03-10', end: '2025-03-16', image: getImageURL('Black Raspberry') },
    { text: 'Mint Oreo®', start: '2025-03-17', end: '2025-03-23', image: getImageURL('Mint Oreo®') },
    { text: 'Toasted Coconut', start: '2025-03-24', end: '2025-03-30', image: getImageURL('Toasted Coconut') },
    { text: 'Orange Dreamsicle', start: '2025-03-31', end: '2025-04-06', image: getImageURL('Orange Dreamsicle') },
    { text: 'Strawberry Cheesecake', start: '2025-04-07', end: '2025-04-13', image: getImageURL('Strawberry Cheesecake') },
    { text: 'Butterfinger®', start: '2025-04-14', end: '2025-04-20', image: getImageURL('Butterfinger®') },
    { text: 'Peaches n\' Cream', start: '2025-04-21', end: '2025-04-27', image: getImageURL('Peaches n\' Cream') },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-04-28', end: '2025-05-04', image: getImageURL('Reese\'s Peanut Butter Cup®') },
    { text: 'Oreo® Cheesecake', start: '2025-05-05', end: '2025-05-11', image: getImageURL('Oreo® Cheesecake') },
    { text: 'Blueberry Pie', start: '2025-05-12', end: '2025-05-18', image: getImageURL('Blueberry Pie') },
    { text: 'Nutter Butter®', start: '2025-05-19', end: '2025-05-25', image: getImageURL('Nutter Butter®') },
    { text: 'Mint Oreo®', start: '2025-05-26', end: '2025-06-01', image: getImageURL('Mint Oreo®') },
    { text: 'Key Lime Pie', start: '2025-06-02', end: '2025-06-08', image: getImageURL('Key Lime Pie') },
    { text: 'Toasted Coconut', start: '2025-06-09', end: '2025-06-15', image: getImageURL('Toasted Coconut') },
    { text: 'Black Raspberry', start: '2025-06-16', end: '2025-06-22', image: getImageURL('Black Raspberry') },
    { text: 'Coffee Toffee', start: '2025-06-23', end: '2025-06-29', image: getImageURL('Coffee Toffee') },
    { text: 'Strawberry Cheesecake', start: '2025-06-30', end: '2025-07-06', image: getImageURL('Strawberry Cheesecake') },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-07-07', end: '2025-07-13', image: getImageURL('Reese\'s Peanut Butter Cup®') },
    { text: 'Orange Dreamsicle', start: '2025-07-14', end: '2025-07-20', image: getImageURL('Orange Dreamsicle') },
    { text: 'Key Lime Pie', start: '2025-07-21', end: '2025-07-27', image: getImageURL('Key Lime Pie') },
    { text: 'Reese\'s® Cheesecake', start: '2025-07-28', end: '2025-08-03', image: getImageURL('Reese\'s® Cheesecake') },
    { text: 'Cookies n\' Cream', start: '2025-08-04', end: '2025-08-10', image: getImageURL('Cookies n\' Cream') },
    { text: 'Toasted Coconut', start: '2025-08-11', end: '2025-08-17', image: getImageURL('Toasted Coconut') },
    { text: 'Blueberry Pie', start: '2025-08-18', end: '2025-08-24', image: getImageURL('Blueberry Pie') },
    { text: 'Strawberry Cheesecake', start: '2025-08-25', end: '2025-08-31', image: getImageURL('Strawberry Cheesecake') },
    { text: 'Mint Oreo®', start: '2025-09-01', end: '2025-09-07', image: getImageURL('Mint Oreo®') },
    { text: 'Black Raspberry', start: '2025-09-08', end: '2025-09-14', image: getImageURL('Black Raspberry') },
    { text: 'Nutter Butter®', start: '2025-09-15', end: '2025-09-21', image: getImageURL('Nutter Butter®') },
    { text: 'Strawberry Swirl', start: '2025-09-22', end: '2025-09-28', image: getImageURL('Strawberry Swirl') },
    { text: 'Heath Bar®', start: '2025-09-29', end: '2025-10-05', image: getImageURL('Heath Bar®') },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-10-06', end: '2025-10-12', image: getImageURL('Reese\'s Peanut Butter Cup®') },
    { text: 'Mint Oreo®', start: '2025-10-13', end: '2025-10-19', image: getImageURL('Mint Oreo®') },
    { text: 'Butterfinger®', start: '2025-10-20', end: '2025-10-26', image: getImageURL('Butterfinger®') },
    { text: 'Oreo® Cheesecake', start: '2025-10-27', end: '2025-11-02', image: getImageURL('Oreo® Cheesecake') },
    { text: 'Toasted Coconut', start: '2025-11-03', end: '2025-11-09', image: getImageURL('Toasted Coconut') },
    { text: 'Strawberry Swirl', start: '2025-11-10', end: '2025-11-16', image: getImageURL('Strawberry Swirl') },
    { text: 'Heath Bar®', start: '2025-11-17', end: '2025-11-23', image: getImageURL('Heath Bar®') },
    { text: 'Blueberry Pie', start: '2025-11-24', end: '2025-11-30', image: getImageURL('Blueberry Pie') },
    { text: 'Nutter Butter', start: '2025-12-01', end: '2025-12-07', image: getImageURL('Nutter Butter') },
    { text: 'Coffee Toffee', start: '2025-12-08', end: '2025-12-14', image: getImageURL('Coffee Toffee') },
    { text: 'Mint Oreo®', start: '2025-12-15', end: '2025-12-21', image: getImageURL('Mint Oreo®') },
    { text: 'Strawberry Cheesecake', start: '2025-12-22', end: '2025-12-28', image: getImageURL('Strawberry Cheesecake') }
];


// DOMContentLoaded Event Listener
window.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar-container');
    const monthDisplay = document.getElementById('month-display');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const currentFlavorBox = document.getElementById('featured-flavor');

    if (calendarContainer && monthDisplay && prevButton && nextButton && currentFlavorBox) {
        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();

        // Base URL for the images folder
        const imageBaseURL = "https://spm725.github.io/Flavor-Calendar/Images/";

        // Function to normalize date format
        function normalizeDate(dateString) {
            const [year, month, day] = dateString.split('-').map(Number);
            return new Date(year, month - 1, day);
        }

        // Function to dynamically generate image URL for a flavor
        function getImageURL(flavorName) {
            const formattedFlavor = flavorName
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/®/g, "")
                .replace(/'/g, "");
            return `${imageBaseURL}${formattedFlavor}.jpg`;
        }

        // Add dynamically generated image URLs to flavorData
        flavorData.forEach(flavor => {
            flavor.image = getImageURL(flavor.text);
        });

        // Function to check and disable the "Previous" button for past months
        function checkPrevButton() {
            const today = new Date();
            const displayedDate = new Date(currentYear, currentMonth, 1);
            prevButton.disabled = displayedDate < today;
        }

        // Function to check and disable the "Next" button if there are no scheduled flavors in the future
        function checkNextButton() {
            const lastFlavorEndDate = flavorData.reduce((latest, flavor) => {
                const flavorEnd = normalizeDate(flavor.end);
                return flavorEnd > latest ? flavorEnd : latest;
            }, new Date(0));

            const displayedDate = new Date(currentYear, currentMonth + 1, 0);
            nextButton.disabled = displayedDate >= lastFlavorEndDate;
        }

        // Update the "Current Flavor" box with an image of the current flavor
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
                    <img src="${currentFlavor.image}" alt="${currentFlavor.text}" class="flavor-image" />
                `;
            } else {
                currentFlavorBox.innerHTML = `
                    <div class="title">Current Flavor</div>
                    <div class="flavor-image">No Current Flavor</div>
                `;
            }
        }

        // Render the calendar and other functionality remains the same...
