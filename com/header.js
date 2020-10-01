import { Input, Row, Col } from "antd";
import { SearchOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { OmitProps } from "antd/lib/transfer/ListBody";
import AwesomeSlider from "react-awesome-slider";
const { Search } = Input;
const Head = (props) => {
  return (
    <>
      <header className="container">
        <Row>
          <Col span={16}>
            <img src="images/cover.svg" />
          </Col>
          <Col span={8}>
            <Input
              size="large"
              placeholder="Find Move..."
              suffix={<SearchOutlined />}
            />
          </Col>
        </Row>
      </header>

    </>
  );
};
export default Head;
//  <h1>{props.item.title}</h1>
