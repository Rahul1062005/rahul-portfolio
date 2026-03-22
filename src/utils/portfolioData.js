import cvData from '../data/cvData.json'
import { sectionMap, sectionOrder } from '../sections/sectionMap'

function hasContent(value) {
  if (Array.isArray(value)) {
    return value.some((item) => hasContent(item))
  }

  if (value && typeof value === 'object') {
    return Object.values(value).some((item) => hasContent(item))
  }

  if (typeof value === 'string') {
    return value.trim().length > 0
  }

  return value !== null && value !== undefined
}

export function resolveDynamicSections(sections = {}) {
  return sectionOrder.flatMap((sectionId) => {
    const definition = sectionMap[sectionId]
    if (!definition) {
      return []
    }

    const sourceKey = [sectionId, ...definition.aliases].find((key) =>
      hasContent(sections[key]),
    )

    if (!sourceKey) {
      return []
    }

    return [
      {
        id: sectionId,
        label: definition.label,
        component: definition.component,
        data: sections[sourceKey],
      },
    ]
  })
}

export function getPortfolioData() {
  const sections = resolveDynamicSections(cvData?.sections)

  return {
    cvData,
    sections,
  }
}
