import DrawImage from './DrawImage'

export default class FileResize {
  constructor({ boxPreview, files, width, height, loading, callback }) {

    this.boxPreview = boxPreview
    this.files = files
    this.width = width
    this.height = height
    this.loading = loading || 'carregando...'
    this.callback = callback

    this.call()
  }

  createBoxImage() {
    let boxImage = document.createElement('div')

    boxImage.classList.add('box-image')
    boxImage.style = 'display: flex; justify-content: center; align-items: center; text-align: center;'
    boxImage.innerHTML = this.loading
    this.boxPreview.appendChild(boxImage)

    return boxImage
  }

  call() {
    Array.from(this.files).map((file, index) => {
      if (file) {
        let reader = new FileReader()
        let sourceImage = new Image()
        let targetImage = new Image()

        const boxImage = this.createBoxImage()

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
            boxImage.innerHTML = ''
            boxImage.appendChild(targetImage)
          }
        }

        if (callback){
          this.callback()
        }

        reader.readAsDataURL(file)
      }
    })
  }
}
// end

window.FileResize = ({ boxPreview, files, width, height, loading, callback }) => {
  new FileResize({
    boxPreview,
    files,
    width,
    height,
    loading,
    callback
  })
}
