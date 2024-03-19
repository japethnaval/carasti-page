import { useState } from 'react'

export const useFile = () => {
  const [files, setFiles] = useState<
    {
      id: string
      file: File
    }[]
  >([])

  const addToFiles = (upload: { id: string; file: File }) => {
    const isExisting = files.find((f) => f.id === upload.id)

    if (isExisting) {
      const updatedFiles = files.map((p) => {
        if (p.id === upload.id) {
          return {
            ...p,
            file: upload.file,
          }
        }
        return p
      })

      return setFiles(updatedFiles)
    }

    return setFiles([...files, upload])
  }

  return {
    addToFiles,
    files,
  }
}

export default useFile
