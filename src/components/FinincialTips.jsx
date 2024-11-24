import React, { useEffect, useState } from 'react'
const financialTips = [
    {
      tip: "Start saving early to take advantage of compound interest.",
      quote: "An investment in knowledge pays the best interest.",
      expert: "Benjamin Franklin"
    },
    {
      tip: "Focus on the value of an asset, not just the price.",
      quote: "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
      expert: "Philip Fisher"
    },
    {
      tip: "Save first, spend later. Prioritize savings before expenses.",
      quote: "Do not save what is left after spending, but spend what is left after saving.",
      expert: "Warren Buffett"
    },
    {
      tip: "Understand what you're investing in to mitigate risk.",
      quote: "Risk comes from not knowing what you're doing.",
      expert: "Warren Buffett"
    },
    {
      tip: "Look for long-term growth instead of short-term comfort.",
      quote: "In investing, what is comfortable is rarely profitable.",
      expert: "Robert Arnott"
    },
    {
      tip: "Be cautious of market trends that seem too good to be true.",
      quote: "The four most dangerous words in investing are: 'This time it's different.'",
      expert: "Sir John Templeton"
    },
    {
      tip: "Act as a long-term investor, not a speculator.",
      quote: "The individual investor should act consistently as an investor and not as a speculator.",
      expert: "Ben Graham"
    },
    {
      tip: "Know the reason behind each of your investments.",
      quote: "Know what you own, and know why you own it.",
      expert: "Peter Lynch"
    },
    {
      tip: "Patience pays off; avoid impulsive trading decisions.",
      quote: "The stock market is a device for transferring money from the impatient to the patient.",
      expert: "Warren Buffett"
    },
    {
      tip: "Think long-term and build wealth over time.",
      quote: "Someone's sitting in the shade today because someone planted a tree a long time ago.",
      expert: "Warren Buffett"
    },
    {
      tip: "Find passive income sources to build wealth while you sleep.",
      quote: "If you don’t find a way to make money while you sleep, you will work until you die.",
      expert: "Warren Buffett"
    },
    {
      tip: "Taking calculated risks is essential to growth.",
      quote: "The biggest risk of all is not taking one.",
      expert: "Mellody Hobson"
    },
    {
      tip: "Investing is a slow process; don’t expect excitement.",
      quote: "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
      expert: "Paul Samuelson"
    }
  ];


export const FinancialTips = () => {
const [showQuote, setShowQuote]=useState(financialTips[0]);

useEffect(()=>{
  setInterval(()=>{
setShowQuote(financialTips[Math.floor(Math.random()*financialTips.length)]
);
  },3000);
},[]);

const {tip, quote, expert} = showQuote;

  return (
    <div className='d-flex flex-column justify-content-center' style={{height:"100%",}}>
        <h4>{tip}</h4>
        <div className="fw-bolder">
            {quote}-{expert}
        </div>
    </div>
  );
};
