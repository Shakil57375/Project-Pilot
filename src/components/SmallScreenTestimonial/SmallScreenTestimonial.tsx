import "./SmallScreenTestimonial.css";
const SmallScreenTestimonial = () => {
  return (
    <div>
      <div className="container  block lg:hidden">
        <input type="radio" name="nav" id="first" defaultChecked />
        <input type="radio" name="nav" id="second" />
        <input type="radio" name="nav" id="third" />

        <label htmlFor="first" className="first"></label>
        <label htmlFor="second" className="second"></label>
        <label htmlFor="third" className="third"></label>

        <div className="one slide">
          <blockquote>
            <span className="leftq quotes">&ldquo;</span> He promptly completed
            the task at hand and communicates really well until the project
            reaches the finishing line. I was pleased with his creative design
            and will definitely be hiring him again.{" "}
            <span className="rightq quotes">&bdquo; </span>
          </blockquote>
          <img
            src="https://www.learnreligions.com/thmb/5B70pr7ttQFsiCCa3VTXAx2w0BQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-873732398-5a69eab71d6404001aaace5f.jpg"
            width="170"
            height="130"
            alt="Testimonial Image"
          />
          <h2>King Sufian</h2>
          <h6>UI/UX Designer at Woof Design Studio</h6>
        </div>

        <div className="two slide">
          <blockquote>
            <span className="leftq quotes">&ldquo;</span> He promptly completed
            the task at hand and communicates really well until the project
            reaches the finishing line. I recommend him to anyone who wants
            their work done professionally. The project ...{" "}
            <a href="#">read more</a>
            <span className="rightq quotes">&bdquo; </span>
          </blockquote>
          <img
            src="https://media.istockphoto.com/id/464565934/photo/smiling-south-asian-bearded-male.jpg?s=612x612&w=0&k=20&c=uKyudyjQOAiqccBZ73UTgC944AA26iY1Z4VADwKmNH0="
            width="170"
            height="130"
            alt="Testimonial Image"
          />
          <h2>Salman Rahman</h2>
          <h6>Developer Relations at Woof Studios</h6>
        </div>

        <div className="three slide">
          <blockquote>
            <span className="quotes leftq"> &ldquo;</span> He promptly completed
            the task at hand and communicates really well until the project
            reaches the finishing line. I was pleased with his creative design
            and will definitely be hiring him again.{" "}
            <span className="rightq quotes">&bdquo; </span>
          </blockquote>
          <img
            src="https://cdn.shopify.com/s/files/1/0038/4584/9152/files/1080-x-628.jpg?v=1604565893"
            width="170"
            height="130"
            alt="Testimonial Image"
          />
          <h2>Zakariya Khan</h2>
          <h6>CEO Woof Web Design Studios</h6>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenTestimonial;
