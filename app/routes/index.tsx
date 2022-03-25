import data from '~/data.json'
import {ReactNode} from 'react';

function SectionTitle ({children}: {children: ReactNode}) {
  return <h2 className='text-4xl font-thin inline-block p-4 -ml-24 bg-[rgb(240,255,0)] px-10 py-6'>{children}</h2>
}

export default function Index() {
  return (
    <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}} className='prose mx-auto'>

      <h1 className='text-6xl font-thin mt-36'>Massimo Palmieri</h1>

      <SectionTitle>Professional summary</SectionTitle>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet animi aperiam aut autem dolores in minus nihil nisi nobis, officiis quia quibusdam vero? Beatae illum iste mollitia natus quos.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet animi aperiam aut autem dolores in minus nihil nisi nobis, officiis quia quibusdam vero? Beatae illum iste mollitia natus quos.</p>

      <SectionTitle>Skills</SectionTitle>
      <div>{data.skills.map(skill => <span key={skill} className='m-2 inline-block text-sm font-semibold'>{skill}</span>)}</div>

      <SectionTitle>Work history</SectionTitle>
      {data.history.map((item, index) => {
        return <div key={index}>
          <h3 className=''>{item.employer} - {item.title}</h3>
          <small className=''>{item.date}</small>
          <ul className='pl-0 font-serif'>
            {item.achievements.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>;
      })}

      <SectionTitle>Education</SectionTitle>
      {data.education.map(item => <div>
        <div>{item.year} - <span className='font-semibold'>{item.school}</span></div>
        <p>{item.title}</p>
      </div>)}

      <div className='my-24'>
        <a href='' className='p-4 bg-emerald-600 rounded-xl border-emerald-600 no-underline text-white relative text-sm border-2 cursor-pointer whitespace-nowrap px-6/20 dark:hover:bg-sky-400'>Download pdf</a>
      </div>
    </div>
  );
}
