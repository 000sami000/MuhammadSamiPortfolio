import  { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the visibility state change after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // delay before the animation starts

    return () => clearTimeout(timer);
  }, []);
  const [text, setText] = useState("");
  const fullText =
    `I’m a passionate Full Stack Developer skilled in building dynamic, responsive, and user-centric web applications. With expertise in both front-end and back-end technologies, I craft seamless digital experiences.Let’s bring your ideas to life.`

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if(index<fullText.length){

        setText((prev) => prev + fullText[index]);
        index += 1;
      }

      if (index === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, []);
  return (
    <section id="heroSection" className="hero--section" 
    style={{
      height:"100%"}}
      
      >
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p
            className="section--title"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(2px)",
              transition: "opacity 1s ease, transform 1s ease",
            }}
          >
            Hey, I'm Muhammad Sami
          </p>
          <h1
            className="hero--section--title"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1s ease 0.5s, transform 1s ease 0.5s",
            }}
          >
            <span className="hero--section-title--color">Full Stack</span>
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
           {text}
          </p>
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
      </div>
      <div className="hero--section--img">
      <div
          style={{
            width: "100%",
            
       
            borderRadius: "50%",
            padding: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "border-animation 3s infinite", // Add animation here
          }}
        >
          <img
            src="./me2.png"
            alt="Hero Section"
            style={{
              width: "100%",
              borderRadius: "50%", // Circular image
              animation: "scale-animation 3s infinite", // Add animation here
            }}
          />
        </div>
      </div>
    </section>
  );
}

