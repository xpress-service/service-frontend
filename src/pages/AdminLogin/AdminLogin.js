import { Box, TextField, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";
import { PasswordResetContext } from "../../contexts/PasswordResetContext";
import useAuth from "../../hooks/useAuth";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import { useFormik } from "formik";
import * as yup from "yup";
import { Helmet } from "react-helmet-async";

const validationSchema = yup.object({
	email: yup.string().email().required("This field is required"),
	password: yup.string().required("This field is required"),
});

const AdminLogin = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.prevURL
		? location.state?.prevURL
		: "/admin-dashboard";
	const [message, setMessage] = useState("");
	const labelStyles = "block text-gray-600 font-semibold text-sm";

	const { setAuth, persist, setPersist } = useAuth();
	const { setRole } = useContext(PasswordResetContext);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: async (values, { resetForm }) => {
			const res = await axios
				.post("admins/login", {
					email: values.email,
					password: values.password,
				})
				.catch((err) => {
					console.error(err.response);
					setMessage(err.response.data.message);
				});
			resetForm();
			if (res) {
				localStorage.setItem("refresh", res?.data?.data?.refreshToken);
				setAuth({
					id: res?.data?.data?.id,
					email: res?.data?.data?.email,
					accessToken: res?.data?.data?.accessToken,
					role: res?.data?.data?.role,
				});

				navigate(from);
			}
		},
	});

	const togglePersist = () => {
		setPersist((prev) => !prev);
	};

	useEffect(() => {
		localStorage.setItem("persist", persist);
	}, [persist]);

	const [PasswordInputType, ToggleIcon] = usePasswordToggle();

	return (
		<div className="bg-amber-600 min-h-screen flex flex-col">
			<Helmet>
				<title>ServiceXpress | Log In or Sign Up</title>
			</Helmet>

			<div className="background">
				<div className="absolute top-4 left-4">
					<div className="h-24 w-24">
						<Link to="/">
							<img
								src={require("../../assets/logopic.png")}
								alt="Service Xpress Logo"
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
				<div className="bg-white px-6 py-8 shadow-md text-black w-full rounded-3xl">
					<div>
						{message ? (
							<p className="text-danger text-red-600 text-sm">
								{message}
							</p>
						) : null}
					</div>
					<Typography
						style={{
							marginBottom: "20px",
							textAlign: "center",
							fontWeight: "bold",
						}}
					>
						{" "}
						SIGNIN{" "}
					</Typography>

					<form>
						<TextField
							fullWidth
							id="email"
							name="email"
							label="Email"
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
							type={PasswordInputType}
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
							{ToggleIcon}
						</Box>
						<div className="text-danger text-red-600 text-sm">
							{formik.touched.password && formik.errors.password}
						</div>
						<Button
							onClick={formik.handleSubmit}
							type="submit"
							style={{
								backgroundColor: "#FFB03A",
								color: "#fff",
								borderRadius: "20px",
								textTransform: "none",
							}}
							fullWidth
						>
							Login
						</Button>
						<div className="flex justify-start items-end mt-4">
							<input
								className="h-5 w-5 mr-1.5 mb-0.5 ml-0.5"
								type="checkbox"
								id="persist"
								onChange={() => togglePersist()}
								checked={persist}
							/>
							<label htmlFor="persist" className={labelStyles}>
								Remember this device
							</label>
						</div>
						<div className="flex items-center justify-center">
							<p
								className="text-sm font-medium text-amber-600 hover:text-amber-200 cursor-pointer"
								onClick={() => {
									setRole("user");
									navigate("/forgot-password");
								}}
							>
								Forgotten password
							</p>
						</div>

						<div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
							<p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
								Or
							</p>
						</div>

						<div className="flex items-center">
							<button
								onClick={() => navigate("/admin-reg")}
								className="group relative w-full flex justify-center py-2 px-4 border rounded-3xl border-transparent text-sm font-medium  text-white bg-stone-800 hover:bg-stone-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300"
							>
								Create account
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default AdminLogin;