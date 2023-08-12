import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const PageTwo = ({ handlePrevious }) => {
  const formik = useFormik({
    initialValues: {
      address: '',
      city: '',
      zipCode: '',
    },
    onSubmit: (values) => {
      console.log('Form data page 2:', values);
    },
  });

  return (
    <Container maxWidth="xs"  className="rounded-2xl shadow-sm-space-y-px bg-white mt-20">
      <Box my={3}>
        <Typography style={{marginBottom:"20px"}}> step 2/2 </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="gender"
            name="gender"
            label="Gender"
            size="small"
            value={formik.values.gender}
            onChange={formik.handleChange}
            error={formik.touched.gender && Boolean(formik.errors.gender)}
            helperText={formik.touched.gender && formik.errors.gender}
            margin="normal"
          />
          <Typography style={{marginTop:"10px", marginBottom:"10px"}}>People who use or service may have upload a poll that contain your information to PollRank</Typography>
          <Typography style={{marginTop:"10px", marginBottom:"10px"}}>By Tapping Signup I've read and agree to our term and condition Use.that bide the management of PollRank </Typography>
          <Box style={{display:'flex', alignItems:"end", justifyItems:"center", justifyContent:"space-around"}}>
          <Button type="button" onClick={handlePrevious} style={{backgroundColor:'#FFB03A', color:'#fff', size:'small',borderRadius:'20px', textTransform:'none'}}>
            Previous
          </Button>
          <Button type="submit"  style={{backgroundColor:'#FFB03A', color:'#fff', borderRadius:'20px', textTransform:'none'}}>
            Signup
          </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default PageTwo;
