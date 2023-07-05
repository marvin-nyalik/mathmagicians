import React, { useEffect, useState } from 'react';
import './Quote.css';

const Quotes = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const quote = await fetch('https://api.api-ninjas.com/v1/quotes?',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': '8m1bnnM+p0GqxgD5kNoIgA==4OYoBSs5rh1rrEan',
            },
          });
        const quoteObj = await quote.json();
        setData(quoteObj[0].quote);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchQuote();
  }, []);

  return (
    <div>
      { data ? <p className="quote">{data}</p> : <p>Loading</p> }
      { error ? <p>{error}</p> : '' }
    </div>
  );
};

export default Quotes;
