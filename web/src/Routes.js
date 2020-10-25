// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/course-content/{id:Int}" page={CourseContentPage} name="courseContent" />
      <Private unauthenticated="home" role="instructor">
        <Route path="/admin/courses/new" page={NewCoursePage} name="newCourse" />
        <Route path="/admin/courses/{id:Int}/edit" page={EditCoursePage} name="editCourse" />
        <Route path="/admin/courses/{id:Int}" page={CoursePage} name="course" />
        <Route path="/admin/courses" page={CoursesPage} name="courses" />
      </Private>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
