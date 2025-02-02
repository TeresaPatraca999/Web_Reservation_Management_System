const express = require('express');
const path = require('path');
const sequelize = require('./database');  // Conexión a la BD
const Payment = require('./Payment');       // Modelo de Payment
const Cita = require('./Cita');           // Modelo de Cita
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Middleware para parsear JSON y datos de formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde el directorio actual
app.use(express.static(__dirname));

// Ruta para index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint para guardar el pago (Información del formulario)
app.post('/api/payment', async (req, res) => {
  try {
    console.log('Datos recibidos en el endpoint /api/payment:', req.body); // Imprimir los datos recibidos

    const newPayment = await Payment.create({
      paisRegion: req.body.servicio, // Corregido
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      direccion: req.body.direccion,
      colonia: req.body.colonia,
      codigoPostal: req.body.codigoPostal,
      ciudad: req.body.ciudad, // Corregido (antes era "cuidad")
      estado: req.body.estado,
      numeroTelefonico: req.body.telefono, // Corregido (antes era "numeroTelefonico")
      numeroTarjeta: req.body.tarjeta, // Corregido (antes era "numeroTarjeta")
      fechaVencimiento: req.body.fechaVencimiento,
      codigoSeguridad: req.body.codigoSeguridad,
      totalPagar: req.body.totalPagar
    });

    console.log('Pago guardado en la base de datos:', newPayment); // Imprimir el objeto guardado en la BD

    res.status(201).json(newPayment);
  } catch (error) {
    console.error('Error al guardar el pago:', error);
    res.status(500).json({ error: 'Error al guardar el pago' });
  }
});

// Endpoint para guardar la cita (Información del formulario)
app.post('/api/cita', async (req, res) => {
  try {
    console.log('Datos recibidos en el endpoint /api/cita:', req.body); // Imprimir los datos recibidos

    const newCita = await Cita.create({
      nombre_cliente: req.body.nombre_cliente,
      telefono_cliente: req.body.telefono_cliente,
      correo_cliente: req.body.correo_cliente,
      servicio: req.body.servicio,
      lugar: req.body.lugar,
      precio: req.body.precio,
      fecha: req.body.fecha,
      horario: req.body.horario,
      tarjeta_credito: req.body.tarjeta_credito,
      fecha_reserva: req.body.fecha_reserva || new Date() // Usamos la fecha actual si no se recibe
    });

    console.log('Cita guardada en la base de datos:', newCita); // Imprimir el objeto guardado en la BD

    res.status(201).json(newCita);
  } catch (error) {
    console.error('Error al guardar la cita:', error);
    res.status(500).json({ error: 'Error al guardar la cita' });
  }
});


// Sincronizar los modelos y arrancar el servidor
sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos y modelos sincronizados');
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
  });
