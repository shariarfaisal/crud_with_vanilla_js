import axios from 'axios'

const URL = 'http://localhost:3000/contacts';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

window.onload = () => {
  // get data from server and fill the table when page loaded...
  axios.get(URL)
        .then(res => {

          res.data.forEach(contact => {
            createtdElement(contact,tbody);
          })
        })

        let add = document.querySelector('#add');
        add.addEventListener('click',() => {
          addContact();
        })
}




// Add a new contact .....

    const addContact = () => {
      let nameField = document.querySelector('#name');
      let emailField = document.querySelector('#email');
      let depField = document.querySelector('#department');

      const contact = {
        name: nameField.value,
        email: emailField.value,
        department: depField.value
      }

      axios.post(URL,contact)
            .then(res => {
              createtdElement(res.data,tbody);
            })
            .catch()

            nameField.value = '';
            emailField.value = '';
            depField.value = '';

    }





    const createtdElement = (contact,pElement) => {
      const tr = document.createElement('tr');

      let tdName = document.createElement('td');
      tdName.innerHTML = contact.name;
      tr.appendChild(tdName);

      let tdEmail = document.createElement('td');
      tdEmail.innerHTML = contact.email ? contact.email : "n/a";
      tr.appendChild(tdEmail);

      let tdDep = document.createElement('td');
      tdDep.innerHTML = contact.department ? contact.department : 'n/a';
      tr.appendChild(tdDep);

      let tdActions = document.createElement('td');
      let tdEdit = document.createElement('button');
      tdEdit.className = 'btn btn-sm btn-warning m-1';
      tdEdit.innerHTML = 'Edit';
      tdEdit.addEventListener('click',() => {

        $('.modal').modal('toggle');

        let updateName = document.querySelector('#updateName');
        let updateEmail = document.querySelector('#updateEmail');
        let updateDep = document.querySelector('#updateDep');

        updateName.value = contact.name;
        updateEmail.value = contact.email ? contact.email: '';
        updateDep.value = contact.department ? contact.department : '';




        let updateBtn = document.querySelector('#update');
        updateBtn.addEventListener('click',() => {
          axios.put(`${URL}/${contact.id}`,{
            name: updateName.value,
            email: updateEmail.value ? updateEmail.value : 'n/a',
            department: updateDep.value? updateDep.value : 'n/a'
          })
                            .then(res => {
                              tdName.innerHTML = res.data.name;
                              tdEmail.innerHTML = res.data.email;
                              tdDep.innerHTML = res.data.department;

                              $('.modal').modal('hide');
                            })
                            .catch(err => console.log(err))
        })

      })
      tdActions.appendChild(tdEdit);

      let tdDelete = document.createElement('button');
      tdDelete.className = "btn btn-sm btn-danger m-1";
      tdDelete.innerHTML = "Delete";
      tdDelete.addEventListener('click',() => {
        // Delete Contact ....
        axios.delete(`${URL}/${contact.id}`)
                    .then(res => pElement.removeChild(tr))
                    .catch((err) => console.log(err))
      })
      tdActions.appendChild(tdDelete);

      tr.appendChild(tdActions);

      pElement.appendChild(tr);
    }
