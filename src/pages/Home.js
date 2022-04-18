import React from 'react';
import { Link } from "react-router-dom";
import { Tabs } from 'antd';

import { library } from '../helpers/albumList';

import "./Home.css";

const { TabPane } = Tabs;

const Home = () => {
  return(
    <>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="FEATURED" key="1">
          <h1 className="featuredTitle">
            Today is the day
          </h1>
          <div className="albums">
            {
              library.map((element, i) => (
                <Link to="/album"
                  key={i} 
                  state={element}
                  className="albumSelection">
                  <img src={element.image}
                    alt="album"
                    style={{ width: "150px", marginBottom: "10px" }}></img>
                  <p>{element.title}</p>
                </Link>
              ))
            }
          </div>
        </TabPane>
        <TabPane tab="GENRES & MOODS" key="2">
          <h1 className="featuredTitle">
            Pop Hits
          </h1>
          <div className="albums">
            {
              library.slice(7, 13).map((element, i) => (
                <Link to="/album"
                  key={i} 
                  state={element}
                  className="albumSelection">
                  <img src={element.image}
                    alt="album"
                    style={{ width: "150px", marginBottom: "10px" }}></img>
                  <p>{element.title}</p>
                </Link>
              ))
            }
          </div>
          <h1 className="featuredTitle">
            Top Hits
          </h1>
          <div className="albums">
            {
              library.slice(5, 11).map((element, i) => (
                <Link to="/album"
                  key={i} 
                  state={element}
                  className="albumSelection">
                  <img src={element.image}
                    alt="album"
                    style={{ width: "150px", marginBottom: "10px" }}></img>
                  <p>{element.title}</p>
                </Link>
              ))
            }
          </div>
          <h1 className="featuredTitle">
            Country
          </h1>
          <div className="albums">
            {
              library.slice(0, 6).map((element, i) => (
                <Link to="/album"
                  key={i} 
                  state={element}
                  className="albumSelection">
                  <img src={element.image}
                    alt="album"
                    style={{ width: "150px", marginBottom: "10px" }}></img>
                  <p>{element.title}</p>
                </Link>
              ))
            }
          </div>
          <h1 className="featuredTitle">
            Classics
          </h1>
          <div className="albums">
            {
              library.slice(5, 11).map((element, i) => (
                <Link to="/album"
                  key={i} 
                  state={element}
                  className="albumSelection">
                  <img src={element.image}
                    alt="album"
                    style={{ width: "150px", marginBottom: "10px" }}></img>
                  <p>{element.title}</p>
                </Link>
              ))
            }
          </div>
        </TabPane>
        <TabPane tab="NEW RELEASES" key="3">
          <h1 className="featuredTitle">
            New Releases
          </h1>
          <div className="albums">
            {
              library.map((element, i) => (
                <Link to="/album"
                  key={i} 
                  state={element}
                  className="albumSelection">
                  <img src={element.image}
                    alt="album"
                    style={{ width: "150px", marginBottom: "10px" }}></img>
                  <p>{element.title}</p>
                </Link>
              ))
            }
          </div>
        </TabPane>
      </Tabs>
    </>
)
}

export default Home;
