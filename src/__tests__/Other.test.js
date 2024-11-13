import { fireEvent, render } from "@testing-library/react"
import Other from "../Other"


test('test case one', ()=>{
    render(<Other/>);
    let input = screen.getByRole('text');
    fireEvent.change(input,{target:{value:'a'}});
    expect(input.value).toBe('atest');
})