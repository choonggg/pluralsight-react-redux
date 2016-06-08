import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
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
      <CourseForm 
        allAuthors={this.props.authors}
        errors={this.state.errors}
        course={this.state.course} />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  const authorsForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName
      //text: `${author.firstName} ${author.lastName}`
    };
  });

  return {
    course: course,
    authors: authorsForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
