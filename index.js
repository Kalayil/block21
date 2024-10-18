document.addEventListener('DOMContentLoaded', () => {
    const partyForm = document.getElementById('party-form');
    const partyList = document.getElementById('party-list');

    function fetchParties() {
        const parties = [
            { name: 'Birthday Bash', date: '2024-12-01', time: '18:00', location: 'Party Hall', description: 'Fun celebration' },
            { name: 'Wedding Party', date: '2024-10-15', time: '15:00', location: 'Hotel Grand', description: 'Wedding event' }
        ];

        partyList.innerHTML = '';
        parties.forEach(party => {
            const li = document.createElement('li');
            li.textContent = `${party.name} - ${party.date} - ${party.time} - ${party.location} - ${party.description}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                li.remove();
            });
            li.appendChild(deleteButton);
            partyList.appendChild(li);
        });
    }

    partyForm.addEventListener('submit', event => {
        event.preventDefault();
        console.log('Form Submitted!'); // Test to make sure the form is working

        const newParty = {
            name: document.getElementById('party-name').value,
            date: document.getElementById('party-date').value,
            time: document.getElementById('party-time').value,
            location: document.getElementById('party-location').value,
            description: document.getElementById('party-description').value,
        };

        const li = document.createElement('li');
        li.textContent = `${newParty.name} - ${newParty.date} - ${newParty.time} - ${newParty.location} - ${newParty.description}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });
        li.appendChild(deleteButton);
        partyList.appendChild(li);

        partyForm.reset();
    });

    fetchParties();
});
