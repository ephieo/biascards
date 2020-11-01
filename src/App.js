import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';

import Card from './components/card';
import Form from './components/form';

function App() {
  const [background, setBackground] = useState('');
  const [name, setName] = useState('');
  const [src, setSrc] = useState('');
  const [description, setDescription] = useState('');
  const [group, setGroup] = useState('');
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  useEffect(() => {
    document.querySelector('#download').addEventListener('click', () => {
      html2canvas(document.querySelector('#export'), {
        logging: true,
        // letterRendering: 1,
        allowTaint: false,
        useCORS: true,
      }).then(function (canvas) {
        console.log(canvas);
        const image = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');
        window.location.href = image; // it will save locally
        // window.saveAs(image.toDataURL(), 'bias.png');
        //hello testing
      });
    });
  }, []);

  return (
    <div className="App">
      <>
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
            <h1>click the form button to create your bias card</h1>
          )}
        </div>
      </>
    </div>
  );
}

export default App;
