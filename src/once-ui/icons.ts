import { IconType } from 'react-icons';

import {
  HiChevronUp,
  HiChevronDown,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineArrowPath,
  HiCheck,
  HiMiniQuestionMarkCircle,
  HiMiniMinus,
  HiMiniPlus,
  HiMiniUser,
  HiMiniXMark,
  HiEyeDropper,
  HiOutlineLink,
  HiExclamationTriangle,
  HiArrowUpRight,
  HiMiniGlobeAsiaAustralia,
  HiInformationCircle,
  HiExclamationCircle,
  HiCheckCircle,
  HiCalendarDays,
  HiEnvelope
} from "react-icons/hi2";

import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaYoutube
} from "react-icons/fa6";

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
  person: HiMiniUser,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  github: FaGithub,
  youtube: FaYoutube,
  arrowUpRight: HiArrowUpRight,
  minus: HiMiniMinus,
  plus: HiMiniPlus,
  calendar: HiCalendarDays
};