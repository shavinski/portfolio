import './Form.css'

function Form() {
    return (
        <section className="contact" id="contact">
            <div className='container-contact'>
                <div className='connect-title title'>Connect with Me</div>
                <form>
                    <div className='form-field'>
                        <label>Name</label>
                        <input></input>
                    </div>

                    <div className='form-field'>
                        <label>Email</label>
                        <input></input>
                    </div>

                    <div className='form-field'>
                        <label>Message</label>
                        <textarea></textarea>
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Form;