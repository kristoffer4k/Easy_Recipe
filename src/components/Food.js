import React, {useState} from 'react';
// import '../styles/Food.scss';
import axios from 'axios';

const Food = () => {

    const [query, setQuery] = useState (``);
    const [rcp, setRcp] = useState ([]);
    
    const YOUR_APP_ID = '353d493e';
    const YOUR_APP_KEY = '18f4f90fe004e923f06c2ca3dae8e927';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

    async function getRecipe(){
        const result = await axios.get(url);
        setRcp(result.data.hits);
        console.log(result.data);
    }

    const submitForm = element => {
        element.preventDefault();
        getRecipe();
    }

    return ( 
        <div>

            <form className='form_3' onSubmit={submitForm}>
                <input type='text' placeholder="enter name" value={query} onChange={element => setQuery(element.target.value)}/>
                <button type='submit'>Enter</button>
            </form>

            <div>
                {rcp.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item['recipe']['image']} alt='' />
                            <p>{item['recipe']['label']}</p>
                            <p>{item['recipe']['calories'].toFixed(0)}</p>
                            <p>{<a href={item['recipe']['url']}>Read</a>}</p>
                        </div>
                    )
                    })}
            </div>

        </div>
     );
}
 
export default Food;
