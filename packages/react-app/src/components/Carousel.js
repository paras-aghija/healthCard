import { Carousel } from "antd";

const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default () => (
  <Carousel autoplay>
    <div>
      <img src="https://www.cowin.gov.in/newmodibanner.8f8b11c701eae51c218a.jpg" height={900} width={"100%"} />
    </div>
    <div>
      <img
        src="https://prod-cdn.preprod.co-vin.in/assets/images/Corbevax-Vaccine-Banner-1.jpg"
        height={900}
        // width={"100"}
      />
    </div>
  </Carousel>
);
