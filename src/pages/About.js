import React from 'react';

const about = () => {

  const copyEmail = ()=> {
    const emailText = "ridleyyeh@gmail.com";
    navigator.clipboard.writeText(emailText);
    alert("Email address copied to clipboard: ");
  }





  return (
    <div className="about">
      <h2>About us</h2>
      <p>Welcome to our image search website! We are dedicated to providing high-quality images for your creative projects.</p>
      <p>My mission is to make it easy for you to find the perfect images for your needs. Whether you're a designer, blogger, or content creator, we've got you covered</p>
      <p>If you have any questions, feedback, or suggestions, please don't hesitate to contact us. We'd love to hear from you!</p>
      <p style={{cursor:'pointer'}} onClick={copyEmail}>Email: ridleyyeh@gmail.com (Click to copy)</p>
    </div>
  )
}

export default about