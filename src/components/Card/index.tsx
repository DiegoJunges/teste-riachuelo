import { FiHeart } from 'react-icons/fi';
import summarizePost from '../../utils/summarizaPost';
import { Content, Image, Main, Footer } from './styles';

export type CardProps = {
  title: string;
  image: string;
  description: string;
  date: string;
};

const Card = ({ date, description, image, title }: CardProps) => {
  return (
    <Content>
      <Image src={image} />
      <Main>
        <h1>{summarizePost(title, 100)}</h1>
        <p>{summarizePost(description, 250)}</p>
        <Footer>
          <div>
            <p>Publicado em</p>
            <span>{date}</span>
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
