import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    // Folders altijd boven bestanden
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }

    const orderA = a.data?.frontmatter?.order as number | undefined
    const orderB = b.data?.frontmatter?.order as number | undefined

    if (orderA !== undefined && orderB !== undefined) {
      return orderA - orderB
    }
    if (orderA !== undefined) return -1
    if (orderB !== undefined) return 1

    return a.displayName.localeCompare(b.displayName)
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
