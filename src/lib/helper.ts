/* eslint-disable @typescript-eslint/no-explicit-any */

export const loadContentMap = async (): Promise<Record<string, any>> => {
  return await import('../contents/index.yml')
}

export const getFileNameBySlug = async (domain: string, slug?: string): Promise<string | undefined> => {
  if (!slug) {
    return
  }

  const map = (await loadContentMap()).default[domain] as Record<string, any>

  for (const [_, entry] of Object.entries(map)) {
    if (entry.slug === slug) {
      return entry.filename
    }
  }
}



