import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import summarizePost from '../../utils/summarizaPost';
import { Content, Image, Main, Footer, ButtonFavorite } from './styles';

export type CardProps = {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string;
  handleFavorite: (id: string) => void;
  favorite: boolean;
};

const Card = ({
  date,
  description,
  image,
  title,
  id,
  favorite,
  handleFavorite,
}: CardProps) => {
  return (
    <Content>
      <Image src={image} />
      <Main>
        <Link to={`/details/${id}`}>
          <h1>{summarizePost(title, 100)}</h1>
          <p>{summarizePost(description, 250)}</p>
        </Link>
        <Footer>
          <div>
            <p>Publicado em</p>
            <span>{date}</span>
          </div>
          <div>
            <p>Favoritar</p>
            <ButtonFavorite
              favorite={favorite}
              type="button"
              onClick={() => handleFavorite(id)}
            >
              <FiHeart />
            </ButtonFavorite>
          </div>
        </Footer>
      </Main>
    </Content>
  );
};

export default Card;
