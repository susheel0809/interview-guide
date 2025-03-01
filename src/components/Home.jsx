import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Home() {
  const navigate = useNavigate();

  // Handle button click to navigate to the desired route
  const handleNavigate = (subject, isMockInterview = false) => {
    // Construct the base route based on whether it's for study or mock interview
    const baseRoute = isMockInterview ? '/mock-interview' : '/study';
    // Use query parameters to pass the subject
    navigate(`${baseRoute}/${subject}`);
  };
  

  return (
    <div>
      <Container className="my-5">
        {/* Section 1: Are you preparing for an interview? */}
        <div className="mb-5">
          <h2 className="text-center mb-4" style={{ fontSize: '2rem', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
            Are you preparing for an interview?
          </h2>
          <p className="text-center mb-4" style={{ fontSize: '1.2rem' }}>
            Choose a subject to study and get ready for your interview.
          </p>

          <Row>
            <Col sm={12} md={6} lg={4} className="mb-4">
              <Button
                variant="primary"
                className="w-100 p-5"
                onClick={() => handleNavigate('spring-boot')}
              >
                Spring Boot
              </Button>
            </Col>
            <Col sm={12} md={6} lg={4} className="mb-4">
              <Button
                variant="success"
                className="w-100 p-5"
                onClick={() => handleNavigate('Java')}
              >
                Java
              </Button>
            </Col>
            <Col sm={12} md={6} lg={4} className="mb-4">
              <Button
                variant="warning"
                className="w-100 p-5"
                onClick={() => handleNavigate('python')}
              >
                Python
              </Button>
            </Col>
          </Row>
        </div>

        {/* Section 2: Are you looking for a mock interview? */}
        <div>
          <h2 className="text-center mb-4" style={{ fontSize: '2rem', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
            Are you looking for a mock interview?
          </h2>
          <p className="text-center mb-4" style={{ fontSize: '1.2rem' }}>
            Choose your subject for the mock interview.
          </p>

          <Row>
            {/* Spring Boot Mock Interview Tile */}
            <Col sm={12} md={6} lg={4} className="mb-4">
              <Button
                variant="primary"
                className="w-100 p-5 d-flex align-items-center justify-content-center"
                onClick={() => handleNavigate('spring-boot', true)}
              >
                <img
                  src="/images/spring-boot-logo.png" // Replace with actual image URL
                  alt="Spring Boot"
                  style={{ maxWidth: '50px', marginRight: '10px' }}
                />
                Spring Boot
              </Button>
            </Col>

            {/* Java Mock Interview Tile */}
            <Col sm={12} md={6} lg={4} className="mb-4">
              <Button
                variant="success"
                className="w-100 p-5 d-flex align-items-center justify-content-center"
                onClick={() => handleNavigate('Java', true)}
              >
                <img
                  src="https://example.com/java-image-url.jpg" // Replace with actual image URL
                  alt="Java"
                  style={{ maxWidth: '50px', marginRight: '10px' }}
                />
                Java
              </Button>
            </Col>

            {/* Python Mock Interview Tile */}
            <Col sm={12} md={6} lg={4} className="mb-4">
              <Button
                variant="warning"
                className="w-100 p-5 d-flex align-items-center justify-content-center"
                onClick={() => handleNavigate('python', true)}
              >
                <img
                  src="https://example.com/python-image-url.jpg" // Replace with actual image URL
                  alt="Python"
                  style={{ maxWidth: '50px', marginRight: '10px' }}
                />
                Python
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Home;
