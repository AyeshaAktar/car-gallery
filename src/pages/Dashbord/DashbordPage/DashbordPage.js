import React from "react";
import { useLocation } from "react-router";
import AddProduct from "../../AddProduct/AddProduct";

import ManageOrder from "../../ManageOrder/ManageOrder";

import ManageProducts from "../../ManageProducts/ManageProducts";
import MyOrder from "../../MyOrder/MyOrder";
import ReviewPage from "../../ReviewPage/ReviewPage";
import MakeAdmin from "../MakeAdmin/MakeAdmin";

const DashbordPage = () => {
  return (
    <div>
      <h2 className="my-5">Dashbord</h2>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="addProduct-tab"
            data-bs-toggle="tab"
            data-bs-target="#addProduct"
            type="button"
            role="tab"
            aria-controls="addProduct"
            aria-selected="true"
          >
            Add New Products
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="manageProducts-tab"
            data-bs-toggle="tab"
            data-bs-target="#manageProducts"
            type="button"
            role="tab"
            aria-controls="manageProducts"
            aria-selected="false"
          >
            Manage Products
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="manageOrder-tab"
            data-bs-toggle="tab"
            data-bs-target="#manageOrder"
            type="button"
            role="tab"
            aria-controls="manageOrder"
            aria-selected="false"
          >
            Manage Order
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="myOrder-tab"
            data-bs-toggle="tab"
            data-bs-target="#myOrder"
            type="button"
            role="tab"
            aria-controls="myOrder"
            aria-selected="false"
          >
            My Order
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="review-tab"
            data-bs-toggle="tab"
            data-bs-target="#review"
            type="button"
            role="tab"
            aria-controls="review"
            aria-selected="false"
          >
            Review
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="makeAdmin-tab"
            data-bs-toggle="tab"
            data-bs-target="#makeAdmin"
            type="button"
            role="tab"
            aria-controls="makeAdmin"
            aria-selected="false"
          >
            Make Admin
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="addProduct"
          role="tabpanel"
          aria-labelledby="addProduct-tab"
        >
          <AddProduct></AddProduct>
        </div>
        <div
          class="tab-pane fade"
          id="manageProducts"
          role="tabpanel"
          aria-labelledby="manageProducts-tab"
        >
          <ManageProducts></ManageProducts>
        </div>
        <div
          class="tab-pane fade"
          id="manageOrder"
          role="tabpanel"
          aria-labelledby="manageOrder-tab"
        >
          <ManageOrder></ManageOrder>
        </div>
        <div
          class="tab-pane fade"
          id="myOrder"
          role="tabpanel"
          aria-labelledby="myOrder-tab"
        >
          <MyOrder></MyOrder>
        </div>
        <div
          class="tab-pane fade"
          id="review"
          role="tabpanel"
          aria-labelledby="review-tab"
        >
          <ReviewPage></ReviewPage>
        </div>
        <div
          class="tab-pane fade"
          id="makeAdmin"
          role="tabpanel"
          aria-labelledby="makeAdmin-tab"
        >
          <MakeAdmin></MakeAdmin>
        </div>
      </div>
    </div>
  );
};

export default DashbordPage;
