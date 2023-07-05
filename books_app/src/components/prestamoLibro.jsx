import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginForm.css'

function PrestamoLibro(){
    return (
     <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>   
      <div className='login'>
        <h2 className='mb-3'>Préstamo de Libros</h2>
      <form className='needs-validation'>
      <div className='form-group was-validated mb-2'>
            <label htmlFor='titulo' className='form-label'>Título</label>
            <input type="titulo" className='form-control' required></input>
            <div className="invalid-feedback">
              Ingresá el título del libro          
            </div>
        </div>
        <div className='form-group was-validated mb-2'>
            <label htmlFor='codigo' className='form-label'>Código</label>
            <input type="codigo" className='form-control' required></input>
            <div className="invalid-feedback">
              Ingresá el código del libro            
            </div>
        </div>
        <div className='form-group was-validated mb-2'>
            <label htmlFor='copias' className='form-label'>Cantidad de copias</label>
            <input type="copias" className='form-control' required></input>
            <div className="invalid-feedback">
              Ingresá la cantidad de copias         
            </div>
        </div>
        <div className='form-group was-validated mb-2'>
            <label htmlFor='idusuario' className='form-label'>Nro. de usuario</label>
            <input type="idusuario" className='form-control' required></input>
            <div className="invalid-feedback">
              Ingresá tu número de usuario            
            </div>
        </div>    
        <div className='form-group was-validated mb-2'>
            <label htmlFor='fecha' className='form-label'>Fecha (dd,mm,aaaa)</label>
            <input type="fecha" className='form-control' required></input>
            <div className="invalid-feedback">
              Ingresá la fecha           
            </div>      
        </div>     
        <button type='submit' className='btn btn-succes w-100 mt-2'>Aceptar</button>
       </form>       
      </div>  
     </div> 
    )
}