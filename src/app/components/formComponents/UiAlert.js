import React from 'react';
import './index.scss';

function UiAlert({ text, type }) {
  if (text === 'user_with_this_name_and_surname_exists') {
    text = 'user with this name and surname exists';
  } else if (text === 'user_name_is_required') {
    text = 'user name is required';
  } else if (text === 'user_surname_is_required') {
    text = 'user last name is required';
  } else if (text === 'user_email_is_required') {
    text = 'user email is required';
  } else if (text === 'invalidCredentials') {
    text = 'invalid login information';
  }

  return (
    <div className={`alert-${type || 'info'}`}>
      <div>{text}</div>
    </div>
  );
}

export default UiAlert;
