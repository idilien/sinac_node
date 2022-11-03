import { Testimonial } from "../models/testimoniales.js";



const guardarTestimonial = async (req,res) =>{
    //Validar form
    const {nombre, email, mensaje} = req.body;

    const errores =[];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'Nombre esta vacio' });
    }
    if(email.trim() === ''){
        errores.push({mensaje: 'Email esta vacio' });
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'Mensaje esta vacio' });
    }
    
    if(errores.length > 0){
        //Consultar testimoniales
        const testimoniales = await Testimonial.findAll();

        //Vista Errores
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            email,
            mensaje,
            testimoniales
        })
    }else{
        //Almacenar en la db
        try {
            await Testimonial.create({
                nombre,
                email,
                mensaje
            });
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }
    }

}

export {
    guardarTestimonial

} 
    