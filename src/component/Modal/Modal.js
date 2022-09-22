import React from 'react';

const Modal = (props) => {
  // console.log(props);
  const {name,img,bullet,capacity,action,price} = props.data;
  // console.log(name,img,bullet,capacity,action,price);
  return (
    <div>
      {/* <!-- The button to open modal --> */}
      {/* <label htmlFor="my-modal-3" className="btn modal-button">open modal</label> */}

      {/* <!-- Put this part before </body> tag --> */}

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
      <div className="modal-box relative">
        <label onClick={() => props.setModalData(null)}
         htmlFor="my-modal-3" 
         className="btn btn-sm btn-circle absolute right-2 top-2"
         >✕</label>
        <h3 className="text-lg font-bold">{name}</h3>
        <img className='mt-3' src={img} alt="" />
        <p className="py-4">{action}</p>
        <p className="py-4">Price : ${price}</p>
      </div>
      </div>
    </div>
  );
};

export default Modal;