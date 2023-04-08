import { Row, Col } from "antd";
import React, { useRef, useState } from "react";
import ReviewItem from "../ReviewItem/Index";
import styles from "./reviewlist.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function ReviewList({ reviews }) {
  return (
    <Row gutter={[32, 32]} className={styles.section}>
      <Col
        sm={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 24 }}
        xxl={{ span: 24 }}
      >
        <div className={styles.head}>
          <h1 className={styles.logo}>reviewers</h1>
          {/* <h4 className={styles.name}>@ntuedtd_ig</h4> */}
        </div>
      </Col>

      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles.mySwiper}
        >
          {reviews.map((review) => (
            <SwiperSlide className={styles.swiper_slide} key={review.id}>
              <img
                className={styles.photo}
                src={review.image}
                alt={review.name}
              />
              <p>{review.description}</p>
              {/* <p>{review.comment}</p> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </Row>
  );
}
