import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
}));

export default function Student() {
  const classes = useStyles();
  const paperstyle={padding:'50px 20px' , width:600,margin:'20px auto'}
  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [students,setStudents]=useState([])

  const handclick=(e)=>{
    const student={name,address}
    console.log(student)
    fetch
    ("http://localhost:8080/add" ,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    
    }).then(()=>{
      console.log(" New Student Added")
    })

  }
  useEffect(()=>{
    fetch
    ("http://localhost:8080/all" )
    .then(res=>res.json())
    .then((result)=>{
        setStudents(result)
    })
},[])


  

  return (
    <Container>
        <Paper elevation={3} style={paperstyle}>
            <h1 style={{color:"blue"}}><u> Add Student</u> </h1>
    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Student Name" variant="outlined"  fullWidth
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <TextField id="outlined-basic" label="Student Address" variant="outlined"  fullWidth
        value={address}
        onChange={(e)=>setAddress(e.target.value)}/>

        <Button variant="contained" color="secondary" onClick={handclick} >
         Submit
        </Button>
   
    </form>
    </Paper>
    <h1> Students </h1>
    <Paper elevation={3} style={paperstyle}>
        {students.map(student=>
        (
            <Paper  elevation={3} style={paperstyle} key={student.id}

            >
                Id:{student.id}
                Name:{student.name}
                Address:{student.address}
            </Paper>
        ))
        }
    </Paper>
    </Container>
  );
}
