def main():
    print("|------------------------------------|")
    print("|    CALCULADORA DE MATERIALES       |")
    print("|------------------------------------|")
    print()
    menu()


def menu():
    while True:
        print("|-|-------------------------------|")
        print("| |  Seleccione una opción:       |")
        print("|-|-------------------------------|")
        print("|1| Calcular muro de ladrillos    |")
        print("|2| Calcular viga de hormigón     |")
        print("|3| Calcular columnas de hormigón |")
        print("|4| Calcular contrapisos          |")
        print("|5| Calcular techo                |")
        print("|6| Calcular pisos                |")
        print("|7| Calcular pintura              |")
        print("|8| Calcular iluminación          |")
        print("|9| Salir                         |")
        print("|-|-------------------------------|")
        try:
            opcion = int(input())
        except ValueError:
            opcion = 0

        if opcion == 1:
            calcular_muros()
        elif opcion == 2:
            calcular_viga()
        elif opcion == 3:
            calcular_columna()
        elif opcion == 4:
            calcular_contrapisos()
        elif opcion == 5:
            calcular_techo()
        elif opcion == 6:
            calcular_pisos()
        elif opcion == 7:
            calcular_pintura()
        elif opcion == 8:
            calcular_iluminacion()
        elif opcion == 9:
            salir()
            return
        else:
            print("|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|")
            print("| Opción inválida, vuelva a intentarlo.|")
            print("|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|")

def pedir_flotante(mensaje):
    while True:
        try:
            valor = float(input(mensaje))
            if valor > 0:
                return valor
            print("El valor debe ser mayor que cero.")
        except ValueError:
            print("Entrada inválida. Ingrese un número válido.")

def calcular_muros():
    print("|------------------------------------|")
    print("|        MURO DE LADRILLO            |")
    print("|------------------------------------|")
    respuesta = "s"
    superficie_muro_total = 0
    ladrillos_total = 0
    cemento_total = 0
    arena_total = 0

    while respuesta.lower() == "s":
        altura_muro = float(input("Digite la altura del muro en metros:\n"))
        ancho_muro = float(input("Digite el ancho del muro en metros:\n"))
        superficie_muro = altura_muro * ancho_muro

        while True:
            espesor_muro = int(
                input("Digite los centímetros de espesor del muro a construir (20cm/30cm):\n"))
            if espesor_muro in (20, 30):
                break
            print("Espesor incorrecto. Por favor, vuelva a ingresar el espesor:")

        if espesor_muro == 20:
            ladrillos_final = int(60 * superficie_muro)
            cemento_final = 10.9 * superficie_muro
            arena_final = 0.09 * superficie_muro
        else:
            ladrillos_final = int(70 * superficie_muro)
            cemento_final = 15.2 * superficie_muro
            arena_final = 0.115 * superficie_muro

        print("|------------------------------------CALCULO DEL MURO-------------------------------------|")
        print(f"| La superficie total del muro es: {superficie_muro:.2f} m²")
        print("| Para su construcción necesitará: ")
        print(f"| * Cemento: {cemento_final:.2f} kg")
        print(f"| * Ladrillos: {ladrillos_final}")
        print(f"| * Espesor muro: {espesor_muro} cm")
        print(f"| * Arena: {arena_final:.3f} m³")
        print("|-----------------------------------------------------------------------------------------|")

        superficie_muro_total += superficie_muro
        ladrillos_total += ladrillos_final
        cemento_total += cemento_final
        arena_total += arena_final

        while True:
            respuesta = input("¿Desea calcular otro muro? (s/n): ").lower()
            if respuesta in ("s", "n"):
                break
            print("Opción inválida. Por favor, vuelva a intentarlo.")

    print("|--------------------------------RESUMEN TOTAL DE MUROS----------------------------------|")
    print(
        f"| La superficie total de todos los muros es: {superficie_muro_total:.2f} m²")
    print("| Total de materiales necesarios: ")
    print(f"| * Cemento: {cemento_total:.2f} kg")
    print(f"| * Ladrillos: {ladrillos_total}")
    print(f"| * Arena: {arena_total:.3f} m³")
    print("|--------------------------------------------------------------------------------------|")


