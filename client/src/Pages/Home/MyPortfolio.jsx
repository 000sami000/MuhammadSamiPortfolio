import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          {/* <p className="sub--title">Recent Projects</p> */}
          <h2 style={{fontSize:"2rem"}}>Recent Projects</h2>
        </div>
        <div>
          <a className="btn btn-github" href="https://github.com/000sami000" target="blank__">
       
            <img src="./github_logo.png" width={"35px"}/>
            Visit My GitHub
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src}  alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
                <a href={item.link} target="blank_">
              <p className="text-sm portfolio--link">
              View In Github
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                 >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
                </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
