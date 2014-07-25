canvg
=====

[Mirror for bower] Javascript SVG parser and renderer on Canvas: https://code.google.com/p/canvg/


```
<script type="text/javascript" src="dist/canvg.bundle.min.js"></script> 
```

Put a canvas on your page

```
<canvas id="canvas" width="1000px" height="600px"></canvas> 
```

Example canvg calls:

```
<script type="text/javascript">
window.onload = function() {
  //load '../path/to/your.svg' in the canvas with id = 'canvas'
  canvg('canvas', '../path/to/your.svg')

  //load a svg snippet in the canvas with id = 'drawingArea'
  canvg(document.getElementById('drawingArea'), '<svg>...</svg>')

  //ignore mouse events and animation
  canvg('canvas', 'file.svg', { ignoreMouse: true, ignoreAnimation: true }) 
}
</script>
```

The third parameter is options:

* log: true => console.log information
* ignoreMouse: true => ignore mouse events
* ignoreAnimation: true => ignore animations
* ignoreDimensions: true => does not try to resize canvas
* ignoreClear: true => does not clear canvas
* offsetX: int => draws at a x offset
* offsetY: int => draws at a y offset
* scaleWidth: int => scales horizontally to width
* scaleHeight: int => scales vertically to height
* renderCallback: function => will call the function after the first render is completed
* forceRedraw: function => will call the function on every frame, if it returns true, will redraw
* useCORS: true => will attempt to use CORS on images to not taint canvas
