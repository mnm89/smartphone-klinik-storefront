import { Text } from "@medusajs/ui"

export default async function Footer() {
  return (
    <footer className="border-t flex py-3 border-ui-border-base w-full">
      <Text className="txt-compact-small m-auto text-ui-fg-muted">
        © {new Date().getFullYear()} Smartphone Klinik. All rights reserved.
      </Text>
    </footer>
  )
}
