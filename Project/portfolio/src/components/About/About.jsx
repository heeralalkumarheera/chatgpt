import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with 3 years of experience in building
              web applications. Specialized in React and Node.js, I love turning complex
              problems into simple, beautiful solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </div>
          <div className="about-image">
            <img src="/assets/images/about.jpg" alt="About" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;