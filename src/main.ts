import {Dropzone} from '@hecht-a/dropzone'
import '@hecht-a/dropzone/lib/style.css'

const input = document.querySelector('#dz')! as HTMLInputElement
const dropzone = new Dropzone(input, {
  label: 'Téléverser un/des fichiers',
  min: 1,
  max: 4
})

dropzone.on('hover', () => {
  console.log('hover')
})

dropzone.on('addFile', (file) => {
  console.log(`file added: ${file.name}`)
})

dropzone.on('removeFile', (file) => {
  console.log(`file removed: ${file.name}`)
})