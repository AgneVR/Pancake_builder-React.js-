import React, { useState } from 'react';
import { SingleInput, UiAlert } from '../../components/formComponents';
import api from '../../helpers/api';
import img from '../../images/logopancake.png';
import { ROUTES } from '../../../constants';
import './index.scss';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [alertShow, setAlertShow] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (name, value) => {
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    setAlertMessage('');
    setAlertType('');
    setAlertShow(false);

    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    api.login(formData).then(function(response) {
      if (response.status === 200) {
        if (response.data.token) {
          localStorage.setItem('userToken', response.data.token);
          window.location = ROUTES.pancakeBuilder;
        }
      } else {
        setAlertMessage(response.data.error);
        setAlertType('error');
        setAlertShow(true);
      }
    });
  };

  function formAlert() {
    if (alertShow === true) {
      return <UiAlert text={alertMessage} type={alertType} />;
    }
  }

  return (
    <div className='All-login'>
      <h2>Member Login</h2>
      <div className='Login'>
        <img src={img} alt='logo pancake' />
        {formAlert()}
        <form onSubmit={handleSubmit}>
          <SingleInput
            name='email'
            type='email'
            required={true}
            value={email}
            onChange={handleChange}
            placeholder='Email: '
            min={2}
          />
          <SingleInput
            name='password'
            type='password'
            required={true}
            value={password}
            onChange={handleChange}
            placeholder='Password: '
            min={4}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
