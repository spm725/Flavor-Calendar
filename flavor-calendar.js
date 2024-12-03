const flavorData = [
    { text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15', image: 'images/strawberry-cheesecake.jpg' },
    { text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29', image: 'images/mint-oreo.jpg' },
    { text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05', image: 'images/reeses-cheesecake.jpg' },
    { text: 'Coffee Toffee', start: '2025-01-06', end: '2025-01-12', image: 'images/coffee-toffee.jpg' },
    { text: 'Butterfinger®', start: '2025-01-13', end: '2025-01-19', image: 'images/butterfinger.jpg' },
    { text: 'Toasted Coconut', start: '2025-01-20', end: '2025-01-26', image: 'images/toasted-coconut.jpg' },
    { text: 'Peaches n\' Cream', start: '2025-01-27', end: '2025-02-02', image: 'images/peaches-n-cream.jpg' },
    { text: 'Nutter Butter®', start: '2025-02-03', end: '2025-02-09', image: 'images/nutter-butter.jpg' },
    { text: 'Strawberry Swirl', start: '2025-02-10', end: '2025-02-16', image: 'images/strawberry-swirl.jpg' },
    { text: 'Cookies n\' Cream', start: '2025-02-17', end: '2025-02-23', image: 'images/cookies-n-cream.jpg' },
    { text: 'Blueberry Pie', start: '2025-02-24', end: '2025-03-02', image: 'images/blueberry-pie.jpg' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-03-03', end: '2025-03-09', image: 'images/reeses-peanut-butter-cup.jpg' },
    { text: 'Black Raspberry', start: '2025-03-10', end: '2025-03-16', image: 'images/black-raspberry.jpg' },
    { text: 'Mint Oreo®', start: '2025-03-17', end: '2025-03-23', image: 'images/mint-oreo.jpg' },
    { text: 'Toasted Coconut', start: '2025-03-24', end: '2025-03-30', image: 'images/toasted-coconut.jpg' },
    { text: 'Orange Dreamsicle', start: '2025-03-31', end: '2025-04-06', image: 'images/orange-dreamsicle.jpg' },
    { text: 'Strawberry Cheesecake', start: '2025-04-07', end: '2025-04-13', image: 'images/strawberry-cheesecake.jpg' },
    { text: 'Butterfinger®', start: '2025-04-14', end: '2025-04-20', image: 'images/butterfinger.jpg' },
    { text: 'Peaches n\' Cream', start: '2025-04-21', end: '2025-04-27', image: 'images/peaches-n-cream.jpg' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-04-28', end: '2025-05-04', image: 'images/reeses-peanut-butter-cup.jpg' },
    { text: 'Oreo® Cheesecake', start: '2025-05-05', end: '2025-05-11', image: 'images/oreo-cheesecake.jpg' },
    { text: 'Blueberry Pie', start: '2025-05-12', end: '2025-05-18', image: 'images/blueberry-pie.jpg' },
    { text: 'Nutter Butter®', start: '2025-05-19', end: '2025-05-25', image: 'images/nutter-butter.jpg' },
    { text: 'Mint Oreo®', start: '2025-05-26', end: '2025-06-01', image: 'images/mint-oreo.jpg' },
    { text: 'Key Lime Pie', start: '2025-06-02', end: '2025-06-08', image: 'images/key-lime-pie.jpg' },
    { text: 'Toasted Coconut', start: '2025-06-09', end: '2025-06-15', image: 'images/toasted-coconut.jpg' },
    { text: 'Black Raspberry', start: '2025-06-16', end: '2025-06-22', image: 'images/black-raspberry.jpg' },
    { text: 'Coffee Toffee', start: '2025-06-23', end: '2025-06-29', image: 'images/coffee-toffee.jpg' },
    { text: 'Strawberry Cheesecake', start: '2025-06-30', end: '2025-07-06', image: 'images/strawberry-cheesecake.jpg' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-07-07', end: '2025-07-13', image: 'images/reeses-peanut-butter-cup.jpg' },
    { text: 'Orange Dreamsicle', start: '2025-07-14', end: '2025-07-20', image: 'images/orange-dreamsicle.jpg' },
    { text: 'Key Lime Pie', start: '2025-07-21', end: '2025-07-27', image: 'images/key-lime-pie.jpg' },
    { text: 'Reese\'s® Cheesecake', start: '2025-07-28', end: '2025-08-03', image: 'images/reeses-cheesecake.jpg' },
    { text: 'Cookies n\' Cream', start: '2025-08-04', end: '2025-08-10', image: 'images/cookies-n-cream.jpg' },
    { text: 'Toasted Coconut', start: '2025-08-11', end: '2025-08-17', image: 'images/toasted-coconut.jpg' },
    { text: 'Blueberry Pie', start: '2025-08-18', end: '2025-08-24', image: 'images/blueberry-pie.jpg' },
    { text: 'Strawberry Cheesecake', start: '2025-08-25', end: '2025-08-31', image: 'images/strawberry-cheesecake.jpg' },
    { text: 'Mint Oreo®', start: '2025-09-01', end: '2025-09-07', image: 'images/mint-oreo.jpg' },
    { text: 'Black Raspberry', start: '2025-09-08', end: '2025-09-14', image: 'images/black-raspberry.jpg' },
    { text: 'Nutter Butter®', start: '2025-09-15', end: '2025-09-21', image: 'images/nutter-butter.jpg' },
    { text: 'Strawberry Swirl', start: '2025-09-22', end: '2025-09-28', image: 'images/strawberry-swirl.jpg' },
    { text: 'Heath Bar®', start: '2025-09-29', end: '2025-10-05', image: 'images/heath-bar.jpg' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-10-06', end: '2025-10-12', image: 'images/reeses-peanut-butter-cup.jpg' },
    { text: 'Mint Oreo®', start: '2025-10-13', end: '2025-10-19', image: 'images/mint-oreo.jpg' },
    { text: 'Butterfinger®', start: '2025-10-20', end: '2025-10-26', image: 'images/butterfinger.jpg' },
    { text: 'Oreo® Cheesecake', start: '2025-10-27', end: '2025-11-02', image: 'images/oreo-cheesecake.jpg' },
    { text: 'Peaches n\' Cream', start: '2025-11-03', end: '2025-11-09', image: 'images/peaches-n-cream.jpg' },
    { text: 'Strawberry Cheesecake', start: '2025-11-10', end: '2025-11-16', image: 'images/strawberry-cheesecake.jpg' }
];

// Normalize date format (YYYY-MM-DD)
function normalizeDate(dateString) {
    return dateString.split('T')[0];
}

const currentFlavorBox = document.getElementById("featured-flavor");

// Update the "Current Flavor" box with an image
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
            <div class="flavor-name">No Current Flavor</div>
        `;
    }
}

// Initialize the calendar and flavor updates on page load
function initializeCalendar() {
    updateCurrentFlavor(); // Update the current flavor box
    renderCalendar(); // Call your original calendar rendering logic here
}

initializeCalendar();
