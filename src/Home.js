import React, { useState, useEffect } from "react";
import db from "./firebase";
import Categories from "./Categories";
import "./Home.css";
import Products from "./Products";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import { Link } from "react-router-dom";
import EmblaCarousel from "./EmblaCarousel";
import "./base.css";

SwiperCore.use([Pagination, Navigation]);

function Home() {
  const [bestseller, setBestSeller] = useState([]);
  const [deals, setDeals] = useState([]);
  useEffect(() => {
    db.collection("deals").onSnapshot((snapshot) =>
      setDeals(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  useEffect(() => {
    db.collection("bestseller").onSnapshot((snapshot) =>
      setBestSeller(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  useEffect(() => {
    document.title = "GREENOUT ONLINE SHOP";
  }, []);
  return (
    <div className="home">
      <div className="content">
        <EmblaCarousel autoplay delayLength={2000}>
          <div className="content__image">
            <img src="https://cdn.shopify.com/s/files/1/2617/4488/files/Banner_4_1296x.jpg?v=1597984719" />
          </div>
          <div className="content__image">
            <img src="https://www.littlegoa.com/image/catalog/sliders/category_2.jpg" />
          </div>
          <div className="content__image">
            <img src="https://cdn.shopify.com/s/files/1/2617/4488/files/Banner_6_145575c3-6e64-4e13-b095-ddacd52e8d01_1296x.jpg?v=1619241317" />
          </div>
          <div className="content__image">
            <img src="https://www.littlegoa.com/image/catalog/sliders/category_1.jpg" />
          </div>
          <div className="content__image">
            <img src="https://cdn.shopify.com/s/files/1/2617/4488/files/Banner_7_1296x.jpg?v=1601546094" />
          </div>
        </EmblaCarousel>
      </div>
      <div className="home__categoriesContainer">
        <Title title={"Categories"} />
        <div className="home__categories">
          <Link to="/rolling_papers">
            <Categories title={"Rolling Papers"} />
          </Link>
          <Link to="/bongs">
            <Categories title={"Bongs"} />
          </Link>
          <Link to="/vaporizers">
            <Categories title={"Vaporizers"} />
          </Link>
          <Link to="/pipes">
            <Categories title={"Pipes"} />
          </Link>
          <Link to="/grinders">
            <Categories title={"Grinders"} />
          </Link>
          <Categories title={"Ashtrays"} />
        </div>
      </div>
      <div className="home__bestSellers">
        <Title title={"Best Sellers"} />
        <div className="home__row">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
          >
            {bestseller.map((best) => (
              <SwiperSlide>
                <Products
                  key={best.id}
                  title={best.title}
                  price={best.price}
                  rating={best.rating}
                  image={best.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="home__Deals">
        <Title title={"Deals"} />
        <div className="home__row">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
          >
            {deals.map((deal) => (
              <SwiperSlide>
                <Products
                  key={deal.id}
                  title={deal.title}
                  price={deal.price}
                  rating={deal.rating}
                  image={deal.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="home__footer">
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
