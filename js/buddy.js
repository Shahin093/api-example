const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data));
}
loadBuddy();
const displayBuddy = data => {
    // console.log(data.results);
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddy');
    for (const buddy of buddies) {
        console.log(buddy.name.first, buddy.name.last);
        // buddiesDiv.innerText = buddy.email;
        const p = document.createElement('p');
        // p.innerText = buddy.email;
        p.innerText = `Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} 
        email : ${buddy.email} `
        buddiesDiv.appendChild(p);
    }
}