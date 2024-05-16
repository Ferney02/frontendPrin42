import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Navbar from "../../componentes/Navbar";
import Footer from "../../componentes/Footer.js";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


const AgregarClientes = () => {

    const navigate = useNavigate();
    const [clientes, setClientes] = useState({
        nombres: '',
        apellidos: '',
        ndocumento: '',
        correo: '',
        telefono: '',
        direccion: ''
    });

    const { nombres, apellidos, ndocumento, correo, telefono, direccion } = clientes;

    useEffect(() => {
        document.getElementById("nombres").focus();
    }, [])

    const onChange = (e) => {
        setClientes({
            ...clientes,
            [e.target.name]: e.target.value
        })
    }


    const crearCliente = async () => {

        const data = {
            nombres: clientes.nombres,
            apellidos: clientes.apellidos,
            ndocumento: clientes.ndocumento,
            correo: clientes.correo,
            telefono: clientes.telefono,
            direccion: clientes.direccion
        }

        const response = await APIInvoke.invokePOST('/api/clientes', data);
        const idClientes = response._id;

        if (idClientes === '') {
            const msg = 'Hubo un error al agregar el cliente';
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

            navigate("/clientes");
            const msg = 'El cliente fue agregado correctamente';
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

            setClientes({
                nombres: '',
                apellidos: '',
                ndocumento: '',
                correo: '',
                telefono: '',
                direccion: ''
            });
        }
    }


    const onSubmit = (e) => {
        e.preventDefault();
        crearCliente();
    }






    return (

        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Agregar Clientes"}
                    breadCrumb1={"Listado de clientes"}
                    breadCrumb2={"Agregar"}
                    ruta1={"/cliente/agregar"}
                />


                <section className="content">
                    <div className="card">
                        <div className="card-header">

                            <div className="card-tools">

                                <button type="buttom" className="btn btn-tool" data-card-widget="collapse"
                                    title="Collapse">
                                    <i className="fas fa-times" />
                                </button>

                                <button type="buttom" className="btn btn-tool" data-card-widget="remove"
                                    title="Remove">
                                    <i className="fas fa-items" />
                                </button>

                            </div>
                        </div>


                        <div className="card-body">
                            <form onSubmit={onSubmit}>


                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombres">Nombres</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombres"
                                            name="nombres"
                                            placeholder="Ingrese los nombres del cliente"
                                            value={nombres}
                                            onChange={onChange}
                                            required >
                                        </input>
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>




                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="apellidos">Apellidos</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="apellidos"
                                            name="apellidos"
                                            placeholder="Ingrese los nombres del apellidos"
                                            value={apellidos}
                                            onChange={onChange}
                                            required >
                                        </input>
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>


                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="ndocumento">Cedula</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="ndocumento"
                                            name="ndocumento"
                                            placeholder="Ingrese la cedula del cliente"
                                            value={ndocumento}
                                            onChange={onChange}
                                            required >
                                        </input>
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
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

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
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

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>


                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="direccion">Direccion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="direccion"
                                            name="direccion"
                                            placeholder="Ingrese la direccion del cliente"
                                            value={direccion}
                                            onChange={onChange}
                                            required >
                                        </input>
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary" >
                                        Agregar
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

export default AgregarClientes