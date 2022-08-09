# Componente Autopauta Compensar

## Modo de uso 

1. Importar el script que esta ubicado en la raíz de la página dentro de las webparts

```javascript
<script src="/Style%20Library/js/autopauta/main1.js"></script>
```

2. Crear la instancia del componente 

Se pueden inicializar variables o incluirlas directamente en la instancia

**Inicializar variables**
```javascript
let imgDesktop = "https://via.placeholder.com/768x110"
let imgMobile = "https://via.placeholder.com/600x220"
let urlCaida = "https://www.google.com/"
let autopautaInit = new Autopauta(
    imgDesktop, imgMobile, urlCaida
)
autopautaInit.cerrar()
```
**Creadas directamente en la instancia**
```javascript
let autopautaInit1 = new Autopauta(
    "https://via.placeholder.com/768x110",
    "https://via.placeholder.com/600x220",
    "https://www.google.com/"
)
```

3. Incluir el metódo cerrar, que permite cerrar la auto pauta desde el botón

```javascript
let autopautaInit1 = new Autopauta(
    "https://via.placeholder.com/768x110",
    "https://via.placeholder.com/600x220",
    "https://www.google.com/"
)
autopautaInit1.cerrar()
```

4. Testear el componente, validando que permita, ir a la página de caida, se pueda cerrar el componente, y que la redimensión muestre la imagen correspondiente a desktop y mobile. 

## Bonus 

Template de Inicio (Todo desde una etiqueta script)

```html
<script src="/Style%20Library/js/autopauta/main1.js"></script>
<script>
let autopautaInit1 = new Autopauta(
    "https://via.placeholder.com/768x110",
    "https://via.placeholder.com/600x220",
    "https://www.google.com/"
)
autopautaInit1.cerrar()
</script>
```