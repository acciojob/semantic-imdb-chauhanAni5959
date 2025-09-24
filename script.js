const actors = [
    { name: "Christian Bale", role: "Bruce Wayne / Batman" },
    { name: "Heath Ledger", role: "The Joker" },
    { name: "Aaron Eckhart", role: "Harvey Dent" },
    { name: "Michael Caine", role: "Alfred Pennyworth" },
    { name: "Maggie Gyllenhaal", role: "Rachel Dawes" },
    { name: "Gary Oldman", role: "Commissioner Gordon" }
];

const favoriteQuote = "Why so serious?";

window.addEventListener('DOMContentLoaded', () => {
    // Populate actor list
    const actorList = document.getElementById('actor-list');
    actors.forEach(actor => {
        const li = document.createElement('li');
        li.textContent = `${actor.name} as ${actor.role}`;
        actorList.appendChild(li);
    });

    // Insert favorite quote
    document.getElementById('favorite-quote').textContent = `"${favoriteQuote}"`;

    // Smooth scroll nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
