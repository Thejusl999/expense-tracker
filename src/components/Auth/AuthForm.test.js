import { render,screen } from "@testing-library/react";
import AuthForm from "./AuthForm";

describe('AuthForm test suite',()=>{
    test('render AuthForm',()=>{
        render(<AuthForm/>);
        const text=screen.getByLabelText('Email',{exact:false});
        expect(text).toBeInTheDocument();
    });
    test('renders signup if request succeeds',async ()=>{
        window.fetch=jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async ()=>[{email:'test@gmail.com', password:'testPassword',returnSecureToken:true}],
        });
        render(<AuthForm/>);
        const item=await screen.findAllByRole('divitem',{},{});
        expect(item).not.toHaveLength(0);
    });
    test('renders signup if request succeeds',async ()=>{
        window.fetch=jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async ()=>[{email:'test@gmail.com', password:'testPassword',returnSecureToken:true}],
        });
        render(<AuthForm/>);
        const item=await screen.findAllByRole('generic',{},{});
        expect(item).not.toHaveLength(0);
    });
});