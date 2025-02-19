# Movie Search App

## 📌 Introduction
The **Movie Search App** is a React-based web application that allows users to search for movies using the **OMDb API**. Users can enter a movie title in the search bar to retrieve a list of matching movies along with their posters and IMDb ratings. Clicking on a movie provides detailed information such as plot, cast, ratings, awards, country, and runtime.

## 🔗 Links
- **GitHub Repository:** [Movie Search App](https://github.com/NehaChatandar/Movie-app.git)
- **Live Demo:** [Movie Search App](https://nehachatandar.github.io/Movie-app/)

## 🛠 Technologies Used
- **Frontend:** React.js, React Router, Bootstrap, CSS
- **Backend API:** OMDb API
- **Data Fetching:** Axios (for API calls)

## ✨ Features
✔ **Movie Search** – Users can search for movies using keywords.  
✔ **Movie Listing** – Displays a list of movies with posters and IMDb ratings.  
✔ **Movie Details Page** – Clicking on a movie provides detailed information.  
✔ **Navigation Bar** – Contains the app title and a back button for navigation.  
✔ **Responsive Design** – The UI adapts to different screen sizes.  

## 🚀 Application Workflow
### **Home Page (Movie Search & Listing)**
1. The Home component loads the default search results for "movie" on page load.
2. Users can enter a search term in the input field and click the **Search** button.
3. The app fetches matching movies from the OMDb API using Axios and updates the state.
4. Each movie card displays:
   - Poster
   - Title
   - IMDb Rating (Fetched separately using another API request)
5. Clicking a movie redirects to its **Single Movie Details Page**.

### **Movie Details Page**
1. The **Single** component extracts the movie ID from the URL.
2. It fetches full movie details from the OMDb API using Axios.
3. Displays details such as **plot, actors, ratings, awards, country, language, and runtime**.
4. If data is not available, a **"No Movie Found"** message is shown.

### **Navigation**
- The **Navbar** component contains a **Back Button**.
- Users can return to the home page anytime.

## 🌐 API Requests Used
- **Search Movies:**
  ```sh
  GET https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=SEARCH_TERM

