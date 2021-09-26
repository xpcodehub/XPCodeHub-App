import {toast} from "react-toastify";

const positionCenter = "top-center";
export class ToastService {
    sucesso = (frase) => {
        toast.success(frase, {
            position: positionCenter,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    aviso = (frase) => {
        toast.warn(frase, {
            position: positionCenter,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        })
    }

    erro = (frase) => {
        toast.error(frase, {
            position: positionCenter,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        })
    }


}
