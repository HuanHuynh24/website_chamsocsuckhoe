import Header from "../../header";
import { useEffect, useState } from "react";
import "../css/style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import imageDoctor from "../img/doctor.webp";

const getApi = "http://127.0.0.1:8080/api/dichvu/danhsach";
function Home() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [listService, setlistService] = useState([]);
  useEffect(() => {
    fetch(getApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (servervice) {
        setlistService(servervice);
      })
      .catch((error) => console.log("loi"));
  }, []);
  console.log(listService);
  return (
    <>
      <Header></Header>
      <div className="slide">
        <div className="heading-slide">
          <h1 className="heading color-heading">Tom Dixon MD</h1>
          <p>Helping to Build a Healthy Community</p>
          <button className="customBtn btn" data-aos="zoom-in-up">Book an Appointment</button>
        </div>
        <div className="overlay"></div>
      </div>
      <main>
        <div className="container">
          <div className="row">
            <div className="column-1" style={{ height: 687 }}>
              <section className="revealUp " data-aos="zoom in">
                <h1 className="color-heading">About Tom Dixon MD</h1>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </p>
              </section>
              <section className="revealUp " data-aos="zoom-in-up">
                <h1 className="color-heading">About Tom Dixon MD</h1>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </p>
              </section>
              <button className="btn customBtn" data-aos="zoom-in-up">
                Read more
              </button>
            </div>
            <div
              className="column-2"
              data-aos="zoom-in-up"
              style={{ height: 687 }}
            >
              <img src={imageDoctor} alt="Mô tả ảnh" />
            </div>
          </div>
        </div>
        <div className="container-service">
          <div className="container">
            <div className="row " style={{ flexDirection: "column" }}>
              <h1 className="color-heading" data-aos="zoom-in-up">
                How Can I Help You
              </h1>
              <div className="service row">
                {listService.map((service) => {
                  return (
                    <div className="itemService" data-aos="zoom-in-up">
                      <img
                        className="imgService"
                        src={require("../img/" + service.anh)}
                        alt="image service"
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div className="overlayImg"></div>
                      <p style={{ marginBottom: 40 }}>{service.tenDichVu}</p>
                      <button className="btnBooknow btn">Book now</button>
                    </div>
                  );
                })}
              </div>
              <button
                className="customBtn btn"
                data-aos="zoom-in-up"
                style={{ marginTop: 50, width: 200 }}
              >
                More service
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="banner" data-aos="zoom-in-up">
              <img
                src={require("../img/84770f_90d8d3cd6e474d73acbcd4feb20796c7~mv2_d_5424_1498_s_2.webp")}
                style={{ width: "100%", height: "300px", position: "relative" }}
              ></img>
              <div className="heading-slide">
                <h1 className="heading color-heading">
                  Get a Free Flu Shot Today!
                </h1>
                <button className="customBtn btn">Book a Flu Shot</button>
              </div>
              <div className="overlay"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="column">
              <h1 className="color-heading" data-aos="zoom-in-up">
                Insurance Policy
              </h1>
              <p style={{ fontSize: 24, margin: 0 }} data-aos="zoom-in-up">
                Nearly all major insurance plans accepted
              </p>
              <p data-aos="zoom-in-up">
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7715033490867!2d108.21084937498014!3d16.077342784603342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184792140755%3A0xd4058cb259787dac!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgUGjhuqFtIEvhu7kgdGh14bqtdCAtIMSQ4bqhaSBo4buNYyDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1713770595796!5m2!1svi!2s"
          width="100%"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </footer>
    </>
  );
}

export default Home;
