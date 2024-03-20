/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/vitest'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { get } from 'lodash'
import { describe, expect, test } from 'vitest'

import ImageUploader from './image-uploader.component'

describe('<ImageUploader/>', () => {
  const { getByTestId } = render(<ImageUploader />)

  test('render the ImageUploader component', () => {
    const element = getByTestId('imageUploader')
    expect(element).toBeInTheDocument()
  })

  test('Uploaded image must have a length of one', async () => {
    const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' })
    const inputFile = getByTestId('fileInput')
    await userEvent.upload(inputFile, fakeFile)
    expect(get(inputFile, 'files')).toHaveLength(1)
  })
})
