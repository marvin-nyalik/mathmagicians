import React, { useEffect, useState } from 'react';
import QuoteCSS from './Quote.module.css';

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
  }, [setData, setError]);

  return (
    <div className={QuoteCSS.container}>
      { data ? <p className={QuoteCSS.quote}>{data}</p>
        : <p className={QuoteCSS.loading}>Loading...</p> }
      { error && <p className={QuoteCSS.error}>{error}</p> }
    </div>
  );
};

export default Quotes;
