import { useForm } from "react-hook-form";
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Button from "react-bootstrap/Button";

function RegisterForm() {
  const { register, formState: { errors }, handleSubmit, watch} = useForm();
  const onSubmit = (data) => {
    const username = data.username;
    const password = data.password;
    const email = data.email;
    const user = {"username": username, "password": password, "email": email}
      fetch('http://localhost:8080/register',{
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
            localStorage.removeItem("User")
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
    <div className="p-5 mb-4 bg-light rounded-3 border">
    <h2>Register</h2>
    <br/>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup className="mb-3">
        <FloatingLabel
            controlId="floatingInput"
            label="Username"
        >
        <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          {...register("username", { required: true, pattern: /^[A-Za-z0-9-]+$/})} 
          aria-invalid={errors.username ? "true" : "false"} 
        />
        {errors.username?.type === 'pattern' && <Form.Text role="alert" style={{color:"Crimson"}}>The username required Latin script, number and -</Form.Text>}
        {errors.username?.type === 'required' && <Form.Text role="alert" style={{color:"Crimson"}}>Username is required</Form.Text>}
        </FloatingLabel>
      </InputGroup>

      <InputGroup className="mb-3">
        <FloatingLabel
            controlId="floatingInput"
            label="Email"
        >
        <Form.Control
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
          {...register("email", { required: true, pattern: /^[a-zA-Z0-9-_]+@[a-zA-Z0-9-_]+(\.[a-zA-Z0-9-_]+)+$/})} 
          aria-invalid={errors.email ? "true" : "false"} 
        />
        {errors.email?.type === 'pattern' && <Form.Text role="alert" style={{color:"Crimson"}}>The email address is written incorrectly</Form.Text>}
        {errors.email?.type === 'required' && <Form.Text role="alert" style={{color:"Crimson"}}>Email is required</Form.Text>}
        </FloatingLabel>
      </InputGroup>

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
          {...register("password", { required: true, pattern: /^[a-zA-Z0-9_]\w{5,}$/ })} 
          aria-invalid={errors.password ? "true" : "false"} 
        />
        {errors.password?.type === 'pattern' && <Form.Text role="alert" style={{color:"Crimson"}}>The password is required the length more than 6, and only Latin script, number and _</Form.Text>}
        {errors.password?.type === 'required' && <Form.Text role="alert" style={{color:"Crimson"}}>Password is required</Form.Text>}
        </FloatingLabel>
      </InputGroup>

      <InputGroup className="mb-3">
        <FloatingLabel
            controlId="floatingInput"
            label="Password Repeat"
        >
        <Form.Control
            placeholder="Password Repeat"
            aria-label="Repeat Repeat"
            aria-describedby="basic-addon1"
            type="password"
          {...register("password_repeat", { required: true,validate: value => value === watch("password") })} 
          aria-invalid={errors.password_repeat ? "true" : "false"} 
        />
        {errors.password_repeat?.type === 'validate' && <Form.Text role="alert" style={{color:"Crimson"}}>The password is not some in two times, please try again</Form.Text>}
        {errors.password_repeat?.type === 'required' && <Form.Text role="alert" style={{color:"Crimson"}}>Password Repeat is required</Form.Text>}
        </FloatingLabel>
      </InputGroup>

      <div>
        <div className="mb-3">
          <Form.Check 
            type={'checkbox'}
            label={`Rules`}
            {...register("rules", { required: true })} 
            aria-invalid={errors.rules ? "true" : "false"} 
          />
          {errors.rules?.type === 'required' && <Form.Text role="alert" style={{color:"Crimson"}}>Rules is required</Form.Text>}
        </div>
      </div>
      
      <Button type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default RegisterForm;