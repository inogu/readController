import DateIcon from '../icons/date-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import styles from './book-item.module.css';
import Button from '../ui/button/button';
import { IBook } from '../../types/Books';

function BookItem(props) {
  const book: IBook = props;

  const humanReadableDate = new Date(book.dataLeitura).toLocaleDateString(
    'pt-br',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    },
  );

  const exploreLink = `/books/${book._id}`;

  return (
    <li className={styles.item}>
      <img src={'/' + book.foto} alt={book.nome} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{book.nome}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore book</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default BookItem;
