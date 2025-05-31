import React from "react";

function FeaturedArticles() {
  return (
    <div className="Article-section">
      <div className="box1">
        <div className="para-section">
          <h2>Featured Articles</h2>
          <p>
            In the featured articles section of this blog, you’ll find a variety
            of featured content including free tutorials, product reviews, press
            releases, tips & tricks, and other helpful information.
          </p>
        </div>
        <button>View All Articles</button>
      </div>
      <div className="box2">
        <div>
          <img src="/image6-beach.jpg" alt="Image is loading" />
          <h3>Famous Places To Visit In Goa</h3>
          <p>
            Goa is one of the most famous and visited places in India. We know
            how famous the beaches of Goa are worldwide. Over millions
          </p>
          <a href="">Read More</a>
        </div>
        <div>
          <img src="/image4-issues.jpg" alt="Image is loading" />
          <h3>Socio-Cultural Issues In India</h3>
          <p>
            India is a country of a variety of cultures and religions. The
            integrity through which Indians follow their culture can be rarely
            seen in
          </p>
          <a href="">Read More</a>
        </div>
        <div>
          <img src="image1-city.jpg" alt="Image is Loading" />
          <h3>Socio-Cultural Issues In India</h3>
          <p>
            India is a land of cultural heritage. Every state and city has its
            roots in the cultural history of India. In terms of development
          </p>
          <a href="">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedArticles;
