import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Navbar from "../../componentes/Navbar";
import Footer from "../../componentes/Footer.js";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
//import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import IcAñadir from "../../IconAñadir.gif";
import IcExpand from "../../IconExpandir.gif";


const EditarProveedor = () => {


    //se traen todos los campos para crear
    const [nombre, setNombre] = useState('')
    const [producto, setProducto] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [pais, setPais] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();


    //creacion de la funcion para guardar
    //Estos son los datos que guardara.
    const editarProveedor = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/proveedors/${id}`, {
            nombre: nombre,
            producto: producto,
            cantidad: cantidad,
            correo: correo,
            telefono: telefono,
            pais: pais,

        })
        navigate('/proveedors');
    }

    useEffect(() => {
        getProveedoresID()
        //eslint-disable-next-line
    }, []);

    //Esta parte es para mostrar los valores a editar
    const getProveedoresID = async () => {
        const resul = await APIInvoke.invokeGET(`/api/proveedors/${id}`)
        setNombre(resul.nombre)
        setProducto(resul.producto)
        setCantidad(resul.cantidad)
        setCorreo(resul.correo)
        setTelefono(resul.telefono)
        setPais(resul.pais)
    }





    return (

        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Editar proveedores"}
                    breadCrumb1={"Listado de proveedores"}
                    breadCrumb2={"Editar"}
                    ruta1={"/proveedors/editar"}
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
                            {/* En el onSubmit, podemos definir la funcion antes y llamarla, o llamar directamente la funcion*/}
                            <form onSubmit={editarProveedor}>

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
                                            placeholder="Ingrese los nombre del proveedor"
                                            value={nombre}
                                            //Aqui en el onChange, podemos crear la funcion antes y poderlo llamar aqui, o la agregamos de esta manera
                                            onChange={(e) => setNombre(e.target.value)}
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
                                            placeholder="Ingrese el producto a adquirir"
                                            value={producto}
                                            onChange={(e) => setProducto(e.target.value)}
                                            required >
                                        </input>
                                    </div>
                                </div>

                                <div className="p-1  bg-white ">
                                    <img src="https://img.icons8.com/color/48/holding-box.png" width="25" height="25" alt="name" />
                                </div>


                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="cantidad">Cantidad</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="cantidad"
                                            name="cantidad"
                                            placeholder="Ingrese la cantidad adquirida"
                                            value={cantidad}
                                            onChange={(e) => setCantidad(e.target.value)}
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
                                            onChange={(e) => setCorreo(e.target.value)}
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
                                            onChange={(e) => setTelefono(e.target.value)}
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
                                            placeholder="Ingrese ek pais del proveedor"
                                            value={pais}
                                            onChange={(e) => setPais(e.target.value)}
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



export default EditarProveedor