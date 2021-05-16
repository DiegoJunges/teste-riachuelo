import { useEffect, useRef, useState } from 'react';
import queryString from 'querystring';
import { FiArrowRight } from 'react-icons/fi';
import Card from '../../components/Card';
import { useTheme } from '../../context/theme';
import api from '../../services/api';
import { Content, SearchButton, Search, CardsGroup, NextPage } from './styles';

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
};

const Books = () => {
  const [page, setPage] = useState(0);
  const [books, setBooks] = useState<BooksProps[]>([]);
  const [search, setSearch] = useState('brasil');
  const searchRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { handleToggleTheme } = useTheme();

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
        setIsLoading(false);
        setBooks(data.items);
      } catch (err) {
        setIsLoading(false);
      }
    })();
  }, [page, search]);

  const handleChangePage = () => {
    setPage(prevState => prevState + 10);
  };

  return (
    <Content>
      <main>
        <Search ref={searchRef} placeholder="Digite aqui" />
        <SearchButton
          onClick={() => {
            setSearch(searchRef.current?.value || '');
          }}
        >
          Pesquisar
        </SearchButton>
      </main>
      <CardsGroup>
        {!isLoading ? (
          books.map(({ id, volumeInfo }) => (
            <Card
              key={id}
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
      <NextPage type="button" onClick={handleChangePage}>
        Próxima página
        <FiArrowRight />
      </NextPage>
    </Content>
  );
};

export default Books;
