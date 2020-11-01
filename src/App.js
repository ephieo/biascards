import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';

import Card from './components/card';
// import singer from './images/do4.jpeg';

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
            <form>
              <label htmlFor="background">Set Your background colour:</label>
              <input
                type="text"
                name="background"
                onChange={(event) => setBackground(event.target.value)}
              />
              <label htmlFor="name">Enter your bias' name:</label>
              <input
                type="text"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
              <label htmlFor="group">Enter Your Bias' Group Name:</label>
              <input
                type="text"
                name="group"
                onChange={(event) => setGroup(event.target.value)}
              />
              <label htmlFor="src">
                Enter your image address to see your beautiful bias:
              </label>
              <input
                type="url"
                name="src"
                onChange={(event) => setSrc(event.target.value)}
              />

              <label htmlFor="description">
                Describe your fave Idol or write a loving message or even your
                favourite lyric?
              </label>
              <textarea
                type="textarea"
                name="description"
                onChange={(event) => setDescription(event.target.value)}
              />
            </form>
          ) : (
            <h1>click the form button to create your bias card</h1>
          )}
        </div>
      </>
    </div>
  );
}

export default App;
