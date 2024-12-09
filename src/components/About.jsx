import React, { useContext, useEffect, useState } from 'react';
import productContext from '../context/productContext';
import Camera1 from '../assets/images/camera1.jpg';
import { BsThreeDots } from "react-icons/bs";
import EditProductModal from './EditProductModal';

const About = () => {
    const context = useContext(productContext);
    const { 
        state: { cart }, 
        dispatch, 
        product, 
        fetchAllProducts, // Renamed function for clarity and to match proper naming conventions
        deleteProduct, 
        editProduct 
    } = context;

    const [menuVisible, setMenuVisible] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        if (typeof fetchAllProducts === 'function') {
            fetchAllProducts(); // Corrected the function call
        } else {
            console.error("fetchAllProducts is not a function");
        }
    }, [fetchAllProducts]);

    const toggleMenu = (id) => {
        setMenuVisible((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const openEditModal = (product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    const closeEditModal = () => {
        setModalVisible(false);
        setSelectedProduct(null);
    };

    const saveEdit = (updatedData) => {
        editProduct(selectedProduct._id, updatedData);
        closeEditModal();
    };

    const handleDelete = async (id) => {
        console.log("Deleting product...");
        await deleteProduct(id);
    };

    return (
        <div className="container">
            <div className="row">
                <h4 className="our-product-title">My Product</h4>
                {product.map((item) => (
                    <div key={item._id} className="col-md-3">
                        <div className="card">
                            <img src={Camera1} className="card-img-top" alt="Product" />
                            <div className="card-body">
                                <div className="three-dots">
                                    <h5 className="card-title">{item.title}</h5>
                                    <BsThreeDots onClick={() => toggleMenu(item._id)} />
                                    {menuVisible[item._id] && (
                                        <div className="menu-options">
                                            <button onClick={() => openEditModal(item)}>Edit</button>
                                            <button onClick={() => handleDelete(item._id)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">Rs. {item.price}</p>
                                {cart && cart.some((p) => p._id === item._id) ? (
                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: item,
                                            })
                                        }
                                    >
                                        Remove from cart
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            dispatch({
                                                type: "ADD_TO_CART",
                                                payload: item,
                                            })
                                        }
                                    >
                                        Add to cart
                                    </button>
                                )}
                            </div>
                        </div>
                        {modalVisible && selectedProduct && selectedProduct._id === item._id && (
                            <EditProductModal
                                product={selectedProduct}
                                onClose={closeEditModal}
                                onSave={saveEdit}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
