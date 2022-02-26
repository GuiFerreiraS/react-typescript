import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { StyledCard } from "./Style";

interface ReviewCardProps {
  name: string;
  photo_url: string;
  review: string;
  age: string;
  textColor?: string;
}

const ReviewCard = (props: ReviewCardProps) => {
  const { t } = useTranslation();
  const { name, photo_url, review, age, textColor } = props;

  return (
    <StyledCard style={{ color: textColor }}>
      <Card.Img variant="top" src={photo_url} />
      <Card.Body>
        <Card.Title>{`${name} - ${age} ${t("years")}`}</Card.Title>
        <Card.Text>{review}</Card.Text>
      </Card.Body>
    </StyledCard>
  );
};

export default ReviewCard;
