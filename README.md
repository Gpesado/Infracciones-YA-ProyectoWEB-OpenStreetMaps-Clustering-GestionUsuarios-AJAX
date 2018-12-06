# Infracciones-YA-ProyectoWEB-OpenStreetMaps-Clustering-GestionUsuarios-AJAX
TP correspondiente a la materia Ingeniería de Software I dictada en la Universidad Nacional General Sarmiento. Esta pagina web llamada estacionamientosYA permite ver un mapa de puntos de estacionamiento validos utilizando Open Street Maps, permitiendo realizar clustering de los marcadores dependiendo del zoom. Ademas se podrán ver y generar infracciones de transito consumiendo un JSON de otra pagina web llamada infraccionesYA (con AJAX).

# INFORME
Universidad Nacional General Sarmiento

Alumnos:	
Gonzalo Pesado
Luciano Córdoba
Simón Ramírez
Lautaro Tacchini

Profesores:
Daniel Alvarez
Francisco Tarulla


Fecha de entrega:23/09/2016






Introducción
Objetivos del sistema:
El principal objetivo del sistema consiste en la implementación de un sistema de parquímetros digital para mejorar la calidad de la gestión de parquímetros manual. El sistema debe cumplir con las funcionalidades básicas de cualquier sistema de parquímetro:
Indicar tiempo de permanencia del vehículo.
Cobrar de acuerdo al tiempo de permanencia y registrar los pagos.
Generar infracciones en caso de que no se registre un pago.
Verificar si un auto en particular se encuentra en infracción.
Gestionar los lugares para estacionar de una zona determinada.
Nuestro sistema debe facilitar todas estas operaciones y lograr que los usuarios desempeñen sus tareas más fácilmente con el uso del sistema que sin él.
Otro objetivo a destacar del sistema es poder lograr una mejor administración en cuanto a los lugares disponibles para estacionar, ya que de acuerdo a qué zona pertenezca el parquímetro corresponde un precio distinto. El sistema debe agilizar los cambios de tarifas de acuerdo a la zona que pertenezca cada parquímetro. Para lograr esto, cada parquímetro cuenta con un código único, consideramos que en el código del parquímetro se debe incluir a qué zona pertenece para lograr un mejor rendimiento. El sistema debe llevar registro de los parquímetros ocupados y los parquímetros que se encuentran libres. Además se debe registrar que patente está ocupando cada espacio de estacionamiento.
El funcionamiento básico de nuestro sistema se realizará a partir del sistema de mensajería SMS. Cada conductor se debe registrar en nuestro sistema enviando un mensaje de texto. Los conductores tendrán un monto que representa el saldo disponible para ocupar parquímetros, el cual se podrá recargar en comercios adheridos. Además, los conductores indicaran el inicio y la finalización del uso de un lugar de estacionamiento por este mismo medio. A la vez, se plantea contar con una interfaz web a la cual los usuarios ya registrados en el sistema por SMS podrán acceder con su número de teléfono y una clave provista por el sistema. La interfaz web brindará a los usuarios funcionalidades adicionales como visualizar los lugares disponibles, ver los últimos espacios ocupados por el usuario, ver los comercios adheridos en los cuales se puede cargar saldo, ver los datos de su cuenta, ver las infracciones a su nombre, y verificar la ubicación de su vehículo en caso de que haya sido remolcado.
En el actual mecanismo de parquímetros existen inspectores que realizan las infracciones. Nuestro sistema debe llevar un registro de los inspectores y permitirles registrar las multas que haga a un conductor en infracción por medio de nuestro sistema. Las multas serán cargadas en un sistema externo. Para agilizar el trabajo del inspector, nuestro sistema con el número de patente del vehículo registrará si esa patente tiene un pago vigente o no y notificará al inspector. En adición a lo mencionado anteriormente, nuestro sistema deberá proporcionar un sistema de detección de autos por cámara para determinar si un auto se encuentra en infracción o no. Este sistema envía imágenes a un controlador que en caso de que exista una infracción avisa al inspector para que efectúe la infracción.

En conclusión, nuestro sistema tendrá como objetivos principales
- Agilizar el proceso de facturación de parquímetros.
- Mejorar la gestión de multas.
- Mejor visualización de los parquímetros (tarifas y ubicaciones).
- Tener un mejor registro de los estacionamientos utilizados.
- Agilizar el proceso de infracciones.
- Actualizar las tarifas con mayor facilidad.

PARA MAS INFORMACION REVISAR EL .DOC
