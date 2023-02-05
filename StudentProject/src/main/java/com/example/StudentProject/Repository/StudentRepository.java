package com.example.StudentProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.StudentProject.Model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer>{
	
	

}
