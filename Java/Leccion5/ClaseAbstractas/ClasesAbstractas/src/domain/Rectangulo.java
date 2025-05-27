package domain;

public class Rectangulo extends FiguraGeometrica {
    //constructor
    public Rectangulo(String tipoFigura) {
        super(tipoFigura);
    }

    //Implementar el metodo abstracto
    //Si estamos agregando un comportamiento se dice que lo implementamos, no que lo sobreescribimos
    @Override
    public void dibujar() {
        System.out.println("Se imprime un: " + this.getClass().getSimpleName());
    }

}
