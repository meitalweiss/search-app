import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PeoplePage from './PeoplePage';

describe('PeoplePage Component', () => {
  

  it('renders People Page header', () => {
    render(<PeoplePage />);
    const headerElement = screen.getByRole('heading', { name: /people page/i });
    expect(headerElement).toBeInTheDocument();
  });

  it('renders columns for each field', () => {
    render(<PeoplePage />);
    const fieldNames = [
      "name",
      "height",
      "mass",
      "hair_color",
      "skin_color",
      "eye_color",
      "birth_year",
      "gender"
    ];

    fieldNames.forEach(fieldName => {
      const column = screen.getByText(fieldName.replace(/_/g, " "));
      expect(column).toBeInTheDocument();
    });
  });
});
