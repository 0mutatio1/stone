import React from 'react';
import Button  from './button';

export default {
    title: 'Button',
    component: Button,
};

export const Default = () => <Button label="Default" />

export const Primary = () => <Button theme="primary" label="Primary" />

export const Disabled = () => <Button theme="primary" disabled={true} label="Disabled" />

export const Clicked = () => {
    const onClick = () => console.log('clicked')
    return <Button theme="primary" disabled={false} onClick={onClick} label="Click"/>
}

export const Small = () => <Button theme="primary" size="sm" label="Small"/>

export const Normal = () => <Button theme="primary" label="Normal"/>

export const Middle = () => <Button theme="primary" size="md" label="Middle"/>

export const Large = () => <Button theme="primary" size="lg" label="Large"/>