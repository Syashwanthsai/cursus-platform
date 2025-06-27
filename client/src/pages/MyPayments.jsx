import React from "react";
import { useEnrolledCourses } from "../components/EnrolledCoursesContext.jsx";

import img8 from "../assets/courses/img-8.jpg";
import img11 from "../assets/courses/img-11.jpg";
import img12 from "../assets/courses/img-12.jpg";

const mockPaidCourses = [
  {
    id: 1,
    title: "Mastering CSS3: The Complete Guide to Modern Web Styling",
    thumbnail: img8,
    amountPaid: "$12",
    paymentStatus: "Success",
    paymentDate: "2025-05-01",
    accessMessage: "Access Granted",
  },
  {
    id: 2,
    title: "JavaScript Essentials: From Fundamentals to Advanced Projects",
    thumbnail: img11,
    amountPaid: "$15",
    paymentStatus: "Pending",
    paymentDate: "2025-05-10",
    accessMessage: "Pending Access",
  },
  {
    id: 3,
    title: "Advanced CSS and Sass: Responsive Design & Modern Layouts",
    thumbnail: img12,
    amountPaid: "$14",
    paymentStatus: "Failed",
    paymentDate: "2025-05-15",
    accessMessage: "Payment Failed",
  },
];

const statusColors = {
  Success: "bg-green-200 text-green-800",
  Pending: "bg-yellow-200 text-yellow-800",
  Failed: "bg-red-200 text-red-800",
};

const MyPayments = () => {
  const { enrolledCourses } = useEnrolledCourses();

  // Filter paid courses that are also enrolled
  const paidAndEnrolledCourses = mockPaidCourses.filter((paidCourse) =>
    enrolledCourses.some((enrolled) => enrolled.id === paidCourse.id)
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Payments</h1>
      {paidAndEnrolledCourses.length === 0 ? (
        <p>You have no paid and enrolled courses.</p>
      ) : (
        <div className="space-y-4">
          {paidAndEnrolledCourses.map((course) => (
            <div key={course.id} className="flex items-center bg-white rounded-lg shadow p-4">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-24 h-16 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{course.title}</h2>
                <p className="text-sm text-gray-600">Amount Paid: {course.amountPaid}</p>
                <p className="text-sm text-gray-600">Payment Date: {course.paymentDate}</p>
              </div>
              <div className="text-center">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColors[course.paymentStatus]}`}
                >
                  {course.paymentStatus}
                </span>
                <p className="mt-1 text-sm">{course.accessMessage}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPayments;
