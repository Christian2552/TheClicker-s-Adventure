const UserName = document.getElementById("GameName"); 
const GenderSelect = document.getElementById("GenderSelect");
const Age = document.getElementById("Age");    
const Password = document.getElementById("Password");   
const ConfirmPassword = document.getElementById("ConfirmPassword");   
  
const RegisterButton = document.getElementById("RegisterButton");   

RegisterButton.addEventListener("click", function(){

    // here we create an object with the user data
    const userObject = {
        UserName: UserName.value,
        Gender: GenderSelect.value,
        Password: Password.value,
    };

    // here we make a JSON string from the userObject and later connect to the backend to send the data
    const jsonString = JSON.stringify(userObject);

    fetch("http://localhost:5284/api/auth/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: jsonString 
});
});