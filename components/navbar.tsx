"use client";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Link from "next/link";

export default function Navigation() {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-3">
          <span className="text-orange">HeHe</span>
          <span className="text-cyan">Tour</span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto gap-3 align-items-lg-center text-center">
            <Link href="/" passHref className="nav-link fw-semibold">
              Home
            </Link>
            <Link href="#about" passHref className="nav-link fw-semibold">
              About
            </Link>
            <Link href="#services" passHref className="nav-link fw-semibold">
              Services
            </Link>
            <Link href="#contact" passHref className="nav-link fw-semibold">
              Contact
            </Link>
            <Button variant="primary" className="px-4 mt-lg-0">
              Book Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
