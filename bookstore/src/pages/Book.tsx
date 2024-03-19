import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { Title } from '../components/Title';
import { fetchCards } from '../redux/books-slice';
import { BookCard } from '../components/card/BookCard';
import { BookCardMain } from '../components/card/BookCardMain';
import { Tabs } from '../components/Tabs';
import { Subscribe } from '../components/Subscribe';
import { fetchNewCards } from '../redux/books-slice';
import { BookSearchProps, BookProps } from '../services/book';
// import { Book, BookNew } from '../types/types'

export function Book() {
  const isLoading = useAppSelector(state => state.books.isLoading);
  const error = useAppSelector(state => state.books.error);
  const activeTab = useAppSelector(state => state.tabs.value);
  const cards = useAppSelector(state => state.books.newBooks);

  const { isbn13 } = useParams<{ isbn13: string }>();

  const dispatch = useAppDispatch();
  const postById = useAppSelector(state => state.books.book);

  useEffect(() => {
    if (isbn13) {
      dispatch(fetchCards(isbn13));
    }
  }, [isbn13]);

  function renderTabs() {
    switch (activeTab) {
      case 'tab1':
        return (
          <div className="w-75 mb-4" style={{ minHeight: '250px' }}>
            <p className="fs-4 fw-semibold">{postById.desc}</p>
          </div>
        );
      case 'tab2':
        return (
          <div className="w-75" style={{ minHeight: '250px' }}>
            <p className="fs-4 fw-semibold">{postById.authors}</p>
          </div>
        );
      case 'tab3':
        return (
          <div className="w-75" style={{ minHeight: '250px' }}>
            <p className="fs-4 fw-semibold">{postById.publisher}</p>
          </div>
        );
      default:
        return null;
    }
  }

  function renderContent() {
    if (error) {
      return <h1 className="text-danger">Error: {error}</h1>;
    }
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    return (
      <>
        <Title title={postById.title} />
        <BookCard {...postById} />
        <Tabs />
        {renderTabs()}
        <Subscribe />
      </>
    );
  }

  return (
    <>
      {renderContent()}
      {/* <div className="w-100">
          <div className="d-flex justify-content-between">
            <Title title="Similar books"/>
            <div className="d-flex my-auto ">
              <button className="btn btn-primary me-2">Prev</button>
              <button className="btn btn-primary">Next</button>
            </div>
          </div>
              <div className="row row-cols-1 row-cols-md-3 g-4 flex-nowrap" style={{position: 'relative', overflow: 'hidden'}}>
                 {cards.map((card, index) => <Card key={index} {...card} />)}
              </div>
        </div> */}
    </>
  );
}
