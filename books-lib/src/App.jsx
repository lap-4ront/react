import React, { useState, useEffect } from 'react';

const App = () => {
  const [books, setBooks] = useState([]);

  console.log('App was rendered');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books');
        console.log(`our fetch response`, response);

        const books = await response.json();
        console.log(`jsonified response`, books);
        setBooks(books);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(`the books array in our state`, books);

  return (
    <div>hello</div>
  );
};

export default App;
