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
createBox.addEventListener('submit', addFunction)
function addFunction (e) {
    console.log('we clicked on add lil bitch!')
    e.preventDefault();
    const newNoteValues = {
        "note": noteInput.value,
        "date": dateInput.value
    }
    viewAdded(newNoteValues)
    console.log('here is our details-->  ',  newNoteValues)
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
    document.getElementById('newnoteBox').appendChild(noteBox);
    document.getElementById("newnoteBox").classList.add('onetime');
    let header = document.createElement('p')
    let note = document.createElement('p');
    let date = document.createElement('p');
    noteBox.appendChild(header)
    noteBox.appendChild(note);
    noteBox.appendChild(date)
    header.innerHTML = "New Note added! Here is the details: "
    note.innerHTML = "Note: " + item.note;
    date.innerHTML = "Date: " + item.date
}

viewallbutton.addEventListener('click', viewallclicked)
function viewallclicked () {
    console.log("here we hit view all button!")
}