var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');



//deletting item// 
itemList.addEventListener('click', deleteItem);
//Form Submission//
form.addEventListener('submit', addItem);
//filter for search//
filter.addEventListener('keyup', filterItems);

//function that will add an list item//
function addItem(e) {
    e.preventDefault();
    var newLi = document.createElement('li');
    
    //getting input value//
    newItem = document.getElementById('item').value;
    var btn = document.getElementsByClassName('btn btn-danger btn-sm float-right delete').value;
    //defining creations classes //
    newLi.className = 'list-group-item';
    btnCreate.className = 'btn btn-danger btn-sm float-right delete';
    btnCreate.appendChild(document.createTextNode("X"));

    //adding the input text to the li//
    newLi.appendChild(document.createTextNode(newItem));
    newLi.appendChild(btnCreate);

    //adding the new li to the items ul//

    itemList.appendChild(newLi);
    
}

//function that will delete events//

function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('are you sure you want to delete this item ?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter function//

function filterItems(e) {
    var searchText = e.target.value.toLowerCase();
    //li manipulation//
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(searchText) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

