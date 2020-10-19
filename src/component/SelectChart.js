import React,{useContext} from 'react';
import { makeStyles,fade } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import {MenuItemComp} from './MenuItemComp';
import {CountryNames} from './CountryNames';
import { PlayCircleFilledWhite } from '@material-ui/icons';
import {GlobalContext} from '../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



export default function SelectChart() {
  

  const {ChangeState} = useContext(GlobalContext);
  const classes = useStyles();
  const [Cname, setCname] = React.useState("pk");
  const [Keyname, setKeyname] = React.useState("pakistan");

  const handleChange = (event) => {
    const inst=JSON.parse(event.target.value);
    ChangeState({
      code:inst.ISO2, 
      name:inst.Slug
      
    });
    
    setCname(event.target.value);
    // setKeyname(event.target.Select.option);
    console.log("Cname key ",inst.Slug);
  };

  


  return (
    <div>
      
     

<FormControl className={classes.formControl} >

        <InputLabel htmlFor="age-native-simple" style={{color:"white"}}>Select Country</InputLabel>
        <Select
        style={{color:"white"}}
          native
          value={Cname}
          key={Keyname}
          onChange={handleChange}
        >
       
       
       {/* <option key="pakistan" aria-label="None" style={{color:"black"}} value="pk" >pakistan</option> */}
        {CountryNames.map((_name)=>(
            <option  key={_name.Slug} value={JSON.stringify(_name)} style={{color:"black"}}>{_name.Slug}</option >

            )
        )
        }
       
       
        </Select>
      </FormControl>



 

    </div>
  );
}
