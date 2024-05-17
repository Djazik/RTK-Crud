import React, { memo } from "react";
import "../productwrapper/index.css"
import { useDeleteUserMutation } from "../../context/api/UserApi";

const UsersWrapper = ({ users, isAdmin, }) => {
  let [deleteUser, { isLoading }] = useDeleteUserMutation();
  const handleDeleteUser = (id) => {
    deleteUser(id);
  };

  let userItems = users?.map((user) => (
    <div key={user.id} className="product__cart">
      <div className="product__img">
        <img src={user.avatar} alt={user.name} />
      </div>
      <div className="product__title">
        <h2 className="pr__title">{user.name}</h2>
        <p>{user.age}</p>
      </div>
      <p className="pr__text">
        There are many things are needed to start the Fast Food Business.
      </p>
      <div className="product__btn">
        {isAdmin ? (
          <div className="pr__edit">
            <button className="product__edit">edit</button>
            <button className="product__edit" onClick={() => handleDeleteUser(user.id)}>delete</button>
          </div>
        ) : (
          <></>
        )}
        
      </div>
    </div>

    // <div key={product.id}>
    //   <img src={product.avatar} alt="" />
    //   <h2>{product.title}</h2>
    //   <p>{product.price}$</p>
    //   {isAdmin ? (
    //     <>
    //       <button>edit</button>
    //       <button onClick={() => handleDeleteProduct(product.id)}>
    //         delete
    //       </button>
    //     </>
    //   ) : (
    //     <></>
    //   )}
    // </div>
  ));


  return (
    <div>
      <section className="container">
        <div className="menu__wrapper">
          <div className="menu">
            <h2 className="menu__title">User</h2>
            <h3 className="menu__text">Food Full of treaty Love</h3>
            <p className="menu_long__text">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers,
            </p>
          </div>
          <div className="pr__cart">{userItems}</div>
          {/* <div className="product__cart">{productItem}</div> */}
        </div>
      </section>
    </div>
  );
};

export default memo(UsersWrapper);
