import configureStore from 'redux-mock-store';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { setProducts } from './redux/products/productsSlice';

const mockStore = configureStore([thunk]);

describe('Test missions component', () => {
  const mockProductData = [
    {
      title: 'Classical',
      description: 'Compositions typically characterized by complex arrangements, orchestration, and a focus on instrumentation.',
      class: 'Classical',
    },
    {
      title: 'Pop',
      description: 'Emphasizes catchy melodies, often with simple song structures and lyrics.',
      class: 'Pop',
    },
  ];

  const store = mockStore({
    products: {
      products: mockProductData,
    },
  });
  store.dispatch(setProducts(mockProductData));
  test('renders the Navbar and Outlet components', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const navbarElement = screen.getByText(/Music Collections/i);
    expect(navbarElement).toBeInTheDocument();
  });
});
