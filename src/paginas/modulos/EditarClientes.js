import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Navbar from "../../componentes/Navbar";
import Footer from "../../componentes/Footer.js";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
//import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";


const EditarClientes = () => {


    //se traen todos los campos para crear
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellido] = useState('')
    const [ndocumento, setNdocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();


    //creacion de la funcion para guardar
    //Estos son los datos que guardara.
    const editarCliente = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/clientes/${id}`, {
            nombres: nombres,
            apellidos: apellidos,
            ndocumento: ndocumento,
            correo: correo,
            telefono: telefono,
            direccion: direccion,

        })
        navigate('/clientes');
    }

    useEffect(() => {
        getClientesID()
        //eslint-disable-next-line
    }, []);

    //Esta parte es para mostrar los valores a editar
    const getClientesID = async () => {
        const resul = await APIInvoke.invokeGET(`/api/clientes/${id}`)
        setNombres(resul.nombres)
        setApellido(resul.apellidos)
        setNdocumento(resul.ndocumento)
        setCorreo(resul.correo)
        setTelefono(resul.telefono)
        setDireccion(resul.direccion)
    }





    return (

        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Editar Clientes"}
                    breadCrumb1={"Listado de clientes"}
                    breadCrumb2={"Editar"}
                    ruta1={"/cliente/editar"}
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
                            {/* En el onSubmit, podemos definir la funcion antes y llamarla, o llamar directamente la funcion*/}
                            <form onSubmit={editarCliente}>


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
                                            //Aqui en el onChange, podemos crear la funcion antes y poderlo llamar aqui, o la agregamos de esta manera
                                            onChange={(e) => setNombres(e.target.value)}
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
                                            onChange={(e) => setApellido(e.target.value)}
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
                                            onChange={(e) => setNdocumento(e.target.value)}
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
                                            onChange={(e) => setCorreo(e.target.value)}
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
                                            onChange={(e) => setTelefono(e.target.value)}
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
                                            onChange={(e) => setDireccion(e.target.value)}
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
                                        Editar
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



export default EditarClientes