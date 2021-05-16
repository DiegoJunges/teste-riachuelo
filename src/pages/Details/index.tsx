import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import { Content, Main, Button, Image } from './styles';
import { BooksProps } from '../Books/index';

type ParamsProps = {
  id: string;
};

const Details = () => {
  const [book, setBook] = useState<BooksProps>();
  const { goBack } = useHistory();
  const params = useParams<ParamsProps>();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<BooksProps>(`volumes/${params.id}`);
        setBook(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [params.id]);

  return (
    <Content>
      <Main>
        <Image src={book?.volumeInfo?.imageLinks?.thumbnail} />
        <h1>{book?.volumeInfo.title}</h1>
        <p>{book?.volumeInfo.description}</p>
        <div>
          <p>Publicado em</p>
          <span>{book?.volumeInfo.publishedDate}</span>
        </div>
        <Button onClick={goBack}>
          <FiArrowLeft />
          Voltar
        </Button>
      </Main>
    </Content>
  );
};

export default Details;
