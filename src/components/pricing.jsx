"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Button, Badge, Modal, Form, Alert } from "react-bootstrap"
import { FaCheckCircle, FaTimesCircle, FaCrown, FaHospital, FaRocket } from "react-icons/fa"
import "./pricing.css"

const Pricing = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [formData, setFormData] = useState({
    hospitalName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "credit",
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "₹9,999",
      period: "per month",
      icon: <FaHospital className="plan-icon" />,
      color: "#007bb5",
      features: [
        { name: "Up to 10 doctor profiles", included: true },
        { name: "Basic analytics dashboard", included: true },
        { name: "Email support", included: true },
        { name: "Patient appointment management", included: true },
        { name: "Custom hospital profile", included: true },
        { name: "Priority listing", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Marketing tools", included: false },
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: "₹24,999",
      period: "per month",
      icon: <FaCrown className="plan-icon" />,
      color: "#033f63",
      popular: true,
      features: [
        { name: "Up to 50 doctor profiles", included: true },
        { name: "Advanced analytics dashboard", included: true },
        { name: "Priority email & phone support", included: true },
        { name: "Patient appointment management", included: true },
        { name: "Custom hospital profile", included: true },
        { name: "Priority listing", included: true },
        { name: "Marketing tools", included: true },
        { name: "Dedicated account manager", included: false },
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "₹49,999",
      period: "per month",
      icon: <FaRocket className="plan-icon" />,
      color: "#00a3e0",
      features: [
        { name: "Unlimited doctor profiles", included: true },
        { name: "Enterprise analytics dashboard", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "Patient appointment management", included: true },
        { name: "Custom hospital profile", included: true },
        { name: "Priority listing", included: true },
        { name: "Advanced marketing tools", included: true },
        { name: "Dedicated account manager", included: true },
      ],
    },
  ]

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan)
    setShowModal(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.hospitalName.trim()) errors.hospitalName = "Hospital name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    if (!formData.phone.trim()) errors.phone = "Phone number is required"
    if (!formData.address.trim()) errors.address = "Address is required"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Here you would typically handle the payment processing
      // For demo purposes, we'll just show a success message
      setShowModal(false)
      setShowSuccess(true)

      // Reset form
      setFormData({
        hospitalName: "",
        email: "",
        phone: "",
        address: "",
        paymentMethod: "credit",
      })

      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }
  }

  return (
    <Container className="pricing-container py-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="pricing-title">Hospital Subscription Plans</h1>
          <p className="pricing-subtitle">
            Choose the perfect plan for your hospital and start connecting with patients today
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {plans.map((plan) => (
          <Col key={plan.id} md={4} className="mb-4">
            <Card
              className={`pricing-card h-100 ${plan.popular ? "popular" : ""}`}
              style={{ borderTopColor: plan.color }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Badge bg="warning" text="dark">
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card.Header className="text-center" style={{ backgroundColor: plan.color, color: "white" }}>
                {plan.icon}
                <h3 className="plan-name">{plan.name}</h3>
              </Card.Header>

              <Card.Body>
                <div className="price-container text-center mb-4">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>

                <ul className="feature-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className={feature.included ? "included" : "excluded"}>
                      {feature.included ? (
                        <FaCheckCircle className="feature-icon included" />
                      ) : (
                        <FaTimesCircle className="feature-icon excluded" />
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </Card.Body>

              <Card.Footer className="text-center bg-white border-0">
                <Button
                  variant="primary"
                  size="lg"
                  className="subscribe-btn"
                  style={{ backgroundColor: plan.color, borderColor: plan.color }}
                  onClick={() => handleSubscribe(plan)}
                >
                  Subscribe Now
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col className="text-center">
          <h3>Need a custom plan?</h3>
          <p>Contact our sales team for a tailored solution that meets your specific requirements.</p>
          <Button variant="outline-primary" size="lg">
            Contact Sales
          </Button>
        </Col>
      </Row>

      {/* Subscription Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe to {selectedPlan?.name} Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Hospital Name</Form.Label>
              <Form.Control
                type="text"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleInputChange}
                isInvalid={!!formErrors.hospitalName}
              />
              <Form.Control.Feedback type="invalid">{formErrors.hospitalName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                isInvalid={!!formErrors.email}
              />
              <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                isInvalid={!!formErrors.phone}
              />
              <Form.Control.Feedback type="invalid">{formErrors.phone}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Hospital Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                isInvalid={!!formErrors.address}
              />
              <Form.Control.Feedback type="invalid">{formErrors.address}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Payment Method</Form.Label>
              <Form.Select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange}>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="netbanking">Net Banking</option>
                <option value="upi">UPI</option>
              </Form.Select>
            </Form.Group>

            <div className="subscription-summary mt-4 p-3 bg-light rounded">
              <h5>Subscription Summary</h5>
              <p>
                <strong>Plan:</strong> {selectedPlan?.name}
              </p>
              <p>
                <strong>Price:</strong> {selectedPlan?.price} {selectedPlan?.period}
              </p>
              <p>
                <strong>Billing:</strong> Monthly, auto-renewal
              </p>
            </div>

            <div className="d-grid gap-2 mt-4">
              <Button variant="primary" type="submit">
                Complete Subscription
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Success Alert */}
      {showSuccess && (
        <Alert
          variant="success"
          className="subscription-success-alert"
          onClose={() => setShowSuccess(false)}
          dismissible
        >
          <Alert.Heading>Subscription Successful!</Alert.Heading>
          <p>
            Thank you for subscribing to our {selectedPlan?.name} plan. You will receive a confirmation email shortly
            with all the details.
          </p>
        </Alert>
      )}
    </Container>
  )
}

export default Pricing

