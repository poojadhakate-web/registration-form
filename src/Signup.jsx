import React, {useState} from 'react';


export const Signup = () => {

    const [fullName, setFullName] = useState({
        fname: '',
        email: '',
        mobile: '',
        proff: '',
        pass: '',
        cpass: '',

    });

    const InpFun = (event) =>{
        console.log(event.target.value);
        const {value, name} = event.target;
        
        setFullName ((preValue)=>{
        console.log(preValue);
        return{
          ...preValue,
          [name] : value,
        
        };
        });
        }
        
        const submitFun = (event) =>{
        event.preventDefault();
        
        }

    return (
        <>
            <section className='signUp-sec'>
                <div className='container'>
                    <div className="form-container">
                        <div className='heading'>
                            <h1 className='text-center text-white'>Sign up</h1>
                           <div className="displayData">
                           <h3> {fullName.fname}</h3>
                            <p>{fullName.email}</p>
                            <p> {fullName.mobile}</p>
                            <p> {fullName.proff}</p>
                            <p>{fullName.pass}</p>
                            <p> {fullName.cpass}</p>
                           </div>

                        </div>

                        <div className='signup-form'>
                            <form onSubmit={submitFun}>
                                <div class="form-group">
                                    <label><i class="fa-solid fa-user"></i> Username</label>
                                    <input type="text" name="fname" autocomplete="off" required onChange={InpFun}  />
                                </div>

                                <div class="form-group">
                                    <label><i class="fa-solid fa-envelope"></i> E-mail Id</label>
                                    <input type="email" name="email" autocomplete="off" required onChange={InpFun} />
                                </div>

                                <div class="form-group">
                                    <label><i class="fa-solid fa-mobile-screen-button"></i> Mobile No</label>
                                    <input type="tel" name="mobile" autocomplete="off" required onChange={InpFun} />
                                </div>

                                <div class="form-group">
                                    <label><i class="fa-solid fa-user-tie"></i> Profession</label>
                                    <input type="text" name="proff" autocomplete="off" required onChange={InpFun} />
                                </div>

                                <div class="form-group">
                                    <label> <i class="fa-solid fa-key"></i> password</label>
                                    <input type="password" name="pass" autocomplete="off" required onChange={InpFun} />
                                </div>

                                <div class="form-group">
                                    <label><i class="fa-solid fa-key"></i> Confirm password</label>
                                    <input type="password" name="cpass" autocomplete="off" required onChange={InpFun} />
                                </div>

                                <button className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
