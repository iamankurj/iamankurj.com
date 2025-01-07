"use client";

import { person } from "@/content/shared/person";
import { useEffect, useState } from "react";

import styles from './Header.module.scss'
import { Flex, ToggleButton } from "@/once-ui/components";

import { usePathname } from "next/navigation";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;  // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return (
    <>
      {currentTime}
    </>
  );
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? '';

  const routes = [{
    label: 'About',
    pathQualifier: '/tech',
    prefixIcon: 'piUserCircleDuotone',
    selected: (pathname: string) => pathname === '/tech'
  }, {
    label: 'Work',
    pathQualifier: '/tech/work',
    prefixIcon: 'piBriefcaseDuotone',
    selected: (pathname: string) => pathname.startsWith('/tech/work')
  }, {
    label: 'Hustle',
    pathQualifier: '/tech/hustle',
    prefixIcon: 'piCodeBlockDuotone',
    selected: (pathname: string) => pathname.startsWith('/tech/hustle')
  }, {
    label: 'Blog',
    pathQualifier: '/tech/blog',
    prefixIcon: 'piBookBookmarkDuotone',
    selected: (pathname: string) => pathname.startsWith('/tech/blog')
  }]

  return (
    <>
      <Flex
        className={styles.mask}
        position="fixed" zIndex={9}
        fillWidth minHeight="80" justifyContent="center">
      </Flex>
      <Flex style={{ height: 'fit-content' }}
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth padding="8"
        justifyContent="center">
        <Flex
          paddingLeft="12" fillWidth
          alignItems="center"
          textVariant="body-default-s">
          <Flex hide="s">
            {person.location}
          </Flex>
        </Flex>
        <Flex fillWidth justifyContent="center">
          <Flex
            background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
            padding="4"
            justifyContent="center">
            <Flex
              gap="4"
              textVariant="body-default-s">
              {routes.map((route) => (
                <ToggleButton
                  key={route.label}
                  prefixIcon={route.prefixIcon}
                  href={route.pathQualifier}
                  selected={route.selected(pathname)}>
                  <Flex paddingX="2" hide="s">{route.label}</Flex>
                </ToggleButton>
              )
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth justifyContent="flex-end" alignItems="center">
          <Flex
            paddingRight="12"
            justifyContent="flex-end" alignItems="center"
            textVariant="body-default-s"
            gap="20">
            <Flex hide="s">
              <TimeDisplay timeZone={person.location} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}