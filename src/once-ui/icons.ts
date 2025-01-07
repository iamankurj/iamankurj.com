import { IconType } from 'react-icons';

import {
  HiArrowUpRight,
  HiCalendarDays,
  HiCheck,
  HiCheckCircle,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiEnvelope,
  HiExclamationCircle,
  HiExclamationTriangle,
  HiEyeDropper,
  HiInformationCircle,
  HiMiniGlobeAsiaAustralia,
  HiMiniMinus,
  HiMiniPlus,
  HiMiniQuestionMarkCircle,
  HiMiniXMark,
  HiOutlineArrowPath,
  HiOutlineLink
} from "react-icons/hi2";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa6";

import {
  PiBookBookmarkDuotone,
  PiBriefcaseDuotone,
  PiCodeBlockDuotone,
  PiUserCircleDuotone,
  PiHouseDuotone
} from "react-icons/pi";

export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  refresh: HiOutlineArrowPath,
  check: HiCheck,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  warningTriangle: HiExclamationTriangle,
  errorCircle: HiExclamationCircle,
  checkCircle: HiCheckCircle,
  eyeDropper: HiEyeDropper,
  email: HiEnvelope,
  globe: HiMiniGlobeAsiaAustralia,
  piUserCircleDuotone: PiUserCircleDuotone,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  github: FaGithub,
  youtube: FaYoutube,
  arrowUpRight: HiArrowUpRight,
  minus: HiMiniMinus,
  plus: HiMiniPlus,
  calendar: HiCalendarDays,
  piBriefcaseDuotone: PiBriefcaseDuotone,
  piBookBookmarkDuotone: PiBookBookmarkDuotone,
  piCodeBlockDuotone: PiCodeBlockDuotone,
  piHouseDuotone: PiHouseDuotone,
};