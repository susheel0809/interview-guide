import React, { useState, useEffect } from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MockInterview() {
  const { subject } = useParams();
  const [questions, setQuestions] = useState([]);
  const [mockQuestions, setMockQuestions] = useState([]);

  useEffect(() => {
    axios.get(`https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?subject=${subject}`)
      .then((response) => {
        setQuestions(response.data);
        const selectedQuestions = [];
        while (selectedQuestions.length < 5) {
          const randomIndex = Math.floor(Math.random() * response.data.length);
          if (!selectedQuestions.includes(response.data[randomIndex])) {
            selectedQuestions.push(response.data[randomIndex]);
          }
        }
        setMockQuestions(selectedQuestions);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  }, [subject]);

  return (
    <Container>
      <h2 className="my-5">Mock Interview - {subject}</h2>
      <ListGroup>
        {mockQuestions.map((q, index) => (
          <ListGroup.Item key={index}>
            <h5>Q{index + 1}: {q.question}</h5>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="primary" className="mt-5">Submit Answers</Button>
    </Container>
  );
}

export default MockInterview;
