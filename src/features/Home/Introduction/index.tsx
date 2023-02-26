import { appConfig } from '@/util/config'
import Image from 'next/image'
import { ArrowCircleDown } from 'phosphor-react'

export default function Introduction() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex gap-12 m-5">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col text-6xl font-bold leading-15 animate-scale">
            <span className="drop-shadow-neo-2">Meet</span>
            <span className="drop-shadow-neo-2">{appConfig.name}</span>
            <span className="text-4xl opacity-80 drop-shadow-neo-1">
              Web developer
            </span>
          </div>

          <div className="font-bold flex flex-col items-center">
            <span className="opacity-80">Explore</span>
            <div className="flex gap-2">
              <span>SNIPPETS</span>
              <span>PROJECTS</span>
              <span>ABOUT ME</span>
            </div>
          </div>
        </div>

        <div>
          <Image
            src="https://user-images.githubusercontent.com/62115215/221433922-02ebc877-4a47-44f4-8f3c-fd97ca2b1058.png"
            width={296}
            height={350}
            alt="profile-image"
            className="drop-shadow-neo-5 border-primary-dark border-4 rounded-sm"
          />
        </div>
      </div>

      <button className="hover:scale-110 transition-all opacity-60">
        <ArrowCircleDown size={32} weight="light" />
      </button>
    </div>
  )
}
