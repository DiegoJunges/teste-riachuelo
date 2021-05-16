import Card from '../../components/Card';
import { useTheme } from '../../context/theme';
import { Content, SearchButton, Search, CardsGroup } from './styles';

const Books = () => {
  const { handleToggleTheme } = useTheme();

  return (
    <Content>
      <main>
        <Search placeholder="Digite aqui" />
        <SearchButton>Pesquisar</SearchButton>
      </main>
      <CardsGroup>
        <Card />
      </CardsGroup>
    </Content>
  );
};

export default Books;
