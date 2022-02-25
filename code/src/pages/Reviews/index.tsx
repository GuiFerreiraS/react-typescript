import React, { useEffect, useState } from 'react';
import { Col, CardGroup, Button, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery } from '@apollo/client';
import { IReview } from '../../models/Review';
import { LOAD_REVIEWS } from '../../graphql/Queries';
import { CREATE_REVIEW_MUTATION } from '../../graphql/Mutation';
import ReviewCard from '../../components/Reviews';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState<IReview[]>([]);
  const nav = useNavigate();

  const { data, loading, error } = useQuery(LOAD_REVIEWS);
  const [createAluno, { error: err }] = useMutation(CREATE_REVIEW_MUTATION);

  useEffect(() => {
    if (data) {
      setReviews(data.getAllReviews);
    }
  }, [data]);

  return (
    <div style={{ color: '#fca71c' }}>
      <h4> {t('Reviews')}</h4>
      <CardGroup>
        {reviews?.slice(0, reviews?.length).map(review =>
          Math.random() < 0.5 ? (
            <Col key={review.id} className="mx-2 my-1">
              <ReviewCard
                review={review.review}
                name={review.name}
                photo_url={review.photo_url}
              />
            </Col>
          ) : (
            <React.Fragment key={review.id} />
          )
        )}
      </CardGroup>
      <Row className="mt-5">
        <Button
          style={{ marginTop: 8, marginLeft: 0 }}
          onClick={() => nav('/')}
        >
          Voltar
        </Button>
      </Row>
    </div>
  );
};

export default Reviews;