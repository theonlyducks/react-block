import './App.css';

import { useState } from "react";
import { BlockDuck } from "../src";

export function App() {
    const [blocking, setBlocking] = useState(false);
    return (
        <div className="container">
            <div className="content">
                <BlockDuck blocking={blocking} opacity={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida augue a massa ornare
                    sollicitudin. Aliquam a tortor finibus, fermentum justo ut, lobortis nisl. Curabitur suscipit lectus
                    metus, feugiat pulvinar lectus viverra a. Praesent tincidunt, ex consequat tempus aliquet, turpis ex
                    dapibus metus, a tempus sem lorem in eros. Donec nec rutrum mauris. Praesent iaculis gravida justo,
                    sed tempus ante luctus nec. Vivamus at dapibus elit. Duis vitae sapien rhoncus, convallis velit
                    eleifend, pretium nulla. In hac habitasse platea dictumst. Aenean id ante non nisl facilisis
                    lobortis ac eget dolor.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida augue a massa ornare
                    sollicitudin. Aliquam a tortor finibus, fermentum justo ut, lobortis nisl. Curabitur suscipit lectus
                    metus, feugiat pulvinar lectus viverra a. Praesent tincidunt, ex consequat tempus aliquet, turpis ex
                    dapibus metus, a tempus sem lorem in eros. Donec nec rutrum mauris. Praesent iaculis gravida justo,
                    sed tempus ante luctus nec. Vivamus at dapibus elit. Duis vitae sapien rhoncus, convallis velit
                    eleifend, pretium nulla. In hac habitasse platea dictumst. Aenean id ante non nisl facilisis
                    lobortis ac eget dolor.
                </BlockDuck>
                <button
                    type="button"
                    className="button"
                    onClick={() => setBlocking(!blocking)}
                >
                    Toggle Block
                </button>
            </div>
        </div>
    )
}
