import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hgviinnynoibggdyeynm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhndmlpbm55bm9pYmdnZHlleW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MzA5MTMsImV4cCI6MjAyNjEwNjkxM30.CORJIYv0RdnkAQqtFj1hLzSyZ40BegrNUxvat9QJXHs'
const supabase = createClient(supabaseUrl, supabaseKey)

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
