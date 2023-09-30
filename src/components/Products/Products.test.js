import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import missionsReducer, { setProducts } from '../../redux/products/productsSlice'; // Import your action creators
import Products from './Products';

const mockStore = configureStore([thunk]);

describe('Test missions component', () => {
  const mockMissionsData = [
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

  // Mock store with initial missions state and action creators
  const store = mockStore({
    products: {
      products: mockMissionsData,
      error: null,
    },
  });
  // Dispatch setMissions action with mock data
  store.dispatch(setProducts(mockMissionsData));
  let missionsAvailable = store.getState().products.products;

  test('renders products after fetching data', async () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    await waitFor(() => {
      const missionTitles = getAllByText(/Classical/);
      expect(missionTitles.length).toBe(1);
    });
  });
});
