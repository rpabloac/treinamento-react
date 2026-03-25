import { useState } from "react";
import axios from "axios";
import InputField from "./components/InputField";


function LoginPage() {
    
    const API_URL = "https://portal-unimed-fake-api.onrender.com";

    const [carteirinha, setCarteirinha] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    //console.log('Carteirinha', carteirinha);
    //console.log('Senha', senha);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(carteirinha, senha);

        try {
            const response = await axios.post(`${API_URL}/login`, {carteirinha, senha});
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