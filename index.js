require('dotenv').config();

import { createClient } from '@supabase/supabase-js';

// Ensure that `process` object is available
const supabaseKey = process && process.env && process.env.SUPABASE_KEY;

// Check if Supabase key is available
if (!supabaseKey) {
  console.error('Supabase key is missing or invalid.');
} else {
  const supabaseUrl = 'https://hgviinnynoibggdyeynm.supabase.co';
  const supabase = createClient(supabaseUrl, supabaseKey);

  async function getBooks() {
    try {
      let { data: books, error } = await supabase
        .from('books')
        .select('*');

      if (error) {
        throw error;
      }

      const bookList = document.getElementById('books');

      books.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${book.titles}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
        `;
        bookList.appendChild(row);
      });
    } catch (error) {
      console.error('Error fetching books:', error.message);
    }
  }

  getBooks();
}
