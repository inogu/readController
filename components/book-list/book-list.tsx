import BookItem from '../book-item/book-item';
import styles from './book-list.module.css';

function BookList(props) {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((book) => (
        <BookItem
          key={book.id}
          id={book._id}
          nome={book.nome}
          dataLeitura={book.dataLeitura}
        />
      ))}
    </ul>
  );
}

export default BookList;
