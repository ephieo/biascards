import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';

import Card from './../components/card';
import Form from './../components/form';

import howto from './../images/howto.png';
// import arrow from './../images/arrow.svg';

export default function Creation() {
  const [background, setBackground] = useState('');
  const [name, setName] = useState('');
  const [src, setSrc] = useState('');
  const [description, setDescription] = useState('');
  const [group, setGroup] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.querySelector('#download').addEventListener('click', () => {
      html2canvas(document.querySelector('#export'), {
        logging: true,
        letterRendering: 1,
        allowTaint: false,
        backgroundColor: 'transparent',
        useCORS: true,
      }).then(function (canvas) {
        console.log(canvas);
        const image = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');
        console.log(image);
        window.location.href = image; // it will save locally
      });
    });
  }, []);

  return (
    <>
      <h1>BIAS CARDS</h1>
      <div className="maincont">
        {/* <a href="#download">
          <img
            src={arrow}
            alt="icon to reroute you to the form"
            className="arrow"
          />
        </a>
        <h2 align="center">CLICK FOR FORM</h2> */}
        <img
          src={howto}
          alt="instructions card for the app"
          className="howto"
        />
        <div className="container">
          <div id="export">
            <Card
              name={name}
              src={src}
              alt={`image of ${name}`}
              description={description}
              background={background}
              imgSrc={src}
              groupName={group}
              download
            ></Card>
          </div>
          <button id="download">Export As PNG</button>
          <button
            onClick={() => (!toggle ? setToggle(true) : setToggle(false))}
          >
            FORM
          </button>
          {toggle ? (
            <Form
              setSrc={setSrc}
              setBack={setBackground}
              setDes={setDescription}
              setGroup={setGroup}
              setName={setName}
            />
          ) : (
            <h2 align="center">
              click the form button to create your bias card
            </h2>
          )}
        </div>
      </div>
    </>
  );
}
