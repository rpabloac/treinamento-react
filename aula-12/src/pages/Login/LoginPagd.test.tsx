import { describe, it, expect } from 'vitest';
import type { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './LoginPage';
import { PacienteProvider } from '../../contexts/PacienteContext';

// Helper: envolve o componente no Provider real
function renderWithProvider(ui: ReactElement) {
  return render(<PacienteProvider>{ui}</PacienteProvider>);
}

describe('LoginForm', () => {
  it('deve renderizar os campos de carteirinha e senha', () => {
    renderWithProvider(<LoginPage />);

    expect(screen.getByPlaceholderText('Digite sua carteirinha')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite sua senha')).toBeInTheDocument();
  });

  it('deve renderizar o botão "Entrar"', () => {
    renderWithProvider(<LoginPage />);
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });

  it('deve atualizar os campos ao digitar', async () => {
    const user = userEvent.setup();
    renderWithProvider(<LoginPage />);

    const campoCarteirinha = screen.getByPlaceholderText('Digite sua carteirinha');
    await user.type(campoCarteirinha, '0089234000012');

    expect(campoCarteirinha).toHaveValue('0089234000012');
  });

  it('não deve exibir mensagem de erro no estado inicial', () => {
    renderWithProvider(<LoginPage />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});