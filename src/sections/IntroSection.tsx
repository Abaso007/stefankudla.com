import MeshBackground from '@/components/MeshBackground'
import React from 'react'

const IntroSection: React.VFC = () => {
  return (
    <section className="h-64 sm:h-96 w-full flex flex-col justify-center">
      <MeshBackground />
      <h1 className="text-5xl max-w-2xl mb-8 text-fore-primary">
        Hi there, I'm Stefan Kudla.
      </h1>
      <p className="text-xl">
        I'm a software developer with a passion for building <br /> modern web
        apps.
      </p>
    </section>
  )
}

export default IntroSection
