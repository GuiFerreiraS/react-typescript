import { Card } from "react-bootstrap";

interface ReviewCardProps {
  name: string;
  photo_url: string;
  review: string;
}

const ReviewCard = (props: ReviewCardProps) => {
  const { name, photo_url, review } = props;

  return (
    <Card>
      <Card.Img variant="top" src={photo_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{review}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
