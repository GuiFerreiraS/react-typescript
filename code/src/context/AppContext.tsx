import React, { useContext, useEffect, useState } from "react";
import { IReview } from "../models/Review";
import { useQuery } from "@apollo/client";
import { LOAD_REVIEWS } from "../graphql/Queries";

interface IAppContext {
  reviews: IReview[];
  setReviews: (reviews: IReview[]) => void;
}

export const AppContext = React.createContext<IAppContext>({
  reviews: [],
  setReviews: () => {},
});

export const AppContextProvider = (props: { children: React.ReactNode }) => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const { data } = useQuery(LOAD_REVIEWS);

  useEffect(() => {
    if (data) {
      setReviews(data.getAllReviews);
    }
  }, [data]);

  return (
    <AppContext.Provider
      value={{
        reviews,
        setReviews,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
