import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { Card } from "antd";
import Head from "../com/header.js";
import Top from "../com/top.js";
import Carousel from 'react-bootstrap/Carousel'
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

      }),
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=8b412fb81a88421b5ad16e24454ddcd9"
      )
        .then((resp) => resp.json())
        .then((result) => {
          setPop(result.results);
      
        }),
        fetch(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=8b412fb81a88421b5ad16e24454ddcd9"
        )
          .then((resp) => resp.json())
          .then((result) => {
            setUp(result.results);
           
          })
]
    
    );
  }, []);
  return (
    <>
    <body>
  <Head/>
        <Carousel>
      
              {top.map((item, index) => (
                <Carousel.Item key={index} >
               <img
                 className="d-block w-100"
                 src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                 alt="First slide"
               />
               <div className="overlay"></div>
               <Carousel.Caption className="cap">
                 <h3>{item.title}</h3>
               <p>{item.popularity}</p>
               </Carousel.Caption>
               </Carousel.Item>
                   ))}
          
            
    </Carousel>
  
  
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
    </>
  );
};
export default Home;

//src={"https:image.tmdb.org/t/p/original/${item.poster_path}"}
