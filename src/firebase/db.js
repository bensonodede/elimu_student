import { db } from "./firebase";

// Create User
export const doCreateUser = (role, email, firstName, lastName, password) =>
  db
    .collection(role)
    .doc()
    .set({
      email,
      firstName,
      lastName,
      password
    });

//Get Students
export const onceGetStudent = uid =>
  db
    .collection("Student")
    .doc(uid)
    .get();

//Get Instructor
export const onceGetInstructor = uid =>
  db
    .collection("Instructor")
    .doc(uid)
    .get();

//Get Slides
export const onceGetSlides = id =>
  db
    .collection("Slides")
    .doc(id)
    .get();

//Create Course
export const doCreateCourse = (courseCode, CourseDescription) =>
  db
    .collection("Courses")
    .doc(courseCode)
    .set({
      CourseDescription
    });

//Create Course
export const doCreateSession = session =>
  db
    .collection("Session")
    .doc()
    .set({
      session
    });

//Get Course
export const onceGetCourse = () =>
  db
    .collection("Courses")
    .doc("TEST101")
    .get();
