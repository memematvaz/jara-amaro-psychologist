import React from 'react';

class Main extends React.Component {


    render() {
      
        return ( 
            <>
            <div className="main__container">
                <h3>Pasa el tiempo y <span className="bold-title">empiezas a pensar que tú eres el problema:</span> crees que nunca podrás escapar de ese callejón sin salida en el que te encuentas.</h3>
                <div className="main__lists-container">
                    <ul className="main__first-list">
                        <li>Has probado todo tipo de terapias, pero sigues sin ver los resultados</li>
                        <li>Vas a las sesiones con compromiso, realizas las actividades y pones de tu parte, pero sientes que no avanzas.</li>
                        <li>Los meses pasan, las sesiones se alargan y tu frustración por no ver mejoría se acumula.</li>
                        <li>Tus problemas siguen sin resolverse y tu desesperación es cada vez mayor.</li>
                        <li>Inviertes en terapia porque sabes que lo necesitas, pero los gastos aumentan y tú sigues sin sentirte bien.</li>
                    </ul>
                    
                    <div className="main__second-list-container">
                        <h3>Piensas que deberías mejorar, pero <span className="bold-title">cada vez te sientes peor.</span></h3>
                        <ul className="main__second-list">
                            <li>Te culpas porque crees que estás haciendo algo mal.</li>
                            <li>No entiendes por qué ves resultados y tu angustia crece día a día.</li>
                            <li>Piensas que eres un bicho raro, o la oveja negra de la familia.</li>
                        </ul>
                    </div>
                </div>
            </div>  
            <h3 className="card-list__introduction container">¿No te parece que necesitas sentirte mejor y recuperar tu vida?<br/>
            <span className="bold-title">Tu problema tiene solución y está más cerca de lo que piensas.</span>
            </h3>
            </>
        );
    }
}

export default Main;