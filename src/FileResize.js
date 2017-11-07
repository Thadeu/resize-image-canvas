import { DrawImage } from './DrawImage'

export class FileResize {

  constructor({ boxPreview, files, width, height, loading }) {
    this.boxPreview = boxPreview
    this.files = files
    this.width = width
    this.height = height
    this.loading = loading || 'carregando...'

    this.call()
  }

  createBoxPreview() {
    let boxImage = document.createElement('div')

    boxImage.classList.add('box-image')
    boxImage.innerHTML = this.loading
    this.boxPreview.appendChild(boxImage)

    return this.boxPreview
  }

  call() {
    Array.from(this.files).map((file, index) => {
      if (file) {
        let reader = new FileReader()
        let sourceImage = new Image()
        let targetImage = new Image()

        const boxPreview = this.createBoxPreview()

        reader.onload = (e) => {
          /**
           * sourceImage
           */
          sourceImage.src = e.target.result

          // load da imagem
          sourceImage.onload = () => {
            // pega o base64 do canvas com a imagem dentro
            // sourceImage, maxWidth, maxHeight
            targetImage.src = new DrawImage({
              sourceImage,
              maxWidth: this.width,
              maxHeight: this.height
            }).toDataURL()

            // joga a imagem dentro do box de previews redimensionadas
            boxPreview.innerHTML = ''
            boxPreview.appendChild(targetImage)
          }
        }

        reader.readAsDataURL(file)
      }
    })
  }
}
// end
