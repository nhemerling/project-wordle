import React from 'react';

function WonBanner({ numOfGuesses }) {
    return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            {' '}
            <strong>
                {numOfGuesses === 1
                    ? '1 guess'
                    : `${numOfGuesses} guessses`
                }
            </strong>
            .
          </p>
        </div>
    )
}

export default WonBanner;
