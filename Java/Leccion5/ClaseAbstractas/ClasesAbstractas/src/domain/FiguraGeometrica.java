package domain;

public abstract class FiguraGeometrica {

    //La clase padre no define comportamiento
    protected String tipoFigura;

    //Constructor
    protected FiguraGeometrica(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }

    //Metodo abstracto
    public abstract void dibujar();

    //Agregamos los get y los setts
    public String getTipoFigura() {
        return tipoFigura;
    }

    public void setTipoFigura(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }

    //Sobreescribimos el metodo toString
    @Override
    public String toString() {
        return "tipoFiguraGeometrica{" + "tipoFigura" + tipoFigura + "}";
    }
}
