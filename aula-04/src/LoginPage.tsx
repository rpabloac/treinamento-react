function LoginPage() {
    return (
        <>
            <main className="login-page" id="login-page">
                <div className="login-card">
                    <header className="login-header">
                        <span className="login-header__icon">🏥</span>
                        <h1>Portal do Paciente</h1>
                        <p>Unimed</p>
                    </header>

                    <form className="login-form" id="login-form">
                        <div className="form-group">
                        <label htmlFor="carteirinha">Carteirinha</label>
                        <input type="text" id="carteirinha" placeholder="Digite sua carteirinha" />
                        <span className="error-message" id="carteirinha-error"></span>
                        </div>

                        <div className="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder="Digite sua senha" />
                        <span className="error-message" id="senha-error"></span>
                        </div>

                        <div className="error-message" id="login-error"></div>

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