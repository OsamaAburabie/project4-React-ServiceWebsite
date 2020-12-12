import React, { Component } from 'react';
import Typed from 'react-typed';

class MyComponent extends Component {
    render() {

        return (
            <div class="contentText">
                <h1> <Typed
                    strings={['Welcome to JMOM']}
                    typeSpeed={110}
                    cursorChar={''}
                />
                </h1>
                <p>
                    <Typed
                        strings={[
                            ' The Best Website to Find the Perfect Place to Spend your Vacations']}
                        typeSpeed={70}
                        backSpeed={60}
                        cursorChar={'_'}
                        loop >
                    </Typed></p>
                <p>
                    <Typed
                        strings={['JMOM forget your "HMOM"  ; )']}
                        typeSpeed={90}
                        cursorChar={''}
                    >
                    </Typed>
                </p>
            </div >
        );
    }
}

export default MyComponent
