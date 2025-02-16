# Neko-Pulse-Coffee-M3-Henry
# 📖 Neko Café - Sistema de Reservas ☕🐱

## Descripción del Proyecto

### 📌 Temática

Este proyecto es una plataforma de **reservas en un Manga Café**. La idea es ofrecer una **experiencia fluida y sencilla** para que los usuarios puedan registrarse, iniciar sesión y reservar su espacio de lectura y café favorito.  

El desafío principal era desarrollar una aplicación funcional que **gestionara reservas en tiempo real**, asegurando la validez de los datos y manteniendo una arquitectura bien organizada.

---

## 🚀 Tecnologías Utilizadas

### Backend 🛠️
- **Lenguaje:** TypeScript  
- **Framework:** Express  
- **Base de Datos:** PostgreSQL (SQL)  
- **ORM:** TypeORM  
- **Seguridad:** Bcrypt para encriptación de contraseñas  
- **Autenticación y Validaciones:** Middleware personalizado  
- **Gestión de Transacciones:** QueryRunner & EntityManager  
- **Gestión de Correos:** Nodemailer  
- **Ejecución Automática:** Nodemon y transpilación de TypeScript a JavaScript  

### Frontend 🎨
- **Librería:** React  
- **Gestión de Estado:** Context API  
- **Ruteo:** React Router  
- **Solicitudes HTTP:** Axios  
- **Alertas Interactivas:** SweetAlert2  
- **Empaquetador:** Vite  

---

## 🔧 Backend - Arquitectura y Funcionalidades

El **backend** se basa en **Express y TypeScript** con una base de datos en **PostgreSQL**. Se implementaron **buenas prácticas de desarrollo**, asegurando un código modular, reutilizable y seguro.

### 🏗️ Organización del Proyecto
- Uso de **scaffolding funcional** para una estructura clara.  
- Implementación de **middlewares** para:
  - **Validar datos** en las solicitudes.
  - **Evitar valores vacíos** en parámetros y body.  
- **Repositorio dedicado** para manejar lógica de reservas (validación de horarios y fechas).  
- **Transacciones SQL** implementadas con `QueryRunner` y `EntityManager`.  

### 🔒 Seguridad y Autenticación
- **Cifrado de contraseñas** con **Bcrypt**.  
- **Manejo de errores centralizado** en todas las rutas.  
- **Autenticación segura** en el inicio de sesión.  

### 📩 Notificaciones por Correo
Cada vez que un usuario:
✅ Se registra  
✅ Crea una reserva  
✅ Cancela una reserva  
Se envía un **correo de confirmación** a través de **Nodemailer**.

### 🔄 Compilación Automática
- Transpilación automática de TypeScript a JavaScript en una carpeta `dist`.  
- Uso de **Nodemon** para reiniciar el servidor en cada cambio.  

### 🔗 Relaciones en la Base de Datos
1. **User** `OneToOne` → **Credential**  
2. **User** `OneToMany` → **Appointments (Reservas)**  

---

## 🎨 Frontend - Arquitectura y Funcionalidades

El **frontend** fue desarrollado con **React** y sigue buenas prácticas para mantener una estructura modular y eficiente.

### 📂 Organización del Código
- **Componentes reutilizables** para una mejor mantenibilidad.  
- **Páginas bien organizadas** para gestionar la navegación.  
- **Uso de Context API** para manejar el estado global de la aplicación.  

### 📋 Formularios y Funcionalidad
Se implementaron **tres formularios clave**:  
1. **Registro de Usuario** 📝  
2. **Inicio de Sesión** 🔐  
3. **Creación de Reservas** 📅  

Cada formulario valida los datos ingresados y proporciona **feedback en tiempo real** al usuario.

### 🔄 Experiencia Dinámica
- **Actualización en tiempo real** de la información.  
- **Alertas interactivas** con **SweetAlert2** para mejorar la experiencia del usuario.  

---

## 📌 Instalación y Ejecución

### 🔹 Clonar el repositorio:
```bash
git clone https://github.com/tu_usuario/neko-cafe.git
cd neko-cafe
