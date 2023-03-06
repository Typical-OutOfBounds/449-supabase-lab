import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://xpuddzfchuxnerrbiccw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwdWRkemZjaHV4bmVycmJpY2N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3MDY3ODAsImV4cCI6MTk5MzI4Mjc4MH0.EfiLEyCCYQaxwqVi3ac2wTSxksiL5cT1F04sJz-jbbI';
const supabase = createClient(supabaseUrl, supabaseKey)

let { data: books, error } = await supabase
  .from('books')
  .select('*')


for (let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML += `
  <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td>${book.description}</td>
  </tr>`;
}