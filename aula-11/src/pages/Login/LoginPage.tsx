import { useEffect, useRef, useState, useCallback  } from "react";
import InputField from "../../components/InputField/InputField.js";
import { usePaciente } from "../../contexts/PacienteContext";
import "./Login.css";

function LoginPage() {
    const { login, error } = usePaciente();
    const [formData, setFormData] = useState({ carteirinha: "", senha: "" });
    
    const carteirinhaRef = useRef(null);

    useEffect(() => {
        carteirinhaRef.current?.focus();
    }, []);

    const handleChange = useCallback((e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        await login(formData.carteirinha, formData.senha);
    }, [login, formData.carteirinha, formData.senha]);
    
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
                            ref={carteirinhaRef}
                            id="carteirinha"
                            type="text"
                            label="Carteirinha"
                            placeholder="Digite sua carteirinha"
                            value={formData.carteirinha}
                            onChange={handleChange}
                        />

                        <InputField
                            id="senha"
                            type="password"
                            label="Senha"
                            placeholder="Digite sua senha"
                            value={formData.senha}
                            onChange={handleChange}
                        />

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