import { useState } from "react";
import InputField from "../../components/InputField";
import { get, post } from '../../api.js'
import "./Login.css";

function LoginPage({ setPaciente }) {
    
    const API_URL = import.meta.env.VITE_API_URL;

    const [carteirinha, setCarteirinha] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(carteirinha, senha);

        try {
            const response = await post(`${API_URL}/login`, {carteirinha, senha});
            setPaciente(response.data);

            console.log(response);
        }
        catch(ex) {
            setError("Credenciais inválidas");
            console.error(ex);
        }
    }

    return (
        <>
            <main className="login-page" id="login-page">
                <div className="login-card">
                    <header className="login-header">
                        <span className="login-header__icon">🏥</span>
                        <h1>Portal do Paciente</h1>
                        <p>Unimed</p>
                    </header>

                    <form onSubmit={handleSubmit} className="login-form" id="login-form">
                        <InputField
                            id="carteirinha"
                            type="text"
                            label="Carteirinha"
                            placeholder="Digite sua carteirinha"
                            value={carteirinha}
                            onChange={(e) => {
                                setCarteirinha(e.target.value);
                                setError("");
                            }}
                        ></InputField>

                        <InputField
                            id="senha"
                            type="password"
                            label="Senha"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => {
                                setSenha(e.target.value);
                                setError("");
                            }}
                        ></InputField>

                        {error && <div className="error-message" id="login-error">{error}</div>}

                        <button type="submit" className="btn-primary">Entrar</button>
                    </form>

                    <p className="login-hint">
                        Carteirinha: <strong>0089234000012</strong> | Senha:
                        <strong>123456</strong>
                    </p>
                </div>
            </main>
        </>
    )
}

export default LoginPage;