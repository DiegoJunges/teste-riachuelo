import { useCallback, useEffect, useRef, useState } from 'react';
import queryString from 'querystring';
import { FiArrowRight } from 'react-icons/fi';
import Card from '../../components/Card';
import { useTheme } from '../../context/theme';
import api from '../../services/api';
import { Content, SearchButton, Search, CardsGroup, NextPage } from './styles';
import BookIcon from '../../assets/books.png';

export type BooksProps = {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    publishedDate: string;
    imageLinks: {
      thumbnail: string;
    };
  };
  favorite: boolean;
};

const Books = () => {
  const [page, setPage] = useState(0);
  const [books, setBooks] = useState<BooksProps[]>([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { handleToggleTheme } = useTheme();
  const [favorites, setFavorites] = useState<BooksProps[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const queryParams = {
          q: search,
          orderBy: 'relevance',
          startIndex: page,
        };
        setIsLoading(true);
        const { data } = await api.get(
          `volumes?${queryString.stringify(queryParams)}`,
        );
        const requestBooks = data as { items: BooksProps[] };
        setIsLoading(false);
        setBooks(
          requestBooks.items.map(item => ({ ...item, favorite: false })),
        );
      } catch (err) {
        setIsLoading(false);
      }
    })();
  }, [page, search]);

  useEffect(() => {
    localStorage.setItem('@searchbook:favorite', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = useCallback(
    (id: string) => {
      const updatedBooks = books.map(item =>
        item.id === id ? { ...item, favorite: !item.favorite } : item,
      );
      setBooks(updatedBooks);
      setFavorites(updatedBooks.filter(item => item.favorite === true));
    },
    [books],
  );

  const handleChangePage = () => {
    setPage(prevState => prevState + 10);
  };

  return (
    <Content>
      <img
        alt="books"
        src={BookIcon}
        width={200}
        style={{ marginBottom: 24 }}
      />
      <main>
        <Search
          ref={searchRef}
          placeholder="Digite aqui para procurar por livros"
        />
        <SearchButton
          onClick={() => {
            setSearch(searchRef.current?.value || '');
          }}
        >
          Pesquisar
        </SearchButton>
        <button onClick={handleToggleTheme} type="button">
          brendogamer
        </button>
      </main>
      <CardsGroup>
        {!isLoading ? (
          books.map(({ id, volumeInfo }) => (
            <Card
              handleFavorite={handleFavorite}
              key={id}
              id={id}
              title={volumeInfo.title}
              description={volumeInfo.description}
              date={volumeInfo.publishedDate}
              image={volumeInfo.imageLinks?.thumbnail}
            />
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </CardsGroup>
      {books.length ? (
        <NextPage type="button" onClick={handleChangePage}>
          Próxima página
          <FiArrowRight />
        </NextPage>
      ) : null}
    </Content>
  );
};

export default Books;
