/// SOURCE: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-up

import React from 'react';
import {useHistory} from 'react-router-dom';


import {Copyright} from '../components';

const style = {
	paper: {
		marginTop: 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: 1,
		backgroundColor: 'red',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: 3,
	},
	submit: {
		margin: '3, 0, 2',
	},
};

export const SignUpPage = () => {
	const history = useHistory();

	const onClickSignUp = () => {
	};
	const onClickSignIn = () => history.replace('/signin');
	const onClickBack = () => history.goBack();

	return (<>
		{/*<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
        </Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="fname"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="lname"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid>
					</Grid>
					<Button onClick={onClickSignUp} // type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					> Sign Up
          </Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link onClick={onClickSignIn} variant="body2">
								Already have an account? Sign in
              </Link>
						</Grid>
					</Grid>
					<Button onClick={onClickBack}
						fullWidth
						variant="outlined"
						color="secondary"
					> Back
          </Button>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>*/}
	</>);
}
