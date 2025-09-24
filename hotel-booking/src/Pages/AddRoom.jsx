import React from 'react'

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
        <div className='mt-8'>
        {Object.keys(images).map((key) => (
            <label htmlFor=""></label>
        ))}
        </div>
       </form>
    )
}

export default AddRoom
