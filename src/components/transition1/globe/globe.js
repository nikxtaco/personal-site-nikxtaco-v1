
    import React from 'react';
    import {useState, useRef, useEffect} from 'react'
    import ReactDOM from 'react-dom'
    import Globe from 'react-globe.gl';
    import axios from 'axios'
    import globeimg from "../../../media/texture4.png"
import "./globe.css"

    
    const World = () => {
      const globeEl = useRef();
      const [countries, setCountries] = useState({ features: []});
      const [altitude, setAltitude] = useState(0.1);
      const [transitionDuration, setTransitionDuration] = useState(1000);
      const [autoRotate, setAutoRotate] = useState(true);
  //const [newsCount, setNewsCount] = useState([]);
  
  useEffect(() => { //api.alrt.ai/api/v1/viz/globedata
    axios.get("https://api.alrt.ai/api/v1/viz/globedata") //jsonplaceholder.typicode.com/todos/1
    //.then(res => setNewsCount(res.data))
    .then(res => console.log(res))
  });

  /*
  const display_newsCount = newsCount.map(newsCounts => {
    return (
      <div>
        hey {newsCounts.name}
      </div>
    )
  })*/

  
     
    useEffect(() => {
        // load data
        fetch('../datasets/ne_110m_admin_0_countries.geojson').then(res => res.json())
          .then(countries=> {
            setCountries(countries);
  
            setTimeout(() => {
                setTransitionDuration(2000);
                setAltitude(() => feat => Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 1e-5)); //7e-5
              }, 3000);
            });
        }, []);
  
  
        useEffect(() => {
          // Auto-rotate
          if(autoRotate === true)
          globeEl.current.controls().autoRotate = true;
          else
          globeEl.current.controls().autoRotate = false;
          globeEl.current.controls().autoRotateSpeed = 1;
          //globeEl.current.onZoom = () => {};
          globeEl.current.pointOfView({ altitude: 2.5 }, 5000);
        }, [autoRotate]);
            
        return (
          <div className="container" style={{'margin':'0'}}>
            <div onMouseLeave={() => {setAutoRotate(true) }} className="main" >
              <div>
                <Globe
                  showAtmosphere={false}
                  backgroundColor={'#5B43EF'} //#0a0b29
                  pointsMerge={false}
                  onPolygonClick={({properties : polygon}) => `
                    <b>${polygon.ADMIN}</b><br/>
                  `} 
                  onPolygonHover={(e) => `
                    ${setAutoRotate(true)}
                  `}
                  onMouseLeave={() => setAutoRotate(true)}
                  ref={globeEl}
                  globeImageUrl={globeimg}
                  polygonsData={countries.features}
                  polygonAltitude={altitude}
                  polygonCapColor={() => "rgba(255, 255, 255, " +  Math.max(0.5, (Math.floor(Math.random() * 10 + 1))/10).toString() + ")"}
                  polygonSideColor={() => 'rgba(255, 255, 255 ,0.01)'}
                  polygonLabel={({ properties: d }) => `
                    <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
                    News Count: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>  
                  `}
                  polygonsTransitionDuration={transitionDuration}
                />
              </div>
            
            </div>
            </div>
        )
      };
  

ReactDOM.render(<World />, document.getElementById('root'));

//ReactDOM.render(<Globe pointsData={myData} />, document.getElementById('root'));

export default World;