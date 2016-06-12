import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('courseReducer', () => {
  it('should add course when CREATE_COURSE_SUCCESS', () => {
    const state = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = {title: 'C'};
    const action = actions.createCourseSuccess(newCourse);
    const newState = courseReducer(state, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('update course when UPDATE_COURSE_SUCCESS', () => {
    const state = [
      {id: 'asd', title: 'A'}
    ];

    const course = {id: 'asd', title: 'B'};
    const action = actions.updateCourseSuccess(course);

    const newState = courseReducer(state, action);

    expect(newState).toEqual([{id: 'asd', title: 'B'}]);
  });
});
