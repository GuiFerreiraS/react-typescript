import { Col, CardGroup, Button, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ReviewCard from "../../components/ReviewCard";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Reviews = () => {
  const { t } = useTranslation();
  const { reviews } = useAppContext();
  const nav = useNavigate();

  return (
    <div style={{ color: "#fca71c" }}>
      <h4> {t("Reviews")}</h4>
      <CardGroup>
        {reviews?.map((review) => (
          <Col key={review.id} className="mx-2 my-1" style={{ maxWidth: 200 }}>
            <ReviewCard
              review={review.review}
              name={review.name}
              photo_url={review.photo_url}
              age={review.age.toString()}
            />
          </Col>
        ))}
      </CardGroup>
      <Row className="mt-5">
        <Button
          style={{ marginTop: 8, marginLeft: 0 }}
          onClick={() => nav("/")}
        >
          {t("Back")}
        </Button>
      </Row>
    </div>
  );
};

export default Reviews;
