// Lo instanciaremos con Funciones normales debido a que estas si tienen Scope Local a diferencia de Arrow Functions

export const Component = (function () {
  //Creamos el Constructor del Componente
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  //Agregamos los metodos al prototipo del constructor del componente

  //Render UI
  Constructor.prototype.render = function () {
    console.log(this.data);
    const $el = d.querySelector(this.el);

    if (!$el) return;

    //Data = State
    $el.innerHTML = this.template(this.data);
  };

  //Actualizar el State de forma Reactiva
  Constructor.prototype.setState = function (obj) {
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }

    this.render();
  };

  //Queremos una copia Inmutable del esatdo
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
