import type {ReactNode} from 'react'
import data from '~/data.json'

const formatter = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
  year: 'numeric',
})

function SectionTitle({children}: {children: ReactNode}) {
  return (
    <h2 className="mb-0 inline-block bg-yellow-400 px-10 py-6 text-4xl font-thin md:-ml-24">
      {children}
    </h2>
  )
}

export default function Index() {
  return (
    <div className="relative mb-6">
      <div className="sticky top-0 mt-0 bg-zinc-900/75 px-4 py-8 backdrop-blur-xl sm:mb-16 sm:mt-24 md:px-0">
        <div className="prose mx-auto">
          <h1 className="text-6xl font-thin text-gray-100">
            Massimo <span className="font-normal">Palmieri</span>
          </h1>
        </div>
      </div>

      <div className="prose mx-auto p-4 text-slate-300 prose-h3:text-yellow-400 prose-lead:text-gray-200">
        <SectionTitle>Professional summary</SectionTitle>
        <p className="lead mt-12 font-serif">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
          amet animi aperiam aut autem dolores in minus nihil nisi nobis,
          officiis quia quibusdam vero? Beatae illum iste mollitia natus quos.
        </p>
        <p className="lead font-serif">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
          amet animi aperiam aut autem dolores in minus nihil nisi nobis,
          officiis quia quibusdam vero? Beatae illum iste mollitia natus quos.
        </p>

        <SectionTitle>Skills</SectionTitle>
        <div className="mt-12">
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="m-2 inline-block text-sm font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>

        <SectionTitle>Work history</SectionTitle>

        {data.history.map((item, index) => (
          <>
            <h3 className="mt-12 mb-2 overflow-hidden">
              {item.employer} - {item.title}
            </h3>
            <p className="mt-2 mb-4 text-sm font-semibold text-gray-500">
              {formatter.format(new Date(item.start))} —{' '}
              {item.end ? formatter.format(new Date(item.end)) : 'Present'}
            </p>
            <ul className="list-inside pl-0 font-serif md:list-outside">
              {item.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ))}

        <SectionTitle>Education</SectionTitle>

        <div className="mt-12">
          {data.education.map((item) => (
            <div key={item.title}>
              <div>
                {item.year} -{' '}
                <span className="font-semibold">{item.school}</span>
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
