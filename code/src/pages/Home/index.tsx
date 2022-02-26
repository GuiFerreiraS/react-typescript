import { Button, Col, Row } from "react-bootstrap";
import Register from "./Register";
import { StyledContainer } from "./Style";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const nav = useNavigate();

  return (
    <StyledContainer>
      <Row>
        <Col>
          <h2>{t("Title")}</h2>
          <div>
            <img
              alt="Halter na academia"
              style={{ borderRadius: "1rem", height: "250px" }}
              src="data:image/jpeg;base64,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"
            />
          </div>
        </Col>
        <Col>
          <Register />
        </Col>
      </Row>

      <Row style={{ marginTop: 100 }}>
        <Col>
          {t("See feedback")}
          <Button
            style={{ marginTop: 8, marginLeft: 0 }}
            onClick={() => nav("/reviews")}
          >
            {t("Click here")}
          </Button>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Home;
