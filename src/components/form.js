import React from 'react';

export default function Form({ setSrc, setName, setDes, setBack, setGroup }) {
  return (
    <>
      <form>
        <label htmlFor="background">Set Your background colour:</label>
        <input
          type="text"
          name="background"
          onChange={(event) => setBack(event.target.value)}
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
          onChange={(event) => setDes(event.target.value)}
        />
      </form>
    </>
  );
}