def calcular_viga():
    print("|------------------------------------|")
    print("|        VIGA DE HORMIGÓN            |")
    print("|------------------------------------|")
    total_cemento = 0
    total_arena = 0
    total_piedra = 0
    total_hierro = 0
    respuesta = "s"

    while respuesta.lower() == "s":
        largo = float(input("Ingrese el largo de la viga en metros: "))
        cemento = largo * 9
        arena = largo * 0.02
        piedra = largo * 0.02
        hierro = largo * 4

        print(f"Materiales necesarios para una viga de {largo} metros:")
        print(f"* Cemento (kg): {cemento:.2f}")
        print(f"* Arena (m3): {arena:.3f}")
        print(f"* Piedra (m3): {piedra:.3f}")
        print(f"* Hierro del 4 (metros): {hierro:.2f}")

        total_cemento += cemento
        total_arena += arena
        total_piedra += piedra
        total_hierro += hierro

        while True:
            respuesta = input(
                "¿Desea calcular los materiales de otra viga? (s/n): ").lower()
            if respuesta in ("s", "n"):
                break
            print("Opción inválida. Por favor, vuelva a intentarlo.")

    print("|------------------------------------CALCULO DE LA VIGA-------------------------------------|")
    print(f"| * Cemento (kg): {total_cemento:.2f}")
    print(f"| * Arena (m3): {total_arena:.3f}")
    print(f"| * Piedra (m3): {total_piedra:.3f}")
    print(f"| * Hierro del 4 (metros): {total_hierro:.2f}")
    print("|-------------------------------------------------------------------------------------------|")


def calcular_columna():
    print("|------------------------------------|")
    print("|      COLUMNA DE HORMIGÓN           |")
    print("|------------------------------------|")
    largo_columna = float(input("Ingrese el largo de la columna en metros: "))
    ancho_columna = float(input("Ingrese el ancho de la columna en metros: "))
    cantidad_columna = float(input("Ingrese la cantidad de columnas: "))

    columna_total = largo_columna * ancho_columna * cantidad_columna

    cemento = 7.5 * columna_total
    arena = 0.016 * columna_total
    piedra = 0.016 * columna_total
    hierro10 = 6 * columna_total
    hierro4 = 3 * columna_total

    print("|------------------------------------CALCULO DE LA COLUMNA-------------------------------------|")
    print(f"| Para {cantidad_columna:.2f} columna/s de {largo_columna:.2f} metros de largo y {ancho_columna:.2f} metros de ancho se necesitarán:")
    print(f"| * Cemento: {cemento:.2f} kg")
    print(f"| * Arena: {arena:.3f} m³")
    print(f"| * Piedra: {piedra:.3f} m³")
    print(f"| * Hierro del 10: {hierro10:.2f} m")
    print(f"| * Hierro del 4: {hierro4:.2f} m")
    print("|-----------------------------------------------------------------------------------------------|")


def calcular_contrapisos():
    print("|------------------------------------|")
    print("|         CONTRAPISOS                |")
    print("|------------------------------------|")
    espesor = float(
        input("Ingrese el espesor del contrapiso en centímetros: ")) * 0.01
    ancho = float(input("Ingrese el ancho del contrapiso en metros: "))
    largo = float(input("Ingrese el largo del contrapiso en metros: "))

    volumen_cemento = espesor * ancho * largo * 105
    volumen_arena = espesor * ancho * largo * 0.45
    volumen_piedra = espesor * ancho * largo * 0.9

    print("|------------------------------------CALCULO DE CONTRAPISO-------------------------------------|")
    print(
        f"| Para un contrapiso de {espesor:.2f} metros de espesor, {ancho:.2f} metros de ancho y {largo:.2f} metros de largo se necesitan:")
    print(f"| * Cemento: {volumen_cemento:.2f} kg")
    print(f"| * Arena: {volumen_arena:.3f} m³")
    print(f"| * Piedra: {volumen_piedra:.3f} m³")
    print("|----------------------------------------------------------------------------------------------|")


def calcular_techo():
    print("|------------------------------------|")
    print("|            TECHO                   |")
    print("|------------------------------------|")
    espesor = float(input("Ingrese el espesor del techo en metros: "))
    ancho = float(input("Ingrese el ancho del techo en metros: "))
    largo = float(input("Ingrese el largo del techo en metros: "))

    area_techo = largo * ancho

    cantidad_cemento = 33 * area_techo
    cantidad_arena = 0.072 * area_techo
    cantidad_piedra = 0.072 * area_techo
    cantidad_hierro8 = 7 * area_techo
    cantidad_hierro6 = 4 * area_techo

    print("|------------------------------------CALCULO DEL TECHO-------------------------------------|")
    print("| Para construir el techo necesitarás:")
    print(f"| * Cemento: {cantidad_cemento:.2f} kg")
    print(f"| * Arena: {cantidad_arena:.3f} m³")
    print(f"| * Piedra: {cantidad_piedra:.3f} m³")
    print(f"| * Hierro del 8: {cantidad_hierro8:.2f} m")
    print(f"| * Hierro del 6: {cantidad_hierro6:.2f} m")
    print("|------------------------------------------------------------------------------------------|")


