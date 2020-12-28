
fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ massage: "hello", name: 'Zakaria' }),
}).then(res => res.json()).then(val => console.log(val))
    .catch(err => {
        console.log(err);
    })

fetch('http://localhost:3000/greeting', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
}).then(res => res.json()).then(val => console.log(val))
    .catch(err => {
        console.log(err);
    })