/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import Link from "next/link";

function Home() {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

  const handleViewMore = (cardId) => (event) => {
    console.log("this iis", cardId);
    console.log("this iis eve", event);
    console.log("this iis p", event.target.innerText);

    let current = document.getElementById(cardId).style;
    console.log("current style", current?.display);

    if (current?.display == "none") {
      document.getElementById(cardId).style.transition = "all 2s";
      document.getElementById(cardId).style.display = "block";
      event.target.innerText = "View less";
    } else {
      document.getElementById(cardId).style.transition = "all 2s";
      document.getElementById(cardId).style.display = "none";
      event.target.innerText = "View more";
    }
  };

  return (
    <>
      {/* <Link href="/#">
                <a>Link</a></Link>
            </Link> */}
      <Layout>
        <Head>
          <title>Zimkey</title>
          <meta name="description" content="Your genie, a tap away!F" />
          <link rel="icon" type="image/x-icon" href="/icon.svg" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <section className="section-box">
          <div className="banner-hero" style={{ backgroundColor: "#FAEDE3" }}>
            <div
              className="container"
              style={{
                background: "url(/assets/brand/zimkey-arrow-white.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "contain",
              }}
            >
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2">
                    Best Home Services at the Tap of a Key
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    Zimkey guarantees safe and hassle-free home services by
                    verified professionals
                  </p>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <img
                      className="img-responsive"
                      alt="Zimkey"
                      src="assets/imgs/page/home/hero.png"
                      style={{ bottom: "unset" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cleaning */}
        <div className="section-box">
          <div className="container mt-120">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center">
                <img
                  className="img-small img-responsive"
                  src="assets/imgs/page/home/img-1.png"
                  alt="Zimkey"
                />
                <div className="block-card">
                  <img src="/assets/imgs/page/home/card.png" alt="Zimkey" />
                </div>
                <div className="block-control">
                  <img
                    src="/assets/imgs/page/home/img-safety.png"
                    alt="Zimkey"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                <h3 className="text-heading-1 mt-30">
                  Cleaning & Housekeeping
                </h3>
                <p className="text-body-lead-large color-gray-400">
                  What we offer
                </p>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                        alt="icon"
                        className="mt-2"
                        width={22}
                      />{" "}
                      Quick access to quality home services
                    </h4>
                    {/* <p className="text-body-excerpt color-gray-600 mt-15">
                      Professional, well-trained, reliable cleaners that have
                      been thoroughly screened before being hired!
                    </p> */}
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 ">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3151/3151394.png"
                        alt="icon"
                        className="mt-2"
                        width={22}
                      />
                      Guaranteed safety
                    </h4>
                    {/* <p className="text-body-excerpt color-gray-600 mt-15">
                      Booking takes less than 60 seconds! And you can schedule
                      for as early as today
                    </p> */}
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 ">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/870/870175.png"
                        alt="icon"
                        className="mt-2"
                        width={22}
                      />{" "}
                      Reliable, single-point management
                    </h4>
                    {/* <p className="text-body-excerpt color-gray-600 mt-15">
                      No additional charges or hidden cost. You only pay for
                      what you ordered!
                    </p> */}
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 ">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2150/2150150.png"
                        alt="icon"
                        className="mt-2"
                        width={22}
                      />{" "}
                      No hidden costs
                    </h4>
                    {/* <p className="text-body-excerpt color-gray-600 mt-15">
                      We are here to help you with all our resources at all
                      times.
                    </p> */}
                  </div>
                </div>

                <div className="mt-40">
                  <Link href="https://api.whatsapp.com/send?phone=917733001121">
                    <a className="btn btn-pink icon-arrow-right-white text-heading-6">
                      Book now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-box mt-70">
          <div className="container mt-50">
            <h3 className="text-heading-1 text-center mb-10">
              Zimkey Flexible plans
              <br className="d-lg-block d-none" />
              For You
            </h3>
          </div>
          <div className="container mt-20">
            <div className="block-pricing block-pricing-2 mt-70">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6">
                      {/* <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol> */}
                      {/* <div className="carousel-inner"> */}
                      {/* <div className="carousel-item active">
                        <div style={{height: '42rem', backgroundColor: 'red'}}>test</div>
                      </div>
                      <div className="carousel-item">
                        <div style={{height: '42rem', backgroundColor: 'green'}}>test 2</div>
                      </div> */}

                      {/* <div className="carousel-item active"> */}
                      <div className="box-pricing-item hover-up">
                        <div
                          id="carouselExampleIndicators"
                          className="carousel slide"
                          data-ride="carousel"
                        >
                          <ol
                            class="carousel-indicators"
                            style={{ marginBottom: "-1rem" }}
                          >
                            <li
                              style={{
                                backgroundColor: "rgb(255 161 161)",
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                              }}
                              data-target="#carouselExampleIndicators"
                              data-slide-to="0"
                              class="active"
                            ></li>
                            <li
                              style={{
                                backgroundColor: "rgb(255 161 161)",
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                              }}
                              data-target="#carouselExampleIndicators"
                              data-slide-to="1"
                            ></li>
                            <li
                              style={{
                                backgroundColor: "rgb(255 161 161)",
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                              }}
                              data-target="#carouselExampleIndicators"
                              data-slide-to="2"
                            ></li>
                            <li
                              style={{
                                backgroundColor: "rgb(255 161 161)",
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                              }}
                              data-target="#carouselExampleIndicators"
                              data-slide-to="3"
                            ></li>
                          </ol>

                          <div class="carousel-inner">
                            
                            <div
                              className="carousel-item active"
                              id="cardContentContainer"
                            >
                              <div className="box-info-price">
                                <span className="text-heading-3 for-month display-month">
                                  ₹ 2999
                                </span>
                                <span className="text-heading-3 for-year">
                                  $420
                                </span>
                                <span className="text-month text-body-small color-gray-400">
                                  &nbsp; 1 BHK
                                </span>
                                <span className="text-month for-year text-body-small color-gray-400">
                                  /year
                                </span>
                              </div>
                              <div className="line-bd-bottom">
                                <h4 className="text-heading-5 mb-15">
                                  General Cleaning
                                </h4>
                                <p className="text-body-small color-gray-400">
                                  3 - 4 Hours
                                </p>
                              </div>
                              <ul className="list-package-feature">
                                <li>Dusting</li>
                                <li>Sweeping and Mopping</li>
                                <div
                                  id="card1-1"
                                  style={{ display: "none" }}
                                ></div>
                              </ul>
                              {/* <p className="view-more" style={{float: 'right', cursor: 'pointer'}} onClick={handleViewMore('card1-1')}>View more</p> */}
                            </div>

                            <div
                              className="carousel-item"
                              id="cardContentContainer"
                            >
                              <div className="box-info-price">
                                <span className="text-heading-3 for-month display-month">
                                  ₹ 3499
                                </span>
                                <span className="text-heading-3 for-year">
                                  $420
                                </span>
                                <span className="text-month text-body-small color-gray-400">
                                  &nbsp; 2 BHK
                                </span>
                                <span className="text-month for-year text-body-small color-gray-400">
                                  /year
                                </span>
                              </div>
                              <div className="line-bd-bottom">
                                <h4 className="text-heading-5 mb-15">
                                  General Cleaning
                                </h4>
                                <p className="text-body-small color-gray-400">
                                  3 - 4 Hours
                                </p>
                              </div>
                              <ul className="list-package-feature">
                                <li>Dusting</li>
                                <li>Sweeping and Mopping</li>
                                {/* <li>1 Studio</li>
                                <li>1 Washroom</li>
                                <li>Service includes general cleaning</li> */}
                                <div
                                  id="card1-2"
                                  style={{ display: "none" }}
                                ></div>
                              </ul>
                              {/* <p
                                className="view-more"
                                style={{ float: "right", cursor: "pointer" }}
                                onClick={handleViewMore("card1-2")}
                              >
                                View more
                              </p> */}
                            </div>

                            <div
                              className="carousel-item"
                              id="cardContentContainer"
                            >
                              <div className="box-info-price">
                                <span className="text-heading-3 for-month display-month">
                                  ₹ 4499
                                </span>
                                <span className="text-heading-3 for-year">
                                  $420
                                </span>
                                <span className="text-month text-body-small color-gray-400">
                                  &nbsp; 3 BHK
                                </span>
                                <span className="text-month for-year text-body-small color-gray-400">
                                  /year
                                </span>
                              </div>
                              <div className="line-bd-bottom">
                                <h4 className="text-heading-5 mb-15">
                                  General Cleaning
                                </h4>
                                <p className="text-body-small color-gray-400">
                                  3 - 4 Hours
                                </p>
                              </div>
                              <ul className="list-package-feature">
                                <li>Dusting</li>
                                <li>Sweeping and Mopping</li>
                                {/* <li>1 Studio</li>
                                <li>1 Washroom</li>
                                <li>Service includes general cleaning</li> */}
                                <div
                                  id="card1-3"
                                  style={{ display: "none" }}
                                ></div>
                              </ul>
                              {/* <p
                                className="view-more"
                                style={{ float: "right", cursor: "pointer" }}
                                onClick={handleViewMore("card1-3")}
                              >
                                View more
                              </p> */}
                            </div>

                            <div
                              className="carousel-item"
                              id="cardContentContainer"
                            >
                              <div className="box-info-price">
                                <span className="text-heading-3 for-month display-month">
                                  ₹ 5499
                                </span>
                                <span className="text-heading-3 for-year">
                                  $420
                                </span>
                                <span className="text-month text-body-small color-gray-400">
                                  &nbsp; 4 BHK
                                </span>
                                <span className="text-month for-year text-body-small color-gray-400">
                                  /year
                                </span>
                              </div>
                              <div className="line-bd-bottom">
                                <h4 className="text-heading-5 mb-15">
                                  General Cleaning
                                </h4>
                                <p className="text-body-small color-gray-400">
                                  3 - 4 Hours
                                </p>
                              </div>
                              <ul className="list-package-feature">
                                <li>Dusting</li>
                                <li>Sweeping and Mopping</li>
                                {/* <li>1 Studio</li>
                                <li>1 Washroom</li>
                                <li>Service includes general cleaning</li> */}
                                <div
                                  id="card1-4"
                                  style={{ display: "none" }}
                                ></div>
                              </ul>
                              {/* <p
                                className="view-more"
                                style={{ float: "right", cursor: "pointer" }}
                                onClick={handleViewMore("card1-4")}
                              >
                                View more
                              </p> */}
                            </div>
                          </div>

                          <a
                            class="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev"
                            style={{ marginLeft: "-2rem" }}
                          >
                            <span
                              class="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a
                            class="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next"
                            style={{ marginRight: "-2rem" }}
                          >
                            <span
                              class="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                      {/* </div> */}

                      {/* <div className="carousel-item"> */}
                      {/* <div className="box-pricing-item hover-up">
                            <div className="box-info-price">
                              <span className="text-heading-3 for-month display-month">
                                ₹ 100001
                              </span>
                              <span className="text-heading-3 for-year">
                                $420
                              </span>
                              <span className="text-month text-body-small color-gray-400">
                                /week
                              </span>
                              <span className="text-month for-year text-body-small color-gray-400">
                                /year
                              </span>
                            </div>
                            <div className="line-bd-bottom">
                              <h4 className="text-heading-5 mb-15">Studio</h4>
                              <p className="text-body-small color-gray-400">
                                Service includes general cleaning for 2 times
                                per week.
                              </p>
                            </div>
                            <ul className="list-package-feature">
                              <li>1 Studio</li>
                              <li>1 Washroom</li>
                              <li>Service includes general cleaning</li>
                            </ul>
                          </div> */}
                      {/* </div> */}

                      {/* </div> */}
                      {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a> */}
                    </div>

                    {/* <div
                      id="carouselExampleIndicators"
                      className="col-xl-3 col-lg-6 col-md-6 carousel slide"
                      // data-wow-delay=".1s"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">

                        <div className="carousel-item active">
                          <div className="box-pricing-item hover-up">
                            <div className="box-info-price">
                              <span className="text-heading-3 for-month display-month">
                                ₹ 2000
                              </span>
                              <span className="text-heading-3 for-year">
                                $420
                              </span>
                              <span className="text-month text-body-small color-gray-400">
                                /week
                              </span>
                              <span className="text-month for-year text-body-small color-gray-400">
                                /year
                              </span>
                            </div>
                            <div className="line-bd-bottom">
                              <h4 className="text-heading-5 mb-15">Studio</h4>
                              <p className="text-body-small color-gray-400">
                                Service includes general cleaning for 2 times
                                per week.
                              </p>
                            </div>
                            <ul className="list-package-feature">
                              <li>1 Studio</li>
                              <li>1 Washroom</li>
                              <li>Service includes general cleaning</li>
                            </ul>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="box-pricing-item hover-up">
                            <div className="box-info-price">
                              <span className="text-heading-3 for-month display-month">
                                ₹ 100001
                              </span>
                              <span className="text-heading-3 for-year">
                                $420
                              </span>
                              <span className="text-month text-body-small color-gray-400">
                                /week
                              </span>
                              <span className="text-month for-year text-body-small color-gray-400">
                                /year
                              </span>
                            </div>
                            <div className="line-bd-bottom">
                              <h4 className="text-heading-5 mb-15">Studio</h4>
                              <p className="text-body-small color-gray-400">
                                Service includes general cleaning for 2 times
                                per week.
                              </p>
                            </div>
                            <ul className="list-package-feature">
                              <li>1 Studio</li>
                              <li>1 Washroom</li>
                              <li>Service includes general cleaning</li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div> */}

                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div className="box-pricing-item active hover-up">
                        <div className="box-info-price">
                          <span className="text-heading-3 for-month display-month">
                            ₹ 4333
                          </span>
                          <span className="text-heading-3 for-year">$1068</span>
                          <span className="text-month text-body-small color-gray-400">
                            /week
                          </span>
                          <span className="text-month for-year text-body-small color-gray-400">
                            /year
                          </span>
                        </div>
                        <div className="line-bd-bottom">
                          <h4 className="text-heading-5 mb-15">
                            1 BDR Apartment
                          </h4>
                          {/* <p className="text-body-small color-gray-400">
                            Service includes general cleaning for 4 times per
                            week.
                          </p> */}
                        </div>
                        <ul className="list-package-feature" style={{minHeight: '178px'}}>
                          <li>
                            Deep cleaning of all rooms including Kitchen and
                            Balcony
                          </li>
                          <li>
                            Dusting of walls, windows, ceilings and balcony
                          </li>
                          <li>Stain removal if any</li>

                          <div id="card2" style={{ display: "none" }}>

                            <li>
                              Vacuuming of sofas, carpets, curtains, and window
                              sills
                            </li>
                          </div>
                        </ul>
                        <p
                          className="view-more"
                          style={{ float: "right", cursor: "pointer" }}
                          onClick={handleViewMore("card2")}
                        >
                          View more
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".1s"
                    >
                      <div className="box-pricing-item hover-up">
                        <div className="box-info-price">
                          <span className="text-heading-3 for-month display-month">
                            ₹ 2999
                          </span>
                          <span className="text-heading-3 for-year">$420</span>
                          <span className="text-month text-body-small color-gray-400">
                            &nbsp; 3-4 hours
                          </span>
                          <span className="text-month for-year text-body-small color-gray-400">
                            /year
                          </span>
                        </div>
                        <div className="line-bd-bottom">
                          <h4 className="text-heading-5 mb-15">
                            Kitchen Deep Cleaning
                          </h4>
                          {/* <p className="text-body-small color-gray-400">
                            3-4 hours
                          </p> */}
                        </div>
                        <ul className="list-package-feature" style={{minHeight: '178px'}}>
                          <li>
                            Dirt, deposit & stain removal of kitchen floor,
                            tiles, slab, sink, and fittings
                          </li>
                          <li>
                            Cleaning of kitchen windows, ceiling fan and exhaust
                            fan
                          </li>

                          <div id="card3" style={{ display: "none" }}>
                          <li>Degreasing of stove and chimney </li>

                            <li>
                              Deep cleaning of fridge, microwave and other
                              appliances{" "}
                            </li>
                            <li>Cabinet cleaning including inside shelves </li>
                          </div>
                        </ul>
                        <p
                          className="view-more"
                          style={{ float: "right", cursor: "pointer" }}
                          onClick={handleViewMore("card3")}
                        >
                          View more
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".1s"
                    >
                      <div className="box-pricing-item hover-up">
                        <div className="box-info-price">
                          <span className="text-heading-3 for-month display-month">
                            ₹ 799
                          </span>
                          <span className="text-heading-3 for-year">$420</span>
                          <span className="text-month text-body-small color-gray-400">
                            &nbsp; 3-4 hours
                          </span>
                          <span className="text-month for-year text-body-small color-gray-400">
                            /year
                          </span>
                        </div>
                        <div className="line-bd-bottom" style={{paddingBottom: '18px'}}>
                          <h4 className="text-heading-5 mb-15">
                            Bathroom Deep Cleaning
                          </h4>
                          {/* <p className="text-body-small color-gray-400">
                            Service includes general cleaning for 2 times per
                            week.
                          </p> */}
                        </div>
                        <ul className="list-package-feature">
                          
                        <li>
                            Deep cleaning and unclogging of floor, toilet, and
                            bathtub
                          </li>
                          <li>
                            Dirt, hard water stains & tile grouting stain
                            removal from all surfaces including mirror
                          </li>
                          <li>Stain removal if any</li>

                          <div id="card4" style={{ display: "none" }}>
                          
                          
                          </div>
                        </ul>
                        {/* <p
                          className="view-more"
                          style={{ float: "right", cursor: "pointer" }}
                          onClick={handleViewMore("card4")}
                        >
                          View more
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-box mt-70">
          <div className="container text-center mt-100">
            <h2 className="text-heading-1 color-gray-900">Zimkey Safety</h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              {/* Lorem ipsum dolor. */}&nbsp;
            </p>
          </div>
          <div className="container">
            <div className="box-bg-bottom">
              <div className="box-video-homepage6">
                <div className="box-image mt-30 mb-30">
                  <img
                    className="img-responsive bdrd-16"
                    src="https://media.istockphoto.com/id/1128180520/photo/professional-cleaning-service-team-working-with-cleaning-equipment-in-room-cleaning-service.jpg?s=1024x1024&w=is&k=20&c=kNn4b-ywyEkkuDsCaokzLlRqH8E4Dy9slCpCouwbVmM="
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="list-icons mt-50">
                    <div className="item-icon none-bd">
                      <span className="icon-left">
                        <img src="/assets/imgs/page/homepage6/icon-acquis.svg" />
                      </span>
                      <h4 className="text-heading-4">1. Title</h4>
                      <p className="text-body-text color-gray-600 mt-15">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="list-icons mt-50">
                    <div className="item-icon none-bd">
                      <span className="icon-left">
                        <img src="/assets/imgs/page/homepage6/icon-active.svg" />
                      </span>
                      <h4 className="text-heading-4">2. Title</h4>
                      <p className="text-body-text color-gray-600 mt-15">
                        Lorem ipsum dolor sit amet, consec adipiscing elit, sed
                        do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="list-icons mt-50">
                    <div className="item-icon none-bd">
                      <span className="icon-left">
                        <img src="/assets/imgs/page/homepage6/icon-retent.svg" />
                      </span>
                      <h4 className="text-heading-4">3. Title</h4>
                      <p className="text-body-text color-gray-600 mt-15">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut a
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  Launching Soon
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Coming soon
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-40">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    {/* <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Zimkey"
                      />
                    </span> */}
                    <h4 className="text-heading-4">Electrician & Plumbing</h4>
                    {/* <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    {/* <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Zimkey"
                      />
                    </span> */}
                    <h4 className="text-heading-4">Carpenter & Painting</h4>
                    {/* <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    {/* <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Zimkey"
                      />
                    </span> */}
                    <h4 className="text-heading-4">
                      Installation, Maintenance & Repair Services
                    </h4>
                    {/* <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img
                  className="bdrd-16 img-responsive"
                  src="https://media.istockphoto.com/id/901157728/photo/handyman-with-tool-belt.jpg?s=1024x1024&w=is&k=20&c=q4dRtJu3JxW7gdTPKdcK7WVcgrOGeYkSqlUlj0aSzu4="
                  alt="Zimkey"
                />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-1 mt-30">Zimkey Guarantee</h3>
                <p className="text-body-lead-large color-gray-600 mt-30">
                  There are better ways for you to spend your time, so we made
                  it easy for you. Book your house cleaning in 60 seconds, and
                  our professionals will take care of the rest.
                </p>
                <div className="line-bd-green mt-50" />
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      YOUR GO-TO CLEANING PARTNER
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Our priority is to give you peace of mind in the unlikely
                      event of damages during The cleaning service.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      ADVOCATE YOUR LIFESTYLE
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      As an advocate for lifestyle and well-being brand, through
                      keeping spaces clean, ZimkeyDay Cleaner° invites you to
                      reach out and share the responsibility of managing your
                      holiday homes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;