import {ChangeEvent, useCallback, useState} from 'react';

type RatingType = (event: ChangeEvent<HTMLInputElement>) => void;
type ReviewType = (event: ChangeEvent<HTMLTextAreaElement>) => void;

const useAddReviewStates = (): [RatingType, ReviewType, boolean, string, string] => {
  const [comment, setReview] = useState<string>('');
  const [rating, setRating] = useState<string>('');

  const isFormInvalid = Boolean(rating === undefined || comment.length < 50);

  const handleRatingChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setRating(event.target.value), []);
  const handleSetReview = (event: ChangeEvent<HTMLTextAreaElement>) => setReview(event.target.value);

  return [handleRatingChange, handleSetReview, isFormInvalid, comment, rating];
};

export {useAddReviewStates};
