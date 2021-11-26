import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Header from "../../Layout/Header";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {useState} from "react";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../../../toolkitRedux/authSlice";
const useStyles = makeStyles((theme) => ({
    wrapperForm:{
        width:'60%',
        margin:"auto",
        marginTop:'5vh'
    },
    form:{
        width:'100%'
    },
    input:{
        width:'100%',
    },
    wrapperInput:{
        marginBottom:'15px'
    },
    btn:{
        width:'100%',
        backgroundColor:theme.mainBlue,
        color:'white',
        '&:hover': {
            backgroundColor:theme.hoverBlue,
        }
    },
    wrapperFlex:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:'10px'
    },
    flexColumn:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'25px'
    },
    wrapperIcon:{
        padding:'10px',
        width:'25px',
        backgroundColor:theme.mainBlue,
        borderRadius:'50%'
    },
    IconWhite:{
        color:'white',
    }

}));
const SignIn=()=>{
    const classes = useStyles();
    const dispatch=useDispatch();
    const auth=useSelector(state => state.auth)
    const initialFormData = {
        email: '',
        password: ''
    }
    const [formData,setFormData]=useState(initialFormData);
    const handleChange=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setFormData({...formData,[name]:value})

   }
    const handleSubmit=()=>{
        console.log('FF')
        dispatch(signIn(formData))
    }
    return (
        <>
            <Header/>
            <Grid container component="main" >
                <Grid item xs={12} sm={8} md={5} className={classes.wrapperForm}>
                    <div className={classes.flexColumn}>
                        <div className={classes.wrapperIcon}>
                            <LockOpenIcon className={classes.IconWhite}/>
                        </div>
                        <Typography variant="h4">Sign In</Typography>
                    </div>
                    <ValidatorForm  className={classes.form}
                        onSubmit={()=>handleSubmit()}
                        onError={errors => console.log(errors)}
                    >
                        <Grid item xs={12} className={classes.wrapperInput}>
                            <TextValidator
                                className={classes.input}
                                label="Email"
                                onChange={(e)=>{handleChange(e)}}
                                name="email"
                                value={formData.email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.wrapperInput}>
                            <TextValidator
                                className={classes.input}
                                label="Password"
                                onChange={(e)=>{handleChange(e)}}
                                name="password"
                                type="password"
                                validators={['required']}
                                errorMessages={['this field is required']}
                                value={formData.password}
                            />
                        </Grid>
                        <Button  type="submit" className={classes.btn} variant="contained">Sign In</Button>
                        <div className={classes.wrapperFlex}>
                            <Link variant="body2" sx={{justifyContent:'center' }}  component="a" href="resetPassword">
                                Forgot password?
                            </Link>
                            <Link variant="body2" sx={{justifyContent:'center' }}  component="a" href="signUp">
                                Don't have an account? Sign Up
                            </Link>
                        </div>
                    </ValidatorForm>
                </Grid>

            </Grid>
        </>
    )
}
export default SignIn