export class DrawImage {

  constructor({ sourceImage, maxWidth, maxHeight }) {
    this.sourceImage = sourceImage
    this.maxWidth = maxWidth
    this.maxHeight = maxHeight
    this.imageWidth = this.sourceImage.width
    this.imageHeight = this.sourceImage.height
    this.canvas = document.createElement('canvas')

    this.getDimensions = this.getDimensions.bind(this)
  }

  toDataURL() {
    const context = this.canvas.getContext('2d')

    // tamanho do canvas
    this.canvas.width = this.getDimensions().width
    this.canvas.height = this.getDimensions().height

    // contexto do canvas
    context.imageSmoothingQuality = 'high'
    context.drawImage(this.sourceImage, 0, 0, this.getDimensions().width, this.getDimensions().height)

    return this.canvas.toDataURL()
  }

  getDimensions() {
    // WideScreen 4:3
    // w:1920 X h:1080
    if (this.imageWidth > this.imageHeight) {
      // largura maior do que eu gostaria
      if (this.imageWidth > this.maxWidth) {
        /**
         * e.g:
         * 1080 * (50 / 1920) -> 28.12
         */
        this.imageHeight *= this.maxWidth / this.imageWidth
        this.imageWidth = this.maxWidth
      }
    } else {
      // Imagem mais alta do que larga
      if (this.imageHeight > this.maxHeight) {
        this.imageWidth *= (this.maxHeight / this.imageHeight)
        this.imageHeight = this.maxHeight
      }
    }

    return {
      width: this.imageWidth,
      height: this.imageHeight
    }
  } // getDimensions
}
