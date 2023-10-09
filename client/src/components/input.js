import React, { useState } from 'react';
import './input.css';

const Input = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    // const createMyModelEntry = async (data) => {
    //     let form_data = new FormData();
    //     if(data.image)
    //         form_data.append("image", data.image, data.image.name);
    //     form_data.append("name", data.name);
    // }

    // const handleImageChange = (e) => {
    //     let newImage = { ...image };
    //     newImage["image"] = e.target.files[0];
    //     setImage(newImage);
    // };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try{
            const Brand = {
                name,
                image
            }

            // sending the request
            const response = await fetch("http://localhost:5000/brands", {
                // by default, fetch uses GET method, so specify POST as method
                method: "POST",
                body: JSON.stringify(Brand)
            });
            console.log(Brand);
           window.location = "/NewBrand"; //redirects to the brand screen
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div className='py-5 bg-gray-100 mt-5 rounded'>
            <div className='flex flex-row justify-between w-[80%] h-[37rem] mx-auto bg-white shadow-lg rounded'>
                <div className='w-[50%] my-auto'>
                    <form className='w-[100%] px-10' onSubmit={onSubmitForm} enctype="multipart/form-data">
                        <div className='flex flex-row justify-between items-center w-[100%]'>
                            <label className='block text-500 font-medium md:text-right mb-1 md:mb-0 pr-4'>
                                    Brand Name
                            </label>
                            <input className='border-1 border-black-500 w-[70%]' type='text' value={name} onChange={e => setName(e.target.value)}/>  
                        </div>

                        <div className='flex flex-row justify-between items-center w-full mt-4'>
                            <label className='block text-500 font-medium md:text-right mb-1 md:mb-0 pr-4' htmlFor="file_input">
                                Logo
                            </label>
                            <input class="block w-[70%] text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                                id="file_input" 
                                type="file" 
                                accept="image/jpeg, image/png"
                                name='image'
                                value={image} 
                                onChange={e => setImage(e.target.value)} 
                            />
                        </div>
                        <small class="mt-1 float-right text-xs text-gray-500 dark:text-gray-300" id="file_input_help">
                            PNG or JPG(MAX. 800x400px).
                        </small>
                        <div className=''>
                            <button className='bg-black text-gray-200 py-2 px-5 w-full mt-5 rounded hover:bg-gray-900 active:bg-white active:border active:border-black-600 active:text-black-800'>Add</button>
                        </div>
                    </form>
                </div>
                
                <div className='addbrand h-[100%] w-[100%] my-auto w-[50%]'>
                </div>
            </div>
        </div>
        
    )
}

export default Input;