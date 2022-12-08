import React, { useState } from "react";
import { Formik } from "formik";

import useFetch from "./hooks/useFetch";
import ListPokemon from "./cards/ListPokemon";

const Form = () => {
  const [formSent, setFormSent] = useState(false);

  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`);

  const current = useFetch(url);
  const { data } = current;

  return (
    <div className="container">
      <Formik
        initialValues={{
          image: "",
        }}
        validate={(values) => {
          let errores = {};

          return errores;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          setFormSent(true);
        }}
      >
        {({
          touched,
          handleSubmit,
          errors,

          values,
          handleChange,
          handleBlur,
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="image" style={{ textAlign: "center" }}>
                Tipea la cantidad imagenes a mostrar
              </label>
              <input
                type="number"
                id="image"
                name="image"
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.image && errors.image && (
                <div className="error">{errors.image}</div>
              )}
            </div>
            {formSent && <p className="exito">Formulario enviado!</p>}
            <br />{" "}
            {(values.image > 0) & (values.image < 16) ? (
              <ListPokemon results={data} numCaracter={values.image} />
            ) : (
              <p style={{ textAlign: "center" }}>La cantidad máxima es 15 </p>
            )}
            <br />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
