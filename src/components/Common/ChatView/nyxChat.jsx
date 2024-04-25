import React, { useEffect, useState } from "react";
import TextAnimation from "./textAnimation";
import jsonData from './chatData.json';

const NyxChat = ({text}) => {
  const [chatData, setJsonData] = useState(null);

  if(text == 'binance.com')
    useEffect(() => {
        setJsonData(jsonData.binance);
    }, []);
  else if(text == 'bybit.com')
    useEffect(() => {
      setJsonData(jsonData.bybit);
  } , []);
  return (
    <div>
      {chatData &&
        <div>
          <TextAnimation detail={{text:'Most recent Youtube Channels promoting ['}} />
          <TextAnimation detail={{text:`${text}` , style: '#48A7FF'}} />
          <TextAnimation detail={{text:']:'}} /> <br />
          <TextAnimation detail={{text: '[Adv Capital Academy 4h ago 2.3k] subscriber' }} /> <br />
          <TextAnimation detail={{text: '[FREENAN 16h ago 64] subscriber' }} /> <br />
          <TextAnimation detail={{text: '[Crypto With James 1d ago 59.7k] subscriber' }} /> <br />
          <TextAnimation detail={{text:'Since 2024-01-01 '}} />
          <TextAnimation detail={{text:`${text}` , style: '#48A7FF'}} />
          <TextAnimation detail={{text:' is trusted by 571 Youtube Channels with a total of [22.1M] subscriber.'}} /> <br />
          <TextAnimation detail={{text: 'It has been shared in [15499 Videos] gaining over [23.1M] views.' }} /> <br />
          <TextAnimation detail={{text:'The most viewed video promoting ['}} />
          <TextAnimation detail={{text:`${text}` , style: '#48A7FF'}} />
          <TextAnimation detail={{text:'] is [youtubelink].'}} /> <br />
          <TextAnimation detail={{text:'Please send me any other website to analyze.'}} />
        </div>
      }
    </div>
  );
}

export default NyxChat;
