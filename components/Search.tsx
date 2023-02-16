import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Search.module.css';

const Search = () => {
  return (
    <form className={styles.searchForm}>
      <input
        type='search'
        name='search'
        autoComplete='off'
        placeholder='Search'
      />
      <button type='submit'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default Search;
