import React, {useRef, useState} from 'react';
import Root from '../components/common/Root';
import ContactForm from '../components/checkout/common/ContactForm';
import Footer from '../components/common/Footer';
import {motion, useElementScroll, useTransform} from 'framer-motion';

export function MyComponent2() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const {scrollYProgress, scrollXProgress} = useElementScroll(ref);
  const scaleHigh = useTransform(scrollYProgress, [0, 0.15, 1, 1], [1, 2, 2, 2]);
  const scaleMid = useTransform(scrollYProgress, [0, 0.3, 1, 1], [1, 3, 3, 3]);
  const scaleLight = useTransform(scrollYProgress, [0, 0.3, 1, 1], [1, 1.2, 1.2, 1.2]);
  const transform = useTransform(scrollYProgress, [0, 0.2, 0.3], ['0%', '0%', '-100%']);
  const transformLight = useTransform(scrollYProgress, [0, 0.2, 0.45], ['0', '30vw', '75vw']);
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  scrollYProgress.onChange(setProgress);
  return (
    <>
      <div ref={ref} style={{height: '200vh', overflow: 'auto'}}>
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '25vh',
            height: '25vh',
            //overflow: 'auto',
            fontSize: 32,
            backgroundImage: 'url("images/Mainbg_light-01.svg")',
            scale: scaleLight,
            y: transformLight,
          }}
        />

        <motion.div
          style={{
            /*            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',*/
            width: '25vh',
            height: '25vh',
            // overflow: 'auto',
            fontSize: 32,
            backgroundImage: 'url("/images/Mainbg_mid-01.svg")',
            scale: scaleMid,
            y: transform,
            //transform3d,
          }}
        />

        <motion.div
          style={{
            /*            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',*/
            width: '25vh',
            height: '25vh',
            // overflow: 'auto',
            fontSize: 32,
            backgroundImage: 'url("/images/MainBG_high-01.svg")',
            scale: scaleHigh,
            y: transform,
            //transform3d,
          }}
        />
      </div>
    </>
  );
}

const HenDoPackage = () => (
  <Root>
    <MyComponent2 />
    <ContactForm withAccommodation={true} />
    <Footer />
  </Root>
);

export default HenDoPackage;
