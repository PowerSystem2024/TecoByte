from dominio.pelicula import Pelicula
from servicio.catalogo_peliculas import CatalogoPeliculas

#menu principal
opcion = None

while opcion != 4:
    print('\nMenú de opciones:')
    print('1) Agregar película')
    print('2) Listar películas')
    print('3) Eliminar archivo de películas')
    print('4) Salir')
    try:
        # el usuario elige una opción
        opcion = int(input('Seleccione una opción (1-4): '))

        if opcion == 1:
            # El usuario introduce el nombre
            nombre = input('Ingrese el nombre de la película: ')
            # se crea el objeto película
            pelicula = Pelicula(nombre)
            # se agrega al archivo
            CatalogoPeliculas.agregar_pelicula(pelicula)

        elif opcion == 2:
            # lista todas las películas guardadas
            CatalogoPeliculas.listar_peliculas()

        elif opcion == 3:
            # elimina el archivo .txt
            CatalogoPeliculas.eliminar()

        elif opcion == 4:
            # mensaje de despedida
            print('Saliendo del programa...')

        else:
            # validación de opción inválida
            print('Opción no válida.')

    except ValueError:
        print('Por favor, ingrese un número válido.')
