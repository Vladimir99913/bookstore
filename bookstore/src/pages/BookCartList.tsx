import { useAppSelector } from '../hooks/hooks';
import { BookCardCart } from '../components/card/BookCardCart';

export function BookCartList() {
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
    // sumTotal = Math.round(sumTotal * 100) / 100
    return sumTotal.toFixed(2);
  }
  return (
    <>
      {booksCart.map((post, index) => (
        <BookCardCart key={index} {...post} />
      ))}
      <div>
        <div className="d-flex justify-content-between w-25">
          <div>
            <p>Sum total</p>
            <p>VAT</p>
            <h1>Total:</h1>
          </div>
          <div>
            <p>{sumBooks()}</p>
            <p>{sumBooksVat()}</p>
            <h1>{sumBooksTotal()}</h1>
          </div>
        </div>
        <button className="btn btn-primary w-100">Check</button>
      </div>
    </>
  );
}
