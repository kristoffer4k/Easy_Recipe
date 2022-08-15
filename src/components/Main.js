import React, {useState} from 'react';
import '../styles/Main.scss';
import axios from 'axios';


const Main = () => {

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
        <section className='main'>

            <div className='content'>
                <h1>Find the recipe you want!</h1>
            </div>

            <form className='form_1' onSubmit={submitForm}>
                <input type='text' placeholder="Search by dish, ingredient or keyword" 
                 value={query} onChange={element => setQuery(element.target.value)}/>
                <button type='submit' className='search'>Search</button>
            </form>

            <div className='print'>
                {rcp.map((item, index) => {
                    return (
                        <div key={index} className='product'>
                            <img src={item['recipe']['image']} alt='' className='image'/>
                            <p className='tittle'>{item['recipe']['label']}</p>
                            <div className='items'>
                                <p className='cuisine'>Cuisine: {item['recipe']['cuisineType']}</p>
                                <p className='cuisine'>Type: {item['recipe']['mealType']}</p>
                                <p className='ingredients'>Ingredients: {item['recipe']['ingredients'].length}</p>
                                <p className='diet'>Diet: {item['recipe']['dietLabels']}</p>
                                <p className='calories'>Calories: {item['recipe']['calories'].toFixed(0)} kcal</p>
                            </div>
                            <button className='open'>{<a href={item['recipe']['url']} target="_blank" rel="noopener noreferrer">Open</a>}</button>
                        </div>
                    )
                    })}
            </div>

        </section>
     );
}
 
export default Main;
