import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hgviinnynoibggdyeynm.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
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
