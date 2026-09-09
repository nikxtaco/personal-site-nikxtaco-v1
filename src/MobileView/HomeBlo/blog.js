import React, { useState } from "react";

import "./blog.css";
import Writings from "../../DesktopView/HomeBlo/Writings";

export default function Blog() {

  const [postOpen, setPostOpen] = useState(false);

  const customSummary = {
    width: "80vw",
    height: "1px",
    marginLeft: "10vw",
    marginBottom: "5vh",
    background: "linear-gradient(to right, white 50%, rgb(255, 255, 255, 0.3) 50%)",
    backgroundSize: "200% 100%",
  };

  return (
    <div>
      <div id="blog" className="main_blog_container">
        <div className="songcircle_picture_mobile"></div>

        <div className="hey_text_div_mobile">
          <h1 className="hey_text_mobile">Blog</h1>
          <div style={customSummary}></div>
          <h2 className="hey_desc_mobile">Sometimes,</h2>
          <h2 className="hey_desc_mobile">I write.</h2>
        </div>

        <a href="#bloglist">
          <div className="about_button_mobile2">BROWSE</div>
        </a>
        <a href="https://instagram.com/cryptic.tales" target="_blank" rel="noreferrer">
          <div className="about_button_mobile2">INSTAGRAM</div>
        </a>
        <a href="https://medium.com/@nikitamenon2510" target="_blank" rel="noreferrer">
          <div className="about_button_mobile2">MEDIUM</div>
        </a>
      </div>

      <div id="bloglist" className="bloglist_container bloglist_m">
        <div className="bloglist_content_new">
          {!postOpen && (
            <>
              <h3 className="blog_heading_label">- Blog</h3>
              <h1 className="blog_writings_title">Writings</h1>
              <p className="blog_intro">
                The start of a collection of short posts that I've authored, across various domains. Some here, some off-site. Sorted by last updated. This list does not include my poetry pieces from <a className="blog_intro_link" href="https://instagram.com/cryptic.tales" target="_blank" rel="noreferrer">Instagram</a> or mid work from <a className="blog_intro_link" href="https://medium.com/@nikitamenon2510" target="_blank" rel="noreferrer">Medium</a>.
              </p>
            </>
          )}
          <Writings onOpenChange={setPostOpen} />
        </div>
      </div>
    </div>
  );
}
