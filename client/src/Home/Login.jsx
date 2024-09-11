import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';

import history from '../Utilities/history';
import { useLogin } from '../Services/authenticationService';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffcc', // Yellow background color
        padding: theme.spacing(6), // Increased padding
        borderRadius: theme.spacing(3), // Rounded corners
    },
    form: {
        width: '80%', // Increased width of the form
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(4, 0, 2), // Adjusted margin
        backgroundColor: '#4caf50', // Green color for the button
        '&:hover': {
            backgroundColor: '#388e3c', // Darker shade of green on hover
        },
    },
    textField: {
        marginBottom: theme.spacing(4), // Increased space between fields
        fontSize: '1.2rem', // Increased font size
    },
    heading: {
        fontSize: '3rem', // Increased font size
        marginBottom: theme.spacing(4), // Increased space below heading
    },
}));

const Login = props => {
    const login = useLogin();
    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h2" className={classes.heading} align="center">
                Sign in
            </Typography>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required('Username is required')
                        .max(40, 'Username is too long'),
                    password: Yup.string()
                        .required('Password is required')
                        .max(100, 'Password is too long')
                        .min(6, 'Password too short'),
                })}
                onSubmit={(
                    { username, password },
                    { setStatus, setSubmitting }
                ) => {
                    setStatus();
                    login(username, password).then(
                        () => {
                            const { from } = history.location.state || {
                                from: { pathname: '/chat' },
                            };
                            history.push(from);
                        },
                        error => {
                            setSubmitting(false);
                            setStatus(error);
                        }
                    );
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                }) => (
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <TextField
                            id="username"
                            className={classes.textField}
                            name="username"
                            label="Username"
                            fullWidth
                            variant="outlined"
                            required
                            helperText={touched.username ? errors.username : ''}
                            error={touched.username && Boolean(errors.username)}
                            value={values.username}
                            onChange={handleChange}
                        />
                        <TextField
                            id="password"
                            className={classes.textField}
                            name="password"
                            label="Password"
                            fullWidth
                            variant="outlined"
                            required
                            helperText={touched.password ? errors.password : ''}
                            error={touched.password && Boolean(errors.password)}
                            value={values.password}
                            onChange={handleChange}
                            type="password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Login
                        </Button>
                    </form>
                )}
            </Formik>
            <Grid container justify="flex-end">
                <Grid item>
                    <Typography>
                        <Link onClick={() => props.handleClick('register')} href="#">
                            Don't have an account?
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;
