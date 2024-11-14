export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img" style={{
            width: "100%",
            borderRadius: "50%",
            padding: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           // Add animation here
          }}>
        <img src="./me.png" alt="About Me"  style={{
              width: "100%",
              borderRadius: "50%", // Circular image
              animation: "scale-animation 3s infinite", // Add animation here
            }}/>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
         
          <h1 style={{fontSize:"2rem"}}>About Me</h1>
          <p className="hero--section-description">
          Hi, I'm Muhammad Sami, a Full Stack Developer with expertise in MERN stack, Python and more. I hold a degree in Computer Science and have hands-on experience developing scalable, responsive, and user-centric web applications. Passionate about both front-end and back-end technologies, I enjoy solving complex problems and continuously learning new tools to create seamless digital experiences. I’m dedicated to bringing ideas to life and delivering high-quality solutions.
          </p>
          {/* <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p> */}
        </div>
      </div>
    </section>
  );
}
