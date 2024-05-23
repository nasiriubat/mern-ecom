//1. create a Add product page to do POST request
//2. create new endpoint for the page /AddProduct
//3. Create a new hook to do POST operation
//4. Create a form with formik to add products

import React from "react";
import { usePostProduct } from "../hooks/usePostProduct";
import { useFormik } from "formik";
import * as Yup from "yup";

const valuesSchema = {
  title: "",
  price: "",
  description: "",
  image: "",
  category: "",
};

const AddProductPage = () => {
  const { addProduct, product, isLoading, error } = usePostProduct();

  const formik = useFormik({
    initialValues: valuesSchema,
    validationSchema: Yup.object({
      title: Yup.string().min(3, "title must be more than 3").required(),
        price: Yup.number().min(1, "Price shold be more than 1").required(),
    }),
    onSubmit: (values) => {
      addProduct(values);
    },
  });

  console.log(formik);
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Add a product</h1>
      <input
        onChange={formik.handleChange}
        value={formik.values.title}
        type="text"
        id="title"
        placeholder="title"
      />

      {formik.touched.title && formik.errors.title ? (
        <div>{formik.errors.title}</div>
      ) : null}

      <input
        onChange={formik.handleChange}
        value={formik.values.price}
        type="number"
        id="price"
        placeholder="price"
      />
      
      {formik.touched.price && formik.errors.price ? (
        <div>{formik.errors.price}</div>
      ) : null}

      <input
        onChange={formik.handleChange}
        value={formik.values.description}
        type="text"
        id="description"
        placeholder="description"
      />
      
      {formik.touched.description && formik.errors.description ? (
        <div>{formik.errors.description}</div>
      ) : null}

      <input
        onChange={formik.handleChange}
        value={formik.values.image}
        type="text"
        id="image"
        placeholder="image"
      />
      
      {formik.touched.image && formik.errors.image ? (
        <div>{formik.errors.image}</div>
      ) : null}
      <input
        onChange={formik.handleChange}
        value={formik.values.category}
        type="text"
        id="category"
        placeholder="category"
      />
      <button type="submit ">add product</button>
    </form>
  );
};

export default AddProductPage;
