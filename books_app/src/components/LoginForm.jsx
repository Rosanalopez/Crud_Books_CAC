import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginForm.css'

const LoginForm = () => {
    return (
     <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>   
      <div className='login'>
        <h2 className='mb-3'>Login</h2>
      <form className='needs-validation'>
        <div className='form-group was-validated mb-2'>
            <label htmlFor='email' className='form-label'>Usuario</label>
            <input type="email" className='form-control' required></input>
            <div className="invalid-feedback">
              Ingresá tu email            
            </div>      
        </div> 
        <div className='form-group was-validated mb-2'>
            <label htmlFor='password' className='form-label'>Contraseña</label>
            <input type="password" className='form-control' required></input>
            <div className="invalid-feedback">
              Ingresá tu contraseña            
            </div>
        </div> 
        <div className='form-group form-check mb-2'>
            <input type="checkbox" className='form-check-input'></input>
            <label htmlFor='check' className='form-check-label'>Recordarme</label>
        </div>    
        <button type='submit' className='btn btn-succes w-100 mt-2'>Iniciar Sesión</button>
        <p className='titulo' >No estás registrado? <a class="referencia" href="UserCreate.js">Registrarme</a></p>
       </form>       
      </div>  
     </div> 
    )
}

export default LoginForm;