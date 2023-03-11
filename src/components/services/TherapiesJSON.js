const THERAPIES =[
    {
        id:1,
        icon:'far fa-building',
        title: ' presenciales',
        price:'1 hora 60 €',
        text: 'Es ideal para quienes no tienen privacidad en su casa y buscan un espacio de empatía y escucha.',
        details: {
                how: 'La sesión se realizaría en mi clínica en el centro de Vigo.',
                time: 'Su duración sería de 1 hora y su precio 60 €',
                include: 'Incluye terapia, recomendaciones de ejercicios prácticos y guías en formato PDF que podrás consultar siempre que quieras.',
                perfect: 'Es ideal para quienes no tienen privacidad en su casa y buscan un espacio de empatía y escucha.',
                need: 'Lo único que necesitamos son tus ganas y compromiso para venir a la consulta. Y, si quieres, un cuaderno para anotar lo que vamos trabajando.'
            },       
            
        slogan: '¿Vienes y empezamos?',
    },
    {
        id:2,
        icon:'fas fa-desktop',
        title: ' online',
        price:'1 hora 60 €',
        text: 'Perfecto para ti si no deseas o te es imposible desplazarte.',
        details: {
            how: 'La sesión se realizaría mediante videoconferencia mediante Skype.',                 
            time: 'Su duración sería de 1 hora y su precio 60 €',
            include: 'Incluye terapia, recomendaciones de ejercicios prácticos y guías en formato PDF que podrás consultar siempre que quieras.',
            perfect: 'Es ideal para quienes no desean desplazarse o viven lejos de Vigo.',
            need: 'Necesitas un ordenador, tablet o teléfono con conexión a internet.'
            },
        slogan: '¿Nos vemos?',
    },
    {
        id:3,
        icon:'fas fa-mobile-alt',
        title: ' telefónicas',
        price:'1 hora 40 €',
        text: 'Ideal si no necesitas una terapia tan profunda o si quieres resolver una duda puntual.',
        details: {
            how: 'La sesión se realizaría mediante llamada telefónica.',                 
            time: 'Su duración sería de 1 hora y su precio de 40 €. Por 10 € más te atiendo en momentos de crisis, o dudas antes de la próxima cita.',
            include: 'Incluye terapia telefónica y recomendaciones de ejercicios prácticos.',
            perfect: 'Es ideal para quienes no quieren o necesitan una terapia tan profunda. Si quieres resolver una duda puntual o estás en un momento de crisis.',
            need: 'Solo necesitas un teléfono.'
        },
        slogan: 'Estoy a una llamada de distancia ¿Hablamos?',

    },
    {
        id:4,
        icon:'far fa-envelope',
        title: ' por email',
        price:'1 hora 20 €',
        text:  'Tu tipo de consulta si necesitas hablar con alguien que no te juzgue.',
        details: {
            how: 'La sesión se realizaría mediante correo electrónico.',                 
            time: 'Su duración sería de 1 hora y su precio de 20 €',
            include: 'Incluye terapia virtual y recomendaciones de ejercicios prácticos.',
            perfect: 'Es ideal para quienes no quieren o necesitan una terapia tan profunda. Si quieres resolver una duda puntual o estás en un momento de crisis.',
            need: 'Necesitas un ordenador, tablet o teléfono para escribir.'
            },
        slogan: 'Nos separa solo un correo electrónico ¿Me escribes?',
    },
    {
        id:5,
        icon:'fab fa-whatsapp',
        title: ' WhatsApp',
        price:'1 hora 20 €',
        text: 'Perfecto si no necesitas una consulta tan profunda y te es imposible desplazarte.',
        details: {
            how: 'La sesión se realizaría a través de WhatsApp.',                 
            time: 'Su duración sería de 1 hora y su precio de 20 €',
            include: 'Incluye terapia virtual, recomendaciones de ejercicios prácticos y guías en formato PDF que podrás consultar siempre que quieras.',
            perfect: 'Es ideal para quienes no quieren o necesitan una terapia tan profunda. Si quieres resolver una duda puntual o estás en un momento de crisis.',
            need: 'Necesitas un teléfono, WhatsApp e internet.'
        },
        slogan: 'Estoy a un mensaje de ti ¿Me escribes?'
    },
]
export default THERAPIES;