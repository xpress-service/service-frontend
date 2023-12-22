import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const PageTwo = ({ handlePrevious }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    onSubmit: (values) => {
      console.log('Form data page 2:', values);
    },
  });

  return (
    <Container maxWidth="xs"  className="rounded-2xl shadow-sm-space-y-px bg-white mt-20">
      <Box my={3}>
        <Typography  style={{marginBottom:"20px", textAlign:"center", fontWeight:"bold"}}> SIGNUP </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Fullname"
            type='text'
            size="small"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            margin="normal"
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="email"
            type='email'
            size="small"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type='password'
            size="small"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            margin="normal"
          />
          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type='password'
            size="small"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            margin="normal"
          />
          <Typography style={{marginTop:"10px", marginBottom:"10px"}}>People who use our service may have upload a poll that contain your information to PollRank</Typography>
          <Typography style={{marginTop:"10px", marginBottom:"10px"}}>By Tapping Signup I've read and agree to our term and condition Used that bide the management of PollRank </Typography>
          <Button type="submit"  style={{backgroundColor:'#FFB03A', color:'#fff', borderRadius:'20px', textTransform:'none'}} fullWidth>
            Signup
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default PageTwo;
