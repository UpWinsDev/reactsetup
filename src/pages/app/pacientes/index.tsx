import React from 'react'
import Boxdash from '../../../components/Boxdash'

// import { Container } from './styles';

const SvgDocument = ({type}) => {
    switch (type) {
        case 'dtNasc':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            )
            
            break;
        case 'email':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        
            break;
        case 'fone':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            )
        
            break;
        case 'plano':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
            break;
        case 'agendar':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
            break;
        case 'edit':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            )
            break;
        case 'prontuario':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
            break;
        case 'checked':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            )
            break;
        case 'cancel':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
            )
            break;
        default:
            break;
    }
}

const ListPacientes = () => {
    return (
        <Boxdash className='hover:bg-sky-900 hover:text-sky-50'>
            <div className="text-center">
                <h1><b>João Pereira da Silva</b></h1>
                <p>123.456.789-10</p>
                </div>
            <div className="mt-3 text-xs grid md:grid-row-4 lg:grid-row-4 px-1">
                <p className="flex gap-2"><SvgDocument type="dtNasc"/>20/04/2000</p>
                <p className="flex gap-2"><SvgDocument type="email"/>email@email.com.br</p>
                <p className="flex gap-2"><SvgDocument type="fone"/>48 9 1234 - 4567</p>
                <p className="flex gap-2"><SvgDocument type="plano"/>Plano mais vida</p>
            </div>
            <div className="grid grid-cols-3 text-center gap-2 mt-3 px-3">
                <span className="border-2 rounded-full w-10 h-10 mx-auto cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><SvgDocument type="edit"/></span>
                <span className="border-2 rounded-full w-10 h-10 mx-auto cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><SvgDocument type="agendar"/></span>
                <span className="border-2 rounded-full w-10 h-10 mx-auto cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><SvgDocument type="prontuario"/></span>
            </div>
        </Boxdash>
    )
}

const ListPacientesDia = ({status}) => {

    let colorStatus = ''
    switch (status) {
        case 'checked':
            colorStatus = 'text-green-500'
            break;
        case 'cancel':
            colorStatus = 'text-red-500'
            break;
    
        default:
            break;
    }


    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 border-b py-4">
            <div>08:00h</div>
            <div>João Pereira</div>
            <div className="flex justify-center gap-2"><b>N°1613</b> <span className={colorStatus}><SvgDocument type={status}/></span></div>
        </div>
    )
}

const Pacientes: React.FC = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-2">

            <div className="grid lg:grid-row-4 lg:col-span-2 md:col-span-2 first-line:gap-2"> 
                <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <ListPacientes/>
                    <ListPacientes/>
                    <ListPacientes/>
                    <ListPacientes/>
                    <ListPacientes/>
                    <ListPacientes/>
                    <ListPacientes/>
                    <ListPacientes/>
                    <ListPacientes/>
                    <ListPacientes/>
                    <ListPacientes/>


                </div>
            </div>

            <div className="grid lg:grid-row-4">
                <Boxdash>
                    <h1>Pacientes do dia:</h1>
                    <div className="grid lg:grid-row-4">
                        <ListPacientesDia status="checked"/>
                        <ListPacientesDia status="cancel"/>
                        <ListPacientesDia status="checked"/>
                        <ListPacientesDia status="checked"/>
                        <ListPacientesDia status="checked"/>
                        <ListPacientesDia status="checked"/>
                        <ListPacientesDia status="checked"/>
                        <ListPacientesDia status="cancel"/>

                    </div>
                </Boxdash>
            </div>

        </div>
        
    )
}

export default Pacientes
