const flavorData = [
  { id: 'flavor5', text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15', imageSrc: 'https://www.dropbox.com/scl/fi/84qi6d4bxvefx2k63is86/FoW-Strawberry-Cheesecake.jpg?rlkey=t566tbzkm8d3pzuqe8gohyxfz&st=1airezf6&raw=1' },
  { id: 'flavor6', text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29', imageSrc: 'https://www.dropbox.com/scl/fi/7c08vzdssay0jwu98q8hj/FoW-Mint-Oreo.jpg?rlkey=oe8mwqnzwesg91wwyubyk71tg&st=nb9xo8d4&dl=0' },
  { id: 'flavor7', text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05', imageSrc: 'images/reeses-cheesecake.jpg' },
  { id: 'flavor8', text: 'Coffee Toffee', start: '2025-01-06', end: '2025-01-12', imageSrc: 'images/coffee-toffee.jpg' },
  { id: 'flavor9', text: 'Butterfinger®', start: '2025-01-13', end: '2025-01-19', imageSrc: 'images/butterfinger.jpg' },
  { id: 'flavor10', text: 'Toasted Coconut', start: '2025-01-20', end: '2025-01-26', imageSrc: 'images/toasted-coconut.jpg' },
  { id: 'flavor11', text: 'Peaches n\' Cream', start: '2025-01-27', end: '2025-02-02', imageSrc: 'images/peaches-n-cream.jpg' },
  { id: 'flavor12', text: 'Nutter Butter®', start: '2025-02-03', end: '2025-02-09', imageSrc: 'images/nutter-butter.jpg' },
  { id: 'flavor13', text: 'Strawberry Swirl', start: '2025-02-10', end: '2025-02-16', imageSrc: 'images/strawberry-swirl.jpg' },
  { id: 'flavor14', text: 'Cookies n\' Cream', start: '2025-02-17', end: '2025-02-23', imageSrc: 'images/cookies-n-cream.jpg' },
  { id: 'flavor15', text: 'Blueberry Pie', start: '2025-02-24', end: '2025-03-02', imageSrc: 'images/blueberry-pie.jpg' },
  { id: 'flavor16', text: 'Reese\'s Peanut Butter Cup®', start: '2025-03-03', end: '2025-03-09', imageSrc: 'images/reeses-peanut-butter-cup.jpg' },
  { id: 'flavor17', text: 'Black Raspberry', start: '2025-03-10', end: '2025-03-16', imageSrc: 'images/black-raspberry.jpg' },
  { id: 'flavor18', text: 'Mint Oreo®', start: '2025-03-17', end: '2025-03-23', imageSrc: 'images/mint-oreo.jpg' },
  { id: 'flavor19', text: 'Toasted Coconut', start: '2025-03-24', end: '2025-03-30', imageSrc: 'images/toasted-coconut.jpg' },
  { id: 'flavor20', text: 'Orange Dreamsicle', start: '2025-03-31', end: '2025-04-06', imageSrc: 'images/orange-dreamsicle.jpg' },
  { id: 'flavor21', text: 'Strawberry Cheesecake', start: '2025-04-07', end: '2025-04-13', imageSrc: 'images/strawberry-cheesecake.jpg' },
  { id: 'flavor22', text: 'Butterfinger®', start: '2025-04-14', end: '2025-04-20', imageSrc: 'images/butterfinger.jpg' },
  { id: 'flavor23', text: 'Peaches n\' Cream', start: '2025-04-21', end: '2025-04-27', imageSrc: 'images/peaches-n-cream.jpg' },
  { id: 'flavor24', text: 'Reese\'s Peanut Butter Cup®', start: '2025-04-28', end: '2025-05-04', imageSrc: 'images/reeses-peanut-butter-cup.jpg' },
  { id: 'flavor25', text: 'Oreo® Cheesecake', start: '2025-05-05', end: '2025-05-11', imageSrc: 'images/oreo-cheesecake.jpg' },
  { id: 'flavor26', text: 'Blueberry Pie', start: '2025-05-12', end: '2025-05-18', imageSrc: 'images/blueberry-pie.jpg' },
  { id: 'flavor27', text: 'Nutter Butter®', start: '2025-05-19', end: '2025-05-25', imageSrc: 'images/nutter-butter.jpg' },
  { id: 'flavor28', text: 'Mint Oreo®', start: '2025-05-26', end: '2025-06-01', imageSrc: 'images/mint-oreo.jpg' },
  { id: 'flavor29', text: 'Key Lime Pie', start: '2025-06-02', end: '2025-06-08', imageSrc: 'images/key-lime-pie.jpg' },
  { id: 'flavor30', text: 'Toasted Coconut', start: '2025-06-09', end: '2025-06-15', imageSrc: 'images/toasted-coconut.jpg' },
  { id: 'flavor31', text: 'Black Raspberry', start: '2025-06-16', end: '2025-06-22', imageSrc: 'images/black-raspberry.jpg' },
  { id: 'flavor32', text: 'Coffee Toffee', start: '2025-06-23', end: '2025-06-29', imageSrc: 'images/coffee-toffee.jpg' },
  { id: 'flavor33', text: 'Strawberry Cheesecake', start: '2025-06-30', end: '2025-07-06', imageSrc: 'images/strawberry-cheesecake.jpg' },
  { id: 'flavor34', text: 'Reese\'s Peanut Butter Cup®', start: '2025-07-07', end: '2025-07-13', imageSrc: 'images/reeses-peanut-butter-cup.jpg' },
  { id: 'flavor35', text: 'Butterfinger®', start: '2025-07-14', end: '2025-07-20', imageSrc: 'images/butterfinger.jpg' },
];


const today = new Date().toISOString().split('T')[0];
const flavorSection = document.getElementById('flavor-section');

// Helper function to format dates (MM/DD)
const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero for months
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero for days
    return `${month}/${day}`;
};

if (flavorSection) {
    // Find the current flavor based on today's date
    const currentFlavor = flavorData.find(
        (flavor) => today >= flavor.start && today <= flavor.end
    );

    // Get the next 3 upcoming flavors after today
    const upcomingFlavors = flavorData
        .filter((flavor) => new Date(flavor.start) > new Date(today))
        .slice(0, 3);

    // Clear the flavor section content before adding new content
    flavorSection.innerHTML = '';

    // Create a single box for current and upcoming flavors
    const flavorBox = document.createElement('div');
    flavorBox.className = 'flavor-box'; // Style with a CSS class

    // Add the current flavor with a single date range
    if (currentFlavor) {
        const currentFlavorHTML = `
            <div class="flavor-text current-highlight">
                <p>${formatDate(currentFlavor.start)} - ${formatDate(currentFlavor.end)}: ${currentFlavor.text}</p>
            </div>
        `;
        flavorBox.innerHTML += currentFlavorHTML;
    } else {
        console.warn('No current flavor found for today:', today);
    }

    // Add each upcoming flavor with a single date range
    upcomingFlavors.forEach((flavor) => {
        const upcomingFlavorHTML = `
            <div class="flavor-text">
                <p>${formatDate(flavor.start)} - ${formatDate(flavor.end)}: ${flavor.text}</p>
            </div>
        `;
        flavorBox.innerHTML += upcomingFlavorHTML;
    });

    // Add the box to the flavor section
    flavorSection.appendChild(flavorBox);

    // Add the current flavor image, positioned separately
    if (currentFlavor) {
        const currentFlavorImage = document.createElement('img');
        currentFlavorImage.src = currentFlavor.imageSrc;
        currentFlavorImage.alt = currentFlavor.text;
        currentFlavorImage.className = 'current-flavor-image';
        flavorSection.appendChild(currentFlavorImage);
    }
} else {
    console.error('Flavor section is missing!');
}
