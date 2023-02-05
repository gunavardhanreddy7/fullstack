package com.example.StudentProject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentProject.Model.Student;
import com.example.StudentProject.Service.StudentService;

@RestController
@CrossOrigin
public class Controller {
 
	@Autowired
	StudentService studentservice;
	
	@RequestMapping("/add")
	public String add(@RequestBody Student student) {
		studentservice.addStudent(student);
		return "Student is added successfully";
	}
	
	@RequestMapping("/all")
	public List<Student> all() {
		return studentservice.allStudents();
		
	}
	
}
