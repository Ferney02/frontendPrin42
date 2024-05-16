import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./paginas/auth/Login";
import Registro from "./paginas/auth/Registro";
import Home from "./Home";
import MostrarClientes from "./paginas/modulos/MostrarClientes";
import AgregarClientes from "./paginas/modulos/AgregarClientes"
import EditarClientes from "./paginas/modulos/EditarClientes";

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

          </Routes>
        </Router>
      </Fragment>

    </div>
  );
}

export default App;
