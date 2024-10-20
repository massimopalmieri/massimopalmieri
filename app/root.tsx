import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from '@remix-run/react'
import {json, type MetaFunction} from 'remix'
import {useEffect} from 'react'
import styles from './styles/app.css'
import * as gtag from '~/utils/gtags.client'

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Massimo Palmieri',
  viewport: 'width=device-width,initial-scale=1',
})

export const loader = async () => {
  return json({gaTrackingId: process.env.GA_TRACKING_ID})
}

export default function App() {
  const location = useLocation()
  const {gaTrackingId} = useLoaderData<typeof loader>()

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId)
    }
  }, [location, gaTrackingId])

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-zinc-900 ">
        {process.env.NODE_ENV === 'development' ? null : (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-3W8CSERCRQ"
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-3W8CSERCRQ', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
