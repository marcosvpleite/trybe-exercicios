import React from 'react';

class Form extends React.Component {
    constructor () {
        super()
        this.state ={
            nome:'',
            idade:'',
            email:'',
            prioridade:'',
            mensagem:'',
            concorda: false,
        }
    }

     handleChange = ({target}) => {
        const { name } = target
        const value = target.type === 'checkbox' ? target.checked : target.value 
        this.setState({
            [name]: value,
        });
     }

    render() {
        const { name } = this.state;
        return(
            <form>
                <div>
                    <label htmlFor="nome"> Nome: 
                        <input type="text" name='nome' id='nome' placeholder='nome' onChange={ this.handleChange } value={ name }/>
                    </label>
                </div>
                <div>
                    <label htmlFor="idade">Idade:
                        <input type="number" name="idade" id='idade' placeholder='idade' onChange={ this.handleChange } value={ name }/>
                    </label>
                </div>
                <div>
                    <label htmlFor="email">E-mail:
                        <input type="email" name="email" id='email' placeholder='email' onChange={ this.handleChange } value={ name } />
                    </label>
                </div>
                <div>
                    <label htmlFor="prioridade">Prioridade
                        <select name="prioridade" id="prioridade" onChange={ this.handleChange } value={ name } >
                            <option value="baixa">baixa</option>
                            <option value="media">média</option>
                            <option value="alta">alta</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label htmlFor="mensagem">Mensagem:
                        <textarea name="mensagem" id="mensagem" cols="30" rows="5" placeholder='mensagem' onChange={ this.handleChange } value={ name } ></textarea>
                    </label>
                </div>
                <div>
                    <label htmlFor="concorda">
                    <input type="checkbox" name='concorda' id='concorda' onChange={ this.handleChange } value={ name } />
                    Concordo com os termos.
                    </label>
                </div>
                <fieldset>
                    <input type="file" />
                </fieldset>
            </form>
        );
    
    }
}

export default Form;