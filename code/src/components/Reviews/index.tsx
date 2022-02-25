import { Card } from "react-bootstrap";
import { StyledCard } from "./Style";

interface ReviewCardProps {
  name: string;
  photo_url: string;
  review: string;
}

const ReviewCard = (props: ReviewCardProps) => {
  const { name, photo_url, review } = props;

  return (
    <StyledCard>
      <Card.Img variant="top" src={photo_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{review}</Card.Text>
      </Card.Body>
    </StyledCard>
  );
};

export default ReviewCard;
