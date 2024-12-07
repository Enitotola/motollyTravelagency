 // Function to execute search  
 function executeSearch() {  
    const query = document.getElementById('search').value;  
    // Action to perform search can be added here  
    alert('Searching for: ' + query);  
}  

// Function to reset the search input  
function resetSearch() {  
    document.getElementById('search').value = '';  
}

// Handle form submission  
document.getElementById('contactForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevent default form submission  
    const name = document.getElementById('name').value;  
    const email = document.getElementById('email').value;  
    const message = document.getElementById('message').value;  

    // Here, you could send the data to the server using Fetch API or XMLHttpRequest  
    alert('Message sent!\n' +   
          'Name: ' + name + '\n' +   
          'Email: ' + email + '\n' +   
          'Message: ' + message);  
    
    // Reset the form  
    this.reset();  
});  

// Function to show recommendation results  
function showRecommendations(recommendations) {  
    const resultsContainer = document.getElementById('resultsContainer');  
    resultsContainer.innerHTML = ''; // Clear existing results  

    if (recommendations.length === 0) {  
        resultsContainer.innerHTML = '<div class="result">No recommendations available.</div>';  
        return;  
    }  

    recommendations.forEach(rec => {  
        const resultDiv = document.createElement('div');  
        resultDiv.classList.add('result');  
        resultDiv.textContent = rec;  
        resultsContainer.appendChild(resultDiv);  
    });  
}  

// Example function call to show some recommendations  
// (In a real application, this data would come from your server)  
const exampleRecommendations = [  
    'Recommendation 1: Improve your time management skills.',  
    'Recommendation 2: Take regular breaks during work.',  
    'Recommendation 3: Attend workshops for personal development.'  
];  
showRecommendations(exampleRecommendations);  


const beachKeywords = ['beach', 'beaches'];  
const templeKeywords = ['temple', 'temples'];  
const countryKeywords = ['country', 'countries'];  

// Function to execute search  
function executeSearch() {  
    const query = document.getElementById('search').value.toLowerCase(); // Convert to lowercase  
    const resultsContainer = document.getElementById('resultsContainer');  
    resultsContainer.innerHTML = ''; // Clear previous results  
    
    let results = []; // Array to hold matching results  

    // Check if the query matches any of the keywords  
    if (beachKeywords.includes(query)) {  
        results.push('You might enjoy the beautiful beaches in our area.');  
    }  
    if (templeKeywords.includes(query)) {  
        results.push('Explore the ancient temples and cultural sites nearby.');  
    }  
    if (countryKeywords.includes(query)) {  
        results.push('Discover interesting facts and travel tips for various countries.');  
    }  

    // If no results, inform the user  
    if (results.length === 0) {  
        resultsContainer.innerHTML = '<p>No results found for "' + document.getElementById('search').value + '".</p>';  
    } else {  
        results.forEach(result => {  
            const resultDiv = document.createElement('p');  
            resultDiv.textContent = result;  
            resultsContainer.appendChild(resultDiv);  
        });  
    }  

    // Display the results container  
    resultsContainer.style.display = 'block';  
}  

// Function to reset the search input and results display  
function resetSearch() {  
    document.getElementById('search').value = '';  
    document.getElementById('resultsContainer').innerHTML = '';  
    document.getElementById('resultsContainer').style.display = 'none';  
}  