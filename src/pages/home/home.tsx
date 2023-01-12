import map from "../../images/map.svg";
import search from "../../images/icons/search.svg";
import feature from "../../images/feature.svg";
import houseicon from "../../images/icons/house.svg";
import Card from "../../components/card/card";
import g1 from "../../images/g1.svg";
import g2 from "../../images/g2.svg";
import g3 from "../../images/g3.svg";
import g4 from "../../images/g4.svg";
import user from "../../images/icons/person.svg";
import cover from "../../images/cover.svg";
const Home = () => {
  return (
    <main>
      <section className="landing container">
        <h1 className="landing__heading">
          The most affortable place to stay in the san franciso bay area
        </h1>
        <div className="landing__location">
          <img src={map} alt="map" />
          <div className="location__box">
            <select name="All Types" id="">
              <option value="type1">type 1</option>
              <option value="type1">type 2</option>
              <option value="type1">type 3</option>
            </select>
            <select name="All Types" id="">
              <option value="type1">type 1</option>
              <option value="type1">type 2</option>
              <option value="type1">type 3</option>
            </select>
            <button>
              <img src={search} alt="search icon" />
            </button>
          </div>
        </div>
      </section>

      <section className="feature">
        <h2>Minimum living cost takes care of everything</h2>
        <div className="feature__box">
          <img className="feature__img" src={feature} alt="" />
          <div className="feature__list">
            <div className="feature__unique">
              <div>
                <img src={houseicon} alt="" />
              </div>
              <p>Pay as Little as possible!</p>
            </div>
            <div className="feature__unique">
              <div>
                <img src={houseicon} alt="" />
              </div>
              <p>Pay as Little as possible!</p>
            </div>
            <div className="feature__unique">
              <div>
                <img src={houseicon} alt="" />
              </div>
              <p>Pay as Little as possible!</p>
            </div>
            <div className="feature__unique">
              <div>
                <img src={houseicon} alt="" />
              </div>
              <p>Pay as Little as possible!</p>
            </div>
            <div className="feature__unique">
              <div>
                <img src={houseicon} alt="" />
              </div>
              <p>Pay as Little as possible!</p>
            </div>
            <div className="feature__unique">
              <div>
                <img src={houseicon} alt="" />
              </div>
              <p>Pay as Little as possible!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="property">
        <div className="property__heading">
          <h2>List of Properties</h2>
          <button>Viee More</button>
        </div>
        <div className="property__box">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="pagination">
          <button>prev</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>next</button>
        </div>
      </section>

      <section className="more">
        <div className="gallery">
          <div className="row">
            <div>
              <img className="more--bg" src={g2} alt="" />
            </div>
            <div>
              <img src={g1} alt="" />
            </div>
          </div>
          <div className="row">
            <div>
              <img src={g3} alt="" />
            </div>
            <div>
              <img src={g4} alt="" />
            </div>
          </div>
        </div>
        <div className="more__info">
          <h2>Flexibility and options to suit your lifestyle.</h2>
          <p>
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>
          <button>Search Rooms</button>
        </div>
      </section>
      <section className="add__property">
        <p className="form__heading">
          Your property with us and be Confident that Your Room will be Filled
          Out!
        </p>

        <div className="form__container">
          <h3>Add a New Property</h3>
          <form action="">
            <div className="grid">
              <div>
                <p>
                  name <span>*</span>
                </p>
                <input type="text" placeholder="enter name" />
              </div>
              <div>
                <p>
                  name <span>*</span>
                </p>
                <input type="text" placeholder="enter name" />
              </div>
              <div>
                <p>
                  name <span>*</span>
                </p>
                <input type="text" placeholder="enter name" />
              </div>
              <div>
                <p>
                  name <span>*</span>
                </p>
                <input type="text" placeholder="enter name" />
              </div>
              <div>
                <p>
                  name <span>*</span>
                </p>
                <input type="text" placeholder="enter name" />
              </div>
              <div>
                <p>
                  name <span>*</span>
                </p>
                <input type="text" placeholder="enter name" />
              </div>
              <div>
                <p>
                  name <span>*</span>
                </p>
                <input type="text" placeholder="enter name" />
              </div>
              <div>
                <p>
                  name <span>*</span>
                </p>
                <input type="text" placeholder="enter name" />
              </div>
            </div>
            <div>
              <p>
                name <span>*</span>
              </p>
              <textarea
                name=""
                id=""
                rows={5}
                placeholder="Enter Description"
              ></textarea>
            </div>

            <div className="upload">
              <p>Upload Photos</p>
              <div className="upload__box">
                <p>
                  Drag your images here, or <span>Browse</span>
                </p>
                <p className="supported__format">Supported: JPG, JPEG, PNG</p>
              </div>
            </div>

            <button>Add a New Property</button>
          </form>
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial__card">
          <p className="testi__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet libero vulputate
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
            fringilla finibus.
          </p>
          <div className="user__card">
            <img src={user} alt="" />
            <p>
              Manish Bisht <span>Property Owner</span>
            </p>
          </div>
        </div>
        <img className="cover" src={cover} alt="" />
      </section>
    </main>
  );
};

export default Home;
