package com.example.StudentProject.Service;

import java.util.List;

import com.example.StudentProject.Model.Student;

public interface StudentService {

	public void addStudent(Student student);
	public List<Student> allStudents();
}
