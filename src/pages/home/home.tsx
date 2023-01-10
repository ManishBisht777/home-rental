import map from "../../images/map.svg";
import search from "../../images/icons/search.svg";
import feature from "../../images/feature.svg";
import houseicon from "../../images/icons/house.svg";

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
        <h2>minimum living cost takes care of everything</h2>
        <div className="feature__box">
          <img src={feature} alt="" />
          <div className="feature__list">
            <div className="feature">
              <div>
                <img src={houseicon} alt="" />
              </div>
              <p>Pay as Little as possible!</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
