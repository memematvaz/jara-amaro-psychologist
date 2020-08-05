import React from 'react';


class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: "",
        userName: "",
        userEmail: "",
        userMessage: "",

      };
    }

    updateUserName = (userName) => {
      this.setState({userName}, this.validateUserName)
      console.log(userName)
    }




    render() {
    const { status } = this.state;
    return (
     <div className="contact__container container">
    <h3>Si tienes cualquier duda o si quieres pedir cita<br/><span className="bold-title">¡No dudes en contactar conmigo!</span></h3>

<div className="contact__form-shape-container">

    <form className="contact__form"
          onSubmit={this.submitForm}
          action="https://formspree.io/mnqgwooo" 
          method="POST">

        <label htmlFor="name">Nombre y apellidos*</label>

          <input className={`${this.state.userName.length < 3 ? 'contact__input-bad' : 'contact__input-good'}`} type="text" name="name" id="name" placeholder="Ej. Rosario Espadas"  value={ this.state.userName } onChange={(e) => this.updateUserName(e.target.value)} required></input>
        

        <label htmlFor="phone">Teléfono</label>
          
          <input type="number" id="phone" name="phone" placeholder="Ej. 612345678"></input>
        

        <label htmlFor="email">Email*</label>
          
          <input type="text" id="email" name="email" placeholder="Ej. rosario@gmail.com" required></input>
        

        <label htmlFor="message">Mensaje*</label>
          
          <textarea className="contact__message" type="text" id="message"  name="message" placeholder="Escribe tu mensaje" required></textarea>
        
        <label className="contact__data-message"><input className="contact__checkbox" type="checkbox" value="other" required></input>Acepto los términos de <a href="../documents/data-protection.pdf" target="_blank" rel="noopener noreferrer">protección de datos.</a></label>

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
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
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