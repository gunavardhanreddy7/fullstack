package com.example.StudentProject.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StudentProject.Model.Student;
import com.example.StudentProject.Repository.StudentRepository;

@Service
public class StudentServiceImplt implements StudentService {
	
	
	@Autowired
	StudentRepository studentrepository;

	@Override
	public void addStudent(Student student) {
		// TODO Auto-generated method stub
		studentrepository.save(student);
		
		
	}
	
	@Override
	public List<Student> allStudents() {
		// TODO Auto-generated method stub
		return studentrepository.findAll();
	}

 
	
}
