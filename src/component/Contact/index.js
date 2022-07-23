import React from 'react'
import FooterBar from '../FooterBar'
import {
  Wrapper,
  ContainerInfoContact,
  Button,
  ContainerButton,
  Form,
  ContainerImageProduct,
  ContainerContacUs,
  Title,
} from './style'
import FieldText from '../FieldText'
import FieldTextArea from '../FieldArea'
import ImageProduct from '../../assets/images/Product/Product_Image_05-removebg-preview.png'
import useContactForm from 'hook/useContactForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContacUsComponent = () => {
  const { sendEmail } = useContactForm()
  return (
    <Wrapper id="ContactUS">
      <ContainerContacUs>
        <ContainerInfoContact>
          <Title>Signup to receive updates about new products</Title>
          <Form id="miForm" onSubmit={sendEmail}>
            <FieldText placeholder="Nombre" name="user_name" />
            <FieldText placeholder="Correo" name="user_email" />
            <FieldTextArea placeholder="Mensaje" name="user_message" />
            <ContainerButton>
              <Button>Enviar</Button>
            </ContainerButton>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Form>
        </ContainerInfoContact>
        <ContainerImageProduct>
          <img src={ImageProduct} alt={ImageProduct} />
        </ContainerImageProduct>
      </ContainerContacUs>
      <FooterBar />
    </Wrapper>
  )
}
export default React.memo(ContacUsComponent)
