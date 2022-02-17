import { IReview } from '../models/Review';
import api from '../utils/api';

export async function getReviews(): Promise<IReview[]> {
  const response = await api.get('/reviews');
  return response.data;
}
