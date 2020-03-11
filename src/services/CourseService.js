import axios from 'axios';

import * as Constants from '../utils/Endpoints';

class CourseService {
    retrieveAllCourses() {
        return axios.get(Constants.FETCH_COURSES);
    }

    deleteCourse(id) {
        return axios.delete(`${Constants.FETCH_COURSES}/${id}`);
    }

    retrieveCourse(id) {
        return axios.get(`${Constants.FETCH_COURSES}/${id}`);
    }

    updateCourse(id, course) {
        return axios.put(`${Constants.FETCH_COURSES}/${id}`, course);
    }

    createCourse(course) {
        return axios.post(Constants.CREATE_COURSE, course);
    }
}
export default new CourseService();