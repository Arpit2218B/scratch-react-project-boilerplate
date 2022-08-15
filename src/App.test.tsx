import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should find the corresponding compnent', () => {
    render(<App />);
    expect(screen.getByText(/Hello/i)).toBeDefined();
})