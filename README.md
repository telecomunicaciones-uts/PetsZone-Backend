# PetsZone-Backend 🐾
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
<h2>Routes for GET Method</h2>

<b>Obtain an invoice by ID:</b> <br>
http://localhost:4000/facturas/:idFactura <br><br>
This endpoint retrieves the details of a specific invoice identified by the idFactura parameter. The idFactura parameter is a placeholder for the unique identifier of the invoice you want to access. When you send a GET request to this URL with a specific idFactura, the server responds with the data corresponding to that invoice.

<b>Parameters:</b>
<ul>
<li>idFactura (path parameter): The unique identifier of the invoice.</li>
  </ul>
<b>Response:</b>
<ul>
<li><b>200 OK:</b>Returns the invoice details if the idFactura is valid.</li>
<li><b>404 Not Found:</b> Returns an error message if the idFactura does not exist.</li>
</ul>

<b>Saving path :</b> <br>
http://localhost:4000/api/facturas/guardar/idPersona/:idPersona/fechaFactura/:fechaFactura/numeroResolucion/:numeroResolucion
<br>
       This endpoint is used to save a new invoice with specific details. It requires three path parameters:
- **idPersona**: The unique identifier of the person associated with the invoice.
- **fechaFactura**: The date of the invoice in a specified format.
- **numeroResolucion**: The resolution number of the invoice.

When a GET request is made to this URL with valid parameters, the server processes the data and saves the new invoice.

## Parameters
- **idPersona** (path parameter): The unique identifier of the person.
- **fechaFactura** (path parameter): The date of the invoice (format should be specified, e.g., YYYY-MM-DD).
- **numeroResolucion** (path parameter): The resolution number of the invoice.

## Response
- **200 OK**: Returns a confirmation that the invoice has been saved successfully.
- **400 Bad Request**: Returns an error message if any of the parameters are invalid or missing.
- **404 Not Found**: Returns an error message if the endpoint is incorrect or not found.

# Video explaining API routes
https://unidadestecno-my.sharepoint.com/:v:/g/personal/ivillamizarc_uts_edu_co/EaYjeZuSdgRHjb9uQ44wx2gB4IZoyPB_S39XP5BODxdZLQ?referrer=Teams.TEAMS-WEB&referrerScenario=MeetingChicletGetLink.view
