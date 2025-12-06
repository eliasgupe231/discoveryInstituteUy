import { useEffect, useState } from "react";

const useGoogleReviews = (placeId) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/reviews");
        const data = await response.json();
        if (data.result?.reviews) {
          setReviews(data.result.reviews);
        }
      } catch (error) {
        console.error("Error al obtener las reseñas:", error);
      }
    };

    fetchReviews();
  }, [placeId]); // Esto solo se ejecutará si placeId cambia

  return reviews;
};

export default useGoogleReviews;
