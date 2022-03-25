import {ReactNode} from 'react'
import {Link} from 'remix'
import data from '~/data.json'

const formatter = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
  year: 'numeric',
})

function SectionTitle({children}: {children: ReactNode}) {
  return (
    <h2 className="inline-block bg-[rgb(240,255,0)] p-4 px-10 py-6 text-4xl font-thin md:-ml-24">
      {children}
    </h2>
  )
}

export default function Index() {
  return (
    <div className="relative mb-24">
      <div className="sticky top-0 mb-16 mt-36 bg-white/50 py-8 backdrop-blur-xl">
        <div className="prose mx-auto">
          <h1 className="text-6xl font-thin">
            Massimo <span className="font-normal">Palmieri</span>
          </h1>
        </div>
      </div>

      <div className="prose mx-auto p-4">
        <SectionTitle>Professional summary</SectionTitle>
        <p className="lead font-serif">
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
        <div>
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
        {data.history.map((item, index) => {
          return (
            <div key={index} className="pb-2">
              <h3 className="mt-0 overflow-hidden pt-6">
                {item.employer} - {item.title}
              </h3>
              <p className="my-4 text-sm font-semibold">
                {formatter.format(new Date(item.start))} —{' '}
                {item.end ? formatter.format(new Date(item.end)) : 'Present'}
              </p>
              <ul className="pl-0 font-serif">
                {item.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )
        })}

        <SectionTitle>Education</SectionTitle>
        {data.education.map((item) => (
          <div key={item.title}>
            <div>
              {item.year} - <span className="font-semibold">{item.school}</span>
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
