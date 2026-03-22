import {
  SiAndroidstudio,
  SiC,
  SiCplusplus,
  SiCss,
  SiGit,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiTryhackme,
  SiVscodium,
  SiWireshark,
} from 'react-icons/si'
import {
  FaBrain,
  FaCode,
  FaShieldHalved,
  FaTerminal,
  FaToolbox,
  FaUserSecret,
  FaUsers,
  FaWrench,
} from 'react-icons/fa6'

const PROFICIENCY_LABEL = /\s*\((basic|intermediate|advanced)\)\s*$/i

const simpleIconMap = {
  'android studio': SiAndroidstudio,
  bash: SiGnubash,
  c: SiC,
  'c++': SiCplusplus,
  css3: SiCss,
    java: SiOpenjdk,
    tryhackme: SiTryhackme,
  git: SiGit,
  html5: SiHtml5,
  javascript: SiJavascript,
  'javascript (es6+)': SiJavascript,
  nextjs: SiNextdotjs,
  'next.js': SiNextdotjs,
  python: SiPython,
  react: SiReact,
  'react.js': SiReact,
  'vs code': SiVscodium,
  vscode: SiVscodium,
  wireshark: SiWireshark,
}

const colorClassBySkill = {
  'android studio': 'text-emerald-300',
  bash: 'text-slate-200',
  c: 'text-blue-300',
  'c++': 'text-sky-300',
  css3: 'text-sky-300',
  git: 'text-orange-300',
  html5: 'text-orange-300',
  java: 'text-amber-300',
  javascript: 'text-yellow-300',
  'javascript (es6+)': 'text-yellow-300',
  nextjs: 'text-slate-100',
  'next.js': 'text-slate-100',
  nmap: 'text-lime-300',
  python: 'text-cyan-300',
  react: 'text-cyan-300',
  'react.js': 'text-cyan-300',
  tryhackme: 'text-red-300',
  'vs code': 'text-blue-300',
  vscode: 'text-blue-300',
  wireshark: 'text-sky-300',
}

const keywordFallbacks = [
  { test: ['security', 'network'], icon: FaShieldHalved, colorClass: 'text-fuchsia-300' },
  { test: ['ethical hacking', 'hacking'], icon: FaUserSecret, colorClass: 'text-violet-300' },
  { test: ['analysis'], icon: FaBrain, colorClass: 'text-indigo-300' },
  { test: ['problem-solving', 'analytical thinking'], icon: FaBrain, colorClass: 'text-violet-300' },
  { test: ['team collaboration'], icon: FaUsers, colorClass: 'text-cyan-300' },
  { test: ['continuous learning'], icon: FaBrain, colorClass: 'text-emerald-300' },
  { test: ['tool', 'developer tools', 'security tools'], icon: FaToolbox, colorClass: 'text-amber-300' },
  { test: ['frontend'], icon: FaCode, colorClass: 'text-cyan-300' },
  { test: ['language'], icon: FaTerminal, colorClass: 'text-blue-300' },
]

export function normalizeSkillName(name = '') {
  return String(name).replace(PROFICIENCY_LABEL, '').trim()
}

export function getSkillVisual(rawSkillName = '', categoryName = '') {
  const skillName = normalizeSkillName(rawSkillName)
  const key = skillName.toLowerCase()

  const simpleIcon = simpleIconMap[key]
  if (simpleIcon) {
    return {
      name: skillName,
      Icon: simpleIcon,
      colorClass: colorClassBySkill[key] || 'text-cyan-300',
    }
  }

  const combined = `${key} ${String(categoryName).toLowerCase()}`
  const fallback = keywordFallbacks.find(({ test }) =>
    test.some((word) => combined.includes(word)),
  )

  if (fallback) {
    return {
      name: skillName,
      Icon: fallback.icon,
      colorClass: fallback.colorClass,
    }
  }

  return {
    name: skillName,
    Icon: FaWrench,
    colorClass: 'text-slate-300',
  }
}
