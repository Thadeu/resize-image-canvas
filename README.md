# Resize Image to Canvas

# How to install lib

```bash
yarn add resize-image-canvas@latest
```

or 

```bash
npm install resize-image-canvas@latest
```

# Using ES5/ES6,ES7,ES*

```javascript
import FileResize from 'resize-image-canvas'

document.querySelector('.resize-action').addEventListener('click', function(e){
    e.preventDefault();
    
    // using Array fro files
    new FileResize({
      boxPreview: document.querySelector('.previews'), 
      files: document.querySelector('.input-files').files, 
      width: 200, 
      height: 200,
      loading: 'carregando...', // (opcional)
      callback: function(){
      }
    })
  })
}
```

# Using VanilhaJS or jQuery

Get to files with clone repo https://github.com/Thadeu/resize-image-canvas
After load file resize-image-canvas in your assets project path, so!

```html
<script src="resize-image-canvas.min.js"></script> 
```

### After use lib

```html
<form method="post" class='form'>
  <div class="field">
    <input type="file" name="file[]" id="file" class="input-files" multiple> 
    <label for="file">Selecione os arquivos</label>
  </div> <br>

  <div class="field">
    <button type="submit" class="resize-action btn btn-primary">Iniciar</button>
  </div>

  <div class="previews"></div>
</form>
```

```javascript
$('.resize-action').on('click', function(e){
    e.preventDefault();
    
    // using Array fro files
    new FileResize({
      boxPreview: $('.previews'), 
      files: $('.input-files').files, 
      width: 200, 
      height: 200,
      loading: 'carregando...', // (opcional)
      callback: function(){
      }
    })
  })
}
```

# Exemplo

See you exemple here! [Exemple Project using VanilhaJS](https://github.com/Thadeu/resize-image-to-fit)

![captura de tela 2017-11-06 as 18 34 34](https://user-images.githubusercontent.com/77889/32465128-2be43768-c321-11e7-9cd0-5ec4abedc8a2.png)

# Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Thadeu/resize-image-canvas
