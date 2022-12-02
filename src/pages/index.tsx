import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { whoIAmArr } from "../assets/content";
import wait from "../helpers/wait";
import HorizontalRule from "../components/horizontalrule";
import { skillsRecord } from "../assets/skillSet";
import { Link, PageProps } from "gatsby";
import { useAppDispatch } from "../state/hooks";
import { setIsShown } from "../state/menuButtonSlice";

const Index = ({}: PageProps) => {
  const [whoIAmIndex, setWhoIAmIndex] = useState(0);
  const [iAm, setIAm] = useState("");

  useEffect(() => {
    const timerBase = 200;
    const iAmString = whoIAmArr[whoIAmIndex].iAm;

    const typingEffectAsync = async () => {
      const prepare = async () => {
        for(let i=iAm.length+1; i >= 0; i--) {
          const newString = iAm.substring(0, i);
          setIAm(newString);
          await wait(100);
        }
        await wait(timerBase);
      }
      if (iAm.length > 0) await prepare();
      for(let i=0; i < iAmString.length+1; i++) {
        const newString = iAmString.substring(0, i);
        setIAm(newString);
        await wait(timerBase);
      }
    }

    typingEffectAsync()
      // .then(() => setTimeout(() => setShowDesc(true), timerBase))
      .then(() => setTimeout(() => {
          // setShowDesc(false);
          const newIndex = whoIAmIndex+1;
          if (newIndex < whoIAmArr.length) setWhoIAmIndex(newIndex);
          else setWhoIAmIndex(0);
        }, 5000)
      );
  }, [whoIAmIndex]);

  const dispatch = useAppDispatch();

  return(
    <Layout>
      <h1 className="text-xl text-white">Want to see projects used a specific skill?</h1>
      <div className="text-white flex flex-row justify-start gap-5 my-10 flex-wrap">
      {Object.keys(skillsRecord).map((key) => (
        <Link
          key={key}
          to={`?tag=${key}`}
          className="rounded-full px-4 py-1 border-2 no-underline border-white hover:bg-white hover:text-black active:scale-105 transition-colors duration-300"
          onClick={() => dispatch(setIsShown(true))}
        >
          {skillsRecord[key].title}
        </Link>
      ))}
      </div>
      <HorizontalRule className="my-5" title="OR" />
      <div className="text-white space-y-6">
        <div className="text-4xl font-normal text-neutral-500">Bangawoyo!</div>
        <div className="text-2xl sm:text-4xl font-bold">I'm Jonny,<br />
          <span className="underline whitespace-nowrap">{iAm}</span><span className="animate-blink">|</span>
        </div>
        <div className="text-neutral-600 leading-loose">
          I still remember the moment I created my very first website with Microsoft FrontPage when I was young. 
          I was drawn to and fascinated by the early era of web technology from then. 
          Over the years, web technology has significantly changed, but my passion and love for it haven't diminished. 
          I believe the infinite possibility of the web that has a positive impact on our society by bridging the virtual environment and real life.
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="by Jonny Park" />

export default Index;