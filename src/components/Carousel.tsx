'use client';

import { Flex } from '@/once-ui/components';
import { useEffect, useState } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
  interval?: number; // Optional prop for controlling transition timing
}

export const Carousel = ({
  children,
  interval = 5000, // Default to 5 seconds
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [children.length, interval]);

  return (
    <>
      {children.map((child, index) => (
        <Flex
          key={`carousel-item-${index}`}
          style={{
            // border: '1px dotted gray',
            position: "absolute",
            width: "100%",
            opacity: currentIndex === index ? 1 : 0,
            transform: `translateY(${(index - currentIndex) * 100}%)`,
            transition: "all 0.5s ease-in-out"
          }}
        >
          {child}
        </Flex>
      ))}
    </>
  );
};
