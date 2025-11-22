"use client";

import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const tours = [
  {
    title: "Explore Bali",
    image: "/images/tour-bali.jpg",
    desc: "Nikmati keindahan pantai dan budaya Bali dengan paket tour lengkap.",
    price: "2.499.000",
    originalPrice: "3.200.000",
    promo: "22% OFF",
  },
  {
    title: "Japan Autumn Tour",
    image: "/images/tour-japan.jpg",
    desc: "Paket musim gugur terbaik di Tokyo, Kyoto, dan Osaka.",
    price: "12.900.000",
    originalPrice: "15.000.000",
    promo: "14% OFF",
  },
  {
    title: "Singapore Getaway",
    image: "/images/tour-singapore.jpg",
    desc: "Liburan singkat ke negeri modern untuk semua kalangan.",
    price: "4.299.000",
    originalPrice: "5.000.000",
    promo: "15% OFF",
  },
];

export default function WorkSection() {
  return (
    <section className="bg-light py-5">
      <Container>
        {/* Title */}
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <h2 className="fw-bold text-primary">Popular Tours</h2>
            <p className="text-muted fs-6">
              Rekomendasi paket perjalanan terbaik dari HeHeTour untuk Anda.
            </p>
          </Col>
        </Row>

        {/* Tour Cards */}
        <Row>
          {tours.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <div className="position-relative">
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-0 m-2 px-3 py-2 fs-6"
                  style={{ borderRadius: "10px" }}
                >
                  {item.promo}
                </Badge>
              </div>

              <Card className="h-100 shadow-sm border-0 rounded-3 overflow-hidden tour-card">
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "240px", objectFit: "cover" }}
                />

                <Card.Body>
                  <Card.Title className="fw-bold fs-5">{item.title}</Card.Title>
                  <Card.Text className="text-muted">{item.desc}</Card.Text>

                  {/* Price Display */}
                  <div className="mb-3">
                    <span className="text-danger fw-bold fs-4">
                      Rp {item.price}
                    </span>
                    <br />
                    <small className="text-muted text-decoration-line-through">
                      Rp {item.originalPrice}
                    </small>
                  </div>

                  <Button variant="primary" className="w-100 fw-bold">
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
