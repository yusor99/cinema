
import { useState, useEffect } from "react";
import Head from "../com/header.js";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=8b412fb81a88421b5ad16e24454ddcd9"
    )
      .then((resp) => resp.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <body>
      <Head />
      <div className="info">
        {
          data.map((item,index )=>(
          <h1 key="index">{item}</h1>
          
          ))
        }
      </div>
    </body>

  );
};
export default Home;

