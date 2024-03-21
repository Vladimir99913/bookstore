import { BookCardMain } from './card/BookCardMain';
import { BookNew } from '../types/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { Title } from './Title';
import 'swiper/css';
import 'swiper/css/free-mode';

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
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          1100: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 2,
          },
        }}
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
