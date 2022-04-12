import React from 'react';
import { App } from './App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('should render a header', () => {
    render(<App />);
    const header = screen.getByRole('heading');
    expect(header).toHaveTextContent('Hello world!');
  });
});