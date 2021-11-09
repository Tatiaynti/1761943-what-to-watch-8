type ReviewForm = {
  rating: string,
  comment: string,
}

type Review = ReviewForm & {
  id: string,
  user: User,
  date: Date,
}

type User = {
  id: string,
  name: string,
}

export type {ReviewForm, Review, User};
