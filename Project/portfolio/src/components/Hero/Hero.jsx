import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm Heeralal Kumar Sahni</h1>
          <h2>Full Stack Developer</h2>
          <p>Building beautiful web experiences with modern technologies</p>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
        <div className="hero-image">
          <img src="/assets/images/hero-image.png" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;