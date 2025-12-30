import {Omega} from 'omega-js'
import { get } from 'omega-js'

class App extends Omega {
  @get('/')
  hola(req, res) {
    res.json({ mensaje: '¡Hola desde OmegaJS!' })
  }
}

new App().listen(8080)