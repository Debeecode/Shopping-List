const lists = document.querySelector('ul'),
      inputField = document.querySelector('input'),
      button = document.querySelector('button');

    button.addEventListener('click', function() {
            
        let inputValue = inputField.value;
        inputField.value = '';


        let listItems = document.createElement('li'),
            span = document.createElement('span'),
            deleteButton = document.createElement('button');

            listItems.appendChild(span);
            listItems.appendChild(deleteButton);
            
            span.textContent = inputValue;
            deleteButton.textContent = 'Delete'

            lists.appendChild(listItems);

            deleteButton.addEventListener('click', function() {
                lists.removeChild(listItems);
            });

        inputField.focus();
    })