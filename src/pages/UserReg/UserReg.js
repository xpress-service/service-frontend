import React, { useState } from "react";
import { useFormik } from "formik";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../api/axios.js";
import * as yup from "yup";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const validationSchema = yup.object({
	name: yup.string("Enter your full name").required("This field is required"),
	email: yup
		.string("Enter your email")
		.email("Enter a valid email")
		.required("This field is required"),
	password: yup
		.string("Enter your password")
		.required("This field is required")
		.matches(
			/^.*(?=.{8,})((?=.*[!@#$%^&*]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			"Password must contain at least 8 characters, one uppercase, one number and one special case character"
		),
	confirm_password: yup
		.string("Confirm your password")
		.required("This field is required")
		.oneOf([yup.ref("password"), null], "Passwords don't match."),
});

const UserReg = () => {
	const [showPassword, setShowPassword] = useState("false");
	const navigate = useNavigate();
	const [message, setMessage] = useState("");

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirm_password: "",
		},
		validationSchema,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: async (values, { resetForm }) => {
			const res = await axios
				.post("users", {
					name: values.name,
					email: values.email,
					password: values.password,
					confirm_password: values.confirm_password,
				})
				.catch((err) => {
					setMessage(err?.response?.data?.message);
				});
			if (res) {
				resetForm();
				Swal.fire({
					toast: true,
					icon: "success",
					title: "Registration Successful! A verification link has been sent to your email.",
					position: "top",
					timer: 3000,
					showConfirmButton: false,
				});
				navigate("/user-login");
			}
		},
	});

	const show = showPassword ? (
		<BsEyeSlash
			color=" #1E3A8A"
			size={18}
			icon={showPassword ? "eye-slash" : "eye"}
			onClick={() => setShowPassword((visibility) => !visibility)}
		/>
	) : (
		<BsEye
			color=" #1E3A8A"
			size={18}
			icon={showPassword ? "eye-slash" : "eye"}
			onClick={() => setShowPassword((visibility) => !visibility)}
		/>
	);

	const [PasswordInputType, ToggleIcon] = usePasswordToggle();

	return (
		<div className="bg-[#FF9B05] min-h-screen flex flex-col">
			<div className="container max-w-sm mx-auto mt-10 mb-10 flex-1 flex flex-col items-center justify-center px-2">
				<div className="bg-white px-6 py-8  shadow-md text-black w-full rounded-3xl">
					<div>
						{message ? (
							<p className="text-danger text-red-600 text-sm">
								{message}
							</p>
						) : null}
					</div>
					<Box my={3}>
						<Typography
							style={{
								marginBottom: "20px",
								textAlign: "center",
								fontWeight: "bold",
							}}
						>
							{" "}
							SIGNUP{" "}
						</Typography>
						<form onSubmit={formik.handleSubmit}>
							<TextField
								fullWidth
								id="name"
								name="name"
								label="Fullname"
								type="text"
								size="small"
								value={formik.values.name}
								onChange={formik.handleChange}
								error={
									formik.touched.name &&
									Boolean(formik.errors.name)
								}
								//helperText={formik.touched.name && formik.errors.name}
								margin="normal"
							/>
							<div className="text-danger text-red-600 text-sm">
								{formik.touched.name && formik.errors.name}
							</div>
							<TextField
								fullWidth
								id="email"
								name="email"
								label="email"
								type="email"
								size="small"
								value={formik.values.email}
								onChange={formik.handleChange}
								error={
									formik.touched.email &&
									Boolean(formik.errors.email)
								}
								//helperText={formik.touched.email && formik.errors.email}
								margin="normal"
							/>
							<div className="text-danger text-red-600 text-sm">
								{formik.touched.email && formik.errors.email}
							</div>
							<TextField
								fullWidth
								id="password"
								name="password"
								label="Password"
								type={showPassword ? "password" : "text"}
								size="small"
								value={formik.values.password}
								onChange={formik.handleChange}
								error={
									formik.touched.password &&
									Boolean(formik.errors.password)
								}
								//helperText={formik.touched.password && formik.errors.password}
								margin="normal"
							/>
							<Box
								sx={{
									position: "relative",
									left: "17rem",
									bottom: "2rem",
									cursor: "pointer",
								}}
							>
								{show}
							</Box>
							<div className="text-danger text-red-600 text-sm">
								{formik.touched.password &&
									formik.errors.password}
							</div>
							<TextField
								fullWidth
								id="confirm_password"
								name="confirm_password"
								label="Confirm Password"
								type={PasswordInputType}
								size="small"
								value={formik.values.confirm_password}
								onChange={formik.handleChange}
								error={
									formik.touched.confirm_password &&
									Boolean(formik.errors.confirm_password)
								}
								//helperText={formik.touched.confirm_password && formik.errors.confirm_password}
								margin="normal"
							/>
							<Box
								sx={{
									position: "relative",
									left: "17rem",
									bottom: "2rem",
									cursor: "pointer",
								}}
							>
								{ToggleIcon}
							</Box>
							<div className="text-danger text-red-600 text-sm">
								{formik.touched.confirm_password &&
									formik.errors.confirm_password}
							</div>
							<Typography
								style={{
									marginTop: "10px",
									marginBottom: "10px",
								}}
							>
								People who use our service may have upload a
								poll that contain your information to PollRank
							</Typography>
							<Typography
								style={{
									marginTop: "10px",
									marginBottom: "10px",
								}}
							>
								By Tapping Signup I've read and agree to our
								term and condition Used that bide the management
								of PollRank{" "}
							</Typography>
							<Button
								type="submit"
								style={{
									backgroundColor: "#FFB03A",
									color: "#fff",
									borderRadius: "20px",
									textTransform: "none",
								}}
								fullWidth
							>
								Signup
							</Button>
						</form>
					</Box>
				</div>
			</div>
		</div>
	);
};

export default UserReg;
