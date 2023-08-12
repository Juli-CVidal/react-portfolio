import "../assets/styles/home_section.css";
import TextSlider from "./TextSlider";

const HomeSection = () => {
  return (
    <section className="home" id="home">
      <div className="hero">
        <img
          className="profile__picture box__shadow radius__5"
          alt="Profile picture"
          src="/src/assets/imgs/profile__picture.webp"
        />
        <div className="text__container">
          <h1 className="section__title">
            Hi, I'm Julián<span className="highlight__cursive">Vidal</span>
          </h1>

          <TextSlider speed={5000} texts={["FullStack Developer", "Quality Assurance"]}/>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
