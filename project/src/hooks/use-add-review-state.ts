import {ChangeEvent, useCallback, useState} from 'react';

const useAddReviewStates = (): any => {
  const [comment, setReview] = useState('');
  const [rating, setRating] = useState('');

  const isFormInvalid = Boolean(rating === undefined || comment.length < 50);

  const handleRatingChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setRating(event.target.value), []);
  const handleSetReview = (event: ChangeEvent<HTMLTextAreaElement>) => setReview(event.target.value);

  return [handleRatingChange, handleSetReview, isFormInvalid, comment, rating];
};

export {useAddReviewStates};
