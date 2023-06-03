import React, { useContext } from 'react'
import { useState } from 'react'
import {Row, Col, Form, InputGroup, Card, Button} from 'react-bootstrap'
import { app } from '../firebaseInit';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { Link } from 'react-router-dom'
import { getFirestore, doc, setDoc } from 'firebase/firestore'


const JoinPage = ({history}) => {
    const db = getFirestore(app);
    const [loading, setLoading] = useState(false);
    const auth=getAuth(app);
    const [form, setForm] = useState({
        email:'pink@inha.com',
        password:'12345678'
    });
    const {email, password} = form;
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const onJoin = () => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(async success=>{
            const uid = success.user.uid;
            await setDoc(doc(db, 'user', uid), {email:email, name:'홍길동', photo:'', address:'', phone:''});
            setLoading(false);
            sessionStorage.setItem('target', '/');
            history.push('/login');
        })
        .catch(error=>{
            setLoading(false);
            
        });
    }

    if(loading) return <h1 className='text-center my-5'>로딩중...</h1>

    return (
        <Row className='justify-content-center my-5'>
        <Col md={6}>
            <h1 className='text-center'>회원등록</h1>
            <Card className='p-3'>
                <Form>
                    <InputGroup className='my-2'>
                        <InputGroup.Text>이 메 일</InputGroup.Text>
                        <Form.Control value={email}
                            onChange={onChange} name="email"/>
                    </InputGroup>
                    <InputGroup className='my-2'>
                        <InputGroup.Text>비밀번호</InputGroup.Text>
                        <Form.Control 
                            onChange={onChange} name="password"
                            value={password} type="password"/>
                    </InputGroup>
                    <Button 
                        onClick={ onJoin }
                        className='w-100 mt-3'>회원등록</Button>
                    <div className='text-end my-2'>
                        <Link to="/login">로그인</Link>
                    </div>    
                </Form>
            </Card>
        </Col>
    </Row>
    )
}

export default JoinPage