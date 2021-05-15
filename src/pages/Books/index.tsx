import { useTheme } from '../../context/theme';
import { Content, SearchButton, Search } from './styles';

const Books = () => {
  const { handleToggleTheme } = useTheme();

  return (
    <Content>
      <main>
        <Search placeholder="Digite aqui" />
        <SearchButton>Pesquisar</SearchButton>
      </main>
    </Content>
  );
};

export default Books;
