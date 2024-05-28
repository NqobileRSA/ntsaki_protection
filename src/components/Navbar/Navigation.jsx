import React, { useState } from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import Modal from "react-bootstrap/Modal";
import { ContactForm } from "../components";
import { navLinks } from "../../constants";

const Navigation = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="header" className="header d-flex align-items-center ">
      <div className="container-fluid px-2  d-flex align-items-center justify-content-between mt-2 mb-2">
        <Link to={"/"} className="logo d-flex align-items-center">
          <i className="bi bi-shield logo-icon" />
          <h1>NTSAKI PROTECTION</h1>
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            {navLinks.map((nav, index) => (
              <li key={index}>
                <Link
                  to={nav.path}
                  className={
                    nav.path === activeTab
                      ? "active navmenuItem"
                      : "navmenuItem"
                  }
                  onClick={() => handleTabClick(nav.path)}>
                  <span>{nav.label}</span>
                </Link>
              </li>
            ))}
            <li>
              <Button
                className="get-a-quote navbar-toggler"
                variant="link"
                onClick={handleShow}>
                Get Started
              </Button>
            </li>
          </ul>
        </nav>
        <span className="navbar-toggler" onClick={toggle}>
          <i className="bi bi-list" />
        </span>

        <Drawer
          opened={opened}
          onClose={toggle}
          position="right"
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
          className="drawer">
          <ul>
            {navLinks.map((item, index) => (
              <li key={index} className="nav-item">
                <Link to={item.path} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="quoteWrap">
              <Button
                className="get-a-quote"
                variant="link"
                onClick={handleShow}>
                Get a Quote
              </Button>
            </li>
          </ul>
        </Drawer>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Get In Touch</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactForm />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Navigation;
