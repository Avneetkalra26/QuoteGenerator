import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import style from './CssModule/Quote.module.css';
import axios from 'axios';

export default function App() {
  const [color, setColor] = useState("#0f0f0f");
  const [quotes, setQuotes] = useState("Nothing happens unless first we dream.");
  const [author, setAuthor] = useState("Carl Sandburg");
  const [quoteArray, setArray] = useState([]);

  const bgColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    setQuotes(quoteArray[randomIndex].text);
    setAuthor(quoteArray[randomIndex].author);
  }

  useEffect(() => {
    setTimeout(() => {
      const newColor = bgColor();
      setColor(newColor);
    }, 3000);
  });

  useEffect(() => {
    axios.get("https://type.fit/api/quotes").then((res) => {
      setArray(res.data);
    })
  },[])
  return (
    <>
      <div className={style.root}
        style={{ backgroundColor: color, transition: "background-color 2s" }}>
        <QuoteCard h={handleClick} a={author} q={quotes} />
      </div>
    </>
  );
}
