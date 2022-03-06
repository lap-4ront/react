import React from 'react';
import { Panel, Em, P } from './styles';
import { Book } from '../Book';

const DetailPanel = ({ book }) => {
  return (
    <Panel>
      <Book book={book} isLarge={true} />
      <P>{book.description}</P>
      <P>
        <Em>Published in {book.published}</Em>
      </P>

    </Panel>
  );
};

export { DetailPanel };
