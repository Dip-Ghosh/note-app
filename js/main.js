
const addBtn =  document.getElementById('add');

const deleteCard = (note) => {

}

const openCard = () => {

    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
           
        </div>
    `;
    // <div className="main ${text ? "" : " hidden"}"></div>
    // <textarea className="${text ? " hidden" : ""}"></textarea>


    // const editBtn   = note.querySelector('.edit');
    // editBtn.addEventListener('click', editCard);

    const deleteBtn = note.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        note.remove();
    });

    document.body.appendChild(note);

}


addBtn.addEventListener('click', openCard);