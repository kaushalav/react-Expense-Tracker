import React from 'react';

export default function SignUp() {
  return (
    <>
      <h1>SignUp</h1>
      {/* <form onSubmit={onSubmit}> */}
      <form>
        <div className="form-control" style={{ marginTop: '10px' }}>
          <input type="text" placeholder="First Name" />
        </div>
        <div className="form-control" style={{ marginTop: '10px' }}>
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-control" style={{ marginTop: '10px' }}>
          <input type="number" placeholder="Email" />
        </div>
        <div className="form-control" style={{ marginTop: '10px' }}>
          <input type="number" placeholder="Phone Number" />
        </div>
        <div className="form-control" style={{ marginTop: '10px' }}>
          <input type="number" placeholder="Password" />
        </div>
        <div className="form-control" style={{ marginTop: '10px' }}>
          <input type="number" placeholder="Confirm Password" />
        </div>
        <button className="btn">Sign Up</button>
      </form>
    </>
  );
}
