import { IconType } from "react-icons";

import {
  HiHome,
  HiOutlineBriefcase,
  HiOutlineRocketLaunch
} from "react-icons/hi2";
import { PiMicrophoneStageDuotone } from "react-icons/pi";

export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  home: HiHome,
  briefcase: HiOutlineBriefcase,
  music: PiMicrophoneStageDuotone,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
