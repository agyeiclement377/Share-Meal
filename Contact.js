import React from 'react';
import { Container } from 'react-bootstrap';
import AppNavbar from './mainnav';

function ContactUs() {
    return (
        <>
            <AppNavbar />
            <div className="bg-dark text-light min-vh-100 d-flex align-items-center justify-content-center">
                <Container>
                    <div className="footer bg-light text-dark p-4 rounded text-center">
                        <h1>Contact Us:</h1>
                        <p>Phone: +233593596889</p>
                        <p>Email: sharemeal@gmail.com</p>
                        <p>&copy; 2024 ShareMeal. All rights reserved.</p>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default ContactUs;
