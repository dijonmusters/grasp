// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/course-content/{id:Int}" page={CourseContentPage} name="courseContent" />
      <Route path="/courses/new" page={NewCoursePage} name="newCourse" />
      <Route path="/courses/{id:Int}/edit" page={EditCoursePage} name="editCourse" />
      <Route path="/courses/{id:Int}" page={CoursePage} name="course" />
      <Route path="/courses" page={CoursesPage} name="courses" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
