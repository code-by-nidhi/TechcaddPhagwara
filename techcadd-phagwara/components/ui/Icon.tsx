import type { IconBaseProps } from 'react-icons'
import {
  FiArrowRight, FiArrowUpRight, FiAward, FiBookOpen, FiBriefcase,
  FiCheck, FiChevronDown, FiChevronLeft, FiChevronRight, FiClock, FiCloud,
  FiCode, FiCompass, FiCpu, FiDatabase, FiEdit3, FiFileText, FiGift,
  FiHeadphones, FiImage, FiLayers, FiMail, FiMapPin, FiMenu, FiMessageCircle,
  FiMic, FiMonitor, FiPenTool, FiPhone, FiPlay, FiRepeat, FiSearch, FiSend,
  FiShield, FiSmartphone, FiStar, FiTarget, FiTerminal, FiTrendingUp, FiUsers,
  FiVideo, FiX, FiZap,
} from 'react-icons/fi'
import {
  FaBrain, FaBuilding, FaBullhorn, FaChartPie, FaFacebookF, FaHandshake,
  FaInfinity, FaInstagram, FaLinkedinIn, FaMugHot, FaPalette, FaRocket,
  FaRulerCombined, FaWallet, FaWhatsapp, FaXTwitter, FaYoutube,
} from 'react-icons/fa6'
import { BsStars } from 'react-icons/bs'

/**
 * Single icon registry. Sections reference icons by string key from
 * `data/site.ts`, which keeps content data free of component imports.
 *
 * Every key here is referenced somewhere in the app — six glyphs that the
 * legacy registry carried but never rendered (creditCard, grid, home, lock,
 * plus, pulse) were dropped so they stop being bundled.
 */
const REGISTRY = {
  arrow: FiArrowRight,
  arrowUp: FiArrowUpRight,
  award: FiAward,
  book: FiBookOpen,
  brain: FaBrain,
  briefcase: FiBriefcase,
  building: FaBuilding,
  check: FiCheck,
  chart: FaChartPie,
  chevronDown: FiChevronDown,
  chevronLeft: FiChevronLeft,
  chevronRight: FiChevronRight,
  clock: FiClock,
  cloud: FiCloud,
  code: FiCode,
  coffee: FaMugHot,
  compass: FiCompass,
  cpu: FiCpu,
  database: FiDatabase,
  edit: FiEdit3,
  file: FiFileText,
  gift: FiGift,
  handshake: FaHandshake,
  headphones: FiHeadphones,
  image: FiImage,
  infinity: FaInfinity,
  layers: FiLayers,
  mail: FiMail,
  mapPin: FiMapPin,
  megaphone: FaBullhorn,
  menu: FiMenu,
  message: FiMessageCircle,
  mic: FiMic,
  mobile: FiSmartphone,
  monitor: FiMonitor,
  palette: FaPalette,
  pen: FiPenTool,
  phone: FiPhone,
  play: FiPlay,
  repeat: FiRepeat,
  rocket: FaRocket,
  ruler: FaRulerCombined,
  search: FiSearch,
  send: FiSend,
  shield: FiShield,
  sparkles: BsStars,
  star: FiStar,
  target: FiTarget,
  terminal: FiTerminal,
  trending: FiTrendingUp,
  users: FiUsers,
  video: FiVideo,
  wallet: FaWallet,
  x: FiX,
  zap: FiZap,
  // socials
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
  twitter: FaXTwitter,
  whatsapp: FaWhatsapp,
} as const

export type IconName = keyof typeof REGISTRY

export interface IconProps extends IconBaseProps {
  name: IconName
}

export default function Icon({ name, ...rest }: IconProps) {
  const Glyph = REGISTRY[name] ?? FiZap
  return <Glyph aria-hidden="true" focusable="false" {...rest} />
}

export { REGISTRY as iconRegistry }
