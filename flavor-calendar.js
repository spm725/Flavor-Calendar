const flavorData = [
    { text: 'Strawberry Cheesecake', start: '2024-12-02', end: '2024-12-15', image: 'https://www.dropbox.com/scl/fi/wxp71y5wu6h2zt5lpavoq/strawberry-cheesecake.jpg?rlkey=c9do4uoam73ltxktfbmmn8rco&st=r8lvmft8&raw=1' },
    { text: 'Mint Oreo®', start: '2024-12-16', end: '2024-12-29', image: 'https://www.dropbox.com/scl/fi/sw6i1wiqy69snr3d27oee/mint-oreo.jpg?rlkey=vwy0fj3az2h1hd219cdnjcuv1&st=6hk84mud&raw=1' },
    { text: 'Reese\'s® Cheesecake', start: '2024-12-30', end: '2025-01-05', image: 'https://www.dropbox.com/s/txhwzez0o2f0k61l50jmf/reeses-cheesecake.jpg?raw=1' },
    { text: 'Coffee Toffee', start: '2025-01-06', end: '2025-01-12', image: 'https://www.dropbox.com/scl/fi/n49sb462gu8frgm8b2uhz/coffee-toffee.jpg?rlkey=2bjacr6uk44v7athk48h02ioa&st=8un37k31&raw=1' },
    { text: 'Butterfinger®', start: '2025-01-13', end: '2025-01-19', image: 'https://www.dropbox.com/scl/fi/qbaqkgx0cxbetc1l0k2fe/butterfinger.jpg?rlkey=vf16ides8nbtugu0lf6zm5ego&st=bm9cm2lf&raw=1' },
    { text: 'Toasted Coconut', start: '2025-01-20', end: '2025-01-26', image: 'images/toasted-coconut.jpg' },
    { text: 'Peaches n\' Cream', start: '2025-01-27', end: '2025-02-02', image: 'https://www.dropbox.com/scl/fi/b7x5kycs6n123n6r10zcz/peaches-n-cream.jpg?rlkey=x1x0dtpbgy3pbd53dknfwpw6o&st=hle81zz6&raw=1' },
    { text: 'Nutter Butter®', start: '2025-02-03', end: '2025-02-09', image: 'https://www.dropbox.com/scl/fi/wyzhhm3hka0nzz8di5cj3/nutter-butter.jpg?rlkey=vxcjfz0ypva7qjog9fygfc9oe&st=i52z6uwv&raw=1' },
    { text: 'Strawberry Swirl', start: '2025-02-10', end: '2025-02-16', image: 'https://www.dropbox.com/scl/fi/qvoot6yvx25uxxdruwn65/strawberry-swirl.jpg?rlkey=p51bci4ouspanb92foq2np1x6&st=dyesmt14&raw=1' },
    { text: 'Cookies n\' Cream', start: '2025-02-17', end: '2025-02-23', image: 'https://www.dropbox.com/scl/fi/si2txl8vj7u2n8phtytrp/cookies-n-cream.jpg?rlkey=2lezwjcju9kkwc2lsulsroi43&st=4tu18xhn&raw=1' },
    { text: 'Blueberry Pie', start: '2025-02-24', end: '2025-03-02', image: 'https://www.dropbox.com/scl/fi/ufeeq928k55m8ib24q7ml/blueberry-pie.jpg?rlkey=8fet2zntdnudullji6ctzxche&st=ttga50um&raw=1' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-03-03', end: '2025-03-09', image: 'https://www.dropbox.com/scl/fi/kramqb9ydyq6pi22eaoqc/reeses-pb-cup.jpg?rlkey=egx79c4c8bp9hjcxu49da94zn&st=y7xaa4rf&raw=1' },
    { text: 'Black Raspberry', start: '2025-03-10', end: '2025-03-16', image: 'https://www.dropbox.com/scl/fi/51i8uxw1ioe28hugkotrk/black-raspberry.jpg?rlkey=w5wg265r2ix8jfi7oiuvhz5fb&st=w5i1sop4&raw=1' },
    { text: 'Mint Oreo®', start: '2025-03-17', end: '2025-03-23', image: 'https://www.dropbox.com/scl/fi/sw6i1wiqy69snr3d27oee/mint-oreo.jpg?rlkey=vwy0fj3az2h1hd219cdnjcuv1&st=6hk84mud&raw=1' },
    { text: 'Toasted Coconut', start: '2025-03-24', end: '2025-03-30', image: 'images/toasted-coconut.jpg' },
    { text: 'Orange Dreamsicle', start: '2025-03-31', end: '2025-04-06', image: 'https://www.dropbox.com/scl/fi/y7ysm3xmvfi3s55hftyyz/orange-dreamsicle.jpg?rlkey=axppx9ecpxw5sh8b85jrcswfi&st=e7bvk1be&raw=1' },
    { text: 'Strawberry Cheesecake', start: '2025-04-07', end: '2025-04-13', image: 'https://www.dropbox.com/scl/fi/wxp71y5wu6h2zt5lpavoq/strawberry-cheesecake.jpg?rlkey=c9do4uoam73ltxktfbmmn8rco&st=r8lvmft8&raw=1' },
    { text: 'Butterfinger®', start: '2025-04-14', end: '2025-04-20', image: 'https://www.dropbox.com/scl/fi/qbaqkgx0cxbetc1l0k2fe/butterfinger.jpg?rlkey=vf16ides8nbtugu0lf6zm5ego&st=bm9cm2lf&raw=1' },
    { text: 'Peaches n\' Cream', start: '2025-04-21', end: '2025-04-27', image: 'https://www.dropbox.com/scl/fi/b7x5kycs6n123n6r10zcz/peaches-n-cream.jpg?rlkey=x1x0dtpbgy3pbd53dknfwpw6o&st=hle81zz6&raw=1' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-04-28', end: '2025-05-04', image: 'https://www.dropbox.com/scl/fi/kramqb9ydyq6pi22eaoqc/reeses-pb-cup.jpg?rlkey=egx79c4c8bp9hjcxu49da94zn&st=y7xaa4rf&raw=1' },
    { text: 'Oreo® Cheesecake', start: '2025-05-05', end: '2025-05-11', image: 'https://www.dropbox.com/scl/fi/6ci2x1r81a6ao9ix2bd25/oreo-cheesecake.jpg?rlkey=le046rxahu3u2hnbwgwffjoum&st=7fw9ybqb&raw=1' },
    { text: 'Blueberry Pie', start: '2025-05-12', end: '2025-05-18', image: 'https://www.dropbox.com/scl/fi/ufeeq928k55m8ib24q7ml/blueberry-pie.jpg?rlkey=8fet2zntdnudullji6ctzxche&st=ttga50um&raw=1' },
    { text: 'Nutter Butter®', start: '2025-05-19', end: '2025-05-25', image: 'https://www.dropbox.com/scl/fi/wyzhhm3hka0nzz8di5cj3/nutter-butter.jpg?rlkey=vxcjfz0ypva7qjog9fygfc9oe&st=i52z6uwv&raw=1' },
    { text: 'Mint Oreo®', start: '2025-05-26', end: '2025-06-01', image: 'https://www.dropbox.com/scl/fi/sw6i1wiqy69snr3d27oee/mint-oreo.jpg?rlkey=vwy0fj3az2h1hd219cdnjcuv1&st=6hk84mud&raw=1' },
    { text: 'Key Lime Pie', start: '2025-06-02', end: '2025-06-08', image: 'https://www.dropbox.com/scl/fi/ygs2gmo2zg8fbhb9mcpg4/key-lime-pie.jpg?rlkey=agtb72dfg4wno14kjw20gfywg&st=nalbq5kl&raw=1' },
    { text: 'Toasted Coconut', start: '2025-06-09', end: '2025-06-15', image: 'images/toasted-coconut.jpg' },
    { text: 'Black Raspberry', start: '2025-06-16', end: '2025-06-22', image: 'https://www.dropbox.com/scl/fi/51i8uxw1ioe28hugkotrk/black-raspberry.jpg?rlkey=w5wg265r2ix8jfi7oiuvhz5fb&st=w5i1sop4&raw=1' },
    { text: 'Coffee Toffee', start: '2025-06-23', end: '2025-06-29', image: 'https://www.dropbox.com/scl/fi/n49sb462gu8frgm8b2uhz/coffee-toffee.jpg?rlkey=2bjacr6uk44v7athk48h02ioa&st=8un37k31&raw=1' },
    { text: 'Strawberry Cheesecake', start: '2025-06-30', end: '2025-07-06', image: 'https://www.dropbox.com/scl/fi/wxp71y5wu6h2zt5lpavoq/strawberry-cheesecake.jpg?rlkey=c9do4uoam73ltxktfbmmn8rco&st=54nuy853&raw=1' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-07-07', end: '2025-07-13', image: 'https://www.dropbox.com/scl/fi/kramqb9ydyq6pi22eaoqc/reeses-pb-cup.jpg?rlkey=egx79c4c8bp9hjcxu49da94zn&st=y7xaa4rf&raw=1' },
    { text: 'Orange Dreamsicle', start: '2025-07-14', end: '2025-07-20', image: 'https://www.dropbox.com/scl/fi/y7ysm3xmvfi3s55hftyyz/orange-dreamsicle.jpg?rlkey=axppx9ecpxw5sh8b85jrcswfi&st=e7bvk1be&raw=1' },
    { text: 'Key Lime Pie', start: '2025-07-21', end: '2025-07-27', image: 'https://www.dropbox.com/scl/fi/ygs2gmo2zg8fbhb9mcpg4/key-lime-pie.jpg?rlkey=agtb72dfg4wno14kjw20gfywg&st=nalbq5kl&raw=1' },
    { text: 'Reese\'s® Cheesecake', start: '2025-07-28', end: '2025-08-03', image: 'https://www.dropbox.com/s/txhwzez0o2f0k61l50jmf/reeses-cheesecake.jpg?raw=1' },
    { text: 'Cookies n\' Cream', start: '2025-08-04', end: '2025-08-10', image: 'https://www.dropbox.com/scl/fi/si2txl8vj7u2n8phtytrp/cookies-n-cream.jpg?rlkey=2lezwjcju9kkwc2lsulsroi43&st=4tu18xhn&raw=1' },
    { text: 'Toasted Coconut', start: '2025-08-11', end: '2025-08-17', image: 'images/toasted-coconut.jpg' },
    { text: 'Blueberry Pie', start: '2025-08-18', end: '2025-08-24', image: 'https://www.dropbox.com/scl/fi/ufeeq928k55m8ib24q7ml/blueberry-pie.jpg?rlkey=8fet2zntdnudullji6ctzxche&st=ttga50um&raw=1' },
    { text: 'Strawberry Cheesecake', start: '2025-08-25', end: '2025-08-31', image: 'https://www.dropbox.com/scl/fi/wxp71y5wu6h2zt5lpavoq/strawberry-cheesecake.jpg?rlkey=c9do4uoam73ltxktfbmmn8rco&st=r8lvmft8&raw=1' },
    { text: 'Mint Oreo®', start: '2025-09-01', end: '2025-09-07', image: 'https://www.dropbox.com/scl/fi/sw6i1wiqy69snr3d27oee/mint-oreo.jpg?rlkey=vwy0fj3az2h1hd219cdnjcuv1&st=6hk84mud&raw=1' },
    { text: 'Black Raspberry', start: '2025-09-08', end: '2025-09-14', image: 'https://www.dropbox.com/scl/fi/51i8uxw1ioe28hugkotrk/black-raspberry.jpg?rlkey=w5wg265r2ix8jfi7oiuvhz5fb&st=w5i1sop4&raw=1' },
    { text: 'Nutter Butter®', start: '2025-09-15', end: '2025-09-21', image: 'https://www.dropbox.com/scl/fi/wyzhhm3hka0nzz8di5cj3/nutter-butter.jpg?rlkey=vxcjfz0ypva7qjog9fygfc9oe&st=i52z6uwv&raw=1' },
    { text: 'Strawberry Swirl', start: '2025-09-22', end: '2025-09-28', image: 'https://www.dropbox.com/scl/fi/qvoot6yvx25uxxdruwn65/strawberry-swirl.jpg?rlkey=p51bci4ouspanb92foq2np1x6&st=dyesmt14&raw=1' },
    { text: 'Heath Bar®', start: '2025-09-29', end: '2025-10-05', image: 'https://www.dropbox.com/scl/fi/4usx8cbeii1lmv3u6opzp/heath-bar.jpg?rlkey=z3b36cjwic0vywcp865e92pvk&st=hynyankc&raw=1' },
    { text: 'Reese\'s Peanut Butter Cup®', start: '2025-10-06', end: '2025-10-12', image: 'https://www.dropbox.com/scl/fi/kramqb9ydyq6pi22eaoqc/reeses-pb-cup.jpg?rlkey=egx79c4c8bp9hjcxu49da94zn&st=y7xaa4rf&raw=1' },
    { text: 'Mint Oreo®', start: '2025-10-13', end: '2025-10-19', image: 'https://www.dropbox.com/scl/fi/sw6i1wiqy69snr3d27oee/mint-oreo.jpg?rlkey=vwy0fj3az2h1hd219cdnjcuv1&st=6hk84mud&raw=1' },
    { text: 'Butterfinger®', start: '2025-10-20', end: '2025-10-26', image: 'https://www.dropbox.com/scl/fi/qbaqkgx0cxbetc1l0k2fe/butterfinger.jpg?rlkey=vf16ides8nbtugu0lf6zm5ego&st=bm9cm2lf&raw=1' },
    { text: 'Oreo® Cheesecake', start: '2025-10-27', end: '2025-11-02', image: 'https://www.dropbox.com/scl/fi/6ci2x1r81a6ao9ix2bd25/oreo-cheesecake.jpg?rlkey=le046rxahu3u2hnbwgwffjoum&st=7fw9ybqb&raw=1' },
    { text: 'Toasted Coconut', start: '2025-11-03', end: '2025-11-09', image: 'images/toasted-coconut.jpg' },
    { text: 'Strawberry Swirl', start: '2025-11-10', end: '2025-11-16', image: 'https://www.dropbox.com/scl/fi/qvoot6yvx25uxxdruwn65/strawberry-swirl.jpg?rlkey=p51bci4ouspanb92foq2np1x6&st=dyesmt14&raw=1' },
    { text: 'Heath Bar®', start: '2025-11-17', end: '2025-11-23', image: 'https://www.dropbox.com/scl/fi/4usx8cbeii1lmv3u6opzp/heath-bar.jpg?rlkey=z3b36cjwic0vywcp865e92pvk&st=hynyankc&raw=1' },
    { text: 'Blueberry Pie', start: '2025-11-24', end: '2025-11-30', image: 'https://www.dropbox.com/scl/fi/ufeeq928k55m8ib24q7ml/blueberry-pie.jpg?rlkey=8fet2zntdnudullji6ctzxche&st=ttga50um&raw=1' },
    { text: 'Nutter Butter', start: '2025-12-01', end: '2025-12-07', image: 'https://www.dropbox.com/scl/fi/wyzhhm3hka0nzz8di5cj3/nutter-butter.jpg?rlkey=vxcjfz0ypva7qjog9fygfc9oe&st=i52z6uwv&raw=1' },
    { text: 'Coffee Toffee', start: '2025-12-08', end: '2025-12-14', image: 'https://www.dropbox.com/scl/fi/n49sb462gu8frgm8b2uhz/coffee-toffee.jpg?rlkey=2bjacr6uk44v7athk48h02ioa&st=8un37k31&raw=1' },
    { text: 'Mint Oreo®', start: '2025-12-15', end: '2025-12-21', image: 'https://www.dropbox.com/scl/fi/sw6i1wiqy69snr3d27oee/mint-oreo.jpg?rlkey=vwy0fj3az2h1hd219cdnjcuv1&st=6hk84mud&raw=1' },
    { text: 'Strawberry Cheesecake', start: '2025-12-22', end: '2025-12-28', image: 'https://www.dropbox.com/scl/fi/wxp71y5wu6h2zt5lpavoq/strawberry-cheesecake.jpg?rlkey=c9do4uoam73ltxktfbmmn8rco&st=r8lvmft8&raw=1' }
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

        // Add the day number to the top right
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = d.getDate();
        cell.appendChild(dayNumber);

        // Add the day of the week to the top left
        const dayOfWeek = d.toLocaleString('en-US', { weekday: 'short' });
        const dayLabel = document.createElement('div');
        dayLabel.textContent = dayOfWeek;
        dayLabel.className = 'day-of-week';
        cell.appendChild(dayLabel);

        if (
            today.getFullYear() === d.getFullYear() &&
            today.getMonth() === d.getMonth() &&
            today.getDate() === d.getDate()
        ) {
            cell.classList.add('current-date');
        }

        // Add flavor text if the day falls within a flavor period
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

    checkPrevButton();
    checkNextButton();
    adjustFontSizeForFlavorText();

    // Adjust columns based on window width
    adjustCalendarColumns();
}

// Adjust the font size for the flavor text to fit within the cell
function adjustFontSizeForFlavorText() {
    const flavorTexts = document.querySelectorAll('.flavor-text');
    flavorTexts.forEach(flavorText => {
        let parentWidth = flavorText.parentElement.clientWidth;
        let parentHeight = flavorText.parentElement.clientHeight;
        let fontSize = 10; // Start with a smaller default font size for better fitting
        flavorText.style.fontSize = fontSize + 'px';
        flavorText.style.whiteSpace = 'normal'; // Allow text to wrap

        // Reduce font size until the text fits within the parent container without overflow
        while ((flavorText.scrollWidth > parentWidth || flavorText.scrollHeight > parentHeight) && fontSize > 6) {
            fontSize -= 0.5;
            flavorText.style.fontSize = fontSize + 'px';
        }
    });
}

// Adjust calendar columns based on window width
function adjustCalendarColumns() {
    if (window.innerWidth <= 992) {
        calendarContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
    } else {
        calendarContainer.style.gridTemplateColumns = 'repeat(7, 1fr)';
    }
}

// Event listeners for buttons
prevButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent auto-scrolling
    currentMonth -= 1;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear -= 1;
    }
    renderCalendar(currentYear, currentMonth);
});

nextButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent auto-scrolling
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

// Run the function when the content loads and when resizing the window
window.addEventListener('load', adjustFontSizeForFlavorText);
window.addEventListener('resize', () => {
    adjustFontSizeForFlavorText();
    adjustCalendarColumns();
});
