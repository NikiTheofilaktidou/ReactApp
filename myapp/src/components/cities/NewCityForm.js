import { useRef } from 'react'


import classes from './NewCityForm.module.css'
import Card from '../ui/Card'

function NewCityForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const countryInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitHandler(event) {
        event.preventDefault();
        console.log("Mpika");

        //---------------
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredCountry = countryInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const cityData = {
            title: enteredTitle,
            image: enteredImage,
            country: enteredCountry,
            description: enteredDescription
        }

        props.onAddCity(cityData);
    }


    return <Card>

        <form className={classes.form} onSubmit={submitHandler}         >


            <div className={classes.control}  >
                <label htmlFor='title' >Title</label>
                <input type="text" required id='title' ref={titleInputRef} />
            </div>

            <div className={classes.control} >
                <label htmlFor='image' >Image</label>
                <input type="url" required id='image' ref={imageInputRef} />
            </div>

            <div className={classes.control}   >
                <label htmlFor='country' >Country</label>
                <input type="text" required id='country' ref={countryInputRef} />
            </div>

            <div className={classes.control} >

                <label htmlFor='description' >Description</label>
                <textarea
                    id='description'
                    required
                    rows='5'
                    ref={descriptionInputRef}
                ></textarea>
            </div>

            <div className={classes.actions}   >
                <button>Add City</button>
            </div>




        </form>



    </Card>

}


export default NewCityForm