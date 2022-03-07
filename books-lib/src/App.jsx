import React, { useState, useEffect } from 'react';
import { BooksContainer } from './components/BooksContainer';
import { Header } from './components/Header';
import { GlobalStyle } from './styles';
import { DetailPanel } from './components/DetailPanel';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://book-club-json.herokuapp.com/books');
      const books = await response.json();
      setBooks(books);
    };

    fetchData();
  }, []);

  const pickBook = (book) => {
    setSelectedBook(book);
  };

  const closePanel = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook} isPanelOpen={selectedBook !== null} />
      {
        selectedBook && <DetailPanel book={selectedBook} closePanel={closePanel} />
      }
    </>
  );
};

export default App;
