const createnew = document.getElementById('createnew')
const viewall =  (allnotes) => {
    noteBox = document.createElement('div')
    document.getElementById('mybox').appendChild(noteBox);
    allnotes.forEach((item)=> {
        let note = document.createElement('p');
        let date = document.createElement('p');
        noteBox.appendChild(note);
        noteBox.appendChild(date)
        note.innerHTML = item.note;
        date.innerHTML = item.date
    });
}

fetch('/getUsers', {
    method: 'GET'
})
.then(result => result.json())
.then(data => {
    console.log(data)
    }
).catch((error=>{console.log('We got an Error fetching')}))
