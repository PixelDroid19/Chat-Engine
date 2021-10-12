import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../actions/actionLogin';

export const Usuarios = ({history}) => {

 const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history.replace('/login');
  }


    return (
        <div>

            <form>
                <h1>Estudiantes</h1>
                <div className="form-group">
                    <div className="form-group col-md-4">
                        <label htmlFor="documento">Documento</label>
                        <input className="form-control" type="text" name="documento" id="documento" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="nombres">Nombres</label>
                        <input className="form-control" type="text" name="nombres" id="nombres" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input className="form-control" type="text" name="apellidos" id="apellidos" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="telefono">Teléfono</label>
                        <input className="form-control" type="text" name="telefono" id="telefono" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="celular">Celular</label>
                        <input className="form-control" type="text" name="celular" id="celular" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="direccion">Dirección</label>
                        <input className="form-control" type="text" name="direccion" id="direccion" />
                    </div>
                     <br/>
                    <div className="form-group col-md-4">
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}
                        />

                        <button className="btn btn-success">Imagen</button>
                    </div>

                    <div>
                        <button className="btn btn-primary"
                        onClick={handleLogout}>Logout</button>
                    </div>

                </div>
            </form>
        </div>
    )
}
