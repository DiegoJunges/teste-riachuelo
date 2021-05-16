import { useEffect, useState } from 'react';
import queryString from 'querystring';
import Card from '../../components/Card';
import { useTheme } from '../../context/theme';
import api from '../../services/api';
import { Content, SearchButton, Search, CardsGroup } from './styles';

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
  const { handleToggleTheme } = useTheme();

  useEffect(() => {
    (async () => {
      const queryParams = {
        q: 'a',
        orderBy: 'relevance',
        startIndex: page,
      };

      const { data } = await api.get(
        `volumes?${queryString.stringify(queryParams)}`,
      );
      setBooks(data.items);
    })();
  }, [page]);

  return (
    <Content>
      <button
        type="button"
        onClick={() => setPage(prevState => prevState + 10)}
      >
        teste
      </button>
      <main>
        <Search placeholder="Digite aqui" />
        <SearchButton>Pesquisar</SearchButton>
      </main>
      <CardsGroup>
        {books.map(({ id, volumeInfo }) => (
          <Card
            key={id}
            title={volumeInfo.title}
            description={volumeInfo.description}
            date={volumeInfo.publishedDate}
            image={volumeInfo.imageLinks?.thumbnail}
          />
        ))}
      </CardsGroup>
    </Content>
  );
};

export default Books;
