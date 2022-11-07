import React from 'react'
import Marquee from "react-double-marquee";
import { fetchNews } from "../utils/fetchNews";
import { useEffect, useState } from "react";

function News() {
    const [newsTitles, setNewsTitles] = useState("");

    useEffect(() => {
        (async function () {
          const result = await fetchNews();
          setNewsTitles(
            result.data.articles.reduce((acc, el) => acc + el.title + "⠀⠀⠀⠀⠀⠀⠀⠀","⠀⠀⠀")
          );
        })();
      }, []);
    
  return (
    <Marquee direction="left" delay={0}>
              {newsTitles}
            </Marquee>
  )
}

export default React.memo(News);
