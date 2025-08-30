# 📚 EpicReadsHub: Your Reading Companion

EpicReadsHub is a web application designed to enhance your reading experience by providing personalized book recommendations and a convenient way to manage your reading lists. Whether you're looking for new books to explore or need assistance in organizing your reading journey, EpicReadsHub has got you covered.

## Features

- 🎯 **Collaborative Filtering:** EpicReadsHub utilizes a [collaborative filtering model] to recommend books based on user preferences and interactions. Discover new titles based on the collective wisdom of fellow readers.

- 📖 **Content-Based Recommendations:** EpicReadsHub also offers [content based recommendations]. Simply mention a book you enjoyed, and our chatbot will provide you with similar book suggestions. Additionally, you can provide your preferred genre, and the chatbot will offer tailored recommendations.

- 🌟 **Popularity-Based Approach:** When you're just starting out or haven't rated any books yet, EpicReadsHub employs a popularity-based approach inspired by IMDb's top-rated movie formula. This default ordering of books ensures you have a starting point for exploration.

- 📚 **Read List:** Keep track of the books you plan to read using the Read List feature. Add books to your list, view them at any time, and mark them as read once you've completed them.

- ⭐ **Rated Books List:** Rate the books you've read and keep a record of your ratings. The Rated Books List allows you to view and manage your rated books, helping you remember and recommend your favorite reads.

- 🌈 **User-Friendly Interface:** EpicReadsHub features a user-friendly interface with intuitive navigation and visually appealing design elements. Enjoy a smooth and engaging experience as you explore books and manage your reading journey.

## Technologies Used

- 🚀 Backend: Flask (Python)
- 💾 Database: MongoDB
- ⚛️ Frontend: ReactJS, Material UI
- 🌐 API Integration: Openlibrary API
- 🤖 Chatbot: Dialogflow
- 🔗 Webhook Integration: Flask (for chatbot and backend communication)
- ☁️ Deployment: Ngrok

## Installation

To run EpicReadsHub locally, follow these steps:

1. Clone the repository: `git clone https://github.com/krgta/epicreadshub.git`

2. You need to Install the `genre_matrix.pkl` file for this project here: [link](https://www.mediafire.com/file/6dmz4lb6denms1s/genre_matrix.pkl/file)\
   After installation, put this file in `/src/api/api/` directory.

3. Install the required dependencies for the backend:

   `pip install -r requirements.txt`

4. Set up a MongoDB database and update the connection details in the backend configuration file.

5. Start the backend server:

   `python server.py`

6. Install the required dependencies for the frontend(cd to your project directory) then:

   `npm install`

7. Start the frontend development server:

   `npm start`

8. Access EpicReadsHub in your web browser at `http://localhost:3000`.

## Usage

1. Create an account or log in to your existing account on EpicReadsHub `(Optional)`.
2. Explore the Read List section to add books you plan to read. You can mark them as read once you finish them.
3. Rate books you've read and manage your rated books in the Rated Books Section.
4. Use the chatbot to get recommendations based on books you mention or your preferred genres.
5. Discover personalized recommendations in the Recommended List based on collaborative filtering, content-based approaches, and the popularity-based approach.

## Contributing

Contributions to EpicReadsHub are welcome! If you encounter any issues or have ideas for improvements, feel free to submit a pull request or open an issue in the repository.