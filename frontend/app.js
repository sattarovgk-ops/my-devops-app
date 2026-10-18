fetch('/api/items')
    .then(res => res.json())
    .then(items => {
        const ul = document.getElementById('items');
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.id}: ${item.name}`;
            ul.appendChild(li);
        });
    })
    .catch(err => console.error(err));
