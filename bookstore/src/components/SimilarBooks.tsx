import { BookCardMain } from './card/BookCardMain';
import { BookNew } from '../types/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { Title } from './Title';

interface SimilarBooksProps {
  book: BookNew[];
  title: string;
}

export function SimilarBooks(props: SimilarBooksProps) {
  const books = props.book;
  return (
    <>
      <Title title={props.title} />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {books.map((book, index) => (
          <SwiperSlide key={index}>
            <BookCardMain key={index} {...book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
