import { Col, Row } from "antd";import { Card } from "antd";
const { Meta } = Card;
const Top = (props) => {
 
  return (
    <Col span={4} className="item">
            <Card 
      style={{ backgroundColor: "#182131",margin:10  }} 

            hoverable
      cover={
        <img
          style={{ height: 320, objectFit: "cover"  }}
          src={`https://image.tmdb.org/t/p/original/${props.item.poster_path}`}
        />
      }
    >
      <Meta title={props.item.title} style={{ backgroundColor: "#182131",color:"white" }}  />
      
            </Card>
          
            </Col>
  );
};
export default Top;
