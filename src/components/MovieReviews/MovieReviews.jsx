import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReview } from 'themoviedbOrgAPI/themoviedbOrgAPI';
import Box from 'components/Box';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviewData, setReviewData] = useState();

  useEffect(() => {
    fetchMovieReview(movieId)
      .then(setReviewData)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <Box as="ul" p="30px">
      {reviewData && reviewData.length > 0 ? (
        reviewData.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <h3>We don't have any reviews for this movie.</h3>
      )}
    </Box>
  );
};

export default MovieReviews;
