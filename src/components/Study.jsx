import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ApiService from '../service/ApiService';  // Import the ApiService

function Study() {
  const { subject } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Fetch questions from the API using the subject parameter
    ApiService.getQuestionsBySubject(subject)
      .then((data) => {
        // Log the response to check its structure
        console.log('Fetched data:', data);
        
        // Check if the returned data is an array
        if (Array.isArray(data)) {
          setQuestions(data); // Update state with the questions
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false once the API call completes
      });
  }, [subject]);

  return (
    <Container>
      <h2 className="my-5">Study for {subject}</h2>

      {/* Display loader while data is loading */}
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <ListGroup>
          {/* Ensure 'questions' is an array before trying to map */}
          {Array.isArray(questions) && questions.length > 0 ? (
            questions.map((q, index) => (
              <ListGroup.Item key={q.id}>
                <h5>Q{index + 1}: {q.question}</h5>
                <p>{q.answer}</p> {/* Display the answer as well */}
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>No questions found for this subject.</ListGroup.Item>
          )}
        </ListGroup>
      )}

      <Button href={`/mock-interview/${subject}`} variant="success" className="mt-5">
        Start Mock Interview
      </Button>
    </Container>
  );
}

export default Study;
