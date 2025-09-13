console.log('Custom.js loaded');

fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data);

        const tableBody = document.querySelector('#usersTable tbody');
        if (!tableBody) {
            console.error('usersTable tbody not found');
            return;
        }

        data.users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(err => console.error('Error fetching data.json:', err));
