import { useEffect } from 'react';
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
  const activeTab = useAppSelector(state => state.tabs.value);
  const cards = useAppSelector(state => state.books.newBooks);

  useEffect(() => {
    dispatch(fetchNewCards());
  }, []);
  // interface Params {
  //   isbn13: string | undefined;
  // }
  // const params = useParams<{isbn13:string}>()
  // console.log(params)
  const { isbn13 } = useParams<{ isbn13: string }>();
  console.log(typeof isbn13);
  const dispatch = useAppDispatch();
  const postById = useAppSelector(state => state.books.book);

  useEffect(() => {
    if (isbn13) {
      dispatch(fetchCards(isbn13));
    }
  }, [isbn13]);

  function renderContent() {
    switch (activeTab) {
      case 'tab1':
        // if (error) {
        //   return <div className="text-danger">Error: {error}</div>
        // }
        // if (isLoading) {
        //   return <div>Loading...</div>
        // }
        return (
          <>
            <div className="row row-cols-1 row-cols-md-3 w-75 mb-4" style={{ minHeight: '250px' }}>
              {postById.desc}
            </div>
            {/* <nav>
            <ul className="pagination mt-3">
              <Pagination pageNumberCurrent={pageNumberCurrent} pagesCounter={pagesCounter} url={'/posts/page/'} />
            </ul>
          </nav> */}
          </>
        );
      case 'tab2':
        return (
          <div className="row row-cols-1 row-cols-md-3 w-75" style={{ minHeight: '250px' }}>
            {postById.authors}
          </div>
        );
      case 'tab3':
        return (
          <div className="row row-cols-1 row-cols-md-3 w-75" style={{ minHeight: '250px' }}>
            {postById.publisher}
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <>
      {' '}
      <Title title={postById.title} />
      <BookCard {...postById} />
      <Tabs />
      {renderContent()}
      <Subscribe />
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
