import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Navbar from "../../componentes/Navbar";
import Footer from "../../componentes/Footer.js";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import IcAñadir from "../../IconAñadir.gif";
import IcExpand from "../../IconExpandir.gif";


const AgregarProveedor = () => {

    const navigate = useNavigate();
    const [proveedores, setProveedores] = useState({
        nombre: '',
        producto: '',
        cantidad: '',
        correo: '',
        telefono: '',
        pais: ''
    });

    const { nombre, producto, cantidad, correo, telefono, pais } = proveedores;

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])

    const onChange = (e) => {
        setProveedores({
            ...proveedores,
            [e.target.name]: e.target.value
        })
    }


    const crearProveedor = async () => {

        const data = {
            nombre: proveedores.nombre,
            producto: proveedores.producto,
            cantidad: proveedores.cantidad,
            correo: proveedores.correo,
            telefono: proveedores.telefono,
            pais: proveedores.pais
        }

        const response = await APIInvoke.invokePOST('/api/proveedors', data);
        const _idProveedores = response._id;

        if (_idProveedores === '') {
            const msg = 'Hubo un error al agregar el prove';
            swal({
                title: 'Error',
                text: msg,
                icon: 'errro',
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

        } else {

            navigate("/proveedors");
            const msg = 'El prove fue agregado correctamente';
            swal({
                title: 'Informacion',
                text: msg,
                icon: 'success',
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

            setProveedores({
                nombre: '',
                producto: '',
                cantidad: '',
                correo: '',
                telefono: '',
                pais: ''
            });
        }
    }


    const onSubmit = (e) => {
        e.preventDefault();
        crearProveedor();
    }






    return (

        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Agregar Proveedores"}
                    breadCrumb1={"Listado de proveedores"}
                    breadCrumb2={"Agregar"}
                    ruta1={"/proveedors/agregar"}
                />


                <section className="content">
                    <div className="card">
                        <div className="card-header">

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


                        <div className="card-body">
                            <form onSubmit={onSubmit}>


                                <div className="p-1  bg-secondary ">
                                    <img src="https://img.icons8.com/cute-clipart/64/name.png" width="25" height="25" alt="name" />
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre"
                                            name="nombre"
                                            placeholder="Ingrese los nombres del proveedor"
                                            value={nombre}
                                            onChange={onChange}
                                            required >
                                        </input>
                                    </div>
                                </div>


                                <div className="p-1  bg-light">
                                    <img src="https://img.icons8.com/nolan/64/product.png" width="25" height="25" alt="name" />
                                </div>




                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="producto">Producto</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="producto"
                                            name="producto"
                                            placeholder="Ingrese los productos adquiridos"
                                            value={producto}
                                            onChange={onChange}
                                            required >
                                        </input>
                                    </div>
                                </div>

                                <div className="p-1  bg-white ">
                                    <img src="https://img.icons8.com/color/48/holding-box.png" width="25" height="25" alt="name" />
                                </div>


                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="cantidad">Cantidad del producto</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="cantidad"
                                            name="cantidad"
                                            placeholder="Ingrese la cantidad adquirida"
                                            value={cantidad}
                                            onChange={onChange}
                                            required >
                                        </input>
                                    </div>
                                </div>

                                <div className="p-1  bg-width ">
                                    <img src="https://img.icons8.com/bubbles/50/email--v1.png" width="40" height="40" alt="name" />
                                </div>


                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="email">Correo</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="correo"
                                            name="correo"
                                            placeholder="Ingrese el correo del cliente"
                                            value={correo}
                                            onChange={onChange}
                                            required >
                                        </input>
                                    </div>
                                </div>

                                <div className="p-1  bg-transparent ">
                                    <img src="https://img.icons8.com/pulsar-color/48/cell-phone.png" width="30" height="30" alt="name" />
                                </div>


                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="telefono">Telefono</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="telefono"
                                            name="telefono"
                                            placeholder="Ingrese el telefono del Cliente"
                                            value={telefono}
                                            onChange={onChange}
                                            required >
                                        </input>
                                    </div>
                                </div>

                                <div className="p-1  bg-light ">
                                    <img src="https://img.icons8.com/dusk/64/geography--v1.png" width="30" height="30" alt="name" />
                                </div>


                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="pais">Pais</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="pais"
                                            name="pais"
                                            placeholder="Ingrese el pais del proveedor"
                                            value={pais}
                                            onChange={onChange}
                                            required >
                                        </input>
                                    </div>
                                </div>


                                <div className="d-grid gap-2 col-3 mx-auto">
                                    <button type="submit" className="btn btn-outline-success" >
                                        <img src={IcAñadir} alt="Añadir" width="45" height="35" />
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default AgregarProveedor