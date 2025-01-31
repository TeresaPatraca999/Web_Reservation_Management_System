-- Verifica si la tabla 'usuarios' ya existe
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'usuarios') THEN
        -- Crea la tabla 'usuarios'
        CREATE TABLE usuarios (
            id SERIAL PRIMARY KEY,
            nombre VARCHAR(100) NOT NULL,
            telefono VARCHAR(15) NOT NULL,
            correo VARCHAR(100) NOT NULL
        );

        -- Inserta datos de prueba
        INSERT INTO usuarios (nombre, telefono, correo) VALUES
            ('Juan Pérez', '5551234567', 'juan@example.com'),
            ('María López', '5559876543', 'maria@example.com');
    END IF;
END $$;