'use client';
import "./login.css";
import { login } from "./hooks/authenticate";
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export default function Login() {

  const router = useRouter();

  const validationSchema = Yup.object().shape({
    correo: Yup.string().trim().required('El correo es requerido'),
    clave: Yup.string().trim().required('La clave es requerida')
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  let { errors } = formState;

  const sendInfo = (data) => {
    login(data).then((info) => {

      if (info.code == '200') {
        console.log(info);
        Cookies.set('token', info.datos.token);
        Cookies.set('user', info.datos.user);
        console.log(info.datos.user),
        swal({
          title: "Info",
          text: "Bienvenido " + info.datos.user,
          icon: "success",
          button: "Accept",
          timer: 4000,
          closeOnEsc: true,
        });
        router.push('/dashboard')
        router.refresh();
      } else {
        swal({
          title: "Error",
          text: info.error,
          icon: "error",
          button: "Accept",
          timer: 4000,
          closeOnEsc: true,
        });
        console.log(info);
        console.log("NO");
      }
    });
  };

  return (
    <body className="body">
      <form onSubmit={handleSubmit(sendInfo)}>
        <div className="login-container">
          <div className="login-header">
            <div>Bienvenido</div>
          </div>
          <input type="email" name="correo" {...register('correo')} className="login-input" placeholder="Ingrese su correo" id="username" />
          <input type="password" name="clave" {...register('clave')} className="login-input" placeholder="Ingrese su clave" id="password" maxLength="15" minLength="8" />
          <button className="login-button" id="login-button">Iniciar Sesion</button>
        </div>
      </form>
    </body>
  );
}