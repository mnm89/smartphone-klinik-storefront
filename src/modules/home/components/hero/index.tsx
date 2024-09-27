import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import heroBg from "./hero.jpg"

const Hero = () => {
  return (
    <div className="h-[100vh]  w-full border-b border-ui-border-base relative">
      <Image alt="Hero" src={heroBg} sizes="100vw" fill placeholder="blur" />
    </div>
  )
}

export default Hero
