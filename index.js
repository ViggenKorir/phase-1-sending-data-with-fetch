function submitData(userName, userEmail) {
    const formData = {
      name: userName,
      email: userEmail
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        // Append the new ID to the DOM
        document.body.innerHTML += `<p>New user ID: ${data.id}</p>`;
        return data; // Return the parsed data to the next `then`
      })
      .catch(error => {
        // Handle errors
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
  
  // Example usage:
  submitData("John Doe", "john.doe@example.com");
  