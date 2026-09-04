import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

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
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  github: FaGithub,
  youtube: FaYoutube,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
