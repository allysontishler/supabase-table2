require('dotenv').config();

// Load environment variables from .env file (for local development)
require('dotenv').config();

// Import Supabase client
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with environment variables
const supabaseUrl = 'https://hgviinnynoibggdyeynm.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY; // Use the environment variable
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to fetch and display books data
async function getBooks() {
  try {
    // Fetch books data from Supabase
    let { data: books, error } = await supabase
      .from('books')
      .select('*');

    // Handle errors, if any
    if (error) {
      throw error;
    }

    // Get the container where books will be inserted
    const bookList = document.getElementById('books');

    // Loop through each book and create a table row
    books.forEach(book => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
      `;
      bookList.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching books:', error.message);
  }
}

// Call the function to fetch and display books data
getBooks();


