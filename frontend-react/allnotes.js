const createnew = document.getElementById('createnew')
const viewall =  (allnotes) => {
    allnotes.forEach((item)=> {
        noteBox = document.createElement('div')
        noteBox.setAttribute("id", "noteBoxxx")
        document.getElementById('mybox').appendChild(noteBox);
        let note = document.createElement('p');
        let date = document.createElement('p');
        note.setAttribute("id", "notevalue")
        date.setAttribute("id", "datevalue")
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
    viewall(data.users)
    }
).catch((error=>{console.log('We got an Error fetching')}))
