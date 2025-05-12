package domain;
public class Persona {
    private final int idPersona;
    private static int contadorPersonas;

    static{ //Bloque de inicializacion estático
        System.out.println("Ejecicion del bloque estatico");
    ++Persona.contadorPersonas;
    //idPersona = 10; no es estatico un atributo, por esto tenemos un error
    }

    {  //bloque de inicializacion NO estatico (contexto dinamico)
        System.out.println("Ejecución del bloque NO estatico");
        this.idPersona = Persona.contadorPersonas++; //incrementamos el atributo
         
    }

    //Los bloques de inicializacion se ejecutan antes del constructor

    public Persona(){
        System.out.println("Ejecucion del constructor");
    }
    
    public int getIdPersona(){
        return this.idPersona;
    }

    @Override
    public String toString(){
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
}
