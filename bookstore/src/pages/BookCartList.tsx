import { useAppSelector } from '../hooks/hooks';
import { BookCardCart } from '../components/card/BookCardCart';

export function BookCartList() {
  const isLoading = useAppSelector(state => state.books.isLoading);
  const error = useAppSelector(state => state.books.error);
  const booksCart = useAppSelector(state => state.books.bookCart);

  function sumBooks() {
    let sum: number = 0;
    booksCart.forEach(item => {
      sum += Number(item.price.slice(1)) * item.count;
    });
    sum = Math.round(sum * 100) / 100;
    return sum;
  }

  function sumBooksVat() {
    let sum: number = sumBooks();
    sum = sum * 0.1;
    sum = Math.round(sum * 100) / 100;
    return sum;
  }

  function sumBooksTotal() {
    let sumTotal: number = sumBooks() + sumBooksVat();
    return sumTotal.toFixed(2);
  }

  function renderContent() {
    if (error) {
      return <h1 className="text-danger">Error: {error}</h1>;
    }
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    if (booksCart.length == 0) {
      return <h1>Your cart is empty</h1>;
    }
    return (
      <>
        {booksCart.map((post, index) => (
          <BookCardCart key={index} {...post} />
        ))}
        <div className="w-25 align-self-end">
          <div className="d-flex justify-content-between">
            <div>
              <p>Sum total:</p>
              <p>VAT:</p>
              <h1>Total:</h1>
            </div>
            <div>
              <p className="text-end">{sumBooks()}</p>
              <p className="text-end">{sumBooksVat()}</p>
              <h1 className="text-end">{sumBooksTotal()}</h1>
            </div>
          </div>
          <button className="btn btn-primary w-100">Check out</button>
        </div>
      </>
    );
  }

  return <>{renderContent()}</>;
}
