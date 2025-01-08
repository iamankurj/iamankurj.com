import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from 'classnames';
import { Metadata } from "next";
import { headers } from "next/headers";

import { baseURL, meta, og, schema, style } from "@/config/config";

import { Background, Flex } from '@/once-ui/components';

import { Inter, Roboto_Mono } from 'next/font/google';

const primary = Inter({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
})

const code = Roboto_Mono({
  variable: '--font-code',
  subsets: ['latin'],
  display: 'swap',
});

type FontConfig = {
  variable: string;
};

/*
  Replace with code for secondary and tertiary fonts
  from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
*/

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host");
  const metadataBase = host ? new URL(`https://${host}`) : undefined;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: og.title,
      description: og.description,
      type: og.type as
        | "website"
        | "article"
        | "book"
        | "profile"
        | "music.song"
        | "music.album"
        | "music.playlist"
        | "music.radio_station"
        | "video.movie"
        | "video.episode"
        | "video.tv_show"
        | "video.other",
      url: 'https://' + baseURL,
      images: [{
        url: og.image,
        width: 1200,
        height: 630,
        alt: og.title
      }],
      siteName: og.site_name
    },
    metadataBase,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      as="html" lang="en"
      background="page"
      data-neutral={style.neutral} data-brand={style.brand} data-accent={style.accent}
      data-solid={style.solid} data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        primary.variable,
        secondary ? secondary.variable : '',
        tertiary ? tertiary.variable : '',
        code.variable,)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <Flex as="body"
        style={{ minHeight: '100vh' }}
        fillWidth margin="0" padding="0"
        direction="column">
        <Background
          mask="cursor"
          gradient={{ display: true, opacity: 0.4 }}
          dots={{ display: true, opacity: 0.4, size: '24' }}
          lines={{ display: false }}
        />
        {children}
      </Flex>
    </Flex>
  );
}