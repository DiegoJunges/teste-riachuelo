import { FiHeart } from 'react-icons/fi';
import { Content, Image, Main, Footer } from './styles';

const Card = () => {
  return (
    <Content>
      <Image src="https://avatars.githubusercontent.com/u/68939012?v=4" />
      <Main>
        <h1>Título</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac magna
          feugiat aliquet nisl nullam. Ac risus tincidunt nibh lectus...
        </p>
        <Footer>
          <div>
            <p>Publicado em</p>
            <span>10/10/2089</span>
          </div>
          <div>
            <p>Favoritar</p>
            <span>
              <FiHeart />
            </span>
          </div>
        </Footer>
      </Main>
    </Content>
  );
};

export default Card;
