const nameField = document.getElementById("name");
const ageField = document.getElementById("age");
const btn = document.getElementById("sub-btn");
const messagePara = document.getElementById("message-para");

btn.addEventListener("click", (e) => {
    messagePara.style.display = "block";
    e.preventDefault();
    const nameValue = nameField.value;
    const ageValue = ageField.value;
    checkEligibility(nameValue, ageValue)
    nameField.value = '';
    ageField.value = '';
})

function checkEligibility (name, age){
    if(name.length === 0 || age.length === 0){
        messagePara.innerHTML = "Please fill all fields...!";
        return
    }

    // Function to capitalize the first letter of a name
    function capitalizeFirstLetter (name){
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    // Capitalize the name
    const capitalizedName = capitalizeFirstLetter(name);

    if(age >= 18){
        messagePara.innerHTML = `You are eligible ${capitalizedName} for driving.`
    }
    else{
        messagePara.innerHTML = `Your are not eligible ${capitalizedName} for driving, because you are only ${age} years old.`
    }
}