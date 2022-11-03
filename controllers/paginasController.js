import { Testimonial } from "../models/testimoniales.js";
import { Viaje } from "../models/Viaje.js";



const paginaInicio = async  (rep,res) => { 

    //Consultar tres viajes
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Testimonial.findAll({limit: 3}))
    try {
       const resultado = await Promise.all(promiseDB)
        
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros = (rep,res) =>{ 
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (rep,res) =>{ 
    //consultar bases de datos
    const viajes = await Viaje.findAll();
    console.log(viajes)  
    res.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes
    });
}

const paginaTestimoniales = async (rep,res) =>{ 
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        });      
    } catch (error) {
        console.log(error)
    }
}

//Mostrar viaje x slug
const paginaDetalleViaje = async (rep,res) =>{ 

    const {slug} = rep.params;
    
    try {
        const viaje = await Viaje.findOne({where:{slug}});
        res.render('viaje',{
            pagina: 'Información Viaje',
            viaje
        })
        
    } catch (error) {
        console.log(error)
        
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}