import { useEffect, useReducer, useState } from 'react';
import { Col, Form, Row, Button, Alert } from 'react-bootstrap';
import { IUser, IUserValidation } from '../../../models/User';
import { useTranslation } from 'react-i18next';

const initialUser: IUser = {
  name: '',
  age: 0,
  photo_url: '',
  review: '',
};

const initialValidation: IUserValidation = {
  name: false,
  age: false,
  photo_url: false,
  review: false,
};

type ReducerTypes =
  | 'SET_NAME'
  | 'SET_AGE'
  | 'SET_PHOTO_URL'
  | 'SET_REVIEW'
  | 'FORM_CLEANUP';

const formReducer = (
  state: { values: IUser; validation: IUserValidation },
  action: { type: ReducerTypes; value: string }
) => {
  if (action.type === 'SET_NAME') {
    let isValid = false;
    if (action.value.trim().length > 5) {
      isValid = true;
    }
    return {
      values: { ...state.values, name: action.value },
      validation: { ...state.validation, name: isValid },
    };
  }
  if (action.type === 'SET_AGE') {
    let isValid = false;
    if (typeof action.value === 'number') {
      isValid = true;
    }
    return {
      values: { ...state.values, age: action.value },
      validation: { ...state.validation, age: isValid },
    };
  }
  if (action.type === 'SET_PHOTO_URL') {
    let isValid = false;
    if (action.value.trim().length > 8) {
      isValid = true;
    }
    return {
      values: { ...state.values, photo_url: action.value },
      validation: { ...state.validation, photo_url: isValid },
    };
  }
  if (action.type === 'SET_REVIEW') {
    let isValid = false;
    if (action.value.trim().length > 10) {
      isValid = true;
    }
    return {
      values: { ...state.values, review: action.value },
      validation: { ...state.validation, review: isValid },
    };
  }
  if (action.type === 'FORM_CLEANUP') {
    return { values: initialUser, validation: initialValidation };
  }

  return state;
};

const Register = () => {
  const { t } = useTranslation();
  const [formState, dispatchForm] = useReducer(formReducer, {
    values: initialUser,
    validation: initialValidation,
  });
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (
      !Object.values(formState.validation).some(
        fieldValidation => !fieldValidation
      )
    )
      setShow(false);
  }, [formState.validation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      Object.values(formState.validation).some(
        fieldValidation => !fieldValidation
      )
    ) {
      setShow(true);
      return;
    }
    const oldUsers: IUser[] = localStorage.getItem('users')
      ? JSON.parse(localStorage.getItem('users')!)
      : [];

    localStorage.setItem(
      'users',
      JSON.stringify([...oldUsers, formState.values])
    );

    dispatchForm({ type: 'FORM_CLEANUP', value: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {show && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          {t('Invalid_Inputs')}
        </Alert>
      )}
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>{t('Name')}</Form.Label>
            <Form.Control
              onChange={e =>
                dispatchForm({ type: 'SET_NAME', value: e.target.value })
              }
              value={formState.values.name}
              isValid={formState.validation.name}
              placeholder={t('Name_Placeholder')}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>{t('Age')}</Form.Label>
            <Form.Control
              type="number"
              onChange={e =>
                dispatchForm({
                  type: 'SET_AGE',
                  value: e.target.value,
                })
              }
              value={formState.values.age}
              isValid={formState.validation.age}
              placeholder={t('Age_Placeholder')}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formPhotoUrl">
            <Form.Label>{t('Photo_Url')}</Form.Label>
            <Form.Control
              onChange={e =>
                dispatchForm({ type: 'SET_PHOTO_URL', value: e.target.value })
              }
              value={formState.values.photo_url}
              isValid={formState.validation.photo_url}
              placeholder={t('Photo_Url_Placeholder')}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formReview">
            <Form.Label>{t('Review')}</Form.Label>
            <Form.Control
              onChange={e =>
                dispatchForm({
                  type: 'SET_REVIEW',
                  value: e.target.value,
                })
              }
              type="textarea"
              value={formState.values.review}
              isValid={formState.validation.review}
              placeholder={t('Review_Placeholder')}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Button type="submit">{t('Send')}</Button>
          </Row>
        </Col>
        <Col>
          <Row>
            <Button
              onClick={() => dispatchForm({ type: 'FORM_CLEANUP', value: '' })}
            >
              {t('Clean')}
            </Button>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default Register;
