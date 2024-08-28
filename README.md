# PetsZone-Backend
 **Logo**
<div align="center">
<img src="img/logo.jpeg" alt="logo">
</div>
<em>The objective of this project is to develop a mobile application for PetsZone, a veterinary clinic dedicated to providing comprehensive care for pets. The application aims to enhance the client experience by offering a user-friendly interface where pet owners can easily access veterinary services, schedule appointments, and receive important updates regarding their pets' health.
<br>
<br><hr>
  <b><h2>DATABASE🛢</h2></b>
  <br><br>
  The following entity-relationship model is used for the PetsZone database.
<div align="center">
<img src="img/bd.jpeg" alt="logo">
</div>
  <h2>Main Tables</h2>
    <ul>
        <li>
            <strong>Persona:</strong> Contains personal information such as identifier (<em>idPersona</em>), name, registration date, document type, and more.
        </li>
        <li>
            <strong>UbicacionPersona:</strong> Stores location data including main address, secondary address, city, and country.
        </li>
        <li>
            <strong>Factura:</strong> Records billing data, including the person's identifier, date, resolution number, etc.
        </li>
        <li>
            <strong>MovimientoInventario:</strong> Details inventory movements, indicating the date, type of movement, payment method, and more.
        </li>
        <li>
            <strong>Inventario:</strong> Contains information on the products available in the inventory, such as quantity, price, stock, etc.
        </li>
        <li>
            <strong>Producto:</strong> Stores specific information about the products available, such as product name and brand.
        </li>
        <li>
            <strong>ContactoPersona:</strong> Registers contacts associated with a person, including the contact type and the corresponding person.
        </li>
    </ul>
<br>
    <h2>Related Tables</h2>
    <ul>
        <li>
            <strong>Pais, Departamento, Ciudad:</strong> These tables are hierarchically related to store geographical location.
        </li>
        <li>
            <strong>TipoPersona, TipoDocumento, TipoContacto:</strong> Define the corresponding types for people, documents, and contacts.
        </li>
        <li>
            <strong>DetalleMovimiento:</strong> Links inventory movements with specific details of each involved product.
        </li>
    </ul>
<br><hr>
<b>Projec Members</b><br>
  <ul>
  <li>Zarela Lizarazo</li>
  <li>Andres Sinuco</li>
<li>Diego Quintero</li>
<li>Imanol Villamizar</li>
  </ul><hr>

