const switchWaitlist = () => {
    window.location.href = "waitlist.html";
    loadTableData(items);
}

const switchDining = () => {
    window.location.href = "dining.html";
}
const switchCounter = () => {
    window.location.href = "counter.html";
}
const switchCourtyard = () => {
    window.location.href = "courtyard.html";
}

const switchMain = () => {
    window.location.href = "host.html";
}

const addToList = () => {
    items.push({
        name: document.getElementById('name').innerText,
        size: document.getElementById('party').innerText,
        section: document.getElementById('section').value
    })
}

function loadTableData(items) {
    const waitTableBody = document.getElementById("waitTableBody");

    items.forEach(item => {
        const row = waitTableBody.insertRow();
        const nameCell = row.insertCell(0);
        const sizeCell = row.insertCell(1);
        const sectionCell = row.insertCell(2);
        const timeCell = row.insertCell(3);
        const estimateCell = row.insertCell(4);
        const recommendationCell = row.insertCell(5);

        nameCell.innerHTML = item.name;
        sizeCell.innerHTML = item.size;
        sectionCell.innerHTML = item.section;
        timeCell.innerHTML = item.time;
        estimateCell.innerHTML = item.timeEstimate;
        recommendationCell.innerHTML = item.recommendation;


    });
}

// Example data
const items = [
    {name: "Rossi", size: "1", section: 'dr', time: '7:00', timeEstimate: "5-10", recommendation: "r1"},
];

window.onload = () => {
    loadTableData(items);
}

