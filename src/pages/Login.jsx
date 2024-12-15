import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
// import { SignUpForm } from '../components/SignUpForm';
// import { FinancialTips } from '../components/FinincialTips';
import { SignInForm } from '../components/SignInForm';
const Login= ()=> {
  return (
    <Container className='p-5'>
      <Row className="bg-dark  p-5 rounded">
        
        <Col md={6}><SignInForm/></Col>
        <Col md={6}><div className='d-flex flex-column justify-content-center' style={{height:"100%",}}>
          <div className='text-danger text-decoration-line-through'>{""}<FaArrowTrendDown />Reduce your Expenses</div>
          <div className='text-success'>{""}<FaArrowTrendUp />Increase your income</div>
          </div></Col>
      </Row>
    </Container>
  )
}

export default Login;