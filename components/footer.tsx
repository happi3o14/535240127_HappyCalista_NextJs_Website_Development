"use client";

import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="text-white pt-5 bg-primary">
      <Container>
        <Row className="gy-4">

          {/* Brand + Description */}
          <Col md={4}>
            <h4 className="fw-bold">HeHeTour</h4>
            <p className="text-light">
              Solusi perjalanan terbaik untuk liburan, tour keluarga, dan paket wisata
              internasional. Kami selalu berkomitmen memberikan pengalaman terbaik.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#work" className="text-light text-decoration-none">
                  Tours
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h5 className="fw-bold mb-3">Contact Info</h5>

            <p className="mb-2 text-light">
              <i className="bi bi-geo-alt-fill me-2"></i>
              Fakultas Teknologi Informasi, UNTAR
            </p>

            <p className="mb-2 text-light">
              <i className="bi bi-telephone-fill me-2"></i>
              +62 812 3456 7890
            </p>

            <p className="mb-2 text-light">
              <i className="bi bi-envelope-fill me-2"></i>
              support@hehe-tour.com
            </p>

            {/* Social Icons */}
            <div className="mt-3">
              <a href="#" className="text-light me-3 fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light me-3 fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light mt-4" />

        {/* Copyright */}
        <div className="text-center pb-3">
          <p className="mb-0 text-light">
            © {new Date().getFullYear()} HeHeTour | All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
