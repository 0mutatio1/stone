import React from 'react';
import Button  from './button';

export default {
    title: 'Button',
    component: Button,
};

export const Primary = () => <Button primary label={"Primary"} />

export const Disabled = () => <Button primary disabled={true} label={"Disabled"} />

export const Clicked = () => {
    const onClick = () => console.log('clicked')
    return <Button primary disabled={false} onClick={onClick} label={"Click"}/>
}