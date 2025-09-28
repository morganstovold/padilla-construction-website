// https://github.com/Austin1serb/portfolio-austin-serb/blob/main/app/utils/lazy-ui.tsx#L6

"use client";

import { domAnimation, LazyMotion } from "motion/react";
import * as motion from "motion/react-m";

export const MotionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion strict features={domAnimation}>
      {children}
    </LazyMotion>
  );
};

export const MotionDiv = motion.div;
export const MotionSpan = motion.span;
export const MotionH2 = motion.h2;
export const MotionArticle = motion.article;
export const MotionLi = motion.li;
export const MotionUl = motion.ul;
export const MotionCircle = motion.circle;
export const MotionSvg = motion.svg;
export const MotionPath = motion.path;
export const MotionH1 = motion.h1;
export const MotionP = motion.p;
export const MotionButton = motion.button;
