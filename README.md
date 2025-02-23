### **README.md**


# Library Management System

![Library Header](/images/library-picture.jpeg)

A simple and intuitive **Library Management System** built using **HTML**, **CSS**, and **JavaScript**. This system allows users to search for books, borrow and return books, and manage inventory. It also includes features for librarians to add, update, or remove books from the system.

---

## Features

### User Features
- **Search Books**: Search for books by title, author, or category.
- **Borrow Books**: Borrow books by entering the book ID.
- **Return Books**: Return books by entering the book ID.
- **Due Dates**: Display due dates for borrowed books.

### Admin Features
- **Add Books**: Add new books to the inventory.
- **Update Books**: Update book details (title, author, category, copies).
- **Remove Books**: Remove books from the inventory.

### Inventory Management
- **Track Copies**: Track the number of available copies in real-time.
- **Low Stock Notification**: Notify when book stock is running low.

### Genres Section
- Explore different genres like Fiction, Non-Fiction, Mystery, Science Fiction, Romance, and Fantasy.

### Suggestion Box
- Users can submit suggestions for improving the library system.

---

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Playfair Display, Roboto)

---

## Screenshots

### Home Page
![Home Page](/screenshots/homepage.PNG)

### Search Results
![Search Results](/screenshots/SearchResults.PNG)

### Admin Section
![Admin Section](/screenshots/AdminFeatures.PNG)

### Genres Section
![Genres Section](/screenshots/Genres.PNG)

---

## How to Use

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).

### Steps to Run the Project
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/TheBook.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd TheBook
   ```

3. **Open the Project**:
   - Open the `index.html` file in your browser.

---

## Project Structure

```
TheBook/
├── index.html            # Main HTML file
├── styles.css            # CSS file for styling
├── script.js             # JavaScript file for functionality
├── books.json            # JSON file containing book data
├── images/               # Header background image
├── library-picture.jpg   # Footer background image
├── screenshots/          # Folder containing screenshots
│   ├── homepage.png
│   ├── searchresults.png
│   ├── adminfeatures.png
│   └── genressection.png
└── README.md             # Project documentation
```

---

## JSON Data (`books.json`)

The `books.json` file contains the list of books with the following structure:

```json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "category": "Fiction",
    "copies": 5
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "category": "Dystopian",
    "copies": 3
  },
  {
    "id": 3,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "category": "Fiction",
    "copies": 7
  }
  // More books...
]
```

---

## Customization

### Add More Books
1. Open the `books.json` file.
2. Add a new book object with the following fields:
   - `id`: Unique identifier for the book.
   - `title`: Title of the book.
   - `author`: Author of the book.
   - `category`: Genre or category of the book.
   - `copies`: Number of available copies.

Example:
```json
{
  "id": 21,
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "category": "Fiction",
  "copies": 10
}
```

### Change Colors
- Open the `styles.css` file.
- Update the color variables in the `:root` selector or directly modify the color values for specific elements.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Font Awesome** for the icons.
- **Google Fonts** for the beautiful typography.
- **Unsplash** for the background images.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Email**: anubama2006@gmail.com
- **GitHub**: https://github.com/Acesohappy

---

Happy Reading! 📚
```

---

### **Key Sections in the README**
1. **Project Overview**: A brief description of the project.
2. **Features**: Highlights the key functionalities.
3. **Technologies Used**: Lists the tools and technologies.
4. **Screenshots**: Visual representation of the project.
5. **How to Use**: Instructions for running the project.
6. **Project Structure**: Explains the folder and file structure.
7. **JSON Data**: Describes the structure of the `books.json` file.
8. **Customization**: Guides on how to add more books or change colors.
9. **Contributing**: Instructions for contributing to the project.
10. **License**: Information about the project's license.
11. **Acknowledgments**: Credits for resources used.
12. **Contact**: Contact information for questions or feedback.

---
