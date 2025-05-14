package paquete2;

public class Clase4 {
    private String atributoPrivate = "atributo Privado";

    private Clase4(){
        System.out.println("Constructor Privado");
    }

    //Creamos un costructor public para poder crear objetos
    public Clase4(String argumento){//aqui se puede llamar constructor vacio
        this();
        System.out.println("Constructor publico");
    }

    //metodo private
    private void metodoPrivado(){
        System.out.println("Método privado");
    }

    public String getAtributoPrivate(){
        return atributoPrivate;
    }

    public void setAtributoPrivate(String atributoPrivate){
        this.atributoPrivate = atributoPrivate;
    }
}
