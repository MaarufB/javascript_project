var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var inputText = document.getElementById('item');
// Form Submit event
form.addEventListener('submit', addItem);
// DeleteEvent
itemList.addEventListener('click', removeItem);
//Filter Event
filter.addEventListener('keyup', filterItems);

function addItem(event){
    event.preventDefault();

    // Get input value

    var newItem = document.getElementById('item').value;
    if (newItem != ''){
        // Create new item element
        var li = document.createElement('li');
        // Add Class
        li.className = 'list-group-item';
        //Add text node with input value
        li.appendChild(document.createTextNode(newItem));
        
        // Create del button element
        var deleteBtn = document.createElement('button');

        // Add classes to del button
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
        // Append text node
        deleteBtn.appendChild(document.createTextNode('X'));
        //Append button to li
        li.append(deleteBtn)
        // Append li to list
        itemList.appendChild(li);
        
        //TODO Clean the input textbox
        inputText.value = '';
    }
    else{
        alert("Please type an item!");
    }


}

// remove item
function removeItem(event){
    if (event.target.classList.contains('delete')){
        if (confirm("Are you sure?")){
            var li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }

}

// Filter Items
function filterItems(event){
    // Convert text to lowercase
    var text = event.target.value.toLowerCase();
    
    // Get list
    var items = itemList.getElementsByTagName('li');

    // Converting to an array
    Array.from(items).forEach(function(item)  {
        var itemName = item.firstChild.textContent;

        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
        console.log(itemName);
    });


}