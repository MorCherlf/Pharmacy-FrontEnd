import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import InputGroup from "react-bootstrap/InputGroup"
import FloatingLabel from "react-bootstrap/FloatingLabel"

function LoginWithModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
      const username = data.username;
      const password = data.password;
      const user = {"username": username, "password": password }
        fetch('http://localhost:8080/login',{
            method:'POST',
            body:JSON.stringify(user),
            headers: {
              'content-type': 'application/json'
            },
        })	
        .then(response => {
          if(response.ok){
            response.json()
            .then(data => {
              let user = {"id": data.id, "username": data.username,}
              localStorage.setItem("User",JSON.stringify(user));
              window.location.reload()
            })
          }else{
            throw new Error('Login Failed');
          }
        })
        .catch(e => console.log(e))
    };

  return (
    <>
      <Nav.Link href="#" onClick={handleShow}>Login</Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Container>
                {/* <!-- Username --> */}
                <InputGroup className="mb-3">
                  <FloatingLabel
                      controlId="floatingInput"
                      label="Username"
                  >
                  <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    {...register("username", { required: true })} 
                    aria-invalid={errors.username ? "true" : "false"} 
                  />
                  {errors.username?.type === 'required' && <Form.Text role="alert" style={{color:"Crimson"}}>Username is required</Form.Text>}
                  </FloatingLabel>
                </InputGroup>

                {/* <!-- Password --> */}
                <InputGroup className="mb-3">
                  <FloatingLabel
                      controlId="floatingInput"
                      label="Password"
                  >
                  <Form.Control
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      type="password"
                    {...register("password", { required: true} )}
                    aria-invalid={errors.password ? "true" : "false"} 
                  />
                  {errors.password?.type === 'required' && <Form.Text role="alert" style={{color:"Crimson"}}>Password is required</Form.Text>}
                  </FloatingLabel>
                </InputGroup>

                {/* <!-- Text --> */}
                <p>Don't have an account? <Link to={"/Register"} onClick={handleClose}>Go to register</Link></p>

                {/* <!-- Button --> */}
                <Button type="submit">
                  Submit
                </Button>

            </Container>
        </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginWithModal;