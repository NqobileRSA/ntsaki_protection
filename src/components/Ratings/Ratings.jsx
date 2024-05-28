import React, { useEffect } from "react";

const Ratings = () => {
  useEffect(() => {
    // This effect will run once when the component mounts
    const script = document.createElement("script");
    script.id = "EmbedSocialHashtagScript";
    script.src = "https://embedsocial.com/cdn/ht.js";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.getElementById("EmbedSocialHashtagScript").remove();
    };
  }, []);

  return (
    <div className="container">
      <div className="section-header">
        <span>What People Say About us</span>
        <h2>What People Say About us</h2>
      </div>
      <div
        className="embedsocial-hashtag "
        data-ref="86d7c7e5bfdc7cab39f47f69251a6f4f52e3b37c">
        <a
          className="feed-powered-by-es feed-powered-by-es-slider-img"
          href="https://embedsocial.com/blog/embed-google-reviews/"
          target="_blank"
          title="Embed Google reviews">
          <img
            src="https://embedsocial.com/cdn/images/embedsocial-icon.png"
            alt="EmbedSocial"
          />
          Embed Google reviews
        </a>
      </div>
    </div>
  );
};

export default Ratings;
