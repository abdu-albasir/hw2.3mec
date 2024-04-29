
  document.addEventListener('DOMContentLoaded', function() {
    const userIdInput = document.getElementById('userIdInput');
    const getDataButton = document.getElementById('getDataButton');
    const userInfoDiv = document.getElementById('user-info');

    getDataButton.addEventListener('click', function() {
      const userId = parseInt(userIdInput.value);
      if (userId >= 1 && userId <= 10) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            userInfoDiv.innerHTML = `
              <h2>User Info</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Username:</strong> ${data.username}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
            `;
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
      } else {
        alert('Пожалуйста, введите число от 1 до 10.');
      }
    });

    // Дополнительное задание: получить данные при нажатии Enter
    userIdInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        getDataButton.click();
      }
    });
  });

