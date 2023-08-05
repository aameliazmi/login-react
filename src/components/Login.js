import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
  });

  const history = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history(`/home?name=${formData.name}&password=${formData.password}`);
  };    

  return (
    <div className='d-flex w-100 vh-100 align-items-center justify-content-center'>
      <div class="shadow w-50 h-50 m-auto mb-10 bg-white rounded">
      <form onSubmit={handleSubmit}>
        <h2 align="center">LOGIN</h2>

      <div class='row'>
        <div class='col'>
          <div class="sticky-top">
            <div class="px-1 col-xl-6 offset-xl-2 text-center">
              <img src='https://ouch-cdn2.icons8.com/FAtCHjy3vLzCxGr-Gkr61u35OBM24v5reMvqykl7nfY/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy91aS1lbGVt/LzI0Ny9lNzE3MTA5/MC03NjZlLTQwMDgt/OGE5Zi1kZDNjNmJk/NjFhZTMuc3Zn.png'></img>
            </div>
          </div>
        </div>   

          <div class="d-grid gap-2 col-6 mx-auto">
                <h4>Username</h4>
                  <div class="form-contol nt-2">
                    <input type="text"  class="form-control nt-4 w-50" placeholder="username" id="floatinginput" name="name" value={formData.name} onChange={handleChange} />
                  </div>

                <h4>Password</h4>
                  <div class="form-contol nt-2">
                    <input type="password"  class="form-control nt-4 w-50" placeholder="Password" id="floatingPassword" name="password" value={formData.password} onChange={handleChange} />
                  </div>

                <button type="submit" class="btn btn-outline-success nt-4 w-50">Submit</button>
          </div>  
      </div>  
      </form>
    </div>
    </div>
        
  );
};

export default Login;