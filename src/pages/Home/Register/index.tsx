import { useEffect, useReducer, useState } from "react";
import { Col, Form, Row, Button, Alert } from "react-bootstrap";
import { IUser, IUserValidation } from "../../../models/User";

const initialUser: IUser = {
  name: "",
  lastName: "",
  email: "",
  password: "",
};

const initialValidation: IUserValidation = {
  name: false,
  lastName: false,
  email: false,
  password: false,
};

type ReducerTypes =
  | "SET_NAME"
  | "SET_LAST_NAME"
  | "SET_EMAIL"
  | "SET_PASSWORD"
  | "FORM_CLEANUP";

const formReducer = (
  state: { values: IUser; validation: IUserValidation },
  action: { type: ReducerTypes; value: string }
) => {
  if (action.type === "SET_NAME") {
    let isValid = false;
    if (action.value.trim().length > 5) {
      isValid = true;
    }
    return {
      values: { ...state.values, name: action.value },
      validation: { ...state.validation, name: isValid },
    };
  }
  if (action.type === "SET_LAST_NAME") {
    let isValid = false;
    if (action.value.trim().length > 5) {
      isValid = true;
    }
    return {
      values: { ...state.values, lastName: action.value },
      validation: { ...state.validation, lastName: isValid },
    };
  }
  if (action.type === "SET_EMAIL") {
    let isValid = false;
    if (action.value.trim().length > 8) {
      isValid = true;
    }
    return {
      values: { ...state.values, email: action.value },
      validation: { ...state.validation, email: isValid },
    };
  }
  if (action.type === "SET_PASSWORD") {
    let isValid = false;
    if (action.value.trim().length > 8) {
      isValid = true;
    }
    return {
      values: { ...state.values, password: action.value },
      validation: { ...state.validation, password: isValid },
    };
  }
  if (action.type === "FORM_CLEANUP") {
    return { values: initialUser, validation: initialValidation };
  }

  return state;
};

const Register = () => {
  const [formState, dispatchForm] = useReducer(formReducer, {
    values: initialUser,
    validation: initialValidation,
  });
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (
      !Object.values(formState.validation).some(
        (fieldValidation) => !fieldValidation
      )
    )
      setShow(false);
  }, [formState.validation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      Object.values(formState.validation).some(
        (fieldValidation) => !fieldValidation
      )
    ) {
      setShow(true);
      return;
    }
    const oldUsers: IUser[] = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users")!)
      : [];

    localStorage.setItem(
      "users",
      JSON.stringify([...oldUsers, formState.values])
    );

    dispatchForm({ type: "FORM_CLEANUP", value: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {show && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          Existem campos inválidos!
        </Alert>
      )}
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              onChange={(e) =>
                dispatchForm({ type: "SET_NAME", value: e.target.value })
              }
              value={formState.values.name}
              isValid={formState.validation.name}
              placeholder="Entre com seu nome"
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control
              onChange={(e) =>
                dispatchForm({
                  type: "SET_LAST_NAME",
                  value: e.target.value,
                })
              }
              value={formState.values.lastName}
              isValid={formState.validation.lastName}
              placeholder="Entre com seu sobrenome"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              onChange={(e) =>
                dispatchForm({ type: "SET_EMAIL", value: e.target.value })
              }
              value={formState.values.email}
              isValid={formState.validation.email}
              placeholder="Entre com seu E-mail"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) =>
                dispatchForm({
                  type: "SET_PASSWORD",
                  value: e.target.value,
                })
              }
              type="password"
              value={formState.values.password}
              isValid={formState.validation.password}
              placeholder="Senha"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Button type="submit">Enviar</Button>
          </Row>
        </Col>
        <Col>
          <Row>
            <Button
              onClick={() => dispatchForm({ type: "FORM_CLEANUP", value: "" })}
            >
              Limpar
            </Button>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default Register;
