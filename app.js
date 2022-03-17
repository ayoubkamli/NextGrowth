let value = false;

let users = [
  {
    id: "123456789",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: "2584",
  },
  {
    id: "987654321",
    createdDate: "2021-07-25T00:00:00.000Z",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: "1594",
  },
  {
    id: "852963741",
    createdDate: "2021-09-15T00:00:00.000Z",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: "3576",
  },
];

const addTable = () => {
  var table = document.getElementById('users').getElementsByTagName('tbody')[0];
  let validationClass;
  for (let index = 0; index < users.length; index++){
      if (users[index].status === 'Validé') {
        validationClass = "valide"
      } else if (users[index].status === 'Rejeté'){
        validationClass = "rejete"
      } else {
        validationClass = "en-validation"
      }
      table.insertRow().innerHTML = "<td>" + users[index].id + "</td>" + 
      "<td>" + users[index].createdDate.split('T')[0] + "</td>" + 
      "<td><div class='state " + validationClass + "'>" + users[index].status + "</div></td>" +
      "<td>" + users[index].lastName + "</td>" + 
      "<td>" + users[index].firstName + "</td>" + 
      "<td>" + users[index].userName + "</td>" + 
      "<td>" + users[index].registrationNumber + "</td>" + 
      "<td><i style='font-size: 24px' class='fa'>&#xf014;</i></td>";
  }
 
  console.log(table);
};
addTable();

const addRow = ( user) => {

  let {id, createdDate, status, name, firstName, username, registrationNumber} = user
  users.push(user);
 


  console.log("name value : " + value);
    var table = document.getElementById('users').getElementsByTagName('tbody')[0];
  let validationClass;
  if (status === 'Validé') {
    validationClass = "valide"
  } else if (status === 'Rejeté'){
    validationClass = "rejete"
  } else {
    validationClass = "en-validation"
  }

  table.insertRow().innerHTML = "<td>" + id + "</td>" + 
      "<td>" + createdDate.split('T')[0] + "</td>" + 
      "<td><div class='state " + validationClass + "'>" + status + "</div></td>" +
      "<td>" + name + "</td>" + 
      "<td>" + firstName + "</td>" + 
      "<td>" + username + "</td>" + 
      "<td>" + registrationNumber + "</td>" + 
      "<td><i style='font-size: 24px' class='fa'>&#xf014;</i></td>";

      console.table(users);

}

const showModal = () => {
  if (value) {
    document.getElementById("modal").classList.add("modal");
    document.getElementById("backdrop").classList.add("modal");
  } else {
    document.getElementById("modal").classList.remove("modal");
    document.getElementById("backdrop").classList.remove("modal");
  }
  value = !value;
};

const form = document.querySelector('#user-info');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = Math.floor(Math.random() * 1000000000);
  let name = e.target.name.value;
  let firstName = e.target.firstname.value;
  let state = e.target.state.value;
  let username = e.target.username.value;
  let registrationNumber = e.target.registrationnumber.value;
  let createdDate = e.target.creationdate.value;

  let user =  {
    id: id,
    createdDate: createdDate,
    status: state,
    firstName: firstName,
    lastName: name,
    userName: username,
    registrationNumber: registrationNumber,
  }

  addRow(user);

  console.log({name}, {firstName}, {state}, {username}, {username}, {registrationNumber}, {createdDate})
  
})