import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Navbar from "../../componentes/Navbar";
import Footer from "../../componentes/Footer.js";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";
import IcEditar from "../../IconEditar.gif";
import IcEliminar from "../../IconEliminar.gif";
import IcAñadir from "../../IconAñadir.gif";
import IcExpand from "../../IconExpandir.gif";


const MostrarProveedor = () => {

    const [proveedores, setProveedores] = useState([]);

    const getProveedores = async () => {

        const response = await APIInvoke.invokeGET('/api/proveedors');
        setProveedores(response.proveedores);
    }


    useEffect(() => {
        getProveedores();
    }, [])


    const eliminarUnProveedor = async (e, _idProveedores) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/proveedors/${_idProveedores}`);

        if (response.msg === "El prove fue eliminado") {
            const msg = "El prove fue eliminado correctamente";
            swal({
                title: 'Information',
                text: msg,
                icon: 'succes',
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });
            getProveedores();
        } else {


            const msg = 'Hubo un error al eliminar el proveedor en la base de datos';
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        }
    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Listado de proveedores"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Proveedores"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">

                            <h3 className="card-title">
                                <Link to={"/proveedors/agregar"}
                                    className="btn btn-light" >
                                    <img src={IcAñadir} alt="Añadir" width="45" height="35" />
                                </Link>
                            </h3>

                            <div className="card-tools">

                                <button type="buttom" className="btn btn-tool" data-card-widget="collapse"
                                    title="Collapse">
                                    <img src={IcExpand} alt="Añadir" width="20" height="15" />
                                </button>

                                <button type="buttom" className="btn btn-tool" data-card-widget="remove"
                                    title="Remove">
                                    <i className="fas fa-items" />
                                </button>

                            </div>
                        </div>

                        <div className="card-body" >

                            <table className="table table-bordered">

                                <thead>
                                    <tr>
                                        <th style={{ width: '15%' }}>Nombres del proveedor</th>
                                        <th style={{ width: '15%' }}>Producto</th>
                                        <th style={{ width: '15%' }}>Cantidad</th>
                                        <th style={{ width: '20%' }}>Correo</th>
                                        <th style={{ width: '10%' }}>Telefono</th>
                                        <th style={{ width: '15%' }}>Pais</th>
                                        <th style={{ width: '10%' }}>Acciones</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {proveedores.map((proveedor, index) => (
                                        <tr key={index}>
                                            <td>{proveedor.nombre}</td>
                                            <td>{proveedor.producto}</td>
                                            <td>{proveedor.cantidad}</td>
                                            <td>{proveedor.correo}</td>
                                            <td>{proveedor.telefono}</td>
                                            <td>{proveedor.pais}</td>

                                            <td>
                                                <Link to={`/proveedors/editar/${proveedor._id}`}
                                                    className="btn btn-sm bt-primary" >
                                                    <img src={IcEditar} alt="Editar" width="27" height="23" />
                                                </Link>
                                                <button onClick={(e) => eliminarUnProveedor(e, proveedor._id)}
                                                    className="btn btn-sm bt-danger">
                                                    <img src={IcEliminar} alt="Eliminar" width="30" height="26" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}




                                </tbody>

                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}


export default MostrarProveedor