import { useState } from 'react';
import './Form.css'

function Form() {
    const startingData = {
        name: '',
        email: '',
        message: '',
    }
    const [formData, setFormData] = useState(startingData)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

    function handleSubmit(e) {
        e.preventDefault();

    }

    return (
        <section className="contact" id="contact">
            <div className='container-contact'>
                <div className='connect-title title'>Connect with Me</div>
                <form>
                    <div className='form-field'>
                        <label className='form-label' type='text' id='name'>Name</label>
                        <input 
                        className='form-input'
                        type='text' 
                        value={startingData.name} 
                        onChange={handleChange}
                        placeholder='Your name'></input>
                    </div>

                    <div className='form-field'>
                        <label className='form-label' type='text' id='name'>Email</label>
                        <input 
                        className='form-input'
                        type='text' 
                        value={startingData.name} 
                        onChange={handleChange}
                        placeholder='Your email'></input>
                    </div>

                    <div className='form-field'>
                        <label className='form-label' type='text' id='name'>Message</label>
                        <textarea 
                        className='form-input'
                        type='text' 
                        value={startingData.name} 
                        onChange={handleChange}
                        ></textarea>
                    </div>

                    <button 
                    type='click' 
                    onClick={handleSubmit}>
                    Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Form;