import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const PageOne = ({ handleNext }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('Form data:', values);
      handleNext();
    },
  });

  return (
    <Container maxWidth="xs"  className="rounded-2xl shadow-sm-space-y-px bg-white  mt-20 items-center">
      <Box my={4}>
        <Typography style={{marginBottom:"20px"}}>step 1/2</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            size="small"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            margin="normal"
          />
          <TextField
            fullWidth
            id="email"
            size="small"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
          />
          <Typography>Date of Birth</Typography>
           <TextField
            fullWidth
            size="small"
            inputProps={{min: new Date().toISOString().split('T')[0]}}
            InputLabelProps={{ shrink: true}}  
            type="date"
            id="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
            margin="normal"
          />
          <div className=" w-full flex justify-center py-2 px-4 border rounded-3xl border-transparent text-sm font-medium rounded-md text-white">
          <Button type="submit" style={{backgroundColor:'#FFB03A', color:'#fff', borderRadius:'20px', textTransform:'none'}} fullWidth>
            Next
          </Button>
          </div>
        </form>
      </Box>
    </Container>
  );
};

export default PageOne;
