"use client";

import {
  BlockQuote,
  Carousel,
  Column,
  Heading,
  Text,
} from "@once-ui-system/core";

import {
  experienceContent,
  testimonialAttribution,
  testimonialQuoteVariant,
} from "@/resources/experience";

function quoted(text: string) {
  return `\u201C${text}\u201D`;
}

export function ExperienceTestimonials() {
  const { testimonials } = experienceContent;

  return (
    <Column fillWidth gap="16">
      <Heading as="h2" variant="heading-strong-m">
        {testimonials.title}
      </Heading>
      <Carousel
        fillWidth
        aspectRatio="auto"
        indicator="line"
        controls={false}
        border="transparent"
        radius="none"
        play={{ auto: true, interval: 5000 }}
        items={testimonials.items.map((item) => {
          const attribution = testimonialAttribution(item.author);

          return {
            slide: (
              <Column
                fillWidth
                center
                paddingY="8"
                paddingX="8"
                minHeight={testimonials.slideMinHeight}
              >
                <BlockQuote
                  align="center"
                  separator="both"
                  marginY="16"
                  {...attribution}
                >
                  <Text
                    as="span"
                    variant={testimonialQuoteVariant(item.quote)}
                    wrap="balance"
                  >
                    {quoted(item.quote)}
                  </Text>
                </BlockQuote>
              </Column>
            ),
          };
        })}
      />
    </Column>
  );
}
