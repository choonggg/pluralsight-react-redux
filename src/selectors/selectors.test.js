import expect from 'expect';
import {authorsForDropdown} from './selectors';

describe('Authors Dropdown', () => {

  describe('authorsForDropdown', () => {
    const authors = [
      { id: 'cody-has', firstName: 'Codd', lastName: 'Bro' },
      { id: 'sam-f', firstName: 'Sam', lastName: 'Fisher' }
    ];

    const expected = [
      {value: 'cody-has', text: 'Codd Bro'},
      {value: 'sam-f', text: 'Sam Fisher'}
    ];

    expect(authorsForDropdown(authors)).toEqual(expected);
  });
});
