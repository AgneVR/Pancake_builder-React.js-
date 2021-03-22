import React, { useState } from 'react';
import { SingleInput, UiAlert } from '../../components/formComponents';
import api from '../../helpers/api';
import img from '../../images/logopancake.png';
import './index.scss';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [lastName, setlastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [alertShow, setAlertShow] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (name, value) => {
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'city') {
      setCity(value);
    } else if (name === 'country') {
      setCountry(value);
    } else if (name === 'lastName') {
      setlastName(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'repeatPassword') {
      setRepeatPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    setAlertMessage('');
    setAlertType('');
    setAlertShow(false);

    if (repeatPassword !== password) {
      setAlertMessage('password do not match');
      setAlertType('error');
      setAlertShow(true);
    } else {
      let formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('password', password);

      api.register(formData).then(function(response) {
        if (response.data.token) {
          setAlertMessage('user created');
          setAlertType('success');
          setAlertShow(true);
        } else {
          setAlertMessage(response.data.error);
          setAlertType('error');
          setAlertShow(true);
        }
      });
    }
  };

  function formAlert() {
    if (alertShow === true) {
      return <UiAlert text={alertMessage} type={alertType} />;
    }
  }

  return (
    <div className='All-register'>
      <h2>Member Register</h2>
      <div className='Register'>
        <img src={img} alt='logo pancake' />
        {formAlert()}
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <div className='flex--left'>
              <SingleInput
                name='firstName'
                type='text'
                required={true}
                value={firstName}
                onChange={handleChange}
                placeholder='First name: '
              />
              <SingleInput
                name='email'
                type='email'
                required={true}
                value={email}
                onChange={handleChange}
                placeholder='Email: '
              />
              <SingleInput
                name='city'
                type='text'
                required={true}
                value={city}
                onChange={handleChange}
                placeholder='City: '
              />
              <SingleInput
                name='country'
                type='text'
                required={true}
                value={country}
                onChange={handleChange}
                placeholder='Country: '
              />
            </div>
            <div className='flex--right'>
              <SingleInput
                name='lastName'
                type='text'
                required={true}
                value={lastName}
                onChange={handleChange}
                placeholder='Last name: '
              />
              <SingleInput
                name='phone'
                type='phone'
                required={true}
                value={phone}
                onChange={handleChange}
                placeholder='Phone: '
              />
              <SingleInput
                name='password'
                type='password'
                required={true}
                value={password}
                onChange={handleChange}
                placeholder='Password: '
              />
              <SingleInput
                name='repeatPassword'
                type='password'
                required={true}
                value={repeatPassword}
                onChange={handleChange}
                placeholder='Repeat password: '
              />
            </div>
          </div>
          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
