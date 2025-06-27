import React from "react";
import { useEnrolledCourses } from "../components/EnrolledCoursesContext.jsx";
import { Link } from "react-router-dom";

const MyLearning = () => {
  const { enrolledCourses } = useEnrolledCourses();

  // Simulate progress and status for demonstration
  const coursesWithProgress = enrolledCourses.map((course, index) => {
    const progress = Math.min(100, (index + 1) * 10); // example progress %
    const status = progress === 100 ? "Completed" : "In Progress";
    return {
      ...course,
      progress,
      status,
    };
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Learning</h1>
      {coursesWithProgress.length === 0 ? (
        <p>You have not enrolled in any courses yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coursesWithProgress.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-sm text-gray-600 mb-2">By {course.instructor}</p>
              <div className="mb-2">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{course.progress}% completed</p>
              </div>
              <p
                className={`text-sm font-semibold mb-4 ${
                  course.status === "Completed" ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {course.status}
              </p>
              <Link
                to={`/courses/${course.id}`}
                className="mt-auto inline-block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition"
              >
                Continue Learning
              </Link>
            </div>
          ))}
        </div>
      )}
      {/* Future features: Resume last lecture, Certificate status, Completion history */}
    </div>
  );
};

export default MyLearning;
