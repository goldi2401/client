
import { useState } from "react";
import styled from "@emotion/styled";
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material";
import { addUser } from "../service/api";

const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto ;
& > div{
    margin-top: 20px;
}


`


const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}


const AddUser = () => {


    const [user, setUser] = useState(defaultValue);




    const onValueChange = (e) => {
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value });

    }

    const addUserDetails = async () => {
         await addUser(user);

    }





    return (
        <Container>
            <Typography variant="h4">AddUser</Typography>

            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="UserName" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addUserDetails}>Add User</Button>

            </FormControl>
        </Container>
    )
}
export default AddUser;