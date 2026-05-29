// src/pages/Register/RegisterPage.jsx
import React from "react";
import { Header } from "../../components/common/Header";

export const RegisterPage = ({ 
    error, 
    loading, 
    onSubmit, 
    onEstadoChange, 
    estadoSelecionado, 
    listaEstados, 
    listaCidades 
}) => {
    return (
        <div>
            <Header />
            <div className="user-page flex flex-col items-center justify-center pt-8">
                <h1 className="text-center font-bold">Enter Your Data</h1>

                <form className="input-form flex w-80 flex-col gap-3" onSubmit={onSubmit}>
                    <input className="input rounded-[32px] border border-[#d0d6dc] bg-[#e6eaf0] p-4" type="text" name="username" placeholder="Username" />

                    <div className="estados flex w-full flex-row items-center justify-between">
                        <label className="ml-5 font-semibold" htmlFor="estados">Estado:</label>

                        <select
                            className="input h-12 min-w-40 rounded-[3px] border border-[#d0d6dc] bg-[#e6eaf0] px-4 text-center"
                            name="Estados"
                            id="estados"
                            defaultValue=""
                            onChange={onEstadoChange}
                        >
                            <option value="" disabled>Selecione o estado</option>
                            
                            {/* O React desenha os <option> rodando um map() no array de estados */}
                            {listaEstados.map((estado) => (
                                <option key={estado.id} value={estado.id}>
                                    {estado.nome}
                                </option>
                            ))}
                        </select>
                        
                        {estadoSelecionado && (
                            <select
                                className="input h-12 min-w-40 rounded-[3px] border border-[#d0d6dc] bg-[#e6eaf0] px-4 text-center"
                                name="Cidades"
                                id="cidades"
                                defaultValue=""
                            >
                                <option value="" disabled>Selecione a cidade</option>
                                
                                {/* O mesmo map() para as cidades */}
                                {listaCidades.map((cidade) => (
                                    <option key={cidade.id} value={cidade.id}>
                                        {cidade.nome}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>

                    <input className="input rounded-[32px] border border-[#d0d6dc] bg-[#e6eaf0] p-4" type="text" name="email" placeholder="Email" />
                    <input className="input rounded-[32px] border border-[#d0d6dc] bg-[#e6eaf0] p-4" type="password" name="password" placeholder="Password" />
                    <input className="input rounded-[32px] border border-[#d0d6dc] bg-[#e6eaf0] p-4" type="password" name="confirmPassword" placeholder="Confirm Password" />

                    {error && <p>{error}</p>}

                    <button className="button cursor-pointer rounded-[32px] border border-[#d0d6dc] p-2.5 hover:bg-[#3f566b] disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={loading}>
                        {loading ? "Creating..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
};