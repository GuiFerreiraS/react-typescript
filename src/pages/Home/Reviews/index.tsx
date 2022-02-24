import { useEffect, useState } from 'react';
import { Col, CardGroup } from 'react-bootstrap';
import ReviewCard from '../../../components/Reviews';
import { IReview } from '../../../models/Review';
import { getReviews } from '../../../services/reviews';
import { useTranslation } from 'react-i18next';

const Reviews = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState<IReview[]>([]);

  const fetchReviews = () => {
    getReviews()
      .then(res => {
        setReviews(res);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      <h4> {t('Reviews')}</h4>
      <CardGroup>
        {reviews?.slice(0, 10).map(review => (
          <Col key={review.id} className="mx-2 my-1">
            <ReviewCard
              review={review.review}
              name={review.name}
              photo_url={review.photo_url}
            />
          </Col>
        ))}
      </CardGroup>
    </>
  );
};

export default Reviews;
