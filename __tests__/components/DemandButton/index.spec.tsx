import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { DemandButton } from '../../../src/components/DemandButton';

describe('DemandButton', () => {
  it('shows the desired text', () => {
    const expectedText = 'hi';

    const { getByRole } = render(<DemandButton>{expectedText}</DemandButton>);
    const button = getByRole('button');
    const renderedText = button.textContent;

    expect(renderedText).toBe(expectedText);
  });
});
