import { IconType } from "react-icons";

import {
  HiOutlineBriefcase,
  HiOutlineRocketLaunch
} from "react-icons/hi2";
import { PiMicrophoneStageDuotone } from "react-icons/pi";
import { TbLetterA } from "react-icons/tb";

export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  home: TbLetterA,
  briefcase: HiOutlineBriefcase,
  music: PiMicrophoneStageDuotone,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
