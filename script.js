// Selectors
const listTitle = document.getElementById('item-title');
const quantity = document.getElementById('quantity');
const description = document.getElementById('description');
const enterBtn = document.getElementById('submit')
const list = document.getElementById('lists')

const shoppingLists = [];

// Event Listeners
enterBtn.addEventListener('click', addList);

// Functions
function deleteItem(e) {
    const parentList = e.target.parentElement;
    list.removeChild(parentList);
    const parentListId = parseInt(parentList.id);
    shoppingLists.splice(parentListId, 1);
    updateDom();
}

function updateDom() {
    list.innerHTML = "";

    for (let i = 0; i < shoppingLists.length; ++i) {
        //Create new Element (li)
        const liElement = document.createElement('li');
        list.appendChild(liElement)


        liElement.innerText = shoppingLists[i];
        liElement.id = i;
        //Add Class to liElement for Css Styling
        liElement.classList.add('list-detail');

        //Add Elements to li
        const listDesc = document.createElement('p')
        liElement.appendChild(listDesc)
        listDesc.innerText = description.value
        listDesc.classList.add('description');

        const listQty = document.createElement('h6')
        liElement.appendChild(listQty)
        listQty.innerText = quantity.value;



        //Create button that deletes a list on click
        const doneBtn = document.createElement('button');
        doneBtn.innerText = 'Done';
        liElement.appendChild(doneBtn);
        doneBtn.classList.add('done-btn')

        //Add Event Listener to button
        doneBtn.addEventListener('click', deleteItem)

        //Reset input Value
        listTitle.value = '';


    }

}

function addList(e) {
    e.preventDefault();



    shoppingLists.push(listTitle.value);
    updateDom();

}



console.log(list)