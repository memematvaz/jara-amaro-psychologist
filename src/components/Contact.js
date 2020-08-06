import React from 'react';


class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: '',
        userName: null,
        userEmail: null,
        userMessage: null,
        isChecked: false,
        errors: {
          name: '',
          email: '',
          message: '',
          protection: '',
        }
      };
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
          case 'protection': 
          errors.protection = 
            this.isChecked = true
              ? 'Por favor acepta los términos'
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

        <label htmlFor="name">Nombre y apellidos*</label>

          <input className={`${errors.name.length > 0 ? 'contact__input-bad' : ''}`} type="text" name="name" id="name" placeholder="Ej. Rosario Espadas"  value={ this.state.userName } onChange={this.handleChange} required></input>
          {errors.name.length > 0 && 
                <span className='error'>{errors.name}</span>}

        <label htmlFor="phone">Teléfono</label>
          
          <input type="number" id="phone" name="phone" placeholder="Ej. 612345678"></input>
        

        <label htmlFor="email">Email*</label>
          
          <input className={`${errors.email.length > 0 ? 'contact__input-bad' : ''}`} type="text" id="email" name="email" placeholder="Ej. rosario@gmail.com"  onChange={this.handleChange} required></input>
          {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}

        <label htmlFor="message">Mensaje*</label>
          
          <textarea className={`contact__message ${errors.message.length > 0 ? 'contact__input-bad' : ''}`} type="text" id="message"  name="message" placeholder="Escribe tu mensaje"  onChange={this.handleChange} required></textarea>
          {errors.message.length > 0 && 
                <span className='error'>{errors.message}</span>}

        <label className="contact__data-message"><input className="contact__checkbox" name="protection" type="checkbox" onChange={this.handleChange} defaultChecked={this.state.isChecked} required></input>Acepto los términos de <a href="./data-protection.pdf" target="_blank" rel="noopener noreferrer">protección de datos.</a></label>
        {errors.protection.length > 0 && 
                <span className='error'>{errors.protection}</span>}

        {status === "SUCCESS" ? <p>¡Gracias por escribirme!<br/> Te contestaré en el menor tiempo posible.</p> : <button>Enviar</button>}
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