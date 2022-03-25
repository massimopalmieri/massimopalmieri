import {LoaderFunction} from 'remix'
import {pdf} from 'remix-utils'
import {renderToStream} from '@react-pdf/renderer'
import {Pdf} from '~/components/Pdf'

export const loader: LoaderFunction = async () => {
  const stream = await renderToStream(<Pdf />)

  const body: Buffer = await new Promise((resolve, reject) => {
    const buffers: Uint8Array[] = []

    stream.on('data', (data) => {
      buffers.push(data)
    })
    stream.on('end', () => {
      resolve(Buffer.concat(buffers))
    })
    stream.on('error', reject)
  })

  return pdf(body)
}
