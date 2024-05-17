import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./paginas/auth/Login";
import Registro from "./paginas/auth/Registro";
import Home from "./Home";
import MostrarClientes from "./paginas/modulos/MostrarClientes";
import AgregarClientes from "./paginas/modulos/AgregarClientes"
import EditarClientes from "./paginas/modulos/EditarClientes";
import MostrarProveedor from "./paginas/modulos/ProveedoresMostrar";
import AgregarProveedor from "./paginas/modulos/ProveedoresAgregar";
import EditarProveedor from "./paginas/modulos/ProveedoresEditar";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>

            {/* Las rutas que van aqui, es la ruta a la que va a ir el usuario cuando de click al boton, o habra el aplicativo, o similares*/}
            <Route path="/" exact element={<Login />}></Route>
            <Route path="/Registro" exact element={<Registro />}></Route>
            <Route path="/home" exact element={<Home/>} />
            <Route path="/clientes" exact element={<MostrarClientes/>} />
            <Route path="/clientes/agregar" exact element={<AgregarClientes/>} />
            <Route path="/clientes/editar/:id" exact element={<EditarClientes/>} />
            <Route path="/proveedors" exact element={<MostrarProveedor/>} />
            <Route path="/proveedors/agregar" exact element={<AgregarProveedor/>} />
            <Route path="/proveedors/editar/:id" exact element={<EditarProveedor/>} />

          </Routes>
        </Router>
      </Fragment>

    </div>
  );
}

export default App;
