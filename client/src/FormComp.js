import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { createPost } from "./actions/post";
import { useDispatch } from "react-redux";

const FormComp = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const addPost = (event) => {
    dispatch(createPost({ email, password }));
    event.preventDefault();
  };
  return (
    <Container>
      <Form onSubmit={addPost}>
        <FormGroup>
          <Label for="email">Email</Label>

          <Input
            type="email"
            name="email"
            id="email"
            placeholder="with a placeholder"
            onChange={emailHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>

          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={passwordHandler}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default FormComp;
