"use client";

import type { IconName } from "@once-ui-system/core";
import { Fade, Line, Row, ToggleButton } from "@once-ui-system/core";
import { usePathname } from "next/navigation";

import { headerNav, isHeaderPathSelected } from "@/components/headerNav";
import styles from "./Header.module.scss";

function NavButton({
  href,
  label,
  prefixIcon,
  selected,
  external = false,
  home = false,
}: {
  href: string;
  label: string;
  prefixIcon: IconName;
  selected: boolean;
  external?: boolean;
  home?: boolean;
}) {
  const style = external
    ? { color: "var(--brand-on-background-medium)" }
    : home ? { color: "var(--scheme-blue-600)" }
      : undefined;

  return (
    <>
      <Row s={{ hide: true }}>
        <ToggleButton
          href={href}
          label={home ? "" : label}
          prefixIcon={prefixIcon}
          selected={selected}
          style={style}
        />
      </Row>
      <Row hide s={{ hide: false }}>
        <ToggleButton
          href={href}
          prefixIcon={prefixIcon}
          selected={selected}
          aria-label={label}
          style={style}
        />
      </Row>
    </>
  );
}

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row fillWidth />
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row
              as="nav"
              aria-label="Primary"
              gap="4"
              vertical="center"
              textVariant="body-default-s"
            >
              <NavButton
                href={headerNav.home.href}
                label={headerNav.home.label}
                selected={isHeaderPathSelected(pathname, headerNav.home.href)}
                prefixIcon={headerNav.home.prefixIcon}
                home
              />
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {headerNav.primary.map((item) => (
                <NavButton
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  prefixIcon={item.prefixIcon}
                  selected={isHeaderPathSelected(pathname, item.href)}
                />
              ))}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <NavButton
                href={headerNav.external.href}
                label={headerNav.external.label}
                prefixIcon={headerNav.external.prefixIcon}
                selected={isHeaderPathSelected(pathname, headerNav.external.href)}
                external
              />
            </Row>
          </Row>
        </Row>
        <Row fillWidth />
      </Row>
    </>
  );
};
