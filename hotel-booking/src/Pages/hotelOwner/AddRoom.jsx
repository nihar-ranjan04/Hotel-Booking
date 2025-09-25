import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import Title from '../../components/Title';

const AddRoom = () => {

    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null
    });

    const [inputs, setInputs] = useState({
        roomType: "",
        amenities: {
            'Free Wifi': false,
            'Free Breakfast': false,
            'Room Service': false,
            'Mountain View': false,
            'Pool Access': false,
        },
        pricePerNight: 0
       
    });

    return (
       <form action="">
        <Title align='left' font='outfit' title='Add New Room' subTitle='Fill in the details below to add a new room.' />
        {/*Upload area for images*/}
        <p className="text-gray-800 mt-10">Images</p>
        <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key) => (
            <label htmlFor={`roomImage${key}`} key={key}>
                <img className='max-h-13 cursor-pointer opacity-80' src={images[key]? URL.createObjectURL(images[key]) : assets.uploadArea} alt="" />
                <input type="file" accept='image/*' id={`roomImage${key}`} hidden onChange={(e) => setImages({...images, [key]:e.target.files[0]})} />
            </label>
        ))}
        </div>

        <div className='w-full flex max-sm:flex-col sm:gap-6 mt-4'>
            <div className='flex-1 max-w-48'>
            <p className="text-gray-800 mt-4">Room Type</p>
            <select value={inputs.roomType} onChange={(e) => setInputs({...inputs, roomType: e.target.value})} className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full">
                <option value="">Select Room</option>
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
                <option value="Luxury Room">Luxury Room</option>
                <option value="Family Suite">Family Suite</option>
            </select>
            </div>
            <div>
                <p className='mt-4 text-gray-800'>Price <span className='text-xs'>/night</span></p>
                <input type="number" value={inputs.pricePerNight} onChange={(e) => setInputs({...inputs, pricePerNight: e.target.value})} placeholder='0' className="border border-gray-300 mt-1 rounded p-2 w-24" />
            </div>
            
        </div>
        <p className='text-gray-800 mt-4'>Amenities</p>
        <div className='flex flex-wrap flex-col mt-1 text-gray-400 maz-w-sm'>
            {Object.keys(inputs.amenities).map((amenity, index) => (
                <div key={index}>
                    <input type="checkbox" id={`amenities${index+1}`} checked={inputs.amenities[amenity]} onChange={(e) => setInputs({...inputs, amenities: {...inputs.amenities, [amenity]: !inputs.amenities[amenity]}})} />
                    <label htmlFor={`amenities${index+1}`}>{amenity}</label>
                </div>
            ))}
                
        </div>
        <button className='bg-primary text-white rounded py-2 px-8 mt-8 cursor-pointer'>Add Room</button>
       </form>
    )
}

export default AddRoom
