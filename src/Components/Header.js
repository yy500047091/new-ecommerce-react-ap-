import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row align-items-centre">
            <div className="col-6">
              <p className="text-white mb-0">Shipping Over $500</p>
            </div>
            <div className="col-6">
              <p className="text-left mb-0">
                Hotline :{" "}
                <a className="text-white" href='tel:"+91 7987282758'>
                  +91 7987282758
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-main-upper py-3">
        <div className="containe xxl">
          <div className="row">
            <div className=" text-end col-2">
              <h1>
                <Link className="text-white">KRISHNA PARADISE</Link>
              </h1>
            </div>
            <div className="text-end col-5 p-3 px-5">
              <div className="input-group-text ">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Search Product Here...."
                  aria-label="Search Product Here...."
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2 " id="basic-addon2">
                  <BsSearch className="fs-s4" />
                </span>
              </div>
            </div>
            <div className="col-5 py-0">
              <div className="header-upper-links d-flex align-items-centre justify-content-between py-2.5 p-4">
                <div>
                  <Link>
                    <img src="/images/compare.svg" alt="compare" />
                    <p>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p>
                      Favourite <br /> Whishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <img src="/images/user.svg" alt="user" />
                    <p>
                      Log In <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="align-items-center gap-10 text-white">
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$0.00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 align-items-centre">
              <div className="menu-bottom d-flex align-items-centre gap-30">
                <div>
                  <div class="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 align-items-centre d-flex"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="d-inline-block">Shop Categories</span>
                    
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li><Link>Action</Link></li>
                      <li><Link>Another</Link></li>
                      <li><Link>Another2</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links p-2 px-5 gap-60">
                  <div className="d-flex align-items-centre gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Our Strore</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
