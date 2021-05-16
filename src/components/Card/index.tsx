import { Content, Image, Main, Footer } from './styles';
import { FiHeart } from 'react-icons/fi'

const Card = () => {
  return (
    <Content>
      <Image src="https://avatars.githubusercontent.com/u/68939012?v=4" />
      <Main>
        <h1>Título</h1>
        <p>
          Descrição Descrição Descrição Descrição Descrição Descrição Descrição
          Descrição Descrição Descrição Descrição
        </p>
        <Footer>
          <div>
            <p>Publicado em</p>
            <span>10/10/2089</span>
          </div>
          <div>
            <p>Favoritar</p>
            <FiHeart />
          </div>
        </Footer>
      </Main>
    </Content>
  );
};

export default Card;
