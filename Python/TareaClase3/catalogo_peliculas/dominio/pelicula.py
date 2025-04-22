#  clase que representa una pelicula individual
class Pelicula:
    def __init__(self, nombre):
        # atributo privado que almacena el nombre de la pelicula
        self.nombre = nombre

    def __str__(self):
        # Devuelve el nombre cuando se imprime el objeto
        return f'Pelicula: {self.nombre}'
