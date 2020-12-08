import React, { useState } from 'react';
import { BottomModal } from 'react-spring-modal';
import 'react-spring-modal/dist/index.css';

/**
 * Renders a white modal that slides up from the bottom and back down when leaving.
 *
 * Has a built-in max-width for larger devices.
 * The max-width for smaller devices is the entire screen.
 */
export function Bottom() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(true)}>Open bottom modal</button>
            <BottomModal
                isOpen={isOpen}
                onRequestClose={() => setOpen(false)}
                style={{
                    backgroundColor: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '0.25rem',
                }}
            >
                <h1>My Bottom Modal</h1>
            </BottomModal>
        </>
    );
}
