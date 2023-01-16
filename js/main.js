
const addBtn =  document.getElementById('add');


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

    document.body.appendChild(note);
}


addBtn.addEventListener('click', openCard);