import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import getProjectsMetadata from '@/util/functions/getProjectMetadata'
import Link from 'next/link'
import GithubIcon from '@/Icons/Github'
import ImageSlider from '@/components/ImageSlider'
import RouteStepper from '@/components/RouteStepper'

type ProjectProps = {
  params: { slug: string }
}

const getProject = (slug: string) => {
  const folder = 'projects/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const projects = getProjectsMetadata()
  return projects.map((project) => ({
    slug: project.slug
  }))
}

const getTypeColor = (type: string): string => {
  switch (type) {
    case 'college':
      return 'bg-[#F0DF83]'
    case 'drawing':
      return 'bg-[#83C2F0]'
    case 'coding-week':
      return 'bg-[#F0A483]'
    case 'course':
      return 'bg-[#C0F083]'
    case 'original':
      return 'bg-[#F08383]'
  }
  return 'bg-background'
}

export default function Project({ params }: ProjectProps) {
  const slug = params.slug
  const project = getProject(slug)

  const bg = getTypeColor(project.data.type)

  return (
    <div className="flex flex-col items-start gap-5 w-full px-4 py-2 max-w-project m-auto font-bold">
      <div className="flex flex-col  w-full items-start">
        <RouteStepper />
        <p
          className={`uppercase ${bg} drop-shadow-neo-2  border border-primary-dark rounded p-0.5 text-primary-dark text-base`}
        >
          College Project
        </p>

        <div className="flex justify-between text-5xl uppercase w-full items-center text-primary-dark">
          <h1>{project.data.title}</h1>
          <Link
            href={project.data.github}
            target="_blank"
            className="hover:scale-105"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        <p className="opacity-70">January, 2023</p>
        <div className="flex flex-wrap gap-5 items-center">
          {project.data.tags.map((tag: string) => (
            <div
              key={tag}
              className="border border-primary-dark border-1 drop-shadow-neo-1 uppercase bg-foreground px-3 text-xs rounded-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <p className="opacity-70 text-base">
        Sed sit amet ipsum eu orci placerat blandit ac efficitur neque. Praesent
        nec auctor odio. Suspendisse in ipsum lorem. Nulla auctor elit non risus
        pretium facilisis. Proin eleifend rhoncus nisi, ut Nulla auctor elit non
        risus pretium
      </p>

      <div className="bg-primary h-0.063 w-full my-3 opacity-70" />

      <ImageSlider></ImageSlider>

      <article className="prose text-justify font-bold text-primary prose-headings:text-primary-dark max-w-none">
        <Markdown>{project.content}</Markdown>
      </article>
    </div>
  )
}
