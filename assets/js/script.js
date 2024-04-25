const issueContainer = document.getElementById('issues');
const fetchButton = document.getElementById('fetch-button');
const apiKeyEpl = "1758fda19dmshcb7e9f9e8e12fecp187acejsn16d775cbbb61";

function getApi() {
  const params = {
    i: '90a218c1eac4c020',
    l: 'en_US'
  };

  // Serialize params object into a query string
  const queryString = Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&');

  // Append query string to the request URL
  const requestUrl = 'https://soccer-football-info.p.rapidapi.com/matches/view/basic/?' + queryString;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKeyEpl,
      'X-RapidAPI-Host': 'soccer-football-info.p.rapidapi.com'
    }
  };

  fetch(requestUrl, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // Clear previous content
      issueContainer.innerHTML = '';

      console.log(data.result[0].referee.name);

      const result = document.createElement('p');
      result.textContent = data.result[0].referee.name;
      issueContainer.appendChild(result);

      // Check if data is available
//       if (data && data.length > 0) {
//         const refereeName = document.createElement('h3');
//         refereeName.textContent = data.length; // Accessing the referee name from the first result
//         issueContainer.appendChild(refereeName);
//         console.log(data.result);
//       } else {
//         console.log('No data available');
//       }
//     })
//     .catch(function (error) {
//       console.error('Error fetching data:', error);
    });
 }

fetchButton.addEventListener('click', getApi);




