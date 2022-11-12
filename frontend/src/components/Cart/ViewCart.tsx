import { CartElement } from '@stripe/react-stripe-js'
import React , {useState , useEffect} from 'react'
import '../Cart/viewCart.css'
import DeleteIcon from '@mui/icons-material/Delete'
import {Link} from 'react-router-dom'
import ButtonUnstyled  from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import tarjetas from '../../assets/img/tarjetas.png'
import Counter from '../Counter/Counter'
import vacio from '../../assets/img/vacio.jpg'


const CustomButton = styled(ButtonUnstyled)`
  font-family: comspotM;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: #F99716;
  padding: 6px 24px;
  border-radius: 12px;
  width:200px;
  height:40px;
  color:#ffffff;
  transition: all .3s ease;
  cursor: pointer;
  margin-top:20px;
  margin-bottom:50px;
  border:none;
  &:hover {
    background-color: #1e1e1e;
    color:#ffffff;
  }
  `
  const CheckOut = styled(ButtonUnstyled)`
  font-family: comspotM;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: #12B107;
  padding: 6px 24px;
  width:200px;
  height:40px;
  color:#ffffff;
  transition: all .3s ease;
  cursor: pointer;
  margin-top:20px;
  margin-left:150px;
  border:none;
  &:hover {
    background-color: #1e1e1e;
    color:#ffffff;
  }
  `


const productos = [
    {
        id:1,
        nombre:"remera",
        precio:300,
        cantidad:1,
        info:"Remera estampada super liviana algodon",
        imagen:"https://d2r9epyceweg5n.cloudfront.net/stores/001/548/558/products/61-54d2061a5e58d4092016237984289408-1024-1024.png"

    },
    {
        id:2,
        nombre:"pantalon",
        precio:400,
        cantidad:1,
        info:"Pantalon verano - diferentes motivos",
        imagen:"https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg"

    },
    {
        id:3,
        nombre:"gorra",
        precio:100,
        cantidad:1,
        info:"Gorra tipo trucker - logo pintado a mano",
        imagen:"https://images-na.ssl-images-amazon.com/images/I/71i5DxLhSkL._UX385_.jpg"

    }
   
]


const ViewCart = () => {

    const [cart,setCart] = useState(productos)
    const[total,setTotal] = useState(0)


    const handlerVaciar = ()=>{
      setCart([])
    }

    useEffect(()=>{

        let result=0;
       for(const carro of cart){
         
         let final = carro.cantidad * carro.precio;
         result += final
       }
     
      setTotal(result)
     
     },[cart])
    


 
  return (
cart.length === 0 ? 
    <div className='vaciarCarrito'>
        <h2>Carro vacio</h2>
        <img src={vacio} alt="vacio"/>

        <Link to="/"><CustomButton
        sx={{marginLeft:45}}
        >Volver a comprar</CustomButton></Link>

      
    </div> : 
     <div className='contenedor_card'>
        <h2>Mis Compras</h2>
        <div className='contenedor_productos'>
            <div className='contenedor_productosTotales'>
            {cart.map(item => {
                return(
                    <div key={item.id} className='card_productos'>
                       <div className='card_productos-imagenes'>
                        <img src={item.imagen} alt="img"/>
                       </div>
                       <div className='card_productos-informacion'>
                        <h3>Precio: ${item.precio}</h3>
                        <p>{item.info}</p>
                        <Counter/>
                       </div>
                       <div className='card_productos-eliminar'>
                        
                        <Link to="/">
                        <DeleteIcon
                        color='error'
                        sx={{marginLeft:5}}
                        />
                        </Link>
                       </div>

                        
                        
                    </div>
                )
            })}
            </div>
            <div className='contenedor_totales'>
                <h2>precios totales</h2>
                <h3>Productos en total : {cart.length}</h3>
                <h3>Envio : <span>FREE</span></h3>
                <h2 className='texto_total'>Total : $ {total}</h2>
                <CheckOut>CheckOut</CheckOut>
                <p>Medios de pagos habilitados</p>
                <img src={tarjetas} alt="tarjetas"/>

         </div>
        

    </div>
        <CustomButton>Volver a comprar</CustomButton>
        <CustomButton
        onClick={handlerVaciar}
        sx={{backgroundColor:'red'}}
        >Vaciar carrito</CustomButton>
        
      
    </div>
  )
}

export default ViewCart
