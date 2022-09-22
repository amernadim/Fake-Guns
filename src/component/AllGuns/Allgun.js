import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';

const Allgun = ({increaseCount}) => {
  const [guns , setGuns] = useState([]);
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
    .then(res => res.json())
    .then(data => setGuns(data))
  },[]);

  return (
    <div className='mt-4'>
    <div className='lg:px-8'>
    <h1 className="text-4xl text-center font-bold mt-4">
    Welcome To Fake Guns Store
    </h1>
    <p className='mt-3'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quam
      reiciendis, nulla iure nihil ab, laboriosam earum, suscipit quis
      quisquam saepe. Maxime provident officiis suscipit.
    </p>
    </div>  

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 lg:px-8 px-6'>
    {
      guns.map(gun => <Gun gun={gun}
        id={gun.id} 
        increaseCount={increaseCount}
        ></Gun>)
    }
    </div>

    </div>
  );
};

const Gun = (props) => {
  const [modalData, setModalData] = useState({});

  const {gun ,id,increaseCount} = props;
  const {name,img,bullet,capacity,action,price} = gun;
  // console.log(gun);
  return (
    <div className="card w-96 bg-base-100 shadow-xl w-full">
  <figure><img src={img} alt="Shoes" className='w-full h-52'/></figure>
  <div className="card-body">
    <h2 className="card-title">
     {name}
      <div className="badge badge-secondary">Price : ${price}</div>
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, atque.</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{action}</div> 
      <div className="badge badge-outline">{bullet}</div>
    </div>

    <div className='flex flex-wrap gap-2 justify-between mt-3'>
    <button onClick={increaseCount} className="btn btn-accent btn-sm">Add To Cart</button>
    {/* <button className="btn btn-warning btn-sm">open modal</button> */}
    <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className="btn modal-button btn btn-warning btn-sm">open modal</label>
    </div>

  </div>
  {modalData && (
        <Modal data={modalData} setModalData={setModalData}></Modal>
      )}
</div>
  )
}

export default Allgun;