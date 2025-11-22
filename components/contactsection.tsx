"use client";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ContactSection() {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold text-primary">Contact Us</h2>
        <p className="text-center mb-5 text-muted">
          Have questions or need help? Feel free to reach out to us anytime.
        </p>

        <Row className="g-4">
          {/* Contact Form */}
          <Col md={6}>
            <div
              className="p-4 rounded-3 shadow-sm"
              style={{ backgroundColor: "#ffffff"}}
            >
              <h5 className="mb-4 fw-bold text-dark">Send us a message</h5>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="text-dark">Your Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your name" 
                    className="text-muted"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-dark">Email Address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="name@example.com" 
                    className="text-muted"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-dark">Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Write something..." 
                    className="text-muted"
                  />
                </Form.Group>

                <Button variant="primary" className="w-100 py-2">
                  <i className="bi bi-send-fill me-2"></i>
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* Google Maps */}
          <Col md={6}>
            <div className="rounded overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.717549638529!2d106.78932103950225!3d-6.168563960477188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65c8ffa044f%3A0x6f715cfa0b44194!2sFaculty%20of%20Information%20Technology!5e0!3m2!1sen!2sid!4v1763717051078!5m2!1sen!2sid"
                width="100%"
                height="460"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
