import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import imagen_portada from "../../assets/imagen_portada.png";

import "./Home.scss";
import { Header } from "../../shared/header/Header";
import { Footer } from "../../shared/footer/Footer";

export const Home = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    documentType: Yup.string().required("El tipo de documento es obligatorio"),
    documentNumber: Yup.string()
      .required("El número de documento es obligatorio")
      .matches(/^\d+$/, "Solo se permiten números"),
    phoneNumber: Yup.string()
      .required("El número de celular es obligatorio")
      .matches(/^\d{9}$/, "El número debe tener 9 dígitos"),
    privacyPolicy: Yup.boolean().oneOf(
      [true],
      "Debe aceptar la Política de Privacidad"
    ),
    commercialPolicy: Yup.boolean().oneOf(
      [true],
      "Debe aceptar las Comunicaciones Comerciales"
    ),
  });

  const formik = useFormik({
    initialValues: {
      documentType: "DNI",
      documentNumber: "",
      phoneNumber: "",
      privacyPolicy: false,
      commercialPolicy: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Formulario enviado:", values);
      navigate("/plans");
    },
  });

  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <div className="picture">
          <div className="container">
            <img src={imagen_portada} alt="Familia" className="family-image" />
          </div>
        </div>
        <div className="title">
          <div className="container">
            <span>Seguro Salud Flexible</span>
            <h1 className="title">Creado para ti y tu familia</h1>
          </div>
        </div>
        <div className="form">
          <div className="container">
            <p>
              <strong>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </strong>
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="input-container-form">
                <select
                  name="documentType"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.documentType}
                >
                  <option value="DNI">DNI</option>
                  <option value="RUC">RUC</option>
                </select>
                {formik.touched.documentType && formik.errors.documentType && (
                  <div className="error">{formik.errors.documentType}</div>
                )}
                <input
                  type="text"
                  name="documentNumber"
                  placeholder="Nro. de documento"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.documentNumber}
                />
              </div>
              {formik.touched.documentNumber &&
                formik.errors.documentNumber && (
                  <div className="error">{formik.errors.documentNumber}</div>
                )}
              <input
                className="input-form"
                type="text"
                name="phoneNumber"
                placeholder="Celular"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="error">{formik.errors.phoneNumber}</div>
              )}

              <div className="policies">
                <label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="privacyPolicy"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.privacyPolicy}
                  />
                  Acepto la Política de Privacidad
                </label>
                {formik.touched.privacyPolicy &&
                  formik.errors.privacyPolicy && (
                    <div className="error">{formik.errors.privacyPolicy}</div>
                  )}
                <label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="commercialPolicy"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.commercialPolicy}
                  />
                  Acepto la Política Comunicaciones Comerciales
                </label>
                {formik.touched.commercialPolicy &&
                  formik.errors.commercialPolicy && (
                    <div className="error">
                      {formik.errors.commercialPolicy}
                    </div>
                  )}
                <a href="#" className="">
                  Aplican Términos y Condiciones.
                </a>
              </div>
              <button type="submit" className="submit-btn">
                Cotiza aquí
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
