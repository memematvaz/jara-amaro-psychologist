import React from 'react';


class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }

    render() {
    const { status } = this.state;
    return (
     
    <form className="contact__form"
          onSubmit={this.submitForm}
          action="https://formspree.io/mnqgwooo" 
          method="POST">

        <label htmlFor="name">Nombre y apellidos*</label>
          
          <input type="text" name="name" id="name" placeholder="Ej. Rosario Espadas" required></input>
        

        <label htmlFor="phone">Teléfono*</label>
          
          <input type="text" id="phone" name="phone" placeholder="Ej. 612345678"></input>
        

        <label htmlFor="email">Email*</label>
          
          <input type="text" id="email" name="email" placeholder="Ej. rosario@gmail.com" required></input>
        

        <label htmlFor="message">Mensaje*</label>
          
          <input type="text" id="message"  name="message" placeholder="Escribe tu mensaje" required></input>
        
        {status === "SUCCESS" ? <p>¡Gracias por escribirme! Te contestaré en el menor tiempo posible</p> : <button>Enviar</button>}
        {status === "ERROR" && <p>Por favor rellena todos los campos requeridos.</p>}

       
      </form>

    
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