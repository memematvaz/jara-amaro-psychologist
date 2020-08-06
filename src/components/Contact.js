import React from 'react';


class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: '',
        name: null,
        email: null,
        message: null,
        isChecked: false,
        errors: {
          name: '',
          email: '',
          message: '',
        
        }
      };
    }

    toggleChecked = (event) => {
      event.preventDefault();
    if(this.state.isChecked === false){
      console.log(this.state.isChecked)
      return (this.setState.isChecked === true);
    } 
    else {
      console.log(this.state.isChecked)
      return (this.setState.isChecked === false);
    } 
    }

    handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
    
      switch (name) {
        case 'name': 
          errors.name = 
            value.length < 5
              ? 'Debe contener al menos 5 caracteres'
              : '';
          break;
        case 'email': 
          errors.email = 
            value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) 
              ? ''
              : 'El email no es válido';
          break;
        case 'message': 
          errors.message = 
            value.length < 8
              ? '¡Cuéntame algo más!'
              : '';
          break;

        default:
          break;
      }
    
      this.setState({errors, [name]: value});
    }



    render() {
    const { status, errors } = this.state;
    return (
     <div className="contact__container container">
    <h3>Si tienes cualquier duda o si quieres pedir cita<br/><span className="bold-title">¡No dudes en contactar conmigo!</span></h3>

<div className="contact__form-shape-container">

    <form className="contact__form"
          onSubmit={this.submitForm}
          action="https://formspree.io/mnqgwooo" 
          method="POST">

        <label htmlFor="name">Nombre y apellidos<span>*</span></label>

          <input className={`${errors.name.length > 0 ? 'contact__input-bad' : ''}`} type="text" name="name" id="name" placeholder="Ej. Rosario Espadas"  value={ this.state.name } onChange={this.handleChange} required></input>
          {errors.name.length > 0 && 
                <span className='error'>{errors.name}</span>}

        <label htmlFor="phone">Teléfono</label>
          
          <input type="number" id="phone" name="phone" placeholder="Ej. 612345678"></input>
        

        <label htmlFor="email">Email<span>*</span></label>
          
          <input className={`${errors.email.length > 0 ? 'contact__input-bad' : ''}`} type="text" id="email" name="email" placeholder="Ej. rosario@gmail.com"  onChange={this.handleChange} value={ this.state.email } required></input>
          {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}

        <label htmlFor="message">Mensaje<span>*</span></label>
          
          <textarea className={`contact__message ${errors.message.length > 0 ? 'contact__input-bad' : ''}`} type="text" id="message"  name="message" placeholder="Escribe tu mensaje" value={ this.state.message } onChange={this.handleChange} required></textarea>
          {errors.message.length > 0 && 
                <span className='error'>{errors.message}</span>}

        <label className="contact__data-message">
          <input  className="contact__checkbox" name="protection" type="checkbox" defaultChecked={this.state.isChecked} onClick={ () => { this.setState({ isChecked: !this.state.isChecked }); console.log(this.state.isChecked) }} required></input>
          Acepto los términos de <a href="./data-protection.pdf" target="_blank" rel="noopener noreferrer">protección de datos.</a><span>*</span>
        </label>
        

        {status === "SUCCESS" ? <p>¡Gracias por escribirme!<br/> Te contestaré en el menor tiempo posible.</p> : <button disabled={errors.name.length > 0 || errors.email.length > 0|| errors.message.length > 0 || this.state.name === null || this.state.email === null  || this.state.message === null || this.state.isChecked === false}>Enviar</button>}
        {status === "ERROR" && <p>Por favor rellena todos los campos requeridos.</p>}

       
      </form>
      <div className="contact__shape"></div>



    </div>
  </div>
    );
}

submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE ) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }
    }


export default Contact;