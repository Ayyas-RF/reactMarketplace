import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { rupiahFormat } from "../utils";

const Cart = () => {
  const { cart } = useSelector(root => root);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="p-4">
          {cart.map((p, idx) => (
            <div className="card" key={idx}>
              <div className="card-header">
                <h5 className="card-title">{p?.product_name}</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <img
                      src={p?.product_image}
                      className="card-img-top"
                      alt={p?.product_image}
                    />
                  </div>
                  <div className="col-6">
                    <p className="card-text">Qty : {p?.stock}</p>
                    <p className="card-text">
                      Price : {rupiahFormat(p?.price)}
                    </p>
                    <p className="card-text">Description : {p?.description}</p>
                    <p className="card-text">
                      Subtotal : {rupiahFormat(p?.price * p?.stock)}
                    </p>
                  </div>
                  <div className="col-2">
                    <a href="#" className="btn btn-danger">
                      <i className="fa fa-trash"></i> Remove
                    </a>
                  </div>
                </div>
              </div>
              {idx === cart.length - 1 && (
                <div className="card-footer">
                  <div className="row">
                    <div className="col-6">
                      <button className="btn btn-success">Checkout</button>
                    </div>
                    <div className="col-6">
                      <p className="card-text">
                        Payment:{" "}
                        {rupiahFormat(
                          cart.reduce(
                            (acc, current) =>
                              acc + current.price * current.stock,
                            0
                          )
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
