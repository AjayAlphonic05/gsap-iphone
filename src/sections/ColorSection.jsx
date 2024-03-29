import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  transform: translate(0px, 0px) !important; // pinSpacing adding it own that's why.
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
    
`;
const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
`;
const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
`;

const Center = styled.div`
  position: absolute;
  /* width: 100%; */
  width: auto; // auto cause flex-direction
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);

  font-size: var(--fontxxl);
  text-transform: uppercase;
`;

const ColorSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;
    let rightElem = rightRef.current;
    let leftElem = leftRef.current;
    let textElem = textRef.current;

    let updateColor = (color, text, rgb) => {
      
      console.log(textElem)
      console.log(rightElem)
      console.log(leftElem)


      textElem.innerText = text;
      
      rightElem.style.backgroundColor = `rgba(${rgb}, 0.4)`;
      leftElem.style.backgroundColor = `rgba(${rgb}, 0.8)`;

      console.log(textElem)
      console.log(rightElem)
      console.log(leftElem)
    };

    // Pin the section

    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: 1,
        pinSpacing: 0,
        pin: true,
      },
     
    });

    let t2 = gsap .timeline({
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: 1,
        
        

      },
    }).to(Elem, {
      onUpdate: updateColor,
      onUpdateParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
    })
    .to(Elem, {
      onUpdate: updateColor,
      onUpdateParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
    })
    .to(Elem, {
      onUpdate: updateColor,
      onUpdateParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
    })
    .to(Elem, {
      onUpdate: updateColor,
      onUpdateParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
    })
    .to(Elem, {
      onUpdate: updateColor,
      onUpdateParams: ["#A50011", "Red", "165, 0, 17"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
    })
    .to(Elem, {
      onUpdate: updateColor,
      onUpdateParams: ["#215E7C", "Blue", "33, 94, 124"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
    });

    return () => {};
  }, []);

  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef} />
      <Center ref={textRef}>Sierra Blue</Center>
      <Right ref={rightRef} />
    </Section>
  );
};

export default ColorSection;
