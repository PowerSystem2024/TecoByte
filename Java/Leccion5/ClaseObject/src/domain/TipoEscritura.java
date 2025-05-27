package domain;

public enum TipoEscritura {
    CLASICO ("Clasico"),
    MODERNO ("Moderno");
    private final String descripcion;

    private TipoEscritura(String descripcion){
        this.descripcion = descripcion;
    }

    //Metodo get
    public String getDescripcion(){
        return this.descripcion;
    }
}
