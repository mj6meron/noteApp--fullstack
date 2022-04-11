let allnotesexpample = [
    {'note':'Blue', 'date' :'today'},
    {'note':'Red', 'date' :'tomorrow'},
    {'note':'White', 'date' :'nextday'},
    {'note':'Black', 'date' :'yesterday bitch'}
]


// buttons
const viewallbutton = document.getElementById('viewall')
const createBox = document.getElementById('createBox')
//inputs
const noteInput = document.getElementById('noteInput')
const dateInput = document.getElementById('dateInput')

// on SUBMIT function
let addedheader = false    // we use this to tell if we added a new user
createBox.addEventListener('submit', addFunction)
function addFunction (e) {
    e.preventDefault();
    const newNoteValues = {
        "note": noteInput.value,
        "date": dateInput.value
    }
    // Here we display the added user
    if (!addedheader){
        let header = document.createElement('p')
        document.getElementById('newnoteBox').appendChild(header);
        header.setAttribute("id", "headerValue")
        header.innerHTML = "New Note added! Here is the details: "
    }
    addedheader=true
    viewAdded(newNoteValues)
    // then we POST request!
    fetch('/CreateNote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNoteValues)
    })
    .catch(error=>{console.log('we cought an error during posting a new note', error.message)})
}

const viewAdded =  (item) => {
    noteBox = document.createElement('div')
    noteBox.setAttribute("id", "noteBoxxx")
    document.getElementById('newnoteBox').appendChild(noteBox);
    let note = document.createElement('p');
    let date = document.createElement('p');
    note.setAttribute("id", "notevalue")
    date.setAttribute("id", "datevalue")
    noteBox.appendChild(note);
    noteBox.appendChild(date)
    note.innerHTML = "Note: " + item.note;
    date.innerHTML = "Date: " + item.date
}

viewallbutton.addEventListener('click', viewallclicked)
function viewallclicked () {
    console.log("here we hit view all button!")
}