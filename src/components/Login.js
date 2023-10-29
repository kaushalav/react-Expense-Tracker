import React from 'react';

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      {/* <form onSubmit={onSubmit}> */}
      <form>
        <div className="form-control" style={{ marginTop: '10px' }}>
          <input type="text" placeholder="Username" />
        </div>
        <div className="form-control" style={{ marginTop: '10px' }}>
          <input type="number" placeholder="Password" />
        </div>
        <button className="btn">Login</button>
      </form>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>Forget Password</p>
        <p>Create Account</p>
      </div>
    </>
  );
}
