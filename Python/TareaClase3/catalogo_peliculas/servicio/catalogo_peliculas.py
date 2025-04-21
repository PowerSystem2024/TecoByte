import os

class CatalogoPeliculas:
    # ruta del archivo donde se guardan las peliculas
    ruta_archivo = 'peliculas.txt'

    @staticmethod
    def agregar_pelicula(pelicula):
        #  este método agrega una película al archivo, usa 'append' para no borrar el contenido anterior
        with open(CatalogoPeliculas.ruta_archivo, 'a', encoding='utf-8') as archivo:
            archivo.write(str(pelicula) + '\n')

    @staticmethod
    def listar_peliculas():
        try:
            # intenta abrir el archivo en modo lectura y mostrar su contenido  
            with open(CatalogoPeliculas.ruta_archivo, 'r', encoding='utf-8') as archivo:
                print('Películas en el catálogo:')
                print(archivo.read()) #lee el archivo y lo muestra en pantalla
        except FileNotFoundError:
            # si el archivo no existe, muestra un mensaje de error
            print('No se encontró el archivo de películas.')

    @staticmethod
    def eliminar():
        # verifica si el archivo existe antes de intentar eliminarlo
        if os.path.exists(CatalogoPeliculas.ruta_archivo):
            os.remove(CatalogoPeliculas.ruta_archivo)
            print('Archivo eliminado')
        else:
            #si no existe, informa al usuario
            print('No existe el archivo')
