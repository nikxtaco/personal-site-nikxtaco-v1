import React from "react"

import "./team.css"

import Navbar from "./components/transition1/navbar/navbar.js"


const SecondPage = () => (
  <div className="team_page">

      <Navbar />

    <div id="intro">
    <p>alrt.ai started almost accidentally following a reddit post on /r/datascience. Long story short, Adarsh was looking for a data science use case for a final year project, Claus saw it, replied, and it took off from there. Adarsh pulled together the founding team and we're working on customising scenarios for news feed analytics to combine and rank stories related to different kinds of entities, then give you alerts, trends, notifications or whatever works for you. In any case, it won't be conventional.</p>
    </div>

    <div id="about">

      <div id="row1">
      <div id="contain1">
        <div className="person1"></div>
        <h2>Claus Murmann</h2>
        <h3>CEO</h3>
        <h4>Claus has had a career in IT since back in the 90s, ranging from building the first web app in a European investment bank, through supporting various  commodities trading teams building analytics and trading solutions and most recently venturing into the data science space. He was a senior sales analytics lead at the largest US investment bank and has now moved into risk analytics.</h4>
      </div>

      <div id="contain2">
      <div className="person2"></div>
      <h2>Adarsh S</h2>
      <h3>CTO</h3>
      <h4>Adarsh loves working with data and adores coding in Python which he used to succeed in various remote programs by building back-end and Data Engineering Architectures like Google Summer of Code and Google Code-In. He also worked as a Data Scientist building cool ML products in a Series A product start-up with 3 Million MAU  and wrote a popular python library. He also has a borderline crazy obsession with rock music.</h4>
      </div>

      <div id="contain3">
      <div className="person3"></div>
      <h2>Shahul ES</h2>
      <h3>CDSO</h3>
      <h4>Shahul is a Kaggle Master and is ranked in top 25 among 100K+ Kaggle users. He has 4+ years of acquaintance in the field Data Science and multi-year experience working as a Data Scientist in top start-ups. He  loves contributing and competing in Data science & ML competitions and platforms. He also loves to spend time with AI experts and enjoys public speaking.</h4>
      </div>

      </div>

      <div id="row2">

      <div id="contain4">
      <div className="person4"></div>
      <h2>Tino Thayil</h2>
      <h3>COO</h3>
      <h4>Tino began his entrepreneurial journey in his sophomore year of college by cofounding an AR based Learning platform called Arvy. He has also worked on the product for a successful android application on Google playstore. He loves building products out of ideas and competing in Hackathons and pitching competitions. He is an avid tech enthusiast who is always looking out for new technologies and using it to innovate current products.</h4>
      
      </div>

      <div id="contain6">
      <div className="person6"></div>
      <h2>Ameen Azeez</h2>
      <h3>Head of UI/UX</h3>
      <h4>Ameen is a passionate designer and developer. He started out by designing posters, and later started working on designing and developing websites and applications. He loves participating in contests and won a few hackathons and designing contests.  He also has a eye for photography.</h4>
      
      </div>

      </div>

    </div>
    </div>

)

export default SecondPage

/*<span>
<img src="" alt=""/>
<img src="" alt=""/>
<img src="" alt=""/>
</span>
*/