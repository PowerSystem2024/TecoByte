import psycopg2  # esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(
    user="postgres", password="admin", host="127.0.0.1", port="5432", database="test_bd"
)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "SELECT * FROM persona WHERE id_persona = %s"  # Placeholder
            id_persona = input("Digite un número para el id_persona: ")
            cursor.execute(
                sentencia, (id_persona,)
            )  # de esta manera ejecutamos la sentencia
            registros = (
                cursor.fetchone()
            )  # recuperamos todos los registros que seran una lista
            print(registros)

except Exception as e:
    print(f"Ocurrió un error: {e}")
finally:
    conexion.close()
