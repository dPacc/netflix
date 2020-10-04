import React from 'react';
import { useContent } from '../hooks';

export default function Signup() {
    const { series } = useContent('series');
    const { films } = useContent('films');
    console.log(series);
    console.log(films);

    return (
        <div>
            <p>Hello from Browse</p>
        </div>
    );
}
