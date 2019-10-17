import React, { Component } from 'react';
import { CategoriasConsumer } from '../context/CategoriasContext';
import { EventosConsumer } from '../context/EventosContext';

class Formulario extends Component {

    state = {  
        nombre: '',
        categoria: ''
    }

    obtenerDatos = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() { 
        return ( 
            <EventosConsumer>
                {(value) => {

                    return (
                        
                        <form onSubmit={e => {
                            e.preventDefault();

                            value.obtenerEventos(this.state);
                        }}>
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca tu evento por Nombre o Categoria
                                </legend>
                            </fieldset> 

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        name="nombre"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Nombre de Evento o Ciudad "
                                        onChange={this.obtenerDatos}
                                    />
                                </div>

                                <div className="uk-margin" uk-margin="true">
                                    <select
                                        name="categoria"
                                        className="uk-select"
                                        onChange={this.obtenerDatos}
                                    >
                                    <option value="" disabled defaultValue>--Elige una categoría--</option>
                                    <CategoriasConsumer>
                                        {(value) => {
                                            return (
                                                value.categorias.map(categoria => (
                                                <option key={categoria.id} value={categoria.id} data-uk-form-select>{categoria.name_localized}</option>
                                            ))
                                            )
                                        }}
                                    </CategoriasConsumer>
                                    </select>
                                </div>

                                <div>
                                    <input 
                                        className="uk-button uk-button-danger"
                                        value="Buscar Eventos"
                                        type="submit"
                                    />
                                </div>
                            </div>
                        </form>
                    )
                }}
            </EventosConsumer> 
        );
    }
}
 
export default Formulario;