def calcular_pisos():
    print("|------------------------------------|")
    print("|            PISOS                   |")
    print("|------------------------------------|")
    total_cemento = 0   # Contador para que al final nos diga cuánto material en total necesitamos
    total_arena = 0     # Contador para que al final nos diga cuánto material en total necesitamos
    total_piedra = 0    # Contador para que al final nos diga cuánto material en total necesitamos
    total_area = 0      # Contador para que al final nos diga cuánto material en total necesitamos
    respuesta = "s"

    while respuesta.lower() == "s":
        ancho = pedir_flotante("Ingrese el ancho del piso en metros:\n")   # Se creó una función en la línea 53, donde se le pide al usuario que ingrese un número mayor que 0
        largo = pedir_flotante("Ingrese el largo del piso en metros:\n")   # Se creó una función en la línea 53, donde se le pide al usuario que ingrese un número mayor que 0
        espesor_cm = pedir_flotante("Ingrese el espesor del piso en centímetros:\n")   # Se creó una función en la línea 53, donde se le pide al usuario que ingrese un número mayor que 0
        espesor = espesor_cm / 100   # Se transforma el número que colocó el usuario de cm a metros, para poder hacer los cálculos.

        volumen = largo * ancho * espesor
        cemento = volumen * 320  # Dosificación recomendada
        arena = volumen * 0.45   # Dosificación recomendada
        piedra = volumen * 0.9   # Dosificación recomendada

        print("|-------------------CALCULO DEL PISO-------------------|")
        print(f"| Piso de {largo:.2f} x {ancho:.2f} m y {espesor_cm:.1f} cm de espesor:")   # Nos va a imprimir las medidas del piso que ingresó el usuario
        print(f"| * Cemento: {cemento:.2f} kg")   # Nos va a dar la cantidad de cemento que se necesita
        print(f"| * Arena: {arena:.3f} m³")       # Nos va a decir la cantidad de arena necesaria
        print(f"| * Piedra: {piedra:.3f} m³")     # Nos va a decir la cantidad de piedra que necesita el usuario
        print("|------------------------------------------------------|")

        total_cemento += cemento   # Se va a guardar en la variable total_cemento la cantidad que nos dio cemento y se va a ir sumando a medida que el usuario agregue más cálculos.
        total_arena += arena       # Se va a guardar en la variable total_arena la cantidad que nos dio arena y se va a ir sumando a medida que el usuario agregue más cálculos.
        total_piedra += piedra     # Se va a guardar en la variable total_piedra la cantidad que nos dio piedra y se va a ir sumando a medida que el usuario agregue más cálculos.
        total_area += largo * ancho  # Se va a guardar en la variable total_area el largo y ancho que colocó el usuario y se va a ir sumando a medida que haga más cálculos.

        while True:
            respuesta = input("¿Desea calcular otro piso? (s/n):\n").lower()   # Le va a preguntar al usuario si quiere hacer otro cálculo de piso
            if respuesta in ("s", "n"):   # La respuesta tiene que ser 's' o 'n'
                break
            print("Opción inválida. Por favor, vuelva a intentarlo.")   # Sino nos dice que es inválida.

    print("|-------------------RESUMEN TOTAL DE PISOS-------------------|")
    print(f"| Área total: {total_area:.2f} m²")   # Nos va a decir el área total que se calculó de 1 o más pisos.
    print(f"| Cemento total: {total_cemento:.2f} kg")   #  Nos va a decir el cemento total que se calculó de 1 o más pisos.
    print(f"| Arena total: {total_arena:.3f} m³")   # Nos va a decir la arena total que se calculó de 1 o más pisos.
    print(f"| Piedra total: {total_piedra:.3f} m³")   #  Nos va a decir la piedra total que se calculó de 1 o más pisos.
    print("|------------------------------------------------------------|")


def calcular_pintura():
    print("|------------------------------------|")
    print("|           PINTURA                  |")
    print("|------------------------------------|")
    altura_pared = float(input("Ingrese la altura de la pared en metros: "))
    largo_pared = float(input("Ingrese el largo de la pared en metros: "))

    area_pared = altura_pared * largo_pared
    litros_pintura = area_pared * 0.1

    print("|------------------------------------CALCULO DE PINTURA-----------------------------------|")
    print(f"| Para pintar una pared de {area_pared:.2f} m² necesitarás:")
    print(f"| * Pintura: {litros_pintura:.2f} litros")
    print("|-----------------------------------------------------------------------------------------|")


def calcular_iluminacion():
    print("|------------------------------------|")
    print("|         ILUMINACIÓN                |")
    print("|------------------------------------|")
    ancho = float(input("Ingrese el ancho del área en metros: "))
    largo = float(input("Ingrese el largo del área en metros: "))

    area = ancho * largo
    iluminacion = area * 100

    print("|----------------------------------CALCULO DE ILUMINACION----------------------------------|")
    print(f"| Para iluminar un área de {area:.2f} m² necesitas:")
    print(f"| * Iluminación: {iluminacion:.2f} lúmenes")
    print("|-----------------------------------------------------------------------------------------|")


def salir():
    print("|====================|")
    print("| PROGRAMA TERMINADO.|")
    print("|====================|")
    print("          /\\_/\\  ")
    print("         ( o.o ) ")
    print("          > ^ <  ")


if __name__ == "__main__":
    main()
