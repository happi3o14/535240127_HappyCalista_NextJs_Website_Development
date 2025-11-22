"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const services = [
  {
    title: "Paket Tour Domestik",
    icon: "bi-geo-alt-fill",
    desc: "Paket perjalanan lengkap ke destinasi wisata dalam negeri dengan harga terjangkau.",
  },
  {
    title: "Private Trip",
    icon: "bi-people-fill",
    desc: "Nikmati pengalaman liburan privat yang dirancang khusus untuk Anda.",
  },
  {
    title: "Hotel & Akomodasi",
    icon: "bi-building-fill",
    desc: "Pemesanan hotel terbaik dengan harga partner dan fasilitas unggulan.",
  },
  {
    title: "Transport & Rental",
    icon: "bi-car-front-fill",
    desc: "Sewa mobil, bus pariwisata, hingga layanan antar-jemput bandara.",
  },
  {
    title: "Passport & Visa",
    icon: "bi-passport",
    desc: "Layanan pengurusan passport dan visa untuk negara tujuan Anda.",
  },
  {
    title: "Corporate & Group Tour",
    icon: "bi-briefcase-fill",
    desc: "Paket perjalanan untuk perusahaan, outing, sampai family gathering.",
  },
];

export default function ServiceSection() {
  return (
    <section id="services" className="py-5 bg-white">
      <Container>
        {/* Title */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold text-primary">Our Services</h2>
            <p className="text-muted">
              Layanan terbaik dari HeHeTour untuk memenuhi kebutuhan perjalanan Anda.
            </p>
          </Col>
        </Row>

        {/* Services */}
        <Row>
          {services.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm border-0 rounded-4 p-3 service-card text-center">
                <div className="icon-wrapper bg-primary bg-opacity-10 text-primary rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3"
                  style={{ width: "70px", height: "70px" }}>
                  <i className={`${item.icon} fs-2`} />
                </div>

                <Card.Body>
                  <Card.Title className="fw-bold fs-5 mb-2">{item.title}</Card.Title>
                  <Card.Text className="text-muted">{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="my-4" />
    </section>
  );
}
