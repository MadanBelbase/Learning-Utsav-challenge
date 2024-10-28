document.addEventListener('DOMContentLoaded', () => {
    // Function to get a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Change the year color every 1 second
    const yearElement = document.querySelector('.year');
    setInterval(() => {
        yearElement.style.color = getRandomColor();
    }, 1000);

    // Change the date and time background color every 1 second
    const dateTimeElement = document.getElementById('dateTime');
    setInterval(() => {
        dateTimeElement.style.backgroundColor = getRandomColor();
    }, 1000);

    // Apply background colors to challenges based on their status
    const challenges = document.querySelectorAll('.challenge');
    challenges.forEach(challenge => {
        if (challenge.classList.contains('done')) {
            challenge.style.backgroundColor = 'green';
        } else if (challenge.classList.contains('ongoing')) {
            challenge.style.backgroundColor = 'yellow';
            challenge.style.color = 'black';
        } else if (challenge.classList.contains('coming')) {
            challenge.style.backgroundColor = 'red';
        }
    });
});
