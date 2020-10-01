import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { Card } from "antd";
import Head from "../com/header.js";
import Top from "../com/top.js";
const { Meta } = Card;
const Home = () => {
  const [top, setTop] = useState([]);
  const [pop, setPop] = useState([]);
  const [up, setUp] = useState([]);
  useEffect(() => {
    Promise.all ([  fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=8b412fb81a88421b5ad16e24454ddcd9"
    )
      .then((resp) => resp.json())
      .then((result) => {
        setTop(result.results);
        //console.log(result.results.backdrop_path);
      }),
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=8b412fb81a88421b5ad16e24454ddcd9"
      )
        .then((resp) => resp.json())
        .then((result) => {
          setPop(result.results);
          //console.log(result.results.backdrop_path);
        }),
        fetch(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=8b412fb81a88421b5ad16e24454ddcd9"
        )
          .then((resp) => resp.json())
          .then((result) => {
            setUp(result.results);
            //console.log(result.results.backdrop_path);
          })
]
    
    );
  }, []);
  return (
    <body>
      <Head />
      <div className="container ">
        <Row className="title">
          <Col span={22}>
            <h1>Top Rate</h1>
          </Col>
          <Col span={2}>
            <p>. . .</p>{" "}
          </Col>
        </Row>
    </div>
        <div className="slide">
          {top.map((item, index) => (
            <Top key={index} item={item} />
          ))}
        </div>
        <div className="container ">
        <Row className="title">
          <Col span={22}>
            <h1>Must Popular</h1>
          </Col>
          <Col span={2}>
            <p>. . .</p>
          </Col>
        </Row>
        </div>
       
        <div className="slide">
          {pop.map((item, index) => (
            <Top key={index} item={item} />
          ))}
        </div>
        <div className="container ">
        <Row className="title">
          <Col span={22}>
            <h1>Up Coming</h1>
          </Col>
          <Col span={2}>
            <p>. . .</p>
          </Col>
        </Row>
        </div>
        <div className="slide">
          {up.map((item, index) => (
            <Top key={index} item={item} />
          ))}
        </div>
  
    </body>
  );
};
export default Home;

//src={"https:image.tmdb.org/t/p/original/${item.poster_path}"}
