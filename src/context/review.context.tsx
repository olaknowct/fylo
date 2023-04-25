import React, { createContext, useState } from 'react';

export type Review = {
  id: number;
  name: string;
  position: string;
  reviews: string;
};
const reviewsData = [
  {
    id: 1,
    name: 'Satish Patel',
    position: 'Founder & CEO, Huddle',
    reviews:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },

  {
    id: 2,
    name: 'Bruce McKenzie',
    position: 'Founder & CEO, Huddle',
    reviews:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },

  {
    id: 3,
    name: 'Iva Boyd',
    position: 'Founder & CEO, Huddle',
    reviews:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },
];

type ReviewsContextType = {
  reviews: Review[];
};

export const ReviewContext = createContext<ReviewsContextType>({
  reviews: [],
});

export const ReviewProvider = ({ children }: { children: React.ReactNode }) => {
  const [reviews] = useState<Review[]>(reviewsData);

  const value = { reviews };

  return <ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>;
};
