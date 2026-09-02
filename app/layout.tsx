import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";

import { Providers } from "@/components/Providers";
import { fonts } from "@/resources/fonts";
import { themeInitConfig } from "@/resources/once-ui.config";
import { baseURL, meta } from "@/resources/seo";
import {
  Column,
  Flex,
  Mask,
  MatrixFx,
  Meta,
  Schema,
  ThemeInit,
} from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: meta.home.title,
    description: meta.home.description,
    baseURL,
    path: meta.home.path,
    canonical: meta.home.canonical,
    image: meta.home.image,
    robots: meta.home.robots,
    alternates: meta.home.alternates,
  });
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={`${fonts.heading.variable} ${fonts.body.variable} ${fonts.label.variable} ${fonts.code.variable}`}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />
      <head>
        <ThemeInit config={themeInitConfig} />
      </head>
      <Providers>
        <Column as="body" background="page" fillWidth margin="0" padding="0">
          <Column
            fillWidth
            maxHeight="100dvh"
            aspectRatio="1"
            horizontal="center"
            position="absolute"
            top="0"
            left="0"
          >
            <Mask maxWidth="m" x={50} y={0} radius={50}>
              <MatrixFx
                size={1.5}
                spacing={5}
                fps={24}
                colors={["brand-solid-strong"]}
                flicker
              />
            </Mask>
          </Column>
          {children}
        </Column>
      </Providers>
    </Flex>
  );
}
