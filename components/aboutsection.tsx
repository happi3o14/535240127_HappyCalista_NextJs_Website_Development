"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Container id="about" className="my-5 p-4 bg-light rounded-3 shadow-sm">
      <Row className="align-items-center">
        <Col md={6} className="mb-4">
          <h2 className="fw-bold text-primary">About HeHeTour</h2>
          <h6 className="text-secondary mb-3">Your Trusted Travel Partner</h6>
          <p className="par-wrapper text-muted">
            HeHeTour adalah penyedia layanan perjalanan yang berfokus pada pengalaman
            wisata terbaik. Kami menawarkan paket tur domestik & internasional, private
            tour, akomodasi, hingga pengalaman liburan personal.
          </p>
          <Button variant="primary" size="lg" className="mt-2">
            Learn More
          </Button>
        </Col>

        <Col md={6}>
          <Image
            src="/images/about.jpg"
            alt="HeHeTour About"
            width={600}
            height={400}
            className="rounded shadow-sm w-100"
          />
        </Col>
      </Row>
    </Container>
  );
}
