import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      courses: ''
    };
  }

  // onTitleChange(e) {
  //   const course = this.state.course;
  //   course.title = e.target.value;
  //   this.setState({course: course});
  // }
  //
  // onClickSave() {
  //   this.props.actions.createCourse(this.state.course);
  //   this.state.course = '';
  // }

  render() {
    return (
      <div>
        <h2>Add Course</h2>
        {/* <input type="text" */}
        {/*   onChange={this.onTitleChange} */}
        {/*   value={this.state.course.title} /> */}
        {/*  */}
        {/* <input type="submit" value="Save" onClick={this.onClickSave} /> */}
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    course: state.course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
