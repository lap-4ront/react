import React from 'react';
import { Panel, Em, P, Close, CloseWrapper, BG } from './styles';
import { Book } from '../Book';

const DetailPanel = ({ book, closePanel }) => {
  return (
    <>
      <BG onClick={closePanel} />
      <Panel>
        <CloseWrapper onClick={closePanel}>
          <Close />
        </CloseWrapper>
        <Book book={book} isLarge={true} />
        <P>{book.description}</P>
        <P>
          <Em>Published in {book.published}</Em>
        </P>
      </Panel>

    </>
  );
};

export { DetailPanel };
