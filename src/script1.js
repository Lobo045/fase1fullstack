// keeps tack of unique ID
var projectIdCounter = 1;

// Array that sotres work
var projectItems = [];

// JavaScript to deal with the validations
document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Doesn't let fourm be submitted empty
    
    // Gets values from the fourm
    var projectName = document.getElementById("projectName").value.trim();
    var description = document.getElementById("description").value.trim();
    var personInCharge = document.getElementById("personInCharge").value.trim();
    var isDone = document.getElementById("isDone").checked;
    
    // Check any empty feilds
    if (!projectName || !description || !personInCharge) {
        alert("Please fill in all fields.");
        return;
    }

    // Check that person only has letters and spaces
    if (!/^[a-zA-Z\s]*$/.test(personInCharge)) {
        alert("Person in charge can only contain letters and spaces.");
        return;
    }
    
    // Clear the fourm
    document.getElementById("projectName").value = "";
    document.getElementById("description").value = "";
    document.getElementById("personInCharge").value = "";
    document.getElementById("isDone").checked = false;
    
    // Makes a unique project ID
    var projectId = projectIdCounter++;
    
    // Create a new project object
    var project = {
        id: projectId,
        name: projectName,
        description: description,
        personInCharge: personInCharge,
        isDone: isDone
    };

    // Add the project to the array if it's not marked as done
    if (!isDone) {
        projectItems.push(project);
    }

    // Render the item list
    renderItemList();
});

// Function to render the item list
function renderItemList() {
    var itemList = document.getElementById("itemList");
    itemList.innerHTML = ""; // Clear the existing list

    // Loop through the project items and add them to the list
    projectItems.forEach(function(project) {
        var newItem = document.createElement("li");
        newItem.textContent = "ID: " + project.id + " - Project: " + project.name + " - Description: " + project.description + " - Person in Charge: " + project.personInCharge + " - Done: " + (project.isDone ? "Yes" : "No");
        itemList.appendChild(newItem);
    });
}
